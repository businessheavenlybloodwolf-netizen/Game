// Graf Nebelmaul – Endgegner
import * as THREE from 'three';
import * as M from './models.js';
import { cylCollider, groundBelow } from './physics.js';

export class Boss {
  constructor(level, x, top, z, arenaR, cfg = {}) {
    this.level = level; this.game = level.game;
    this.cfg = cfg;
    this.name = level.game.t('worlds.' + level.spec.world + '.boss');
    this.speed = cfg.speed || 1;
    this.center = new THREE.Vector3(x, top, z);
    this.top = top; this.arenaR = arenaR;
    this.mesh = M.createBoss(cfg);
    this.mesh.position.set(x, top + 8, z);
    level.add(this.mesh);
    this.pos = this.mesh.position;
    this.hp = (cfg.hp || 3) + (level.spec.star ? 1 : 0); this.maxHp = this.hp;
    if (level.spec.star) this.speed *= 1.15;
    this.state = 'wait'; this.t = 0; this.throws = 0; this.throwT = 0;
    this.angle = 0;
    this.col = cylCollider(x, z, 2.1, top, top + 4.0, { disabled: true, onLand: (pl) => this.onStomp(pl) });
    level.colliders.push(this.col);
    this.wave = null;
    this.shadow = new THREE.Mesh(new THREE.CircleGeometry(2.6, 32), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2; this.shadow.visible = false;
    level.add(this.shadow);
    this.flash = 0;
  }

  get active() { return this.state !== 'wait' && this.state !== 'dead'; }

  get phase() { return this.maxHp - this.hp + 1; }

  setState(s) { this.state = s; this.t = 0; }

  start() {
    this.setState('intro');
    this.game.audio.play('bossroar');
    this.game.audio.playMusic(this.cfg.final ? 'finalboss' : 'boss');
    this.game.hud.showBoss(this.name, this.hp / this.maxHp);
    this.game.banner(this.name, this.game.t(this.cfg.final ? 'ui.fogRuler' : 'ui.fogLord'));
    if (!this.cfg.final) this.game.hud.toast(this.game.t('story.bossTaunt'), 3);
  }

  update(dt, player) {
    this.t += dt;
    const u = this.mesh.userData;
    const time = this.level.time;
    // Animation
    u.puffs.rotation.y += dt * 0.6;
    u.gem.rotation.y += dt * 1.5;
    u.hands.forEach((h, i) => { h.position.y = 1.6 + Math.sin(time * 2 + i * 2) * 0.3; });
    const be = u.mat.userData.baseEmissive ?? 0x2a1048;
    if (this.flash > 0) { this.flash -= dt; u.mat.emissive.set(Math.floor(this.flash * 20) % 2 ? 0xff4060 : be); }
    else u.mat.emissive.set(be);
    // Pupillen folgen dem Spieler
    const toP = new THREE.Vector3(player.pos.x - this.pos.x, 0, player.pos.z - this.pos.z);
    if (this.state !== 'dead' && this.state !== 'promo') this.mesh.rotation.y += (Math.atan2(toP.x, toP.z) - this.mesh.rotation.y) * Math.min(1, dt * 3);

    const c = this.center;
    switch (this.state) {
      case 'wait': {
        this.pos.y = this.top + 8 + Math.sin(time) * 0.5;
        const d = Math.hypot(player.pos.x - c.x, player.pos.z - c.z);
        if (d < this.arenaR - 2 && Math.abs(player.pos.y - this.top) < 2 && player.alive) this.start();
        break;
      }
      case 'intro':
        this.pos.y = this.top + 8 + Math.sin(this.t * 10) * 0.2;
        this.mesh.scale.setScalar(1 + Math.sin(this.t * 12) * 0.03);
        if (this.t > 2.2) { this.mesh.scale.setScalar(1); this.setState('hover'); this.throws = 0; this.throwT = 0.8; }
        break;
      case 'hover': {
        this.angle += dt * (0.4 + this.phase * 0.12) * this.speed;
        const R = 6.5;
        const tx = c.x + Math.cos(this.angle) * R, tz = c.z + Math.sin(this.angle) * R;
        this.pos.x += (tx - this.pos.x) * Math.min(1, dt * 2);
        this.pos.z += (tz - this.pos.z) * Math.min(1, dt * 2);
        this.pos.y += (this.top + 7.5 + Math.sin(time * 2) * 0.6 - this.pos.y) * Math.min(1, dt * 3);
        this.throwT -= dt;
        if (this.throwT <= 0) {
          this.throwOrb(player);
          this.throws++;
          this.throwT = Math.max(0.55, 1.6 - 0.25 * this.phase) / this.speed;
          if (this.throws >= 2 + Math.min(this.phase, 4)) this.setState('warn');
        }
        break;
      }
      case 'warn': {
        const tx = THREE.MathUtils.clamp(player.pos.x, c.x - this.arenaR + 3, c.x + this.arenaR - 3);
        const tz = THREE.MathUtils.clamp(player.pos.z, c.z - this.arenaR + 3, c.z + this.arenaR - 3);
        const k = Math.min(1, dt * 4);
        this.pos.x += (tx - this.pos.x) * k; this.pos.z += (tz - this.pos.z) * k;
        this.pos.y += (this.top + 9 - this.pos.y) * k;
        this.shadow.visible = true;
        this.shadow.position.set(this.pos.x, this.top + 0.05, this.pos.z);
        this.shadow.material.opacity = 0.2 + Math.sin(this.t * 20) * 0.1 + this.t * 0.2;
        if (this.t > Math.max(0.65, 1.3 - this.phase * 0.12)) { this.setState('slam'); this.vy = 0; }
        break;
      }
      case 'slam':
        this.vy -= 80 * dt;
        this.pos.y += this.vy * dt;
        this.shadow.position.set(this.pos.x, this.top + 0.05, this.pos.z);
        if (this.pos.y <= this.top) {
          this.pos.y = this.top;
          this.shadow.visible = false;
          this.game.audio.play('pound');
          this.game.shake(0.6);
          this.game.particles.burst(new THREE.Vector3(this.pos.x, this.top + 0.3, this.pos.z), { count: 24, color: [0x8f78c0, 0x6a4c99], speed: 10, size: 1.4, flat: true, life: 0.8 });
          // Schockwelle
          const life = Math.max(0.75, 1.3 - this.phase * 0.12) / Math.sqrt(this.speed);
          this.wave = { x: this.pos.x, z: this.pos.z, t: 0, life, r1: this.arenaR + 2, hit: false };
          this.game.particles.ring(new THREE.Vector3(this.pos.x, this.top, this.pos.z), { color: 0xc59bff, life, r0: 2.5, r1: this.arenaR + 2 });
          this.col.x = this.pos.x; this.col.z = this.pos.z; this.col.disabled = false;
          this.setState('dazed');
          if (this.phase >= 2) this.spawnMinions();
        }
        break;
      case 'dazed':
        this.mesh.rotation.z = Math.sin(this.t * 6) * 0.08;
        u.gemGlow.material.opacity = 0.6 + Math.sin(this.t * 12) * 0.4;
        if (this.t > Math.max(2.0, 3.6 - this.phase * 0.3)) { this.col.disabled = true; this.mesh.rotation.z = 0; this.setState('rise'); }
        break;
      case 'rise':
        this.pos.y += (this.top + 7.5 - this.pos.y) * Math.min(1, dt * 2.5);
        if (this.t > 1.2) { this.setState('hover'); this.throws = 0; this.throwT = 1; }
        break;
      case 'hurt':
        this.pos.y += (this.top + 8 - this.pos.y) * Math.min(1, dt * 3);
        this.mesh.rotation.z = Math.sin(this.t * 20) * 0.15 * (1 - this.t);
        if (this.t > 1.4) {
          this.mesh.rotation.z = 0;
          if (this.hp <= 0) { this.setState('dead'); this.game.audio.play('bossroar'); }
          else { this.setState('hover'); this.throws = 0; this.throwT = 0.6; this.game.audio.play('bossroar'); }
        }
        break;
      case 'dead': {
        const k = Math.max(0, 1 - this.t / 2.5);
        this.mesh.scale.setScalar(Math.max(0.01, k));
        this.mesh.rotation.y += dt * (4 + this.t * 6);
        if (Math.random() < dt * 20) this.game.particles.burst(this.pos.clone().add(new THREE.Vector3(0, 2 * k, 0)), { count: 3, color: [0x8f78c0, 0xffffff, 0x9ff4ff], speed: 6, size: 1.2, additive: true, tex: 'glow' });
        if (this.t > 2.5 && this.mesh.visible) {
          this.mesh.visible = false;
          this.game.hud.hideBoss();
          this.game.bossDefeated();
          this.level.goalAt(this.center.x, this.top, this.center.z);
        }
        break;
      }
    }
    // Schockwelle prüfen
    if (this.wave) {
      const w = this.wave;
      w.t += dt;
      const r = 2.5 + (w.r1 - 2.5) * (w.t / w.life);
      const d = Math.hypot(player.pos.x - w.x, player.pos.z - w.z);
      if (!w.hit && Math.abs(d - r) < 0.7 && player.pos.y < this.top + 0.6) { w.hit = true; player.hurt(new THREE.Vector3(w.x, this.top, w.z)); }
      if (w.t >= w.life) this.wave = null;
    }
  }

  spawnMinions() {
    const alive = this.level.enemies.filter((e) => e.alive).length;
    const n = Math.min(Math.min(3, this.phase - 1), 4 - alive);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const e = this.level.enemy(this.cfg.minion || 'nebling', this.center.x + Math.cos(a) * 9, this.top, this.center.z + Math.sin(a) * 9, { range: 4 });
      this.game.particles.burst(e.pos.clone().add(new THREE.Vector3(0, 0.5, 0)), { count: 12, color: 0x6a4c99, speed: 4, size: 1 });
    }
  }

