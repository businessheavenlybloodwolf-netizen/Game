// Große, zusammenhängende Landschaft unter jedem Level – statt schwebender Inseln.
// Höhenfeld (2-m-Raster) aus Hügeln, Bergrücken entlang der Wege und einem Gebirgsring als Weltgrenze.
// Alle Plattformen stehen darauf (Felssäulen/Tafelberge). Herausforderungen liegen in Senken mit Wasser, Lava oder Nebel:
// wer dort hineinfällt, startet am letzten Checkpoint neu.
import * as THREE from 'three';

// Wertrauschen (deterministisch)
function hash(x, y, s) { const h = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453; return h - Math.floor(h); }
function vnoise(x, y, s) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi, s), b = hash(xi + 1, yi, s), c = hash(xi, yi + 1, s), d = hash(xi + 1, yi + 1, s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x, y, s, oct = 4) { let a = 0.5, t = 0, f = 1; for (let i = 0; i < oct; i++) { t += a * vnoise(x * f, y * f, s + i * 13); f *= 2.03; a *= 0.5; } return t; }

// Gelände-Texturen je Welt: [oben, Hang]
export const TERRAIN_TEX = {
  meadow: ['grassPlain', 'dirt'], crystal: ['crystalTop', 'crystalRock'], sky: ['cloudSea', 'cloudSea'], lava: ['basaltTop', 'basalt'],
  ice: ['snow', 'snowCliff'], desert: ['sand', 'sandstone'], coral: ['coral', 'seaRock'], fog: ['brickTop', 'towerCliff'],
};
// Senken-Füllung je Welt: [Textur, Farbe]
const HAZARD = {
  meadow: ['water', 0x9fe0ff], crystal: ['water', 0xb08aff], sky: ['cloudSea', 0xffffff], lava: ['lava', 0xffffff],
  ice: ['water', 0xcfefff], desert: ['sand', 0xc89a5a], coral: ['water', 0x6fe8d8], fog: ['cloudSeaNight', 0xb8a8e8],
};

export class Terrain {
  // o: { minX, maxX, minZ, maxZ, cell, seed, kingdom, center, radius }
  constructor(o) {
    this.cell = o.cell || 2;
    this.minX = o.minX; this.minZ = o.minZ;
    this.nx = Math.ceil((o.maxX - o.minX) / this.cell) + 1;
    this.nz = Math.ceil((o.maxZ - o.minZ) / this.cell) + 1;
    this.maxX = this.minX + (this.nx - 1) * this.cell; this.maxZ = this.minZ + (this.nz - 1) * this.cell;
    this.h = new Float32Array(this.nx * this.nz);
    this.seed = o.seed || 1;
    this.hazards = [];
    this.col = { type: 'terrain', maxY: 0, minY: -1e9, dx: 0, dy: 0, dz: 0, ice: !!o.ice };
    this.bound = o.bound; // Weltgrenze: { cx, cz, r } (rund) oder { minX, maxX, minZ, maxZ }
  }

  idx(i, j) { return j * this.nx + i; }
  px(i) { return this.minX + i * this.cell; }
  pz(j) { return this.minZ + j * this.cell; }

  // Grundform: sanfte Hügel + Gebirge am Rand
  base(fn) { for (let j = 0; j < this.nz; j++) for (let i = 0; i < this.nx; i++) this.h[this.idx(i, j)] = fn(this.px(i), this.pz(j)); }

