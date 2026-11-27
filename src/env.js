// Mehr Umgebung in den Welten: Deko-Sets je Welt und große Wahrzeichen in der Landschaft.
// Alles aus Grundformen gebaut; unbewegliche Teile werden beim Laden verschmolzen (wenige Draw Calls).
import * as THREE from 'three';
import * as M from './models.js';
import { pebble, roundBox } from './shapes.js';

const t = (c, o) => M.toon(c, o);
const glowAt = (color, size, op, y) => { const g = M.glowSprite(color, size, op); g.position.y = y; return g; };
// Geometrien werden geteilt (schnelleres Laden, weniger Speicher)
const GC = new Map();
const cached = (key, make) => { let g = GC.get(key); if (!g) { g = make(); GC.set(key, g); } return g; };
function part(geo, mat, x, y, z, parent, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; parent.add(m); return m;
}
const sph = (r, s = 16) => cached('s' + r + '|' + s, () => new THREE.SphereGeometry(r, s, Math.round(s * 0.7)));
const cyl = (a, b, h, s = 16) => cached('c' + a + '|' + b + '|' + h + '|' + s, () => new THREE.CylinderGeometry(a, b, h, s));
const cone = (r, h, s = 16) => cached('k' + r + '|' + h + '|' + s, () => new THREE.ConeGeometry(r, h, s));

