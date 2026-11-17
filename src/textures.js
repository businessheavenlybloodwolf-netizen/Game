// Alle Texturen werden prozedural zur Laufzeit auf Canvas gemalt – keine externen Bilddateien.
import * as THREE from 'three';

export function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

// Kachelbares Value-Noise
function valueNoise(cells, seed) {
  const r = rng(seed);
  const g = new Float32Array(cells * cells);
  for (let i = 0; i < g.length; i++) g[i] = r();
  return (u, v) => {
    const fx = u * cells, fy = v * cells;
    const x0 = Math.floor(fx), y0 = Math.floor(fy);
    const tx = fx - x0, ty = fy - y0;
    const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    const xa = ((x0 % cells) + cells) % cells, xb = (xa + 1) % cells;
    const ya = ((y0 % cells) + cells) % cells, yb = (ya + 1) % cells;
    const a = g[ya * cells + xa], b = g[ya * cells + xb];
    const c = g[yb * cells + xa], d = g[yb * cells + xb];
    return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
  };
}

function fbm(seed, base = 4, octaves = 4) {
  const ns = [];
  for (let o = 0; o < octaves; o++) ns.push(valueNoise(base << o, seed * 31 + o * 7));
  return (u, v) => {
    let sum = 0, amp = 0.5, norm = 0;
    for (const n of ns) { sum += n(u, v) * amp; norm += amp; amp *= 0.5; }
    return sum / norm;
  };
}

// Kachelbares Voronoi: liefert [f1, f2, id]
function voronoi(count, seed) {
  const r = rng(seed);
  const pts = [];
  for (let i = 0; i < count; i++) pts.push([r(), r(), r()]);
  return (u, v) => {
    let f1 = 9, f2 = 9, id = 0;
    for (const p of pts) {
      let dx = Math.abs(u - p[0]); dx = Math.min(dx, 1 - dx);
      let dy = Math.abs(v - p[1]); dy = Math.min(dy, 1 - dy);
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < f1) { f2 = f1; f1 = d; id = p[2]; } else if (d < f2) f2 = d;
    }
    return [f1, f2, id];
  };
}

const hex = (h) => [(h >> 16) & 255, (h >> 8) & 255, h & 255];
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const clamp01 = (x) => Math.max(0, Math.min(1, x));

// Texturqualität: 1 = Standard (256 px), 2 = Ultra (512 px). Vektorzeichnungen werden mitskaliert.
let Q = 1;
let ANISO = 4;
export function setAnisotropy(a) { ANISO = a; }
export function setTextureQuality(q) { Q = q; }

function paint(size, fn) {
  const S = Math.round(size * Q);
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(S, S);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const col = fn(x / S, y / S, Math.floor(x / Q), Math.floor(y / Q));
      const i = (y * S + x) * 4;
      img.data[i] = col[0]; img.data[i + 1] = col[1]; img.data[i + 2] = col[2]; img.data[i + 3] = col[3] ?? 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  ctx.scale(Q, Q);
  return { canvas: c, ctx };
}

function toTexture(canvas, repeat = true) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = ANISO;
  t.needsUpdate = true;
  return t;
}

// ---------- einzelne Maler ----------
function grass(palette) {
  const n = fbm(11, 4, 4), n2 = fbm(12, 16, 2);
  const a = hex(palette[0]), b = hex(palette[1]), c = hex(palette[2]);
  const { canvas, ctx } = paint(256, (u, v) => {
    const t = n(u, v), t2 = n2(u, v);
    let col = mix(a, b, clamp01((t - 0.3) * 2));
    col = mix(col, c, clamp01((t2 - 0.6) * 3) * 0.6);
    return col;
  });
  const r = rng(99);
  // Grashalme
  for (let i = 0; i < 900; i++) {
    const x = r() * 256, y = r() * 256, l = 3 + r() * 5;
    ctx.strokeStyle = r() < 0.5 ? 'rgba(20,70,30,0.35)' : 'rgba(210,255,170,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 3, y - l); ctx.stroke();
  }
  // kleine Blüten
  if (palette[3] !== undefined) {
    const flowers = ['#fff6e0', '#ffb3d1', '#ffe066', '#c9b6ff'];
    for (let i = 0; i < 40; i++) {
      const x = r() * 256, y = r() * 256;
      ctx.fillStyle = flowers[Math.floor(r() * flowers.length)];
      for (let k = 0; k < 5; k++) {
        const ang = k / 5 * Math.PI * 2;
        ctx.beginPath(); ctx.arc(x + Math.cos(ang) * 1.6, y + Math.sin(ang) * 1.6, 1.3, 0, 7); ctx.fill();
      }
      ctx.fillStyle = '#ffcf3a'; ctx.beginPath(); ctx.arc(x, y, 1, 0, 7); ctx.fill();
    }
  }
  return toTexture(canvas);
}

