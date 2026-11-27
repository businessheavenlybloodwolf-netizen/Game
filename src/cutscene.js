// Cutscene-Regie: Zu jeder Textbox läuft gleichzeitig eine passende Szene – Kamerafahrten, Figuren, Effekte.
// Jede Dialogzeile bekommt eine „Einstellung“ (Shot). Zwischen den Einstellungen gleitet die Kamera weich über,
// am Ende blendet sie sanft zurück in die Spielkamera. Kinobalken oben/unten, HUD ausgeblendet.
import * as THREE from 'three';
import * as M from './models.js';
import { WORLDS } from './worlds.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const ease = (k) => k * k * (3 - 2 * k);
const clamp01 = (x) => Math.max(0, Math.min(1, x));

export class Director {
  constructor(game) {
    this.game = game;
    this.active = false;
    this.shots = []; this.shotIdx = -1; this.shot = null;
    this.t = 0; this.blendT = 0; this.blendDur = 1.2;
    this.camPos = V(); this.camLook = V();
    this.fromPos = V(); this.fromLook = V();
    this.tgtPos = V(); this.tgtLook = V();
    this.outT = 0; this.outPos = V(); this.outLook = V();
    this.props = null; this.tickers = [];
    this.saved = null;
    this.bars = document.getElementById('cinebars');
  }

  get L() { return this.game.level; }
  get P() { return this.game.player; }

  // ---------- Steuerung ----------
  start(scene, lines, w, opt = null) {
    const g = this.game;
    this.stop(true);
    this.active = true;
    this.w = w; this.opt = opt;
    this.props = new THREE.Group();
    g.scene.add(this.props);
    this.tickers = [];
    const fog = g.scene.fog;
    const grade = g.gfx.grade;
    this.saved = { fogNear: fog ? fog.near : 0, fogFar: fog ? fog.far : 0, sat: grade ? grade.uniforms.sat.value : 1, facing: this.P.facing, scale: this.P.mesh.scale.x };
    // Kamera startet dort, wo sie gerade ist
    const cam = g.camera;
    this.camPos.copy(cam.position);
    cam.getWorldDirection(this.camLook); this.camLook.multiplyScalar(10).add(cam.position);
    this.shots = this.build(scene, lines || [], w);
    this.shotIdx = -1;
    document.body.classList.add('cine');
    if (this.bars) this.bars.classList.add('on');
  }

  // vom Dialog bei jeder neuen Zeile aufgerufen
  next(i) {
    if (!this.active) return;
    const s = this.shots[Math.min(i, this.shots.length - 1)];
    if (!s) return;
    if (this.shot && this.shot.exit) this.shot.exit();
    this.shotIdx = i; this.shot = s; this.t = 0;
    this.fromPos.copy(this.camPos); this.fromLook.copy(this.camLook);
    this.blendT = s.cut ? 99 : 0;
    this.blendDur = s.blend ?? 1.2;
    if (s.enter) s.enter();
  }

  stop(silent = false) {
    if (!this.active) return;
    if (this.shot && this.shot.exit) this.shot.exit();
    const g = this.game;
    for (const f of this.cleanups || []) f();
    this.cleanups = [];
    if (this.props) { g.scene.remove(this.props); this.props = null; }
    this.tickers = [];
    const fog = g.scene.fog, s = this.saved;
    if (s && fog && fog === this.L.fog) { fog.near = s.fogNear; fog.far = s.fogFar; }
    this.P.mesh.scale.setScalar(1);
    this.active = false; this.shot = null; this.shots = [];
    document.body.classList.remove('cine');
    if (this.bars) this.bars.classList.remove('on');
    if (!silent) { this.outT = 0.9; this.outPos.copy(this.camPos); this.outLook.copy(this.camLook); }
  }

  onCleanup(f) { (this.cleanups || (this.cleanups = [])).push(f); }

  update(dt) {
    if (!this.active) return;
    this.t += dt; this.blendT += dt;
    for (let i = this.tickers.length - 1; i >= 0; i--) if (this.tickers[i](dt)) this.tickers.splice(i, 1);
    if (this.shot && this.shot.tick) this.shot.tick(dt, this.t);
  }

