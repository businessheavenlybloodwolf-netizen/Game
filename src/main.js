// LUMI und das Morgenlicht – Hauptspiel
import * as THREE from 'three';
import { createTextures } from './textures.js';
import { setTextures } from './models.js';
import { GameAudio } from './audio.js';
import { Input } from './input.js';
import { Particles } from './particles.js';
import { Player } from './player.js';
import { Level } from './world.js';
import { HANDMADE } from './levels.js';
import { WORLDS, WORLD_REQ, BOSS_IDX, BONUS_IDX, LEVELS_PER_WORLD } from './worlds.js';
import { HUD } from './ui.js';
import { t, setLang, detectLang, LANGS, getLang } from './i18n/index.js';

const STEP = 1 / 120;
const SAVE_KEY = 'lumi_save_v2';

function controlsHtml() {
  const c = (k) => t('controls.' + k);
  const row = (a, b, p) => `<tr><td>${c(a)}</td><td>${b}</td><td>${p}</td></tr>`;
  return `<table class="controls"><tr><th></th><th>${c('keyboard')}</th><th>${c('gamepad')}</th></tr>
${row('run', c('kRun'), c('pRun'))}${row('jump', c('kJump'), 'A')}${row('spin', c('kSpin'), 'X / B')}
${row('pound', c('kPound'), 'LB / RB')}${row('camera', c('kCam'), c('pCam'))}${row('pause', c('kPause'), 'Start')}${row('mute', 'M', '')}
</table><p class="tip">${c('tip')}</p>`;
}

class Game {
  constructor() {
    setLang(detectLang());
    this.t = t;
    const canvas = document.getElementById('game');
    this.canvas = canvas;
    const renderer = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, matchMedia('(pointer: coarse)').matches ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
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
    this.save = this.loadSave();
    this.lives = 3; this.hearts = 3; this.sparks = 0;
    this.levelGot = 0; this.levelTime = 0; this.timer = 0;
    this.lighthouseLit = false;
    this.state = 'title';
    this.mapWorld = 0;
    this.applyLangToDom();

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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

    const params = new URLSearchParams(location.search);
    if (params.has('w')) {
      this.startLevel(+params.get('w') || 0, +params.get('l') || 0, true);
    } else this.toTitle();
    this.last = performance.now();
    this.frame = this.frame.bind(this);
    requestAnimationFrame(this.frame);
  }

  applyLangToDom() {
    document.querySelector('[data-btn="jump"]').textContent = t('ui.jump');
    document.querySelector('[data-btn="spin"]').textContent = t('ui.spin');
    document.querySelector('[data-btn="pound"]').textContent = t('ui.pound');
    document.querySelector('#dialog .next').textContent = t('ui.next') + ' ▶';
    document.title = 'LUMI – ' + t('ui.subtitle');
  }