  // Rasteroperation in einem Umkreis: f(x, z, d) liefert neuen Wert oder undefined; op 'max' / 'min'
  raster(cx, cz, rad, op, f) {
    const c = this.cell;
    const i0 = Math.max(0, Math.floor((cx - rad - this.minX) / c)), i1 = Math.min(this.nx - 1, Math.ceil((cx + rad - this.minX) / c));
    const j0 = Math.max(0, Math.floor((cz - rad - this.minZ) / c)), j1 = Math.min(this.nz - 1, Math.ceil((cz + rad - this.minZ) / c));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const x = this.px(i), z = this.pz(j);
      const v = f(x, z);
      if (v === undefined) continue;
      const k = this.idx(i, j);
      this.h[k] = op === 'max' ? Math.max(this.h[k], v) : Math.min(this.h[k], v);
    }
  }

  // Obergrenze: innerhalb von inner höchstens limit, danach mit Steigung ansteigend (begehbare Hänge)
  capCircle(x, z, inner, limit, slope = 0.6, reach = 30) {
    this.raster(x, z, inner + reach, 'min', (px, pz) => { const d = Math.hypot(px - x, pz - z); return limit + Math.max(0, d - inner) * slope; });
  }
  capSegment(ax, az, bx, bz, inner, limit, slope = 0.6, reach = 20) {
    const cx = (ax + bx) / 2, cz = (az + bz) / 2, half = Math.hypot(bx - ax, bz - az) / 2;
    const vx = bx - ax, vz = bz - az, l2 = vx * vx + vz * vz || 1;
    this.raster(cx, cz, half + inner + reach, 'min', (px, pz) => {
      const t = Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / l2));
      const d = Math.hypot(ax + vx * t - px, az + vz * t - pz);
      return limit + Math.max(0, d - inner) * slope;
    });
  }
  liftCircle(x, z, inner, val, slope = 0.35, reach = 30) {
    this.raster(x, z, inner + reach, 'max', (px, pz) => { const d = Math.hypot(px - x, pz - z); return val - Math.max(0, d - inner) * slope; });
  }

  // Höhe an beliebiger Stelle (bilinear – passt exakt zum Mesh)
  height(x, z) {
    let fx = (x - this.minX) / this.cell, fz = (z - this.minZ) / this.cell;
    fx = Math.max(0, Math.min(this.nx - 1.001, fx)); fz = Math.max(0, Math.min(this.nz - 1.001, fz));
    const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j;
    const a = this.h[this.idx(i, j)], b = this.h[this.idx(i + 1, j)], c = this.h[this.idx(i, j + 1)], d = this.h[this.idx(i + 1, j + 1)];
    // gleiche Dreiecksaufteilung wie die PlaneGeometry
    if (u + v <= 1) return a + (b - a) * u + (c - a) * v;
    return d + (c - d) * (1 - u) + (b - d) * (1 - v);
  }
  slope(x, z) {
    const e = 0.5;
    return Math.hypot(this.height(x + e, z) - this.height(x - e, z), this.height(x, z + e) - this.height(x, z - e)) / (2 * e);
  }

  // Gefahrenzone (Wasser/Lava/Nebel in einer Senke)?
  hazardAt(x, y, z) {
    for (const hz of this.hazards) {
      if (x < hz.minX || x > hz.maxX || z < hz.minZ || z > hz.maxZ) continue;
      if (hz.mask) { const i = Math.round((x - this.minX) / this.cell), j = Math.round((z - this.minZ) / this.cell); if (!hz.mask[this.idx(Math.max(0, Math.min(this.nx - 1, i)), Math.max(0, Math.min(this.nz - 1, j)))]) continue; }
      if (y < hz.level + 0.15 && this.height(x, z) < hz.level) return hz;
    }
    return null;
  }

  // Weltgrenze: Position ggf. zurückschieben
  clampBound(p) {
    const b = this.bound; if (!b) return;
    if (b.r) {
      const dx = p.x - b.cx, dz = p.z - b.cz, d = Math.hypot(dx, dz);
      if (d > b.r) { p.x = b.cx + dx / d * b.r; p.z = b.cz + dz / d * b.r; }
    } else {
      p.x = Math.max(b.minX, Math.min(b.maxX, p.x)); p.z = Math.max(b.minZ, Math.min(b.maxZ, p.z));
    }
  }

  // ---------- Darstellung ----------
  buildMesh(T, worldId, tint = 0xffffff) {
    const g = new THREE.PlaneGeometry(this.maxX - this.minX, this.maxZ - this.minZ, this.nx - 1, this.nz - 1);
    g.rotateX(-Math.PI / 2);
    g.translate((this.minX + this.maxX) / 2, 0, (this.minZ + this.maxZ) / 2);
    const p = g.attributes.position;
    // PlaneGeometry: Zeilen von -z nach +z? nach rotateX liegen Zeilen von minZ … maxZ, Spalten minX … maxX
    const col = new Float32Array(p.count * 3);
    for (let k = 0; k < p.count; k++) {
      const x = p.getX(k), z = p.getZ(k);
      const i = Math.round((x - this.minX) / this.cell), j = Math.round((z - this.minZ) / this.cell);
      p.setY(k, this.h[this.idx(i, j)]);
      const n = 0.86 + fbm(x / 23, z / 23, this.seed + 5, 3) * 0.28;
      col[k * 3] = n; col[k * 3 + 1] = n; col[k * 3 + 2] = n;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.computeVertexNormals();
    g.computeBoundingSphere();
    const [topKey, sideKey] = TERRAIN_TEX[worldId] || TERRAIN_TEX.meadow;
    const mat = triplanarMaterial(T[topKey], T[sideKey], tint);
    const mesh = new THREE.Mesh(g, mat);
    mesh.receiveShadow = true;
    mesh.userData.terrain = true;
    this.mesh = mesh;
    return mesh;
  }

  hazardMeshes(T, worldId) {
    const out = [];
    const [key, color] = HAZARD[worldId] || HAZARD.meadow;
    for (const hz of this.hazards) {
      const w = hz.maxX - hz.minX, d = hz.maxZ - hz.minZ;
      const tex = T[key].clone(); tex.needsUpdate = true; tex.repeat.set(w / 12, d / 12);
      const lava = key === 'lava';
      // Wasserfläche im Gelände-Raster: außerhalb der Senke taucht sie unter den Boden (organische Uferlinie)
      const geo = new THREE.PlaneGeometry(w, d, Math.max(1, Math.round(w / this.cell)), Math.max(1, Math.round(d / this.cell)));
      geo.rotateX(-Math.PI / 2);
      geo.translate((hz.minX + hz.maxX) / 2, 0, (hz.minZ + hz.maxZ) / 2);
      const p = geo.attributes.position;
      for (let k = 0; k < p.count; k++) {
        const x = p.getX(k), z = p.getZ(k);
        const i = Math.round((x - this.minX) / this.cell), j = Math.round((z - this.minZ) / this.cell);
        const inside = i >= 0 && j >= 0 && i < this.nx && j < this.nz && (!hz.mask || hz.mask[this.idx(i, j)]);
        p.setY(k, inside ? hz.level : Math.min(hz.level, this.height(x, z) - 1.2));
      }
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex, color, roughness: lava ? 0.6 : 0.08, metalness: 0, emissive: lava ? 0xff5a1a : 0x000000, emissiveIntensity: lava ? 0.9 : 0, emissiveMap: lava ? tex : null, transparent: !lava, opacity: lava ? 1 : 0.88 }));
      m.userData.flow = tex; m.userData.lava = lava;
      out.push(m);
    }
    return out;
  }
}