  // Kamera der laufenden Einstellung (weich überblendet)
  applyCamera(cam) {
    const s = this.shot;
    if (s && s.cam) s.cam(this.t, this.tgtPos, this.tgtLook);
    else { this.tgtPos.copy(this.camPos); this.tgtLook.copy(this.camLook); }
    const k = ease(clamp01(this.blendT / this.blendDur));
    this.camPos.lerpVectors(this.fromPos, this.tgtPos, k);
    this.camLook.lerpVectors(this.fromLook, this.tgtLook, k);
    cam.position.copy(this.camPos);
    cam.lookAt(this.camLook);
  }

  // nach dem Ende: von der letzten Cutscene-Einstellung weich zurück in die Spielkamera
  blendOut(cam, dt) {
    if (this.outT <= 0) return;
    this.outT -= dt;
    const k = ease(clamp01(this.outT / 0.9));
    const look = V(); cam.getWorldDirection(look); look.multiplyScalar(10).add(cam.position);
    cam.position.lerp(this.outPos, k);
    look.lerp(this.outLook, k);
    cam.lookAt(look);
  }

  // ---------- Bausteine ----------
  face(target) { const p = this.P.pos; this.P.facing = Math.atan2(target.x - p.x, target.z - p.z); }

  lumiHead() { return this.P.pos.clone().add(V(0, 1.0, 0)); }

  // Kamera kreist langsam um einen Punkt
  orbit(center, r, h, a0, speed, lookY = 0, r1 = r, h1 = h, dur = 8) {
    return (t, pos, look) => {
      const k = clamp01(t / dur), rr = r + (r1 - r) * ease(k), hh = h + (h1 - h) * ease(k);
      const a = a0 + t * speed;
      pos.set(center.x + Math.sin(a) * rr, center.y + hh, center.z + Math.cos(a) * rr);
      look.set(center.x, center.y + lookY, center.z);
    };
  }

  // Nahaufnahme von Lumi, Kamera vor dem Gesicht, leichtes Schwenken
  closeUp(dist = 3.6, h = 1.3, side = 0.35, sway = 0.08) {
    return (t, pos, look) => {
      const p = this.P.pos, f = this.P.facing + side + Math.sin(t * 0.5) * sway;
      pos.set(p.x + Math.sin(f) * dist, p.y + h, p.z + Math.cos(f) * dist);
      look.set(p.x, p.y + 0.9, p.z);
    };
  }

  // Zwei-Personen-Einstellung: Lumi und ein Gegenüber, Kamera seitlich
  twoShot(other, dist = 5.5, h = 1.9) {
    return (t, pos, look) => {
      const p = this.P.pos;
      const mx = (p.x + other.x) / 2, mz = (p.z + other.z) / 2;
      let dx = other.x - p.x, dz = other.z - p.z; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      const nx = -dz, nz = dx, d = dist + Math.sin(t * 0.4) * 0.2;
      pos.set(mx + nx * d - dx * 1.2, p.y + h, mz + nz * d - dz * 1.2);
      look.set(mx, p.y + 1.0, mz);
    };
  }

  // Elva: ein warmes Licht, das im Wind um Lumi tanzt („nur noch eine Stimme im Wind“)
  elva() {
    if (this.elvaObj) return this.elvaObj;
    const g = new THREE.Group();
    g.add(M.glowSprite(0xffb050, 2.4, 0.9));
    g.add(M.glowSprite(0xfff1d6, 0.9, 1));
    this.props.add(g);
    const p0 = this.P.pos;
    g.position.set(p0.x + 1.5, p0.y + 1.6, p0.z + 0.5);
    let tt = 0;
    this.tickers.push((dt) => {
      tt += dt;
      const p = this.P.pos, f = this.P.facing;
      const tx = p.x + Math.sin(f + 0.9) * 1.6 + Math.sin(tt * 1.3) * 0.4, tz = p.z + Math.cos(f + 0.9) * 1.6 + Math.cos(tt * 1.1) * 0.4;
      g.position.x += (tx - g.position.x) * Math.min(1, dt * 2);
      g.position.z += (tz - g.position.z) * Math.min(1, dt * 2);
      g.position.y = p.y + 1.7 + Math.sin(tt * 2) * 0.25;
      if (Math.random() < dt * 8) this.game.particles.burst(g.position, { count: 1, color: [0xffd890, 0xffffff], speed: 0.8, size: 0.35, tex: 'sparkle', additive: true, gravity: 0.5, life: 0.9 });
      return !this.active;
    });
    this.elvaObj = g;
    this.onCleanup(() => { this.elvaObj = null; });
    return g;
  }

