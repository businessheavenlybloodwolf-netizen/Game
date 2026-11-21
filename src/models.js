// Alle Figuren & Objekte werden aus Grundformen gebaut (eigener Stil: rundlich, Toon-Shading, Outline).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

let T = null;
const matCache = new Map();
export function setTextures(t) { T = t; }

// PC-Next-Gen (Stufen Hoch/Ultra): physikalisch basierte Materialien mit Normal-Maps, Umgebungslicht und Spiegelungen.
// Handy-Stufen behalten das klassische Toon-Shading.
let MODERN = false;
export function setModern(b) { MODERN = b; }
export function isModern() { return MODERN; }
// Oberflächen-Eigenschaften je gemalter Textur: [Rauheit, Metall, Normal-Stärke]
const SURFACE = {
  ice: [0.12, 0, 1.2], crystalTop: [0.28, 0.05, 2], crystalRock: [0.35, 0.05, 2.5], metal: [0.35, 0.75, 2],
  water: [0.15, 0, 1], snow: [0.62, 0, 1.4], snowCliff: [0.7, 0, 2.5], wood: [0.72, 0, 2.5], darkWood: [0.72, 0, 2.5],
  grass: [0.88, 0, 2.2], grassPlain: [0.88, 0, 2.2], dirt: [0.95, 0, 3], stone: [0.8, 0, 3.2], brick: [0.85, 0, 3.2],
  brickTop: [0.8, 0, 3], towerCliff: [0.9, 0, 3], basalt: [0.75, 0, 3], basaltTop: [0.7, 0, 3], sand: [0.95, 0, 1.6],
  sandstone: [0.85, 0, 3], sandTop: [0.85, 0, 2.6], coral: [0.6, 0, 2.5], seaRock: [0.7, 0, 3], clockTop: [0.6, 0.2, 2.6],
  checker: [0.5, 0, 0.6], cloth: [0.95, 0, 1.5], clothRed: [0.95, 0, 1.5], cloudSea: [1, 0, 0], fog: [0.9, 0, 0.8], fogGray: [0.9, 0, 0.8],
  lava: [0.5, 0, 2],
};
export function pbrMaterial(p, opts = {}) {
  const name = p.map && p.map.userData ? p.map.userData.name : null;
  const sf = SURFACE[name];
  const glow = p.emissive && new THREE.Color(p.emissive).getHex() !== 0 && (p.emissiveIntensity ?? 1) > 0.25;
  const m = new THREE.MeshStandardMaterial({
    color: p.color, map: p.map || null,
    emissive: p.emissive || 0x000000, emissiveIntensity: p.emissiveIntensity ?? 1,
    transparent: !!p.transparent, opacity: p.opacity ?? 1,
    // ohne Textur: weicher „Vinyl-Spielzeug“-Look; leuchtende Teile glänzen wie Glas/Edelstein
    roughness: opts.rough ?? (sf ? sf[0] : glow ? 0.18 : 0.5),
    metalness: opts.metal ?? (sf ? sf[1] : 0),
  });
  if (sf && sf[2] > 0 && p.map) {
    const nm = NORMAL_FN && NORMAL_FN(p.map, sf[2]);
    if (nm) { m.normalMap = nm; m.normalScale.set(1, 1); }
  }
  return m;
}
let NORMAL_FN = null;
export function setNormalMapper(fn) { NORMAL_FN = fn; }
// Ersatz für „new MeshToonMaterial({...})“: wählt je nach Grafikstufe Toon oder PBR
export function surfaceMat(p, opts) {
  if (MODERN) return pbrMaterial(p, opts);
  return new THREE.MeshToonMaterial({ ...p, gradientMap: T.toonGradient });
}

export function toon(color, opts = {}) {
  const key = JSON.stringify([color, opts.map ? opts.map.uuid : 0, opts.emissive || 0, opts.ei || 0, opts.transparent || 0, opts.opacity || 1, opts.rough ?? -1]);
  if (matCache.has(key) && !opts.unique) return matCache.get(key);
  const p = {
    color, map: opts.map || null,
    emissive: opts.emissive || 0x000000, emissiveIntensity: opts.ei ?? 1,
    transparent: !!opts.transparent, opacity: opts.opacity ?? 1,
  };
  const m = MODERN ? pbrMaterial(p, opts) : new THREE.MeshToonMaterial({ ...p, gradientMap: T.toonGradient });
  if (!opts.unique) matCache.set(key, m);
  return m;
}

export function basic(color, opts = {}) {
  return new THREE.MeshBasicMaterial({ color, transparent: !!opts.transparent, opacity: opts.opacity ?? 1, blending: opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending, depthWrite: !opts.additive && !opts.transparent, side: opts.side || THREE.FrontSide, map: opts.map || null });
}

const outlineMat = new THREE.MeshBasicMaterial({ color: 0x1a1020, side: THREE.BackSide });

// Verschmilzt alle Meshes einer Gruppe (ohne die in "skip") pro Material zu je einem Mesh – weniger Draw Calls
let BATCH = true;
export function setBatching(b) { BATCH = b; }