// Triplanare Projektion: oben die Boden-Textur, an Hängen die Fels-Textur – ohne gestreckte Texturen an steilen Stellen
function triplanarMaterial(topTex, sideTex, tint) {
  const m = new THREE.MeshStandardMaterial({ color: tint, roughness: 0.9, metalness: 0, vertexColors: true });
  const tt = topTex.clone(); tt.needsUpdate = true; tt.wrapS = tt.wrapT = THREE.RepeatWrapping;
  const st = sideTex.clone(); st.needsUpdate = true; st.wrapS = st.wrapT = THREE.RepeatWrapping;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.tTop = { value: tt }; sh.uniforms.tSide = { value: st };
    sh.vertexShader = 'varying vec3 vTriPos; varying vec3 vTriN;\n' + sh.vertexShader.replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
      vTriPos = (modelMatrix * vec4(transformed, 1.0)).xyz; vTriN = normalize(mat3(modelMatrix) * objectNormal);`);
    sh.fragmentShader = 'uniform sampler2D tTop; uniform sampler2D tSide; varying vec3 vTriPos; varying vec3 vTriN;\n' + sh.fragmentShader.replace('#include <map_fragment>', `
      vec3 tn = abs(normalize(vTriN));
      vec2 uvTop = vTriPos.xz / 4.0;
      vec4 cTop = texture2D(tTop, uvTop) * 0.6 + texture2D(tTop, uvTop * 0.23 + 0.37) * 0.4;
      vec4 cX = texture2D(tSide, vTriPos.zy / 4.0), cZ = texture2D(tSide, vTriPos.xy / 4.0);
      vec4 cSide = (cX * tn.x + cZ * tn.z) / max(0.001, tn.x + tn.z);
      float up = smoothstep(0.62, 0.84, tn.y);
      diffuseColor *= mix(cSide, cTop, up);`);
  };
  m.customProgramCacheKey = () => 'triplanar-terrain';
  return m;
}

export { fbm };