// ---------- kleine Deko ----------
function bush(rand, color = 0x4f9a3e) {
  const g = new THREE.Group(), m = t(color);
  const n = 3 + Math.floor(rand() * 3);
  for (let i = 0; i < n; i++) { const s = 0.45 + rand() * 0.35; const b = part(sph(1, 18), m, (rand() - 0.5) * 1.1, s * 0.75, (rand() - 0.5) * 1.1, g); b.scale.set(s, s * 0.85, s); }
  if (rand() < 0.5) for (let i = 0; i < 4; i++) part(sph(0.08, 10), t(0xff7aa8, { emissive: 0xff3a6a, ei: 0.3 }), (rand() - 0.5) * 1.2, 0.6 + rand() * 0.4, (rand() - 0.5) * 1.2, g);
  return g;
}
function flowerPatch(rand) {
  const g = new THREE.Group();
  const cols = [0xffffff, 0xffb3d1, 0xffe066, 0xc9b6ff, 0xff8a65, 0x9fe8ff];
  const stem = t(0x3f9a4a), mid = t(0xffd23f);
  for (let i = 0; i < 7; i++) {
    const x = (rand() - 0.5) * 2.6, z = (rand() - 0.5) * 2.6, h = 0.25 + rand() * 0.25;
    const st = part(cyl(0.02, 0.02, 1, 5), stem, x, h / 2, z, g); st.scale.y = h; st.castShadow = false;
    const head = part(sph(1, 10), t(cols[Math.floor(rand() * cols.length)]), x, h, z, g); head.scale.set(0.13, 0.04, 0.13); head.castShadow = false;
    const c = part(sph(1, 8), mid, x, h + 0.025, z, g); c.scale.setScalar(0.04); c.castShadow = false;
  }
  return g;
}
function mushroom(rand, cap = 0xd9584a, glow = false) {
  const g = new THREE.Group();
  const n = 1 + Math.floor(rand() * 3);
  const capM = t(cap, glow ? { emissive: cap, ei: 0.6 } : undefined), stemM = t(0xfff1d6), dotM = t(0xffffff);
  for (let i = 0; i < n; i++) {
    const s = 0.5 + rand() * 0.9, x = (rand() - 0.5) * 1.2, z = (rand() - 0.5) * 1.2;
    const st = part(cyl(0.1, 0.14, 0.6, 12), stemM, x, 0.3 * s, z, g); st.scale.setScalar(s);
    const c = part(sph(0.34, 16), capM, x, 0.62 * s, z, g); c.scale.set(s, s * 0.6, s);
    for (let k = 0; k < 3; k++) { const a = rand() * 6.28; const d = part(sph(0.05, 8), dotM, x + Math.cos(a) * 0.2 * s, 0.75 * s, z + Math.sin(a) * 0.2 * s, g); d.scale.setScalar(s); }
  }
  if (glow) g.add(M.glowSprite(cap, 2.2, 0.45));
  return g;
}
function fence(rand) {
  const g = new THREE.Group(), w = t(0xb07a48, { map: null });
  const n = 3 + Math.floor(rand() * 3);
  for (let i = 0; i <= n; i++) part(roundBox(0.14, 1.0, 0.14, 0.04), w, i * 1.3, 0.5, 0, g);
  for (const y of [0.35, 0.75]) part(roundBox(n * 1.3 + 0.2, 0.1, 0.06, 0.03), w, n * 0.65, y, 0, g);
  return g;
}
function cactus(rand) {
  const g = new THREE.Group(), m = t(0x4f9a4a);
  const h = 1.6 + rand() * 1.6;
  part(new THREE.CapsuleGeometry(0.28, h, 8, 16), m, 0, h / 2 + 0.28, 0, g);
  for (const sx of [-1, 1]) {
    if (rand() < 0.3) continue;
    const y = h * (0.35 + rand() * 0.3), l = 0.5 + rand() * 0.5;
    part(new THREE.CapsuleGeometry(0.17, 0.4, 6, 12), m, sx * 0.42, y, 0, g, 0, 0, Math.PI / 2);
    part(new THREE.CapsuleGeometry(0.17, l, 6, 12), m, sx * 0.62, y + l / 2 + 0.1, 0, g);
  }
  if (rand() < 0.5) part(sph(0.12, 12), t(0xff8ab0), 0, h + 0.6, 0, g);
  return g;
}
function kelp(rand) {
  const g = new THREE.Group(), m = t(0x3aa878, { emissive: 0x0a3a20, ei: 0.5 });
  const n = 3 + Math.floor(rand() * 3);
  for (let i = 0; i < n; i++) {
    const h = 2 + rand() * 3, x = (rand() - 0.5) * 1.2, z = (rand() - 0.5) * 1.2;
    const pts = []; for (let k = 0; k <= 6; k++) pts.push(new THREE.Vector3(x + Math.sin(k * 0.9 + i) * 0.25, k / 6 * h, z + Math.cos(k * 0.7 + i) * 0.2));
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.09, 8), m); tube.castShadow = true; g.add(tube);
  }
  return g;
}
function shell(rand) {
  const g = new THREE.Group();
  const c = [0xffb3d1, 0xffe0c0, 0xc9b6ff][Math.floor(rand() * 3)];
  const s = part(sph(0.5, 24), t(c), 0, 0.22, 0, g); s.scale.set(1, 0.45, 0.8);
  for (let i = -2; i <= 2; i++) { const r = part(new THREE.TorusGeometry(0.4, 0.03, 8, 24, Math.PI), t(0xffffff), 0, 0.22, 0, g); r.rotation.y = i * 0.3; r.scale.set(1, 0.9, 0.8); }
  return g;
}
function iceSpikes(rand) {
  const g = new THREE.Group(), m = t(0xcff4ff, { emissive: 0x6fb8ff, ei: 0.25 });
  for (let i = 0; i < 4; i++) { const h = 0.8 + rand() * 1.8; const c = part(cone(0.22 + rand() * 0.15, h, 6), m, (rand() - 0.5) * 1.2, h / 2, (rand() - 0.5) * 1.2, g, (rand() - 0.5) * 0.4, 0, (rand() - 0.5) * 0.4); c.userData.noRefine = true; }
  return g;
}
function deadTree(rand, color = 0x3a2a2a) {
  const g = new THREE.Group(), m = t(color);
  const h = 2.5 + rand() * 1.5;
  part(cyl(0.12, 0.22, h, 14), m, 0, h / 2, 0, g);
  for (let i = 0; i < 4; i++) { const y = h * (0.5 + rand() * 0.45), a = rand() * 6.28, l = 0.7 + rand() * 0.7; const b = part(cyl(0.04, 0.08, l, 10), m, Math.cos(a) * l * 0.35, y + l * 0.3, Math.sin(a) * l * 0.35, g); b.rotation.set(Math.sin(a) * 0.9, 0, -Math.cos(a) * 0.9); }
  return g;
}
function vent(rand) {
  const g = new THREE.Group();
  const r = part(pebble(0.9, rand() * 9), t(0x2a1c1c, { map: null }), 0, 0.25, 0, g); r.scale.y = 0.5;
  part(cyl(0.35, 0.45, 0.3, 20), t(0xff8a2a, { emissive: 0xff5a1a, ei: 1 }), 0, 0.5, 0, g);
  g.add(glowAt(0xff6a1a, 2.6, 0.6, 0.9));
  g.userData.vent = true;
  return g;
}
function gearProp(rand) {
  const g = new THREE.Group(), m = t(0xb08a4a, { rough: 0.35, metal: 0.8 });
  const r = 0.8 + rand() * 0.8;
  const wheel = new THREE.Group(); wheel.position.y = r + 0.1; wheel.rotation.x = Math.PI / 2 * (rand() < 0.5 ? 1 : 0.15); g.add(wheel);
  part(new THREE.TorusGeometry(r, 0.12, 10, 40), m, 0, 0, 0, wheel);
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; part(roundBox(0.22, 0.22, 0.2, 0.05), m, Math.cos(a) * (r + 0.12), Math.sin(a) * (r + 0.12), 0, wheel, 0, 0, a); }
  part(cyl(0.2, 0.2, 0.25, 16), m, 0, 0, 0, wheel, Math.PI / 2);
  return g;
}
function lanternPost(rand) {
  const g = new THREE.Group();
  part(cyl(0.07, 0.1, 2.2, 14), t(0x3a2a4a), 0, 1.1, 0, g);
  part(sph(0.22, 18), t(0xfff1c0, { emissive: 0xc9a0ff, ei: 0.9 }), 0, 2.35, 0, g);
  part(cone(0.3, 0.25, 18), t(0x3a2a4a), 0, 2.62, 0, g);
  g.add(glowAt(0xc9a0ff, 3, 0.6, 2.35));
  return g;
}
function snowPile(rand) { const g = new THREE.Group(); const p = part(pebble(1 + rand() * 0.8, rand() * 9), t(0xffffff, { map: null }), 0, 0.15, 0, g); p.scale.y = 0.45; return g; }
function cloudPuff(rand) { const g = new THREE.Group(); const m = t(0xffffff); for (let i = 0; i < 4; i++) { const s = 0.6 + rand() * 0.7; part(sph(s, 18), m, (rand() - 0.5) * 1.6, s * 0.6, (rand() - 0.5) * 1.6, g); } return g; }
function ruinColumn(rand) {
  const g = new THREE.Group(), m = t(0xe8c888, { map: null });
  const h = 1.5 + rand() * 3;
  part(roundBox(1.1, 0.35, 1.1, 0.08), m, 0, 0.17, 0, g);
  part(cyl(0.38, 0.42, h, 20), m, 0, 0.35 + h / 2, 0, g);
  if (rand() < 0.6) part(roundBox(1.0, 0.3, 1.0, 0.08), m, 0, 0.35 + h + 0.15, 0, g);
  else { const b = part(cyl(0.38, 0.4, 0.9, 20), m, 0.9, 0.38, 0.2, g); b.rotation.z = Math.PI / 2; }
  return g;
}