// PC-Next-Gen: runde Formen feiner unterteilen (glatte Silhouetten statt sichtbarer Kanten).
// Absichtlich kantige Formen (Kristalle mit 4–7 Seiten) bleiben, wie sie sind.
const refineCache = new Map();
const CTORS = { SphereGeometry: THREE.SphereGeometry, CylinderGeometry: THREE.CylinderGeometry, ConeGeometry: THREE.ConeGeometry, TorusGeometry: THREE.TorusGeometry, CapsuleGeometry: THREE.CapsuleGeometry };
function untouched(g) {
  const C = CTORS[g.type];
  const ref = new C(...Object.values(g.parameters));
  const a = g.attributes.position.array, b = ref.attributes.position.array, ua = g.attributes.uv && g.attributes.uv.array, ub = ref.attributes.uv.array;
  let ok = a.length === b.length;
  for (const i of [0, 1, 2, a.length >> 1, (a.length >> 1) + 1, a.length - 1, a.length - 4]) if (ok && Math.abs(a[i] - b[i]) > 1e-4) ok = false;
  if (ok && ua) for (const i of [0, 1, ua.length >> 1, ua.length - 1, ua.length - 3]) if (Math.abs(ua[i] - ub[i]) > 1e-4) ok = false;
  ref.dispose();
  return ok;
}
function refinedGeo(g) {
  if (refineCache.has(g.uuid)) return refineCache.get(g.uuid);
  const p = g.parameters || {};
  let n = null;
  if (g.type === 'SphereGeometry' && p.widthSegments < 32 && p.widthSegments >= 8) {
    n = new THREE.SphereGeometry(p.radius, Math.max(32, p.widthSegments * 2), Math.max(20, p.heightSegments * 2), p.phiStart, p.phiLength, p.thetaStart, p.thetaLength);
  } else if (g.type === 'CylinderGeometry' && p.radialSegments >= 8 && p.radialSegments < 28) {
    n = new THREE.CylinderGeometry(p.radiusTop, p.radiusBottom, p.height, 28, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength);
  } else if (g.type === 'ConeGeometry' && p.radialSegments >= 8 && p.radialSegments < 28) {
    n = new THREE.ConeGeometry(p.radius, p.height, 28, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength);
  } else if (g.type === 'TorusGeometry' && p.radialSegments >= 6 && p.tubularSegments < 48) {
    n = new THREE.TorusGeometry(p.radius, p.tube, Math.max(12, p.radialSegments * 2), Math.max(48, p.tubularSegments * 2), p.arc);
  } else if (g.type === 'CapsuleGeometry' && p.radialSegments < 20) {
    n = new THREE.CapsuleGeometry(p.radius, p.length, Math.max(8, p.capSegments * 2), 20);
  }
  if (n && g.groups.length > 1) n = null; // Mehrfach-Materialien nicht anfassen
  if (n && !untouched(g)) n = null;         // nachträglich verformte oder neu gemappte Geometrie behalten
  refineCache.set(g.uuid, n);
  return n;
}
export function refine(root) {
  if (!MODERN) return root;
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || Array.isArray(o.material) || o.userData.noRefine) return;
    const n = refinedGeo(o.geometry);
    if (n) o.geometry = n;
  });
  return root;
}

export function compactGroup(group, skip = []) {
  refine(group);
  if (!BATCH) return group;
  group.updateMatrixWorld(true);
  const inv = group.matrixWorld.clone().invert();
  const skipSet = new Set();
  for (const sk of skip) sk.traverse((o) => skipSet.add(o));
  const buckets = new Map();
  const remove = [];
  group.traverse((o) => {
    if (!o.isMesh || skipSet.has(o) || o === group) return;
    const mat = o.material;
    if (Array.isArray(mat)) return;
    const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (!g.attributes.normal) g.computeVertexNormals();
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    const key = mat.uuid + '|' + o.castShadow;
    if (!buckets.has(key)) buckets.set(key, { mat, cast: o.castShadow, geos: [] });
    buckets.get(key).geos.push(g);
    remove.push(o);
  });
  for (const o of remove) if (o.parent) o.parent.remove(o);
  for (const b of buckets.values()) {
    const m = new THREE.Mesh(mergeGeometries(b.geos, false), b.mat);
    m.castShadow = b.cast;
    m.userData.noOutline = true;
    group.add(m);
  }
  return group;
}

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
    const s = 1 + thickness * (MODERN ? 0.7 : 1) / r;
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
  const m = toon(tint ?? 0x8f72c8, { map: tint ? T.fogGray : T.fog });
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
  compactGroup(body);
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
  compactGroup(body);
  root.userData = { body };
  return root;
}

export function createFlatterling(tint) {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const m = toon(tint ?? 0x5b3f8f, { map: tint ? T.fogGray : T.fog });
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
  compactGroup(body, wings);
  root.userData = { body, wings };
  return root;
}

