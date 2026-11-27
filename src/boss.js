// Die acht Bosse von Lumeria – jeder mit eigenem Modell, eigenen Angriffen und eigener Schwachstelle.
// Gemeinsame Basis: Lebensbalken, Treffer, Hitbox-Zonen (Schaden / Schwachstelle), Telegrafen, Geschosse, Debug-Ansicht (F4).
import * as THREE from 'three';
import * as M from './models.js';
import { cylCollider, groundBelow } from './physics.js';

const PLAYER_R = 0.35;      // Lumis Radius für Schadensprüfung
const HURT_FORGIVE = 0.92;  // Schadenszonen etwas kleiner als das Modell (fair)
const STOMP_EXTRA = 0.12;   // Kopfsprung-Zonen etwas größer (großzügig)
const STOMP_CAP = 0.35;     // ab dieser relativen Höhe zählt eine Kuppel als „von oben“
const SAMPLE_H = [0.25, 0.65, 1.05];

// Abstand Punkt ↔ Ellipsoid (1 = Oberfläche)
function ell(px, py, pz, z, rr = z.r, ry = z.ry ?? z.r) {
  const dx = (px - z.x) / rr, dy = (py - z.y) / ry, dz = (pz - z.z) / rr;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
// Abstand Punkt ↔ Strecke (für Kapsel-Zonen wie Tentakel oder Wurmkörper)
function segDist(px, py, pz, a, b) {
  const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
  const l2 = abx * abx + aby * aby + abz * abz || 1;
  let t = ((px - a.x) * abx + (py - a.y) * aby + (pz - a.z) * abz) / l2;
  t = Math.max(0, Math.min(1, t));
  const cx = a.x + abx * t - px, cy = a.y + aby * t - py, cz = a.z + abz * t - pz;
  return Math.sqrt(cx * cx + cy * cy + cz * cz);
}
const lerpAngle = (a, b, k) => { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return a + d * k; };

// ======================================================================
class BossBase {
  constructor(level, x, top, z, arenaR, cfg) {
    this.level = level; this.game = level.game; this.cfg = cfg;
    this.name = level.game.t('worlds.' + level.spec.world + '.boss');
    this.speed = (cfg.speed || 1) * (level.spec.star ? 1.15 : 1);
    this.hp = (cfg.hp || 3) + (level.spec.star ? 1 : 0); this.maxHp = this.hp;
    this.center = new THREE.Vector3(x, top, z);
    this.top = top; this.arenaR = arenaR;
    this.mesh = new THREE.Group(); level.add(this.mesh);
    this.pos = this.mesh.position; this.pos.set(x, top, z);
    this.state = 'wait'; this.t = 0; this.time = 0; this.flash = 0; this.hitCd = 0;
    this.effects = []; this.solids = []; this.hz = []; this.wz = [];
    this.mats = [];
    this.debug = { pool: [], used: 0 };
  }

  get active() { return this.state !== 'wait' && this.state !== 'dead' && this.state !== 'dying' && this.state !== 'promo'; }
  get phase() { return this.maxHp - this.hp + 1; }
  setState(s) { this.state = s; this.t = 0; }
  rnd(a, b) { return a + Math.random() * (b - a); }

  // fester Körper, auf/gegen den Lumi laufen kann
  solid(r, h) { const c = cylCollider(this.center.x, this.center.z, r, this.top, this.top + h, { disabled: true }); this.level.colliders.push(c); this.solids.push(c); return c; }
  placeSolid(c, x, z, h, y0 = this.top) { c.x = x; c.z = z; c.minY = y0; c.maxY = y0 + h; c.disabled = false; }

  arenaPoint(minR = 0, maxR = this.arenaR - 3) {
    const a = Math.random() * Math.PI * 2, r = minR + Math.random() * (maxR - minR);
    return new THREE.Vector3(this.center.x + Math.cos(a) * r, this.top, this.center.z + Math.sin(a) * r);
  }
  clampArena(v, margin = 2.5) {
    const dx = v.x - this.center.x, dz = v.z - this.center.z, l = Math.hypot(dx, dz), m = this.arenaR - margin;
    if (l > m) { v.x = this.center.x + dx / l * m; v.z = this.center.z + dz / l * m; }
    v.y = this.top;
    return v;
  }

  start() {
    this.setState('intro');
    this.game.audio.play('bossroar');
    this.game.audio.playMusic(this.cfg.final ? 'finalboss' : 'boss');
    this.game.hud.showBoss(this.name, this.hp / this.maxHp);
    this.game.banner(this.name, this.game.t(this.cfg.final ? 'ui.fogRuler' : 'ui.fogLord'));
    if (!this.cfg.final) this.game.hud.toast(this.game.t('story.bossTaunt'), 3);
  }

  // ---------- Effekte ----------
  addEffect(fn) { this.effects.push(fn); }

  marker(x, y, z, r, color = 0xff4070, life = 1, filled = false) {
    const geo = filled ? new THREE.CircleGeometry(r, 32) : new THREE.RingGeometry(r * 0.72, r, 36);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, depthWrite: false, side: THREE.DoubleSide }));
    m.rotation.x = -Math.PI / 2; m.position.set(x, y + 0.06, z);
    this.level.add(m);
    let t = 0;
    const h = { mesh: m, done: false, remove: () => { h.done = true; } };
    this.addEffect((dt) => {
      t += dt;
      m.material.opacity = 0.35 + Math.abs(Math.sin(t * 12)) * 0.4;
      if (h.done || t >= life) { this.level.group.remove(m); m.geometry.dispose(); m.material.dispose(); return true; }
      return false;
    });
    return h;
  }

  // Geschoss im Bogen mit Zielring; o: from, target, time, grav, color, size, blast
  orb(o) {
    const L = this.level, g = this.game;
    const start = o.from.clone(), target = o.target.clone();
    let gy = groundBelow(L.colliders, target.x, target.y + 6, target.z);
    if (L.terrain) { const th = L.terrain.height(target.x, target.z); if (th <= target.y + 6) gy = Math.max(gy, th); }
    target.y = gy > -1e9 ? gy : this.top;
    const T = o.time ?? 1.2, grav = o.grav ?? -18, size = o.size ?? 0.55, blast = o.blast ?? 1.2;
    const vel = new THREE.Vector3((target.x - start.x) / T, (target.y - start.y) / T - 0.5 * grav * T, (target.z - start.z) / T);
    const col = o.color ?? 0x8a3cff;
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(size, 12, 8), M.toon(0x3a2358, { emissive: col, ei: 0.5 }));
    mesh.add(M.glowSprite(col, size * 4, 0.7));
    mesh.position.copy(start); L.add(mesh);
    const mk = this.marker(target.x, target.y, target.z, blast, o.markColor ?? 0xff4070, T + 0.2);
    g.audio.play('orb');
    const pr = {
      t: 0,
      update: (dt) => {
        pr.t += dt;
        vel.y += grav * dt;
        mesh.position.addScaledVector(vel, dt);
        if (mesh.position.y <= target.y + size * 0.6 || pr.t > T + 1.5) {
          L.group.remove(mesh); mk.remove();
          g.audio.play('boom');
          g.particles.burst(mesh.position, { count: 14, color: [col, 0xffffff], speed: 6, size: 1.0 });
          const p = g.player.pos;
          if (Math.hypot(p.x - mesh.position.x, p.z - mesh.position.z) < blast + PLAYER_R && Math.abs(p.y - mesh.position.y) < 1.8) g.player.hurt(mesh.position);
          return true;
        }
        return false;
      },
      check: (player) => {
        if (!mesh.parent) return;
        const p = player.pos;
        for (const h of SAMPLE_H) {
          if ((p.x - mesh.position.x) ** 2 + (p.y + h - mesh.position.y) ** 2 + (p.z - mesh.position.z) ** 2 < (size + PLAYER_R) ** 2) { player.hurt(mesh.position); break; }
        }
      },
    };
    L.projectiles.push(pr);
    return pr;
  }

  // Schockwellen-Ring über den Boden: trifft nur, wer am Boden steht
  wave(x, z, o = {}) {
    const life = o.life ?? 1.1, r0 = o.r0 ?? 2.5, r1 = o.r1 ?? this.arenaR + 2;
    this.game.particles.ring(new THREE.Vector3(x, this.top, z), { color: o.color ?? 0xc59bff, life, r0, r1 });
    let t = 0, hit = false;
    this.addEffect((dt, player) => {
      t += dt;
      const r = r0 + (r1 - r0) * Math.min(1, t / life);
      const p = player.pos, d = Math.hypot(p.x - x, p.z - z);
      if (!hit && Math.abs(d - r) < 0.7 && p.y < this.top + 0.6) { hit = true; player.hurt(new THREE.Vector3(x, this.top, z)); }
      return t >= life;
    });
  }

  minions(type, n, cap = 4) {
    const alive = this.level.enemies.filter((e) => e.alive).length;
    const k = Math.min(n, cap - alive);
    for (let i = 0; i < k; i++) {
      const p = this.arenaPoint(5, this.arenaR - 3);
      const e = this.level.enemy(type, p.x, this.top, p.z, { range: 3 });
      this.game.particles.burst(e.pos.clone().add(new THREE.Vector3(0, 0.5, 0)), { count: 12, color: 0x6a4c99, speed: 4, size: 1 });
    }
  }

  // ---------- Treffer ----------
  takeHit(player, from, o = {}) {
    if (this.hitCd > 0 || !this.active) return false;
    this.hitCd = 0.6;
    this.hp--;
    this.flash = 1.0;
    this.game.audio.play('bosshit');
    this.game.shake(0.5);
    this.game.particles.burst(new THREE.Vector3(from.x, from.y, from.z), { count: 22, color: [0x9ff4ff, 0xffffff, 0xffe066], speed: 8, size: 0.8, tex: 'sparkle', additive: true });
    this.game.hud.showBoss(this.name, this.hp / this.maxHp);
    if (!o.noBounce) {
      const dx = player.pos.x - from.x, dz = player.pos.z - from.z, l = Math.hypot(dx, dz) || 1;
      const js = Math.sqrt(this.level.gravity);
      player.vel.set(dx / l * 8, 15 * js, dz / l * 8);
      player.grounded = false; player.ground = null; player.jumpsLeft = 1; player.controlLock = 0.4;
      player.pounding = false; player.poundWind = 0;
    }
    const lines = this.game.t('story.bossHit');
    this.game.hud.toast(this.hp <= 0 ? lines[lines.length - 1] : lines[(this.maxHp - this.hp - 1) % (lines.length - 1)]);
    for (const c of this.solids) c.disabled = true;
    if (this.hp <= 0) { this.setState('dying'); this.game.audio.play('bossroar'); this.onDefeat(); }
    else this.onHit(from);
    return true;
  }
  onHit() {}
  onDefeat() {}
  cleanup() {}

  updateDying(dt) {
    const k = Math.max(0, 1 - this.t / 2.5);
    this.mesh.scale.setScalar(Math.max(0.01, k));
    this.mesh.rotation.y += dt * (4 + this.t * 6);
    if (Math.random() < dt * 20) this.game.particles.burst(this.pos.clone().add(new THREE.Vector3(0, 2 * k, 0)), { count: 3, color: [0x8f78c0, 0xffffff, 0x9ff4ff], speed: 6, size: 1.2, additive: true, tex: 'glow' });
    if (this.t > 2.5 && this.mesh.visible) {
      this.mesh.visible = false;
      this.cleanup();
      this.state = 'dead';
      this.game.hud.hideBoss();
      this.game.bossDefeated();
      this.level.goalAt(this.center.x, this.top, this.center.z);
    }
  }

  updateFlash(dt) {
    if (this.hitCd > 0) this.hitCd -= dt;
    const blink = this.flash > 0 && Math.floor(this.flash * 20) % 2;
    if (this.flash > 0) this.flash -= dt;
    for (const m of this.mats) m.emissive.set(blink ? 0xff4060 : (m.userData.baseEmissive ?? 0));
  }

  // ---------- Hauptschleife ----------
  update(dt, player) {
    this.t += dt; this.time += dt;
    if (this.state === 'promo') { this.zones(); this.updateDebug(); return; }
    this.updateFlash(dt);
    for (let i = this.effects.length - 1; i >= 0; i--) if (this.effects[i](dt, player)) this.effects.splice(i, 1);
    if (this.state === 'wait') {
      this.idle(dt);
      const d = Math.hypot(player.pos.x - this.center.x, player.pos.z - this.center.z);
      if (d < this.arenaR - 2 && Math.abs(player.pos.y - this.top) < 3 && player.alive) this.start();
    } else if (this.state === 'intro') {
      this.idle(dt);
      this.mesh.scale.setScalar(1 + Math.sin(this.t * 12) * 0.03);
      if (this.t > 1.8) { this.mesh.scale.setScalar(1); this.begin(player); }
    } else if (this.state === 'dying') this.updateDying(dt);
    else if (this.state !== 'dead') this.tick(dt, player);
    this.zones();
    this.updateDebug();
  }
  idle() {}
  begin() {}
  tick() {}
  zones() { this.hz = []; this.wz = []; }

  // ---------- Kollision mit Lumi ----------
  interact(player) {
    if (!player.alive || !this.active) return;
    const p = player.pos;
    for (const z of this.wz) {
      if (z.mode === 'stomp') {
        const ry = z.ry ?? z.r;
        const e = ell(p.x, p.y, p.z, z, z.r * (1 + STOMP_EXTRA), ry * (1 + STOMP_EXTRA));
        if (e < 1 && p.y >= z.y - 0.2) {
          if (player.vel.y <= 0.5 && p.y >= z.y + STOMP_CAP * ry) { this.onWeak(z, player); return; }
          // seitlich: an der Körperform abprallen
          const dy = (p.y - z.y) / ry;
          const rh = z.r * Math.sqrt(Math.max(0, (1 + STOMP_EXTRA) ** 2 - dy * dy));
          const dx = p.x - z.x, dz = p.z - z.z, l = Math.hypot(dx, dz) || 1;
          p.x = z.x + dx / l * rh; p.z = z.z + dz / l * rh;
          const vn = (player.vel.x * dx + player.vel.z * dz) / l;
          if (vn < 0) { player.vel.x -= vn * dx / l; player.vel.z -= vn * dz / l; }
        }
      } else if (z.mode === 'pound') {
        const e = ell(p.x, p.y, p.z, z, z.r + 0.3, (z.ry ?? z.r) + 0.3);
        if (e < 1 && (player.pounding || player.poundLand > 0)) { this.onWeak(z, player); return; }
      } else if (z.mode === 'spin') {
        if (player.spinTime > 0 && Math.hypot(p.x - z.x, p.y + 0.6 - z.y, p.z - z.z) < z.r + 1.5) { this.onWeak(z, player); return; }
      }
    }
    for (const z of this.hz) {
      for (const h of SAMPLE_H) {
        const y = p.y + h;
        let inside;
        if (z.a) inside = segDist(p.x, y, p.z, z.a, z.b) < z.r * HURT_FORGIVE + PLAYER_R;
        else inside = ell(p.x, y, p.z, z, z.r * HURT_FORGIVE + PLAYER_R, (z.ry ?? z.r) * HURT_FORGIVE + PLAYER_R) < 1;
        if (inside) { player.hurt(z.a ? new THREE.Vector3((z.a.x + z.b.x) / 2, z.a.y, (z.a.z + z.b.z) / 2) : new THREE.Vector3(z.x, z.y, z.z)); return; }
      }
    }
  }
  onWeak(z, player) { this.takeHit(player, new THREE.Vector3(z.x, z.y, z.z)); }

  shockwave() {}

  // für Store-Grafiken
  promoPose(ang) { this.pos.set(this.center.x, this.top, this.center.z); this.mesh.rotation.y = ang; this.state = 'promo'; }

  // ---------- Debug-Ansicht (F4) ----------
  updateDebug() {
    const on = !!this.game.debugHitbox && this.mesh.visible;
    const D = this.debug;
    D.used = 0;
    if (on) {
      for (const z of this.hz) this.drawZone(z, 0xff3060);
      for (const z of this.wz) this.drawZone(z, z.mode === 'stomp' ? 0x40ff80 : z.mode === 'pound' ? 0xffd23f : 0x40e0ff);
      for (const c of this.solids) if (!c.disabled) this.drawZone({ cyl: c }, 0x60a0ff);
    }
    for (let i = D.used; i < D.pool.length; i++) { D.pool[i].visible = false; D.pool[i].userData.cyl.visible = false; }
  }
  drawZone(z, color) {
    const D = this.debug;
    let m = D.pool[D.used];
    if (!m) {
      m = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10), new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.65, depthTest: false }));
      m.userData.cyl = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 16, 1, true), m.material);
      m.renderOrder = 999; m.userData.cyl.renderOrder = 999;
      this.level.add(m); this.level.add(m.userData.cyl); D.pool.push(m);
    }
    D.used++;
    m.material.color.set(color);
    const c = m.userData.cyl;
    if (z.cyl) {
      m.visible = false; c.visible = true;
      c.position.set(z.cyl.x, (z.cyl.minY + z.cyl.maxY) / 2, z.cyl.z); c.scale.set(z.cyl.r, z.cyl.maxY - z.cyl.minY, z.cyl.r); c.quaternion.identity();
    } else if (z.a) {
      m.visible = false; c.visible = true;
      const a = new THREE.Vector3(z.a.x, z.a.y, z.a.z), b = new THREE.Vector3(z.b.x, z.b.y, z.b.z);
      c.position.copy(a).add(b).multiplyScalar(0.5);
      const len = a.distanceTo(b) || 0.01;
      c.scale.set(z.r * HURT_FORGIVE, len, z.r * HURT_FORGIVE);
      c.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.sub(a).normalize());
    } else {
      c.visible = false; m.visible = true;
      const f = z.mode === 'stomp' ? 1 + STOMP_EXTRA : z.mode ? 1 : HURT_FORGIVE;
      m.position.set(z.x, z.y, z.z); m.scale.set(z.r * f, (z.ry ?? z.r) * f, z.r * f);
    }
  }
}