function cliff(palette, seed = 21) {
  const n = fbm(seed, 4, 4), n2 = fbm(seed + 1, 8, 3);
  const a = hex(palette[0]), b = hex(palette[1]), c = hex(palette[2]);
  const { canvas } = paint(256, (u, v) => {
    const warp = n(u, v) * 0.25;
    const band = Math.sin((v + warp) * Math.PI * 2 * 4) * 0.5 + 0.5;
    let col = mix(a, b, band);
    const t = n2(u, v);
    col = mix(col, c, clamp01((t - 0.55) * 4) * 0.7);
    const shade = 0.85 + n(u * 1, v) * 0.3;
    return [col[0] * shade, col[1] * shade, col[2] * shade];
  });
  return toTexture(canvas);
}

function cobble(palette, seed = 31, cells = 18) {
  const vor = voronoi(cells, seed), n = fbm(seed + 3, 8, 3);
  const a = hex(palette[0]), b = hex(palette[1]), m = hex(palette[2]);
  const { canvas } = paint(256, (u, v) => {
    const [f1, f2, id] = vor(u, v);
    const edge = f2 - f1;
    let col = mix(a, b, id);
    const nn = n(u, v);
    col = [col[0] * (0.8 + nn * 0.4), col[1] * (0.8 + nn * 0.4), col[2] * (0.8 + nn * 0.4)];
    if (edge < 0.02) col = mix(m, col, edge / 0.02 * 0.5);
    // Licht oben links auf jedem Stein
    const hl = clamp01(1 - f1 * 10) * 0.15;
    return [col[0] + 255 * hl, col[1] + 255 * hl, col[2] + 255 * hl];
  });
  return toTexture(canvas);
}

function crystalRock() {
  const n = fbm(41, 4, 5), vein = fbm(42, 6, 3);
  const a = hex(0x2a2350), b = hex(0x4a3c7a), glow = hex(0x7ff6ff);
  const { canvas } = paint(256, (u, v) => {
    let col = mix(a, b, n(u, v));
    const r = Math.abs(vein(u, v) - 0.5);
    if (r < 0.025) col = mix(glow, col, r / 0.025);
    return col;
  });
  return toTexture(canvas);
}

function crystalTop() {
  const vor = voronoi(14, 51), n = fbm(52, 8, 3);
  const a = hex(0x3d3470), b = hex(0x5b4b9a), glow = hex(0x9af3ff);
  const { canvas } = paint(256, (u, v) => {
    const [f1, f2, id] = vor(u, v);
    let col = mix(a, b, id * 0.7 + n(u, v) * 0.3);
    const e = f2 - f1;
    if (e < 0.015) col = mix(glow, col, e / 0.015);
    return col;
  });
  return toTexture(canvas);
}

function wood(palette = [0x9a6438, 0xc08850, 0x4a2a14], seed = 61) {
  const n = fbm(seed, 4, 3), grain = valueNoise(64, seed + 1);
  const a = hex(palette[0]), b = hex(palette[1]), dark = hex(palette[2]);
  const r = rng(seed + 2);
  const rows = 6, tone = [];
  for (let i = 0; i < rows; i++) tone.push(r());
  const { canvas, ctx } = paint(256, (u, v) => {
    const row = Math.floor(v * rows);
    const inRow = v * rows - row;
    const g = grain(u * 0.08 + row * 0.13, v * 1.5 + n(u, v) * 0.3);
    let col = mix(a, b, tone[row] * 0.6 + g * 0.4);
    const stripe = Math.sin((u * 40 + n(u, v) * 6 + row) * Math.PI) * 0.5 + 0.5;
    col = mix(col, dark, stripe * 0.12);
    if (inRow < 0.06 || inRow > 0.96) col = mix(col, dark, 0.8);
    return col;
  });
  // Nägel
  for (let i = 0; i < rows; i++) {
    const y = (i + 0.5) / rows * 256;
    for (const x of [12, 140]) {
      ctx.fillStyle = '#3a2614'; ctx.beginPath(); ctx.arc(x + (i % 2) * 50, y, 3, 0, 7); ctx.fill();
      ctx.fillStyle = '#c9a77a'; ctx.beginPath(); ctx.arc(x + (i % 2) * 50 - 1, y - 1, 1.2, 0, 7); ctx.fill();
    }
  }
  return toTexture(canvas);
}