  nebelmaul(pos, scale = 1) {
    const b = M.createBoss(WORLDS[7].boss);
    b.position.copy(pos); b.scale.setScalar(0.01);
    this.props.add(b);
    let tt = 0; const st = { target: scale, alive: true };
    this.tickers.push((dt) => {
      tt += dt;
      const s = b.scale.x + (st.target - b.scale.x) * Math.min(1, dt * 3);
      b.scale.setScalar(Math.max(0.01, s));
      b.position.y = pos.y + Math.sin(tt * 1.4) * 0.4;
      const u = b.userData;
      if (u.puffs) u.puffs.rotation.y += dt * 0.6;
      if (u.gem) u.gem.rotation.y += dt * 1.5;
      if (u.hands) u.hands.forEach((h, i) => { h.position.y = 1.6 + Math.sin(tt * 2 + i * 2) * 0.3; });
      b.lookAt(this.game.camera.position.x, b.position.y, this.game.camera.position.z);
      return !this.active || !st.alive;
    });
    b.userData.st = st;
    return b;
  }

  fogTo(near, far, dur = 2.5) {
    const fog = this.game.scene.fog; if (!fog) return;
    const n0 = fog.near, f0 = fog.far; let tt = 0;
    this.tickers.push((dt) => { tt += dt; const k = ease(clamp01(tt / dur)); fog.near = n0 + (near - n0) * k; fog.far = f0 + (far - f0) * k; return k >= 1 || !this.active; });
  }

  // Farbsättigung des ganzen Bildes (CSS-Filter auf der Spielfläche – funktioniert auf allen Grafikstufen)
  satTo(v, dur = 2.5) {
    const c = this.game.canvas;
    c.style.transition = `filter ${dur}s ease-in-out`;
    c.style.filter = Math.abs(v - 1) < 0.01 ? '' : `saturate(${v})${v < 1 ? ` brightness(${0.85 + v * 0.15})` : ''}`;
    if (!this.satReset) { this.satReset = true; this.onCleanup(() => { c.style.transition = 'filter 1.2s ease-in-out'; c.style.filter = ''; this.satReset = false; }); }
  }

  // ---------- Szenen ----------
  build(scene, lines, w) {
    const fn = this['scene_' + scene];
    const shots = fn ? fn.call(this, lines, w) : [];
    while (shots.length < lines.length) shots.push({ cam: this.closeUp() });
    return shots;
  }

