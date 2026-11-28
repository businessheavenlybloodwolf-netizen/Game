// Beat Saber (PC, auch über Virtual Desktop / Link / SteamVR).
// Liest die Spiel-Events, die eine dieser Mods lokal per WebSocket ausgibt:
//   - DataPuller      ws://127.0.0.1:2946/BSDataPuller/LiveData und /MapData
//   - HttpSiraStatus  ws://127.0.0.1:6557/socket   (Protokoll von "HTTP Status")
// Die Bridge versucht beide; es reicht, eine der Mods zu installieren.

const RETRY_MS = 3000;

export function startBeatSaber(cfg, engine, log = console.log) {
  const stops = [];
  const src = 'Beat Saber';
  const ev = (type, side) => engine.trigger({ type, source: src, side });
  const sideOf = (saber) => (saber === 'SaberA' || saber === 0 ? 'left' : saber === 'SaberB' || saber === 1 ? 'right' : undefined);

  // Wände: dauerhafte Vibration, solange man drin steht.
  let wallTimer = null;
  const wall = (on, autoOffMs = 0) => {
    engine.setLevel('bs:wall', on ? cfg.wallIntensity : 0);
    clearTimeout(wallTimer);
    if (on && autoOffMs) wallTimer = setTimeout(() => engine.setLevel('bs:wall', 0), autoOffMs);
  };

  // Combo als leichtes Grundsummen (optional).
  const combo = (n) => {
    const c = cfg.comboLevel;
    if (!c?.enabled) return;
    engine.setLevel('bs:combo', Math.min(1, n / c.at) * c.max);
  };
  const resetLevels = () => { wall(false); engine.setLevel('bs:combo', 0); };

  // ---------- DataPuller ----------
  if (cfg.dataPuller) {
    let last = null;
    stops.push(connect(`${cfg.dataPuller}/LiveData`, 'DataPuller', log, (d) => {
      if (last && (d.Misses < last.Misses || d.NotesSpawned < last.NotesSpawned)) last = null; // neuer Song
      if (last) {
        const misses = d.Misses - last.Misses;
        const hits = d.Combo > last.Combo ? Math.min(d.Combo - last.Combo, 3) : 0;
        for (let i = 0; i < misses && i < 3; i++) ev('bs_miss');
        for (let i = 0; i < hits; i++) ev('bs_hit', sideOf(d.ColorType));
        // Energie sinkt ohne neuen Fehler: Wand (oder Bombe, die DataPuller nicht extra meldet)
        if (d.PlayerHealth < last.PlayerHealth && misses === 0) wall(true, 250);
        combo(d.Combo);
      }
      last = { Misses: d.Misses ?? 0, Combo: d.Combo ?? 0, PlayerHealth: d.PlayerHealth ?? 100, NotesSpawned: d.NotesSpawned ?? 0 };
      if (d.PlayerHealth != null) engine.setHealth(d.PlayerHealth > 0 ? d.PlayerHealth / 100 : null);
    }));

    let map = {};
    stops.push(connect(`${cfg.dataPuller}/MapData`, null, log, (d) => {
      if (d.LevelFailed && !map.LevelFailed) ev('death');
      else if (d.LevelFinished && !map.LevelFinished && !d.LevelFailed) ev('bs_clear');
      if (!d.InLevel || d.LevelPaused) { resetLevels(); engine.setHealth(null); }
      map = d;
    }));
  }

  // ---------- HttpSiraStatus / HTTP Status ----------
  if (cfg.httpStatus) {
    stops.push(connect(cfg.httpStatus, 'HttpSiraStatus', log, (d) => {
      const perf = d.status?.performance;
      switch (d.event) {
        case 'noteCut':
        case 'noteFullyCut': {
          if (d.event === 'noteFullyCut') break; // nur einmal pro Note
          const c = d.noteCut || {};
          const bad = c.speedOK === false || c.directionOK === false || c.saberTypeOK === false || c.wasCutTooSoon === true;
          ev(bad ? 'bs_miss' : 'bs_hit', sideOf(c.saberType));
          break;
        }
        case 'noteMissed': ev('bs_miss'); break;
        case 'bombCut': ev('bs_bomb'); break;
        case 'obstacleEnter': wall(true); break;
        case 'obstacleExit': wall(false); break;
        case 'failed': resetLevels(); ev('death'); break;
        case 'finished': resetLevels(); ev('bs_clear'); break;
        case 'menu': case 'pause': case 'softFailed': resetLevels(); engine.setHealth(null); break;
        default: break;
      }
      if (perf?.combo != null) combo(perf.combo);
      if (perf?.energy != null && d.event !== 'menu') engine.setHealth(perf.energy > 0 ? perf.energy : null);
    }));
  }

  return () => { stops.forEach((s) => s()); resetLevels(); };
}

// WebSocket mit automatischem Neuverbinden; meldet nur Statuswechsel, kein Dauer-Spam.
function connect(url, name, log, onData) {
  let ws = null;
  let stopped = false;
  let wasOpen = false;
  let timer = null;

  const open = () => {
    if (stopped) return;
    try { ws = new WebSocket(url); } catch { timer = setTimeout(open, RETRY_MS); return; }
    ws.onopen = () => { wasOpen = true; if (name) log(`[Beat Saber] verbunden mit ${name}`); };
    ws.onmessage = (m) => {
      let d;
      try { d = JSON.parse(m.data); } catch { return; }
      try { onData(d); } catch (e) { log(`[Beat Saber] Fehler: ${e.message}`); }
    };
    ws.onerror = () => {};
    ws.onclose = () => {
      if (wasOpen && name) log(`[Beat Saber] ${name} getrennt (Spiel beendet?)`);
      wasOpen = false;
      if (!stopped) timer = setTimeout(open, RETRY_MS);
    };
  };
  open();
  return () => { stopped = true; clearTimeout(timer); ws?.close(); };
}
