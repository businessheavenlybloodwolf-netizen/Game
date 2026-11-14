// Sound & Musik: komplett synthetisiert mit der WebAudio-API.
import { rng } from './textures.js';

const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

const SCALES = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  harmonic: [0, 2, 3, 5, 7, 8, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
};

// Eigene Stücke: werden aus Tonart, Akkordfolge und Seed deterministisch komponiert.
const TRACKS = {
  title:   { bpm: 84,  root: 60, scale: 'lydian',   prog: [0, 5, 3, 4], seed: 3,  lead: 'sine',     arp: 'triangle', drums: false, echo: 0.35, arpRate: 2 },
  meadow:  { bpm: 118, root: 65, scale: 'major',    prog: [0, 4, 5, 3], seed: 7,  lead: 'square',   arp: 'triangle', drums: true,  echo: 0.15, arpRate: 2 },
  crystal: { bpm: 96,  root: 57, scale: 'dorian',   prog: [0, 5, 2, 6], seed: 12, lead: 'triangle', arp: 'sine',     drums: true,  echo: 0.45, arpRate: 4 },
  sky:     { bpm: 132, root: 62, scale: 'major',    prog: [0, 3, 4, 3], seed: 21, lead: 'square',   arp: 'triangle', drums: true,  echo: 0.2,  arpRate: 2 },
  tower:   { bpm: 108, root: 52, scale: 'harmonic', prog: [0, 5, 3, 4], seed: 33, lead: 'sawtooth', arp: 'triangle', drums: true,  echo: 0.3,  arpRate: 2 },
  boss:    { bpm: 152, root: 50, scale: 'harmonic', prog: [0, 0, 5, 4], seed: 41, lead: 'sawtooth', arp: 'square',   drums: true,  echo: 0.1,  arpRate: 4 },
  ending:  { bpm: 76,  root: 64, scale: 'major',    prog: [0, 3, 5, 4], seed: 55, lead: 'sine',     arp: 'triangle', drums: false, echo: 0.4,  arpRate: 2 },
};

function compose(def) {
  const r = rng(def.seed * 977 + 1);
  const sc = SCALES[def.scale];
  const deg = (d) => { // Skalenstufe -> Halbton
    const o = Math.floor(d / 7), i = ((d % 7) + 7) % 7;
    return sc[i] + o * 12;
  };
  const bars = def.prog.length;
  const rhythms = [
    [1, 0, 1, 1, 0, 1, 1, 0], [1, 0, 0, 1, 1, 0, 1, 0], [1, 1, 0, 1, 0, 0, 1, 1], [1, 0, 1, 0, 1, 0, 0, 0],
  ];
  const motif = rhythms[Math.floor(r() * rhythms.length)];
  const alt = rhythms[Math.floor(r() * rhythms.length)];
  const melody = []; // pro Bar 8 Achtel: Skalenstufe oder null
  let cur = 4;
  const motifSteps = [];
  for (let i = 0; i < 8; i++) motifSteps.push(Math.floor(r() * 5) - 2);
  for (let b = 0; b < bars; b++) {
    const chord = def.prog[b];
    const rh = b % 2 === 0 ? motif : alt;
    const bar = [];
    for (let s = 0; s < 8; s++) {
      if (!rh[s]) { bar.push(null); continue; }
      if (s === 0 || s === 4) {
        // Akkordton nahe dem aktuellen
        const tones = [chord, chord + 2, chord + 4, chord + 7, chord + 9];
        let best = tones[0];
        for (const t of tones) if (Math.abs(t - cur) < Math.abs(best - cur)) best = t;
        cur = best;
      } else {
        cur += b % 2 === 0 ? motifSteps[s] : (Math.floor(r() * 3) - 1);
      }
      cur = Math.max(0, Math.min(11, cur));
      bar.push(cur);
    }
    melody.push(bar);
  }
  return { deg, melody };
}