  // Spielbeginn: Lumeria → Nebelmaul zerschlägt das Morgenlicht → grauer Nebel → Funke im Leuchtturm → Lumi erwacht
  scene_intro() {
    const g = this.game, P = this.P;
    const spawn = this.L.spawnPoint;
    const home = V(spawn.x, spawn.y, spawn.z);
    let lumiShown = false;
    const hideLumi = () => { P.mesh.scale.setScalar(0.001); };
    const showLumi = () => {
      if (lumiShown) return; lumiShown = true;
      let tt = 0;
      this.tickers.push((dt) => { tt += dt; const k = clamp01(tt / 0.6); P.mesh.scale.setScalar(Math.max(0.001, ease(k) * (1 + Math.sin(k * Math.PI) * 0.25))); return k >= 1; });
      g.particles.burst(home.clone().add(V(0, 0.8, 0)), { count: 40, color: [0xffd36b, 0xffffff, 0xffa040], speed: 5, size: 0.8, tex: 'sparkle', additive: true });
      g.audio.play('shard');
    };
    // ferner Leuchtturm auf eigener Felsinsel hinter der Hub-Insel
    const lhPos = V(0, 6, -46);
    const TR = this.L.terrain;
    if (TR) lhPos.y = TR.height(lhPos.x, lhPos.z) + 0.6; // der Leuchtturm steht auf dem Boden der Landschaft
    const rock = new THREE.Mesh(new THREE.CylinderGeometry(6, 1.2, 9, 14), M.toon(0xffffff, { map: g.T.dirt }));
    rock.position.set(lhPos.x, lhPos.y - 4.5, lhPos.z);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(6.2, 6, 1, 18), M.toon(0xffffff, { map: g.T.grass }));
    top.position.set(lhPos.x, lhPos.y - 0.5, lhPos.z);
    const lh = M.createLighthouse(); lh.position.copy(lhPos); lh.scale.setScalar(1.1);
    if (TR) { rock.position.y = lhPos.y - 4.5; top.position.y = lhPos.y - 0.5; rock.scale.y = 0.15; rock.position.y = lhPos.y - 0.9; }
    this.props.add(rock, top, lh);
    const lampPos = lhPos.clone().add(V(0, 11.9 * 1.1, 0));
    // Morgenlicht über der Insel
    const crystal = M.createShard(); crystal.scale.setScalar(2.6); crystal.position.set(0, 9, -4); this.props.add(crystal);
    this.tickers.push((dt) => { crystal.rotation.y += dt * 0.8; return !this.active; });
    return [
      { // 1 · Lumeria von oben
        enter: () => { hideLumi(); P.facing = 0; },
        cam: this.orbit(V(0, 0, 0), 62, 30, 0.7, 0.045, 2, 44, 18, 10),
      },
      { // 2 · Nebelmaul zerschlägt das Morgenlicht
        enter: () => {
          hideLumi();
          const boss = this.nebelmaul(V(0, 10.5, -10), 1.1);
          g.audio.play('bossroar');
          let tt = 0, burst = false;
          this.tickers.push((dt) => {
            tt += dt;
            if (!burst && tt > 1.6) {
              burst = true; crystal.visible = false;
              g.audio.play('boom'); g.shake(0.6);
              g.particles.burst(crystal.position, { count: 60, color: [0x9ff4ff, 0xffffff, 0xffe066], speed: 12, size: 1.1, tex: 'sparkle', additive: true });
              for (let i = 0; i < 7; i++) {
                const s = M.createShard(); s.scale.setScalar(0.7); s.position.copy(crystal.position); this.props.add(s);
                const a = i / 7 * Math.PI * 2, v = V(Math.cos(a) * 9, 4 + Math.random() * 3, Math.sin(a) * 9);
                this.tickers.push((d2) => { v.y -= 4 * d2; s.position.addScaledVector(v, d2); s.rotation.y += d2 * 6; if (Math.random() < d2 * 20) g.particles.burst(s.position, { count: 1, color: 0x9ff4ff, speed: 0.5, size: 0.6, tex: 'glow', additive: true, life: 0.6 }); return !this.active || s.position.y < -60; });
              }
            }
            return burst || !this.active;
          });
          void boss;
        },
        cam: (t, pos, look) => { pos.set(Math.sin(t * 0.08) * 3, 8 + t * 0.1, 17 - t * 0.25); look.set(0, 8.8, -5); },
      },
      { // 3 · der Nebel steigt, die Farben verblassen
        enter: () => {
          hideLumi();
          crystal.visible = false;
          for (const c of this.props.children) if (c.userData.st) c.userData.st.target = 0.01;
          this.fogTo(6, 55, 3); this.satTo(0.2, 3);
        },
        cam: (t, pos, look) => { const k = clamp01(t / 9); pos.set(-9 + k * 18, 5.2, 12 - k * 2); look.set(-3 + k * 6, 1.2, -6); },
      },
      { // 4 · der letzte Funke im Leuchtturm – er fliegt zur Insel, Lumi erwacht
        enter: () => {
          hideLumi();
          this.fogTo(14, 120, 2);
          const spark = new THREE.Group(); spark.add(M.glowSprite(0xffc060, 2.2, 1)); spark.add(M.glowSprite(0xffffff, 0.7, 1));
          spark.position.copy(lampPos); this.props.add(spark);
          let tt = 0;
          const a = lampPos.clone(), b = home.clone().add(V(0, 0.8, 0));
          this.tickers.push((dt) => {
            tt += dt;
            const k = clamp01((tt - 1.2) / 2.4), e = ease(k);
            spark.position.lerpVectors(a, b, e); spark.position.y += Math.sin(e * Math.PI) * 10;
            spark.scale.setScalar(1 + Math.sin(tt * 18) * 0.15);
            if (Math.random() < dt * 25) g.particles.burst(spark.position, { count: 1, color: [0xffd36b, 0xffa040], speed: 0.6, size: 0.5, tex: 'sparkle', additive: true, life: 0.8 });
            if (k >= 1) { spark.visible = false; showLumi(); return true; }
            return !this.active;
          });
          this.spark = spark;
        },
        cam: (t, pos, look) => {
          const k = ease(clamp01((t - 1.0) / 2.8));
          const sp = this.spark ? this.spark.position : lampPos;
          pos.set(4 - k * 4, 4 + (1 - k) * 4 - k * 1.8, -4 + k * 17.5);
          look.lerpVectors(lampPos.clone().add(V(0, -2, 0)), k < 0.95 ? sp : home.clone().add(V(0, 0.9, 0)), k);
        },
      },
      { // 5 · Lumi schaut sich um
        enter: () => { showLumi(); P.facing = 0; this.satTo(0.45, 2); },
        tick: (dt, t) => { P.facing = Math.sin(t * 0.9) * 0.7; },
        cam: (t, pos, look) => { const p = P.pos; pos.set(p.x + Math.sin(t * 0.15) * 0.6 + 0.8, p.y + 1.2, p.z + 3.4); look.set(p.x, p.y + 0.85, p.z); },
      },
    ];
  }

  // Ankunft in einem neuen Reich: Rundflug, dann Elva, Lumi, Nebeltor, Luftschiff
  scene_arrive(lines, w) {
    const L = this.L, P = this.P, g = this.game;
    const bossPortal = L.portals ? L.portals.find((p) => p.target && p.target.type === 'boss') : null;
    const ship = L.interactables.find((it) => it.kind === 'ship');
    const before = g.t(`story.before.${w}`).length;
    let portalShown = false;
    return lines.map(([role], i) => {
      if (i === 0) {
        return {
          enter: () => { if (role === 'e') this.elva(); },
          cam: this.orbit(V(0, 0, 0), 70, 34, 2.4 + w, 0.06, 1, 26, 9, 9),
        };
      }
      if (i >= before && ship) { // Luftschiff-Zeilen (nur im ersten Reich)
        const sp = ship.mesh.position;
        return i === before
          ? { enter: () => { this.elva(); this.face(sp); }, cam: (t, pos, look) => { const a = 0.8 + t * 0.06; pos.set(sp.x + Math.sin(a) * 18, sp.y + 3 + t * 0.15, sp.z + Math.cos(a) * 18); look.set(sp.x, sp.y + 2.5, sp.z); } }
          : { enter: () => { this.elva(); this.face(V(0, 0, 30)); }, cam: this.orbit(P.pos.clone(), 5, 3, Math.PI + 0.3, 0.1, 1.0, 11, 9, 8) };
      }
      if (role === 'b') {
        return {
          enter: () => { this.nebelmaul(V(0, 11, -14), 1.3); g.audio.play('bossroar'); this.face(V(0, 0, -14)); },
          cam: (t, pos, look) => { const p = P.pos; pos.set(p.x + 1.6, p.y + 1.1, p.z + 4.2 + t * 0.1); look.set(0, 9.5, -14); },
        };
      }
      if (role === 'l') return { enter: () => { this.face(this.game.camera.position); }, cam: this.closeUp(3.4, 1.2, 0.3) };
      if (!portalShown && bossPortal) {
        portalShown = true;
        const pp = V(bossPortal.x, bossPortal.y, bossPortal.z);
        return { enter: () => { this.elva(); this.face(pp); }, cam: (t, pos, look) => { const p = P.pos; pos.set(p.x + 2.4, p.y + 2.2, p.z + 3.6 - t * 0.12); look.set(pp.x, pp.y + 2, pp.z); } };
      }
      return { enter: () => { this.elva(); }, cam: this.twoShot(this.elva().position, 5, 1.8) };
    });
  }

  // nach einem Bosskampf: Lumi mit dem Splitter, dann heilt die Welt
  scene_after(lines, w) {
    const g = this.game, P = this.P;
    const col = new THREE.Color(WORLDS[w].color);
    let shard = null;
    const holdShard = () => {
      if (shard) return;
      shard = M.createShard(); shard.scale.setScalar(0.8); this.props.add(shard);
      this.tickers.push((dt) => { const p = P.pos; shard.position.set(p.x, p.y + 2.1 + Math.sin(this.t * 2) * 0.12, p.z); shard.rotation.y += dt * 2; return !this.active; });
    };
    return lines.map(([role], i) => {
      if (i === 0) return {
        enter: () => { holdShard(); this.face(g.camera.position); g.particles.burst(P.pos.clone().add(V(0, 2.1, 0)), { count: 30, color: [0x9ff4ff, 0xffffff], speed: 4, size: 0.7, tex: 'sparkle', additive: true }); },
        tick: (dt) => { if (Math.random() < dt * 4) g.particles.burst(P.pos.clone().add(V(0, 2.1, 0)), { count: 2, color: [0x9ff4ff, 0xffe066], speed: 2, size: 0.5, tex: 'sparkle', additive: true }); },
        cam: (t, pos, look) => { const p = P.pos, a = P.facing + 0.3 + t * 0.1; pos.set(p.x + Math.sin(a) * 4, p.y + 1.6, p.z + Math.cos(a) * 4); look.set(p.x, p.y + 1.4, p.z); },
      };
      if (role === 'e' && i === lines.length - 1) return {
        // Kranfahrt: die Welt erblüht wieder
        enter: () => {
          holdShard(); this.elva();
          this.satTo(1.35, 2.5);
          let tt = 0;
          this.tickers.push((dt) => {
            tt += dt;
            if (Math.random() < dt * 14) {
              const a = Math.random() * Math.PI * 2, r = 2 + Math.random() * 13, p = P.pos;
              g.particles.burst(V(p.x + Math.cos(a) * r, p.y + 0.3, p.z + Math.sin(a) * r), { count: 4, color: [col.getHex(), 0xffffff, 0xffe066], speed: 3, up: 2, size: 0.7, tex: 'sparkle', additive: true, gravity: -1, life: 1.4 });
            }
            return tt > 12 || !this.active;
          });
          g.audio.play('oneup');
        },
        cam: (t, pos, look) => { const p = P.pos, k = ease(clamp01(t / 7)), a = P.facing + 0.3 + t * 0.05; pos.set(p.x + Math.sin(a) * (4 + k * 14), p.y + 1.6 + k * 11, p.z + Math.cos(a) * (4 + k * 14)); look.set(p.x, p.y + 1.2 + k * 2, p.z); },
      };
      return role === 'l' ? { cam: this.closeUp() } : { enter: () => { this.elva(); }, cam: this.twoShot(this.elva().position, 5, 1.8) };
    });
  }

  // Ende: der Kern fliegt in den Leuchtturm, das Morgenlicht flammt auf, Nebelmaul verweht
  scene_ending() {
    const g = this.game, L = this.L, P = this.P;
    const lh = L.lighthouseObj;
    const lp = lh ? lh.position.clone() : V(0, 0, 0);
    const sc = lh ? lh.scale.x : 1;
    const lamp = lp.clone().add(V(0, 11.9 * sc, 0));
    const stand = lp.clone().add(V(6, 0, 6));
    if (lh) { P.reset(stand.x, lp.y, stand.z, 0); P.facing = Math.atan2(lp.x - stand.x, lp.z - stand.z); }
    g.lighthouseLit = false;
    const core = M.createShard(); core.scale.setScalar(1.1); this.props.add(core);
    let coreMode = 'hold';
    this.tickers.push((dt) => {
      if (coreMode === 'hold') core.position.set(P.pos.x, P.pos.y + 2.2 + Math.sin(this.t * 2) * 0.12, P.pos.z);
      core.rotation.y += dt * 2;
      return !this.active;
    });
    return [
      { enter: () => { P.facing = Math.atan2(g.camera.position.x - P.pos.x, g.camera.position.z - P.pos.z); }, cam: (t, pos, look) => { const p = P.pos; pos.set(p.x + 2.4, p.y + 1.7, p.z + 3.2); look.set(p.x, p.y + 1.5, p.z); } },
      {
        enter: () => {
          coreMode = 'fly';
          const a = core.position.clone(); let tt = 0, lit = false;
          this.tickers.push((dt) => {
            tt += dt;
            const k = ease(clamp01(tt / 2.2));
            core.position.lerpVectors(a, lamp, k); core.position.y += Math.sin(k * Math.PI) * 4;
            if (Math.random() < dt * 30) g.particles.burst(core.position, { count: 1, color: [0x9ff4ff, 0xffe066], speed: 0.6, size: 0.6, tex: 'sparkle', additive: true, life: 0.8 });
            if (k >= 1 && !lit) {
              lit = true; core.visible = false; g.lighthouseLit = true;
              g.audio.play('shard'); g.shake(0.4);
              g.particles.burst(lamp, { count: 80, color: [0xfff3a0, 0xffffff, 0xffd36b], speed: 14, size: 1.2, tex: 'sparkle', additive: true });
              // Leuchtfeuer: rotierende Lichtkegel (bleiben bis zum nächsten Level)
              const beam = new THREE.Group(); beam.position.copy(lamp);
              for (const s of [1, -1]) {
                const c = new THREE.Mesh(new THREE.ConeGeometry(3.5, 40, 24, 1, true), M.basic(0xfff3a0, { transparent: true, opacity: 0.16, additive: true, side: THREE.DoubleSide }));
                c.rotation.z = s * Math.PI / 2; c.position.x = s * 20; beam.add(c);
              }
              beam.add(M.glowSprite(0xfff3a0, 12, 1));
              L.add(beam);
              L.anim.push({ kind: 'spin', obj: beam });
              this.satTo(1.3, 2);
            }
            return lit || !this.active;
          });
        },
        cam: (t, pos, look) => { const a = 0.9 + t * 0.06; pos.set(lp.x + Math.sin(a) * 26, lp.y + 4 + t * 0.4, lp.z + Math.cos(a) * 26); look.set(lp.x, lp.y + 9 * sc, lp.z); },
      },
      {
        enter: () => {
          const b = this.nebelmaul(lp.clone().add(V(-14, 9, 10)), 0.9);
          let tt = 0;
          this.tickers.push((dt) => {
            tt += dt;
            b.userData.st.target = Math.max(0.15, 0.9 - tt * 0.25);
            b.position.x -= dt * 2.2; b.position.z += dt * 0.6;
            if (Math.random() < dt * 12) g.particles.burst(b.position.clone().add(V(0, 1.5 * b.scale.x, 0)), { count: 2, color: [0xc8b8e8, 0xffffff], speed: 1.5, size: 1.4, life: 1.5, gravity: 0.3 });
            return !this.active;
          });
          this.mist = b;
        },
        cam: (t, pos, look) => { const b = this.mist ? this.mist.position : lp; pos.set(b.x + 4.2, b.y + 1.2, b.z + 4.8); look.set(b.x, b.y + 1.2, b.z); },
      },
      { cam: this.orbit(lp.clone(), 34, 9, 0.2, 0.08, 9 * sc, 40, 14, 10) },
    ];
  }

  // Gespräch mit einem Glimmling
  scene_talk(lines) {
    const other = this.opt;
    return lines.map(() => ({ enter: () => { if (other) this.face(other); }, cam: this.twoShot(other || this.P.pos, 4.6, 1.6), blend: 0.8 }));
  }
}
