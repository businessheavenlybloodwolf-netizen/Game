// Kollisionshelfer: Spieler = vertikaler Zylinder, Welt = achsenparallele Boxen & Zylinder
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

export function boxCollider(minX, minY, minZ, maxX, maxY, maxZ, extra = {}) {
  return { type: 'box', minX, minY, minZ, maxX, maxY, maxZ, dx: 0, dy: 0, dz: 0, ...extra };
}
export function cylCollider(x, z, r, minY, maxY, extra = {}) {
  return { type: 'cyl', x, z, r, minY, maxY, dx: 0, dy: 0, dz: 0, ...extra };
}

export function moveCollider(c, dx, dy, dz) {
  if (c.type === 'box') { c.minX += dx; c.maxX += dx; c.minZ += dz; c.maxZ += dz; }
  else { c.x += dx; c.z += dz; }
  c.minY += dy; c.maxY += dy;
  c.dx = dx; c.dy = dy; c.dz = dz;
}

export function overlapXZ(c, x, z, r) {
  if (c.type === 'box') {
    const cx = clamp(x, c.minX, c.maxX), cz = clamp(z, c.minZ, c.maxZ);
    const dx = x - cx, dz = z - cz;
    return dx * dx + dz * dz < r * r;
  }
  const dx = x - c.x, dz = z - c.z, rr = c.r + r;
  return dx * dx + dz * dz < rr * rr;
}

// schiebt pos aus dem Collider (nur XZ). Gibt Normale zurück oder null.
export function pushOutXZ(c, pos, r) {
  if (c.type === 'box') {
    const cx = clamp(pos.x, c.minX, c.maxX), cz = clamp(pos.z, c.minZ, c.maxZ);
    const dx = pos.x - cx, dz = pos.z - cz;
    const d2 = dx * dx + dz * dz;
    if (d2 >= r * r) return null;
    if (d2 > 1e-10) {
      const d = Math.sqrt(d2), k = (r - d) / d;
      pos.x += dx * k; pos.z += dz * k;
      return { x: dx / d, z: dz / d };
    }
    const pl = pos.x - c.minX, pr = c.maxX - pos.x, pb = pos.z - c.minZ, pf = c.maxZ - pos.z;
    const m = Math.min(pl, pr, pb, pf);
    if (m === pl) { pos.x = c.minX - r; return { x: -1, z: 0 }; }
    if (m === pr) { pos.x = c.maxX + r; return { x: 1, z: 0 }; }
    if (m === pb) { pos.z = c.minZ - r; return { x: 0, z: -1 }; }
    pos.z = c.maxZ + r; return { x: 0, z: 1 };
  }
  let dx = pos.x - c.x, dz = pos.z - c.z;
  const rr = c.r + r;
  const d2 = dx * dx + dz * dz;
  if (d2 >= rr * rr) return null;
  let d = Math.sqrt(d2);
  if (d < 1e-6) { dx = 1; dz = 0; d = 1; }
  pos.x = c.x + dx / d * rr; pos.z = c.z + dz / d * rr;
  return { x: dx / d, z: dz / d };
}

// höchste Oberfläche unter einem Punkt (für Schatten-Marker & KI)
export function groundBelow(colliders, x, y, z, r = 0.05) {
  let best = -Infinity;
  for (const c of colliders) {
    if (c.disabled || c.maxY > y + 0.01) continue;
    if (overlapXZ(c, x, z, r) && c.maxY > best) best = c.maxY;
  }
  return best;
}