// ======================================================================
// 1 · Moderich der Welke – taucht aus Blumenlöchern auf, spuckt Samen, welkt dann
class BulbBoss extends BossBase {
  constructor(...a) {
    super(...a);
    this.model = M.createBulbBoss(this.cfg); this.mesh.add(this.model);
    this.mats = this.model.userData.mats;
    this.holes = [];
    for (let i = 0; i < 6; i++) {
      const a = i / 5 * Math.PI * 2 + 0.3, r = i === 5 ? 0 : 7.5;
      const x = this.center.x + Math.cos(a) * r, z = this.center.z + Math.sin(a) * r;
      const d = new THREE.Mesh(new THREE.CircleGeometry(1.7, 24), M.toon(0x2a1a10)); d.rotation.x = -Math.PI / 2; d.position.set(x, this.top + 0.03, z); this.level.add(d);
      for (let k = 0; k < 6; k++) {
        const pa = k / 6 * Math.PI * 2, pm = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), M.toon(0xffb3d1));
        pm.scale.set(0.5, 0.08, 0.3); pm.position.set(x + Math.cos(pa) * 1.9, this.top + 0.05, z + Math.sin(pa) * 1.9); pm.rotation.y = -pa; this.level.add(pm);
      }
      this.holes.push(new THREE.Vector3(x, this.top, z));
    }
    this.hole = this.holes[5];
    this.depth = 0;
    this.sol = this.solid(1.35, 2.3);
  }
  idle() { this.model.userData.leaves.rotation.y += 0.01; this.model.position.y = Math.sin(this.time * 2) * 0.05; }
  begin() { this.setState('dive'); }
  pick(player) {
    const s = this.holes.filter((h) => h !== this.hole).sort((a, b) => a.distanceTo(player.pos) - b.distanceTo(player.pos));
    this.hole = s[Math.floor(Math.random() * Math.min(2, s.length))];
  }
  tick(dt, player) {
    const ph = this.phase, sp = this.speed, body = this.model.userData.body;
    switch (this.state) {
      case 'dive': this.depth = Math.min(1, this.t / 0.4); if (this.t > 0.4) this.setState('under'); break;
      case 'under':
        if (this.t > 0.5 / sp) { this.pick(player); this.marker(this.hole.x, this.top, this.hole.z, 1.8, 0xd08040, 2); this.setState('warn'); }
        break;
      case 'warn':
        if (Math.random() < dt * 25) this.game.particles.burst(this.hole.clone().add(new THREE.Vector3(0, 0.3, 0)), { count: 1, color: 0x8a5a3a, speed: 3, size: 0.6, gravity: -10, life: 0.6 });
        if (this.t > Math.max(0.55, 1.1 - 0.12 * ph) / sp) { this.setState('emerge'); this.game.audio.play('crumble'); }
        break;
      case 'emerge':
        this.depth = Math.max(0, 1 - this.t / 0.35);
        if (this.t > 0.35) { this.setState('attack'); this.shots = 0; this.next = 0.45; if (ph >= 2) this.minions('nebling', 1, 3); }
        break;
      case 'attack': {
        this.mesh.rotation.y = lerpAngle(this.mesh.rotation.y, Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z), Math.min(1, dt * 6));
        this.next -= dt;
        if (this.next <= 0) {
          const from = this.pos.clone().add(new THREE.Vector3(0, 1.2, 0));
          const lead = new THREE.Vector3(player.vel.x, 0, player.vel.z).multiplyScalar(0.35);
          this.orb({ from, target: player.pos.clone().add(lead), time: 1.0, size: 0.4, blast: 1.1, color: 0x9ad04a, markColor: 0xd0a040 });
          if (ph >= 2 && this.shots % 2 === 1) for (let i = 0; i < 3; i++) {
            const a = Math.random() * Math.PI * 2;
            this.orb({ from, target: this.clampArena(player.pos.clone().add(new THREE.Vector3(Math.cos(a) * 3, 0, Math.sin(a) * 3))), time: 1.2, size: 0.35, blast: 1.0, color: 0x9ad04a, markColor: 0xd0a040 });
          }
          this.shots++;
          this.next = Math.max(0.45, 1.0 - 0.12 * ph) / sp;
          if (this.shots >= 2 + ph) this.setState('wilt');
        }
        break;
      }
      case 'wilt':
        if (this.t > Math.max(1.7, 3.0 - 0.35 * (ph - 1))) this.setState('dive');
        break;
      case 'hit': if (this.t > 0.6) this.setState('dive'); break;
    }
    // Animation
    const wilt = this.state === 'wilt' || this.state === 'hit';
    body.scale.y += ((wilt ? 0.72 : 1) - body.scale.y) * Math.min(1, dt * 8);
    body.rotation.z = wilt ? Math.sin(this.time * 3) * 0.08 : 0;
    this.model.userData.leaves.rotation.y += dt * (wilt ? 0.3 : 1.5);
    this.pos.set(this.hole.x, this.top - this.depth * 3.2, this.hole.z);
    if (this.depth < 0.3 && this.state !== 'hit') this.placeSolid(this.sol, this.hole.x, this.hole.z, wilt ? 1.4 : 2.3);
    else this.sol.disabled = true;
  }
  zones() {
    this.hz = []; this.wz = [];
    const x = this.pos.x, z = this.pos.z;
    if (this.state === 'emerge') this.hz.push({ x, y: this.top + 1.0, z, r: 1.6, ry: 1.6 });
    if (this.state === 'attack') this.hz.push({ x, y: this.top + 1.3, z, r: 1.5, ry: 1.35 });
    if (this.state === 'wilt') this.wz.push({ mode: 'stomp', x, y: this.top + 0.9, z, r: 1.5, ry: 1.0 });
  }
  onHit() { this.setState('hit'); }
}