// ---------- große Wahrzeichen ----------
function bigTree() {
  const g = new THREE.Group();
  part(cyl(0.9, 1.6, 9, 24), t(0x7a4a2a), 0, 4.5, 0, g);
  for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + 0.4; const r = part(cyl(0.25, 0.55, 3, 14), t(0x7a4a2a), Math.cos(a) * 1.4, 0.6, Math.sin(a) * 1.4, g); r.rotation.set(Math.sin(a) * 0.9, 0, -Math.cos(a) * 0.9); }
  const leaf = [t(0x5fae4a), t(0x7fc95a), t(0xffb3d1)];
  for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2, rr = i ? 3.4 : 0, s = 2.6 + (i % 3) * 0.5; part(sph(s, 24), leaf[i % 3], Math.cos(a) * rr, 10 + (i % 2) * 1.2, Math.sin(a) * rr, g); }
  return { g, r: 1.6, h: 9 };
}
function windmill() {
  const g = new THREE.Group();
  part(cyl(1.4, 2.0, 8, 24), t(0xfff1d6), 0, 4, 0, g);
  part(cone(1.9, 2.4, 24), t(0xd9584a), 0, 9.2, 0, g);
  part(roundBox(0.8, 1.4, 0.2, 0.08), t(0x8a5a3a), 0, 0.7, 1.95, g);
  const hub = new THREE.Group(); hub.position.set(0, 7.5, 1.7); g.add(hub);
  for (let i = 0; i < 4; i++) { const arm = new THREE.Group(); arm.rotation.z = i * Math.PI / 2; hub.add(arm); part(roundBox(0.25, 4.6, 0.08, 0.04), t(0x8a5a3a), 0, 2.4, 0, arm); part(roundBox(0.9, 3.4, 0.04, 0.02), t(0xfff6e8, { map: M.isModern() ? null : null }), 0.55, 2.8, 0.03, arm); }
  part(sph(0.35, 16), t(0xe8c070, { rough: 0.3, metal: 0.8 }), 0, 0, 0.1, hub);
  return { g, r: 2.0, h: 8, spin: hub };
}
function crystalSpire() {
  const g = new THREE.Group(), m = t(0x9ff4ff, { emissive: 0x3fb8ff, ei: 0.6 }), m2 = t(0xd9a8ff, { emissive: 0x9a5fff, ei: 0.6 });
  const main = part(cyl(0, 2.2, 18, 6), m, 0, 9, 0, g); main.userData.noRefine = true;
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, h = 5 + (i % 3) * 3; const c = part(cyl(0, 1.0, h, 6), i % 2 ? m2 : m, Math.cos(a) * 2.3, h / 2 - 0.3, Math.sin(a) * 2.3, g, Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35); c.userData.noRefine = true; }
  g.add(glowAt(0x9ff4ff, 16, 0.5, 10));
  return { g, r: 2.6, h: 18 };
}
function balloonTower() {
  const g = new THREE.Group(), w = t(0xb07a48);
  for (const [x, z] of [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]]) part(cyl(0.18, 0.22, 10, 14), w, x, 5, z, g);
  for (let y = 2; y <= 10; y += 4) part(roundBox(3.6, 0.3, 3.6, 0.08), w, 0, y, 0, g);
  const b = part(sph(3, 28), t(0xffffff, { map: null }), 0, 15, 0, g); b.material = t(0xffd36b);
  b.scale.set(1, 1.15, 1);
  for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2; const r = part(cyl(0.03, 0.03, 4, 6), t(0x5a3a22), Math.cos(a) * 1.6, 11.5, Math.sin(a) * 1.6, g); r.rotation.set(Math.sin(a) * 0.3, 0, -Math.cos(a) * 0.3); }
  return { g, r: 2.2, h: 10 };
}
function volcano() {
  const g = new THREE.Group();
  const v = part(new THREE.CylinderGeometry(3, 12, 14, 40, 4, true), t(0x3a2424, { map: null }), 0, 7, 0, g);
  v.material = M.toon(0x3a2424);
  part(cyl(3.05, 3.05, 0.6, 40), t(0xff6a1a, { emissive: 0xff4a0a, ei: 1.2 }), 0, 13.5, 0, g);
  g.add(glowAt(0xff6a1a, 14, 0.6, 15));
  g.userData.vent = true; g.userData.ventY = 14;
  return { g, r: 10, h: 14 };
}
function iceArch() {
  const g = new THREE.Group(), m = t(0xdff6ff, { emissive: 0x6fb8ff, ei: 0.2, rough: 0.12 });
  const a = part(new THREE.TorusGeometry(6, 1.2, 20, 60, Math.PI), m, 0, 0, 0, g);
  a.scale.set(1, 1.3, 1);
  for (const sx of [-6, 6]) part(pebble(2, sx), t(0xffffff), sx, 0.5, 0, g);
  return { g, r: 0, h: 8, colliders: [[-6, 0, 1.4], [6, 0, 1.4]] };
}
function pyramid() {
  const g = new THREE.Group(), m = t(0xe8c888);
  const p = part(new THREE.ConeGeometry(14, 14, 4, 1), m, 0, 7, 0, g); p.rotation.y = Math.PI / 4; p.userData.noRefine = true;
  for (let i = 1; i < 6; i++) { const s = part(new THREE.CylinderGeometry(14 - i * 2.33, 14 - i * 2.33 + 0.4, 0.4, 4, 1, true), t(0xc8a060), 0, i * 2.33, 0, g); s.rotation.y = Math.PI / 4; s.userData.noRefine = true; }
  part(new THREE.OctahedronGeometry(0.8), t(0xffe066, { emissive: 0xffa000, ei: 1 }), 0, 14.8, 0, g);
  g.add(glowAt(0xffd36b, 8, 0.7, 14.8));
  return { g, r: 9, h: 14 };
}
function shipwreck() {
  const g = new THREE.Group(), w = t(0x6a4a3a);
  const hull = part(sph(1, 28), w, 0, 1.2, 0, g); hull.scale.set(7, 2.2, 2.6); hull.rotation.z = 0.25;
  part(cyl(0.22, 0.28, 9, 14), w, 1, 5, 0, g, 0, 0, -0.3);
  const sail = part(new THREE.PlaneGeometry(3, 3.5), t(0xe8e0c8), 2.2, 6.2, 0.2, g, 0, 0.3, -0.3); sail.material = sail.material.clone(); sail.material.side = THREE.DoubleSide;
  return { g, r: 5, h: 3 };
}
function clockTower() {
  const g = new THREE.Group(), b = t(0x4a3a6e), r = t(0x2a1f3a);
  part(roundBox(4.5, 16, 4.5, 0.3), b, 0, 8, 0, g);
  part(cone(3.8, 5, 4), r, 0, 18.5, 0, g, 0, Math.PI / 4, 0);
  for (let s = 0; s < 4; s++) {
    const face = new THREE.Group(); face.rotation.y = s * Math.PI / 2; g.add(face);
    part(cyl(1.6, 1.6, 0.2, 40), t(0xfff1c0, { emissive: 0xffc070, ei: 0.5 }), 0, 13, 2.3, face, Math.PI / 2);
    part(roundBox(0.12, 1.2, 0.06, 0.03), t(0x1a1020), 0, 13.5, 2.45, face);
    part(roundBox(0.1, 0.9, 0.06, 0.03), t(0x1a1020), 0.35, 12.8, 2.45, face, 0, 0, 1.1);
  }
  return { g, r: 3.2, h: 16 };
}

