// LUMI und das Morgenlicht – Hauptspiel (offene Reiche + Herausforderungen)
import * as THREE from 'three';
import { createTextures, setTextureQuality, setAnisotropy } from './textures.js';
import { setTextures, setBatching } from './models.js';
import { GameAudio } from './audio.js';
import { Input } from './input.js';
import { Particles } from './particles.js';
import { Player } from './player.js';
import { Level } from './world.js';
import { HANDMADE } from './levels.js';
import { WORLDS, BOSS_IDX, BONUS_IDX } from './worlds.js';
import { HUD } from './ui.js';
import { Graphics, PRESETS, ORDER, loadPreset, savePreset } from './gfx.js';
import { t, setLang, detectLang, LANGS, getLang } from './i18n/index.js';

const STEP = 1 / 120;
const SLOTS = 3;
// Speicherplatz 1 nutzt den bisherigen Schlüssel, damit alte Spielstände erhalten bleiben
const slotKey = (n) => (n === 1 ? 'lumi_save_v3' : `lumi_save_v3_s${n}`);
// Mondsplitter pro Reich: 20 in der offenen Welt, je 4 in 5 Herausforderungen, 4 im Bonus-Tor, 3 (großer Splitter) beim Boss
const OPEN_IDS = ['peak0', 'peak1', 'peak2', 'peak3', 'peak4', 'branch0', 'branch1', 'branch2', 'hid0', 'hid1', 'hid2',
  'pound0', 'pound1', 'crate0', 'crate1', 'pieces', 'lost', 'rings', 'shop', 'nest'];
const CH_IDS = (p) => [p + 'g', p + 'm0', p + 'm1', p + 'm2'];
const ALL_IDS = [...OPEN_IDS, ...[0, 1, 2, 3, 4].flatMap((i) => CH_IDS('c' + i)), ...CH_IDS('b'), 'boss'];
const KINGDOM_TOTAL = ALL_IDS.length + 2; // Boss zählt 3
const TRAVEL_REQ = [10, 12, 14, 16, 18, 20, 22];
const SHOP_PRICE = 100;

function controlsHtml() {
  const c = (k) => t('controls.' + k);
  const row = (a, b, p) => `<tr><td>${c(a)}</td><td>${b}</td><td>${p}</td></tr>`;
  return `<table class="controls"><tr><th></th><th>${c('keyboard')}</th><th>${c('gamepad')}</th></tr>
${row('run', c('kRun'), c('pRun'))}${row('jump', c('kJump'), 'A')}${row('spin', c('kSpin'), 'X / B')}
${row('pound', c('kPound'), 'LB / RB')}${row('camera', c('kCam'), c('pCam'))}<tr><td>${t('ui.interact')}</td><td>Enter / T</td><td>Y</td></tr>
${row('pause', c('kPause'), 'Start')}${row('mute', 'M', '')}
</table><p class="tip">${c('tip')}</p>`;
}

