#!/usr/bin/env node
// Haptics Bridge: Schaden in Spielen -> Vibration über Intiface.
//   node bridge.mjs                 normal starten (config.json, sonst Standardwerte)
//   node bridge.mjs --dry           ohne Intiface, Stärke nur in der Konsole anzeigen
//   node bridge.mjs --config x.json andere Konfigurationsdatei

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Intiface, DryOutput } from './src/intiface.js';
import { Engine } from './src/engine.js';
import { startServer } from './src/server.js';
import { cs2, dota2 } from './src/adapters/valve-gsi.js';
import { watchLog } from './src/adapters/logwatch.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const ci = args.indexOf('--config');
const cfgPath = ci >= 0 ? path.resolve(args[ci + 1]) : path.join(here, 'config.json');

const time = () => new Date().toLocaleTimeString('de-DE');
const log = (msg) => console.log(`${time()}  ${msg}`);

function merge(base, over) {
  if (Array.isArray(over) || typeof over !== 'object' || over === null) return over ?? base;
  const out = { ...base };
  for (const k of Object.keys(over)) out[k] = typeof base?.[k] === 'object' && !Array.isArray(base[k]) ? merge(base[k], over[k]) : over[k];
  return out;
}

const defaults = JSON.parse(fs.readFileSync(path.join(here, 'config.example.json'), 'utf8'));
defaults.logWatchers = [];
let cfg = defaults;
if (fs.existsSync(cfgPath)) {
  try {
    cfg = merge(defaults, JSON.parse(fs.readFileSync(cfgPath, 'utf8')));
    log(`Konfiguration geladen: ${cfgPath}`);
  } catch (e) {
    console.error(`Konfiguration fehlerhaft (${cfgPath}): ${e.message}`);
    process.exit(1);
  }
} else {
  log('Keine config.json gefunden, nutze Standardwerte (Vorlage: config.example.json).');
}

const output = dry ? new DryOutput() : new Intiface({ url: cfg.intifaceUrl, deviceFilter: cfg.devices, log });
output.start();
const engine = new Engine(cfg, output, log);

const routes = {};
if (cfg.games.cs2) routes['/cs2'] = cs2(engine);
if (cfg.games.dota2) routes['/dota2'] = dota2(engine);
const server = startServer({ port: cfg.port, token: cfg.token, engine, output, routes, log });

const stopWatchers = cfg.logWatchers.filter((w) => w.enabled !== false).map((w) => watchLog(w, engine, log));

let quitting = false;
async function quit() {
  if (quitting) return;
  quitting = true;
  log('Beende, stoppe alle Geräte ...');
  stopWatchers.forEach((s) => s());
  engine.stop();
  server.close();
  await output.stop();
  process.exit(0);
}
process.on('SIGINT', quit);
process.on('SIGTERM', quit);