export function createBoss(cfg = {}) {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const style = cfg.style || 'crown';
  const base = new THREE.Color(cfg.color ?? 0x9a7ad8);
  const m = toon(base.getHex(), { map: cfg.color ? T.fogGray : T.fog, emissive: base.clone().multiplyScalar(0.18).getHex(), ei: 1, unique: true });
  m.userData.baseEmissive = m.emissive.getHex();
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
  const gemM = surfaceMat({ color: 0xbff7ff, emissive: 0x55e0ff, emissiveIntensity: 1.2 }, { rough: 0.1, metal: 0.1 });
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
  const gm = surfaceMat({ color: 0xd8fbff, emissive: 0x5fd8ff, emissiveIntensity: 1.0 }, { rough: 0.1, metal: 0.1 });
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
  compactGroup(root, [lamp]);
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
  compactGroup(pad); compactGroup(root, [pad]);
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

// ---------------- Luftschiffe ----------------
// Bootsrumpf als eigene Geometrie: spitzer, hochgezogener Bug, runderes Heck, gewölbter Kiel
function hullGeometry(L, W, D) {
  const nU = 28, nA = 14, pos = [], uv = [], idx = [];
  const shape = (u) => {
    const s = u * 2 - 1;
    const w = W * Math.pow(Math.max(0, 1 - Math.pow(Math.abs(s), s > 0 ? 2.2 : 3.6)), 0.55);
    const d = D * (0.55 + 0.45 * (1 - s * s));
    const sheer = 0.22 * s * s + (s > 0 ? 0.3 * s * s * s : 0);
    return { x: s * L / 2, w, d, sheer };
  };
  for (let i = 0; i <= nU; i++) {
    const h = shape(i / nU);
    for (let j = 0; j <= nA; j++) {
      const a = j / nA * Math.PI;
      pos.push(h.x, h.sheer - h.d * Math.pow(Math.sin(a), 0.85), h.w * Math.cos(a));
      uv.push(h.x / 1.2, j / nA * 2.2);
    }
  }
  for (let i = 0; i < nU; i++) for (let j = 0; j < nA; j++) {
    const a = i * (nA + 1) + j, b = a + nA + 1;
    idx.push(a, a + 1, b, b, a + 1, b + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  // Wicklung prüfen: Kielmitte muss nach unten zeigen
  const mid = (nU >> 1) * (nA + 1) + (nA >> 1);
  if (g.attributes.normal.getY(mid) > 0) { for (let k = 0; k < idx.length; k += 3) { const t = idx[k]; idx[k] = idx[k + 1]; idx[k + 1] = t; } g.setIndex(idx); g.computeVertexNormals(); }
  // Deck
  const dp = [], du = [], di = [];
  for (let i = 0; i <= nU; i++) {
    const h = shape(i / nU);
    dp.push(h.x, h.sheer - 0.05, h.w * 0.97, h.x, h.sheer - 0.05, -h.w * 0.97);
    du.push(h.x / 1.1, h.w * 0.97 / 1.1, h.x / 1.1, -h.w * 0.97 / 1.1);
    if (i < nU) { const a = i * 2; di.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const deck = new THREE.BufferGeometry();
  deck.setAttribute('position', new THREE.Float32BufferAttribute(dp, 3));
  deck.setAttribute('uv', new THREE.Float32BufferAttribute(du, 2));
  deck.setIndex(di);
  deck.computeVertexNormals();
  if (deck.attributes.normal.getY(2) < 0) { for (let k = 0; k < di.length; k += 3) { const t = di[k]; di[k] = di[k + 1]; di[k + 1] = t; } deck.setIndex(di); deck.computeVertexNormals(); }
  return { hull: g, deck, shape };
}

// Stab zwischen zwei Punkten (Seile, Streben)
function rod(a, b, r, mat, parent) {
  const d = new THREE.Vector3().subVectors(b, a), len = d.length();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 6), mat);
  m.position.copy(a).addScaledVector(d, 0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  m.castShadow = false;
  parent.add(m);
  return m;
}

function fin(points, depth, mat) {
  const sh = new THREE.Shape();
  sh.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) sh.lineTo(points[i][0], points[i][1]);
  sh.closePath();
  const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 1 });
  g.translate(0, 0, -depth / 2);
  const m = new THREE.Mesh(g, mat); m.castShadow = true;
  return m;
}

// Luftschiff mit Bootsrumpf, Deck, Reling, Bullaugen, Kajüte, Federflügeln, Ballon mit Spanten und Leitwerk.
// hero = die „Leuchtfeder“: zusätzlich Laternenmast am Bug (userData.lampAnchor) und eine leuchtende Feder als Galionsfigur.
export function createAirship(rand, hero = false) {
  const root = new THREE.Group();
  const wood = toon(0xffffff, { map: T.wood }), dark = toon(0x8a5a3a, { map: T.darkWood });
  const gold = toon(0xe8c070, { rough: 0.3, metal: 0.85 }), ropeM = toon(0x5a3a22);
  const glass = toon(0xfff1c0, { emissive: 0xffb040, ei: 0.9 });
  const clothMap = hero ? T.clothRed : (rand() < 0.5 ? T.clothRed : T.cloth);
  const cloth = toon(0xffffff, { map: clothMap }), sail = toon(0xfff6e8, { map: T.cloth });
  const L = 3.8, W = 0.78, D = 0.95, DY = 0.95;
  const { hull, deck, shape } = hullGeometry(L, W, D);
  const ship = new THREE.Group(); ship.position.y = DY; root.add(ship);
  const hm = new THREE.Mesh(hull, dark); hm.castShadow = true; ship.add(hm);
  const dm = new THREE.Mesh(deck, wood); dm.receiveShadow = true; ship.add(dm);
  const at = (u) => shape(u);
  // Reling, Zierleiste und Pfosten
  for (const sd of [1, -1]) {
    const rail = [], trim = [];
    for (let i = 2; i <= 26; i++) { const h = at(i / 28); rail.push(new THREE.Vector3(h.x, h.sheer + 0.32, sd * h.w * 0.96)); trim.push(new THREE.Vector3(h.x, h.sheer - 0.1, sd * h.w * 1.01)); }
    const rm = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rail), 40, 0.035, 6), gold); ship.add(rm);
    const tm = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(trim), 40, 0.045, 6), gold); ship.add(tm);
    for (let i = 3; i <= 25; i += 3) { const h = at(i / 28); rod(new THREE.Vector3(h.x, h.sheer - 0.04, sd * h.w * 0.96), new THREE.Vector3(h.x, h.sheer + 0.32, sd * h.w * 0.96), 0.025, wood, ship); }
    // Bullaugen
    for (const u of [0.32, 0.45, 0.58, 0.7]) {
      const h = at(u);
      const ph = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.06, 14), glass);
      ph.rotation.x = Math.PI / 2; ph.position.set(h.x, h.sheer - 0.36, sd * h.w * 0.9); ship.add(ph);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.022, 6, 16), gold); ring.position.copy(ph.position); ring.position.z += sd * 0.03; ship.add(ring);
    }
    // Federflügel an den Seiten
    // Federflügel: vier Federn fächern seitlich nach außen und leicht nach oben
    const wing = new THREE.Group(); wing.position.set(0.2, -0.05, sd * (W - 0.02)); wing.rotation.x = sd * -0.3; ship.add(wing);
    for (let k = 0; k < 4; k++) {
      const f = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10), k % 2 ? sail : cloth);
      const len = 0.62 - k * 0.08;
      f.scale.set(0.15, 0.03, len);
      f.position.set(-k * 0.2 - Math.sin(0.35 + k * 0.22) * len, 0, sd * Math.cos(0.35 + k * 0.22) * len);
      f.rotation.y = sd * (0.35 + k * 0.22);
      f.castShadow = true; wing.add(f);
    }
  }
  // Kajüte am Heck mit Dach, Fenster und Schornstein
  const hk = at(0.3);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.55, 0.9), wood); cab.position.set(hk.x + 0.1, hk.sheer + 0.22, 0); cab.castShadow = true; ship.add(cab);
  const roof = fin([[-0.62, 0], [0.62, 0], [0, 0.38]], 1.05, toon(0xb84a3a)); roof.rotation.y = 0;
  roof.position.set(hk.x + 0.1, hk.sheer + 0.5, 0); ship.add(roof);
  for (const sd of [1, -1]) { const win = new THREE.Mesh(new THREE.CircleGeometry(0.12, 16), glass); win.position.set(hk.x + 0.1, hk.sheer + 0.26, sd * 0.452); if (sd < 0) win.rotation.y = Math.PI; ship.add(win); }
  const chim = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.45, 10), gold); chim.position.set(hk.x - 0.15, hk.sheer + 0.85, 0.2); ship.add(chim);
  // Heck: Ruder und Propeller
  const st = at(0.02);
  const rud = fin([[0, 0], [-0.45, 0.05], [-0.5, -0.55], [-0.05, -0.45]], 0.05, dark); rud.position.set(st.x + 0.15, st.sheer - 0.15, 0); ship.add(rud);
  const prop = new THREE.Group(); prop.position.set(-L / 2 - 0.25, DY + st.sheer - 0.2, 0); root.add(prop);
  const hub = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), gold); prop.add(hub);
  for (let i = 0; i < 3; i++) {
    const bl = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 8), wood); bl.scale.set(0.05, 0.42, 0.13);
    const arm = new THREE.Group(); arm.rotation.x = i / 3 * Math.PI * 2; bl.position.y = 0.42; bl.rotation.y = 0.5; arm.add(bl); prop.add(arm);
  }
  rod(new THREE.Vector3(-L / 2 + 0.2, DY + st.sheer - 0.2, 0), new THREE.Vector3(-L / 2 - 0.25, DY + st.sheer - 0.2, 0), 0.04, gold, root);
  // Bug: Galionsfigur – eine leuchtende Feder
  const bw = at(0.985);
  const feather = new THREE.Group(); feather.position.set(bw.x + 0.05, bw.sheer + 0.05, 0); feather.rotation.z = -0.9; ship.add(feather);
  const fq = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10), hero ? toon(0xffe8a0, { emissive: 0xffb040, ei: 0.6 }) : gold);
  fq.scale.set(0.12, 0.55, 0.05); fq.position.y = 0.45; feather.add(fq);
  rod(new THREE.Vector3(0, -0.05, 0), new THREE.Vector3(0, 0.95, 0), 0.018, gold, feather);
  // Ballon mit Spanten, Bugkappe und Leitwerk
  const EY = 3.55, ER = 1.3, EL = 3.1;
  const env = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), cloth); env.scale.set(EL, ER, ER); env.position.y = EY; env.castShadow = true; root.add(env);
  const band = toon(0x5a3424);
  for (const x of [-1.9, -0.65, 0.65, 1.9]) {
    const r = ER * Math.sqrt(Math.max(0, 1 - (x / EL) ** 2)) + 0.015;
    const t = new THREE.Mesh(new THREE.TorusGeometry(r, 0.035, 6, 36), band); t.rotation.y = Math.PI / 2; t.position.set(x, EY, 0); root.add(t);
  }
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 10), gold); tip.position.set(EL - 0.04, EY, 0); root.add(tip);
  const finTop = fin([[0, 0], [-0.9, 0], [-1.15, 0.85], [-0.55, 0.85]], 0.06, sail);
  finTop.position.set(-EL + 0.75, EY + ER * 0.55, 0); root.add(finTop);
  for (const sd of [1, -1]) {
    const f = fin([[0, 0], [-0.9, 0], [-1.15, 0.75], [-0.55, 0.75]], 0.06, sail);
    f.position.set(-EL + 0.75, EY, sd * ER * 0.55); f.rotation.x = sd * Math.PI / 2; root.add(f);
  }
  // Takelage: Seile vom Ballon zum Deck
  for (const x of [-1.5, -0.5, 0.6, 1.4]) {
    const u = (x / L) + 0.5, h = at(Math.min(0.97, Math.max(0.03, u)));
    const ry = EY - ER * Math.sqrt(Math.max(0, 1 - (x / EL) ** 2)) * 0.92;
    for (const sd of [1, -1]) rod(new THREE.Vector3(x, ry, sd * 0.45), new THREE.Vector3(h.x, DY + h.sheer + 0.3, sd * h.w * 0.9), 0.018, ropeM, root);
  }
  // Leuchtfeder: Laternenmast am Bug
  let lampAnchor = null;
  if (hero) {
    const mh = at(0.78);
    rod(new THREE.Vector3(mh.x, DY + mh.sheer - 0.05, 0), new THREE.Vector3(mh.x, DY + mh.sheer + 1.25, 0), 0.05, gold, root);
    const arm = rod(new THREE.Vector3(mh.x, DY + mh.sheer + 1.2, 0), new THREE.Vector3(mh.x + 0.45, DY + mh.sheer + 1.2, 0), 0.03, gold, root); void arm;
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.2, 12), gold); cap.position.set(mh.x + 0.45, DY + mh.sheer + 1.08, 0); root.add(cap);
    lampAnchor = new THREE.Group(); lampAnchor.position.set(mh.x + 0.45, DY + mh.sheer + 0.82, 0); root.add(lampAnchor);
  }
  addOutline(root, 0.035);
  compactGroup(root, lampAnchor ? [prop, lampAnchor] : [prop]);
  root.userData = { prop, lampAnchor };
  return root;
}