export class GameAudio {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('lumi_muted') === '1';
    this.track = null;
    this.step = 0;
    this.nextTime = 0;
    this.timer = null;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.8;
    const comp = ctx.createDynamicsCompressor();
    this.master.connect(comp); comp.connect(ctx.destination);
    this.music = ctx.createGain(); this.music.gain.value = 0.32; this.music.connect(this.master);
    this.sfx = ctx.createGain(); this.sfx.gain.value = 0.7; this.sfx.connect(this.master);
    // Echo-Send für Musik
    this.delay = ctx.createDelay(1.0);
    this.delayFb = ctx.createGain(); this.delayFb.gain.value = 0.35;
    this.delaySend = ctx.createGain(); this.delaySend.gain.value = 0.2;
    this.delaySend.connect(this.delay); this.delay.connect(this.delayFb); this.delayFb.connect(this.delay);
    this.delay.connect(this.music);
    // Rauschpuffer
    const len = ctx.sampleRate * 1;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.timer = setInterval(() => this.schedule(), 25);
    if (this.pendingTrack) { const t = this.pendingTrack; this.pendingTrack = null; this.playMusic(t); }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('lumi_muted', this.muted ? '1' : '0');
    if (this.master) this.master.gain.setTargetAtTime(this.muted ? 0 : 0.8, this.ctx.currentTime, 0.05);
    return this.muted;
  }

  // ---------- Synth-Grundbausteine ----------
  tone({ type = 'sine', f0 = 440, f1 = null, dur = 0.2, vol = 0.2, attack = 0.005, at = 0, dest = null, filter = null, vibrato = 0 }) {
    const ctx = this.ctx; if (!ctx) return;
    const t = (at || ctx.currentTime);
    const o = ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = o;
    if (vibrato) {
      const l = ctx.createOscillator(); l.frequency.value = 6;
      const lg = ctx.createGain(); lg.gain.value = vibrato;
      l.connect(lg); lg.connect(o.frequency); l.start(t); l.stop(t + dur + 0.05);
    }
    if (filter) {
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = filter;
      node.connect(f); node = f;
    }
    node.connect(g); g.connect(dest || this.sfx);
    o.start(t); o.stop(t + dur + 0.05);
    return g;
  }

  noise({ dur = 0.2, vol = 0.2, type = 'bandpass', f0 = 1000, f1 = null, q = 1, at = 0, dest = null }) {
    const ctx = this.ctx; if (!ctx) return;
    const t = at || ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(dest || this.sfx);
    s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
  }

  arp(notes, { type = 'triangle', step = 0.07, dur = 0.15, vol = 0.15 } = {}) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    notes.forEach((m, i) => this.tone({ type, f0: mtof(m), dur, vol, at: t + i * step }));
  }

  play(name) {
    if (!this.ctx || this.muted) return;
    switch (name) {
      case 'jump': this.tone({ type: 'square', f0: 280, f1: 620, dur: 0.13, vol: 0.08, filter: 2500 }); break;
      case 'jump2': this.tone({ type: 'square', f0: 420, f1: 980, dur: 0.16, vol: 0.08, filter: 3000 });
        this.noise({ dur: 0.15, vol: 0.06, f0: 2000, f1: 5000 }); break;
      case 'land': this.noise({ dur: 0.07, vol: 0.12, type: 'lowpass', f0: 600 }); break;
      case 'spark': this.arp([88, 95], { type: 'triangle', step: 0.05, dur: 0.12, vol: 0.12 }); break;
      case 'stomp': this.tone({ type: 'sine', f0: 260, f1: 50, dur: 0.18, vol: 0.35 });
        this.tone({ type: 'square', f0: 600, f1: 1200, dur: 0.08, vol: 0.06, at: this.ctx.currentTime + 0.04 }); break;
      case 'hurt': this.tone({ type: 'sawtooth', f0: 500, f1: 120, dur: 0.35, vol: 0.15, filter: 1800 }); break;
      case 'bounce': this.tone({ type: 'sine', f0: 160, f1: 720, dur: 0.3, vol: 0.3, vibrato: 30 }); break;
      case 'checkpoint': this.arp([72, 76, 79, 84, 88], { type: 'sine', step: 0.08, dur: 0.4, vol: 0.15 }); break;
      case 'shard': this.arp([72, 76, 79, 83, 84, 88, 91, 96], { type: 'triangle', step: 0.09, dur: 0.6, vol: 0.14 });
        this.arp([60, 67, 72], { type: 'sine', step: 0.25, dur: 1.2, vol: 0.12 }); break;
      case 'crumble': this.noise({ dur: 0.45, vol: 0.12, type: 'lowpass', f0: 900, f1: 200 }); break;
      case 'pound': this.tone({ type: 'sine', f0: 140, f1: 35, dur: 0.35, vol: 0.45 });
        this.noise({ dur: 0.3, vol: 0.2, type: 'lowpass', f0: 1200, f1: 150 }); break;
      case 'spin': this.noise({ dur: 0.28, vol: 0.12, f0: 700, f1: 3000, q: 2 }); break;
      case 'bosshit': this.tone({ type: 'sawtooth', f0: 320, f1: 60, dur: 0.6, vol: 0.2, filter: 2000 });
        this.noise({ dur: 0.5, vol: 0.2, type: 'lowpass', f0: 2000, f1: 100 }); break;
      case 'bossroar': this.tone({ type: 'sawtooth', f0: 90, f1: 60, dur: 1.2, vol: 0.2, filter: 600, vibrato: 12 });
        this.noise({ dur: 1.2, vol: 0.12, type: 'lowpass', f0: 500 }); break;
      case 'oneup': this.arp([76, 79, 88, 84, 86, 91], { type: 'square', step: 0.08, dur: 0.15, vol: 0.07 }); break;
      case 'heart': this.arp([79, 84, 91], { type: 'sine', step: 0.06, dur: 0.25, vol: 0.15 }); break;
      case 'die': this.arp([72, 67, 64, 60, 55], { type: 'triangle', step: 0.12, dur: 0.3, vol: 0.15 }); break;
      case 'orb': this.tone({ type: 'sine', f0: 220, f1: 110, dur: 0.5, vol: 0.12, vibrato: 25 }); break;
      case 'boom': this.noise({ dur: 0.4, vol: 0.2, type: 'lowpass', f0: 800, f1: 100 });
        this.tone({ type: 'sine', f0: 120, f1: 40, dur: 0.3, vol: 0.25 }); break;
      case 'select': this.tone({ type: 'square', f0: 660, dur: 0.06, vol: 0.05, filter: 3000 }); break;
      case 'confirm': this.arp([76, 83], { type: 'square', step: 0.06, dur: 0.1, vol: 0.06 }); break;
      case 'kill': this.noise({ dur: 0.25, vol: 0.15, f0: 1500, f1: 400, q: 3 });
        this.tone({ type: 'triangle', f0: 900, f1: 1800, dur: 0.12, vol: 0.1 }); break;
      case 'clear': this.arp([60, 64, 67, 72, 67, 72, 76, 79, 84], { type: 'square', step: 0.11, dur: 0.25, vol: 0.07 }); break;
      case 'text': this.tone({ type: 'square', f0: 900 + Math.random() * 200, dur: 0.03, vol: 0.025, filter: 2500 }); break;
    }
  }

  // ---------- Musik-Sequenzer ----------
  playMusic(name) {
    if (!this.ctx) { this.pendingTrack = name; return; }
    if (this.trackName === name) return;
    this.trackName = name;
    const def = TRACKS[name];
    if (!def) { this.track = null; return; }
    this.track = { def, ...compose(def) };
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.1;
    this.delay.delayTime.value = (60 / def.bpm) * 0.75;
    this.delaySend.gain.value = def.echo;
  }

  stopMusic() { this.track = null; this.trackName = null; }

  schedule() {
    if (!this.ctx || !this.track) return;
    const { def, deg, melody } = this.track;
    const sixteenth = 60 / def.bpm / 4;
    while (this.nextTime < this.ctx.currentTime + 0.15) {
      this.playStep(this.step, this.nextTime, sixteenth, def, deg, melody);
      this.nextTime += sixteenth;
      this.step = (this.step + 1) % (def.prog.length * 16);
    }
  }

  playStep(step, t, s16, def, deg, melody) {
    const bar = Math.floor(step / 16), inBar = step % 16;
    const chord = def.prog[bar];
    const root = def.root;
    const M = this.music;
    // Bass
    if (inBar === 0 || inBar === 8 || (def.drums && inBar === 11)) {
      const n = root - 24 + deg(chord) + (inBar === 11 ? 12 : 0);
      this.tone({ type: 'triangle', f0: mtof(n), dur: s16 * (inBar === 11 ? 2 : 6), vol: 0.32, at: t, dest: M });
    }
    // Arpeggio
    const arpEvery = 4 / def.arpRate;
    if (inBar % arpEvery === 0) {
      const idx = Math.floor(inBar / arpEvery);
      const tones = [chord, chord + 2, chord + 4, chord + 7];
      const n = root - 12 + deg(tones[idx % 4]);
      this.tone({ type: def.arp, f0: mtof(n), dur: s16 * arpEvery * 1.6, vol: 0.07, at: t, dest: M, filter: 2200 });
    }
    // Pad am Taktanfang
    if (inBar === 0) {
      for (const d of [chord, chord + 2, chord + 4]) {
        this.tone({ type: 'sine', f0: mtof(root + deg(d)), dur: s16 * 15, vol: 0.035, attack: 0.3, at: t, dest: M });
      }
    }
    // Melodie (Achtel)
    if (inBar % 2 === 0) {
      const note = melody[bar][inBar / 2];
      if (note !== null) {
        const n = root + 12 + deg(note);
        const g = this.tone({ type: def.lead, f0: mtof(n), dur: s16 * 2.6, vol: def.lead === 'sawtooth' || def.lead === 'square' ? 0.05 : 0.1, at: t, dest: M, filter: 3000, vibrato: 3 });
        if (g) g.connect(this.delaySend);
      }
    }
    // Schlagzeug
    if (def.drums) {
      if (inBar % 8 === 0 || (def.bpm > 140 && inBar % 4 === 0)) {
        this.tone({ type: 'sine', f0: 150, f1: 40, dur: 0.18, vol: 0.45, at: t, dest: M });
      }
      if (inBar === 4 || inBar === 12) this.noise({ dur: 0.14, vol: 0.12, f0: 1800, q: 0.8, at: t, dest: M });
      if (inBar % 2 === 0) this.noise({ dur: 0.04, vol: 0.05, type: 'highpass', f0: 7000, at: t, dest: M });
    }
  }
}