  // ---------------- Fortschritt ----------------
  spec(w, i) {
    const kind = i === BOSS_IDX ? 'boss' : i === BONUS_IDX ? 'bonus' : 'normal';
    const star = !!this.star;
    const s = { world: w, index: i, kind, star, seed: (w + 1) * 1000 + i * 37 + 5 + (star ? 50000 : 0) };
    if (i === 0 && HANDMADE[w] && !star) { s.build = HANDMADE[w].build; s.seed = HANDMADE[w].seed; }
    return s;
  }
  pre() { return this.star ? 's' : ''; }
  levelName(w, i) {
    if (i === BOSS_IDX) return t(`worlds.${w}.boss`);
    if (i === BONUS_IDX) return t('ui.bonusLevel');
    return t(`worlds.${w}.levels.${i}`);
  }
  rec(w, i) {
    const k = this.pre() + w + '-' + i;
    if (!this.save.levels[k]) this.save.levels[k] = { done: false, ms: [0, 0, 0], best: 0, all: false, time: 0, medal: false };
    return this.save.levels[k];
  }
  hasMoonstone(spec, idx) { return !!this.rec(spec.world, spec.index).ms[idx]; }
  hasKey(w) { return !!this.save.keys[this.pre() + w]; }
  moonCount(star = this.star) { let n = 0; for (const k in this.save.levels) if ((k[0] === 's') === !!star) n += this.save.levels[k].ms.reduce((a, b) => a + b, 0); return n; }
  moonTotal() { return WORLDS.length * 6 * 3; }
  shardCount() { let n = 0; for (let w = 0; w < 7; w++) if (this.save.bosses[w]) n++; return n; }
  starOpen() { return !!this.save.bosses[7]; }
  worldOpen(w) {
    if (this.star) return this.starOpen() && (w === 0 || !!this.save.bosses['s' + (w - 1)]);
    return w === 0 || (!!this.save.bosses[w - 1] && this.moonCount() >= WORLD_REQ[w]);
  }
  levelOpen(w, i) {
    if (!this.worldOpen(w)) return false;
    if (i === 0) return true;
    if (i === BONUS_IDX) return this.hasKey(w);
    return this.rec(w, i - 1).done;
  }
  lockReason(w, i) {
    if (!this.worldOpen(w)) return w > 0 && !this.save.bosses[this.pre() + (w - 1)] ? t('ui.needBoss', { n: w }) : t('ui.needMoonstones', { n: WORLD_REQ[w] });
    if (i === BONUS_IDX) return t('ui.needKey');
    return t('ui.needLevels');
  }
  hasProgress() { return Object.keys(this.save.levels).length > 0; }

