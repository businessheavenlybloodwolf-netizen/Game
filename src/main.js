// LUMI und das Morgenlicht – Hauptspiel
import * as THREE from 'three';
import { createTextures } from './textures.js';
import { setTextures } from './models.js';
import { GameAudio } from './audio.js';
import { Input } from './input.js';
import { Particles } from './particles.js';
import { Player } from './player.js';
import { Level } from './world.js';
import { LEVELS } from './levels.js';
import { HUD } from './ui.js';
import { INTRO, LEVEL_STORY, ENDING } from './story.js';

const STEP = 1 / 120;
const SAVE_KEY = 'lumi_save_v1';

const CONTROLS = `
<table class="controls">
<tr><th></th><th>Tastatur / Maus</th><th>Gamepad</th></tr>
<tr><td>Laufen</td><td>WASD / Pfeiltasten</td><td>Linker Stick</td></tr>
<tr><td>Springen / Doppelsprung</td><td>Leertaste (2×)</td><td>A</td></tr>
<tr><td>Drehattacke</td><td>F / J / Linksklick</td><td>X / B</td></tr>
<tr><td>Stampfen (in der Luft)</td><td>Shift / C / Rechtsklick</td><td>LB / RB / Trigger</td></tr>
<tr><td>Kamera</td><td>Maus (Klick ins Bild) / Q, E, R, V</td><td>Rechter Stick</td></tr>
<tr><td>Pause</td><td>Esc / P</td><td>Start</td></tr>
<tr><td>Ton an/aus</td><td>M</td><td></td></tr>
</table>
<p class="tip">Auf dem Handy: Stick links, Knöpfe rechts, Kamera durch Wischen.</p>`;

class Game {
  constructor() {
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
    this.lives = 3; this.hearts = 3; this.sparks = 0; this.shards = 0;
    this.levelGot = 0; this.levelTime = 0; this.timer = 0;
    this.lighthouseLit = false;
    this.state = 'title';

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
    if (params.has('level')) {
      const i = Math.max(0, Math.min(LEVELS.length - 1, parseInt(params.get('level'), 10) || 0));
      this.startLevel(i, true);
    } else this.toTitle();
    this.last = performance.now();
    this.frame = this.frame.bind(this);
    requestAnimationFrame(this.frame);
  }

