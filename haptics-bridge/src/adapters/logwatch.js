// Liest Logdateien mit (wie "tail -f") und löst bei passenden Zeilen Events aus.
// Funktioniert bei jedem Spiel, das Schaden oder Tod in eine Logdatei schreibt.

import fs from 'node:fs';

export function watchLog(watcher, engine, log = console.log) {
  const rules = watcher.rules.map((r) => ({ ...r, re: new RegExp(r.match, r.flags ?? 'i') }));
  let offset = null;
  let rest = '';
  let warned = false;

  const poll = () => {
    let st;
    try { st = fs.statSync(watcher.file); } catch {
      if (!warned) log(`[${watcher.name}] Datei nicht gefunden, warte: ${watcher.file}`);
      warned = true; offset = 0; return;
    }
    if (warned) { log(`[${watcher.name}] Datei gefunden.`); warned = false; }
    if (offset === null) { offset = st.size; return; } // beim Start nur neue Zeilen
    if (st.size < offset) { offset = 0; rest = ''; }    // Datei wurde neu angelegt
    if (st.size === offset) return;

    const fd = fs.openSync(watcher.file, 'r');
    const buf = Buffer.alloc(st.size - offset);
    fs.readSync(fd, buf, 0, buf.length, offset);
    fs.closeSync(fd);
    offset = st.size;

    const lines = (rest + buf.toString('utf8')).split(/\r?\n/);
    rest = lines.pop();
    for (const line of lines) {
      for (const r of rules) {
        const m = r.re.exec(line);
        if (!m) continue;
        engine.trigger({
          type: r.event,
          amount: r.amountGroup != null ? Number(m[r.amountGroup]) : undefined,
          max: r.max,
          source: watcher.name,
        });
        break;
      }
    }
  };

  log(`[${watcher.name}] Beobachte ${watcher.file}`);
  const timer = setInterval(poll, watcher.pollMs ?? 200);
  poll();
  return () => clearInterval(timer);
}
