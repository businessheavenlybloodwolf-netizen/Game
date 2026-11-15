// Alle Figuren & Objekte werden aus Grundformen gebaut (eigener Stil: rundlich, Toon-Shading, Outline).
import * as THREE from 'three';

let T = null;
const matCache = new Map();
export function setTextures(t) { T = t; }

export function toon(color, opts = {}) {
  const key = JSON.stringify([color, opts.map ? opts.map.uuid : 0, opts.emissive || 0, opts.ei || 0, opts.transparent || 0, opts.opacity || 1]);
  if (matCache.has(key) && !opts.unique) return matCache.get(key);
  const m = new THREE.MeshToonMaterial({
    color, map: opts.map || null, gradientMap: T.toonGradient,
    emissive: opts.emissive || 0x000000, emissiveIntensity: opts.ei ?? 1,
    transparent: !!opts.transparent, opacity: opts.opacity ?? 1,
  });
  if (!opts.unique) matCache.set(key, m);
  return m;
}

export function basic(color, opts = {}) {
  return new THREE.MeshBasicMaterial({ color, transparent: !!opts.transparent, opacity: opts.opacity ?? 1, blending: opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending, depthWrite: !opts.additive && !opts.transparent, side: opts.side || THREE.FrontSide, map: opts.map || null });
}

const outlineMat = new THREE.MeshBasicMaterial({ color: 0x1a1020, side: THREE.BackSide });

function mesh(geo, mat, x = 0, y = 0, z = 0, parent = null) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  if (parent) parent.add(m);
  return m;
}

export function addOutline(obj, thickness = 0.04) {
  const list = [];
  obj.traverse((o) => { if (o.isMesh && !o.userData.noOutline) list.push(o); });
  for (const o of list) {
    if (!o.geometry.boundingSphere) o.geometry.computeBoundingSphere();
    const r = o.geometry.boundingSphere.radius || 1;
    const s = 1 + thickness / r;
    const ol = new THREE.Mesh(o.geometry, outlineMat);
    ol.scale.setScalar(s);
    ol.userData.noOutline = true;
    ol.castShadow = false;
    o.add(ol);
  }
}

export function glowSprite(color, size, opacity = 0.8) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: T.glow, color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false }));
  s.scale.setScalar(size);
  return s;
}

