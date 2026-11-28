// Auto-Update für HapticsBridge.exe über GitHub-Releases.
// Ablauf: neueste Version abfragen -> falls neuer: HapticsBridge.exe herunterladen,
// SHA-256 mit der Angabe von GitHub vergleichen, alte .exe umbenennen, neue an ihre
// Stelle legen und neu starten (im selben Fenster). Die eigene config.json bleibt unverändert.
// Dazu werden, falls vorhanden, auch die Minecraft-Mod und das GMod-Addon aktualisiert.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawn } from 'node:child_process';
import { steamLibraries } from './steam.js';

export const DEFAULT_API = 'https://api.github.com/repos/businessheavenlybloodwolf-netizen/Game/releases/latest';
const TAG_PREFIX = 'haptics-v';

export function newer(a, b) {
  const pa = a.split('.').map(Number), pb = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) if ((pa[i] || 0) !== (pb[i] || 0)) return (pa[i] || 0) > (pb[i] || 0);
  return false;
}

async function getJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'HapticsBridge-Updater' }, signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function download(asset) {
  const res = await fetch(asset.browser_download_url, { headers: { 'User-Agent': 'HapticsBridge-Updater' }, signal: AbortSignal.timeout(180000) });
  if (!res.ok) throw new Error(`Download ${asset.name}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const want = asset.digest?.startsWith('sha256:') ? asset.digest.slice(7) : null;
  if (!want) throw new Error(`${asset.name}: keine Prüfsumme vorhanden, Update abgebrochen`);
  const have = crypto.createHash('sha256').update(buf).digest('hex');
  if (have !== want) throw new Error(`${asset.name}: Prüfsumme stimmt nicht, Update abgebrochen`);
  return buf;
}

// Ersetzt eine Datei sicher: erst neben das Ziel schreiben, dann umbenennen.
function replaceFile(target, buf) {
  const tmp = `${target}.neu`;
  fs.writeFileSync(tmp, buf);
  fs.renameSync(tmp, target);
}

// Minecraft-Mod und GMod-Addon aktualisieren, falls sie installiert sind.
async function updateGameFiles(assets, log) {
  const mcMods = path.join(process.env.APPDATA || '', '.minecraft', 'mods');
  const modAsset = assets.find((a) => /^haptics-bridge-minecraft-.*\.jar$/.test(a.name));
  if (modAsset && process.env.APPDATA && fs.existsSync(mcMods)) {
    const old = fs.readdirSync(mcMods).filter((f) => /^haptics-bridge-minecraft-.*\.jar$/.test(f));
    if (old.length && !old.includes(modAsset.name)) {
      fs.writeFileSync(path.join(mcMods, modAsset.name), await download(modAsset));
      for (const f of old) fs.rmSync(path.join(mcMods, f), { force: true });
      log(`Update: Minecraft-Mod aktualisiert (${modAsset.name}).`);
    }
  }

  const luaAsset = assets.find((a) => a.name === 'haptics_bridge.lua');
  if (luaAsset) {
    for (const lib of steamLibraries()) {
      const lua = path.join(lib, 'steamapps', 'common', 'GarrysMod', 'garrysmod', 'addons', 'haptics_bridge', 'lua', 'autorun', 'server', 'haptics_bridge.lua');
      if (!fs.existsSync(lua)) continue;
      const buf = await download(luaAsset);
      if (!buf.equals(fs.readFileSync(lua))) { replaceFile(lua, buf); log("Update: Garry's-Mod-Addon aktualisiert."); }
    }
  }
}

/**
 * Prüft auf ein Update und installiert es. Gibt true zurück, wenn die neue Version
 * gestartet wurde (dann soll der Aufrufer nichts weiter tun).
 */
export async function autoUpdate({ current, exePath, args, log, api = DEFAULT_API }) {
  const dir = path.dirname(exePath);
  const oldExe = path.join(dir, 'HapticsBridge.alt.exe');
  fs.rmSync(oldExe, { force: true }); // Rest vom letzten Update aufräumen

  let rel;
  try { rel = await getJson(api); } catch (e) {
    log(`Update-Prüfung nicht möglich (${e.message}), starte Version ${current}.`);
    return false;
  }
  const latest = String(rel.tag_name || '').replace(TAG_PREFIX, '');
  if (!/^\d+\.\d+\.\d+$/.test(latest) || !newer(latest, current)) {
    log(`Version ${current} ist aktuell.`);
    return false;
  }

  log(`Neue Version ${latest} gefunden (du hast ${current}), lade herunter ...`);
  try {
    const assets = rel.assets || [];
    const exeAsset = assets.find((a) => a.name === 'HapticsBridge.exe');
    if (!exeAsset) throw new Error('HapticsBridge.exe fehlt im Release');
    const buf = await download(exeAsset);
    try { await updateGameFiles(assets, log); } catch (e) { log(`Update der Spiel-Dateien übersprungen: ${e.message}`); }

    // Eine laufende .exe kann unter Windows nicht überschrieben, aber umbenannt werden.
    const tmp = `${exePath}.neu`;
    fs.writeFileSync(tmp, buf, { mode: 0o755 });
    fs.renameSync(exePath, oldExe);
    try { fs.renameSync(tmp, exePath); } catch (e) { fs.renameSync(oldExe, exePath); throw e; }
  } catch (e) {
    log(`Update fehlgeschlagen (${e.message}), starte Version ${current}.`);
    return false;
  }

  log(`Update auf ${latest} installiert, starte neu ...`);
  const child = spawn(exePath, [...args, '--nach-update'], { stdio: 'inherit' });
  child.on('exit', (code) => process.exit(code ?? 0));
  child.on('error', (e) => { log(`Neustart fehlgeschlagen: ${e.message}. Bitte HapticsBridge.exe neu öffnen.`); process.exit(1); });
  // Strg+C geht an beide Prozesse im selben Fenster; dieser hier wartet nur.
  process.on('SIGINT', () => {});
  return true;
}