// ======================================================================
// 2 · Splitterzahn – zielt, stürmt los, rammt sich an Kristallsäulen fest
class BeastBoss extends BossBase {
  constructor(...a) {
    super(...a);
    this.model = M.createCrystalBeast(this.cfg); this.mesh.add(this.model);
    this.mats = this.model.userData.mats;
    this.dir = 0;
    this.sol = this.solid(1.6, 2.4);
    this.pillars = [];
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2 + 0.25;
      const x = this.center.x + Math.cos(a) * 8, z = this.center.z + Math.sin(a) * 8;
      const g = new THREE.Group(); g.position.set(x, this.top, z); this.level.add(g);
      const cm = M.toon(0x9ff4ff, { emissive: 0x3fb8ff, ei: 0.5 });
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.1, 3.4, 6), cm); c.position.y = 1.7; c.castShadow = true; c.userData.noRefine = true; g.add(c);
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.85, 1.2, 6), cm); tip.position.y = 4.0; tip.userData.noRefine = true; g.add(tip);
      M.addOutline(g, 0.05);
      const col = cylCollider(x, z, 1.0, this.top, this.top + 3.4);
      this.level.colliders.push(col);
      this.pillars.push({ x, z, g, col, alive: true });
    }
    const line = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1), new THREE.MeshBasicMaterial({ color: 0xff4070, transparent: true, opacity: 0.4, depthWrite: false, side: THREE.DoubleSide }));
    line.rotation.x = -Math.PI / 2; line.visible = false; this.level.add(line); this.line = line;
  }
  idle() { this.model.userData.body.position.y = Math.sin(this.time * 2) * 0.05; }
  begin() { this.setState('aim'); }
  regrow() {
    for (const p of this.pillars) if (!p.alive) { p.alive = true; p.col.disabled = false; p.g.visible = true; p.g.scale.setScalar(0.01); p.grow = 0; }
  }
  tick(dt, player) {
    const ph = this.phase, sp = this.speed, u = this.model.userData;
    for (const p of this.pillars) if (p.grow !== undefined) { p.grow += dt * 2; p.g.scale.setScalar(Math.min(1, p.grow)); if (p.grow >= 1) p.grow = undefined; }
    const aimT = Math.max(0.6, 1.25 - 0.1 * ph) / sp;
    switch (this.state) {
      case 'aim': {
        const want = Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z);
        if (this.t < aimT * 0.7) this.dir = lerpAngle(this.dir, want, Math.min(1, dt * 8));
        const L = 24;
        this.line.visible = true;
        this.line.scale.set(1, L, 1);
        this.line.position.set(this.pos.x + Math.sin(this.dir) * L / 2, this.top + 0.05, this.pos.z + Math.cos(this.dir) * L / 2);
        this.line.rotation.z = -this.dir;
        this.line.material.opacity = 0.25 + Math.abs(Math.sin(this.t * 14)) * 0.35;
        u.head.rotation.x = Math.sin(this.t * 20) * 0.08;
        if (this.t > aimT) { this.line.visible = false; this.setState('charge'); this.game.audio.play('bossroar'); }
        break;
      }
      case 'charge': {
        const v = (14 + 1.8 * ph) * sp;
        this.pos.x += Math.sin(this.dir) * v * dt; this.pos.z += Math.cos(this.dir) * v * dt;
        if (Math.random() < dt * 30) this.game.particles.burst(this.pos.clone().add(new THREE.Vector3(0, 0.3, 0)), { count: 1, color: 0xc8b8a0, speed: 2, size: 0.8, life: 0.5 });
        for (const p of this.pillars) {
          if (!p.alive || Math.hypot(p.x - this.pos.x, p.z - this.pos.z) > 2.5) continue;
          p.alive = false; p.col.disabled = true; p.g.visible = false;
          this.game.audio.play('crumble'); this.game.shake(0.6);
          this.game.particles.burst(new THREE.Vector3(p.x, this.top + 2, p.z), { count: 26, color: [0x9ff4ff, 0xffffff], speed: 9, size: 0.9, tex: 'sparkle', additive: true });
          this.setState('stuck');
          if (ph >= 2) this.minions('dornling', 1, 3);
          break;
        }
        if (this.state !== 'charge') break;
        if (Math.hypot(this.pos.x - this.center.x, this.pos.z - this.center.z) > this.arenaR - 2.2 || this.t > 2.6) {
          this.clampArena(this.pos, 2.2);
          this.game.audio.play('pound'); this.game.shake(0.3);
          this.wave(this.pos.x, this.pos.z, { r0: 1, r1: 7, life: 0.7, color: 0x9ff4ff });
          this.setState('skid');
          if (!this.pillars.some((p) => p.alive)) this.regrow();
        }
        break;
      }
      case 'skid': if (this.t > 0.7) this.setState('aim'); break;
      case 'stuck':
        u.head.rotation.x = 0.4 + Math.sin(this.t * 4) * 0.05;
        if (this.t > Math.max(1.8, 3.0 - 0.3 * (ph - 1))) { u.head.rotation.x = 0; this.setState('aim'); }
        break;
      case 'hit': if (this.t > 0.7) { u.head.rotation.x = 0; this.setState('aim'); } break;
    }
    this.pos.y = this.top;
    this.mesh.rotation.y = this.dir;
    const run = this.state === 'charge' ? 18 : 0;
    u.legs.forEach((l, i) => { l.rotation.x = run ? Math.sin(this.time * run + i * Math.PI / 2) * 0.6 : 0; });
    if (this.state === 'hit') this.sol.disabled = true;
    else this.placeSolid(this.sol, this.pos.x, this.pos.z, 2.4);
  }
  zones() {
    this.hz = []; this.wz = [];
    const x = this.pos.x, z = this.pos.z;
    if (this.state === 'aim' || this.state === 'charge' || this.state === 'skid') {
      this.hz.push({ x, y: this.top + 1.6, z, r: 1.9, ry: 1.3 });
      this.hz.push({ x: x + Math.sin(this.dir) * 2.1, y: this.top + 1.9, z: z + Math.cos(this.dir) * 2.1, r: 1.0 });
    }
    if (this.state === 'stuck') this.wz.push({ mode: 'stomp', x, y: this.top + 1.6, z, r: 1.8, ry: 1.25 });
  }
  onHit() { this.setState('hit'); }
  cleanup() { this.line.visible = false; }
}

