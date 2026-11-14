// Lumi – Steuerung, Physik und Animation
import * as THREE from 'three';
import { createLumi } from './models.js';
import { overlapXZ, pushOutXZ, groundBelow } from './physics.js';

const R = 0.4, H = 1.25;
const RUN = 8.6, ACC_G = 60, ACC_A = 26, GRAV = -38, JUMP = 14, JUMP2 = 12.5, MAXFALL = -32, POUND = -34;

export class Player {
  constructor(game) {
    this.game = game;
    this.mesh = createLumi();
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.facing = 0;
    this.shadow = new THREE.Mesh(new THREE.CircleGeometry(0.45, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2;
    this.reset(0, 0, 0, 0);
  }

  reset(x, y, z, yaw) {
    this.pos.set(x, y, z);
    this.vel.set(0, 0, 0);
    this.facing = yaw;
    this.grounded = false; this.ground = null;
    this.coyote = 0; this.jumpBuffer = 0; this.jumpsLeft = 1;
    this.pounding = false; this.poundWind = 0; this.poundLand = 0;
    this.spinTime = 0; this.spinCd = 0; this.airSpinUsed = false;
    this.invuln = 0; this.controlLock = 0;
    this.squash = 0; this.flip = 0; this.walkT = 0;
    this.alive = true;
    this.fromBounce = false;
    this.mesh.visible = true;
    this.mesh.position.copy(this.pos);
  }

  attach(group) { group.add(this.mesh); group.add(this.shadow); }

  hurt(from) {
    if (this.invuln > 0 || !this.alive) return;
    this.invuln = 1.6;
    const dx = this.pos.x - from.x, dz = this.pos.z - from.z, l = Math.hypot(dx, dz) || 1;
    this.vel.set(dx / l * 8, 9, dz / l * 8);
    this.grounded = false; this.ground = null;
    this.controlLock = 0.35;
    this.pounding = false; this.poundWind = 0;
    this.game.onPlayerHurt();
  }

  stompBounce() {
    this.vel.y = this.game.input.jumpHeld() ? 15 : 11;
    this.jumpsLeft = 1; this.airSpinUsed = false;
    this.pounding = false; this.poundWind = 0;
    this.fromBounce = true;
    this.squash = -0.3;
  }

  bounce(strength) {
    this.vel.y = strength;
    this.jumpsLeft = 1; this.airSpinUsed = false;
    this.pounding = false; this.poundWind = 0;
    this.grounded = false; this.ground = null;
    this.fromBounce = true;
    this.squash = -0.45;
    this.game.audio.play('bounce');
  }

  step(dt, input, level, camYaw) {
    const cols = level.colliders;
    if (this.invuln > 0) this.invuln -= dt;
    if (this.controlLock > 0) this.controlLock -= dt;
    if (this.spinTime > 0) this.spinTime -= dt;
    if (this.spinCd > 0) this.spinCd -= dt;
    if (this.poundLand > 0) this.poundLand -= dt;
    if (this.coyote > 0) this.coyote -= dt;
    if (this.jumpBuffer > 0) this.jumpBuffer -= dt;

    // Mitfahren auf bewegten Plattformen
    if (this.grounded && this.ground && !this.ground.disabled) {
      this.pos.x += this.ground.dx; this.pos.y += this.ground.dy; this.pos.z += this.ground.dz;
    }

    // Eingabe relativ zur Kamera
    const mv = input.move;
    const sin = Math.sin(camYaw), cos = Math.cos(camYaw);
    // Kamera schaut bei yaw=0 Richtung -Z
    const wx = mv.x * cos + mv.y * sin, wz = -mv.x * sin + mv.y * cos;
    const wl = Math.hypot(wx, wz);
    const locked = this.controlLock > 0 || this.poundWind > 0 || this.pounding || this.poundLand > 0 || !this.alive;
    let targetX = 0, targetZ = 0;
    if (!locked && wl > 0.05) { targetX = wx * RUN; targetZ = wz * RUN; }
    const acc = (this.grounded ? ACC_G : ACC_A) * dt;
    if (!(this.controlLock > 0 && !this.grounded)) {
      const ax = targetX - this.vel.x, az = targetZ - this.vel.z, al = Math.hypot(ax, az);
      if (al > acc) { this.vel.x += ax / al * acc; this.vel.z += az / al * acc; } else { this.vel.x = targetX; this.vel.z = targetZ; }
    }
    if (this.pounding || this.poundWind > 0) { this.vel.x = 0; this.vel.z = 0; }
    if (!locked && wl > 0.05) {
      const target = Math.atan2(wx, wz);
      let d = target - this.facing;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      this.facing += d * Math.min(1, dt * 14);
    }

    // Springen
    if (input.jumpPressed && this.alive) this.jumpBuffer = 0.13;
    if (this.jumpBuffer > 0 && !locked) {
      if (this.grounded || this.coyote > 0) {
        this.vel.y = JUMP; this.grounded = false; this.ground = null; this.coyote = 0; this.jumpBuffer = 0;
        this.jumpsLeft = 1; this.fromBounce = false; this.squash = -0.3;
        this.game.audio.play('jump');
        this.game.particles.burst(this.pos, { count: 5, color: 0xffffff, speed: 2, size: 0.5, flat: true, life: 0.4 });
      } else if (this.jumpsLeft > 0 && input.jumpPressed) {
        this.vel.y = JUMP2; this.jumpsLeft--; this.jumpBuffer = 0; this.flip = 1; this.fromBounce = false;
        this.game.audio.play('jump2');
        this.game.particles.burst(this.pos, { count: 8, color: 0xffd58a, speed: 3, size: 0.4, tex: 'sparkle', additive: true, life: 0.5 });
      }
    }
    // Drehattacke
    if (input.spinPressed && this.spinCd <= 0 && this.alive && !this.pounding && this.poundWind <= 0) {
      this.spinTime = 0.42; this.spinCd = 0.55;
      if (!this.grounded && !this.airSpinUsed) { this.vel.y = Math.max(this.vel.y, 5.5); this.airSpinUsed = true; }
      this.game.audio.play('spin');
      this.game.particles.burst(new THREE.Vector3(this.pos.x, this.pos.y + 0.6, this.pos.z), { count: 10, color: 0x9ff0e8, speed: 6, size: 0.4, flat: true, life: 0.35, tex: 'sparkle', additive: true });
      level.spinHit(this);
    }
    // Stampfen
    if (input.poundPressed && !this.grounded && !this.pounding && this.poundWind <= 0 && this.alive) {
      this.poundWind = 0.2; this.vel.set(0, 0, 0); this.flip = 0;
      this.game.audio.play('spin');
    }
    if (this.poundWind > 0) {
      this.poundWind -= dt; this.vel.y = 1.5;
      if (this.poundWind <= 0) { this.pounding = true; this.vel.y = POUND; }
    }

    // Schwerkraft
    if (!this.pounding && this.poundWind <= 0) {
      let g = GRAV;
      if (this.vel.y > 0 && !input.jumpHeld && !this.fromBounce) g *= 2.3;
      if (this.spinTime > 0 && this.vel.y < 0) g *= 0.35;
      this.vel.y += g * dt;
      const up = level.updraftAt(this.pos);
      if (up) {
        this.vel.y += up.strength * dt;
        if (this.vel.y > 10) this.vel.y = 10;
        this.jumpsLeft = 1; this.airSpinUsed = false; this.fromBounce = true;
      }
      if (this.vel.y < MAXFALL) this.vel.y = MAXFALL;
    }

    // ---- Vertikale Bewegung ----
    const wasGrounded = this.grounded;
    const prevY = this.pos.y;
    this.pos.y += this.vel.y * dt;
    this.grounded = false;
    let landed = null;
    for (const c of cols) {
      if (c.disabled) continue;
      if (!overlapXZ(c, this.pos.x, this.pos.z, R * 0.75)) continue;
      if (this.pos.y < c.maxY && this.pos.y + H > c.minY) {
        const prevTop = Math.min(c.maxY, c.maxY - c.dy);
        if (this.vel.y <= 0.01 + Math.max(0, c.dy / dt) && prevY >= prevTop - 0.08) {
          this.pos.y = c.maxY;
          if (!landed || c.maxY >= landed.maxY) landed = c;
        } else if (this.vel.y > 0 && prevY + H <= c.minY + 0.15) {
          this.pos.y = c.minY - H; this.vel.y = 0;
        }
      }
    }
    if (landed) {
      const impact = this.vel.y;
      this.grounded = true; this.ground = landed;
      if (landed.bounce) {
        this.bounce(landed.bounce);
        const b = level.bouncers.find((o) => o.col === landed); if (b) b.t = 0.4;
      } else {
        this.vel.y = 0;
        if (landed.onLand) landed.onLand(this);
        if (this.pounding) {
          this.pounding = false; this.poundLand = 0.22;
          this.game.audio.play('pound');
          this.game.shake(0.35);
          this.game.particles.ring(this.pos, { color: 0xfff1d6, r1: 3 });
          this.game.particles.burst(this.pos, { count: 14, color: 0xffffff, speed: 6, size: 0.7, flat: true, life: 0.5 });
          level.shockwave(this.pos, 2.8);
          if (landed.crate) level.breakCrate(landed.crateRef);
        } else if (!wasGrounded && impact < -6) {
          this.squash = Math.min(0.4, -impact / 50);
          this.game.audio.play('land');
          this.game.particles.burst(this.pos, { count: 4, color: 0xffffff, speed: 1.5, size: 0.4, flat: true, life: 0.3 });
        }
        if (this.grounded) { this.jumpsLeft = 1; this.airSpinUsed = false; this.fromBounce = false; this.flip = 0; }
      }
    } else {
      if (wasGrounded && this.vel.y <= 0) this.coyote = 0.1;
      this.ground = null;
    }

    // ---- Horizontale Bewegung ----
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    for (const c of cols) {
      if (c.disabled) continue;
      if (this.pos.y >= c.maxY - 0.001 || this.pos.y + H <= c.minY) continue;
      if (!overlapXZ(c, this.pos.x, this.pos.z, R)) continue;
      if (this.grounded && c.maxY - this.pos.y <= 0.42 && !c.bounce) { this.pos.y = c.maxY; this.ground = c; continue; }
      const n = pushOutXZ(c, this.pos, R);
      if (n) {
        const vn = this.vel.x * n.x + this.vel.z * n.z;
        if (vn < 0) { this.vel.x -= vn * n.x; this.vel.z -= vn * n.z; }
      }
    }

    if (this.pos.y < level.killY && this.alive) this.game.onPlayerFell();
  }

  updateVisual(dt, level) {
    const m = this.mesh, u = m.userData;
    m.position.copy(this.pos);
    m.rotation.y = this.facing;
    const speed = Math.hypot(this.vel.x, this.vel.z);
    // Blinken bei Unverwundbarkeit
    m.visible = this.alive && !(this.invuln > 0 && Math.floor(this.invuln * 14) % 2 === 0);
    // Squash & Stretch
    this.squash += (0 - this.squash) * Math.min(1, dt * 10);
    let sy = 1 - this.squash, sxz = 1 + this.squash * 0.5;
    if (!this.grounded && this.vel.y > 2) { sy *= 1.08; sxz *= 0.95; }
    u.body.scale.set(sxz, sy, sxz);
    // Laufanimation
    if (this.grounded && speed > 0.5) {
      this.walkT += dt * speed * 1.6;
      u.feet[0].position.z = 0.04 + Math.sin(this.walkT) * 0.22;
      u.feet[1].position.z = 0.04 - Math.sin(this.walkT) * 0.22;
      u.feet[0].position.y = 0.08 + Math.max(0, Math.cos(this.walkT)) * 0.1;
      u.feet[1].position.y = 0.08 + Math.max(0, -Math.cos(this.walkT)) * 0.1;
      u.body.position.y = Math.abs(Math.sin(this.walkT)) * 0.08;
      u.body.rotation.x = 0.12;
    } else {
      u.feet[0].position.z += (0.04 - u.feet[0].position.z) * 0.2;
      u.feet[1].position.z += (0.04 - u.feet[1].position.z) * 0.2;
      u.feet[0].position.y = u.feet[1].position.y = this.grounded ? 0.08 : 0.0;
      u.body.position.y = this.grounded ? Math.sin(level.time * 3) * 0.02 : 0;
      u.body.rotation.x = this.grounded ? 0 : -0.1;
    }
    u.hands[0].position.y = u.hands[1].position.y = 0.55 + (this.grounded ? Math.sin(this.walkT) * 0.04 : 0.2);
    // Salto beim Doppelsprung / Stampfen
    if (this.flip > 0) {
      this.flip -= dt * 2.6;
      u.body.rotation.x = (1 - Math.max(0, this.flip)) * Math.PI * 2;
    }
    if (this.poundWind > 0) u.body.rotation.x = (1 - this.poundWind / 0.2) * Math.PI * 2;
    if (this.pounding) { u.body.rotation.x = 0; u.body.scale.set(0.9, 1.15, 0.9); }
    // Drehattacke
    u.body.rotation.y = this.spinTime > 0 ? (1 - this.spinTime / 0.42) * Math.PI * 4 : 0;
    // Flamme & Schal
    const fl = 1 + Math.sin(level.time * 23) * 0.08 + Math.sin(level.time * 37) * 0.05;
    u.flame.scale.set(1 / fl, fl * (1 + Math.min(0.5, speed * 0.03)), 1 / fl);
    u.flame.rotation.x = -Math.min(0.5, speed * 0.05);
    u.tail.rotation.x = Math.sin(level.time * 10) * 0.2 + (this.grounded ? 0 : -0.4) - speed * 0.03;
    u.tail.rotation.y = Math.sin(level.time * 7) * 0.2;
    u.light.intensity = 5 + Math.sin(level.time * 20) * 0.8;
    // Schatten-Marker
    const gy = groundBelow(level.colliders, this.pos.x, this.pos.y + 0.05, this.pos.z, 0.05);
    if (gy > -1e8 && this.alive) {
      this.shadow.visible = true;
      this.shadow.position.set(this.pos.x, gy + 0.03, this.pos.z);
      const h = this.pos.y - gy;
      this.shadow.scale.setScalar(Math.max(0.4, 1 - h * 0.05));
      this.shadow.material.opacity = Math.max(0.12, 0.4 - h * 0.02);
    } else this.shadow.visible = false;
  }
}
