#!/usr/bin/env node
// Haptics Bridge: Schaden in Spielen -> Vibration über Intiface.
//   node bridge.mjs                 normal starten (config.json, sonst Standardwerte)
//   node bridge.mjs --dry           ohne Intiface, Stärke nur in der Konsole anzeigen
//   node bridge.mjs --vrchat        VRChat-OSC einschalten
//   node bridge.mjs --config x.json andere Konfigurationsdatei

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Intiface, DryOutput } from './src/intiface.js';
import { Engine } from './src/engine.js';
import { startServer } from './src/server.js';
import { cs2, dota2 } from './src/adapters/valve-gsi.js';
import { watchLog } from './src/adapters/logwatch.js';
import { startVrchatOsc } from './src/adapters/vrchat-osc.js';
import { startBeatSaber } from './src/adapters/beatsaber.js';
import exampleConfig from './config.example.json' with { type: 'json' };

// Als einzelne .exe (Node SEA) liegt config.json neben der .exe, sonst neben diesem Skript.
const isExe = !/^node(\.exe)?$/i.test(path.basename(process.execPath));
const here = isExe ? path.dirname(process.execPath) : path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const vrc = args.includes('--vrchat');
const ci = args.indexOf('--config');
const cfgPath = ci >= 0 ? path.resolve(args[ci + 1]) : path.join(here, 'config.json');

const time = () => new Date().toLocaleTimeString('de-DE');
const log = (msg) => console.log(`${time()}  ${msg}`);

// Bei der .exe bleibt das Fenster nach einem Fehler offen, damit man die Meldung lesen kann.
function fatal(msg) {
  console.error(msg);
  if (!isExe || !process.stdin.isTTY) process.exit(1);
  console.error('Enter drücken zum Schließen ...');
  process.stdin.once('data', () => process.exit(1));
}

function merge(base, over) {
  if (Array.isArray(over) || typeof over !== 'object' || over === null) return over ?? base;
  const out = { ...base };
  for (const k of Object.keys(over)) out[k] = typeof base?.[k] === 'object' && !Array.isArray(base[k]) ? merge(base[k], over[k]) : over[k];
  return out;
}

// Zeilen, die das Lua-Addon (gmod-addon/) in garrysmod/data/haptics_bridge.txt schreibt.
const GMOD_RULES = [
  { match: '^HB damage ([\\d.]+) ([\\d.]+)', event: 'damage', amountGroup: 1, maxGroup: 2 },
  { match: '^HB death', event: 'death' },
  { match: '^HB health ([\\d.-]+)', event: 'health', valueGroup: 1 },
];

function loadConfig() {
  const defaults = structuredClone(exampleConfig);
  defaults.logWatchers = [];
  if (!fs.existsSync(cfgPath)) {
    log('Keine config.json gefunden, nutze Standardwerte (Vorlage: config.example.json).');
    return defaults;
  }
  try {
    const cfg = merge(defaults, JSON.parse(fs.readFileSync(cfgPath, 'utf8').replace(/^\uFEFF/, '')));
    log(`Konfiguration geladen: ${cfgPath}`);
    return cfg;
  } catch (e) {
    fatal(`Konfiguration fehlerhaft (${cfgPath}): ${e.message}`);
    return null;
  }
}

function start(cfg) {
  const output = dry ? new DryOutput() : new Intiface({ url: cfg.intifaceUrl, deviceFilter: cfg.devices, log });
  output.start();
  const engine = new Engine(cfg, output, log);

  const routes = {};
  if (cfg.games.cs2) routes['/cs2'] = cs2(engine);
  if (cfg.games.dota2) routes['/dota2'] = dota2(engine);
  const server = startServer({ port: cfg.port, token: cfg.token, engine, output, routes, log, fatal });

  const stops = cfg.logWatchers.filter((w) => w.enabled !== false).map((w) => watchLog(w, engine, log));
  if (vrc) cfg.vrchat.enabled = true;
  if (cfg.vrchat.enabled) stops.push(startVrchatOsc(cfg.vrchat, engine, log));
  if (cfg.beatsaber.enabled) {
    log('[Beat Saber] warte auf das Spiel (Mod DataPuller oder HttpSiraStatus) ...');
    stops.push(startBeatSaber(cfg.beatsaber, engine, log));
  }
  if (cfg.gmod.enabled) stops.push(watchLog({ name: "Garry's Mod", file: cfg.gmod.file, rules: GMOD_RULES }, engine, log));

  let quitting = false;
  const quit = async () => {
    if (quitting) return;
    quitting = true;
    log('Beende, stoppe alle Geräte ...');
    stops.forEach((s) => s());
    engine.stop();
    server.close();
    await output.stop();
    process.exit(0);
  };
  process.on('SIGINT', quit);
  process.on('SIGTERM', quit);
  process.on('SIGHUP', quit); // Fenster geschlossen (Windows)
}

const cfg = loadConfig();
if (cfg) start(cfg);
