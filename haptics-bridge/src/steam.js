// Findet Spiele-Ordner in allen Steam-Bibliotheken (auch auf anderen Laufwerken).
// In Pfaden kann {steam:Ordnername} stehen, z. B. {steam:GarrysMod}/garrysmod/data/x.txt

import fs from 'node:fs';
import path from 'node:path';

const ROOTS = [
  'C:/Program Files (x86)/Steam',
  'C:/Program Files/Steam',
  process.env.HOME && path.join(process.env.HOME, '.steam/steam'),
  process.env.HOME && path.join(process.env.HOME, '.local/share/Steam'),
].filter(Boolean);

let libraries = null;

export function steamLibraries() {
  if (libraries) return libraries;
  const found = new Set();
  for (const root of ROOTS) {
    const vdf = path.join(root, 'steamapps', 'libraryfolders.vdf');
    if (!fs.existsSync(vdf)) continue;
    found.add(path.resolve(root));
    const text = fs.readFileSync(vdf, 'utf8');
    for (const m of text.matchAll(/"path"\s+"((?:[^"\\]|\\.)*)"/g)) found.add(path.resolve(m[1].replace(/\\\\/g, '\\')));
  }
  libraries = [...found];
  return libraries;
}

export function resolveSteamPath(p) {
  return p.replace(/\{steam:([^}]+)\}/g, (all, game) => {
    for (const lib of steamLibraries()) {
      const dir = path.join(lib, 'steamapps', 'common', game);
      if (fs.existsSync(dir)) return dir.replace(/\\/g, '/');
    }
    return all; // nicht gefunden: Platzhalter bleibt, Logwatcher meldet die fehlende Datei
  });
}
