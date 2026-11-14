// Einfaches Partikelsystem mit Sprite-Pool + Schockwellen-Ringe
import * as THREE from 'three';

export class Particles {
  constructor(scene, T) {
    this.scene = scene;
    this.pool = [];
    this.active = [];
    this.rings = [];
    this.T = T;
    for (let i = 0; i < 260; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.puff, transparent: true, depthWrite: false }));
      s.visible = false;
      scene.add(s);
      this.pool.push(s);
    }
    this.ringGeo = new THREE.TorusGeometry(1, 0.08, 6, 40);
  }

  burst(pos, o = {}) {
    const count = o.count ?? 10;
    for (let i = 0; i < count; i++) {
      const s = this.pool.pop();
      if (!s) return;
      s.visible = true;
      s.material.map = o.tex === 'sparkle' ? this.T.sparkle : o.tex === 'glow' ? this.T.glow : this.T.puff;
      s.material.color.set(Array.isArray(o.color) ? o.color[i % o.color.length] : (o.color ?? 0xffffff));
      s.material.blending = o.additive ? THREE.AdditiveBlending : THREE.NormalBlending;
      s.material.opacity = o.opacity ?? 1;
      s.material.needsUpdate = true;
      s.position.copy(pos);
      if (o.spread) s.position.add(new THREE.Vector3((Math.random() - 0.5) * o.spread, (Math.random() - 0.5) * o.spread * 0.5, (Math.random() - 0.5) * o.spread));
      const sp = o.speed ?? 3;
      const a = Math.random() * Math.PI * 2;
      const up = o.up ?? 0.5;
      const v = new THREE.Vector3(Math.cos(a), up + Math.random() * (o.upRand ?? 1), Math.sin(a)).normalize().multiplyScalar(sp * (0.5 + Math.random() * 0.7));
      if (o.flat) v.y *= 0.2;
      const size = (o.size ?? 0.5) * (0.6 + Math.random() * 0.8);
      s.scale.setScalar(size);
      this.active.push({ s, v, life: (o.life ?? 0.6) * (0.7 + Math.random() * 0.6), t: 0, size, g: o.gravity ?? -4, grow: o.grow ?? 1, op: o.opacity ?? 1, drag: o.drag ?? 1.5 });
    }
  }

  ring(pos, o = {}) {
    const m = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ color: o.color ?? 0xffffff, transparent: true, opacity: 0.8, depthWrite: false }));
    m.position.copy(pos); m.position.y += 0.1;
    m.rotation.x = Math.PI / 2;
    this.scene.add(m);
    this.rings.push({ m, t: 0, life: o.life ?? 0.4, r0: o.r0 ?? 0.3, r1: o.r1 ?? 3 });
  }

  update(dt) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const p = this.active[i];
      p.t += dt;
      if (p.t >= p.life) {
        p.s.visible = false; this.pool.push(p.s); this.active.splice(i, 1); continue;
      }
      p.v.y += p.g * dt;
      p.v.multiplyScalar(Math.max(0, 1 - p.drag * dt));
      p.s.position.addScaledVector(p.v, dt);
      const k = p.t / p.life;
      p.s.material.opacity = p.op * (1 - k);
      p.s.scale.setScalar(p.size * (1 + (p.grow - 1) * k));
    }
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.t += dt;
      const k = r.t / r.life;
      if (k >= 1) { this.scene.remove(r.m); r.m.material.dispose(); this.rings.splice(i, 1); continue; }
      const s = r.r0 + (r.r1 - r.r0) * k;
      r.m.scale.set(s, s, 1 + k);
      r.m.material.opacity = 0.8 * (1 - k);
    }
  }

  clear() {
    for (const p of this.active) { p.s.visible = false; this.pool.push(p.s); }
    this.active = [];
    for (const r of this.rings) this.scene.remove(r.m);
    this.rings = [];
  }
}