export function createCloud(rand, color = 0xffffff, opacity = 0.95) {
  // alle Kugeln einer Wolke zu einem Mesh verschmolzen (1 Draw Call pro Wolke)
  const m = toon(color, { transparent: opacity < 1, opacity });
  const n = 4 + Math.floor(rand() * 4);
  const geos = [];
  for (let i = 0; i < n; i++) {
    const r = 1 + rand() * 1.6;
    const g = new THREE.SphereGeometry(r, 12, 10);
    g.scale(1, 0.7, 1);
    g.translate((i - n / 2) * 1.4 + rand(), rand() * 0.8, (rand() - 0.5) * 1.5);
    geos.push(g);
  }
  if (!BATCH) {
    const root = new THREE.Group();
    for (const g of geos) { const sm = new THREE.Mesh(g, m); sm.castShadow = false; root.add(sm); }
    return root;
  }
  const merged = mergeGeometries(geos, false);
  const root = new THREE.Mesh(merged, m);
  root.castShadow = false;
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
  const mat = surfaceMat({ color: collected ? 0x8a9ab8 : 0xd8e8ff, emissive: collected ? 0x203040 : 0x6a9aff, emissiveIntensity: 0.8, transparent: collected, opacity: collected ? 0.45 : 1 }, { rough: 0.12, metal: 0.1 });
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

// Glimmlinge: die kleinen Laternenleute von Lumeria
export function createGlimmling(color = 0xffb3d1) {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const paper = toon(color, { emissive: color, ei: 0.15 });
  const S = new THREE.SphereGeometry(1, 18, 12);
  const b = mesh(S, paper, 0, 0.45, 0, body); b.scale.set(0.36, 0.38, 0.36);
  const rib = toon(0x6a3e22);
  const t1 = mesh(new THREE.TorusGeometry(0.35, 0.02, 6, 24), rib, 0, 0.45, 0, body); t1.rotation.x = Math.PI / 2; t1.userData.noOutline = true;
  mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.08, 12), toon(0x4a2a1e), 0, 0.84, 0, body);
  // Mütze
  const hat = mesh(new THREE.ConeGeometry(0.24, 0.45, 12), toon(0x2fb5a8), 0, 1.08, 0, body); hat.rotation.z = 0.25;
  mesh(new THREE.SphereGeometry(0.07, 8, 6), toon(0xfff1d6), -0.1, 1.3, 0, body);
  const eyeM = toon(0x1a1020);
  for (const sx of [-1, 1]) {
    const e = mesh(S, eyeM, sx * 0.11, 0.5, 0.32, body); e.scale.set(0.045, 0.065, 0.03); e.userData.noOutline = true;
    const c = mesh(S, toon(0xff9aa8), sx * 0.2, 0.4, 0.27, body); c.scale.set(0.05, 0.03, 0.02); c.userData.noOutline = true;
    const f = mesh(S, toon(0x4a2a1e), sx * 0.13, 0.06, 0.03, root); f.scale.set(0.09, 0.06, 0.12);
  }
  addOutline(body, 0.03);
  compactGroup(body);
  root.add(glowSprite(0xffd090, 1.6, 0.35));
  root.userData = { body };
  return root;
}