// ---------------- Lumi, der Laternengeist ----------------
export function createLumi() {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const paper = toon(0xfff1d6, { emissive: 0xffa040, ei: 0.28 });
  const rib = toon(0x8a4b2a);
  const dark = toon(0x4a2a1e);
  const S = new THREE.SphereGeometry(1, 24, 18);

  const torso = mesh(S, paper, 0, 0.62, 0, body); torso.scale.set(0.48, 0.46, 0.48);
  for (const y of [-0.24, 0, 0.24]) {
    const rr = Math.sqrt(0.48 * 0.48 - y * y * 1.1);
    const t = mesh(new THREE.TorusGeometry(rr, 0.022, 6, 32), rib, 0, 0.62 + y, 0, body);
    t.rotation.x = Math.PI / 2; t.userData.noOutline = true;
  }
  const capT = mesh(new THREE.CylinderGeometry(0.17, 0.22, 0.1, 16), dark, 0, 1.06, 0, body);
  const capB = mesh(new THREE.CylinderGeometry(0.22, 0.16, 0.08, 16), dark, 0, 0.17, 0, body);
  capT.userData.noOutline = capB.userData.noOutline = true;

  // Flamme
  const flame = new THREE.Group(); flame.position.set(0, 1.12, 0); body.add(flame);
  const fMat = basic(0xffb02e), fIn = basic(0xfff3a0);
  const f1 = mesh(new THREE.ConeGeometry(0.13, 0.34, 12), fMat, 0, 0.2, 0, flame); f1.userData.noOutline = true;
  const f2 = mesh(new THREE.SphereGeometry(0.13, 12, 8), fMat, 0, 0.04, 0, flame); f2.userData.noOutline = true;
  const f3 = mesh(new THREE.SphereGeometry(0.07, 10, 8), fIn, 0, 0.06, 0.02, flame); f3.userData.noOutline = true;
  f1.castShadow = f2.castShadow = f3.castShadow = false;
  const glow = glowSprite(0xffaa44, 1.4, 0.7); glow.position.y = 0.1; flame.add(glow);

  // Gesicht
  const eyeM = toon(0x1a1020), white = basic(0xffffff), cheek = toon(0xff9aa8);
  for (const sx of [-1, 1]) {
    const e = mesh(S, eyeM, sx * 0.15, 0.7, 0.43, body); e.scale.set(0.065, 0.095, 0.04); e.userData.noOutline = true;
    const h = mesh(S, white, sx * 0.15 + 0.02, 0.73, 0.465, body); h.scale.setScalar(0.022); h.userData.noOutline = true;
    const c = mesh(S, cheek, sx * 0.27, 0.58, 0.38, body); c.scale.set(0.07, 0.04, 0.03); c.userData.noOutline = true;
  }
  // Schal
  const scarfM = toon(0x2fb5a8);
  const scarf = mesh(new THREE.TorusGeometry(0.36, 0.075, 8, 24), scarfM, 0, 0.92, 0, body);
  scarf.rotation.x = Math.PI / 2;
  const tail = new THREE.Group(); tail.position.set(0.12, 0.9, -0.34); body.add(tail);
  const t1 = mesh(new THREE.BoxGeometry(0.16, 0.06, 0.4), scarfM, 0, 0, -0.18, tail);
  const t2 = mesh(new THREE.BoxGeometry(0.14, 0.05, 0.3), toon(0x24978c), 0.05, -0.04, -0.12, t1);
  t2.rotation.y = 0.3;

  // Hände & Füße
  const hands = [], feet = [];
  for (const sx of [-1, 1]) {
    const h = mesh(S, paper, sx * 0.52, 0.55, 0.05, body); h.scale.setScalar(0.11); hands.push(h);
    const f = mesh(S, dark, sx * 0.19, 0.08, 0.04, root); f.scale.set(0.13, 0.08, 0.18); feet.push(f);
  }
  addOutline(body, 0.035);
  addOutline(feet[0], 0.03); addOutline(feet[1], 0.03);
  const light = new THREE.PointLight(0xffb050, 6, 7, 1.6);
  light.position.set(0, 1.3, 0); root.add(light);
  root.userData = { body, flame, tail, hands, feet, light, glow };
  return root;
}

// ---------------- Gegner ----------------
function eyes(parent, y, z, spread, size, color = 0xffe14a) {
  const m = basic(color);
  const S = new THREE.SphereGeometry(1, 10, 8);
  for (const sx of [-1, 1]) {
    const e = mesh(S, m, sx * spread, y, z, parent); e.scale.set(size, size * 0.7, size * 0.5);
    e.rotation.z = -sx * 0.4; e.userData.noOutline = true; e.castShadow = false;
    const brow = mesh(new THREE.BoxGeometry(size * 2.4, size * 0.5, size * 0.6), toon(0x150c22), sx * spread, y + size * 0.9, z + 0.02, parent);
    brow.rotation.z = sx * 0.45; brow.userData.noOutline = true;
  }
}

export function createNebling(tint) {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const m = toon(tint ?? 0x8f72c8, { map: T.fog });
  const b = mesh(new THREE.SphereGeometry(0.6, 20, 14), m, 0, 0.55, 0, body); b.scale.set(1, 0.9, 1);
  const top = mesh(new THREE.SphereGeometry(0.28, 12, 10), m, 0.1, 1.05, -0.05, body);
  eyes(body, 0.68, 0.52, 0.2, 0.1);
  const mouth = mesh(new THREE.TorusGeometry(0.1, 0.03, 6, 12, Math.PI), toon(0x150c22), 0, 0.45, 0.56, body);
  mouth.rotation.z = Math.PI; mouth.userData.noOutline = true;
  const puffM = toon(0x8f78c0, { transparent: true, opacity: 0.75 });
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    const p = mesh(new THREE.SphereGeometry(0.22, 10, 8), puffM, Math.cos(a) * 0.55, 0.15, Math.sin(a) * 0.55, body);
    p.userData.noOutline = true; p.castShadow = false;
  }
  addOutline(b, 0.04); addOutline(top, 0.04);
  root.userData = { body };
  return root;
}