  // ---------------- Speicherstand ----------------
  loadSave() {
    const empty = { levels: {}, keys: {}, bosses: {}, seen: {}, sparks: 0 };
    try { return { ...empty, ...(JSON.parse(localStorage.getItem(SAVE_KEY)) || {}) }; } catch (e) { return empty; }
  }
  writeSave() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.save)); } catch (e) { /* egal */ } }

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
  }

  // ---------------- Menüs ----------------
  toTitle() {
    this.state = 'title';
    this.input.releaseLock();
    this.lighthouseLit = false;
    if (!this.level || this.cur.w !== 0 || this.cur.i !== 0) this.loadLevel(0, 0);
    this.hud.show(false);
    this.setTouch(false);
    this.audio.playMusic('title');
    const prog = this.hasProgress();
    const items = [];
    if (prog) items.push({ label: t('ui.continue'), action: () => { this.star = false; this.showMap(this.save.lastWorld ?? 0); } });
    items.push({ label: t('ui.newGame'), action: () => (prog ? this.confirmNew() : this.newGame()) });
    items.push({ label: `${t('ui.language')}: ${LANGS[getLang()].name}`, action: () => this.langMenu(() => this.toTitle()) });
    items.push({ label: t('ui.controls'), action: () => this.showControls(() => this.toTitle()) });
    items.push({ label: `${t('ui.sound')}: ${this.audio.muted ? t('ui.off') : t('ui.on')}`, action: () => { this.audio.toggleMute(); this.toTitle(); } });
    this.hud.showMenu({ cls: 'title-screen', title: '<span class="logo">LUMI</span>', subtitle: t('ui.subtitle'), items });
  }

  confirmNew() {
    this.hud.showMenu({
      title: t('ui.newGame') + '?',
      body: `${t('ui.progress')}: ${this.moonCount()} ${t('ui.moonstones')} → 0`,
      items: [
        { label: t('ui.newGame'), action: () => { this.save = { levels: {}, keys: {}, bosses: {}, seen: {}, sparks: 0 }; this.writeSave(); this.newGame(); } },
        { label: t('ui.back'), action: () => this.toTitle() },
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
    this.lives = 3; this.sparks = 0;
    this.state = 'story';
    this.audio.playMusic('title');
    this.dialog(t('story.intro'), () => this.playLevel(0, 0));
  }

  dialog(lines, done, w = 0) {
    const conv = (lines || []).map(([role, text]) => ({ role, text, who: role === 'b' ? t(`worlds.${w}.boss`) : t('story.who.' + role) }));
    this.hud.dialog(conv, done);
  }

  levelLabel(w, i) {
    const r = this.rec(w, i);
    const open = this.levelOpen(w, i);
    const num = i === BOSS_IDX ? '☠' : i === BONUS_IDX ? '★' : `${w + 1}-${i + 1}`;
    let icons = '';
    if (i !== BOSS_IDX) icons += r.ms.map((v) => `<span class="moon ${v ? 'full' : ''}"></span>`).join('');
    if (r.all) icons += ' <span class="spark-icon"></span>';
    if (r.medal) icons += ' <span class="medal">⏱</span>';
    if (i === 2 && this.hasKey(w)) icons += ' <span class="keyic">🗝</span>';
    if (i === BOSS_IDX && r.done) icons += ' <span class="shard full"></span>';
    const name = open ? this.levelName(w, i) : '???';
    const sub = open ? '' : `<small>🔒 ${this.lockReason(w, i)}</small>`;
    return `<span class="lvl"><span class="nm">${num} · ${name}${sub}</span><span class="ic">${icons}</span></span>`;
  }

  showMap(w, sel = null) {
    w = Math.max(0, Math.min(WORLDS.length - 1, w));
    this.mapWorld = w;
    this.state = 'map';
    this.hud.show(false);
    this.setTouch(false);
    this.input.releaseLock();
    const open = this.worldOpen(w);
    if (!this.level || this.cur.w !== w || this.cur.i !== 0 || !!this.level.spec.star !== !!this.star) this.loadLevel(w, 0);
    this.audio.playMusic(open ? WORLDS[w].music : 'title');
    const bar = WORLDS.map((W, k) => `<span class="${this.worldOpen(k) ? 'open' : ''} ${k === w ? 'cur' : ''}" style="background:${W.color}"></span>`).join('');
    let wm = 0; for (let i = 0; i < LEVELS_PER_WORLD; i++) wm += this.rec(w, i).ms.reduce((a, b) => a + b, 0);
    const body = `<div class="worldbar">${bar}</div>
      <div><span class="moon full"></span> ${this.moonCount()} / ${this.moonTotal()} &nbsp; · &nbsp; ${t('ui.world', { n: w + 1 })}: ${wm} / 18 &nbsp; · &nbsp; ${this.shardCount()} / 7 <span class="shard full"></span></div>
      ${this.moonCount() >= this.moonTotal() ? `<p>${t('ui.allMoonstones')}</p>` : ''}`;
    const items = [];
    if (open) {
      for (let i = 0; i < LEVELS_PER_WORLD; i++) {
        const lo = this.levelOpen(w, i);
        items.push({ html: this.levelLabel(w, i), disabled: !lo, action: () => this.playLevel(w, i) });
      }
    } else {
      items.push({ html: `<small>🔒 ${this.lockReason(w, 0)}</small>`, disabled: true, action: () => {} });
    }
    if (this.starOpen()) items.push({ label: this.star ? t('ui.normalPaths') : '✦ ' + t('ui.starPaths'), action: () => { this.star = !this.star; this.showMap(w); } });
    if (w > 0) items.push({ label: t('ui.prevWorld'), action: () => this.showMap(w - 1) });
    if (w < WORLDS.length - 1) items.push({ label: t('ui.nextWorld'), action: () => this.showMap(w + 1) });
    items.push({ label: t('ui.mainMenu'), action: () => { this.hud.hideMenu(); this.toTitle(); } });
    let defSel = sel;
    if (defSel === null) { defSel = 0; for (let i = 0; i < LEVELS_PER_WORLD; i++) if (this.levelOpen(w, i) && !this.rec(w, i).done) { defSel = i; break; } }
    this.hud.showMenu({
      cls: 'map', title: `<div class="worldname" style="color:${WORLDS[w].color};text-shadow:0 3px 0 #3a1f14">${t(`worlds.${w}.name`)}</div>`,
      subtitle: (this.star ? '✦ ' + t('ui.starPaths') + ' · ' : '') + (w === WORLDS.length - 1 ? t('ui.finale') : t('ui.world', { n: w + 1 })), body, items, sel: open ? defSel : items.findIndex((x) => !x.disabled),
      onLeft: w > 0 ? () => this.showMap(w - 1) : null, onRight: w < WORLDS.length - 1 ? () => this.showMap(w + 1) : null,
    });
  }

  playLevel(w, i) {
    this.hud.hideMenu();
    this.save.lastWorld = w; this.writeSave();
    const before = t(`story.before.${w}`);
    if (!this.star && !this.save.seen[w] && before && before.length) {
      this.save.seen[w] = true; this.writeSave();
      this.loadLevel(w, i);
      this.state = 'story';
      this.hud.show(false);
      this.dialog(before, () => this.startLevel(w, i, true), w);
      return;
    }
    this.startLevel(w, i);
  }

  startLevel(w, i, quick = false) {
    if (!this.level || this.cur.w !== w || this.cur.i !== i || !quick || this.level.time > 0.5 || !!this.level.spec.star !== !!this.star) this.loadLevel(w, i);
    this.hearts = 3; this.levelGot = 0; this.levelTime = 0;
    this.hud.show(true);
    this.refreshHud();
    this.state = 'play';
    this.setTouch(true);
    this.audio.playMusic(i === BONUS_IDX ? 'bonus' : WORLDS[w].music);
    this.hud.banner(this.levelName(w, i), `${this.star ? '✦ ' : ''}${t(`worlds.${w}.name`)} · ${i === BOSS_IDX ? t('ui.boss') : i === BONUS_IDX ? '★' : `${w + 1}-${i + 1}`}`);
  }

  refreshHud() {
    if (!this.level) return;
    this.hud.setHearts(this.hearts);
    this.hud.setLives(this.lives);
    this.hud.setSparks(this.sparks, this.levelGot, this.level.sparkTotal);
    this.hud.setShards(this.shardCount());
    const sp = this.level.spec;
    if (sp.kind === 'boss') this.hud.setMoons(null);
    else {
      const r = this.rec(sp.world, sp.index);
      this.hud.setMoons([0, 1, 2].map((k) => r.ms[k] || this.level.moonstones.some((m) => m.idx === k && m.taken)));
    }
  }

  setTouch(v) { document.getElementById('touch').classList.toggle('active', v); }

  pause() {
    if (this.state !== 'play') return;
    this.state = 'paused';
    this.setTouch(false);
    this.input.releaseLock();
    const { w, i } = this.cur;
    const again = () => { this.state = 'play'; this.pause(); };
    this.hud.showMenu({
      title: t('ui.pause'),
      subtitle: `${t(`worlds.${w}.name`)} · ${this.levelName(w, i)}`,
      items: [
        { label: t('ui.resume'), action: () => this.resume() },
        { label: t('ui.restartLevel'), action: () => { this.hud.hideMenu(); this.startLevel(w, i); } },
        { label: t('ui.worldMap'), action: () => this.showMap(w) },
        { label: t('ui.controls'), action: () => this.showControls(again) },
        { label: `${t('ui.language')}: ${LANGS[getLang()].name}`, action: () => this.langMenu(again) },
        { label: `${t('ui.sound')}: ${this.audio.muted ? t('ui.off') : t('ui.on')}`, action: () => { this.audio.toggleMute(); again(); } },
        { label: t('ui.mainMenu'), action: () => { this.hud.hideMenu(); this.toTitle(); } },
      ],
    });
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
    while (this.sparks >= 100) {
      this.sparks -= 100; this.lives++;
      this.audio.play('oneup');
      this.hud.toast(t('ui.oneUp'));
    }
    const L = this.level;
    if (!bonus && L.spec.kind !== 'boss' && !L.allSparksDone && L.sparkTotal > 0 && this.levelGot >= L.sparkTotal) {
      L.allSparksDone = true;
      this.hud.toast(t('ui.moonstoneAll'), 3);
      L.spawnSparkMoonstone(this.player.pos);
    }
    this.refreshHud();
  }

  collectMoonstone(idx, pos) {
    const r = this.rec(this.cur.w, this.cur.i);
    const fresh = !r.ms[idx];
    r.ms[idx] = 1; this.writeSave();
    this.audio.play(fresh ? 'shard' : 'heart');
    this.hud.toast(fresh ? t('ui.moonstone') : t('ui.moonstoneOld'), 2.5);
    this.particles.burst(pos, { count: 24, color: [0x9ab8ff, 0xffffff, 0xd8e8ff], speed: 7, size: 0.8, tex: 'sparkle', additive: true, life: 0.9 });
    this.refreshHud();
  }

  collectKey(pos) {
    this.save.keys[this.pre() + this.cur.w] = true; this.writeSave();
    this.audio.play('oneup');
    this.hud.toast(t('ui.keyFound'), 3.5);
    this.particles.burst(pos, { count: 24, color: [0xffe066, 0xffffff], speed: 7, size: 0.8, tex: 'sparkle', additive: true });
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

  playerDied() {
    this.player.alive = false;
    this.audio.play('die');
    this.particles.burst(new THREE.Vector3(this.player.pos.x, this.player.pos.y + 0.6, this.player.pos.z), { count: 20, color: [0xffc070, 0xffffff], speed: 5, size: 0.7, tex: 'glow', additive: true });
    this.lives--;
    this.refreshHud();
    this.state = 'dying'; this.timer = 1.6;
  }

  respawn() {
    const c = this.checkpoint;
    this.camYaw = c.yaw;
    this.player.reset(c.x, c.y, c.z + 0.01, this.camYaw + Math.PI);
    this.player.invuln = 1.2;
    this.camTarget.set(c.x, c.y + 1.3, c.z);
  }

  gameOver() {
    this.state = 'gameover';
    this.setTouch(false);
    this.input.releaseLock();
    this.audio.stopMusic();
    const { w, i } = this.cur;
    this.hud.showMenu({
      title: t('ui.gameOverTitle'), subtitle: t('ui.gameOverSub'),
      items: [
        { label: t('ui.tryAgain'), action: () => { this.hud.hideMenu(); this.lives = 3; this.startLevel(w, i); } },
        { label: t('ui.worldMap'), action: () => { this.lives = 3; this.showMap(w); } },
      ],
    });
  }

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
    if (boss) this.save.bosses[this.pre() + w] = true;
    this.newBest = this.levelGot > r.best;
    r.best = Math.max(r.best, this.levelGot);
    if (this.level.allSparksDone) r.all = true;
    this.gotMedal = !boss && this.levelTime <= this.level.par;
    if (this.gotMedal) r.medal = true;
    r.time = r.time ? Math.min(r.time, this.levelTime) : this.levelTime;
    this.writeSave();
    this.refreshHud();
    this.hud.banner(final ? t('ui.coreFound') : boss ? t('ui.shardFound') : t('ui.goal'), boss && !final ? t('ui.shardCount', { n: this.shardCount() }) : '', 2.6);
  }

  showClear() {
    const { w, i } = this.cur;
    const boss = i === BOSS_IDX;
    const final = boss && WORLDS[w].boss.final;
    this.state = 'clearmenu';
    this.audio.play('clear');
    const fmt = (x) => `${Math.floor(x / 60)}:${String(Math.floor(x % 60)).padStart(2, '0')}`;
    const r = this.rec(w, i);
    let body = `<div class="stats"><div><span class="spark-icon"></span> ${t('ui.sparks')}: <b>${this.levelGot} / ${this.level.sparkTotal}</b></div>
      <div>⏱ ${t('ui.time')}: <b>${fmt(this.levelTime)}</b>${boss ? '' : ` &nbsp;(${t('ui.par')}: ${fmt(this.level.par)})`}</div>`;
    if (!boss) body += `<div class="moonsrow">${r.ms.map((v) => `<span class="moon ${v ? 'full' : ''}"></span>`).join('')}</div>`;
    if (this.gotMedal) body += `<div class="medal">⏱ ${t('ui.medal')}</div>`;
    body += '</div>';
    const toMap = () => this.showMap(w);
    const items = [];
    if (boss) {
      items.push({
        label: t('ui.next'), action: () => {
          this.hud.hideMenu();
          this.state = 'story';
          const after = t(`story.after.${w}`);
          this.dialog(after, () => {
            if (final) { this.ending(); return; }
            this.showMap(w + 1);
            if (this.worldOpen(w + 1) && !this.wasDone) this.hud.toast(t('ui.worldUnlocked', { name: t(`worlds.${w + 1}.name`) }), 3.5);
          }, w);
        },
      });
    } else {
      const nxt = i < BOSS_IDX - 1 || i === BOSS_IDX - 1 ? i + 1 : null;
      if (nxt !== null && i !== BONUS_IDX && this.levelOpen(w, nxt)) items.push({ label: `${t('ui.next')}: ${this.levelName(w, nxt)}`, action: () => this.playLevel(w, nxt) });
      items.push({ label: t('ui.worldMap'), action: toMap });
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
      const all = this.moonCount() >= this.moonTotal();
      this.hud.showMenu({
        cls: 'title-screen',
        title: `<span class="logo">${t('ui.theEnd')}</span>`,
        subtitle: t('ui.thanks'),
        body: `<p>${t('ui.endText')}</p><p>✦ ${t('ui.starUnlocked')}</p><p><span class="moon full"></span> ${this.moonCount()} / ${this.moonTotal()}</p>${all ? `<p>${t('ui.allMoonstones')}</p>` : ''}<p class="credits">${t('ui.credits')}</p>`,
        items: [{ label: '✦ ' + t('ui.starPaths'), action: () => { this.star = true; this.showMap(0); } }, { label: t('ui.mainMenu'), action: () => { this.hud.hideMenu(); this.toTitle(); } }],
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

  banner(t, s) { this.hud.banner(t, s); }
  shake(a) { this.shakeT = Math.max(this.shakeT, a); }

  // ---------------- Hauptschleife ----------------
  frame(now) {
    requestAnimationFrame(this.frame);
    const dt = Math.max(0, Math.min(0.1, (now - this.last) / 1000));
    this.last = now;
    const input = this.input;
    input.pollPad();
    if (input.pressed.has('KeyM')) { const m = this.audio.toggleMute(); this.hud.toast(m ? 'Ton aus' : 'Ton an', 1); }

    if (this.hud.dialogOpen) this.hud.dialogInput(input);
    else if (this.hud.menu) this.hud.menuInput(input);

    const L = this.level;
    switch (this.state) {
      case 'play':
        if (input.pausePressed()) { this.pause(); break; }
        this.simulate(dt);
        this.hud.hint(L.checkpointHint(this.player));
        this.hud.setTimer(this.levelTime);
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
          if (this.lives <= 0) this.gameOver();
          else { this.hearts = 3; this.refreshHud(); this.respawn(); this.state = 'play'; }
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
    this.renderer.render(this.scene, this.camera);
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
    if (this.state === 'title' || this.state === 'map' || this.state === 'ending' || (this.state === 'story' && !this.hud.el.hud.classList.contains('show'))) {
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