// ================= Eigene Boss-Modelle =================
function bossMat(color, map = true) {
  const c = new THREE.Color(color);
  const m = toon(c.getHex(), { map: map ? T.fogGray : null, emissive: c.clone().multiplyScalar(0.18).getHex(), ei: 1, unique: true });
  m.userData.baseEmissive = m.emissive.getHex();
  return m;
}
function bossEyes(parent, y, z, spread, size, pupil = 0xff3b5c) {
  const S = new THREE.SphereGeometry(1, 14, 10);
  for (const sx of [-1, 1]) {
    const e = mesh(S, toon(0xfff4d8), sx * spread, y, z, parent); e.scale.set(size, size * 1.15, size * 0.5);
    const p = mesh(S, basic(pupil), sx * spread * 0.96, y - size * 0.1, z + size * 0.42, parent); p.scale.setScalar(size * 0.42); p.userData.noOutline = true;
    const b = mesh(new THREE.BoxGeometry(size * 2.1, size * 0.4, size * 0.4), toon(0x1a0f2a), sx * spread, y + size * 1.15, z + 0.05, parent); b.rotation.z = sx * 0.35; b.userData.noOutline = true;
  }
}

// 1 · Moderich: welke Riesenknolle mit Blätterkranz
export function createBulbBoss(cfg) {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const m = bossMat(cfg.color);
  const bulb = mesh(new THREE.SphereGeometry(1.5, 24, 16), m, 0, 1.3, 0, body); bulb.scale.set(1, 0.88, 1);
  mesh(new THREE.CylinderGeometry(0.75, 0.95, 0.6, 14), toon(0x4a7a2a), 0, 0.3, 0, body);
  bossEyes(body, 1.55, 1.25, 0.5, 0.3);
  const mouth = mesh(new THREE.SphereGeometry(1, 16, 10), toon(0x2a140a), 0, 0.95, 1.3, body); mouth.scale.set(0.6, 0.25, 0.2);
  const leafM = toon(cfg.accent ?? 0x5a9a3a);
  const leaves = new THREE.Group(); leaves.position.y = 2.5; body.add(leaves);
  for (let i = 0; i < 7; i++) {
    const a = i / 7 * Math.PI * 2;
    const lf = mesh(new THREE.SphereGeometry(1, 10, 8), leafM, Math.cos(a) * 0.55, 0.15, Math.sin(a) * 0.55, leaves);
    lf.scale.set(0.3, 0.1, 0.9); lf.rotation.y = -a + Math.PI / 2; lf.rotation.x = 0.7;
  }
  const petalM = toon(0xd0a060);
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * Math.PI * 2 + 0.3;
    const p = mesh(new THREE.SphereGeometry(1, 8, 6), petalM, Math.cos(a) * 1.45, 1.6, Math.sin(a) * 1.45, body);
    p.scale.set(0.45, 0.1, 0.3); p.rotation.y = -a; p.rotation.z = -0.9;
  }
  addOutline(bulb, 0.06);
  root.userData = { body, leaves, mats: [m] };
  return root;
}