export function createDornling(tint) {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const m = toon(tint ?? 0xb0364f);
  const b = mesh(new THREE.SphereGeometry(0.55, 20, 14), m, 0, 0.6, 0, body);
  const spikeM = toon(0xffe9c4);
  const cone = new THREE.ConeGeometry(0.12, 0.42, 8);
  const dirs = [];
  for (let i = 0; i < 14; i++) {
    const y = 1 - (i / 13) * 1.4; const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * 2.4;
    dirs.push(new THREE.Vector3(Math.cos(phi) * r, y, Math.sin(phi) * r));
  }
  for (const d of dirs) {
    if (d.z > 0.6 && Math.abs(d.y) < 0.4) continue; // Gesicht frei lassen
    const s = mesh(cone, spikeM, d.x * 0.6, 0.6 + d.y * 0.6, d.z * 0.6, body);
    s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d);
  }
  eyes(body, 0.66, 0.5, 0.18, 0.09, 0xffffff);
  addOutline(b, 0.04);
  root.userData = { body };
  return root;
}

export function createFlatterling(tint) {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const m = toon(tint ?? 0x5b3f8f, { map: T.fog });
  const b = mesh(new THREE.SphereGeometry(0.45, 18, 12), m, 0, 0, 0, body);
  eyes(body, 0.08, 0.4, 0.16, 0.08);
  const wingM = toon(0x9a7fd1);
  const wings = [];
  for (const sx of [-1, 1]) {
    const piv = new THREE.Group(); piv.position.set(sx * 0.35, 0.1, 0); body.add(piv);
    const w = mesh(new THREE.SphereGeometry(1, 12, 8), wingM, sx * 0.45, 0, 0, piv);
    w.scale.set(0.5, 0.06, 0.3); wings.push(piv);
  }
  const ear = new THREE.ConeGeometry(0.1, 0.3, 6);
  mesh(ear, m, -0.18, 0.45, 0, body).rotation.z = 0.3;
  mesh(ear, m, 0.18, 0.45, 0, body).rotation.z = -0.3;
  addOutline(b, 0.04);
  root.userData = { body, wings };
  return root;
}