// ======================================================================
// 3 · Kapitän Dunstbart – kreist im Luftschiff, wirft Zünder-Bomben; Drehattacke schlägt sie zurück
class ShipBoss extends BossBase {
  constructor(...a) {
    super(...a);
    this.model = M.createSkyShip(this.cfg); this.mesh.add(this.model);
    this.mats = this.model.userData.mats;
    this.ang = 0; this.bombs = []; this.count = 0; this.next = 1; this.wobble = 0;
    this.R = this.arenaR + 6;
    this.fly(0);
  }
  fly(dt) {
    this.ang += dt * 0.32 * this.speed;
    const y = this.top + 6 + Math.sin(this.time * 1.3) * 0.5 + (this.state === 'hit' ? 1.5 : 0);
    this.pos.set(this.center.x + Math.cos(this.ang) * this.R, y, this.center.z + Math.sin(this.ang) * this.R);
    this.mesh.rotation.y = -this.ang;
    this.mesh.rotation.z = Math.sin(this.time * 0.8) * 0.05 + Math.sin(this.wobble * 25) * this.wobble * 0.3;
    if (this.wobble > 0) this.wobble -= dt;
    this.model.userData.prop.rotation.x += dt * 14;
  }
  idle(dt) { this.fly(dt || 0.016); }
  begin() { this.setState('volley'); this.count = 0; this.next = 0.6; }
  fire(target) {
    const cannon = new THREE.Vector3(); this.model.userData.cannon.getWorldPosition(cannon);
    const T = 1.3, grav = -18;
    const vel = new THREE.Vector3((target.x - cannon.x) / T, (target.y + 0.45 - cannon.y) / T - 0.5 * grav * T, (target.z - cannon.z) / T);
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 14, 10), M.toon(0x2a2a3a, { emissive: 0x000000, ei: 1, unique: true }));
    const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.4, 12), M.toon(0xc8a060)); fuse.position.y = 0.6; mesh.add(fuse);
    mesh.position.copy(cannon); this.level.add(mesh);
    this.game.audio.play('boom');
    this.game.particles.burst(cannon, { count: 8, color: [0xffffff, 0xd8d0f0], speed: 4, size: 1.2 });
    this.bombs.push({ mesh, vel, target: target.clone(), state: 'fly', t: 0, grav, fuseT: Math.max(1.8, 2.8 - 0.2 * this.phase), marker: null });
  }
  tick(dt, player) {
    const ph = this.phase, sp = this.speed;
    this.fly(dt);
    const u = this.model.userData;
    u.captain.rotation.z = this.state === 'hit' ? Math.sin(this.t * 20) * 0.4 : 0;
    switch (this.state) {
      case 'volley':
        this.next -= dt;
        if (this.next <= 0) {
          const lead = new THREE.Vector3(player.vel.x, 0, player.vel.z).multiplyScalar(0.4);
          const tg = this.clampArena(player.pos.clone().add(lead), 2.5);
          this.fire(tg);
          if (ph >= 3 && this.count === 0) {
            const side = new THREE.Vector3(-(tg.z - this.center.z), 0, tg.x - this.center.x).normalize().multiplyScalar(3.5);
            this.fire(this.clampArena(tg.clone().add(side), 2.5)); this.fire(this.clampArena(tg.clone().sub(side), 2.5));
          }
          this.count++;
          this.next = Math.max(0.6, 1.4 - 0.15 * ph) / sp;
          if (this.count >= 2 + ph) this.setState('reload');
        }
        break;
      case 'reload':
        if (this.t > 3.2) { this.setState('volley'); this.count = 0; this.next = 0.3; if (ph >= 2) this.minions('flatterling', 1, 3); }
        break;
      case 'hit': if (this.t > 1.2) this.setState('reload'); break;
    }
    // Bomben
    const p = player.pos;
    for (let i = this.bombs.length - 1; i >= 0; i--) {
      const b = this.bombs[i]; b.t += dt;
      if (b.state === 'fly') {
        b.vel.y += b.grav * dt; b.mesh.position.addScaledVector(b.vel, dt);
        if (b.mesh.position.y <= b.target.y + 0.5) {
          b.mesh.position.set(b.target.x, b.target.y + 0.5, b.target.z); b.state = 'fuse'; b.t = 0;
          b.marker = this.marker(b.target.x, b.target.y, b.target.z, 2.2, 0xff4070, b.fuseT + 0.1);
          this.game.audio.play('land');
        }
        if ((p.x - b.mesh.position.x) ** 2 + (p.y + 0.65 - b.mesh.position.y) ** 2 + (p.z - b.mesh.position.z) ** 2 < 0.9 ** 2) player.hurt(b.mesh.position);
      } else if (b.state === 'fuse') {
        const k = b.t / b.fuseT;
        b.mesh.material.emissive.set(Math.floor(b.t * (4 + k * 14)) % 2 ? 0xff3020 : 0x000000);
        if (Math.random() < dt * 20) this.game.particles.burst(b.mesh.position.clone().add(new THREE.Vector3(0, 0.8, 0)), { count: 1, color: 0xffc23a, speed: 2, size: 0.3, tex: 'sparkle', additive: true, life: 0.3 });
        if (b.t > b.fuseT) {
          this.game.audio.play('boom'); this.game.shake(0.3);
          this.game.particles.burst(b.mesh.position, { count: 22, color: [0xff8a2a, 0x3a2a3a, 0xffffff], speed: 8, size: 1.2 });
          if (Math.hypot(p.x - b.mesh.position.x, p.z - b.mesh.position.z) < 2.2 + PLAYER_R && Math.abs(p.y - b.target.y) < 2) player.hurt(b.mesh.position);
          this.level.group.remove(b.mesh); this.bombs.splice(i, 1);
        }
      } else if (b.state === 'back') {
        const tgt = this.pos.clone().add(new THREE.Vector3(0, 0.8, 0));
        const d = tgt.clone().sub(b.mesh.position); const l = d.length();
        b.mesh.position.addScaledVector(d.normalize(), Math.min(l, 24 * dt));
        b.mesh.rotation.x += dt * 20;
        if (l < 1.5) {
          this.level.group.remove(b.mesh); this.bombs.splice(i, 1);
          this.wobble = 0.8;
          this.game.particles.burst(tgt, { count: 26, color: [0xff8a2a, 0xffffff], speed: 9, size: 1.4 });
          this.takeHit(player, tgt, { noBounce: true });
        }
      }
    }
  }
  onWeak(z) {
    const b = z.bomb;
    if (b.state !== 'fuse') return;
    b.state = 'back'; b.t = 0; if (b.marker) b.marker.remove();
    b.mesh.material.emissive.set(0xffd23f);
    this.game.audio.play('spin');
    this.game.particles.burst(b.mesh.position, { count: 12, color: 0xffe066, speed: 5, size: 0.6, tex: 'sparkle', additive: true });
  }
  zones() {
    this.hz = []; this.wz = [];
    for (const b of this.bombs) if (b.state === 'fuse') this.wz.push({ mode: 'spin', x: b.mesh.position.x, y: b.mesh.position.y, z: b.mesh.position.z, r: 0.5, bomb: b });
  }
  onHit() { this.setState('hit'); this.game.audio.play('bossroar'); }
  cleanup() { for (const b of this.bombs) { this.level.group.remove(b.mesh); if (b.marker) b.marker.remove(); } this.bombs = []; }
  promoPose(ang) { this.ang = ang + Math.PI; this.R = 9; this.fly(0); this.pos.y = this.top + 4; this.state = 'promo'; }
}

