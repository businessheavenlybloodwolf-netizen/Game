// Liest Logdateien mit (wie "tail -f") und löst bei passenden Zeilen Events aus.
// Funktioniert bei jedem Spiel, das Schaden oder Tod in eine Logdatei schreibt.
//
// Regel-Felder: match (Regex), event, amountGroup, max oder maxGroup.
// event "health" mit valueGroup setzt die Lebenspunkte (0..1) für den Herzschlag.

import fs from 'node:fs';
import { resolveSteamPath } from '../steam.js';

export function watchLog(watcher, engine, log = console.log) {
  const file = resolveSteamPath(watcher.file);
  const rules = watcher.rules.map((r) => ({ ...r, re: new RegExp(r.match, r.flags ?? 'i') }));
  let offset = null;
  let rest = '';
  let warned = false;

  const apply = (line) => {
    for (const r of rules) {
      const m = r.re.exec(line);
      if (!m) continue;
      if (r.event === 'health') {
        const v = Number(m[r.valueGroup ?? 1]);
        engine.setHealth(Number.isFinite(v) && v > 0 ? v : null);
      } else {
        engine.trigger({
          type: r.event,
          amount: r.amountGroup != null ? Number(m[r.amountGroup]) : undefined,
          max: r.maxGroup != null ? Number(m[r.maxGroup]) : r.max,
          source: watcher.name,
        });
      }
      return;
    }
  };

  const poll = () => {
    let st;
    try { st = fs.statSync(file); } catch {
      if (!warned) log(`[${watcher.name}] Datei (noch) nicht da, warte: ${file}`);
      warned = true; offset = 0; return;
    }
    if (warned) { log(`[${watcher.name}] Datei gefunden.`); warned = false; }
    if (offset === null) { offset = st.size; return; } // beim Start nur neue Zeilen
    if (st.size < offset) { offset = 0; rest = ''; }    // Datei wurde neu angelegt
    if (st.size === offset) return;

    const fd = fs.openSync(file, 'r');
    const buf = Buffer.alloc(st.size - offset);
    fs.readSync(fd, buf, 0, buf.length, offset);
    fs.closeSync(fd);
    offset = st.size;

    const lines = (rest + buf.toString('utf8')).split(/\r?\n/);
    rest = lines.pop();
    lines.forEach(apply);
  };

  log(`[${watcher.name}] Beobachte ${file}`);
  const timer = setInterval(poll, watcher.pollMs ?? 100);
  poll();
  return () => clearInterval(timer);
}