export function createBoss(cfg = {}) {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const style = cfg.style || 'crown';
  const m = toon(cfg.color ?? 0x9a7ad8, { map: T.fog, emissive: 0x2a1048, ei: 1, unique: true });
  const b = mesh(new THREE.SphereGeometry(2.3, 32, 24), m, 0, 2.2, 0, body); b.scale.set(1, 0.92, 1);
  // Kopfschmuck je nach Boss
  const accM = toon(cfg.accent ?? 0x2b1a40, { emissive: cfg.accentGlow ?? 0x6a2fa0, ei: 0.3 });
  if (style === 'crown') {
    const ring = mesh(new THREE.CylinderGeometry(1.1, 1.25, 0.5, 8, 1, true), accM, 0, 4.15, 0, body);
    ring.material.side = THREE.DoubleSide;
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2;
      mesh(new THREE.ConeGeometry(0.22, 0.7, 6), accM, Math.cos(a) * 1.1, 4.6, Math.sin(a) * 1.1, body);
    }
  } else if (style === 'horns') {
    for (const sx of [-1, 1]) {
      const h = mesh(new THREE.ConeGeometry(0.35, 1.8, 8), accM, sx * 1.4, 4.1, 0, body); h.rotation.z = -sx * 0.6;
    }
  } else if (style === 'spikes') {
    for (let i = 0; i < 9; i++) {
      const a = i / 9 * Math.PI * 2;
      const sp = mesh(new THREE.ConeGeometry(0.28, 1.2, 6), accM, Math.cos(a) * 1.6, 3.6, Math.sin(a) * 1.6, body);
      sp.rotation.z = -Math.cos(a) * 0.6; sp.rotation.x = Math.sin(a) * 0.6;
    }
  } else if (style === 'leaves') {
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      const lf = mesh(new THREE.SphereGeometry(1, 10, 8), accM, Math.cos(a) * 0.9, 4.3, Math.sin(a) * 0.9, body);
      lf.scale.set(0.35, 0.12, 0.8); lf.rotation.y = -a; lf.rotation.x = 0.5;
    }
  } else if (style === 'hat') {
    mesh(new THREE.CylinderGeometry(1.9, 1.9, 0.15, 20), accM, 0, 4.05, 0, body);
    mesh(new THREE.CylinderGeometry(0.9, 1.1, 1.3, 16), accM, 0, 4.7, 0, body);
  } else if (style === 'tentacles') {
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      const tn = mesh(new THREE.CylinderGeometry(0.1, 0.3, 1.6, 8), accM, Math.cos(a) * 1.2, 4.3, Math.sin(a) * 1.2, body);
      tn.rotation.z = -Math.cos(a) * 0.5; tn.rotation.x = Math.sin(a) * 0.5;
    }
  }
  // Morgenlicht-Kristall (Schwachstelle)
  const gemM = new THREE.MeshToonMaterial({ color: 0xbff7ff, emissive: 0x55e0ff, emissiveIntensity: 1.2, gradientMap: T.toonGradient });
  const gem = mesh(new THREE.OctahedronGeometry(0.55), gemM, 0, 4.25, 0, body); gem.scale.set(0.8, 1.3, 0.8);
  const gemGlow = glowSprite(0x7fefff, 3.5, 0.8); gem.add(gemGlow);
  // Augen
  const eyeW = toon(0xfff4d8), pupil = basic(0xff3b5c);
  const pupils = [];
  for (const sx of [-1, 1]) {
    const e = mesh(new THREE.SphereGeometry(0.45, 16, 12), eyeW, sx * 0.75, 2.8, 1.85, body); e.scale.set(1, 1.15, 0.5);
    const p = mesh(new THREE.SphereGeometry(0.18, 12, 8), pupil, sx * 0.72, 2.75, 2.08, body); p.userData.noOutline = true;
    pupils.push(p);
    const brow = mesh(new THREE.BoxGeometry(0.9, 0.18, 0.2), toon(0x1a0f2a), sx * 0.75, 3.35, 2.0, body); brow.rotation.z = sx * 0.35;
  }
  // Monokel – Graf Nebelmaul ist sehr eitel
  if (cfg.monocle !== false) { const mono = mesh(new THREE.TorusGeometry(0.52, 0.06, 8, 24), toon(0xe6c35a), 0.75, 2.8, 2.05, body); mono.userData.noOutline = true; }
  // Maul
  const mouth = mesh(new THREE.SphereGeometry(1, 20, 12), toon(0x1a0b24), 0, 1.8, 1.95, body); mouth.scale.set(0.9, 0.35, 0.3);
  mouth.userData.noOutline = true;
  const toothM = toon(0xfff4d8);
  for (let i = -2; i <= 2; i++) {
    const t = mesh(new THREE.ConeGeometry(0.1, 0.25, 4), toothM, i * 0.3, 2.05, 2.15, body); t.rotation.x = Math.PI; t.userData.noOutline = true;
  }
  // Hände
  const hands = [];
  for (const sx of [-1, 1]) {
    const h = mesh(new THREE.SphereGeometry(0.7, 16, 12), m, sx * 3.0, 1.6, 0.6, root);
    hands.push(h); addOutline(h, 0.06);
  }
  // Nebelschwaden
  const puffM = toon(cfg.puff ?? 0xa58ad6, { transparent: true, opacity: 0.6 });
  const puffs = new THREE.Group(); root.add(puffs);
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * Math.PI * 2;
    const p = mesh(new THREE.SphereGeometry(0.6 + (i % 3) * 0.2, 10, 8), puffM, Math.cos(a) * 2.4, 0.4, Math.sin(a) * 2.4, puffs);
    p.castShadow = false; p.userData.noOutline = true;
  }
  addOutline(b, 0.08);
  root.userData = { body, gem, gemGlow, hands, puffs, pupils, mat: m };
  return root;
}

// ---------------- Sammelobjekte ----------------
let sparkGeo = null;
export function createSpark() {
  if (!sparkGeo) {
    const s = new THREE.Shape();
    for (let i = 0; i < 10; i++) {
      const a = i / 10 * Math.PI * 2 + Math.PI / 2, r = i % 2 ? 0.14 : 0.34;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      i ? s.lineTo(x, y) : s.moveTo(x, y);
    }
    sparkGeo = new THREE.ExtrudeGeometry(s, { depth: 0.08, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 1 });
    sparkGeo.center();
  }
  const m = mesh(sparkGeo, toon(0xffd23f, { emissive: 0xffa500, ei: 0.45 }));
  m.castShadow = false;
  return m;
}