// 2 · Splitterzahn: vierbeiniges Kristallwesen
export function createCrystalBeast(cfg) {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const m = bossMat(cfg.color);
  const cr = toon(0x9ff4ff, { emissive: 0x3fb8ff, ei: 0.7 });
  const torso = mesh(new THREE.SphereGeometry(1, 22, 14), m, 0, 1.6, 0, body); torso.scale.set(1.6, 1.1, 2.2);
  const head = new THREE.Group(); head.position.set(0, 1.9, 2.1); body.add(head);
  const hd = mesh(new THREE.SphereGeometry(0.95, 18, 12), m, 0, 0, 0, head); hd.scale.set(1, 0.9, 1.1);
  bossEyes(head, 0.25, 0.75, 0.38, 0.22, 0xff8a2a);
  for (const sx of [-1, 1]) { const h = mesh(new THREE.ConeGeometry(0.22, 1.3, 7), cr, sx * 0.45, 0.55, 0.6, head); h.rotation.x = 1.1; h.rotation.z = -sx * 0.3; }
  for (let i = 0; i < 4; i++) { const s = mesh(new THREE.ConeGeometry(0.35, 1.3 - i * 0.15, 6), cr, 0, 2.6, 0.9 - i * 0.75, body); s.rotation.x = -0.3; }
  const legs = [];
  for (const [sx, sz] of [[-1, 1], [1, 1], [-1, -1], [1, -1]]) {
    const piv = new THREE.Group(); piv.position.set(sx * 1.0, 1.1, sz * 1.3); body.add(piv);
    mesh(new THREE.CylinderGeometry(0.3, 0.36, 1.2, 8), m, 0, -0.6, 0, piv);
    legs.push(piv);
  }
  addOutline(torso, 0.06); addOutline(hd, 0.05);
  root.userData = { body, legs, head, mats: [m] };
  return root;
}

