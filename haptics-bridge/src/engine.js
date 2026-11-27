// Wandelt Spiel-Events (Schaden, Tod, ...) in einen Vibrationsverlauf um.

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export class Engine {
  constructor(cfg, output, log = console.log) {
    this.cfg = cfg;
    this.out = output;
    this.log = log;
    this.pulses = [];
    this.health = null; // 0..1 oder null, wenn unbekannt
    this.levels = new Map(); // dauerhafte Stärken, z. B. VRChat-Kontakte (Schlüssel -> 0..1)
    this.last = -1;
    this.timer = setInterval(() => this.tick(), 50);
  }

  // ev: { type: 'damage' | 'death' | ..., amount?, max?, source? }
  trigger(ev) {
    const p = this.cfg.events[ev.type];
    if (!p) return false;
    let intensity = p.intensity;
    let duration = p.durationMs;
    if (ev.amount != null && p.minIntensity != null) {
      const frac = clamp(Number(ev.amount) / (Number(ev.max) || p.referenceMax || 100));
      intensity = p.minIntensity + (p.intensity - p.minIntensity) * frac;
      duration = (p.minDurationMs ?? duration) + (p.durationMs - (p.minDurationMs ?? duration)) * frac;
    }
    if (ev.intensity != null) intensity = clamp(Number(ev.intensity));
    if (ev.durationMs != null) duration = Number(ev.durationMs);
    this.pulses.push({ start: Date.now(), intensity: clamp(intensity), duration, fade: Math.min(p.fadeMs ?? 0, duration) });
    const amt = ev.amount != null ? ` ${ev.amount}` : '';
    this.log(`${ev.source ? `[${ev.source}] ` : ''}${ev.type}${amt} -> ${(intensity * 100).toFixed(0)} % für ${Math.round(duration)} ms`);
    return true;
  }

  setHealth(frac) {
    this.health = frac == null ? null : clamp(frac);
  }

  // Dauerhafte Stärke einer Quelle setzen (0 entfernt sie).
  setLevel(key, value) {
    const v = clamp(Number(value) || 0);
    if (v > 0) this.levels.set(key, v); else this.levels.delete(key);
  }

  clearLevels(prefix = '') {
    for (const k of this.levels.keys()) if (k.startsWith(prefix)) this.levels.delete(k);
  }

  level(now) {
    let max = 0, sum = 0;
    this.pulses = this.pulses.filter((p) => {
      const t = now - p.start;
      if (t >= p.duration) return false;
      const fadeStart = p.duration - p.fade;
      const v = t < fadeStart ? p.intensity : p.intensity * (1 - (t - fadeStart) / p.fade);
      max = Math.max(max, v);
      sum += v;
      return true;
    });
    // Mehrere Treffer kurz hintereinander verstärken sich leicht.
    let v = clamp(max + 0.3 * (sum - max));
    for (const l of this.levels.values()) v = Math.max(v, l);

    const lh = this.cfg.lowHealth;
    if (lh?.enabled && this.health != null && this.health > 0 && this.health < lh.threshold) {
      // Herzschlag: zwei kurze Schläge pro Periode
      const ph = (now % lh.periodMs) / lh.periodMs;
      const beat = ph < 0.1 || (ph > 0.2 && ph < 0.3) ? lh.intensity : 0;
      v = Math.max(v, beat);
    }
    return v;
  }

  tick() {
    const v = Math.round(this.level(Date.now()) * clamp(this.cfg.maxIntensity) * 100) / 100;
    if (v !== this.last && (Math.abs(v - this.last) >= 0.03 || v === 0)) {
      this.last = v;
      this.out.set(v);
    }
  }

  stop() {
    clearInterval(this.timer);
    this.pulses = [];
    this.levels.clear();
    this.out.set(0);
  }
}
