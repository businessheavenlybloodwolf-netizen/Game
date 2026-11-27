// Runde, organische Grundformen für die Welt (statt kantiger Zylinder, Kegel und Pyramiden).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// Plattform-Zylinder mit abgerundeter Oberkante. Gruppen wie bei CylinderGeometry: 0 = Seite, 1 = Oberseite (inkl. Rundung), 2 = Unterseite.
// Oben und an der Rundung sind die UVs weltbezogen (x/z), damit Gras und Pflaster nahtlos weiterlaufen.
export function roundPlatform(r, rb, h, seg, ox, oy, oz, tile = 4) {
  const bevel = Math.min(0.45, r * 0.14, h * 0.3);
  const pos = [], nor = [], uv = [], idx = [];
  const rows = []; // jede Zeile: { rad, y, nr, ny, mode }
  const top = h / 2, bot = -h / 2;
  // Seite (von unten nach oben)
  const sideN = 3;
  const dr = r - rb, dy = (top - bevel) - bot, sl = Math.hypot(dr, dy);
  for (let i = 0; i <= sideN; i++) { const t = i / sideN; rows.push({ rad: rb + dr * t, y: bot + dy * t, nr: dy / sl, ny: -dr / sl, mode: 'side' }); }
  // Rundung + Deckel
  const bevN = 6;
  const bevStart = rows.length;
  for (let i = 0; i <= bevN; i++) { const f = i / bevN * Math.PI / 2; rows.push({ rad: r - bevel + bevel * Math.cos(f), y: top - bevel + bevel * Math.sin(f), nr: Math.cos(f), ny: Math.sin(f), mode: 'top' }); }
  for (const k of [0.66, 0.33, 0]) rows.push({ rad: (r - bevel) * k, y: top, nr: 0, ny: 1, mode: 'top' });
  // Unterseite
  const botStart = rows.length;
  for (const k of [1, 0]) rows.push({ rad: rb * k, y: bot, nr: 0, ny: -1, mode: 'bot' });
  const S = seg + 1;
  for (const rw of rows) {
    for (let j = 0; j <= seg; j++) {
      const a = j / seg * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
      const x = c * rw.rad, z = s * rw.rad;
      pos.push(x, rw.y, z);
      nor.push(c * rw.nr, rw.ny, s * rw.nr);
      if (rw.mode === 'side') uv.push(a * r / tile, (rw.y + oy) / tile);
      else uv.push((x + ox) / tile, (z + oz) / tile);
    }
  }
  const quad = (r0, list) => { for (let j = 0; j < seg; j++) { const a = r0 * S + j, b = a + S; list.push(a, b, a + 1, a + 1, b, b + 1); } };
  const side = [], tp = [], bt = [];
  for (let i = 0; i < sideN; i++) quad(i, side);
  for (let i = bevStart; i < botStart - 1; i++) quad(i, tp);
  quad(botStart, bt);
  // Bottom-Ringe laufen nach innen → Wicklung umdrehen
  for (let k = 0; k < bt.length; k += 3) { const t = bt[k]; bt[k] = bt[k + 1]; bt[k + 1] = t; }
  idx.push(...side, ...tp, ...bt);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  fixWinding(g, 0);
  g.addGroup(0, side.length, 0);
  g.addGroup(side.length, tp.length, 1);
  g.addGroup(side.length + tp.length, bt.length, 2);
  g.computeBoundingSphere();
  return { geo: g, bevel };
}

// Prüft am ersten Dreieck, ob die Fläche nach außen zeigt, und dreht sonst alle Dreiecke um
function fixWinding(g, tri) {
  const p = g.attributes.position, n = g.attributes.normal, ix = g.index.array;
  const a = new THREE.Vector3().fromBufferAttribute(p, ix[tri * 3]), b = new THREE.Vector3().fromBufferAttribute(p, ix[tri * 3 + 1]), c = new THREE.Vector3().fromBufferAttribute(p, ix[tri * 3 + 2]);
  const fn = b.sub(a).cross(c.sub(a));
  const vn = new THREE.Vector3().fromBufferAttribute(n, ix[tri * 3]);
  if (fn.dot(vn) < 0) {
    const arr = Array.from(ix);
    for (let k = 0; k < arr.length; k += 3) { const t = arr[k]; arr[k] = arr[k + 1]; arr[k + 1] = t; }
    g.setIndex(arr);
  }
}

// kleiner deterministischer Rauschwert
function wobble(seed, a, t) {
  return Math.sin(a * 3 + seed) * 0.5 + Math.sin(a * 5 + seed * 1.7 + t * 4) * 0.3 + Math.sin(a * 9 + seed * 2.3 - t * 6) * 0.2;
}

// Hängender Fels unter einer schwebenden Insel: bauchig, nach unten rund zulaufend, mit sanften Beulen.
// Oben (y = 0) exakt kreisrund mit Radius r, Spitze bei y = -h.
export function rockUnder(r, h, seed = 1, seg = 36, tile = 4) {
  const rings = 14;
  const pos = [], uv = [], idx = [];
  const S = seg + 1;
  for (let i = 0; i <= rings; i++) {
    const t = i / rings;
    // bauchiges Profil: erst leicht breiter, dann rund zur Spitze
    let rad = r * Math.pow(Math.max(0, 1 - t), 0.62) * (1 + 0.06 * Math.sin(t * Math.PI));
    if (i === rings) rad = 0;
    const y = -h * t;
    for (let j = 0; j <= seg; j++) {
      const a = j / seg * Math.PI * 2;
      const n = i === 0 ? 0 : wobble(seed, a, t) * 0.13 * Math.sin(Math.min(1, t * 2.2) * Math.PI / 2);
      const rr = rad * (1 + n);
      pos.push(Math.cos(a) * rr, y, Math.sin(a) * rr);
      uv.push(a * r / tile, y / tile);
    }
  }
  for (let i = 0; i < rings; i++) for (let j = 0; j < seg; j++) { const a = i * S + j, b = a + S; idx.push(a, a + 1, b, a + 1, b + 1, b); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  // Naht schließen: Normalen der ersten und letzten Spalte mitteln
  const nr = g.attributes.normal;
  for (let i = 0; i <= rings; i++) {
    const a = i * S, b = i * S + seg;
    const x = (nr.getX(a) + nr.getX(b)) / 2, y = (nr.getY(a) + nr.getY(b)) / 2, z = (nr.getZ(a) + nr.getZ(b)) / 2;
    nr.setXYZ(a, x, y, z); nr.setXYZ(b, x, y, z);
  }
  // Spitze: Normale nach unten
  for (let j = 0; j <= seg; j++) nr.setXYZ(rings * S + j, 0, -1, 0);
  fixWinding(g, Math.floor(idx.length / 6));
  return g;
}

// abgerundeter Quader (Brücken, Kisten, Plattformen)
export function roundBox(w, h, d, radius = null) {
  const rad = radius ?? Math.min(0.3, Math.min(w, h, d) * 0.22);
  return new RoundedBoxGeometry(w, h, d, 3, Math.max(0.01, rad));
}

// glatter, leicht verbeulter Stein
export function pebble(r, seed = 1) {
  const g = new THREE.SphereGeometry(r, 24, 16);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const a = Math.atan2(z, x), t = y / r;
    const k = 1 + wobble(seed, a, t) * 0.12;
    p.setXYZ(i, x * k, y * k * 0.72, z * k);
  }
  g.computeVertexNormals();
  return g;
}