  throwOrb(player) {
    const L = this.level, g = this.game;
    g.audio.play('orb');
    const start = this.pos.clone().add(new THREE.Vector3(0, 2, 0));
    const lead = new THREE.Vector3(player.vel.x, 0, player.vel.z).multiplyScalar(0.35);
    const target = new THREE.Vector3(player.pos.x + lead.x, this.top, player.pos.z + lead.z);
    const gy = groundBelow(L.colliders, target.x, target.y + 5, target.z);
    target.y = gy > -1e9 ? gy : this.top;
    const T = 1.25, grav = -18;
    const vel = new THREE.Vector3((target.x - start.x) / T, (target.y - start.y) / T - 0.5 * grav * T, (target.z - start.z) / T);
    const oc = this.cfg.orb ?? 0x8a3cff;
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.55, 14, 10), M.toon(0x3a2358, { emissive: oc, ei: 0.5 }));
    mesh.add(M.glowSprite(oc, 2.2, 0.7));
    mesh.position.copy(start); L.add(mesh);
    const marker = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.3, 28), new THREE.MeshBasicMaterial({ color: 0xff4070, transparent: true, opacity: 0.7, depthWrite: false }));
    marker.rotation.x = -Math.PI / 2; marker.position.set(target.x, target.y + 0.06, target.z); L.add(marker);
    const pr = {
      t: 0,
      update: (dt) => {
        pr.t += dt;
        vel.y += grav * dt;
        mesh.position.addScaledVector(vel, dt);
        marker.material.opacity = 0.4 + Math.sin(pr.t * 20) * 0.3;
        if (mesh.position.y <= target.y + 0.3 || pr.t > 3) {
          L.group.remove(mesh); L.group.remove(marker);
          g.audio.play('boom');
          g.particles.burst(mesh.position, { count: 16, color: [0x8a3cff, 0x3a2358, 0xffffff], speed: 6, size: 1.1 });
          const p = g.player.pos;
          if (Math.hypot(p.x - mesh.position.x, p.z - mesh.position.z) < 1.6 && Math.abs(p.y - mesh.position.y) < 1.8) g.player.hurt(mesh.position);
          return true;
        }
        return false;
      },
      check: (player) => {
        const p = player.pos;
        if (mesh.parent && mesh.position.distanceTo(new THREE.Vector3(p.x, p.y + 0.6, p.z)) < 1.0) player.hurt(mesh.position);
      },
    };
    L.projectiles.push(pr);
  }

  onStomp(player) {
    if (this.state !== 'dazed') return;
    this.hp--;
    this.flash = 1.0;
    this.col.disabled = true;
    this.game.audio.play('bosshit');
    this.game.shake(0.5);
    this.game.particles.burst(new THREE.Vector3(this.pos.x, this.top + 4.3, this.pos.z), { count: 20, color: [0x9ff4ff, 0xffffff, 0xffe066], speed: 8, size: 0.8, tex: 'sparkle', additive: true });
    this.game.hud.showBoss(this.name, this.hp / this.maxHp);
    // Spieler wegschleudern
    const dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, l = Math.hypot(dx, dz) || 1;
    player.vel.set(dx / l * 9, 17, dz / l * 9);
    player.grounded = false; player.ground = null; player.jumpsLeft = 1;
    player.controlLock = 0.5;
    this.setState('hurt');
    const lines = this.game.t('story.bossHit');
    this.game.hud.toast(this.hp <= 0 ? lines[lines.length - 1] : lines[(this.maxHp - this.hp - 1) % (lines.length - 1)]);
  }

  interact(player) {
    if (!player.alive) return;
    const p = player.pos;
    const bodyY = this.pos.y + 2.2;
    const d = Math.hypot(p.x - this.pos.x, p.z - this.pos.z);
    if (this.state === 'hover' || this.state === 'rise' || this.state === 'slam' || this.state === 'intro' || this.state === 'warn') {
      const dy = (p.y + 0.6) - bodyY;
      if (Math.hypot(d, dy) < 2.6) player.hurt(this.pos);
    }
  }

  shockwave() {}
}