export function createHeart() {
  const s = new THREE.Shape();
  s.moveTo(0, -0.3);
  s.bezierCurveTo(0.05, -0.2, 0.35, -0.05, 0.35, 0.12);
  s.bezierCurveTo(0.35, 0.3, 0.12, 0.35, 0, 0.18);
  s.bezierCurveTo(-0.12, 0.35, -0.35, 0.3, -0.35, 0.12);
  s.bezierCurveTo(-0.35, -0.05, -0.05, -0.2, 0, -0.3);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.04, bevelSegments: 2 });
  g.center();
  const m = mesh(g, toon(0xff4f6d, { emissive: 0xff2040, ei: 0.35 }));
  m.scale.setScalar(1.3);
  addOutline(m, 0.03);
  return m;
}

export function createShard() {
  const root = new THREE.Group();
  const gm = new THREE.MeshToonMaterial({ color: 0xd8fbff, emissive: 0x5fd8ff, emissiveIntensity: 1.0, gradientMap: T.toonGradient });
  const c = mesh(new THREE.OctahedronGeometry(0.6), gm, 0, 0, 0, root); c.scale.set(0.7, 1.4, 0.7);
  const c2 = mesh(new THREE.OctahedronGeometry(0.3), toon(0xfff3b0, { emissive: 0xffd36b, ei: 1 }), 0.35, -0.35, 0.1, root); c2.scale.set(0.6, 1.3, 0.6);
  addOutline(c, 0.04);
  root.add(glowSprite(0x9ff4ff, 4, 0.9));
  const ring = mesh(new THREE.TorusGeometry(1.1, 0.04, 6, 40), basic(0xffeaa0, { transparent: true, opacity: 0.8 }), 0, 0, 0, root);
  ring.rotation.x = Math.PI / 2;
  root.userData = { ring };
  return root;
}

// ---------------- Welt-Objekte ----------------
export function createCheckpoint() {
  const root = new THREE.Group();
  const w = toon(0x7a4a2a);
  mesh(new THREE.CylinderGeometry(0.1, 0.14, 2.4, 8), w, 0, 1.2, 0, root);
  mesh(new THREE.BoxGeometry(0.8, 0.1, 0.1), w, 0.3, 2.3, 0, root);
  const lamp = new THREE.Group(); lamp.position.set(0.62, 1.95, 0); root.add(lamp);
  const lm = toon(0x9a9aa8, { unique: true });
  const l = mesh(new THREE.SphereGeometry(0.25, 14, 10), lm, 0, 0, 0, lamp); l.scale.y = 1.2;
  mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.08, 10), toon(0x4a2a1e), 0, 0.3, 0, lamp);
  const flame = glowSprite(0xffb050, 1.6, 0); lamp.add(flame);
  addOutline(root, 0.03);
  root.userData = { lampMat: lm, flame, lamp };
  return root;
}

export function createBouncer(color = 0xff7ab8) {
  const root = new THREE.Group();
  const pad = new THREE.Group(); root.add(pad);
  const stem = toon(0x3f9a4a);
  mesh(new THREE.CylinderGeometry(0.15, 0.25, 0.5, 8), stem, 0, 0.25, 0, root);
  const pm = toon(color);
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    const p = mesh(new THREE.SphereGeometry(1, 12, 8), pm, Math.cos(a) * 0.8, 0.5, Math.sin(a) * 0.8, pad);
    p.scale.set(0.55, 0.15, 0.4); p.rotation.y = -a;
  }
  mesh(new THREE.CylinderGeometry(0.6, 0.65, 0.25, 16), toon(0xffe066, { emissive: 0xffa000, ei: 0.25 }), 0, 0.6, 0, pad);
  addOutline(root, 0.03);
  root.userData = { pad };
  return root;
}