// ======================================================================
// 4 · Schwelgrimm – Magma-Golem: Fäuste schlagen ein und bleiben stecken → Stampfattacke auf die Faust
class GolemBoss extends BossBase {
  constructor(...a) {
    super(...a);
    this.model = M.createMagmaGolem(this.cfg); this.mesh.add(this.model);
    this.mats = this.model.userData.mats;
    this.body = this.solid(2.0, 4.8);
    this.fists = this.model.userData.fists.map((g, i) => ({ g, side: i ? 1 : -1, state: 'idle', t: 0, target: new THREE.Vector3(), sol: this.solid(1.15, 2.2) }));
    // Fäuste unabhängig vom Körper in Weltkoordinaten bewegen
    for (const f of this.fists) { this.model.remove(f.g); this.level.add(f.g); }
    this.next = 1; this.actions = 0;
    this.idle();
  }
  home(f) {
    const r = this.mesh.rotation.y, ox = f.side * 3.6, oz = 0.6;
    return new THREE.Vector3(this.pos.x + Math.cos(r) * ox + Math.sin(r) * oz, this.top + 3.3 + Math.sin(this.time * 2 + f.side) * 0.25, this.pos.z - Math.sin(r) * ox + Math.cos(r) * oz);
  }
  idle() { for (const f of this.fists) f.g.position.copy(this.home(f)); }
  begin() { this.setState('fight'); this.placeSolid(this.body, this.pos.x, this.pos.z, 4.8); }
  tick(dt, player) {
    const ph = this.phase, sp = this.speed;
    this.mesh.rotation.y = lerpAngle(this.mesh.rotation.y, Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z), Math.min(1, dt * 2));
    this.placeSolid(this.body, this.pos.x, this.pos.z, 4.8);
    const glow = this.model.userData.glow;
    glow.emissiveIntensity = 0.8 + Math.sin(this.time * 6) * 0.3;
    if (this.state === 'fight' || this.state === 'hit') {
      this.next -= dt;
      const busy = this.fists.filter((f) => f.state !== 'idle').length;
      if (this.next <= 0 && busy < (ph >= 3 ? 2 : 1)) {
        this.actions++;
        if (this.actions % 3 === 0) {
          // Stampfer: Feuerring über die ganze Arena
          this.game.audio.play('pound'); this.game.shake(0.5);
          this.wave(this.pos.x, this.pos.z, { r0: 2.5, life: Math.max(0.8, 1.3 - 0.1 * ph) / Math.sqrt(sp), color: 0xff7a2a });
          if (ph >= 2) for (let i = 0; i < 3; i++) {
            const tp = this.clampArena(player.pos.clone().add(new THREE.Vector3(this.rnd(-4, 4), 0, this.rnd(-4, 4))), 2);
            this.orb({ from: tp.clone().add(new THREE.Vector3(0, 16, 0)), target: tp, time: 1.1, grav: 0, size: 0.6, blast: 1.4, color: 0xff6a1a });
          }
          this.next = 1.4 / sp;
        } else {
          const f = this.fists.find((q) => q.state === 'idle');
          if (f) {
            f.state = 'raise'; f.t = 0;
            f.target.copy(player.pos);
            const dc = Math.hypot(f.target.x - this.pos.x, f.target.z - this.pos.z);
            if (dc < 3.8) { const a = Math.atan2(f.target.x - this.pos.x, f.target.z - this.pos.z); f.target.x = this.pos.x + Math.sin(a) * 3.8; f.target.z = this.pos.z + Math.cos(a) * 3.8; }
            this.clampArena(f.target, 2);
            f.raiseT = Math.max(0.75, 1.25 - 0.1 * ph) / sp;
            this.marker(f.target.x, this.top, f.target.z, 1.9, 0xff6a1a, f.raiseT + 0.4);
            this.next = (ph >= 3 ? 1.2 : 2.2) / sp;
          }
        }
      }
      if (this.state === 'hit' && this.t > 0.8) this.setState('fight');
    }
    for (const f of this.fists) {
      f.t += dt;
      const g = f.g;
      if (f.state === 'idle') g.position.lerp(this.home(f), Math.min(1, dt * 6));
      else if (f.state === 'raise') {
        const k = Math.min(1, f.t / f.raiseT);
        g.position.lerp(new THREE.Vector3(f.target.x, this.top + 7, f.target.z), Math.min(1, dt * 7));
        g.rotation.z = Math.sin(f.t * 30) * 0.05 * k;
        if (f.t > f.raiseT) { f.state = 'slam'; f.t = 0; f.vy = 0; }
      } else if (f.state === 'slam') {
        f.vy -= 90 * dt; g.position.y += f.vy * dt;
        if (g.position.y <= this.top + 1.1) {
          g.position.y = this.top + 1.1;
          f.state = 'stuck'; f.t = 0;
          this.game.audio.play('pound'); this.game.shake(0.45);
          this.game.particles.burst(g.position, { count: 20, color: [0xff8a2a, 0x3a2424], speed: 7, size: 1.1, flat: true });
          this.wave(g.position.x, g.position.z, { r0: 1.5, r1: 5.5, life: 0.45, color: 0xff7a2a });
          const p = player.pos;
          if (Math.hypot(p.x - g.position.x, p.z - g.position.z) < 1.9 + PLAYER_R && p.y < this.top + 2.2) player.hurt(g.position);
          this.placeSolid(f.sol, g.position.x, g.position.z, 2.2);
        }
      } else if (f.state === 'stuck') {
        g.rotation.z = Math.sin(f.t * 8) * 0.04;
        if (f.t > Math.max(2.0, 3.0 - 0.25 * (ph - 1))) { f.state = 'return'; f.t = 0; f.sol.disabled = true; }
      } else if (f.state === 'return') {
        g.position.lerp(this.home(f), Math.min(1, dt * 4));
        if (f.t > 0.7) { f.state = 'idle'; g.rotation.z = 0; }
      }
    }
  }
  zones() {
    this.hz = []; this.wz = [];
    if (this.state === 'wait' || this.state === 'intro') return;
    this.hz.push({ x: this.pos.x, y: this.top + 3, z: this.pos.z, r: 2.1, ry: 3 });
    for (const f of this.fists) {
      const p = f.g.position;
      if (f.state === 'slam' || f.state === 'idle' || f.state === 'return') this.hz.push({ x: p.x, y: p.y, z: p.z, r: 1.1 });
      if (f.state === 'stuck') this.wz.push({ mode: 'pound', x: p.x, y: p.y + 0.6, z: p.z, r: 1.2, ry: 1.0, fist: f });
    }
  }
  onWeak(z, player) {
    const f = z.fist;
    if (this.takeHit(player, f.g.position.clone())) {
      f.state = 'return'; f.t = 0; f.sol.disabled = true;
      this.game.particles.burst(f.g.position, { count: 18, color: [0xffb02e, 0xffffff], speed: 7, size: 0.8, tex: 'sparkle', additive: true });
    }
  }
  onHit() { this.setState('hit'); this.placeSolid(this.body, this.pos.x, this.pos.z, 4.8); }
  cleanup() { for (const f of this.fists) { f.g.visible = false; f.sol.disabled = true; } this.body.disabled = true; }
  updateDying(dt) { for (const f of this.fists) f.g.scale.setScalar(Math.max(0.01, 1 - this.t / 2.5)); super.updateDying(dt); }
  promoPose(ang) { super.promoPose(ang); this.idle(); }
}

// ======================================================================
// 5 · Frierich der Eisige – macht die Arena glatt, rollende Schneebälle, Eisstacheln, Wirbel → rutscht aus
class FrostBoss extends BossBase {
  constructor(...a) {
    super(...a);
    this.model = M.createFrostBoss(this.cfg); this.mesh.add(this.model);
    this.mats = this.model.userData.mats;
    this.s = 0; this.balls = []; this.spikes = []; this.attacks = 0; this.next = 1;
    this.sol = this.solid(1.45, 1.3);
    this.arenaCol = this.level.colliders.find((c) => c.type === 'cyl' && Math.abs(c.r - this.arenaR) < 0.01 && Math.hypot(c.x - this.center.x, c.z - this.center.z) < 0.1);
    const ice = new THREE.Mesh(new THREE.CircleGeometry(this.arenaR - 0.05, 48), M.toon(0xd8f4ff, { map: this.level.T.ice, transparent: true, opacity: 0.0, unique: true }));
    ice.rotation.x = -Math.PI / 2; ice.position.set(this.center.x, this.top + 0.04, this.center.z); this.level.add(ice); this.ice = ice;
  }
  idle() { this.model.userData.body.rotation.y += 0.01; }
  begin() {
    if (this.arenaCol) this.arenaCol.ice = true;
    this.setState('skate'); this.next = 1;
    this.game.hud.toast(this.game.t('hints.boss_ice_slip'), 3);
  }
  skatePos(dt) {
    this.s += dt * this.speed * (0.45 + 0.08 * this.phase);
    const x = this.center.x + Math.sin(this.s) * 8, z = this.center.z + Math.sin(this.s * 1.37) * 6;
    const nx = x - this.pos.x, nz = z - this.pos.z;
    if (Math.abs(nx) + Math.abs(nz) > 1e-4) this.mesh.rotation.y = lerpAngle(this.mesh.rotation.y, Math.atan2(nx, nz), Math.min(1, dt * 6));
    this.pos.set(x, this.top, z);
  }
  tick(dt, player) {
    const ph = this.phase, sp = this.speed, body = this.model.userData.body;
    this.ice.material.opacity = Math.min(0.75, this.ice.material.opacity + dt);
    switch (this.state) {
      case 'skate':
        this.skatePos(dt);
        body.rotation.z = Math.sin(this.time * 4) * 0.12;
        this.next -= dt;
        if (this.next <= 0) {
          this.attacks++;
          if (this.attacks % 2) this.snowball(player); else this.spikesAttack(player);
          this.next = Math.max(0.9, 1.8 - 0.15 * ph) / sp;
          if (this.attacks >= 2 + ph) { this.attacks = 0; this.setState('spin'); }
        }
        break;
      case 'spin': {
        const d = player.pos.clone().sub(this.pos); d.y = 0; const l = d.length() || 1;
        this.pos.addScaledVector(d.normalize(), Math.min(l, 5.5 * sp * dt));
        this.clampArena(this.pos, 2);
        body.rotation.y += dt * 25;
        if (Math.random() < dt * 20) this.game.particles.burst(this.pos.clone().add(new THREE.Vector3(0, 0.3, 0)), { count: 1, color: 0xffffff, speed: 4, size: 0.7, flat: true });
        if (this.t > 2.2) { this.setState('slip'); this.game.audio.play('hurt'); }
        break;
      }
      case 'slip':
        this.model.rotation.x = -Math.min(1, this.t / 0.35) * Math.PI / 2;
        if (this.t > 0.35) { this.setState('fallen'); this.game.shake(0.3); }
        break;
      case 'fallen':
        body.rotation.y += dt * 2;
        if (Math.random() < dt * 6) this.game.particles.burst(this.pos.clone().add(new THREE.Vector3(0, 2.2, 0)), { count: 1, color: 0xffe066, speed: 1, size: 0.5, tex: 'sparkle', additive: true, gravity: 0, life: 0.6 });
        if (this.t > Math.max(1.8, 3.0 - 0.3 * (ph - 1))) this.setState('getup');
        break;
      case 'getup':
      case 'hit':
        this.model.rotation.x = -Math.max(0, 1 - this.t / 0.5) * Math.PI / 2;
        if (this.t > 0.6) { this.model.rotation.x = 0; this.setState('skate'); }
        break;
    }
    if (this.state === 'fallen') this.placeSolid(this.sol, this.pos.x, this.pos.z, 1.3);
    else this.sol.disabled = true;
    // Schneebälle
    const p = player.pos;
    for (let i = this.balls.length - 1; i >= 0; i--) {
      const b = this.balls[i];
      b.r = Math.min(1.05, b.r + dt * 0.35);
      b.mesh.scale.setScalar(b.r);
      b.pos.addScaledVector(b.dir, b.v * dt);
      const out = Math.hypot(b.pos.x - this.center.x, b.pos.z - this.center.z) > this.arenaR + 0.5;
      if (out) { b.vy -= 30 * dt; b.pos.y += b.vy * dt; } else b.pos.y = this.top + b.r;
      b.mesh.position.copy(b.pos);
      b.mesh.rotation.x += b.v * dt / b.r;
      for (const h of SAMPLE_H) if ((p.x - b.pos.x) ** 2 + (p.y + h - b.pos.y) ** 2 + (p.z - b.pos.z) ** 2 < (b.r * HURT_FORGIVE + PLAYER_R) ** 2) { player.hurt(b.pos); break; }
      if (b.pos.y < this.top - 20) { this.level.group.remove(b.mesh); this.balls.splice(i, 1); }
    }
    for (let i = this.spikes.length - 1; i >= 0; i--) {
      const s = this.spikes[i]; s.t += dt;
      if (s.t > s.warn) { s.mesh.visible = true; s.mesh.scale.y = Math.min(1, (s.t - s.warn) / 0.12); }
      if (s.t > s.warn + 0.8) { this.level.group.remove(s.mesh); this.spikes.splice(i, 1); }
    }
  }
  snowball(player) {
    const pos = this.pos.clone(); pos.y = this.top + 0.6;
    const dir = player.pos.clone().sub(pos); dir.y = 0; dir.normalize();
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), M.toon(0xffffff, { map: this.level.T.snow }));
    mesh.castShadow = true; mesh.position.copy(pos); this.level.add(mesh);
    this.balls.push({ mesh, pos, dir, v: (6.5 + 0.6 * this.phase) * this.speed, r: 0.6, vy: 0 });
    this.game.audio.play('spin');
  }
  spikesAttack(player) {
    const n = 3 + this.phase;
    for (let i = 0; i < n; i++) {
      const pt = i === 0 ? player.pos.clone() : player.pos.clone().add(new THREE.Vector3(this.rnd(-3.5, 3.5), 0, this.rnd(-3.5, 3.5)));
      this.clampArena(pt, 1.5);
      const warn = Math.max(0.65, 1.0 - 0.06 * this.phase) / this.speed;
      this.marker(pt.x, this.top, pt.z, 1.2, 0x7fd8ff, warn + 0.1);
      const g = new THREE.Group(); g.position.copy(pt); g.visible = false; this.level.add(g);
      const cm = M.toon(0xe8f8ff, { emissive: 0x7fd8ff, ei: 0.5 });
      for (let k = 0; k < 4; k++) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.35, 2.1, 18), cm); c.position.set(Math.cos(k * 1.6) * 0.4, 1.05, Math.sin(k * 1.6) * 0.4); c.rotation.z = (k - 1.5) * 0.12; g.add(c); }
      g.scale.y = 0.01;
      this.spikes.push({ mesh: g, x: pt.x, z: pt.z, t: 0, warn });
    }
  }
  zones() {
    this.hz = []; this.wz = [];
    const x = this.pos.x, z = this.pos.z;
    if (this.state === 'skate' || this.state === 'spin') this.hz.push({ x, y: this.top + 1.75, z, r: 1.6, ry: 1.7 });
    if (this.state === 'fallen') this.wz.push({ mode: 'stomp', x, y: this.top + 0.9, z, r: 1.6, ry: 1.0 });
    for (const s of this.spikes) if (s.t > s.warn) this.hz.push({ x: s.x, y: this.top + 1.0, z: s.z, r: 0.9, ry: 1.1 });
  }
  onHit() { this.setState('hit'); }
  cleanup() {
    if (this.arenaCol) this.arenaCol.ice = false;
    this.ice.visible = false;
    for (const b of this.balls) this.level.group.remove(b.mesh);
    for (const s of this.spikes) this.level.group.remove(s.mesh);
    this.balls = []; this.spikes = [];
  }
}