// Deko-Sets je Welt: [Funktion, Gewicht, Kollisionsradius]
const SETS = {
  meadow: [[bush, 5, 0], [flowerPatch, 6, 0], [mushroom, 2, 0], [fence, 1, 0]],
  crystal: [[(r) => mushroom(r, 0x9a7aff, true), 4, 0], [iceSpikes, 3, 0], [(r) => bush(r, 0x5a4a9a), 2, 0]],
  sky: [[cloudPuff, 5, 0], [fence, 2, 0], [(r) => bush(r, 0x8acf6a), 2, 0]],
  lava: [[vent, 2, 0.8], [(r) => deadTree(r), 3, 0.25]],
  ice: [[snowPile, 5, 0], [iceSpikes, 3, 0], [(r) => bush(r, 0x8ab0c8), 1, 0]],
  desert: [[cactus, 5, 0.35], [ruinColumn, 3, 0.5], [(r) => bush(r, 0x9a9a5a), 1, 0]],
  coral: [[kelp, 6, 0], [shell, 4, 0], [(r) => mushroom(r, 0xff7aa8, true), 2, 0]],
  fog: [[lanternPost, 3, 0.2], [gearProp, 3, 0.6], [(r) => deadTree(r, 0x2a2238), 3, 0.25], [(r) => mushroom(r, 0x6a4c99, true), 2, 0]],
};
const LANDMARKS = {
  meadow: [bigTree, windmill, bigTree], crystal: [crystalSpire, crystalSpire, crystalSpire], sky: [balloonTower, windmill, balloonTower],
  lava: [volcano, volcano], ice: [iceArch, iceArch], desert: [pyramid, pyramid], coral: [shipwreck, shipwreck], fog: [clockTower, clockTower],
};