export function createTree(rand, kind = 'round') {
  const root = new THREE.Group();
  const h = 1.6 + rand() * 1.4;
  mesh(new THREE.CylinderGeometry(0.18, 0.3, h, 8), toon(0x7a4a2a), 0, h / 2, 0, root);
  const cols = kind === 'blossom' ? [0xffb3cf, 0xff94bc, 0xffd1e2] : kind === 'crystal' ? [0x7ef0ff, 0xb59cff, 0x9fd8ff] : [0x4fae4a, 0x6cc75a, 0x3e9440];
  const n = 3 + Math.floor(rand() * 2);
  for (let i = 0; i < n; i++) {
    const r = 0.7 + rand() * 0.5;
    const m = mesh(new THREE.SphereGeometry(r, 14, 10), toon(cols[i % cols.length], kind === 'crystal' ? { emissive: cols[i % 3], ei: 0.3 } : {}),
      (rand() - 0.5) * 1.0, h + (rand() - 0.2) * 0.8, (rand() - 0.5) * 1.0, root);
    m.scale.y = 0.85;
  }
  addOutline(root, 0.04);
  return root;
}

export function createPine(rand, color = 0x2f7f5a) {
  const root = new THREE.Group();
  mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.8, 6), toon(0x6a3e22), 0, 0.4, 0, root);
  for (let i = 0; i < 3; i++) mesh(new THREE.ConeGeometry(1.0 - i * 0.25, 1.1, 8), toon(color), 0, 1.0 + i * 0.6, 0, root);
  addOutline(root, 0.04);
  root.scale.setScalar(0.9 + rand() * 0.6);
  return root;
}

export function createCrystal(rand, color = 0x8ff3ff) {
  const root = new THREE.Group();
  const m = toon(color, { emissive: color, ei: 0.55 });
  const n = 3 + Math.floor(rand() * 3);
  for (let i = 0; i < n; i++) {
    const h = 0.6 + rand() * 1.6;
    const c = mesh(new THREE.CylinderGeometry(0, 0.25 + rand() * 0.15, h, 6), m, (rand() - 0.5) * 0.8, h / 2, (rand() - 0.5) * 0.8, root);
    c.rotation.set((rand() - 0.5) * 0.7, rand() * 3, (rand() - 0.5) * 0.7);
  }
  addOutline(root, 0.03);
  return root;
}

export function createFlower(rand) {
  const root = new THREE.Group();
  const cols = [0xffffff, 0xffb3d1, 0xffe066, 0xc9b6ff, 0xff8a65];
  const h = 0.25 + rand() * 0.25;
  const st = mesh(new THREE.CylinderGeometry(0.02, 0.02, h, 4), toon(0x3f9a4a), 0, h / 2, 0, root); st.castShadow = false;
  const head = mesh(new THREE.SphereGeometry(0.09, 8, 6), toon(cols[Math.floor(rand() * cols.length)]), 0, h, 0, root); head.castShadow = false;
  return root;
}

export function createGrassTuft(rand, color = 0x5fae4a) {
  const root = new THREE.Group();
  const m = toon(color);
  for (let i = 0; i < 3; i++) {
    const c = mesh(new THREE.ConeGeometry(0.05, 0.35 + rand() * 0.2, 4), m, (rand() - 0.5) * 0.2, 0.18, (rand() - 0.5) * 0.2, root);
    c.rotation.z = (rand() - 0.5) * 0.6; c.castShadow = false;
  }
  return root;
}

export function createRock(rand, color = 0x9a98aa) {
  const m = mesh(new THREE.DodecahedronGeometry(0.4 + rand() * 0.5, 0), toon(color));
  m.scale.y = 0.6 + rand() * 0.4;
  m.rotation.set(rand(), rand() * 3, rand());
  addOutline(m, 0.03);
  return m;
}

export function createSign() {
  const root = new THREE.Group();
  const w = toon(0x9a6438, { map: T.wood });
  mesh(new THREE.CylinderGeometry(0.07, 0.08, 1.1, 6), toon(0x6a3e22), 0, 0.55, 0, root);
  mesh(new THREE.BoxGeometry(0.9, 0.5, 0.08), w, 0, 1.1, 0, root);
  const q = mesh(new THREE.TorusGeometry(0.1, 0.03, 6, 12, Math.PI * 1.4), toon(0xfff1d6), 0, 1.15, 0.05, root); q.rotation.z = -0.6;
  mesh(new THREE.SphereGeometry(0.035, 6, 6), toon(0xfff1d6), 0, 0.97, 0.05, root);
  addOutline(root, 0.025);
  return root;
}