// 3 · Kapitän Dunstbart auf seinem Nebel-Luftschiff
export function createSkyShip(cfg) {
  const root = new THREE.Group();
  const wood = toon(0x9a6438, { map: T.wood });
  const hull = mesh(new THREE.BoxGeometry(5.5, 1.3, 2.4), wood, 0, 0, 0, root);
  mesh(new THREE.BoxGeometry(1.2, 1.0, 2.0), wood, 2.9, 0.15, 0, root).rotation.z = 0.5;
  const bal = mesh(new THREE.SphereGeometry(1, 24, 14), toon(0xffffff, { map: T.clothRed }), 0, 4.2, 0, root); bal.scale.set(3.6, 1.8, 1.9);
  for (const sx of [-1.6, 1.6]) mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 4), toon(0x3a2614), sx, 2.0, 0, root);
  const cannon = mesh(new THREE.CylinderGeometry(0.3, 0.38, 1.6, 12), toon(0x2a2a3a), 0.6, 0.6, 1.2, root); cannon.rotation.x = Math.PI / 2;
  const capM = bossMat(cfg.color);
  const cap = new THREE.Group(); cap.position.set(-1, 0.65, 0); root.add(cap);
  const cb = mesh(new THREE.SphereGeometry(0.85, 18, 12), capM, 0, 0.75, 0, cap);
  bossEyes(cap, 0.95, 0.68, 0.28, 0.17);
  mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.1, 18), toon(0x2a1a10), 0, 1.5, 0, cap);
  mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.6, 14), toon(0x2a1a10), 0, 1.85, 0, cap);
  const beard = mesh(new THREE.SphereGeometry(0.5, 12, 8), toon(0xd8d0f0, { transparent: true, opacity: 0.85 }), 0, 0.35, 0.55, cap); beard.scale.set(1.2, 0.8, 0.6); beard.userData.noOutline = true;
  const prop = new THREE.Group(); prop.position.set(-3, 0.2, 0); root.add(prop);
  for (let i = 0; i < 3; i++) { const p = mesh(new THREE.BoxGeometry(0.08, 1.4, 0.3), toon(0xe2b75e), 0, 0, 0, prop); p.rotation.x = i / 3 * Math.PI * 2; }
  addOutline(hull, 0.05); addOutline(cb, 0.04);
  root.userData = { captain: cap, cannon, prop, mats: [capM] };
  return root;
}

// 4 · Schwelgrimm: Magma-Golem mit schwebenden Fäusten
export function createMagmaGolem(cfg) {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const m = toon(0x3a2424, { map: T.basalt, emissive: 0x401008, ei: 1, unique: true }); m.userData.baseEmissive = 0x401008;
  const glow = toon(0xffb02e, { emissive: 0xff6a1a, ei: 1 });
  const torso = mesh(new THREE.DodecahedronGeometry(2.0, 1), m, 0, 3.2, 0, body); torso.scale.set(1, 1.15, 0.85);
  const core = mesh(new THREE.SphereGeometry(0.6, 12, 8), glow, 0, 3.4, 1.55, body); core.add(glowSprite(0xff8a2a, 3, 0.7));
  const head = mesh(new THREE.DodecahedronGeometry(0.95, 0), m, 0, 5.6, 0.2, body);
  bossEyes(body, 5.65, 0.95, 0.35, 0.2, 0xffd23f);
  for (const sx of [-1, 1]) { const h = mesh(new THREE.ConeGeometry(0.28, 1.1, 6), glow, sx * 0.7, 6.4, 0.1, body); h.rotation.z = -sx * 0.5; }
  for (const sx of [-1, 1]) mesh(new THREE.CylinderGeometry(0.6, 0.75, 1.6, 8), m, sx * 0.9, 0.8, 0, body);
  const fists = [];
  for (const sx of [-1, 1]) {
    const f = new THREE.Group(); root.add(f);
    const fm = mesh(new THREE.DodecahedronGeometry(1.1, 1), m, 0, 0, 0, f);
    const knuckle = mesh(new THREE.SphereGeometry(0.45, 10, 8), glow, 0, -0.2, 0.75, f); knuckle.userData.noOutline = true;
    addOutline(fm, 0.05);
    f.position.set(sx * 3.6, 3.3, 0.6);
    fists.push(f);
  }
  addOutline(torso, 0.07); addOutline(head, 0.05);
  root.userData = { body, fists, mats: [m], glow };
  return root;
}