function brick(palette, seed = 71, glyphs = false) {
  const n = fbm(seed, 8, 3);
  const a = hex(palette[0]), b = hex(palette[1]), m = hex(palette[2]);
  const r = rng(seed);
  const rows = 8, cols = 4, tones = [];
  for (let i = 0; i < rows * cols * 2; i++) tones.push(r());
  const { canvas, ctx } = paint(256, (u, v) => {
    const row = Math.floor(v * rows);
    const off = row % 2 ? 0.5 / cols : 0;
    const uu = (u + off) % 1;
    const col = Math.floor(uu * cols);
    const fy = v * rows - row, fx = uu * cols - col;
    let c = mix(a, b, tones[row * cols + col]);
    const nn = n(u, v);
    c = [c[0] * (0.8 + nn * 0.35), c[1] * (0.8 + nn * 0.35), c[2] * (0.8 + nn * 0.35)];
    if (fy < 0.08 || fx < 0.04) c = m;
    else if (fy < 0.16) c = mix(c, [255, 255, 255], 0.08);
    return c;
  });
  if (glyphs) {
    ctx.strokeStyle = 'rgba(200,120,255,0.75)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      const x = 20 + r() * 210, y = 20 + r() * 210;
      ctx.beginPath();
      ctx.moveTo(x, y); ctx.lineTo(x + 8, y - 10); ctx.lineTo(x + 16, y); ctx.lineTo(x + 8, y + 10); ctx.closePath();
      ctx.moveTo(x + 8, y - 14); ctx.lineTo(x + 8, y + 14);
      ctx.stroke();
    }
  }
  return toTexture(canvas);
}

function metal() {
  const n = fbm(81, 8, 3);
  const a = hex(0xb98b3a), b = hex(0xe2b75e);
  const { canvas, ctx } = paint(256, (u, v) => {
    let c = mix(a, b, n(u, v));
    const fx = (u * 2) % 1, fy = (v * 2) % 1;
    if (fx < 0.02 || fy < 0.02) c = mix(c, [60, 40, 10], 0.7);
    return c;
  });
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    for (const [dx, dy] of [[12, 12], [116, 12], [12, 116], [116, 116]]) {
      const x = i * 128 + dx, y = j * 128 + dy;
      ctx.fillStyle = '#6d4c18'; ctx.beginPath(); ctx.arc(x, y, 4, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff0b8'; ctx.beginPath(); ctx.arc(x - 1, y - 1, 1.6, 0, 7); ctx.fill();
    }
  }
  return toTexture(canvas);
}

function cloth(colA = 0xf4e8d0, colB = 0xd9c7a3) {
  const n = fbm(91, 16, 2);
  const a = hex(colA), b = hex(colB);
  const { canvas } = paint(128, (u, v, x, y) => {
    const weave = ((x + y) % 4 < 2) ? 0.04 : -0.04;
    let c = mix(a, b, n(u, v) * 0.6 + 0.2);
    c = [c[0] * (1 + weave), c[1] * (1 + weave), c[2] * (1 + weave)];
    if (y % 64 < 2) c = mix(c, [120, 90, 50], 0.5);
    return c;
  });
  return toTexture(canvas);
}

function cloudSea(palette) {
  const n = fbm(101, 3, 5);
  const a = hex(palette[0]), b = hex(palette[1]);
  const { canvas } = paint(256, (u, v) => {
    const t = n(u, v);
    return mix(a, b, clamp01((t - 0.35) * 2.2));
  });
  return toTexture(canvas);
}

function fogSkin() {
  const n = fbm(111, 4, 4);
  const a = hex(0x2b1e45), b = hex(0x6d4f99);
  const { canvas } = paint(128, (u, v) => mix(a, b, n(u, v)));
  return toTexture(canvas);
}

function fogGray() {
  const n = fbm(112, 4, 4);
  const { canvas } = paint(128, (u, v) => { const t = 150 + n(u, v) * 105; return [t, t, t]; });
  return toTexture(canvas);
}

function sandStripes() {
  const n = fbm(121, 4, 3);
  const a = hex(0xf6e2b3), b = hex(0xe9c98a);
  const { canvas } = paint(128, (u, v) => mix(a, b, (Math.sin((v + n(u, v) * 0.3) * 30) * 0.5 + 0.5) * 0.7));
  return toTexture(canvas);
}