// ======================================================================
// 6 · Der Sandflüsterer – Sandwurm jagt dich unter dem Sand, bricht als Säule hervor; der leuchtende Schwanz ist verwundbar
class WormBoss extends BossBase {
  constructor(...a) {
    super(...a);
    this.model = M.createSandworm(this.cfg); this.mesh.add(this.model);
    this.mats = this.model.userData.mats;
    this.pos.set(0, 0, 0); // Kopf, Segmente und Schwanz liegen in Weltkoordinaten
    this.T = this.center.clone();
    this.headPos = new THREE.Vector3(this.center.x, this.top + 2.5, this.center.z);
    this.hist = [];
    this.tailPos = new THREE.Vector3(this.center.x, this.top - 3, this.center.z);
    this.tailSol = this.solid(0.65, 1.9);
    const mound = new THREE.Mesh(new THREE.CircleGeometry(1.6, 24), new THREE.MeshBasicMaterial({ color: 0x5a4020, transparent: true, opacity: 0.55, depthWrite: false }));
    mound.rotation.x = -Math.PI / 2; mound.visible = false; this.level.add(mound); this.mound = mound;
    this.spit = 1.5;
    this.layout();
  }
  layout() {
    const u = this.model.userData;
    u.head.position.copy(this.headPos);
    this.hist.unshift(this.headPos.clone());
    if (this.hist.length > 90) this.hist.length = 90;
    u.segs.forEach((s, i) => {
      const h = this.hist[Math.min(this.hist.length - 1, (i + 1) * 4)] || this.headPos;
      s.mesh.position.copy(h);
      s.mesh.visible = h.y > this.top - 2;
    });
    u.head.visible = this.headPos.y > this.top - 2;
    u.tail.position.copy(this.tailPos);
    u.tail.visible = this.tailPos.y > this.top - 2;
  }
  idle() {
    this.headPos.set(this.center.x + Math.cos(this.time) * 2, this.top + 2.5 + Math.sin(this.time * 2), this.center.z + Math.sin(this.time) * 2);
    this.layout();
  }
  begin() { this.setState('dive0'); }
  tick(dt, player) {
    const ph = this.phase, sp = this.speed, u = this.model.userData;
    switch (this.state) {
      case 'dive0':
        this.headPos.y -= dt * 12;
        if (this.headPos.y < this.top - 5) { this.T.set(this.headPos.x, this.top, this.headPos.z); this.setState('hunt'); }
        break;
      case 'hunt': {
        this.headPos.y = this.top - 5;
        const d = player.pos.clone().sub(this.T); d.y = 0; const l = d.length();
        if (l > 0.1) this.T.addScaledVector(d.normalize(), Math.min(l, (4.5 + 0.5 * ph) * sp * dt));
        this.clampArena(this.T, 2.2);
        this.headPos.x = this.T.x; this.headPos.z = this.T.z;
        this.mound.visible = true;
        this.mound.position.set(this.T.x, this.top + 0.05, this.T.z);
        this.mound.scale.setScalar(1 + Math.sin(this.time * 12) * 0.08);
        if (Math.random() < dt * 30) this.game.particles.burst(this.T.clone().add(new THREE.Vector3(0, 0.2, 0)), { count: 1, color: 0xd8b070, speed: 3, size: 0.7, gravity: -10, life: 0.5 });
        if (ph >= 2) {
          this.spit -= dt;
          if (this.spit <= 0) { this.spit = Math.max(0.9, 1.6 - 0.15 * ph); this.orb({ from: this.T.clone().add(new THREE.Vector3(0, 0.5, 0)), target: player.pos.clone(), time: 1.0, size: 0.4, blast: 1.0, color: 0xd8a040, markColor: 0xd08040 }); }
        }
        if (this.t > Math.max(2.2, 3.4 - 0.2 * ph)) { this.setState('warn'); this.marker(this.T.x, this.top, this.T.z, 2.2, 0xd08040, 1.2); }
        break;
      }
      case 'warn':
        this.game.shake(0.05);
        if (this.t > Math.max(0.6, 0.85 - 0.06 * ph) / sp) { this.setState('erupt'); this.mound.visible = false; this.game.audio.play('bossroar'); }
        break;
      case 'erupt': {
        const k = Math.min(1, this.t / 0.45);
        this.headPos.set(this.T.x, this.top - 4 + k * 11, this.T.z);
        u.head.rotation.x = -Math.PI / 4 * (1 - k);
        if (this.t > 0.45 && !this.burstDone) { this.burstDone = true; this.game.particles.burst(this.T.clone().add(new THREE.Vector3(0, 0.5, 0)), { count: 30, color: [0xd8b070, 0xa08050], speed: 10, size: 1.2 }); }
        if (this.t > 1.05) {
          this.burstDone = false;
          const a = Math.random() * Math.PI * 2;
          this.D = this.clampArena(this.T.clone().add(new THREE.Vector3(Math.cos(a) * 9, 0, Math.sin(a) * 9)), 2.5);
          this.A = this.headPos.clone();
          this.setState('arc');
        }
        break;
      }
      case 'arc': {
        const T = 1.1 / sp, k = Math.min(1, this.t / T);
        this.headPos.set(this.A.x + (this.D.x - this.A.x) * k, this.top + 7 + Math.sin(k * Math.PI) * 3 - k * 12, this.A.z + (this.D.z - this.A.z) * k);
        u.head.rotation.x = k * 1.5;
        if (k >= 1) {
          this.game.particles.burst(this.D.clone().add(new THREE.Vector3(0, 0.5, 0)), { count: 20, color: [0xd8b070, 0xa08050], speed: 8, size: 1 });
          // Schwanz taucht an anderer Stelle auf
          let tp = null;
          for (let i = 0; i < 10 && !tp; i++) { const c = this.arenaPoint(2, this.arenaR - 3.5); if (c.distanceTo(player.pos) > 4) tp = c; }
          this.tailPos.copy(tp || this.arenaPoint(2, this.arenaR - 3.5)); this.tailPos.y = this.top - 2.5;
          this.marker(this.tailPos.x, this.top, this.tailPos.z, 1.3, 0xffd23f, 0.5);
          this.setState('tail'); u.head.rotation.x = 0;
        }
        break;
      }
      case 'tail': {
        this.headPos.y = this.top - 8;
        this.tailPos.y = Math.min(this.top, this.tailPos.y + dt * 10);
        u.tail.rotation.z = Math.sin(this.time * 6) * 0.12;
        u.gem.rotation.y += dt * 4;
        if (this.tailPos.y >= this.top) this.placeSolid(this.tailSol, this.tailPos.x, this.tailPos.z, 1.9);
        if (this.t > Math.max(2.2, 3.6 - 0.25 * (ph - 1))) { this.tailSol.disabled = true; this.setState('tailDown'); }
        break;
      }
      case 'tailDown':
      case 'hit':
        this.tailSol.disabled = true;
        this.tailPos.y -= dt * 8;
        if (this.t > 0.5) { this.T.set(this.D ? this.D.x : this.center.x, this.top, this.D ? this.D.z : this.center.z); this.setState('hunt'); }
        break;
    }
    this.layout();
  }
  zones() {
    this.hz = []; this.wz = [];
    const top = this.top;
    if (this.state === 'erupt' || this.state === 'arc') {
      const h = this.headPos;
      if (h.y > top - 1) this.hz.push({ x: h.x, y: h.y, z: h.z, r: 1.5, ry: 1.6 });
      const segs = this.model.userData.segs;
      for (let i = 0; i < segs.length; i += 2) { const s = segs[i].mesh.position; if (s.y > top - 1) this.hz.push({ x: s.x, y: s.y, z: s.z, r: segs[i].r }); }
      if (this.state === 'erupt' && h.y > top) this.hz.push({ a: { x: h.x, y: top, z: h.z }, b: { x: h.x, y: h.y, z: h.z }, r: 1.4 });
    }
    if (this.state === 'tail' && this.tailPos.y > top - 0.5) {
      const t = this.tailPos;
      this.wz.push({ mode: 'spin', x: t.x, y: t.y + 1.2, z: t.z, r: 0.7 });
      this.wz.push({ mode: 'pound', x: t.x, y: t.y + 1.1, z: t.z, r: 0.8, ry: 1.0 });
      this.wz.push({ mode: 'stomp', x: t.x, y: t.y + 1.1, z: t.z, r: 0.75, ry: 1.0 });
    }
  }
  onWeak(z, player) {
    if (this.takeHit(player, new THREE.Vector3(this.tailPos.x, this.top + 1.5, this.tailPos.z))) {
      this.game.particles.burst(new THREE.Vector3(this.tailPos.x, this.top + 1.9, this.tailPos.z), { count: 20, color: [0xffd23f, 0xffffff], speed: 7, size: 0.8, tex: 'sparkle', additive: true });
    }
  }
  onHit() { this.setState('hit'); }
  cleanup() { this.mound.visible = false; this.model.userData.segs.forEach((s) => { s.mesh.visible = false; }); }
  updateDying(dt) {
    this.headPos.y -= dt * 3; this.layout();
    this.pos.set(0, 0, 0);
    const k = Math.max(0.01, 1 - this.t / 2.5);
    this.model.userData.head.scale.setScalar(k); this.model.userData.tail.scale.setScalar(k);
    if (Math.random() < dt * 20) this.game.particles.burst(this.headPos.clone(), { count: 3, color: [0xd8b070, 0xffffff], speed: 6, size: 1.2 });
    if (this.t > 2.5 && this.model.visible) {
      this.model.visible = false; this.cleanup(); this.state = 'dead';
      this.game.hud.hideBoss(); this.game.bossDefeated(); this.level.goalAt(this.center.x, this.top, this.center.z);
    }
  }
  promoPose(ang) {
    this.state = 'promo';
    this.hist = [];
    for (let i = 40; i >= 0; i--) { const k = i / 40; this.headPos.set(this.center.x, this.top - 4 + (1 - k) * 11, this.center.z); this.layout(); }
    this.model.userData.head.rotation.y = ang;
  }
}