// 5 · Frierich: eisiger Schlittschuhläufer
export function createFrostBoss(cfg) {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const m = bossMat(cfg.color);
  const b = mesh(new THREE.SphereGeometry(1.6, 24, 16), m, 0, 1.75, 0, body);
  bossEyes(body, 2.15, 1.42, 0.5, 0.28, 0x3a7aff);
  const iceM = toon(0xe8f8ff, { emissive: 0x7fd8ff, ei: 0.5 });
  for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2; const c = mesh(new THREE.ConeGeometry(0.22, 1.1, 6), iceM, Math.cos(a) * 0.8, 3.45, Math.sin(a) * 0.8, body); c.rotation.z = -Math.cos(a) * 0.35; c.rotation.x = Math.sin(a) * 0.35; }
  const scarf = mesh(new THREE.TorusGeometry(1.25, 0.2, 8, 24), toon(0x2f7ad8), 0, 2.85, 0, body); scarf.rotation.x = Math.PI / 2;
  for (const sx of [-1, 1]) {
    mesh(new THREE.BoxGeometry(0.5, 0.3, 1.1), toon(0x2a2a3a), sx * 0.7, 0.3, 0, body);
    mesh(new THREE.BoxGeometry(0.08, 0.12, 1.5), toon(0xd8e8ff), sx * 0.7, 0.06, 0.1, body);
  }
  addOutline(b, 0.06);
  root.userData = { body, mats: [m] };
  return root;
}

// 6 · Sandflüsterer: Sandwurm aus Segmenten mit leuchtendem Schwanz
export function createSandworm(cfg) {
  const root = new THREE.Group();
  const m = bossMat(cfg.color);
  const head = new THREE.Group(); root.add(head);
  const h = mesh(new THREE.SphereGeometry(1.5, 20, 14), m, 0, 0, 0, head); h.scale.set(1, 1.1, 1);
  bossEyes(head, 0.6, 1.2, 0.55, 0.27, 0xffb02e);
  const jawM = toon(0xfff1d6);
  for (const sx of [-1, 1]) { const j = mesh(new THREE.ConeGeometry(0.28, 1.4, 6), jawM, sx * 0.7, -0.5, 1.3, head); j.rotation.x = 1.2; j.rotation.z = sx * 0.4; }
  const crown = toon(cfg.accent ?? 0x6a4a2a);
  for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI - Math.PI / 2; mesh(new THREE.ConeGeometry(0.2, 0.8, 6), crown, Math.sin(a) * 0.9, 1.5, Math.cos(a) * -0.3, head); }
  addOutline(h, 0.05);
  const segs = [];
  for (let i = 0; i < 8; i++) {
    const r = 1.3 - i * 0.08;
    const sg = mesh(new THREE.SphereGeometry(r, 16, 10), m, 0, -100, 0, root);
    if (i % 2) { const ring = mesh(new THREE.TorusGeometry(r * 0.95, 0.1, 6, 20), crown, 0, 0, 0, sg); ring.rotation.x = Math.PI / 2; }
    segs.push({ mesh: sg, r });
  }
  const tail = new THREE.Group(); root.add(tail);
  mesh(new THREE.ConeGeometry(0.6, 1.8, 10), m, 0, 0.9, 0, tail);
  const gem = mesh(new THREE.OctahedronGeometry(0.45), toon(0xfff3b0, { emissive: 0xffc23a, ei: 1 }), 0, 1.9, 0, tail);
  gem.add(glowSprite(0xffd23f, 2.6, 0.9));
  root.userData = { head, segs, tail, gem, mats: [m] };
  return root;
}

// 7 · Tiefenschlund: Riesenkrake
export function createSquid(cfg) {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const m = bossMat(cfg.color);
  const mantle = mesh(new THREE.SphereGeometry(1, 24, 16), m, 0, 0, 0, body); mantle.scale.set(2.2, 2.4, 2.2);
  const fin = toon(cfg.accent ?? 0xff7a9a);
  for (const sx of [-1, 1]) { const f = mesh(new THREE.SphereGeometry(1, 10, 8), fin, sx * 1.8, 1.5, 0, body); f.scale.set(0.9, 0.5, 0.15); f.rotation.z = sx * 0.6; }
  bossEyes(body, -0.4, 1.95, 0.85, 0.42, 0x6fe8d8);
  const tentacles = [];
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2;
    const piv = new THREE.Group(); piv.position.set(Math.cos(a) * 1.3, -1.9, Math.sin(a) * 1.3); body.add(piv);
    const t1 = mesh(new THREE.CylinderGeometry(0.32, 0.12, 3.2, 8), i % 2 ? m : fin, 0, -1.6, 0, piv);
    piv.userData.a = a; tentacles.push(piv);
    void t1;
  }
  addOutline(mantle, 0.07);
  root.userData = { body, tentacles, mats: [m] };
  return root;
}