// verteilt Deko und Wahrzeichen über die Landschaft eines Levels
export function decorateWorld(L, place, rand, area, kingdom) {
  const id = L.worldDef.id;
  const set = SETS[id] || SETS.meadow;
  const total = set.reduce((s, x) => s + x[1], 0);
  const n = Math.min(380, Math.round(area / 240));
  let made = 0;
  for (let i = 0; i < n * 2 && made < n; i++) {
    const spot = place(2.5); if (!spot) continue;
    let x = rand() * total, pick = set[0];
    for (const s of set) { x -= s[1]; if (x <= 0) { pick = s; break; } }
    const obj = pick[0](rand);
    obj.traverse((o) => { if (o.isMesh && !o.geometry.userData.keepRefine) o.userData.noRefine = true; });
    obj.position.set(spot.x, spot.y - 0.05, spot.z); obj.rotation.y = rand() * Math.PI * 2;
    const s = 0.85 + rand() * 0.5; obj.scale.setScalar(s);
    L.add(obj); L.staticRoots.push(obj);
    if (pick[2] > 0) L.addCollider(spot.x, spot.z, pick[2] * s, spot.y, spot.y + 2);
    if (obj.userData.vent) L.vents.push({ x: spot.x, y: spot.y + (obj.userData.ventY || 0.9) * s, z: spot.z, big: false });
    made++;
  }
  // Wahrzeichen: weit sichtbare Orientierungspunkte
  const lm = LANDMARKS[id] || [];
  const count = kingdom ? lm.length + 1 : 1;
  for (let i = 0; i < count; i++) {
    const spot = place(14, true); if (!spot) continue;
    const { g, r, h, spin, colliders } = lm[i % lm.length]();
    g.position.set(spot.x, spot.y - 0.2, spot.z); g.rotation.y = rand() * Math.PI * 2;
    L.add(g);
    if (spin) { L.anim.push({ kind: 'windmill', obj: spin }); } else L.staticRoots.push(g);
    if (r > 0) L.addCollider(spot.x, spot.z, r, spot.y - 1, spot.y + h);
    if (colliders) for (const [cx, , cr] of colliders) { const a = g.rotation.y; L.addCollider(spot.x + Math.cos(a) * cx, spot.z - Math.sin(a) * cx, cr, spot.y - 1, spot.y + 9); }
    if (g.userData.vent) L.vents.push({ x: spot.x, y: spot.y + g.userData.ventY, z: spot.z, big: true });
  }
}