export function createCrate() {
  const g = new THREE.BoxGeometry(1.1, 1.1, 1.1);
  const m = mesh(g, toon(0xc08850, { map: T.wood }));
  const bandM = toon(0x6a3e22);
  for (const r of [0, Math.PI / 2]) {
    const b = mesh(new THREE.BoxGeometry(1.14, 0.14, 1.14), bandM, 0, 0, 0, m); b.rotation.x = r;
  }
  addOutline(m, 0.03);
  return m;
}

export function createAirship(rand) {
  const root = new THREE.Group();
  const bal = mesh(new THREE.SphereGeometry(1, 20, 14), toon(0xffffff, { map: rand() < 0.5 ? T.clothRed : T.cloth }), 0, 3, 0, root);
  bal.scale.set(3.2, 1.6, 1.6);
  const hull = mesh(new THREE.BoxGeometry(3, 0.8, 1.2), toon(0x9a6438, { map: T.wood }), 0, 0.6, 0, root);
  for (const sx of [-1, 1]) {
    const rope = mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.6, 4), toon(0x3a2614), sx * 1.2, 1.6, 0, root); rope.castShadow = false;
  }
  const prop = new THREE.Group(); prop.position.set(-1.7, 0.7, 0); root.add(prop);
  for (let i = 0; i < 3; i++) {
    const p = mesh(new THREE.BoxGeometry(0.06, 0.9, 0.18), toon(0xe2b75e), 0, 0, 0, prop); p.rotation.x = i / 3 * Math.PI * 2;
  }
  addOutline(root, 0.05);
  root.userData = { prop };
  return root;
}

export function createCloud(rand, color = 0xffffff, opacity = 0.95) {
  const root = new THREE.Group();
  const m = toon(color, { transparent: opacity < 1, opacity });
  const n = 4 + Math.floor(rand() * 4);
  for (let i = 0; i < n; i++) {
    const r = 1 + rand() * 1.6;
    const s = mesh(new THREE.SphereGeometry(r, 12, 10), m, (i - n / 2) * 1.4 + rand(), rand() * 0.8, (rand() - 0.5) * 1.5);
    s.castShadow = false;
    s.scale.y = 0.7;
    root.add(s);
  }
  return root;
}

export function createLighthouse() {
  const root = new THREE.Group();
  const w = toon(0xfff1d6), r = toon(0xd9584a);
  for (let i = 0; i < 5; i++) {
    mesh(new THREE.CylinderGeometry(1.6 - i * 0.18 - 0.18, 1.6 - i * 0.18, 2.2, 16), i % 2 ? r : w, 0, 1.1 + i * 2.2, 0, root);
  }
  mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.3, 16), toon(0x4a2a1e), 0, 11.1, 0, root);
  const lamp = mesh(new THREE.CylinderGeometry(0.75, 0.75, 1.4, 12), basic(0x3b3150), 0, 11.9, 0, root);
  mesh(new THREE.ConeGeometry(1.1, 1.2, 16), r, 0, 13.2, 0, root);
  addOutline(root, 0.06);
  root.userData = { lamp };
  return root;
}

// ---------------- Geheimnisse ----------------
export function createMoonstone(collected = false) {
  const root = new THREE.Group();
  const s = new THREE.Shape();
  s.absarc(0, 0, 0.55, Math.PI * 0.25, Math.PI * 1.75, false);
  s.absarc(0.28, 0, 0.42, Math.PI * 1.62, Math.PI * 0.38, true);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.16, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 2, curveSegments: 20 });
  g.center();
  const mat = new THREE.MeshToonMaterial({ color: collected ? 0x8a9ab8 : 0xd8e8ff, emissive: collected ? 0x203040 : 0x6a9aff, emissiveIntensity: 0.8, gradientMap: T.toonGradient, transparent: collected, opacity: collected ? 0.45 : 1 });
  const m = mesh(g, mat, 0, 0, 0, root);
  m.rotation.z = 0.3;
  if (!collected) addOutline(m, 0.04);
  root.add(glowSprite(0x9ab8ff, 2.6, collected ? 0.25 : 0.8));
  return root;
}