function checker(a = 0xffffff, b = 0xffd84a) {
  const A = hex(a), B = hex(b);
  const { canvas } = paint(64, (u, v) => ((Math.floor(u * 4) + Math.floor(v * 4)) % 2 ? A : B));
  return toTexture(canvas);
}

function basalt() {
  const n = fbm(131, 4, 5), vein = fbm(132, 5, 3);
  const a = hex(0x2a1c1c), b = hex(0x4a3030), glow = hex(0xff7a2a);
  const { canvas } = paint(256, (u, v) => {
    let c = mix(a, b, n(u, v));
    const r = Math.abs(vein(u, v) - 0.5);
    if (r < 0.03) c = mix(glow, c, r / 0.03);
    return c;
  });
  return toTexture(canvas);
}

function lava() {
  const n = fbm(141, 3, 5), n2 = fbm(142, 6, 3);
  const a = hex(0xff3d00), b = hex(0xffc23a), d = hex(0x7a1500);
  const { canvas } = paint(256, (u, v) => {
    const t = n(u, v);
    let c = mix(a, b, clamp01((t - 0.45) * 3));
    const r = Math.abs(n2(u, v) - 0.5);
    if (r < 0.06) c = mix(d, c, r / 0.06);
    return c;
  });
  return toTexture(canvas);
}

function snow() {
  const n = fbm(151, 6, 4);
  const a = hex(0xdfeaf8), b = hex(0xffffff);
  const r = rng(152);
  const { canvas, ctx } = paint(256, (u, v) => mix(a, b, n(u, v)));
  for (let i = 0; i < 120; i++) { ctx.fillStyle = 'rgba(180,210,255,0.5)'; ctx.fillRect(r() * 256, r() * 256, 2, 2); }
  return toTexture(canvas);
}

function ice() {
  const vor = voronoi(10, 161), n = fbm(162, 4, 3);
  const a = hex(0x9fd8f5), b = hex(0xd8f4ff);
  const { canvas } = paint(256, (u, v) => {
    const [f1, f2] = vor(u, v);
    let c = mix(a, b, n(u, v));
    if (f2 - f1 < 0.012) c = mix([255, 255, 255], c, 0.3);
    return c;
  });
  return toTexture(canvas);
}

function coral() {
  const vor = voronoi(20, 171), n = fbm(172, 8, 3);
  const a = hex(0xff7a8a), b = hex(0xffb36b), m = hex(0x5a2a4a);
  const { canvas } = paint(256, (u, v) => {
    const [f1, f2, id] = vor(u, v);
    let c = mix(a, b, id * 0.6 + n(u, v) * 0.4);
    if (f2 - f1 < 0.02) c = mix(m, c, 0.4);
    const dot = clamp01(1 - f1 * 30);
    return mix(c, [255, 240, 220], dot * 0.6);
  });
  return toTexture(canvas);
}

function seaRock() {
  const n = fbm(181, 4, 5);
  const a = hex(0x1f4a5a), b = hex(0x3a7a7a), c2 = hex(0x6fd8c8);
  const { canvas } = paint(256, (u, v) => {
    let c = mix(a, b, n(u, v));
    return mix(c, c2, clamp01((n(u * 2 % 1, v) - 0.7) * 3) * 0.5);
  });
  return toTexture(canvas);
}

function water() {
  const n = fbm(191, 3, 5);
  const a = hex(0x0a3a5a), b = hex(0x2a8aa0);
  const { canvas } = paint(256, (u, v) => mix(a, b, clamp01((n(u, v) - 0.3) * 2)));
  return toTexture(canvas);
}

// ---------- Sprites ----------
function radial(size, stops) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [o, col] of stops) g.addColorStop(o, col);
  ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
  return c;
}

function sparkle() {
  const s = 64, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.2, 'rgba(255,240,180,0.8)'); g.addColorStop(1, 'rgba(255,200,80,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2, r = i % 2 ? 9 : 32;
    ctx.lineTo(32 + Math.cos(a) * r, 32 + Math.sin(a) * r);
  }
  ctx.closePath(); ctx.fill();
  return c;
}