class Game {
  constructor() {
    setLang(detectLang());
    this.t = t;
    const preset = loadPreset();
    setTextureQuality(PRESETS[preset].tex);
    setAnisotropy(PRESETS[preset].aniso);
    setBatching(true);
    const canvas = document.getElementById('game');
    this.canvas = canvas;
    const renderer = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    renderer.shadowMap.enabled = true;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2500);
    this.gfx = new Graphics(renderer, this.scene, this.camera, preset);
    this.T = createTextures(); setTextures(this.T);
    this.audio = new GameAudio();
    this.input = new Input(canvas);
    this.hud = new HUD(this.audio);
    this.particles = new Particles(this.scene, this.T);
    this.player = new Player(this);
    this.player.attach(this.scene);
    this.raycaster = new THREE.Raycaster();
    this.camYaw = 0; this.camPitch = 0.3; this.camDist = 9.5;
    this.camTarget = new THREE.Vector3();
    this.camManualT = 0;
    this.shakeT = 0;
    this.acc = 0;
    this.slot = 1;
    try { this.slot = Math.min(SLOTS, Math.max(1, +localStorage.getItem('lumi_slot') || 1)); } catch (e) { /* egal */ }
    this.save = this.loadSave();
    this.hearts = 3; this.sparks = this.save.sparks || 0; this.lives = 0;
    this.levelGot = 0; this.levelTime = 0; this.timer = 0;
    this.lighthouseLit = false;
    this.state = 'title';
    this.applyLangToDom();
    // FPS-Anzeige (F3 oder Menü)
    const fpsEl = document.createElement('div'); fpsEl.id = 'fps'; document.body.appendChild(fpsEl);
    try { this.showFps = localStorage.getItem('lumi_fps') === '1'; } catch (e) { this.showFps = false; }
    fpsEl.style.display = this.showFps ? 'block' : 'none';
    window.addEventListener('keydown', (e) => { if (e.code === 'F3') { e.preventDefault(); this.toggleFps(); } });

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.gfx.resize();
    });
    const unlockAudio = () => this.audio.init();
    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
    window.addEventListener('touchstart', unlockAudio);
    canvas.addEventListener('click', () => { if (this.state === 'play') this.input.requestLock(); });
    let wasLocked = false;
    document.addEventListener('pointerlockchange', () => {
      const l = document.pointerLockElement === canvas;
      if (wasLocked && !l && this.state === 'play') this.pause();
      wasLocked = l;
    });

    // Autospeichern: alle 15 s im Spiel sowie beim Schließen/Minimieren des Fensters
    setInterval(() => { if (this.state === 'play' && this.sparks !== this.save.sparks) this.writeSave(false); }, 15000);
    const flush = () => { if (this.state !== 'title' && this.state !== 'promo') this.writeSave(false); };
    window.addEventListener('beforeunload', flush);
    window.addEventListener('pagehide', flush);
    document.addEventListener('visibilitychange', () => { if (document.hidden) flush(); });

    const params = new URLSearchParams(location.search);
    if (params.has('lang')) { setLang(params.get('lang')); this.applyLangToDom(); }
    if (params.has('promo')) { this.applyLangToDom(); this.startPromo(params); }
    else if (params.has('w')) {
      const w = +params.get('w') || 0;
      if (params.has('l')) this.startLevel(w, +params.get('l') || 0);
      else this.enterKingdom(w);
    } else this.toTitle();
    this.last = performance.now();
    this.frame = this.frame.bind(this);
    requestAnimationFrame(this.frame);
  }

  applyLangToDom() {
    document.querySelector('[data-btn="jump"]').textContent = t('ui.jump');
    document.querySelector('[data-btn="spin"]').textContent = t('ui.spin');
    document.querySelector('[data-btn="pound"]').textContent = t('ui.pound');
    document.querySelector('[data-btn="act"]').textContent = '!';
    document.querySelector('#dialog .next').textContent = t('ui.next') + ' ▶';
    document.title = 'LUMI – ' + t('ui.subtitle');
  }

  // ---------------- Fortschritt ----------------
  spec(w, i) {
    if (i < 0) return { world: w, index: -1, kind: 'kingdom', seed: (w + 1) * 7777 + 3 };
    const kind = i === BOSS_IDX ? 'boss' : i === BONUS_IDX ? 'bonus' : 'normal';
    const s = { world: w, index: i, kind, seed: (w + 1) * 1000 + i * 37 + 5, idPrefix: kind === 'bonus' ? 'b' : 'c' + i };
    if (i === 0 && HANDMADE[w]) { s.build = HANDMADE[w].build; s.seed = HANDMADE[w].seed; }
    return s;
  }
  levelName(w, i) {
    if (i < 0) return t(`worlds.${w}.name`);
    if (i === BOSS_IDX) return t(`worlds.${w}.boss`);
    if (i === BONUS_IDX) return t('ui.bonusLevel');
    return t(`worlds.${w}.levels.${i}`);
  }
  rec(w, i) {
    const k = w + '-' + i;
    if (!this.save.levels[k]) this.save.levels[k] = { done: false, best: 0, all: false, time: 0, medal: false };
    return this.save.levels[k];
  }
  moons(w) { if (!this.save.moons[w]) this.save.moons[w] = {}; return this.save.moons[w]; }
  hasMoon(w, id) { return !!this.moons(w)[id]; }
  moonCount(w) { return Object.values(this.moons(w)).reduce((a, b) => a + b, 0); }
  moonCountAll() { let n = 0; for (let w = 0; w < WORLDS.length; w++) n += this.moonCount(w); return n; }
  moonTotalAll() { return KINGDOM_TOTAL * WORLDS.length; }
  hasKey(w) { return !!this.save.keys[w]; }
  shardCount() { let n = 0; for (let w = 0; w < 7; w++) if (this.save.bosses[w]) n++; return n; }
  bossReq(w) { return 5 + w; }
  bossOpen(w) { return this.moonCount(w) >= this.bossReq(w); }
  challengeSub(w, i) {
    const ids = CH_IDS(i === BONUS_IDX ? 'b' : 'c' + i);
    return `☾ ${ids.filter((id) => this.hasMoon(w, id)).length} / 4`;
  }
  kingdomOpen(w) { return w === 0 || (!!this.save.bosses[w - 1] && this.moonCount(w - 1) >= TRAVEL_REQ[w - 1]); }
  travelReason(w) { return t('ui.needTravel', { boss: t(`worlds.${w - 1}.boss`), n: TRAVEL_REQ[w - 1], name: t(`worlds.${w - 1}.name`) }); }
  hasProgress() { return Object.values(this.save.moons).some((m) => Object.keys(m).length) || Object.keys(this.save.seen).length > 0; }

  // ---------------- Speicherstand ----------------
  readSlot(n) {
    try { return { ...this.emptySave(), ...(JSON.parse(localStorage.getItem(slotKey(n))) || {}) }; } catch (e) { return this.emptySave(); }
  }
  slotHasProgress(sv) { return Object.values(sv.moons || {}).some((m) => Object.keys(m || {}).length) || Object.keys(sv.seen || {}).length > 0; }
  slotMoons(sv) { return Object.values(sv.moons || {}).reduce((n, m) => n + Object.values(m || {}).reduce((a, b) => a + b, 0), 0); }
  useSlot(n) {
    if (this.save && n !== this.slot) this.writeSave(false);
    this.slot = n;
    try { localStorage.setItem('lumi_slot', String(n)); } catch (e) { /* egal */ }
    this.save = this.readSlot(n);
    this.sparks = this.save.sparks || 0;
  }

  emptySave() { return { moons: {}, levels: {}, keys: {}, bosses: {}, seen: {}, sparks: 0, kingdom: 0 }; }
  loadSave() {
    return this.readSlot(this.slot);
  }
  writeSave(show = true) {
    this.save.sparks = this.sparks;
    this.save.savedAt = Date.now();
    try { localStorage.setItem(slotKey(this.slot), JSON.stringify(this.save)); } catch (e) { return; }
    if (show && this.hud) this.hud.saved(t('ui.saved'));
  }

  // ---------------- Level laden ----------------
  loadLevel(w, i) {
    if (this.level) { this.scene.remove(this.level.group); this.level.dispose(); }
    this.particles.clear();
    this.cur = { w, i };
    this.level = new Level(this.spec(w, i), this);
    this.scene.add(this.level.group);
    this.scene.fog = this.level.fog;
    const s = this.level.spawnPoint;
    this.checkpoint = { ...s };
    this.player.reset(s.x, s.y, s.z, Math.PI);
    this.camYaw = s.yaw; this.camPitch = 0.3;
    this.camTarget.set(s.x, s.y + 1.3, s.z);
    this.hud.hideBoss();
    this.hud.hint(null);
    this.hud.prompt(null);
    this.hud.setRace(null);
  }
  get inKingdom() { return this.cur && this.cur.i < 0; }

  // ---------------- Menüs ----------------
  toTitle() {
    this.state = 'title';
    this.input.releaseLock();
    this.lighthouseLit = false;
    if (!this.level || this.cur.w !== 0 || this.cur.i !== -1) this.loadLevel(0, -1);
    this.hud.show(false);
    this.setTouch(false);
    this.audio.playMusic('title');
    const prog = this.hasProgress();
    const items = [];
    if (prog) items.push({ label: `${t('ui.continue')} · ${t('ui.slot', { n: this.slot })}`, action: () => { this.hud.hideMenu(); this.enterKingdom(this.save.kingdom || 0); } });
    items.push({ label: t('ui.newGame'), action: () => this.slotMenu('new') });
    items.push({ label: t('ui.slots'), action: () => this.slotMenu('manage') });
    items.push(...this.settingsItems(() => this.toTitle()));
    if (window.lumiDesktop) items.push({ label: t('ui.quit'), action: () => window.lumiDesktop.quit() });
    this.hud.showMenu({ cls: 'title-screen', title: '<span class="logo">LUMI</span>', subtitle: t('ui.subtitle'), items });
  }

  settingsItems(back) {
    return [
      { label: `${t('ui.graphics')}: ${t('ui.g_' + this.gfx.name)}`, action: () => this.cycleGraphics(back) },
      { label: `${t('ui.language')}: ${LANGS[getLang()].name}`, action: () => this.langMenu(back) },
      { label: t('ui.controls'), action: () => this.showControls(back) },
      { label: `${t('ui.sound')}: ${this.audio.muted ? t('ui.off') : t('ui.on')}`, action: () => { this.audio.toggleMute(); back(); } },
      { label: t('ui.fullscreen'), action: () => { this.toggleFullscreen(); } },
      { label: `${t('ui.fpsShow')}: ${this.showFps ? t('ui.on') : t('ui.off')}`, action: () => { this.toggleFps(); back(); } },
      { label: '💾 ' + t('ui.saveMenu'), action: () => this.saveMenu(back) },
    ];
  }

  toggleFps() {
    this.showFps = !this.showFps;
    try { localStorage.setItem('lumi_fps', this.showFps ? '1' : '0'); } catch (e) { /* egal */ }
    document.getElementById('fps').style.display = this.showFps ? 'block' : 'none';
  }

  // ---------------- Speicherstand als Datei ----------------
  saveMenu(back) {
    this.hud.showMenu({
      title: t('ui.saveMenu'),
      body: `<p>☾ ${this.moonCountAll()} / ${this.moonTotalAll()} · ${this.shardCount()} / 7 <span class="shard full"></span></p><p class="tip">${t('ui.saveInfo')}</p>`,
      items: [
        { label: t('ui.exportSave'), action: () => this.exportSave(back) },
        { label: t('ui.importSave'), action: () => this.importSave(back) },
        { label: t('ui.back'), action: back },
      ],
    });
  }

  exportSave(back) {
    this.writeSave(false);
    const data = { game: 'LUMI', format: 1, exported: new Date().toISOString(), save: this.save, settings: { lang: getLang(), gfx: this.gfx.name } };
    const text = JSON.stringify(data, null, 1);
    const d = new Date();
    const name = `LUMI-${t('ui.slot', { n: this.slot }).replace(/\s+/g, '')}-${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}.lumi-save`;
    const done = (ok) => { this.hud.toast(ok ? t('ui.exported') : t('ui.exportFail'), 3); this.saveMenu(back); };
    if (window.lumiDesktop && window.lumiDesktop.saveFile) {
      window.lumiDesktop.saveFile(name, text).then((ok) => done(ok !== false)).catch(() => done(false));
      return;
    }
    try {
      const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
      const a = document.createElement('a');
      a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      done(true);
    } catch (e) { done(false); }
  }

  importSave(back) {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = '.lumi-save,.json,application/json';
    input.onchange = () => {
      const f = input.files && input.files[0];
      if (!f) return;
      f.text().then((text) => this.previewImport(text, f.name, back));
    };
    input.click();
  }

  previewImport(text, fileName, back) {
    let data = null;
    try { data = JSON.parse(text); } catch (e) { data = null; }
    const valid = data && data.game === 'LUMI' && data.save && typeof data.save.moons === 'object';
    if (!valid) { this.hud.toast(t('ui.importBad'), 3); this.audio.play('hurt'); return false; }
    const moons = Object.values(data.save.moons).reduce((n, m) => n + Object.values(m || {}).reduce((a, b) => a + b, 0), 0);
    this.hud.showMenu({
      title: t('ui.importSave') + '?',
      body: `<p>${t('ui.importConfirm')}</p><p>${fileName}<br>☾ ${moons} / ${this.moonTotalAll()}</p>`,
      items: [
        { label: t('ui.importSave'), action: () => this.applyImport(data) },
        { label: t('ui.back'), action: () => this.saveMenu(back) },
      ],
      sel: 1,
    });
    return true;
  }

  applyImport(data) {
    this.save = { ...this.emptySave(), ...data.save };
    this.sparks = this.save.sparks || 0;
    this.writeSave(false);
    if (data.settings && data.settings.lang && LANGS[data.settings.lang]) { setLang(data.settings.lang); this.applyLangToDom(); }
    this.audio.play('shard');
    this.hud.hideMenu();
    this.toTitle();
    this.hud.toast(t('ui.importOk'), 3);
  }

  cycleGraphics(back) {
    const next = ORDER[(ORDER.indexOf(this.gfx.name) + 1) % ORDER.length];
    const texChange = PRESETS[next].tex !== PRESETS[this.gfx.name].tex || PRESETS[next].batch !== PRESETS[this.gfx.name].batch;
    this.gfx.scale = 1;
    savePreset(next);
    if (texChange) { this.writeSave(); location.reload(); return; }
    this.gfx.apply(next);
    if (this.level) { this.gfx.setupSun(this.level.sun); this.level.sky.material.uniforms.linOut.value = this.gfx.composer ? 1 : 0; }
    back();
  }

  // ---------------- Speicherplätze ----------------
  slotLabel(n) {
    const sv = n === this.slot ? this.save : this.readSlot(n);
    const used = this.slotHasProgress(sv);
    let info = `<small>${t('ui.slotEmpty')}</small>`;
    if (used) {
      const k = sv.kingdom || 0;
      const shards = Object.keys(sv.bosses || {}).filter((w) => +w < 7).length;
      const when = sv.savedAt ? new Date(sv.savedAt).toLocaleString(getLang(), { dateStyle: 'short', timeStyle: 'short' }) : '';
      info = `<small>${t(`worlds.${k}.name`)} · ${when}</small>`;
      return `<span class="lvl"><span class="nm">${n === this.slot ? '▶ ' : ''}${t('ui.slot', { n })}${info}</span><span class="ic">☾ ${this.slotMoons(sv)} · ${shards}/7 <span class="shard full"></span></span></span>`;
    }
    return `<span class="lvl"><span class="nm">${t('ui.slot', { n })}${info}</span><span class="ic"></span></span>`;
  }

  slotMenu(mode) {
    const items = [];
    for (let n = 1; n <= SLOTS; n++) {
      items.push({
        html: this.slotLabel(n),
        action: () => {
          const used = this.slotHasProgress(n === this.slot ? this.save : this.readSlot(n));
          if (mode === 'new') { if (used) this.confirmNew(n); else { this.useSlot(n); this.newGame(); } }
          else if (used) this.slotActions(n);
          else { this.useSlot(n); this.newGame(); }
        },
      });
    }
    items.push({ label: t('ui.back'), action: () => this.toTitle() });
    this.hud.showMenu({ cls: 'map', title: mode === 'new' ? t('ui.chooseSlot') : t('ui.slots'), items, sel: this.slot - 1 });
  }

  slotActions(n) {
    const items = [
      { label: t('ui.play'), action: () => { this.useSlot(n); this.hud.hideMenu(); this.enterKingdom(this.save.kingdom || 0); } },
    ];
    for (let m = 1; m <= SLOTS; m++) if (m !== n) items.push({ label: `${t('ui.copyTo')} ${t('ui.slot', { n: m })}`, action: () => this.copySlot(n, m) });
    items.push({ label: t('ui.delete'), action: () => this.deleteSlot(n) });
    items.push({ label: t('ui.back'), action: () => this.slotMenu('manage') });
    this.hud.showMenu({ title: t('ui.slot', { n }), body: this.slotLabel(n), items });
  }

  copySlot(from, to) {
    const doCopy = () => {
      if (from === this.slot) this.writeSave(false);
      const data = localStorage.getItem(slotKey(from));
      try { localStorage.setItem(slotKey(to), data); } catch (e) { return; }
      if (to === this.slot) this.save = this.readSlot(to);
      this.hud.toast(t('ui.copied', { n: to }), 2.5);
      this.slotMenu('manage');
    };
    if (!this.slotHasProgress(this.readSlot(to))) { doCopy(); return; }
    this.hud.showMenu({ title: t('ui.slot', { n: to }), body: `<p>${t('ui.overwriteSlot', { n: to })}</p>${this.slotLabel(to)}`, items: [{ label: t('ui.copyTo') + ' ' + t('ui.slot', { n: to }), action: doCopy }, { label: t('ui.back'), action: () => this.slotActions(from) }], sel: 1 });
  }

  deleteSlot(n) {
    this.hud.showMenu({
      title: t('ui.delete') + '?', body: `<p>${t('ui.deleteConfirm', { n })}</p>${this.slotLabel(n)}`,
      items: [
        { label: t('ui.delete'), action: () => {
          try { localStorage.removeItem(slotKey(n)); } catch (e) { /* egal */ }
          if (n === this.slot) { this.save = this.emptySave(); this.sparks = 0; }
          this.hud.toast(t('ui.deleted', { n }), 2.5);
          this.slotMenu('manage');
        } },
        { label: t('ui.back'), action: () => this.slotActions(n) },
      ],
      sel: 1,
    });
  }

  confirmNew(n = this.slot) {
    const sv = n === this.slot ? this.save : this.readSlot(n);
    this.hud.showMenu({
      title: t('ui.newGame') + '?',
      body: `<p>${t('ui.overwriteSlot', { n })}</p><p>☾ ${this.slotMoons(sv)} → 0</p>`,
      items: [
        { label: t('ui.newGame'), action: () => { this.useSlot(n); this.save = this.emptySave(); this.sparks = 0; this.writeSave(false); this.newGame(); } },
        { label: t('ui.back'), action: () => this.slotMenu('new') },
      ],
      sel: 1,
    });
  }

  langMenu(back) {
    const items = Object.entries(LANGS).map(([k, L]) => ({
      label: (k === getLang() ? '✓ ' : '') + L.name,
      action: () => { setLang(k); this.applyLangToDom(); this.refreshHud(); back(); },
    }));
    items.push({ label: t('ui.back'), action: back });
    this.hud.showMenu({ title: t('ui.language'), items, sel: Object.keys(LANGS).indexOf(getLang()) });
  }

  showControls(back) {
    this.hud.showMenu({ title: t('ui.controls'), body: controlsHtml(), items: [{ label: t('ui.back'), action: back }] });
  }

  newGame() {
    this.hud.hideMenu();
    this.sparks = 0;
    this.state = 'story';
    this.audio.playMusic('title');
    this.dialog(t('story.intro'), () => this.enterKingdom(0));
  }

  dialog(lines, done, w = 0) {
    const conv = (lines || []).map(([role, text]) => ({ role, text, who: role === 'b' ? t(`worlds.${w}.boss`) : t('story.who.' + role) }));
    this.hud.dialog(conv, done);
  }

  // ---------------- Reiche (offene Welt) ----------------
  enterKingdom(w, from = null) {
    this.hud.hideMenu();
    this.save.kingdom = w; this.writeSave();
    this.loadLevel(w, -1);
    if (from) {
      const pt = this.level.portals.find((p) => p.target.type === from.type && p.target.i === from.i);
      if (pt) {
        const a = Math.atan2(pt.x, pt.z);
        const dx = -Math.sin(pt.mesh ? 0 : 0);
        this.player.reset(pt.x + Math.sin(a) * 0, pt.y, pt.z, 0);
        // vor das Tor stellen (Richtung Inselmitte)
        const iso = this.level.colliders.find((c) => c.type === 'cyl' && Math.hypot(c.x - pt.x, c.z - pt.z) < c.r && Math.abs(c.maxY - pt.y) < 0.1);
        if (iso) { const vx = iso.x - pt.x, vz = iso.z - pt.z, l = Math.hypot(vx, vz) || 1; this.player.pos.x += vx / l * 2.8; this.player.pos.z += vz / l * 2.8; }
        this.checkpoint = { x: this.player.pos.x, y: pt.y, z: this.player.pos.z, yaw: Math.atan2(pt.x - this.player.pos.x, pt.z - this.player.pos.z) };
        this.camYaw = this.checkpoint.yaw; this.camTarget.copy(this.player.pos);
        void dx;
      }
    }
    this.hearts = 3; this.levelGot = 0; this.levelTime = 0;
    this.hud.show(true);
    this.refreshHud();
    this.setTouch(true);
    this.audio.playMusic(WORLDS[w].music);
    const go = () => { this.state = 'play'; this.setTouch(true); this.hud.show(true); };
    if (!this.save.seen[w]) {
      this.save.seen[w] = true; this.writeSave();
      this.state = 'story';
      this.hud.show(false);
      const lines = [...t(`story.before.${w}`), ...(w === 0 ? t('story.ship') : [])];
      this.dialog(lines, () => { go(); this.hud.banner(t(`worlds.${w}.name`), t('ui.kingdom', { n: w + 1 })); }, w);
      return;
    }
    go();
    if (!from) this.hud.banner(t(`worlds.${w}.name`), t('ui.kingdom', { n: w + 1 }));
  }

  interact(it) {
    const w = this.cur.w;
    if (it.kind === 'ship') { this.showTravel(); return; }
    if (it.kind === 'portal') {
      if (it.locked) { this.hud.toast(it.target.type === 'boss' ? t('ui.needMoonsBoss', { n: this.bossReq(w) }) : t('ui.needKey'), 2.5); this.audio.play('hurt'); return; }
      this.enterChallenge(it.target);
      return;
    }
    const npcName = t('npc.' + it.kind + 'Name');
    const say = (key, after) => { this.state = 'story'; this.hud.dialog([{ role: 'e', who: npcName, text: t('npc.' + key, { n: SHOP_PRICE }) }], () => { this.state = 'play'; if (after) after(); }); };
    const front = new THREE.Vector3(it.x + (this.player.pos.x - it.x) * 0.5, it.y + 2.2, it.z + (this.player.pos.z - it.z) * 0.5);
    if (it.kind === 'shop') {
      if (this.hasMoon(w, 'shop')) say('shopDone');
      else if (this.sparks < SHOP_PRICE) say('shopPoor');
      else say('shopSold', () => { this.sparks -= SHOP_PRICE; this.refreshHud(); this.level.spawnMoon(front, 'shop'); });
    } else if (it.kind === 'lost') {
      const L = this.level;
      if (this.hasMoon(w, 'lost')) say('lostDone');
      else if (L.lost && L.lost.state === 'carried') say('lostThanks', () => { L.lost.state = 'home'; L.lost.pos.set(it.x + 0.6, it.y + 0.3, it.z); this.level.spawnMoon(front, 'lost'); });
      else say('lostAsk');
    }
  }

  enterChallenge(target) {
    const w = this.cur.w;
    this.returnTo = { w, target };
    const i = target.type === 'boss' ? BOSS_IDX : target.type === 'bonus' ? BONUS_IDX : target.i;
    this.hud.fade(true);
    this.audio.play('confirm');
    setTimeout(() => { this.hud.fade(false); this.startLevel(w, i); }, 350);
    this.state = 'transition';
  }

  showTravel() {
    this.state = 'menu';
    this.setTouch(false);
    this.input.releaseLock();
    const items = WORLDS.map((W, w) => {
      const open = this.kingdomOpen(w);
      const here = w === this.cur.w;
      const sub = open ? (here ? t('ui.here') : '') : `🔒 ${this.travelReason(w)}`;
      return {
        html: `<span class="lvl"><span class="nm">${w + 1} · ${open ? t(`worlds.${w}.name`) : '???'}${sub ? `<small>${sub}</small>` : ''}</span><span class="ic">☾ ${this.moonCount(w)} / ${KINGDOM_TOTAL}${this.save.bosses[w] ? ' <span class="shard full"></span>' : ''}</span></span>`,
        disabled: !open,
        action: () => { if (here) this.resume(); else this.travelTo(w); },
      };
    });
    items.push({ label: t('ui.back'), action: () => this.resume() });
    this.hud.showMenu({ cls: 'map', title: `<div class="worldname">${t('ui.travel')}</div>`, subtitle: `☾ ${this.moonCountAll()} / ${this.moonTotalAll()}`, items, sel: this.cur.w });
  }

  travelTo(w) {
    this.hud.hideMenu();
    this.audio.play('bounce');
    this.hud.fade(true);
    this.state = 'transition';
    setTimeout(() => { this.hud.fade(false); this.enterKingdom(w); }, 600);
  }

  moonList() {
    const w = this.cur.w;
    const label = (id) => {
      const m = id.match(/^(peak|branch|hid|pound|crate)(\d)$/);
      if (m) return `${t('moonTypes.' + m[1])} ${+m[2] + 1}`;
      const c = id.match(/^(c(\d)|b)(g|m0|m1|m2)$/);
      if (c) return `${c[2] !== undefined ? t(`worlds.${w}.levels.${c[2]}`) : t('ui.bonusLevel')}: ${t('moonTypes.' + { g: 'goal', m0: 'secret', m1: 'secret', m2: 'sparks' }[c[3]])}`;
      return t('moonTypes.' + id);
    };
    const rows = ALL_IDS.map((id) => `<div class="mrow ${this.hasMoon(w, id) ? 'got' : ''}"><span class="moon ${this.hasMoon(w, id) ? 'full' : ''}"></span> ${this.hasMoon(w, id) ? label(id) : '? ? ?'}${id === 'boss' ? ' ×3' : ''}</div>`).join('');
    this.hud.showMenu({ title: t('ui.moonList'), subtitle: `${t(`worlds.${w}.name`)} · ☾ ${this.moonCount(w)} / ${KINGDOM_TOTAL}`, body: `<div class="mlist">${rows}</div>`, items: [{ label: t('ui.back'), action: () => { this.state = 'play'; this.pause(); } }] });
  }

  startLevel(w, i) {
    this.loadLevel(w, i);
    this.hearts = 3; this.levelGot = 0; this.levelTime = 0;
    this.hud.show(true);
    this.refreshHud();
    this.state = 'play';
    this.setTouch(true);
    this.audio.playMusic(i === BONUS_IDX ? 'bonus' : WORLDS[w].music);
    this.hud.banner(this.levelName(w, i), `${t(`worlds.${w}.name`)} · ${i === BOSS_IDX ? t('ui.boss') : i === BONUS_IDX ? '★' : t('ui.challenge')}`);
  }

  refreshHud() {
    if (!this.level) return;
    this.hud.setHearts(this.hearts);
    this.hud.setLives(null);
    this.hud.setSparks(this.sparks, this.levelGot, this.inKingdom ? null : this.level.sparkTotal);
    this.hud.setShards(this.shardCount());
    const sp = this.level.spec;
    if (sp.kind === 'kingdom') this.hud.setMoonCount(this.moonCount(sp.world), KINGDOM_TOTAL);
    else if (sp.kind === 'boss') this.hud.setMoons(null);
    else this.hud.setMoons([sp.idPrefix + 'g', sp.idPrefix + 'm0', sp.idPrefix + 'm1', sp.idPrefix + 'm2'].map((id) => this.hasMoon(sp.world, id)));
  }

  setTouch(v) { document.getElementById('touch').classList.toggle('active', v); }

  pause() {
    if (this.state !== 'play') return;
    this.state = 'paused';
    this.setTouch(false);
    this.input.releaseLock();
    const { w, i } = this.cur;
    const again = () => { this.state = 'play'; this.pause(); };
    const items = [{ label: t('ui.resume'), action: () => this.resume() }];
    if (this.inKingdom) {
      items.push({ label: t('ui.moonList'), action: () => this.moonList() });
      items.push({ label: t('ui.toShip'), action: () => { this.hud.hideMenu(); this.enterKingdom(w); } });
    } else {
      items.push({ label: t('ui.restartLevel'), action: () => { this.hud.hideMenu(); this.startLevel(w, i); } });
      items.push({ label: t('ui.leaveChallenge'), action: () => { this.hud.hideMenu(); this.enterKingdom(w, this.returnTo && this.returnTo.target); } });
    }
    items.push(...this.settingsItems(again));
    items.push({ label: t('ui.mainMenu'), action: () => { this.writeSave(); this.hud.hideMenu(); this.toTitle(); } });
    this.hud.showMenu({ title: t('ui.pause'), subtitle: `${t(`worlds.${w}.name`)}${this.inKingdom ? '' : ' · ' + this.levelName(w, i)} · ☾ ${this.moonCount(w)} / ${KINGDOM_TOTAL}`, items });
  }

  toggleFullscreen() {
    try {
      if (window.lumiDesktop) { window.lumiDesktop.toggleFullscreen(); return; }
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen().catch(() => {});
    } catch (e) { /* nicht erlaubt */ }
  }

  // Präsentationsmodus für Store-Grafiken: ?promo=1&w=..&l=..&a=winkel&d=abstand&h=höhe&logo=center|left|none
  startPromo(p) {
    const w = +p.get('w') || 0, i = p.has('l') ? +p.get('l') : -1;
    this.loadLevel(w, i);
    this.state = 'promo';
    this.hud.show(false);
    this.setTouch(false);
    document.getElementById('dialog').style.display = 'none';
    this.promo = { a: +(p.get('a') || 0.5), d: +(p.get('d') || 9), h: +(p.get('h') || 3), fx: +(p.get('fx') || 0), fz: +(p.get('fz') || 0), look: +(p.get('ly') || 1.2) };
    const pl = this.player; const sp = this.level.spawnPoint;
    pl.reset(sp.x + this.promo.fx, sp.y, sp.z + this.promo.fz, p.has('face') ? +p.get('face') : this.promo.a);
    for (const cp of this.level.checkpoints) cp.mesh.visible = false;
    if (p.has('boss') && this.level.boss) {
      const b = this.level.boss, c = b.center;
      const cp = this.level.checkpoints[this.level.checkpoints.length - 1];
      const dx = cp.x - c.x, dz = cp.z - c.z, l = Math.hypot(dx, dz);
      pl.reset(c.x + dx / l * 4.5, c.y, c.z + dz / l * 4.5, Math.atan2(-dx, -dz));
      this.promo.a = Math.atan2(dx, dz);
      b.pos.set(c.x, b.top + 6.5, c.z);
      b.mesh.rotation.y = Math.atan2(dx, dz);
      b.state = 'promo';
    }
    const logo = p.get('logo') || 'none';
    if (logo !== 'none') {
      const el = document.createElement('div');
      el.className = 'promo-logo ' + logo;
      el.innerHTML = `<span class="logo">LUMI</span><div class="promo-sub">${p.get('sub') === '0' ? '' : t('ui.subtitle')}</div>`;
      document.body.appendChild(el);
    }
  }

  resume() {
    this.hud.hideMenu();
    this.state = 'play';
    this.setTouch(true);
    this.acc = 0;
  }

  // ---------------- Ereignisse aus der Welt ----------------
  addSparks(n, pos, bonus = false) {
    this.sparks += n;
    if (!bonus) this.levelGot += n;
    this.audio.play('spark');
    if (pos) this.particles.burst(pos, { count: 6, color: [0xffe066, 0xffffff], speed: 3, size: 0.5, tex: 'sparkle', additive: true, life: 0.5 });
    const L = this.level;
    if (!bonus && (L.spec.kind === 'normal' || L.spec.kind === 'bonus') && !L.allSparksDone && L.sparkTotal > 0 && this.levelGot >= L.sparkTotal) {
      L.allSparksDone = true;
      this.hud.toast(t('ui.moonstoneAll'), 3);
      L.spawnSparkMoonstone(this.player.pos);
    }
    this.refreshHud();
  }

  collectMoon(id, pos) {
    const w = this.cur.w;
    const fresh = !this.hasMoon(w, id);
    const before = this.moonCount(w);
    this.moons(w)[id] = id === 'boss' ? 3 : 1;
    this.writeSave();
    this.audio.play(fresh ? 'shard' : 'heart');
    this.particles.burst(pos, { count: 28, color: [0x9ab8ff, 0xffffff, 0xd8e8ff], speed: 7, size: 0.9, tex: 'sparkle', additive: true, life: 1 });
    if (fresh) {
      this.hud.banner(t('ui.moonShard'), `☾ ${this.moonCount(w)} / ${KINGDOM_TOTAL}`, 2.2);
      const now = this.moonCount(w);
      if (before < this.bossReq(w) && now >= this.bossReq(w) && this.inKingdom) { this.hud.toast(t('ui.gateOpen'), 3.5); this.level.unlockBossPortal && this.level.unlockBossPortal(); }
      if (w < 7 && this.save.bosses[w] && before < TRAVEL_REQ[w] && now >= TRAVEL_REQ[w]) this.hud.toast(t('ui.shipReady'), 3.5);
    } else this.hud.toast(t('ui.moonstoneOld'), 2);
    this.refreshHud();
  }

  collectKey(pos) {
    this.save.keys[this.cur.w] = true; this.writeSave();
    this.audio.play('oneup');
    this.hud.toast(t('ui.keyFound'), 3.5);
    this.particles.burst(pos, { count: 24, color: [0xffe066, 0xffffff], speed: 7, size: 0.8, tex: 'sparkle', additive: true });
    if (this.level.unlockBonusPortal) this.level.unlockBonusPortal();
  }

  addHeart(pos) {
    this.hearts = Math.min(3, this.hearts + 1);
    this.audio.play('heart');
    this.particles.burst(pos, { count: 8, color: 0xff6d8a, speed: 3, size: 0.6, tex: 'glow', additive: true });
    this.refreshHud();
  }

  setCheckpoint(cp) {
    this.checkpoint = { x: cp.x, y: cp.y, z: cp.z, yaw: this.camYaw };
    this.audio.play('checkpoint');
    this.hud.toast(t('ui.checkpoint'));
    this.particles.burst(new THREE.Vector3(cp.x + 0.6, cp.y + 2, cp.z), { count: 12, color: 0xffc070, speed: 3, size: 0.6, tex: 'glow', additive: true });
  }

  onPlayerHurt() {
    this.hearts--;
    this.audio.play('hurt');
    this.shake(0.3);
    this.refreshHud();
    if (this.hearts <= 0) this.playerDied();
  }

  onPlayerFell() {
    this.player.alive = false;
    this.hearts--;
    this.refreshHud();
    this.audio.play('hurt');
    if (this.hearts <= 0) { this.playerDied(); return; }
    this.state = 'respawn'; this.timer = 0.6;
    this.hud.fade(true);
  }

  // kein Game Over: Lumi verliert 10 Funken und leuchtet am letzten Checkpoint wieder auf
  playerDied() {
    this.player.alive = false;
    this.audio.play('die');
    this.particles.burst(new THREE.Vector3(this.player.pos.x, this.player.pos.y + 0.6, this.player.pos.z), { count: 20, color: [0xffc070, 0xffffff], speed: 5, size: 0.7, tex: 'glow', additive: true });
    const lost = Math.min(10, this.sparks);
    this.sparks -= lost;
    if (lost) this.hud.toast(t('ui.lostSparks', { n: lost }), 2);
    this.refreshHud();
    this.state = 'dying'; this.timer = 1.4;
  }

  respawn() {
    const c = this.checkpoint;
    this.camYaw = c.yaw;
    this.player.reset(c.x, c.y, c.z + 0.01, this.camYaw + Math.PI);
    this.player.invuln = 1.2;
    this.camTarget.set(c.x, c.y + 1.3, c.z);
    if (this.level.lost && this.level.lost.state === 'carried') { const L = this.level.lost; L.state = 'lying'; L.pos.set(L.home.x, L.home.y, L.home.z); }
  }

  // Ziel einer Herausforderung / Kristall nach dem Boss
  collectShard(goal) {
    this.state = 'clear'; this.timer = 0;
    this.setTouch(false);
    this.input.releaseLock();
    this.audio.stopMusic();
    this.audio.play('shard');
    this.shake(0.2);
    this.particles.burst(goal.pos, { count: 30, color: [0x9ff4ff, 0xffffff, 0xffe066], speed: 9, size: 0.8, tex: 'sparkle', additive: true, life: 1 });
    goal.mesh.visible = false; goal.beam.visible = false;
    this.hud.hint(null);
    const { w, i } = this.cur;
    const boss = i === BOSS_IDX;
    const final = boss && WORLDS[w].boss.final;
    const r = this.rec(w, i);
    this.wasDone = r.done;
    r.done = true;
    if (boss) this.save.bosses[w] = true;
    this.moons(w)[boss ? 'boss' : this.level.spec.idPrefix + 'g'] = boss ? 3 : 1;
    r.best = Math.max(r.best, this.levelGot);
    if (this.level.allSparksDone) r.all = true;
    this.gotMedal = !boss && this.levelTime <= this.level.par;
    if (this.gotMedal) r.medal = true;
    r.time = r.time ? Math.min(r.time, this.levelTime) : this.levelTime;
    this.writeSave();
    this.refreshHud();
    this.hud.banner(final ? t('ui.coreFound') : boss ? t('ui.shardFound') : t('ui.moonShard'), boss && !final ? t('ui.shardCount', { n: this.shardCount() }) + ' · ☾ +3' : `☾ ${this.moonCount(w)} / ${KINGDOM_TOTAL}`, 2.6);
  }

  showClear() {
    const { w, i } = this.cur;
    const boss = i === BOSS_IDX;
    const final = boss && WORLDS[w].boss.final;
    this.state = 'clearmenu';
    this.audio.play('clear');
    const fmt = (x) => `${Math.floor(x / 60)}:${String(Math.floor(x % 60)).padStart(2, '0')}`;
    let body = `<div class="stats"><div><span class="spark-icon"></span> ${t('ui.sparks')}: <b>${this.levelGot} / ${this.level.sparkTotal}</b></div>
      <div>⏱ ${t('ui.time')}: <b>${fmt(this.levelTime)}</b>${boss ? '' : ` &nbsp;(${t('ui.par')}: ${fmt(this.level.par)})`}</div>`;
    if (!boss) { const p = this.level.spec.idPrefix; body += `<div class="moonsrow">${['g', 'm0', 'm1', 'm2'].map((k) => `<span class="moon ${this.hasMoon(w, p + k) ? 'full' : ''}"></span>`).join('')}</div>`; }
    if (this.gotMedal) body += `<div class="medal">⏱ ${t('ui.medal')}</div>`;
    body += '</div>';
    const back = () => this.enterKingdom(w, this.returnTo ? this.returnTo.target : { type: boss ? 'boss' : 'challenge', i });
    const items = [];
    if (boss) {
      items.push({
        label: t('ui.next'), action: () => {
          this.hud.hideMenu();
          this.state = 'story';
          this.dialog(t(`story.after.${w}`), () => {
            if (final) { this.ending(); return; }
            back();
            if (this.moonCount(w) >= TRAVEL_REQ[w]) this.hud.toast(t('ui.shipReady'), 3.5);
            else this.hud.toast(t('ui.needMoonsShip', { n: TRAVEL_REQ[w] }), 3.5);
          }, w);
        },
      });
    } else {
      items.push({ label: t('ui.backToKingdom'), action: back });
      items.push({ label: t('ui.restartLevel'), action: () => { this.hud.hideMenu(); this.startLevel(w, i); } });
    }
    this.hud.showMenu({ title: boss ? t('ui.bossDefeated', { name: this.levelName(w, i) }) : t('ui.cleared', { name: this.levelName(w, i) }), body, items });
  }

  bossDefeated() {
    this.audio.play('shard');
    this.hud.toast(t('ui.fogClears'), 3);
    this.audio.playMusic('ending');
  }

  ending() {
    this.state = 'ending';
    this.hud.show(false);
    this.lighthouseLit = true;
    this.loadLevel(0, 0);
    this.player.mesh.visible = false;
    this.audio.playMusic('ending');
    this.dialog(t('story.ending'), () => {
      const all = this.moonCountAll() >= this.moonTotalAll();
      this.hud.showMenu({
        cls: 'title-screen',
        title: `<span class="logo">${t('ui.theEnd')}</span>`,
        subtitle: t('ui.thanks'),
        body: `<p>${t('ui.endText')}</p><p>☾ ${this.moonCountAll()} / ${this.moonTotalAll()}</p>${all ? `<p>${t('ui.allMoonstones')}</p>` : `<p>${t('ui.keepSearching')}</p>`}<p class="credits">${t('ui.credits')}</p>`,
        items: [{ label: t('ui.continue'), action: () => this.enterKingdom(7) }, { label: t('ui.mainMenu'), action: () => { this.hud.hideMenu(); this.toTitle(); } }],
      });
    });
  }

  // Test-Helfer: simuliert einen Sprung von A nach B mit echter Physik (wird vom Level-Test genutzt)
  // Prüft alle notierten Sprünge eines Levels (Mover in Position, Blinkplatten an, Geysire aus)
  debugTestLevel(w, i) {
    this.loadLevel(w, i);
    this.state = 'test';
    const L = this.level;
    L.freeze = true;
    const fails = [];
    L.links.forEach((lk, n) => {
      if (lk.o.mover !== undefined) L.setMover(lk.o.mover, lk.o);
      let r1 = this.debugHop(lk.a, lk.b, { jump: 1, ...lk.o });
      if (!r1.ok && lk.o.mover !== undefined) L.setMover(lk.o.mover, lk.o);
      if (!r1.ok) r1 = this.debugHop(lk.a, lk.b, { ...lk.o, jump: 1, double: 1 });
      if (!r1.ok) fails.push({ n, a: lk.a.map((v) => +v.toFixed(1)), b: lk.b.map((v) => +v.toFixed(1)), o: lk.o, r: r1 });
    });
    return { links: L.links.length, fails, sparks: L.sparkTotal, ms: L.moonstones.length, key: !!L.keyItem, par: L.par, platforms: L.colliders.length };
  }

  debugHop(a, b, o = {}) {
    const p = this.player, L = this.level;
    for (const e of L.enemies) { e.alive = false; e.mesh.visible = false; }
    p.reset(a[0], a[1], a[2], 0);
    p.ground = null; p.grounded = false;
    let dj = false;
    for (let i = 0; i < 120 * 8; i++) {
      if (o.via && p.pos.y >= o.viaY) o = { ...o, via: null };
      const useVia = !!o.via;
      const tx = useVia ? o.via[0] : b[0], tz = useVia ? o.via[1] : b[2];
      const dx = tx - p.pos.x, dz = tz - p.pos.z;
      const yaw = Math.atan2(-dx, -dz);
      const near = !useVia && Math.hypot(dx, dz) < 0.5;
      const snap = { move: (near || (useVia && Math.hypot(dx, dz) < 0.3)) ? { x: 0, y: 0 } : { x: 0, y: -1 }, jumpHeld: true, jumpPressed: i === 2 && !!o.jump, spinPressed: false, poundPressed: false };
      if (o.double && !dj && i > 6 && !p.grounded && p.vel.y < (o.djAt ?? 0.5)) { snap.jumpPressed = true; dj = true; }
      L.stepWorld(STEP);
      if (p.pos.y < L.killY + 2) return { fell: true, at: p.pos.toArray().map((v) => +v.toFixed(2)) };
      p.step(STEP, snap, L, yaw);
      if (i > 12 && p.grounded && p.ground && !p.ground.bounce && Math.abs(p.vel.y) < 1e-6 && Math.hypot(p.vel.x, p.vel.z) < 0.01 + (near ? 9 : 0) && near) {
        const gc = p.ground;
        return { landed: +p.pos.y.toFixed(2), ok: Math.abs(p.pos.y - b[1]) < 0.05, at: p.pos.toArray().map((v) => +v.toFixed(2)),
          on: gc.type + (gc.crate ? ' crate' : '') + (gc.dynamic ? ' mover' : '') + (gc.r ? ' r' + gc.r.toFixed(2) : '') + (gc.type === 'box' ? ` ${(gc.maxX - gc.minX).toFixed(1)}x${(gc.maxZ - gc.minZ).toFixed(1)}` : '') + ` y${gc.minY.toFixed(1)}..${gc.maxY.toFixed(1)}` };
      }
    }
    return { timeout: true, at: p.pos.toArray().map((v) => +v.toFixed(2)), y: p.pos.y };
  }

  promptText(it) {
    if (it.kind === 'ship') return t('ui.travel');
    if (it.kind === 'portal') return `${t('ui.enter')}: ${it.name}`;
    return `${t('ui.talk')}: ${t('npc.' + it.kind + 'Name')}`;
  }

  banner(t, s) { this.hud.banner(t, s); }
  shake(a) { this.shakeT = Math.max(this.shakeT, a); }

  // ---------------- Hauptschleife ----------------
  frame(now) {
    requestAnimationFrame(this.frame);
    const dt = Math.max(0, Math.min(0.1, (now - this.last) / 1000));
    this.last = now;
    const input = this.input;
    input.pollPad();
    if (input.pressed.has('KeyM')) { const m = this.audio.toggleMute(); this.hud.toast(t(m ? 'ui.soundOff' : 'ui.soundOn'), 1); }

    if (this.hud.dialogOpen) this.hud.dialogInput(input);
    else if (this.hud.menu) this.hud.menuInput(input);

    const L = this.level;
    switch (this.state) {
      case 'play':
        if (input.pausePressed()) { this.pause(); break; }
        this.simulate(dt);
        if (this.state !== 'play') break;
        this.hud.hint(L.checkpointHint(this.player));
        this.hud.setTimer(this.inKingdom ? null : this.levelTime);
        {
          const it = L.nearestInteractable(this.player.pos);
          this.hud.prompt(it ? this.promptText(it) : null);
          if (it && input.interactPressed()) this.interact(it);
        }
        break;
      case 'paused':
        if (input.pausePressed()) this.resume();
        break;
      case 'respawn':
        this.timer -= dt;
        this.stepWorldOnly(dt);
        if (this.timer <= 0.3 && !this.player.alive) { this.respawn(); }
        if (this.timer <= 0) { this.hud.fade(false); this.state = 'play'; }
        break;
      case 'dying':
        this.timer -= dt;
        this.stepWorldOnly(dt);
        if (this.timer <= 0.4) this.hud.fade(true);
        if (this.timer <= 0) {
          this.hud.fade(false);
          this.hearts = 3; this.refreshHud(); this.respawn(); this.state = 'play';
        }
        break;
      case 'clear':
        this.timer += dt;
        this.stepWorldOnly(dt);
        this.player.facing += dt * 3;
        if (this.timer > 3) this.showClear();
        break;
      default:
        this.stepWorldOnly(dt);
    }

    if (this.state !== 'paused') {
      L.update(dt, this.player, this.camera);
      this.particles.update(dt);
    }
    this.player.updateVisual(dt, L);
    this.updateCamera(dt);
    L.updateSun(this.camTarget);
    this.hud.update(dt);
    this.gfx.render();
    this.gfx.adapt(dt);
    if (this.showFps && this.gfx.win.n === 0) {
      const r = this.renderer;
      document.getElementById('fps').textContent = `${this.gfx.fps} FPS · ${Math.round(this.gfx.scale * 100)}% · ${r.domElement.width}×${r.domElement.height}`;
    }
    input.endFrame();
  }

  stepWorldOnly(dt) {
    this.acc += dt;
    while (this.acc >= STEP) { this.level.stepWorld(STEP); this.acc -= STEP; }
  }

  simulate(dt) {
    const input = this.input;
    const snap = {
      move: input.move(), jumpHeld: input.jumpHeld(),
      jumpPressed: input.jumpPressed(), spinPressed: input.spinPressed(), poundPressed: input.poundPressed(),
    };
    this.acc += dt;
    this.levelTime += dt;
    // Kamera dreht leicht mit, wenn man seitwärts läuft (nur ohne manuelle Kamerasteuerung)
    if (this.camManualT <= 0 && Math.abs(snap.move.x) > 0.3 && this.player.grounded) this.camYaw -= snap.move.x * dt * 0.7;
    while (this.acc >= STEP) {
      this.level.stepWorld(STEP);
      this.player.step(STEP, snap, this.level, this.camYaw);
      this.level.interact(STEP, this.player);
      snap.jumpPressed = snap.spinPressed = snap.poundPressed = false;
      this.acc -= STEP;
      if (this.state !== 'play') break;
    }
  }

  updateCamera(dt) {
    const cam = this.camera, p = this.player.pos;
    const ci = this.input.camera();
    if (this.state === 'promo') {
      const pr = this.promo, p0 = this.player.pos;
      cam.position.set(p0.x + Math.sin(pr.a) * pr.d, p0.y + pr.h, p0.z + Math.cos(pr.a) * pr.d);
      cam.lookAt(p0.x, p0.y + pr.look, p0.z);
      return;
    }
    if (this.state === 'title' || this.state === 'ending' || (this.state === 'story' && !this.hud.el.hud.classList.contains('show'))) {
      const t = performance.now() / 1000;
      let c = this.level.spawnPoint, dist = 16, h = 5;
      if (this.state === 'ending' && this.level.lighthouseObj) { c = this.level.lighthouseObj.position; dist = 34; h = 10; }
      const a = t * 0.08;
      cam.position.set(c.x + Math.sin(a) * dist, c.y + h + Math.sin(t * 0.3) * 1, c.z + Math.cos(a) * dist);
      cam.lookAt(c.x, c.y + (this.state === 'ending' ? 12 : 2), c.z);
      return;
    }
    if (this.state === 'play' || this.state === 'respawn' || this.state === 'dying' || this.state === 'clear') {
      const manual = ci.dx || ci.dy || ci.kx || ci.ky;
      if (manual) this.camManualT = 1.2; else if (this.camManualT > 0) this.camManualT -= dt;
      this.camYaw -= ci.dx + ci.kx * dt * 2.6;
      this.camPitch = THREE.MathUtils.clamp(this.camPitch + ci.dy + ci.ky * dt * 1.5, -0.15, 1.15);
    }
    if (this.state === 'clear') this.camYaw += dt * 0.5;
    // Ziel folgt dem Spieler (vertikal etwas träger)
    const bossCam = this.level.boss && this.level.boss.active;
    const tgt = new THREE.Vector3(p.x, p.y + (bossCam ? 2.8 : 1.3), p.z);
    const kh = 1 - Math.exp(-dt * 10), kv = 1 - Math.exp(-dt * (this.player.grounded ? 6 : 3));
    this.camTarget.x += (tgt.x - this.camTarget.x) * kh;
    this.camTarget.z += (tgt.z - this.camTarget.z) * kh;
    this.camTarget.y += (tgt.y - this.camTarget.y) * kv;
    if (tgt.y < this.camTarget.y - 3) this.camTarget.y = tgt.y + 3;
    const dist = this.state === 'clear' ? 7 : bossCam ? 14 : this.camDist;
    if (bossCam && this.camManualT <= 0) this.camPitch += (0.22 - this.camPitch) * Math.min(1, dt * 1.5);
    const cp = Math.cos(this.camPitch), sp = Math.sin(this.camPitch);
    const dir = new THREE.Vector3(Math.sin(this.camYaw) * cp, sp, Math.cos(this.camYaw) * cp);
    let d = dist;
    this.raycaster.set(this.camTarget, dir);
    this.raycaster.far = dist;
    const hits = this.raycaster.intersectObjects(this.level.cameraMeshes, false);
    if (hits.length) d = Math.max(1.5, hits[0].distance - 0.4);
    cam.position.copy(this.camTarget).addScaledVector(dir, d);
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const s = this.shakeT * 0.6;
      cam.position.x += (Math.random() - 0.5) * s; cam.position.y += (Math.random() - 0.5) * s; cam.position.z += (Math.random() - 0.5) * s;
    }
    cam.lookAt(this.camTarget);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  try {
    window.__lumi = new Game();
  } catch (e) {
    console.error(e);
    document.getElementById('error').textContent = 'Fehler beim Starten: ' + e.message + ' – Dein Browser braucht WebGL.';
    document.getElementById('error').style.display = 'block';
  }
});
