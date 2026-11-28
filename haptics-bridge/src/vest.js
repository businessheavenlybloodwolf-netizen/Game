// bHaptics (TactSuit-Westen, Tactosy-Sleeves, Tactal) über die bHaptics-Player-App.
// Die App muss am PC laufen; sie stellt lokal einen WebSocket bereit (Port 15881).
//
// Westen haben vorne und hinten je 20 Motoren (4 Spalten x 5 Reihen, Index = Reihe * 4 + Spalte).
// Muster: "burst" (ganze Weste), "side" (linke oder rechte Hälfte, z. B. Beat-Saber-Säbel),
// "tap" (wie side, nur kurz und leicht), "wave" (Welle von unten nach oben), "death" (drei starke Stöße).

const RETRY_MS = 3000;
const ALL = Array.from({ length: 20 }, (_, i) => i);
const COL = (cols) => ALL.filter((i) => cols.includes(i % 4));
const ROW = (r) => [r * 4, r * 4 + 1, r * 4 + 2, r * 4 + 3];

export class Vest {
  constructor(cfg, log = console.log) {
    this.cfg = cfg;
    this.log = log;
    this.ws = null;
    this.connected = false;
    this.stopped = false;
    this.timers = new Set();
    this.lastFrame = 0;
    this.seq = 0;
  }

  start() { this.connect(); }

  connect() {
    if (this.stopped) return;
    let ws;
    try { ws = new WebSocket(this.cfg.url); } catch { this.retry(); return; }
    this.ws = ws;
    ws.onopen = () => {
      this.connected = true;
      this.log('bHaptics Player verbunden.');
    };
    ws.onmessage = (m) => {
      let d;
      try { d = JSON.parse(m.data); } catch { return; }
      const pos = d.ConnectedPositions;
      if (Array.isArray(pos)) {
        const key = pos.join(',');
        if (key !== this.positions) {
          this.positions = key;
          this.log(pos.length ? `bHaptics-Geräte: ${pos.join(', ')}` : 'bHaptics: kein Gerät verbunden (in der bHaptics-App koppeln).');
        }
      }
    };
    ws.onerror = () => {};
    ws.onclose = () => {
      if (this.connected) this.log('bHaptics Player getrennt, verbinde neu ...');
      else if (!this.warned) { this.log('bHaptics Player nicht erreichbar, versuche es weiter im Hintergrund.'); this.warned = true; }
      this.connected = false;
      this.retry();
    };
  }

  retry() { if (!this.stopped) setTimeout(() => this.connect(), RETRY_MS); }

  // Einen Frame an eine Position schicken. dots: Motor-Indizes, intensity: 0..1
  frame(position, dots, intensity, ms) {
    if (!this.connected || !dots.length || intensity <= 0) return;
    const value = Math.round(Math.min(1, intensity * this.cfg.maxIntensity) * 100);
    if (value <= 0) return;
    this.ws.send(JSON.stringify({
      Register: [],
      Submit: [{
        Type: 'frame',
        Key: `hb-${position}-${this.seq++ % 1000}`,
        Frame: { Position: position, PathPoints: [], DotPoints: dots.map((Index) => ({ Index, Intensity: value })), DurationMillis: Math.round(ms) },
      }],
    }));
  }

  later(ms, fn) {
    const t = setTimeout(() => { this.timers.delete(t); fn(); }, ms);
    this.timers.add(t);
  }

  // Wird von der Engine bei jedem Event aufgerufen.
  event(ev, intensity, durationMs) {
    const pattern = this.cfg.patterns[ev.type] ?? 'burst';
    if (pattern === 'off') return;
    const ms = Math.min(durationMs, 600);
    const sideCols = ev.side === 'left' ? [0, 1] : ev.side === 'right' ? [2, 3] : [0, 1, 2, 3];
    const arm = ev.side === 'left' ? 'ForearmL' : ev.side === 'right' ? 'ForearmR' : null;

    switch (pattern) {
      case 'tap':
      case 'side':
        this.frame('VestFront', COL(sideCols), intensity, ms);
        if (arm) this.frame(arm, [0, 1, 2], intensity, ms);
        else this.frame('VestBack', COL(sideCols), intensity * 0.6, ms);
        break;
      case 'wave':
        for (let r = 4; r >= 0; r--) {
          this.later((4 - r) * 120, () => {
            this.frame('VestFront', ROW(r), intensity, 180);
            this.frame('VestBack', ROW(r), intensity, 180);
          });
        }
        break;
      case 'death':
        for (let i = 0; i < 3; i++) {
          this.later(i * 450, () => {
            this.frame('VestFront', ALL, 1, 300);
            this.frame('VestBack', ALL, 1, 300);
            this.frame('Head', [0, 1, 2, 3, 4, 5], 0.6, 300);
          });
        }
        break;
      default: // burst
        this.frame('VestFront', ALL, intensity, ms);
        this.frame('VestBack', ALL, intensity * 0.8, ms);
        this.frame('ForearmL', [0, 1, 2], intensity * 0.5, ms);
        this.frame('ForearmR', [0, 1, 2], intensity * 0.5, ms);
    }
  }

  // Wird alle 50 ms aufgerufen: dauerhafte Stärken (Wände, VRChat) und Herzschlag.
  tick(level, beat) {
    const now = Date.now();
    if (now - this.lastFrame < 100) return;
    this.lastFrame = now;
    if (level > 0) {
      this.frame('VestFront', ALL, level * 0.6, 150);
      this.frame('VestBack', ALL, level * 0.6, 150);
    }
    if (beat > 0) this.frame('VestFront', this.cfg.heartDots, Math.max(beat, 0.5), 120);
  }

  async stop() {
    this.stopped = true;
    for (const t of this.timers) clearTimeout(t);
    this.ws?.close();
  }
}