  // ---------------- Speicherstand ----------------
  loadSave() {
    try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || { unlocked: 0, best: {} }; } catch (e) { return { unlocked: 0, best: {} }; }
  }
  writeSave() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.save)); } catch (e) { /* egal */ } }

  // ---------------- Level ----------------
  loadLevel(i) {
    if (this.level) { this.scene.remove(this.level.group); this.level.dispose(); }
    this.particles.clear();
    this.levelIndex = i;
    this.level = new Level(LEVELS[i], this);
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

  toTitle() {
    this.state = 'title';
    this.input.releaseLock();
    this.lighthouseLit = false;
    this.loadLevel(0);
    this.hud.show(false);
    this.setTouch(false);
    this.audio.playMusic('title');
    const hasSave = this.save.unlocked > 0;
    this.hud.showMenu({
      cls: 'title-screen',
      title: '<span class="logo">LUMI</span>',
      subtitle: 'und das Morgenlicht',
      items: [
        { label: 'Neues Abenteuer', action: () => this.newGame() },
        { label: hasSave ? `Fortsetzen – ${LEVELS[Math.min(this.save.unlocked, LEVELS.length - 1)].name}` : 'Fortsetzen', disabled: !hasSave, action: () => this.continueGame() },
        { label: 'Welt wählen', disabled: !hasSave, action: () => this.levelSelect() },
        { label: 'Steuerung', action: () => this.showControls(() => this.toTitle()) },
        { label: this.audio.muted ? 'Ton: Aus' : 'Ton: An', action: () => { this.audio.toggleMute(); this.toTitle(); } },
      ],
    });
  }

  showControls(back) {
    this.hud.showMenu({ title: 'Steuerung', body: CONTROLS, items: [{ label: 'Zurück', action: back }] });
  }

  levelSelect() {
    const items = LEVELS.map((L, i) => ({
      label: `${L.sub}: ${L.name}${this.save.best[i] !== undefined ? '  ✦ ' + this.save.best[i] : ''}`,
      disabled: i > this.save.unlocked,
      action: () => { this.lives = 3; this.sparks = 0; this.shards = Math.min(3, i); this.hud.hideMenu(); this.startLevel(i); },
    }));
    items.push({ label: 'Zurück', action: () => this.toTitle() });
    this.hud.showMenu({ title: 'Welt wählen', items });
  }

  newGame() {
    this.hud.hideMenu();
    this.lives = 3; this.sparks = 0; this.shards = 0;
    this.state = 'story';
    this.audio.playMusic('title');
    this.hud.dialog(INTRO, () => this.startLevel(0));
  }

  continueGame() {
    this.hud.hideMenu();
    this.lives = 3; this.sparks = 0;
    const i = Math.min(this.save.unlocked, LEVELS.length - 1);
    this.shards = Math.min(3, i);
    this.startLevel(i);
  }

  startLevel(i, skipStory = false) {
    this.loadLevel(i);
    this.hearts = 3; this.levelGot = 0; this.levelTime = 0;
    this.hud.show(true);
    this.refreshHud();
    this.state = 'story';
    this.audio.playMusic(LEVELS[i].music);
    const go = () => {
      this.state = 'play';
      this.setTouch(true);
      this.hud.banner(LEVELS[i].name, LEVELS[i].sub);
    };
    if (skipStory) go();
    else this.hud.dialog(LEVEL_STORY[i].before, go);
  }

  refreshHud() {
    this.hud.setHearts(this.hearts);
    this.hud.setLives(this.lives);
    this.hud.setSparks(this.sparks, this.levelGot, this.level.sparkTotal);
    this.hud.setShards(this.shards);
  }

  setTouch(v) { document.getElementById('touch').classList.toggle('active', v); }

  pause() {
    if (this.state !== 'play') return;
    this.state = 'paused';
    this.setTouch(false);
    this.input.releaseLock();
    this.hud.showMenu({
      title: 'Pause',
      subtitle: `${LEVELS[this.levelIndex].sub}: ${LEVELS[this.levelIndex].name}`,
      items: [
        { label: 'Weiterspielen', action: () => this.resume() },
        { label: 'Welt neu starten', action: () => { this.hud.hideMenu(); this.startLevel(this.levelIndex, true); } },
        { label: 'Steuerung', action: () => this.showControls(() => { this.state = 'play'; this.pause(); }) },
        { label: this.audio.muted ? 'Ton: Aus' : 'Ton: An', action: () => { this.audio.toggleMute(); this.state = 'play'; this.pause(); } },
        { label: 'Hauptmenü', action: () => { this.hud.hideMenu(); this.toTitle(); } },
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
      this.hud.toast('100 Funken – ein Extraleben!');
    }
    this.refreshHud();
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
    this.hud.toast('Laterne entzündet – Checkpoint!');
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
    this.hud.showMenu({
      title: 'Das Licht ist erloschen …',
      subtitle: 'Aber ein Funke bleibt immer.',
      items: [
        { label: 'Nochmal versuchen', action: () => { this.hud.hideMenu(); this.lives = 3; this.sparks = 0; this.startLevel(this.levelIndex, true); } },
        { label: 'Hauptmenü', action: () => { this.hud.hideMenu(); this.toTitle(); } },
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
    const final = this.levelIndex === LEVELS.length - 1;
    if (!final) this.shards = Math.min(3, this.shards + 1);
    this.refreshHud();
    this.hud.banner(final ? 'Der Kern des Morgenlichts!' : 'Splitter gefunden!', final ? '' : `${this.shards} / 3`, 2.6);
    this.save.unlocked = Math.max(this.save.unlocked, Math.min(LEVELS.length - 1, this.levelIndex + 1));
    this.save.best[this.levelIndex] = Math.max(this.save.best[this.levelIndex] || 0, this.levelGot);
    this.writeSave();
  }

  showClear() {
    const i = this.levelIndex;
    const final = i === LEVELS.length - 1;
    this.state = 'clearmenu';
    this.audio.play('clear');
    const m = Math.floor(this.levelTime / 60), s = Math.floor(this.levelTime % 60);
    const body = `<div class="stats"><div><span class="spark-icon"></span> Funken: <b>${this.levelGot} / ${this.level.sparkTotal}</b></div><div>⏱ Zeit: <b>${m}:${String(s).padStart(2, '0')}</b></div></div>`;
    this.hud.showMenu({
      title: final ? 'Graf Nebelmaul besiegt!' : `${LEVELS[i].name} geschafft!`,
      body,
      items: [{
        label: 'Weiter', action: () => {
          this.hud.hideMenu();
          this.state = 'story';
          this.hud.dialog(LEVEL_STORY[i].after, () => { if (final) this.ending(); else this.startLevel(i + 1); });
        },
      }],
    });
  }

  bossDefeated() {
    this.audio.play('shard');
    this.hud.toast('Der Nebel lichtet sich! Hol dir den Kern!', 3);
    this.audio.playMusic('ending');
  }

  ending() {
    this.state = 'ending';
    this.hud.show(false);
    this.lighthouseLit = true;
    this.loadLevel(0);
    this.player.mesh.visible = false;
    this.audio.playMusic('ending');
    this.endT = 0;
    this.hud.dialog(ENDING, () => {
      this.hud.showMenu({
        cls: 'title-screen',
        title: '<span class="logo">ENDE</span>',
        subtitle: 'Danke fürs Spielen!',
        body: `<p>Lumeria leuchtet wieder.</p><p class="credits">Idee, Code, Grafik, Musik & Story: komplett selbstgemacht – alles wird beim Start prozedural erzeugt.</p>`,
        items: [{ label: 'Zum Hauptmenü', action: () => { this.hud.hideMenu(); this.toTitle(); } }],
      });
    });
  }

  // Test-Helfer: simuliert einen Sprung von A nach B mit echter Physik (wird vom Level-Test genutzt)
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
        return { landed: +p.pos.y.toFixed(2), ok: Math.abs(p.pos.y - b[1]) < 0.05, at: p.pos.toArray().map((v) => +v.toFixed(2)) };
      }
    }
    return { timeout: true, at: p.pos.toArray().map((v) => +v.toFixed(2)), y: p.pos.y };
  }

  banner(t, s) { this.hud.banner(t, s); }
  shake(a) { this.shakeT = Math.max(this.shakeT, a); }

  // ---------------- Hauptschleife ----------------
  frame(now) {
    requestAnimationFrame(this.frame);
    const dt = Math.min(0.1, (now - this.last) / 1000);
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