// ======================================================================
// 7 · Tiefenschlund – Riesenkrake schwebt hoch oben; nach den Tentakel-Schlägen tragen Blasenströme zu ihm hinauf
class SquidBoss extends BossBase {
  constructor(...a) {
    super(...a);
    this.model = M.createSquid(this.cfg); this.mesh.add(this.model);
    this.mats = this.model.userData.mats;
    this.h = 8.5; this.orbit = 0; this.shots = 0; this.next = 1;
    this.strikes = []; this.ups = [];
    this.pos.set(this.center.x, this.top + this.h, this.center.z);
  }
  hover(dt) {
    this.orbit += dt * 0.35 * this.speed;
    const tired = this.state === 'tired';
    const targetH = tired ? 6.5 : 8.5;
    this.h += (targetH - this.h) * Math.min(1, dt * 1.5);
    const rr = tired ? 0 : 2.5;
    this.pos.set(this.center.x + Math.cos(this.orbit) * rr, this.top + this.h + Math.sin(this.time * 1.4) * 0.3, this.center.z + Math.sin(this.orbit) * rr);
    this.model.userData.tentacles.forEach((t, i) => { t.rotation.x = Math.sin(this.time * 2 + i) * 0.25; t.rotation.z = Math.cos(this.time * 1.7 + i) * 0.25; });
  }
  idle(dt) { this.hover(dt || 0.016); }
  begin() { this.setState('ink'); this.shots = 0; this.next = 0.5; }
  tick(dt, player) {
    const ph = this.phase, sp = this.speed;
    this.hover(dt);
    this.mesh.rotation.y = lerpAngle(this.mesh.rotation.y, Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z), Math.min(1, dt * 3));
    switch (this.state) {
      case 'ink':
        this.next -= dt;
        if (this.next <= 0) {
          this.orb({ from: this.pos.clone().add(new THREE.Vector3(0, -1.5, 0)), target: player.pos.clone().add(new THREE.Vector3(player.vel.x, 0, player.vel.z).multiplyScalar(0.4)), time: 1.3, grav: -12, size: 0.55, blast: 1.3, color: 0x3a2a6a });
          this.shots++;
          this.next = Math.max(0.5, 1.1 - 0.1 * ph) / sp;
          if (this.shots >= 2 + ph) { this.setState('slam'); this.strikesLeft = 2 + Math.min(ph, 3); this.next = 0.2; this.first = true; }
        }
        break;
      case 'slam':
        this.next -= dt;
        if (this.next <= 0 && this.strikesLeft > 0) {
          this.strikesLeft--;
          const base = Math.atan2(player.pos.x - this.center.x, player.pos.z - this.center.z);
          this.strike(this.first ? base : base + this.rnd(-0.7, 0.7));
          this.first = false;
          this.next = 0.55 / sp;
        }
        if (this.strikesLeft <= 0 && this.strikes.length === 0) this.tired(player);
        break;
      case 'tired':
        this.model.userData.body.rotation.z = Math.sin(this.time * 2) * 0.1;
        if (Math.random() < dt * 5) this.game.particles.burst(this.pos.clone().add(new THREE.Vector3(0, 2.6, 0)), { count: 1, color: 0xffe066, speed: 1, size: 0.6, tex: 'sparkle', additive: true, gravity: 0, life: 0.8 });
        if (this.t > Math.max(5.0, 7.0 - 0.4 * (ph - 1))) this.endTired();
        break;
      case 'hit': if (this.t > 0.8) this.endTired(); break;
    }
    // Tentakel-Schläge
    for (let i = this.strikes.length - 1; i >= 0; i--) {
      const s = this.strikes[i]; s.t += dt;
      if (s.t < s.warn) continue;
      const k = Math.min(1, (s.t - s.warn) / 0.15);
      s.mesh.visible = true;
      s.piv.rotation.x = (1 - k) * -Math.PI / 2;
      if (k >= 1 && !s.boomed) { s.boomed = true; this.game.audio.play('pound'); this.game.shake(0.35); }
      if (s.t > s.warn + 1.2) { this.level.group.remove(s.mesh); this.strikes.splice(i, 1); }
    }
  }
  strike(ang) {
    const warn = Math.max(0.6, 1.0 - 0.08 * this.phase) / this.speed;
    const r0 = 1.5, len = 12;
    const mid = new THREE.Vector3(this.center.x + Math.sin(ang) * (r0 + len / 2), this.top, this.center.z + Math.cos(ang) * (r0 + len / 2));
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(1.9, len), new THREE.MeshBasicMaterial({ color: 0xff4070, transparent: true, opacity: 0.4, depthWrite: false, side: THREE.DoubleSide }));
    plane.rotation.x = -Math.PI / 2; plane.rotation.z = -ang; plane.position.set(mid.x, this.top + 0.05, mid.z);
    this.level.add(plane);
    let pt = 0;
    this.addEffect((dt) => { pt += dt; plane.material.opacity = 0.25 + Math.abs(Math.sin(pt * 12)) * 0.35; if (pt > warn) { this.level.group.remove(plane); return true; } return false; });
    // Tentakel: liegt nach dem Schlag flach auf dem Boden
    const g = new THREE.Group(); g.position.set(this.center.x + Math.sin(ang) * r0, this.top + 0.7, this.center.z + Math.cos(ang) * r0); g.rotation.y = ang; this.level.add(g);
    const piv = new THREE.Group(); g.add(piv);
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.75, len, 10), this.mats[0]); t.rotation.x = Math.PI / 2; t.position.z = len / 2; t.castShadow = true; piv.add(t);
    g.visible = false;
    const a = { x: g.position.x, y: this.top + 0.7, z: g.position.z }, b = { x: g.position.x + Math.sin(ang) * len, y: this.top + 0.7, z: g.position.z + Math.cos(ang) * len };
    this.strikes.push({ mesh: g, piv, t: 0, warn, a, b });
  }
  tired(player) {
    this.setState('tired');
    this.game.audio.play('heart');
    const base = Math.atan2(player.pos.x - this.center.x, player.pos.z - this.center.z);
    for (const off of [-0.6, 0.6]) {
      const x = this.center.x + Math.sin(base + off) * 4.4, z = this.center.z + Math.cos(base + off) * 4.4;
      this.ups.push(this.level.addUpdraft(x, z, 1.6, this.top - 1, this.top + 12, 58));
    }
    this.game.hud.toast(this.game.t('hints.boss_coral_up'), 2.5);
  }
  endTired() {
    for (const u of this.ups) this.level.removeUpdraft(u);
    this.ups = [];
    this.model.userData.body.rotation.z = 0;
    this.setState('ink'); this.shots = 0; this.next = 0.8;
  }
  zones() {
    this.hz = []; this.wz = [];
    const x = this.pos.x, y = this.pos.y, z = this.pos.z;
    if (this.state === 'tired') this.wz.push({ mode: 'stomp', x, y, z, r: 2.2, ry: 2.4 });
    else if (this.state !== 'hit' && this.state !== 'wait') {
      this.hz.push({ x, y, z, r: 2.2, ry: 2.4 });
      this.hz.push({ a: { x, y: y - 2, z }, b: { x, y: y - 5, z }, r: 1.5 });
    }
    for (const s of this.strikes) if (s.t >= s.warn + 0.1) this.hz.push({ a: s.a, b: s.b, r: 0.65 });
  }
  onHit() { this.setState('hit'); }
  onDefeat() { for (const u of this.ups) this.level.removeUpdraft(u); this.ups = []; }
  cleanup() { for (const u of this.ups) this.level.removeUpdraft(u); this.ups = []; for (const s of this.strikes) this.level.group.remove(s.mesh); this.strikes = []; }
  promoPose(ang) { this.state = 'promo'; this.h = 6.5; this.mesh.rotation.y = ang; this.hover(0); }
}

