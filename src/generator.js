// Prozeduraler Level-Generator: baut aus Bausteinen (Segmenten) einen spielbaren Weg vom Start zum Ziel,
// dazu Geheimnisse (Mondsteine, Schlüssel). Jeder Sprung wird als "link" für den automatischen Test notiert.
import { rng } from './textures.js';
import { WORLDS, KEY_LEVEL } from './worlds.js';
import { QUEST_TYPES, QUESTS_PER_KINGDOM } from './quests.js';

export function generateKingdom(L, spec) { generateLevel(L, spec); }

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
  let baseH = 0, spread = 1.25;
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
  // führt der Sprung durch einen Aufwind? (würde Lumi nach oben reißen)
  function crossesUpdraft(ax, az, bx, bz) {
    for (const u of L.updrafts) {
      const vx = bx - ax, vz = bz - az, l2 = vx * vx + vz * vz || 1;
      const t = Math.max(0, Math.min(1, ((u.x - ax) * vx + (u.z - az) * vz) / l2));
      if (Math.hypot(ax + vx * t - u.x, az + vz * t - u.z) < u.r + 1.0) return true;
    }
    return false;
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
      case 'stone': return L.cyl(x, top, z, rad, { mat: S.pillar || 'stone', h: 1.6, under: false });
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
      if (!o.free) h = Math.max(baseH - spread, Math.min(baseH + spread, h));
      const [dx, dz] = dir(h);
      const dist = from.r + gap + rad;
      const x = from.x + dx * dist, z = from.z + dz * dist;
      if (!free(x, z, rad, from, o.margin ?? 2.2)) continue;
      if (o.extraCheck && !o.extraCheck(x, z, h)) continue;
      if (crossesUpdraft(from.x, from.z, x, z)) continue;
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
    // Sublevel: Trittsteine im Zickzack quer über den Fluss
    stepStones() {
      const n = 5 + Math.floor(r() * 3), base = heading;
      for (let i = 0; i < n; i++) {
        const zig = (i % 2 ? 1 : -1) * R(0.35, 0.6);
        const p = place(R(1.1, lerp(1.8, 2.6, d)), R(-0.3, 0.45), R(lerp(1.3, 0.95, d), 1.35), 'stone', { heading: base + zig, fixed: true, keepHeading: true });
        if (!p) return false;
        if (i % 2 === 0) L.spark(p.x, p.y + 1.2, p.z);
        cur = p;
      }
      heading = base;
      return true;
    },
    // Sublevel: bewachsene Hügel, mal höher, mal tiefer
    mounds() {
      const n = 3 + Math.floor(r() * 2);
      for (let i = 0; i < n; i++) {
        const up = i % 2 === 0;
        const p = place(R(2.2, lerp(3.0, 3.6, d)), up ? R(1.0, 2.0) : R(-1.6, -0.6), R(2.6, 3.6), 'island');
        if (!p) return false;
        sparkOn(p, 1.4);
        if (r() < 0.3 + d * 0.3) L.enemy(pick(W.enemies), p.x, p.y, p.z, { range: p.r * 0.4 });
        cur = p;
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
  let startR = 6, start = null;
  if (kind !== 'kingdom') {
    L.cyl(0, 0, 0, startR, { mat: S.big, decor: S.decor });
    L.spawn(0, 0, 2.5, 0);
    cur = { x: 0, y: 0, z: 0, r: startR, h: 0 };
    placed.push(cur);
    start = cur;
    if (S.trees && S.trees.length) { L.tree(-3.8, 0, 2.6, pick(S.trees)); L.tree(3.6, 0, -2.4, pick(S.trees)); }
    if (kind === 'bonus') L.hint(2.6, 0, 1, 3.4, 'bonus');
  }

  // ---------------- Hauptweg ----------------
  // Sublevels (Herausforderungen hinter den Röhren) bekommen zusätzlich Trittsteine und Hügelsprünge
  const segW = kind === 'normal' || kind === 'bonus' ? { ...W.seg, stepStones: 2.4, mounds: 1.8 } : W.seg;
  const weights = Object.entries(segW);
  const total = weights.reduce((s, [, w]) => s + w, 0);
  const chooseSeg = (prev) => {
    for (let k = 0; k < 6; k++) {
      let x = r() * total;
      for (const [name, w] of weights) { x -= w; if (x <= 0) { if (name !== prev) return name; break; } }
    }
    return 'hops';
  };

  // ---------------- Geheimnisse ----------------
  let usedAnchors = new Set();
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
      if (!a || a.r < 3.2) continue; // zu kleine Plattform: Sprungfeder würde mitten im Landepunkt stehen
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

  if (kind === 'kingdom') {
    buildKingdom();
  } else if (kind === 'boss') {
    for (let i = 0; i < 3; i++) { const n = chooseSeg(); if (!SEG[n]()) SEG.hops(); }
    // Arena
    const [dx, dz] = dir(heading);
    const AR = 14, dist = cur.r + 2 + AR;
    const ax = cur.x + dx * dist, az = cur.z + dz * dist, top = cur.y;
    const bridgeLen = 2;
    L.cyl(ax, top, az, AR, { mat: S.big, h: 4 });
    L.link(edge(cur, heading), [ax - dx * (AR - 2), top, az - dz * (AR - 2)], { jump: 1 });
    L.checkpoint(ax - dx * (AR - 2) + dz * 2, top, az - dz * (AR - 2) - dx * 2);
    L.hint(ax - dx * (AR - 2) - dz * 2, top, az - dz * (AR - 2) + dx * 2, 2.5, 'boss_' + W.id, false);
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


  // ================= Herausforderung als Teil der offenen Welt =================
  // Startet an einer Arena der Inselkette, führt seitlich hinaus und endet an einem Ziel-Sockel.
  function buildCourse(k, a, headings = null) {
    const g = L.game, w = spec.world;
    const saved = { d, heading, baseH, spread, cur };
    const sideBase = (k % 2 ? 1 : -1) * Math.PI / 2;
    const tries = headings || [sideBase, -sideBase, sideBase * 0.5, -sideBase * 0.5].map((sd) => a.h + sd);
    for (const hs of tries) {
      d = Math.min(1, w / 7 * 0.6 + k / 5 * 0.3); if (k === 0) d *= 0.7;
      baseH = heading = hs; spread = headings ? 0.32 : 0.75; cur = a;
      // passt die erste Plattform?
      if (!place(R(2.2, 3), 0, 3, '', { dry: true })) continue;
      const [dx, dz] = dir(hs);
      const gx = a.x + dx * (a.r - 1.4), gz = a.z + dz * (a.r - 1.4);
      const course = L.courseBegin(k);
      L.courseGate(gx, a.y, gz, Math.atan2(dx, dz), k, g.t(`worlds.${w}.levels.${k}`), g.challengeSub(w, k));
      const savedArenas = arenas.splice(0);
      const len0 = pathLen, seg0 = segCount;
      const nseg = 5 + Math.floor(w * 0.5) + k;
      let prev = null, sinceCp = 0;
      for (let i = 0; i < nseg; i++) {
        if (sinceCp >= 3 && i < nseg - 1) { if (arena(true)) { sinceCp = 0; continue; } }
        let n = chooseSeg(prev);
        let ok = SEG[n]();
        if (!ok) { n = 'hops'; ok = SEG.hops(); }
        if (!ok) { heading = baseH; SEG.stairs(); }
        prev = n; sinceCp++; segCount++;
      }
      const goal = place(R(2, 3), R(0, 1), 5, 'island') || place(R(1.8, 2.6), R(0, 0.6), 3.6, 'island');
      const gp = goal || cur;
      if (gp.h === undefined) gp.h = heading;
      if (goal) {
        L.courseGoal(gp.x, gp.y, gp.z, k);
        // der letzte Sprung landet vor dem Sockel, nicht darauf
        L.links[L.links.length - 1].b = [gp.x - dir(gp.h)[0] * 3, gp.y, gp.z - dir(gp.h)[1] * 3];
      } else {
        L.courseGoal(gp.x, gp.y, gp.z, k, true);
      }
      arenas.push(gp);
      course.par = Math.round(12 + (pathLen - len0) / 6.2 + (segCount - seg0) * 2.5);
      // zwei Geheimnisse entlang der Strecke
      const moonAt = (id) => (p) => { L.moon(p.x, p.y + 1.4, p.z, id); L.sparkRing(p.x, p.y + 1.2, p.z, 1.2, 4); };
      usedAnchors = new Set();
      const m0 = 'c' + k + 'm0', m1 = 'c' + k + 'm1';
      if (!branch(moonAt(m0)) && !high(moonAt(m0))) L.poundSpot(gp.x + 2.2, gp.y, gp.z, m0);
      if (!branch(moonAt(m1), true) && !high(moonAt(m1))) L.poundSpot(gp.x - 2.2, gp.y, gp.z, m1);
      L.courseEnd();
      arenas.splice(0); arenas.push(...savedArenas);
      ({ d, heading, baseH, spread, cur } = saved);
      return true;
    }
    ({ d, heading, baseH, spread, cur } = saved);
    return false;
  }

  // ================= Quests =================
  function buildQuests(arenaA, arenaB, peaks) {
    const w = spec.world;
    const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
    // Auftraggeber: zwei auf der Hub-Insel, der Rest auf den mittleren Arenen der Inselketten
    const givers = [{ x: 6.5, y: 0, z: 4.5, yaw: -2.2 }, { x: -5.5, y: 0, z: -7.5, yaw: 0.6 }];
    for (const a of arenaB) {
      const [dx, dz] = dir(a.h);
      givers.push({ x: a.x - dx * 1.6, y: a.y, z: a.z - dz * 1.6, yaw: Math.atan2(-dx, -dz), arena: a });
    }
    // zu wenig mittlere Arenen? Dann Arenen der Herausforderungen, Gipfel und freie Plätze am Hub-Rand
    for (const a of [...arenaA, ...peaks]) {
      if (givers.length >= QUESTS_PER_KINGDOM + 2) break;
      if (!a || givers.some((gq) => gq.arena === a)) continue;
      const [dx, dz] = dir(a.h || 0), off = Math.min(1.6, Math.max(0, a.r - 1.2));
      givers.push({ x: a.x - dx * off, y: a.y, z: a.z - dz * off, yaw: Math.atan2(-dx, -dz), arena: a });
    }
    for (const [hx, hz] of [[8.5, -9], [11.5, 6.5], [-12, -6], [4, -13]]) if (givers.length < QUESTS_PER_KINGDOM) givers.push({ x: hx, y: 0, z: hz, yaw: Math.atan2(-hx, -hz) });
    // Hub-Auftraggeber zuerst, dann die weiter entfernten (abwechslungsreich verteilt)
    givers.splice(QUESTS_PER_KINGDOM);
    // Arten: alle 8 gemischt, pro Reich 6 davon (jedes Reich eine andere Mischung)
    const types = QUEST_TYPES.slice();
    for (let i = types.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [types[i], types[j]] = [types[j], types[i]]; }
    const plats = placed.filter((q) => !q.obstacle && q !== start && q.r >= 1.3 && q.r <= 4.5 && q.y > minY);
    const bigArenas = [...arenaA, ...arenaB].filter(Boolean);
    const usedAreas = new Set();
    const pickArena = (from, minD) => {
      const c = bigArenas.filter((a) => !usedAreas.has(a) && dist(a, from) > minD).sort((a, b) => dist(a, from) - dist(b, from));
      const a = c[0] || bigArenas.find((x) => !usedAreas.has(x)) || bigArenas[0];
      if (a) usedAreas.add(a);
      return a;
    };
    const spotsNear = (from, n, minD, maxD) => {
      const c = plats.filter((q) => { const d = dist(q, from); return d > minD && d < maxD; }).sort((a, b) => dist(a, from) - dist(b, from));
      const out = [];
      for (let k = 0; k < c.length && out.length < n; k += Math.max(1, Math.floor(c.length / n))) out.push(c[k]);
      for (const q of plats) { if (out.length >= n) break; if (!out.includes(q)) out.push(q); }
      return out.slice(0, n);
    };
    for (let i = 0; i < QUESTS_PER_KINGDOM; i++) {
      const type = types[i], gv = givers[i];
      const o = { giver: gv };
      if (gv.arena) usedAreas.add(gv.arena);
      if (type === 'collect') o.spots = spotsNear(gv, 6, 6, 70).map((q) => ({ x: q.x + R(-0.5, 0.5), y: q.y, z: q.z + R(-0.5, 0.5) }));
      else if (type === 'lanterns') {
        o.spots = spotsNear(gv, 4, 5, 32).map((q) => { const a = r() * 6.28, rr = Math.max(0, q.r - 1); return { x: q.x + Math.cos(a) * rr, y: q.y, z: q.z + Math.sin(a) * rr }; });
        o.limit = 40 + Math.round(Math.max(...o.spots.map((p) => dist(p, gv))) * 0.9);
      } else if (type === 'lost') o.spots = spotsNear(gv, 3, 18, 90).map((q) => ({ x: q.x, y: q.y, z: q.z }));
      else if (type === 'deliver' || type === 'race') {
        const a = pickArena(gv, type === 'race' ? 30 : 45);
        const [dx, dz] = dir(a.h || 0);
        o.target = { x: a.x + dz * 2, y: a.y, z: a.z - dx * 2, yaw: 0 };
        if (type === 'race') o.limit = Math.round(25 + dist(a, gv) * 0.6);
      } else if (type === 'catch' || type === 'defeat') {
        const a = pickArena(gv, 20);
        o.area = { x: a.x, y: a.y, z: a.z, r: a.r };
      } else if (type === 'view') {
        // Aussichtspunkt hoch über einer Arena (Sprungfeder → Wolkenplattform), sonst ein Gipfel
        let pos = null;
        usedAnchors = new Set();
        const saveArenas = arenas.splice(0); arenas.push(...bigArenas.filter((a) => !usedAreas.has(a)));
        if (arenas.length) high((p) => { pos = p; });
        arenas.splice(0); arenas.push(...saveArenas);
        if (!pos && peaks.length) { const pk = peaks[i % peaks.length]; pos = { x: pk.x + 1.2, y: pk.y, z: pk.z }; }
        o.target = pos || { x: gv.x + 3, y: gv.y, z: gv.z };
      }
      L.quests.add(i, type, o);
    }
  }

  // ================= Offene Welt: ein ganzes Reich =================
  function buildKingdom() {
    const g = L.game, w = spec.world;
    const HUB = 16;
    startR = HUB;
    L.cyl(0, 0, 0, HUB, { mat: S.big, decor: S.decor, h: 4 });
    L.spawn(0, 0, 9, 0);
    start = cur = { x: 0, y: 0, z: 0, r: HUB, h: 0 };
    placed.push(cur);
    // Luftschiff "Leuchtfeder" an der Südseite (+Z)
    placed.push({ x: 0, y: 0, z: HUB + 9, r: 9, obstacle: true });
    const ship = L.ship(0, 4, HUB + 9, Math.PI / 2);
    ship.x = 0; ship.z = HUB - 1.5; ship.r = 4;
    L.checkpoint(-3.5, 0, HUB - 5);
    // NPCs, Tore, Ringlauf
    L.npc(-10, 0, -3, 'shop', 0xffd23f, 1.2);
    L.npc(10, 0, -3, 'lost', 0xffb3d1, -1.2);
    const bossOpen = g.bossOpen(w);
    L.portal(0, 0, -11, 0, { type: 'boss' }, g.t(`worlds.${w}.boss`), bossOpen ? g.t('ui.boss') : g.t('ui.needMoonsBoss', { n: g.bossReq(w) }), !bossOpen);
    const keyOk = g.hasKey(w);
    L.pipe(-11.5, 0, 5.5, { type: 'bonus' }, g.t('ui.bonusLevel'), keyOk ? g.challengeSub(w, 6) : '🔒', !keyOk);
    if (w === 0) {
      L.hint(4, 0, 10, 3, 'move');
      L.hint(-6, 0, 9.5, 2.6, 'moonstones');
      L.hint(3, 0, 13.5, 2.2, 'ship', false);
    } else if (w >= 3) L.hint(4, 0, 10, 3, 'world_' + W.id);
    if (S.trees && S.trees.length) for (const [a, rr] of [[0.9, 13], [2.3, 13.5], [4.0, 13], [5.3, 13.5]]) L.tree(Math.cos(a) * rr, 0, Math.sin(a) * rr, pick(S.trees));
    if (!g.hasMoon(w, 'rings')) {
      const pts = [];
      for (let i = 0; i < 9; i++) { const a = -Math.PI / 2 + 0.5 + i / 9 * Math.PI * 2 * 0.92; pts.push([Math.cos(a) * 13.8, 1.3 + (i % 3) * 0.6, Math.sin(a) * 13.8]); }
      L.ringRace(pts, 14, 'rings');
    }

    // ---- fünf Inselketten ----
    const H = [-2.35, -1.2, 0, 1.2, 2.35];
    spread = 0.5;
    const spokeArenas = [];
    const spokeArenas2 = [];
    const peaks = [];
    const courseAt = [];
    for (let k = 0; k < 5; k++) {
      baseH = heading = H[k]; cur = start;
      const n1 = 3 + Math.floor(r() * 2);
      for (let i = 0; i < n1; i++) { const nm = chooseSeg(); if (!SEG[nm]()) SEG.hops(); }
      let a = arena(true);
      if (!a) { SEG.hops(); a = arena(true); }
      if (a) { spokeArenas.push(a); courseAt[k] = a; }
      // zweite Arena unterwegs (Platz für Quests und Gegner), dann weiter zum Gipfel
      const n2 = 2 + Math.floor(r() * 2);
      for (let i = 0; i < n2; i++) { const nm = chooseSeg(); if (!SEG[nm]()) SEG.hops(); }
      const a2 = arena(true);
      if (a2) { spokeArenas2.push(a2); }
      for (let i = 0; i < n2; i++) { const nm = chooseSeg(); if (!SEG[nm]()) SEG.hops(); }
      // Gipfel
      SEG.stairs();
      const peak = place(R(1.6, 2.4), R(1.2, 1.8), 2.4, 'island');
      const top = peak || cur;
      L.moon(top.x, top.y + 1.5, top.z, 'peak' + k);
      L.sparkRing(top.x, top.y + 1.2, top.z, 1.4, 5);
      L.label(g.t('ui.peak'), '', top.x, top.y + 4.2, top.z);
      if (peak) { arenas.push(peak); peaks.push(peak); }
    }
    for (const a of spokeArenas) arenas.push(a);
    // ---- Röhren zu den 5 Herausforderungs-Levels (Sublevels): an der ersten Arena jeder Inselkette ----
    for (let k = 0; k < 5; k++) {
      const ar = courseAt[k] || start;
      const pa = (ar.h || 0) + Math.PI / 2 * (k % 2 ? 1 : -1);
      const off = Math.max(1.5, ar.r - 2.4);
      const px = ar.x + Math.sin(pa) * off, pz = ar.z - Math.cos(pa) * off;
      L.pipe(px, ar.y, pz, { type: 'challenge', i: k }, g.t(`worlds.${w}.levels.${k}`), g.challengeSub(w, k), false);
    }
    for (const a of spokeArenas2) arenas.push(a);

    // ---- Mondsplitter-Verstecke ----
    const moonAt = (id) => (p) => { L.moon(p.x, p.y + 1.4, p.z, id); L.sparkRing(p.x, p.y + 1.2, p.z, 1.2, 4); };
    let fallbackN = 0;
    const fallback = (id) => { const a = 0.4 + fallbackN++ * 0.9; L.poundSpot(Math.cos(a) * 7, 0, Math.sin(a) * 7 - 2, id); };
    const ensure = (id, fn) => { if (!fn()) fallback(id); };
    usedAnchors = new Set();
    for (let i = 0; i < 3; i++) ensure('branch' + i, () => branch(moonAt('branch' + i)) || high(moonAt('branch' + i)));
    ensure('hid0', () => branch(moonAt('hid0'), true) || high(moonAt('hid0')));
    below(moonAt('hid1'));
    ensure('hid2', () => high(moonAt('hid2')) || branch(moonAt('hid2'), true));
    // Schlüssel zum Bonus-Tor
    if (!keyOk) { if (!branch((p) => L.keyAt(p.x, p.y + 1.4, p.z), true)) high((p) => L.keyAt(p.x, p.y + 1.4, p.z)); }
    // verlorenes Kuscheltier
    if (!g.hasMoon(w, 'lost')) {
      if (!high((p) => L.lostItem(p.x, p.y + 0.6, p.z))) { const a = pick(spokeArenas); L.lostItem(a.x, a.y + 0.6, a.z); }
    }
    // Stampfstellen und Kisten auf Arenen
    const spots = spokeArenas.slice();
    const spotOn = (a, k) => { const ang = r() * 6.28; return [a.x + Math.cos(ang) * a.r * 0.55 * k, a.z + Math.sin(ang) * a.r * 0.55 * k]; };
    for (let i = 0; i < 2; i++) { const a = spots[(i * 2 + 1) % spots.length]; const [x, z] = spotOn(a, 0.7); L.poundSpot(x, a.y, z, 'pound' + i); }
    for (let i = 0; i < 2; i++) { const a = spots[(i * 2 + 2) % spots.length]; const [x, z] = spotOn(a, 1); L.crate(x, a.y, z, 2, 'crate' + i); }
    // Nebelnest
    const nestA = spots[0] || start;
    L.nest(nestA, 'nest');
    // fünf Mondfunken auf Plattformen verteilt
    if (!g.hasMoon(w, 'pieces')) {
      const cands = placed.filter((q) => !q.obstacle && q !== start && q.r < 4 && q.r > 1);
      for (let i = 0; i < 5; i++) { const q = cands[Math.floor(r() * cands.length)]; if (q) L.piece(q.x, q.y + 1.3, q.z); }
      L.piecesMoon = { pos: { x: 0, y: 2.5, z: 0 }, id: 'pieces' };
    }

    // ---- Quests: sechs Auftraggeber mit verschiedenen Aufgaben ----
    if (L.quests) buildQuests(spokeArenas, spokeArenas2, peaks);

  }

  // ---------------- Kulisse ----------------
  if (kind === 'kingdom') {
    // keine schwebenden Hintergrund-Inseln mehr: das Reich ist eine zusammenhängende Landschaft (Wolken nur am Himmel)
    L.clouds(18, 0, 0, 700, 45, 90, W.theme.cloud, W.id === 'coral' ? 0.5 : 0.9);
  } else {
    L.clouds(8, 0, -60, 300, 45, 80, W.theme.cloud, W.id === 'coral' ? 0.5 : 0.9);
  }
  if (S.ships) for (let i = 0; i < (kind === 'kingdom' ? 8 : 4); i++) L.airship(R(-40, 40) * (kind === 'kingdom' ? 3 : 1), R(15, 45), kind === 'kingdom' ? R(-120, 120) : -i * 35 - 20, r() * 6);
  if (S.gears) for (let i = 0; i < (kind === 'kingdom' ? 12 : 6); i++) L.gear(R(-50, 50) + (i % 2 ? 30 : -30) * (kind === 'kingdom' ? 3 : 1), R(-10, 30), kind === 'kingdom' ? R(-140, 140) : -i * 25, R(4, 9), (r() - 0.5) * 0.6, r() * 3);
  L.par = Math.round(12 + pathLen / 6.2 + segCount * 2.5);
}
