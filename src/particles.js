// Partikelsystem: alle Partikel gebündelt als THREE.Points (ein Draw Call je Textur/Blend-Art statt einer pro Partikel)
// + Schockwellen-Ringe
import * as THREE from 'three';

const VS = `
attribute float size; attribute float alpha; attribute vec3 color;
uniform float uScale;
varying float vA; varying vec3 vC;
void main() {
  vA = alpha; vC = color;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const FS = `
uniform sampler2D map;
varying float vA; varying vec3 vC;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  gl_FragColor = vec4(vC * t.rgb, t.a * vA);
  if (gl_FragColor.a < 0.01) discard;
  #include <colorspace_fragment>
}`;

class Batch {
  constructor(scene, tex, additive, cap) {
    this.cap = cap;
    this.items = [];
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(cap * 3); this.col = new Float32Array(cap * 3);
    this.alpha = new Float32Array(cap); this.size = new Float32Array(cap);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0, 0);
    this.geo = g;
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VS, fragmentShader: FS, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { map: { value: tex }, uScale: { value: 500 } },
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  write() {
    const n = this.items.length;
    for (let i = 0; i < n; i++) {
      const p = this.items[i];
      this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
      this.col[i * 3] = p.r; this.col[i * 3 + 1] = p.g; this.col[i * 3 + 2] = p.b;
      this.alpha[i] = p.a; this.size[i] = p.s;
    }
    const at = this.geo.attributes;
    at.position.needsUpdate = at.color.needsUpdate = at.alpha.needsUpdate = at.size.needsUpdate = true;
    this.geo.setDrawRange(0, n);
    this.points.visible = n > 0;
  }
}

const tmpColor = new THREE.Color();

export class Particles {
  constructor(scene, T) {
    this.scene = scene;
    this.T = T;
    this.batches = {};
    for (const [key, tex] of [['puff', T.puff], ['sparkle', T.sparkle], ['glow', T.glow]]) {
      this.batches[key + '0'] = new Batch(scene, tex, false, 400);
      this.batches[key + '1'] = new Batch(scene, tex, true, 300);
    }
    this.rings = [];
    this.ringGeo = new THREE.TorusGeometry(1, 0.08, 6, 40);
    this.rate = 1; // Handy: weniger Umgebungspartikel
  }

  // Bildschirm-Maßstab für die Punktgröße (Weltgröße → Pixel)
  setView(camera, renderer) {
    const h = renderer.domElement.height;
    const s = h / (2 * Math.tan((camera.fov * Math.PI) / 360));
    for (const b of Object.values(this.batches)) b.mat.uniforms.uScale.value = s;
  }

  burst(pos, o = {}) {
    const key = (o.tex === 'sparkle' ? 'sparkle' : o.tex === 'glow' ? 'glow' : 'puff') + (o.additive ? '1' : '0');
    const b = this.batches[key];
    const count = o.count ?? 10;
    const sp = o.speed ?? 3, up = o.up ?? 0.5, upRand = o.upRand ?? 1;
    for (let i = 0; i < count; i++) {
      if (b.items.length >= b.cap) return;
      tmpColor.set(Array.isArray(o.color) ? o.color[i % o.color.length] : (o.color ?? 0xffffff));
      let x = pos.x, y = pos.y, z = pos.z;
      if (o.spread) { x += (Math.random() - 0.5) * o.spread; y += (Math.random() - 0.5) * o.spread * 0.5; z += (Math.random() - 0.5) * o.spread; }
      const a = Math.random() * Math.PI * 2;
      let vx = Math.cos(a), vy = up + Math.random() * upRand, vz = Math.sin(a);
      const l = Math.hypot(vx, vy, vz) || 1, k = sp * (0.5 + Math.random() * 0.7) / l;
      vx *= k; vy *= k; vz *= k;
      if (o.flat) vy *= 0.2;
      const size = (o.size ?? 0.5) * (0.6 + Math.random() * 0.8);
      b.items.push({ x, y, z, vx, vy, vz, r: tmpColor.r, g: tmpColor.g, b: tmpColor.b, a: o.opacity ?? 1, s: size,
        size, life: (o.life ?? 0.6) * (0.7 + Math.random() * 0.6), t: 0, grav: o.gravity ?? -4, grow: o.grow ?? 1, op: o.opacity ?? 1, drag: o.drag ?? 1.5 });
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
    for (const b of Object.values(this.batches)) {
      const it = b.items;
      let w = 0;
      for (let i = 0; i < it.length; i++) {
        const p = it[i];
        p.t += dt;
        if (p.t >= p.life) continue;
        p.vy += p.grav * dt;
        const d = Math.max(0, 1 - p.drag * dt);
        p.vx *= d; p.vy *= d; p.vz *= d;
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        const k = p.t / p.life;
        p.a = p.op * (1 - k);
        p.s = p.size * (1 + (p.grow - 1) * k);
        it[w++] = p;
      }
      it.length = w;
      b.write();
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
    for (const b of Object.values(this.batches)) { b.items.length = 0; b.write(); }
    for (const r of this.rings) this.scene.remove(r.m);
    this.rings = [];
  }
}