// ======================================================================
// 8 · Graf Nebelmaul – Finale in drei Phasen: klassisch → Doppelgänger → Sturm
class FinalBoss extends BossBase {
  constructor(...a) {
    super(...a);
    this.model = M.createBoss(this.cfg); this.mesh.add(this.model);
    this.mats = [this.model.userData.mat];
    this.pos.y = this.top + 8;
    this.angle = 0; this.throws = 0; this.throwT = 0;
    this.sol = this.solid(2.0, 2.2);
    this.clones = [];
    this.shadows = [];
  }
  get stage() { return this.hp > this.maxHp - 2 ? 1 : this.hp > 2 ? 2 : 3; }
  idle() { this.pos.y = this.top + 8 + Math.sin(this.time) * 0.5; this.anim(0.016); }
  anim(dt) {
    const u = this.model.userData;
    u.puffs.rotation.y += dt * 0.6;
    u.gem.rotation.y += dt * 1.5;
    u.hands.forEach((h, i) => { h.position.y = 1.6 + Math.sin(this.time * 2 + i * 2) * 0.3; });
  }
  begin() { this.startHover(); }
  startHover() {
    this.setState('hover'); this.throws = 0; this.throwT = 0.8;
    if (this.stage === 2 && this.clones.length === 0) this.makeClones();
  }
  makeClones() {
    for (let i = 0; i < 2; i++) {
      const g = new THREE.Group(); this.level.add(g);
      const m = M.createBoss(this.cfg);
      const u = m.userData;
      u.gem.material = u.gem.material.clone(); u.gem.material.color.set(0x5a5a6a); u.gem.material.emissive.set(0x000000);
      u.gemGlow.visible = false;
      g.add(m); g.position.copy(this.pos);
      this.clones.push({ mesh: g, off: (i ? 1 : -1) * Math.PI * 2 / 3 });
    }
    this.game.audio.play('bossroar');
    this.game.particles.burst(this.pos.clone().add(new THREE.Vector3(0, 2, 0)), { count: 30, color: [0x8f78c0, 0xffffff], speed: 8, size: 1.4 });
    this.game.hud.toast(this.game.t('hints.boss_fog_clones'), 3.5);
  }
  shadow(x, z) {
    const s = new THREE.Mesh(new THREE.CircleGeometry(2.6, 32), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false }));
    s.rotation.x = -Math.PI / 2; s.position.set(x, this.top + 0.05, z); this.level.add(s); return s;
  }
  tick(dt, player) {
    const ph = this.phase, sp = this.speed, c = this.center, st = this.stage;
    this.anim(dt);
    this.mesh.rotation.y = lerpAngle(this.mesh.rotation.y, Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z), Math.min(1, dt * 3));
    switch (this.state) {
      case 'hover': {
        this.angle += dt * (0.4 + ph * 0.12) * sp;
        const R = 6.5;
        const tx = c.x + Math.cos(this.angle) * R, tz = c.z + Math.sin(this.angle) * R;
        this.pos.x += (tx - this.pos.x) * Math.min(1, dt * 2); this.pos.z += (tz - this.pos.z) * Math.min(1, dt * 2);
        this.pos.y += (this.top + 7.5 + Math.sin(this.time * 2) * 0.6 - this.pos.y) * Math.min(1, dt * 3);
        for (const cl of this.clones) {
          const a = this.angle + cl.off;
          cl.mesh.position.lerp(new THREE.Vector3(c.x + Math.cos(a) * R, this.pos.y, c.z + Math.sin(a) * R), Math.min(1, dt * 2));
          cl.mesh.rotation.y = this.mesh.rotation.y;
        }
        this.throwT -= dt;
        if (this.throwT <= 0) {
          const lead = new THREE.Vector3(player.vel.x, 0, player.vel.z).multiplyScalar(0.35);
          this.orb({ from: this.pos.clone().add(new THREE.Vector3(0, 2, 0)), target: player.pos.clone().add(lead), time: 1.25 });
          if (this.throws % 2 === 0) for (const cl of this.clones) this.orb({ from: cl.mesh.position.clone().add(new THREE.Vector3(0, 2, 0)), target: this.clampArena(player.pos.clone().add(new THREE.Vector3(this.rnd(-3, 3), 0, this.rnd(-3, 3)))), time: 1.35 });
          if (st === 3 && this.throws % 2 === 1) for (let i = 0; i < 4; i++) {
            const tp = this.clampArena(player.pos.clone().add(new THREE.Vector3(this.rnd(-6, 6), 0, this.rnd(-6, 6))));
            this.orb({ from: tp.clone().add(new THREE.Vector3(0, 15, 0)), target: tp, time: 1.2, grav: 0, size: 0.5, blast: 1.2 });
          }
          this.throws++;
          this.throwT = Math.max(0.55, 1.6 - 0.25 * ph) / sp;
          if (this.throws >= 2 + Math.min(ph, 4)) this.setState('warn');
        }
        break;
      }
      case 'warn': {
        const k = Math.min(1, dt * 4);
        const tgt = this.clampArena(player.pos.clone(), 3);
        this.pos.x += (tgt.x - this.pos.x) * k; this.pos.z += (tgt.z - this.pos.z) * k; this.pos.y += (this.top + 9 - this.pos.y) * k;
        if (!this.shadows.length) { this.shadows.push(this.shadow(this.pos.x, this.pos.z)); for (const cl of this.clones) this.shadows.push(this.shadow(cl.mesh.position.x, cl.mesh.position.z)); }
        this.shadows[0].position.set(this.pos.x, this.top + 0.05, this.pos.z);
        this.clones.forEach((cl, i) => {
          const side = new THREE.Vector3(-(tgt.z - c.z), 0, tgt.x - c.x).normalize().multiplyScalar(i ? 5 : -5);
          const ct = this.clampArena(tgt.clone().add(side), 3);
          cl.mesh.position.x += (ct.x - cl.mesh.position.x) * k; cl.mesh.position.z += (ct.z - cl.mesh.position.z) * k; cl.mesh.position.y += (this.top + 9 - cl.mesh.position.y) * k;
          this.shadows[i + 1].position.set(cl.mesh.position.x, this.top + 0.05, cl.mesh.position.z);
        });
        for (const s of this.shadows) s.material.opacity = 0.2 + Math.sin(this.t * 20) * 0.1 + this.t * 0.2;
        if (this.t > Math.max(0.65, 1.3 - 0.12 * ph)) { this.setState('slam'); this.vy = 0; }
        break;
      }
      case 'slam':
        this.vy -= 80 * dt;
        this.pos.y += this.vy * dt;
        for (const cl of this.clones) cl.mesh.position.y = this.pos.y;
        if (this.pos.y <= this.top) {
          this.pos.y = this.top;
          for (const s of this.shadows) this.level.group.remove(s);
          this.shadows = [];
          this.game.audio.play('pound'); this.game.shake(0.6);
          const life = Math.max(0.75, 1.3 - 0.12 * ph) / Math.sqrt(sp);
          this.wave(this.pos.x, this.pos.z, { life });
          if (st === 3) { let w = 0; const x = this.pos.x, z = this.pos.z; this.addEffect((d) => { w += d; if (w > 0.45) { if (this.active) this.wave(x, z, { life }); return true; } return false; }); }
          for (const cl of this.clones) {
            cl.mesh.position.y = this.top;
            this.wave(cl.mesh.position.x, cl.mesh.position.z, { life: life * 0.8, r1: 9, color: 0x8f78c0 });
            this.game.particles.burst(cl.mesh.position.clone().add(new THREE.Vector3(0, 2, 0)), { count: 26, color: [0x8f78c0, 0x6a4c99], speed: 8, size: 1.5 });
            this.level.group.remove(cl.mesh);
          }
          this.clones = [];
          this.placeSolid(this.sol, this.pos.x, this.pos.z, 2.2);
          this.setState('dazed');
          if (ph >= 2) this.minions('nebling', Math.min(3, ph - 1));
        }
        break;
      case 'dazed':
        this.mesh.rotation.z = Math.sin(this.t * 6) * 0.08;
        this.model.userData.gemGlow.material.opacity = 0.6 + Math.sin(this.t * 12) * 0.4;
        if (this.t > Math.max(2.0, 3.6 - this.phase * 0.3)) { this.sol.disabled = true; this.mesh.rotation.z = 0; this.setState('rise'); }
        break;
      case 'rise':
        this.pos.y += (this.top + 7.5 - this.pos.y) * Math.min(1, dt * 2.5);
        if (this.t > 1.2) this.startHover();
        break;
      case 'hit':
        this.pos.y += (this.top + 8 - this.pos.y) * Math.min(1, dt * 3);
        this.mesh.rotation.z = Math.sin(this.t * 20) * 0.15 * Math.max(0, 1 - this.t);
        if (this.t > 1.4) { this.mesh.rotation.z = 0; this.game.audio.play('bossroar'); this.startHover(); }
        break;
    }
  }
  zones() {
    this.hz = []; this.wz = [];
    const x = this.pos.x, z = this.pos.z, cy = this.pos.y + 2.2;
    if (this.state === 'dazed') { this.wz.push({ mode: 'stomp', x, y: cy, z, r: 2.3, ry: 2.12 }); return; }
    if (['hover', 'warn', 'slam', 'rise'].includes(this.state)) {
      this.hz.push({ x, y: cy, z, r: 2.3, ry: 2.12 });
      const v = new THREE.Vector3();
      for (const h of this.model.userData.hands) { h.getWorldPosition(v); this.hz.push({ x: v.x, y: v.y, z: v.z, r: 0.7 }); }
      for (const cl of this.clones) this.hz.push({ x: cl.mesh.position.x, y: cl.mesh.position.y + 2.2, z: cl.mesh.position.z, r: 2.3, ry: 2.12 });
    }
  }
  onHit() { this.setState('hit'); this.sol.disabled = true; }
  cleanup() { for (const cl of this.clones) this.level.group.remove(cl.mesh); this.clones = []; for (const s of this.shadows) this.level.group.remove(s); this.shadows = []; }
  promoPose(ang) { this.pos.set(this.center.x, this.top + 6.5, this.center.z); this.mesh.rotation.y = ang; this.state = 'promo'; }
}

// ======================================================================
const TYPES = { bulb: BulbBoss, beast: BeastBoss, ship: ShipBoss, golem: GolemBoss, frost: FrostBoss, worm: WormBoss, squid: SquidBoss, final: FinalBoss };

export function createBossFor(level, x, top, z, arenaR, cfg = {}) {
  const C = TYPES[cfg.type] || FinalBoss;
  return new C(level, x, top, z, arenaR, cfg);
}