export function createTextures() {
  const T = {
    grass: grass([0x5fae4a, 0x8fd65a, 0x3f8f3a, 1]),
    grassPlain: grass([0x67b552, 0x9ad964, 0x4a9a3e]),
    dirt: cliff([0x8a5a3a, 0xa8714a, 0x5e3a24]),
    stone: cobble([0x8f8fa3, 0xb7b6c6, 0x4b4a5e]),
    crystalRock: crystalRock(),
    crystalTop: crystalTop(),
    wood: wood(),
    darkWood: wood([0x5a3a2a, 0x7a5038, 0x2a160c], 63),
    brick: brick([0x3e2d5e, 0x58437f, 0x1d1430], 71, true),
    brickTop: cobble([0x4a3a6e, 0x6a5592, 0x1f1633], 77, 14),
    towerCliff: cliff([0x2e2346, 0x463466, 0x1a1029], 79),
    metal: metal(),
    cloth: cloth(),
    clothRed: cloth(0xd9584a, 0xb8443a),
    cloudSea: cloudSea([0xffe9f2, 0xffffff]),
    cloudSeaDusk: cloudSea([0x6b5a9a, 0xb9a7e0]),
    cloudSeaNight: cloudSea([0x1b1230, 0x3d2a5c]),
    fog: fogSkin(),
    fogGray: fogGray(),
    sand: sandStripes(),
    checker: checker(),
    basalt: basalt(),
    basaltTop: cobble([0x3a2a2a, 0x5a4040, 0x1a0e0e], 133, 16),
    lava: lava(),
    snow: snow(),
    ice: ice(),
    snowCliff: cliff([0x8aa0c0, 0xb8c8e0, 0x6a7a9a], 153),
    sandstone: brick([0xd9b26a, 0xe8c888, 0x9a7440], 155),
    sandTop: cobble([0xe8c888, 0xf2d9a0, 0xa88450], 156, 12),
    coral: coral(),
    seaRock: seaRock(),
    water: water(),
    clockTop: cobble([0x6a5a8a, 0x8a7aa8, 0x2a1f3a], 157, 10),
    glow: toTexture(radial(64, [[0, 'rgba(255,255,255,1)'], [0.35, 'rgba(255,255,255,0.5)'], [1, 'rgba(255,255,255,0)']]), false),
    puff: toTexture(radial(64, [[0, 'rgba(255,255,255,0.9)'], [0.6, 'rgba(255,255,255,0.4)'], [1, 'rgba(255,255,255,0)']]), false),
    sparkle: toTexture(sparkle(), false),
  };
  for (const k of Object.keys(T)) T[k].userData.name = k;
  // Toon-Verlauf
  const steps = new Uint8Array([90, 160, 225, 255]);
  const grad = new THREE.DataTexture(steps, steps.length, 1, THREE.RedFormat);
  grad.minFilter = grad.magFilter = THREE.NearestFilter;
  grad.needsUpdate = true;
  T.toonGradient = grad;
  return T;
}

// ---------- PC-Next-Gen: Normal-Maps aus den gemalten Texturen ----------
// Höhe = Helligkeit (Fugen, Risse, Halme sind dunkel → liegen tiefer). Sobel-Filter mit Kachel-Umbruch.
const normalCache = new Map();
export function normalMapFor(tex, strength = 2.5) {
  if (!tex || !tex.image || !tex.image.getContext) return null;
  const key = tex.uuid + '|' + strength;
  if (normalCache.has(key)) return normalCache.get(key);
  const src = tex.image, W = src.width, H = src.height;
  const d = src.getContext('2d').getImageData(0, 0, W, H).data;
  const h = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) h[i] = (d[i * 4] * 0.299 + d[i * 4 + 1] * 0.587 + d[i * 4 + 2] * 0.114) / 255;
  // leicht weichzeichnen, damit es nicht rauscht
  const hb = new Float32Array(W * H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    let s = 0;
    for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) s += h[((y + oy + H) % H) * W + ((x + ox + W) % W)];
    hb[y * W + x] = s / 9;
  }
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d'), img = ctx.createImageData(W, H), o = img.data;
  const k = strength * (W / 256);
  const at = (x, y) => hb[((y + H) % H) * W + ((x + W) % W)];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const dx = (at(x + 1, y - 1) + 2 * at(x + 1, y) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x - 1, y) + at(x - 1, y + 1));
    const dy = (at(x - 1, y + 1) + 2 * at(x, y + 1) + at(x + 1, y + 1)) - (at(x - 1, y - 1) + 2 * at(x, y - 1) + at(x + 1, y - 1));
    let nx = -dx * k, ny = dy * k, nz = 1;
    const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const i = (y * W + x) * 4;
    o[i] = (nx * 0.5 + 0.5) * 255; o[i + 1] = (ny * 0.5 + 0.5) * 255; o[i + 2] = (nz * 0.5 + 0.5) * 255; o[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  t.wrapS = tex.wrapS; t.wrapT = tex.wrapT; t.repeat.copy(tex.repeat); t.anisotropy = tex.anisotropy;
  t.needsUpdate = true;
  normalCache.set(key, t);
  return t;
}