export function createKey() {
  const root = new THREE.Group();
  const gm = toon(0xffd23f, { emissive: 0xffa000, ei: 0.5 });
  const ring = mesh(new THREE.TorusGeometry(0.28, 0.09, 8, 20), gm, 0, 0.35, 0, root);
  mesh(new THREE.BoxGeometry(0.12, 0.7, 0.12), gm, 0, -0.2, 0, root);
  mesh(new THREE.BoxGeometry(0.25, 0.1, 0.12), gm, 0.12, -0.45, 0, root);
  mesh(new THREE.BoxGeometry(0.2, 0.1, 0.12), gm, 0.1, -0.25, 0, root);
  mesh(new THREE.SphereGeometry(0.1, 8, 6), toon(0x9ff4ff, { emissive: 0x5fd8ff, ei: 1 }), 0, 0.35, 0, root);
  addOutline(root, 0.03);
  root.add(glowSprite(0xffe066, 2.2, 0.7));
  root.scale.setScalar(1.3);
  return root;
}

export function createPalm(rand) {
  const root = new THREE.Group();
  const trunkM = toon(0xa0784a);
  const n = 5;
  let x = 0, y = 0;
  for (let i = 0; i < n; i++) {
    const seg = mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.7, 7), trunkM, x, y + 0.35, 0, root);
    seg.rotation.z = -0.08 * i; x += 0.06 * i; y += 0.65;
  }
  const lm = toon(0x4fae4a);
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2 + rand();
    const l = mesh(new THREE.SphereGeometry(1, 10, 6), lm, x + Math.cos(a) * 0.9, y + 0.1, Math.sin(a) * 0.9, root);
    l.scale.set(1.0, 0.08, 0.3); l.rotation.y = -a; l.rotation.z = -0.35;
  }
  addOutline(root, 0.03);
  return root;
}

export function createCoralPlant(rand) {
  const root = new THREE.Group();
  const cols = [0xff7a8a, 0xffb36b, 0xb08aff, 0x6fe8d8];
  const m = toon(cols[Math.floor(rand() * cols.length)], { emissive: 0x401020, ei: 0.4 });
  const branch = (x, y, z, h, rz, rx, depth) => {
    const b = mesh(new THREE.CylinderGeometry(0.08 * (depth + 1), 0.12 * (depth + 1), h, 6), m, x, y + h / 2, z, root);
    b.rotation.set(rx, 0, rz);
    if (depth > 0) for (let i = 0; i < 2; i++) branch(x + Math.sin(rz) * -h * 0.5, y + h * 0.8, z, h * 0.7, rz + (i ? 0.6 : -0.6), rx + (rand() - 0.5) * 0.6, depth - 1);
    else mesh(new THREE.SphereGeometry(0.13, 6, 4), m, x - Math.sin(rz) * h, y + h, z, root);
  };
  branch(0, 0, 0, 0.8, 0, 0, 2);
  return root;
}

export function createGear(r = 2, color = 0xc9a24a) {
  const root = new THREE.Group();
  const m = toon(color, { map: T.metal });
  const ring = mesh(new THREE.TorusGeometry(r, r * 0.18, 8, 24), m, 0, 0, 0, root);
  const n = Math.round(r * 6);
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2;
    const t = mesh(new THREE.BoxGeometry(r * 0.3, r * 0.3, r * 0.25), m, Math.cos(a) * r * 1.15, Math.sin(a) * r * 1.15, 0, root);
    t.rotation.z = a;
  }
  for (let i = 0; i < 3; i++) { const sp = mesh(new THREE.BoxGeometry(r * 2, r * 0.14, r * 0.12), m, 0, 0, 0, root); sp.rotation.z = i / 3 * Math.PI; }
  addOutline(root, 0.04);
  return root;
}

export function createSnowman(rand) {
  const root = new THREE.Group();
  const w = toon(0xffffff);
  mesh(new THREE.SphereGeometry(0.6, 14, 10), w, 0, 0.55, 0, root);
  mesh(new THREE.SphereGeometry(0.42, 14, 10), w, 0, 1.3, 0, root);
  mesh(new THREE.ConeGeometry(0.07, 0.35, 8), toon(0xff8a3c), 0, 1.32, 0.45, root).rotation.x = Math.PI / 2;
  mesh(new THREE.CylinderGeometry(0.25, 0.28, 0.35, 12), toon(0x2a2a3a), 0, 1.8, 0, root);
  addOutline(root, 0.03);
  root.rotation.y = rand() * 6;
  return root;
}
