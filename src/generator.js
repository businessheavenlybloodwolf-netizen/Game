// Prozeduraler Level-Generator: baut aus Bausteinen (Segmenten) einen spielbaren Weg vom Start zum Ziel,
// dazu Geheimnisse (Mondsteine, Schlüssel). Jeder Sprung wird als "link" für den automatischen Test notiert.
import { rng } from './textures.js';
import { WORLDS, KEY_LEVEL } from './worlds.js';

export function generateLevel(L, spec) {
  const W = WORLDS[spec.world], S = W.style;
  const r = rng(spec.seed * 7919 + 13);
  const R = (a, b) => a + (b - a) * r();
  const pick = (arr) => arr[Math.floor(r() * arr.length)];
  const lerp = (a, b, t) => a + (b - a) * t;
  const kind = spec.kind;
  let d = Math.min(1, spec.world / 7 * 0.6 + spec.index / 5 * 0.3 + (kind === 'bonus' ? 0.25 : 0));
  if (spec.index === 0) d *= 0.7;
  if (spec.star) d = Math.min(1, d + 0.25);
  const minY = S.minY ?? -6;
  const placed = [];
  const arenas = [];
  let cur = null, heading = 0, pathLen = 0, segCount = 0;
  const dir = (h) => [Math.sin(h), -Math.cos(h)];
  const sparkChance = kind === 'bonus' ? 1 : 0.6;

  function free(x, z, rad, ignore = null, margin = 2.2) {
    for (const p of placed) {
      if (p === ignore) continue;
      if (Math.hypot(x - p.x, z - p.z) < rad + p.r + margin) return false;
    }
    return true;
  }
  // Weg eines Movers als Hindernis eintragen
  function blockLine(ax, az, bx, bz, rad) {
    const n = Math.max(2, Math.ceil(Math.hypot(bx - ax, bz - az) / 2));
    for (let i = 0; i <= n; i++) placed.push({ x: ax + (bx - ax) * i / n, z: az + (bz - az) * i / n, r: rad, y: 0, obstacle: true });
  }
  function edge(p, h, inset = 0.6) { const [dx, dz] = dir(h); return [p.x + dx * (p.r - inset), p.y, p.z + dz * (p.r - inset)]; }

  // Plattform-Typen
  function makePlat(type, x, top, z, rad) {
    switch (type) {
      case 'island': return L.cyl(x, top, z, rad, { mat: S.big, decor: S.decor });
      case 'pillar': return L.cyl(x, top, z, rad, { mat: S.pillar, h: 22, under: false });
      case 'crumble': return L.crumbleCyl(x, top, z, rad);
      case 'ice': return L.cyl(x, top, z, rad, { mat: 'ice', ice: true });
      case 'ghost': return L.ghost(x, top, z, rad);
      case 'cloud': return L.cyl(x, top, z, rad, { mat: 'cloud', h: 1.2, underH: rad });
      default: return L.cyl(x, top, z, rad, { mat: S.small, h: 2.5 });
    }
  }

  // Nächste Plattform relativ zur aktuellen setzen
  function place(gap, dy, rad, type = 'small', o = {}) {
    const from = o.from || cur;
    let top = from.y + dy;
    if (top < minY) top = from.y + Math.abs(dy);
    const base = o.heading ?? heading;
    for (let tries = 0; tries < 12; tries++) {
      const jitter = o.fixed ? (tries ? (r() - 0.5) * 0.4 * tries : 0) : (r() - 0.5) * (tries < 6 ? 0.9 : 2.2);
      let h = base + jitter;
      if (!o.free) h = Math.max(-1.25, Math.min(1.25, h));
      const [dx, dz] = dir(h);
      const dist = from.r + gap + rad;
      const x = from.x + dx * dist, z = from.z + dz * dist;
      if (!free(x, z, rad, from, o.margin ?? 2.2)) continue;
      if (o.extraCheck && !o.extraCheck(x, z, h)) continue;
      if (o.dry) return { x, y: top, z, r: rad, h };
      const p = makePlat(type, x, top, z, rad);
      const np = { x, y: top, z, r: rad, col: p.col, h };
      placed.push(np);
      if (o.link !== false) L.link(edge(from, h), [x, top, z], o.linkOpt || { jump: 1 });
      pathLen += dist;
      if (!o.keepHeading) heading = h;
      return np;
    }
    return null;
  }

  function sparkOn(p, h = 1.2) { if (r() < sparkChance) L.spark(p.x, p.y + h, p.z); }
  function sparkArc(a, b, n = 3) {
    for (let i = 1; i <= n; i++) {
      const t = i / (n + 1);
      L.spark(a.x + (b.x - a.x) * t, Math.max(a.y, b.y) + 1.6 + Math.sin(t * Math.PI) * 1.2, a.z + (b.z - a.z) * t);
    }
  }

  // ---------------- Segmente ----------------
  const SEG = {
    hops() {
      const n = 2 + Math.floor(r() * 3);
      for (let i = 0; i < n; i++) {
        let gap = R(1.5, lerp(2.8, 4.0, d)), dy = R(-1, lerp(1, 1.8, d));
        if (dy > 1.2) gap = Math.min(gap, 3.2);
        const p = place(gap, dy, R(lerp(2.2, 1.2, d), lerp(3, 1.6, d)));
        if (!p) return false;
        sparkOn(p);
        if (r() < d * 0.25 && p.r > 1.8) L.enemy('flatterling', p.x, p.y, p.z, { range: 1.5 });
        cur = p;
      }
      return true;
    },
    stairs() {
      const n = 3 + Math.floor(r() * 2);
      for (let i = 0; i < n; i++) {
        const p = place(R(1.2, 2.6), R(1.2, 2.0), R(1.4, 2.2), 'small', { fixed: true });
        if (!p) return false;
        sparkOn(p); cur = p;
      }
      return true;
    },
    descend() {
      const n = 2 + Math.floor(r() * 2);
      for (let i = 0; i < n; i++) {
        const p = place(R(2, 4.5), R(-3.5, -1.5), R(1.6, 2.4));
        if (!p) return false;
        sparkOn(p); cur = p;
      }
      return true;
    },
    pillars() {
      const n = 3 + Math.floor(r() * 2);
      for (let i = 0; i < n; i++) {
        const p = place(R(1.8, lerp(3, 3.8, d)), R(-0.5, 1.5), R(lerp(1.8, 1.2, d), 2), 'pillar');
        if (!p) return false;
        sparkOn(p); cur = p;
      }
      return true;
    },
    crumble() {
      const n = 3 + Math.floor(r() * 3);
      for (let i = 0; i < n; i++) {
        const p = place(R(0.9, 1.7), R(-0.3, 0.6), 1.35, 'crumble', { fixed: true });
        if (!p) return false;
        L.spark(p.x, p.y + 1.2, p.z); cur = p;
      }
      return true;
    },
    blink() {
      const n = 3 + Math.floor(r() * 3);
      for (let i = 0; i < n; i++) {
        const [dx, dz] = dir(heading);
        const gap = R(1.3, 2.3), rad = 1.5, dist = cur.r + gap + rad;
        const x = cur.x + dx * dist, z = cur.z + dz * dist;
        if (!free(x, z, rad, cur)) return false;
        const top = cur.y + R(-0.3, 0.8);
        const p = L.blink(x, top, z, rad, i % 2, 4);
        const np = { x, y: top, z, r: rad, col: p.col, h: heading };
        placed.push(np);
        L.link(edge(cur, heading), [x, top, z], { jump: 1 });
        L.spark(x, top + 1.2, z);
        pathLen += dist; cur = np;
      }
      return true;
    },
    iceSlide() {
      const n = 2;
      for (let i = 0; i < n; i++) {
        const p = place(R(1.8, 3), R(-0.5, 0.8), R(2.6, 3.6), 'ice');
        if (!p) return false;
        sparkOn(p);
        if (i === 0 && r() < 0.5) L.tree(p.x + p.r * 0.5, p.y, p.z, 'snowman', true);
        cur = p;
      }
      return true;
    },
    moverGap() {
      const G = R(9, 13), rad = R(2.5, 3.2);
      const startCur = cur;
      const mr = 1.7;
      const pathFree = (x, z, h) => { const [ddx, ddz] = dir(h); for (let k = 1; k < 4; k++) { const t = k / 4, px = startCur.x + (x - startCur.x) * t, pz = startCur.z + (z - startCur.z) * t; if (!free(px, pz, mr + 0.5, startCur, 1.5)) return false; } return true; };
      const p = place(G, R(-1, 1.5), rad, 'small', { link: false, extraCheck: pathFree });
      if (!p) return false;
      const h = p.h, [dx, dz] = dir(h);
      const a = [startCur.x + dx * (startCur.r + 1.4 + mr), startCur.y, startCur.z + dz * (startCur.r + 1.4 + mr)];
      const b = [p.x - dx * (p.r + 1.4 + mr), startCur.y, p.z - dz * (p.r + 1.4 + mr)];
      const mv = L.mover({ shape: 'cyl', r: mr, from: a, to: b, period: R(5, 7), mat: S.mover });
      const mi = L.movers.indexOf(mv);
      blockLine(a[0], a[2], b[0], b[2], mr);
      L.link(edge(startCur, h), a, { jump: 1, mover: mi, at: 0 });
      L.link([b[0] + dx * 0.0, b[1], b[2]], [p.x, p.y, p.z], { jump: 1, mover: mi, at: 1 });
      for (let i = 0; i < 4; i++) { const t = (i + 0.5) / 4; L.spark(a[0] + (b[0] - a[0]) * t, a[1] + 1.4, a[2] + (b[2] - a[2]) * t); }
      cur = p;
      return true;
    },
    circleMover() {
      const G = R(8, 11), rad = R(2.3, 3);
      const startCur = cur;
      const ringFree = (x, z) => free((startCur.x + x) / 2, (startCur.z + z) / 2, G / 2 - 1, startCur, 0.5);
      const p = place(G, 0, rad, 'small', { link: false, extraCheck: ringFree });
      if (!p) return false;
      const [dx, dz] = dir(p.h), mr = 1.6;
      const ax = startCur.x + dx * startCur.r, az = startCur.z + dz * startCur.r;
      const bx = p.x - dx * p.r, bz = p.z - dz * p.r;
      const cx = (ax + bx) / 2, cz = (az + bz) / 2;
      const Rr = Math.hypot(bx - ax, bz - az) / 2 - mr - 1.2;
      const angA = Math.atan2(az - cz, ax - cx), angB = Math.atan2(bz - cz, bx - cx);
      const speed = (r() < 0.5 ? 1 : -1) * R(0.55, 0.85);
      const mv = L.mover({ shape: 'cyl', r: mr, circle: { cx, cy: startCur.y, cz, R: Rr, speed, phase: r() * 6.28 }, mat: S.mover });
      const mi = L.movers.indexOf(mv);
      placed.push({ x: cx, z: cz, r: Rr + mr - 0.5, y: 0, obstacle: true });
      L.link(edge(startCur, p.h), [cx + Math.cos(angA) * Rr, startCur.y, cz + Math.sin(angA) * Rr], { jump: 1, mover: mi, angle: angA });
      L.link([cx + Math.cos(angB) * Rr, startCur.y, cz + Math.sin(angB) * Rr], [p.x, p.y, p.z], { jump: 1, mover: mi, angle: angB });
      L.sparkRing(cx, startCur.y + 1.4, cz, Rr, 6);
      cur = p;
      return true;
    },
    lift() {
      const [dx, dz] = dir(heading);
      const mr = 1.6, liftDist = cur.r + 1.5 + mr;
      const lx = cur.x + dx * liftDist, lz = cur.z + dz * liftDist;
      const rise = R(5, 8), rad = R(2, 2.8);
      const nd = liftDist + mr + 1.8 + rad;
      const nx = cur.x + dx * nd, nz = cur.z + dz * nd;
      if (!free(lx, lz, mr, cur) || !free(nx, nz, rad, cur)) return false;
      const top = cur.y + rise;
      const mv = L.mover({ shape: 'cyl', r: mr, from: [lx, cur.y, lz], to: [lx, top, lz], period: R(5, 7), mat: S.mover });
      const mi = L.movers.indexOf(mv);
      const p = makePlat('small', nx, top, nz, rad);
      placed.push({ x: lx, y: top, z: lz, r: mr }); const np = { x: nx, y: top, z: nz, r: rad, col: p.col, h: heading }; placed.push(np);
      L.link(edge(cur, heading), [lx, cur.y, lz], { jump: 1, mover: mi, at: 0 });
      L.link([lx, top, lz], [nx, top, nz], { jump: 1, mover: mi, at: 1 });
      L.sparkLine([lx, cur.y + 2, lz], [lx, top + 1, lz], 3);
      pathLen += nd; cur = np;
      return true;
    },
    bounceUp() {
      const isl = place(R(2, 3.2), R(-0.5, 0.5), 3, 'small', { link: false });
      if (!isl) return false;
      { const [dx, dz] = dir(isl.h); L.link(edge(cur, isl.h), [isl.x - dx * 1.8, isl.y, isl.z - dz * 1.8], { jump: 1 }); }
      cur = isl;
      L.bouncer(isl.x, isl.y, isl.z, 28);
      const p = place(2.5, R(4.5, 5.6), R(2.2, 2.8), 'small', { link: false });
      if (!p) return false;
      L.link([isl.x, isl.y + 0.9, isl.z], [p.x, p.y, p.z], { via: [isl.x, isl.z], viaY: p.y + 1.5 });
      L.sparkLine([isl.x, isl.y + 3, isl.z], [isl.x, isl.y + 6, isl.z], 3);
      cur = p;
      return true;
    },
    updraft() {
      const [dx, dz] = dir(heading);
      const ur = 2.5, ud = cur.r + 1.5 + ur;
      const ux = cur.x + dx * ud, uz = cur.z + dz * ud;
      const rise = R(8, 11), rad = R(2.5, 3.5);
      const nd = ud + ur + 1.5 + rad;
      const nx = cur.x + dx * nd, nz = cur.z + dz * nd;
      if (!free(ux, uz, ur, cur) || !free(nx, nz, rad, cur)) return false;
      const top = cur.y + rise;
      L.updraft(ux, uz, ur, cur.y - 10, top + 4.5, 60);
      const p = makePlat('small', nx, top, nz, rad);
      placed.push({ x: ux, y: top, z: uz, r: ur }); const np = { x: nx, y: top, z: nz, r: rad, col: p.col, h: heading }; placed.push(np);
      L.link(edge(cur, heading, 0.3), [nx, top, nz], { via: [ux, uz], viaY: top + 2.5 });
      L.sparkLine([ux, cur.y + 2, uz], [ux, top, uz], 4);
      pathLen += nd; cur = np;
      return true;
    },
    firebar() {
      const rad = R(3.4, 4.2);
      const p = place(R(1.8, 3), R(-0.5, 1), rad, 'small', { link: false });
      if (!p) return false;
      const [dx, dz] = dir(p.h);
      L.link(edge(cur, p.h), [p.x - dx * 2, p.y, p.z - dz * 2], { jump: 1 });
      L.firebar(p.x, p.y + 0.75, p.z, rad - 0.4, (r() < 0.5 ? 1 : -1) * R(1.1, 1.4 + d), 4);
      L.sparkRing(p.x, p.y + 2.2, p.z, rad * 0.6, 5);
      cur = p;
      return true;
    },
    geyser() {
      const rad = R(4, 5);
      const p = place(R(1.8, 3), R(-0.5, 1), rad, 'island');
      if (!p) return false;
      const n = 2 + Math.floor(r() * 2);
      for (let i = 0; i < n; i++) {
        const a = p.h + Math.PI / 2 + (i - (n - 1) / 2) * 1.2 + (i % 2 ? Math.PI : 0);
        L.geyser(p.x + Math.cos(a) * rad * 0.55, p.y, p.z + Math.sin(a) * rad * 0.55, i * 1.3, 4);
      }
      sparkOn(p); cur = p;
      return true;
    },
    bridge() {
      if (Math.abs(heading) > 0.7) return false;
      const len = R(8, 12), gap = R(1, 2);
      const bx = cur.x, z0 = cur.z - cur.r - gap, z1 = z0 - len;
      const midZ = (z0 + z1) / 2;
      if (!free(bx, midZ, len / 2, cur, 1.5)) return false;
      const top = cur.y;
      const b = L.box(bx, top, midZ, 2.4, len, { mat: S.bridge, h: 0.6, under: false });
      placed.push({ x: bx, y: top, z: midZ, r: len / 2 });
      L.link(edge(cur, 0), [bx, top, z0 - 1], { jump: 1 });
      if (r() < 0.6) L.enemy(r() < 0.5 ? 'dornling' : 'nebling', bx, top, midZ, { range: len / 2 - 1.5, axis: 'z', chase: false });
      L.sparkLine([bx, top + 1.2, z0 - 1.5], [bx, top + 1.2, z1 + 1.5], 4);
      heading = 0;
      cur = { x: bx, y: top, z: z1 + 0.3, r: 0.3, col: b.col, h: 0 };
      pathLen += len;
      return true;
    },
  };

  function arena(withCheckpoint = true) {
    const rad = R(5, 7);
    const p = place(R(2, 3.4), R(-1, 1), rad, 'island');
    if (!p) return null;
    const [dx, dz] = dir(p.h);
    if (withCheckpoint) L.checkpoint(p.x - dx * (rad - 2.2) + dz * 1.5, p.y, p.z - dz * (rad - 2.2) - dx * 1.5);
    const nT = Math.floor(r() * 3);
    for (let i = 0; i < nT; i++) {
      const a = r() * 6.28, rr = R(rad * 0.55, rad - 1.2);
      if (S.trees && S.trees.length) L.tree(p.x + Math.cos(a) * rr, p.y, p.z + Math.sin(a) * rr, pick(S.trees));
    }
    const ne = Math.min(3, 1 + Math.floor(d * 2.5 + r() * 0.8));
    for (let i = 0; i < ne; i++) {
      const a = r() * 6.28, rr = R(0, rad * 0.45);
      L.enemy(pick(W.enemies), p.x + Math.cos(a) * rr, p.y, p.z + Math.sin(a) * rr, { range: rad * 0.4 });
    }
    if (r() < 0.6) { const a = r() * 6.28; L.crate(p.x + Math.cos(a) * (rad - 1.5), p.y, p.z + Math.sin(a) * (rad - 1.5), 5); }
    if (r() < 0.5) L.sparkRing(p.x, p.y + 1.2, p.z, rad * 0.5, 6);
    if (r() < 0.3 && kind !== 'boss') L.heart(p.x, p.y + 1.3, p.z);
    arenas.push(p);
    return p;
  }

  // ---------------- Start ----------------
  const startR = 6;
  const startTop = W.id === 'lava' ? 0 : 0;
  L.cyl(0, startTop, 0, startR, { mat: S.big, decor: S.decor });
  L.spawn(0, startTop, 2.5, 0);
  cur = { x: 0, y: startTop, z: 0, r: startR, h: 0 };
  placed.push(cur);
  const start = cur;
  if (S.trees && S.trees.length) { L.tree(-3.8, 0, 2.6, pick(S.trees)); L.tree(3.6, 0, -2.4, pick(S.trees)); }
  if (spec.index === 0 && kind === 'normal' && spec.world >= 3) L.hint(2.6, 0, 1, 3.4, 'world_' + W.id);
  if (kind === 'bonus') L.hint(2.6, 0, 1, 3.4, 'bonus');

  // ---------------- Hauptweg ----------------
  const weights = Object.entries(W.seg);
  const total = weights.reduce((s, [, w]) => s + w, 0);
  const chooseSeg = (prev) => {
    for (let k = 0; k < 6; k++) {
      let x = r() * total;
      for (const [name, w] of weights) { x -= w; if (x <= 0) { if (name !== prev) return name; break; } }
    }
    return 'hops';
  };

  if (kind === 'boss') {
    for (let i = 0; i < 3; i++) { const n = chooseSeg(); if (!SEG[n]()) SEG.hops(); }
    // Arena
    const [dx, dz] = dir(heading);
    const AR = 14, dist = cur.r + 2 + AR;
    const ax = cur.x + dx * dist, az = cur.z + dz * dist, top = cur.y;
    const bridgeLen = 2;
    L.cyl(ax, top, az, AR, { mat: S.big, h: 4 });
    L.link(edge(cur, heading), [ax - dx * (AR - 2), top, az - dz * (AR - 2)], { jump: 1 });
    L.checkpoint(ax - dx * (AR - 2) + dz * 2, top, az - dz * (AR - 2) - dx * 2);
    L.hint(ax - dx * (AR - 2) - dz * 2, top, az - dz * (AR - 2) + dx * 2, 2.5, 'boss', false);
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * Math.PI * 2 + 0.2;
      const px = ax + Math.cos(a) * 12.5, pz = az + Math.sin(a) * 12.5;
      if (Math.hypot(px - (ax - dx * AR), pz - (az - dz * AR)) < 7) continue;
      L.cyl(px, top + 3, pz, 0.8, { mat: S.pillar, h: 3, under: false });
      L.crystal(px, top + 3, pz, S.crystalColor ?? 0xc59bff, 0.8);
    }
    L.bossAt(ax, top, az, AR);
    if (W.boss.final) {
      L.cyl(ax + dx * 30, top + 22, az + dz * 30, 9, { mat: S.big, h: 60, under: false, noCollide: true, noCam: true });
      L.cyl(ax + dx * 30, top + 34, az + dz * 30, 6, { mat: S.small, h: 12, under: false, noCollide: true, noCam: true });
    }
    pathLen += dist + bridgeLen;
  } else {
    const nseg = (kind === 'bonus' ? 11 : 6) + Math.floor(spec.world * 0.6) + spec.index;
    let prev = null, sinceCp = 0;
    for (let i = 0; i < nseg; i++) {
      if (sinceCp >= 3 && i < nseg - 1) { if (arena(true)) { sinceCp = 0; continue; } }
      let n = chooseSeg(prev);
      let ok = SEG[n]();
      if (!ok) { n = 'hops'; ok = SEG.hops(); }
      if (!ok) { heading *= 0.3; SEG.stairs(); }
      prev = n; sinceCp++; segCount++;
    }
    // Ziel
    const g = place(R(2, 3), R(0, 1), 5, 'island');
    if (g) {
      L.goalAt(g.x, g.y, g.z);
      if (S.trees && S.trees.length) L.tree(g.x + 3.2, g.y, g.z + 1.5, pick(S.trees));
      arenas.push(g);
      L.links[L.links.length - 1].b = [g.x - dir(g.h)[0] * 3, g.y, g.z - dir(g.h)[1] * 3];
    }
    // ---------------- Geheimnisse ----------------
    const usedAnchors = new Set();
    const anchor = () => {
      const opts = arenas.filter((a) => !usedAnchors.has(a));
      return opts.length ? pick(opts) : pick(arenas);
    };
    // Mutpfad: harte Seitensprünge zu Mondstein 0
    const branch = (reward, ghostly = false) => {
      for (let tries = 0; tries < 8; tries++) {
        const a = anchor();
        const side = (r() < 0.5 ? 1 : -1) * Math.PI / 2;
        const h0 = a.h + side;
        let c = a;
        const n = ghostly ? 3 : 2 + Math.floor(r() * 2);
        const plan = [];
        let ok = true;
        for (let i = 0; i < n; i++) {
          const gap = ghostly ? R(1.6, 2.6) : R(2.6, lerp(3.4, 3.9, d));
          const dy = ghostly ? R(0.5, 1.5) : R(0, 1.5);
          const rad = ghostly ? 1.4 : R(1.1, 1.5);
          const q = place(gap, dy, rad, '', { from: c, heading: h0, fixed: true, free: true, keepHeading: true, margin: 2.5, dry: true });
          if (!q) { ok = false; break; }
          plan.push({ q, from: c });
          placed.push(q); c = q;
        }
        if (!ok) { for (const pl of plan) placed.splice(placed.indexOf(pl.q), 1); continue; }
        for (const { q, from } of plan) {
          const pm = makePlat(ghostly ? 'ghost' : 'pillar', q.x, q.y, q.z, q.r);
          q.col = pm.col;
          L.link(edge(from, q.h), [q.x, q.y, q.z], { jump: 1 });
          L.spark(q.x, q.y + 1.2, q.z);
        }
        usedAnchors.add(a);
        reward(c);
        return true;
      }
      return false;
    };
    const below = (reward) => {
      const p = { x: 0, y: Math.max(start.y - 7, minY + 0.5), z: startR + 4.2, r: 2.6 };
      L.cyl(p.x, p.y, p.z, p.r, { mat: S.small, h: 2 });
      L.link([0, start.y, startR - 0.6], [p.x + 1.1, p.y, p.z - 0.6], { back: true });
      L.bouncer(p.x - 1.2, p.y, p.z + 0.6, 30);
      L.link([p.x - 1.2, p.y + 0.9, p.z + 0.6], [0, start.y, startR - 2.5], { via: [p.x - 1.2, p.z + 0.6], viaY: start.y + 3 });
      reward({ x: p.x + 1.1, y: p.y, z: p.z - 0.6 });
    };
    const high = (reward) => {
      for (let tries = 0; tries < 8; tries++) {
        const a = anchor();
        const ang = r() * 6.28;
        const bx = a.x + Math.cos(ang) * (a.r - 1.5), bz = a.z + Math.sin(ang) * (a.r - 1.5);
        const sx = a.x + Math.cos(ang) * (a.r + 4), sz = a.z + Math.sin(ang) * (a.r + 4);
        if (!free(sx, sz, 2.2, a, 1.5)) continue;
        const blocked = L.colliders.some((c) => c.maxY > a.y + 0.2 && c.minY < a.y + 12 && (c.type === 'cyl' ? Math.hypot(c.x - bx, c.z - bz) < c.r + 1.6 : bx > c.minX - 1.6 && bx < c.maxX + 1.6 && bz > c.minZ - 1.6 && bz < c.maxZ + 1.6));
        if (blocked) continue;
        usedAnchors.add(a);
        L.bouncer(bx, a.y, bz, 28);
        makePlat('cloud', sx, a.y + 7.5, sz, 2.2);
        placed.push({ x: sx, y: a.y + 7.5, z: sz, r: 2.2 });
        L.link([bx, a.y + 0.9, bz], [sx, a.y + 7.5, sz], { via: [bx, bz], viaY: a.y + 8.8 });
        reward({ x: sx, y: a.y + 7.5, z: sz });
        return true;
      }
      return false;
    };
    const ms = (idx) => (p) => { L.moonstone(p.x, p.y + 1.4, p.z, idx); L.sparkRing(p.x, p.y + 1.2, p.z, 1.2, 4); };
    const key = (p) => { L.keyAt(p.x, p.y + 1.4, p.z); };
    if (!branch(ms(0))) high(ms(0));
    const hiddenTypes = ['ghost', 'below', 'high'];
    const hType = kind === 'bonus' ? 'ghost' : hiddenTypes[(spec.world + spec.index) % 3];
    const hidden = (t, reward) => {
      if (t === 'ghost') { if (!branch(reward, true)) high(reward); }
      else if (t === 'below') below(reward);
      else if (!high(reward)) branch(reward, true);
    };
    hidden(hType, ms(1));
    if (spec.index === KEY_LEVEL && kind === 'normal') hidden(hiddenTypes[(spec.world + spec.index + 1) % 3], key);
  }

  // ---------------- Kulisse ----------------
  const islands = 4 + Math.floor(r() * 3);
  for (let i = 0; i < islands; i++) {
    const side = i % 2 ? 1 : -1;
    L.distantIsland(side * R(35, 60), R(-10, 25), -i * 25 + R(-10, 10), R(6, 12), { mat: S.big, kind: S.islandKind, trees: 3 + Math.floor(r() * 3) });
  }
  L.clouds(10, 0, -60, 240, -25, -10, W.theme.cloud, W.id === 'coral' ? 0.5 : 0.9);
  if (S.ships) for (let i = 0; i < 4; i++) L.airship(R(-40, 40), R(15, 45), -i * 35 - 20, r() * 6);
  if (S.gears) for (let i = 0; i < 6; i++) L.gear(R(-50, 50) + (i % 2 ? 30 : -30), R(-10, 30), -i * 25, R(4, 9), (r() - 0.5) * 0.6, r() * 3);
  L.par = Math.round(12 + pathLen / 6.2 + segCount * 2.5);
}
