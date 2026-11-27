// VRChat über OSC: VRChat schickt Avatar-Parameter per UDP (Standard-Port 9001).
// Offizielle Schnittstelle, unbedenklich für Easy Anti-Cheat.
//
// Jeder Eintrag in cfg.params verknüpft einen Avatar-Parameter mit der Vibration:
//   mode "level":   Wert (0..1, z. B. Proximity-Contact) wird direkt zur Stärke, mal "scale"
//   mode "trigger": wenn der Wert über "threshold" steigt, wird "event" ausgelöst (z. B. "hit")

import dgram from 'node:dgram';

export function startVrchatOsc(cfg, engine, log = console.log) {
  const params = cfg.params.map((p) => ({
    mode: 'level', scale: 1, threshold: 0.5, event: 'hit', ...p,
    address: p.name.startsWith('/') ? p.name : `/avatar/parameters/${p.name}`,
    above: false,
  }));
  const byAddress = new Map(params.map((p) => [p.address, p]));
  const sock = dgram.createSocket({ type: 'udp4', reuseAddr: true });

  const onValue = (address, value) => {
    if (address === '/avatar/change') {
      engine.clearLevels('osc:');
      for (const p of params) p.above = false;
      log('[VRChat] Avatar gewechselt.');
      return;
    }
    const p = byAddress.get(address);
    if (!p) return;
    const v = typeof value === 'boolean' ? (value ? 1 : 0) : Number(value);
    if (!Number.isFinite(v)) return;
    if (p.mode === 'level') {
      const adj = v < (p.deadzone ?? 0.02) ? 0 : v * p.scale;
      engine.setLevel(`osc:${p.address}`, adj);
    } else if (p.mode === 'trigger') {
      if (!p.above && v >= p.threshold) engine.trigger({ type: p.event, source: 'VRChat' });
      p.above = v >= p.threshold;
    }
  };

  sock.on('message', (buf) => {
    try { for (const [addr, args] of parseOsc(buf)) if (args.length) onValue(addr, args[0]); else onValue(addr, null); } catch { /* kaputtes Paket ignorieren */ }
  });
  sock.on('error', (e) => {
    log(e.code === 'EADDRINUSE'
      ? `[VRChat] Port ${cfg.port} ist belegt (läuft OscGoesBrrr oder ein anderes OSC-Tool?). VRChat-Adapter aus.`
      : `[VRChat] Fehler: ${e.message}`);
    sock.close();
  });
  sock.bind(cfg.port, '127.0.0.1', () => log(`[VRChat] OSC hört auf UDP ${cfg.port} (${params.length} Parameter)`));

  if (cfg.logUnknown) {
    // Hilfe beim Einrichten: zeigt einmalig jeden Parameter, den dein Avatar sendet.
    const seen = new Set();
    sock.on('message', (buf) => {
      try {
        for (const [addr] of parseOsc(buf)) if (!byAddress.has(addr) && !seen.has(addr)) { seen.add(addr); log(`[VRChat] Parameter gesehen: ${addr}`); }
      } catch {}
    });
  }
  return () => sock.close();
}

// --- OSC-Parser (Nachrichten und Bundles) ---

function readString(buf, off) {
  const end = buf.indexOf(0, off);
  if (end < 0) throw new Error('OSC: String ohne Ende');
  return [buf.toString('utf8', off, end), (end + 4) & ~3];
}

export function parseOsc(buf, out = []) {
  if (buf.length >= 8 && buf.toString('ascii', 0, 8) === '#bundle\0') {
    let off = 16; // "#bundle\0" + 8 Byte Zeitstempel
    while (off + 4 <= buf.length) {
      const size = buf.readInt32BE(off);
      off += 4;
      parseOsc(buf.subarray(off, off + size), out);
      off += size;
    }
    return out;
  }
  let [address, off] = readString(buf, 0);
  if (off >= buf.length) { out.push([address, []]); return out; }
  let tags;
  [tags, off] = readString(buf, off);
  const args = [];
  for (const t of tags.slice(1)) {
    if (t === 'f') { args.push(buf.readFloatBE(off)); off += 4; }
    else if (t === 'i') { args.push(buf.readInt32BE(off)); off += 4; }
    else if (t === 'T') args.push(true);
    else if (t === 'F') args.push(false);
    else if (t === 's') { let s; [s, off] = readString(buf, off); args.push(s); }
    else break; // andere Typen braucht VRChat hier nicht
  }
  out.push([address, args]);
  return out;
}
