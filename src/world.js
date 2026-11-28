// Level-Aufbau, Objekte und deren Logik
import * as THREE from 'three';
import * as M from './models.js';
import { rng } from './textures.js';
import { boxCollider, cylCollider, moveCollider, overlapXZ } from './physics.js';
import { createBossFor } from './boss.js';
import { WORLDS } from './worlds.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { generateLevel, generateKingdom } from './generator.js';
import { Grass } from './grass.js';
import * as SH from './shapes.js';
import { QuestSystem } from './quests.js';
import { Terrain, fbm as tfbm } from './terrain.js';
import { decorateWorld } from './env.js';

const SURF = {
  grass: ['grass', 'dirt'], meadow: ['grassPlain', 'dirt'], stone: ['stone', 'stone'],
  crystal: ['crystalTop', 'crystalRock'], wood: ['wood', 'wood'], darkwood: ['darkWood', 'darkWood'],
  metal: ['metal', 'metal'], brick: ['brickTop', 'brick'], tower: ['brickTop', 'towerCliff'],
  sand: ['sand', 'dirt'], cloud: ['cloudSea', 'cloudSea'], checker: ['checker', 'wood'],
  basalt: ['basaltTop', 'basalt'], snow: ['snow', 'snowCliff'], ice: ['ice', 'ice'], sandstone: ['sandTop', 'sandstone'],
  coral: ['coral', 'seaRock'], sea: ['seaRock', 'seaRock'], clock: ['clockTop', 'brick'],
};

const GRASSY = new Set(['grass', 'meadow']);

function planarUV(geo, ox, oy, oz, tile) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i) + ox, y = p.getY(i) + oy, z = p.getZ(i) + oz;
    const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i));
    if (ny > 0.5) uv.setXY(i, x / tile, z / tile);
    else if (nx > 0.5) uv.setXY(i, z / tile, y / tile);
    else uv.setXY(i, x / tile, y / tile);
  }
  uv.needsUpdate = true;
}

function cylUV(geo, r, oy, ox, oz, tile) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i) + oy, z = p.getZ(i);
    if (Math.abs(n.getY(i)) > 0.5) uv.setXY(i, (x + ox) / tile, (z + oz) / tile);
    else uv.setXY(i, (Math.atan2(z, x) * r) / tile, y / tile);
  }
  uv.needsUpdate = true;
}

let streakTex = null;
function getStreakTex() {
  if (streakTex) return streakTex;
  const c = document.createElement('canvas'); c.width = 64; c.height = 256;
  const ctx = c.getContext('2d');
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * 64, y = Math.random() * 256, l = 20 + Math.random() * 60;
    const g = ctx.createLinearGradient(0, y, 0, y + l);
    g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,0.8)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(x, y, 2, l);
  }
  streakTex = new THREE.CanvasTexture(c);
  streakTex.wrapS = streakTex.wrapT = THREE.RepeatWrapping;
  return streakTex;
}

// wiederverwendete Hilfsobjekte (keine Speicher-Erzeugung pro Physikschritt → keine Ruckler durch Speicherbereinigung)
const _pc = new THREE.Vector3(), _wp = new THREE.Vector3(), _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _sc = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);

const SKY_VS = `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`;
const SKY_FS = `uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunCol; uniform float stars; uniform float linOut;
uniform float clouds; uniform float time; uniform vec3 cloudCol; varying vec3 vDir;
float hash(vec3 p){ p = fract(p*0.3183099+.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h2(i), h2(i+vec2(1,0)), f.x), mix(h2(i+vec2(0,1)), h2(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * vn(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
void main(){ vec3 d = normalize(vDir); float h = d.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
 float s = max(dot(d, normalize(sunDir)), 0.0); c += sunCol * (pow(s, 200.0) * 1.5 + pow(s, 12.0) * 0.25);
 if (clouds > 0.0 && h > 0.0) {
   // weiche Schichtwolken (PC-Next-Gen): Projektion auf eine Wolkenebene, langsam ziehend
   vec2 q = d.xz / (h + 0.12) * 1.6 + vec2(time * 0.012, time * 0.004);
   float n = fbm(q);
   float m = smoothstep(0.48, 0.78, n) * smoothstep(0.0, 0.22, h) * clouds;
   float shade = 0.75 + 0.25 * smoothstep(0.5, 0.9, fbm(q * 1.7 + 3.1));
   vec3 cc = cloudCol * shade + sunCol * pow(s, 6.0) * 0.6;
   c = mix(c, cc, m);
 }
 if (stars > 0.0 && h > 0.0) { vec3 q = floor(d * 220.0); float st = step(0.997, hash(q)); c += vec3(st) * stars * h; }
 if (linOut > 0.5) c = pow(max(c, vec3(0.0)), vec3(2.2)); gl_FragColor = vec4(c, 1.0); }`;

export class Level {
  constructor(spec, game) {
    this.spec = spec;
    const W = WORLDS[spec.world];
    this.worldDef = W;
    const theme = spec.star ? { ...W.theme, stars: 1, skyTop: 0x0a0820, fogFar: W.theme.fogFar * 0.8, hemiI: (W.theme.hemiI || 1.6) * 0.9 } : W.theme;
    const def = this.def = { ...W.style, theme, seed: spec.seed, killY: W.killY };
    this.game = game;
    this.gravity = W.gravity || 1;
    this.links = [];
    this.blinks = []; this.geysers = []; this.ghosts = []; this.moonstones = []; this.keyItem = null;
    this.interactables = []; this.poundSpots = []; this.pieces = []; this.rings = null; this.lost = null; this.nests = [];
    this.portals = []; this.labels = [];
    this.idPrefix = spec.idPrefix || '';
    this.freeze = false;
    this.staticRoots = [];
    this.T = game.T;
    this.group = new THREE.Group();
    this.colliders = [];
    this.cameraMeshes = [];
    this.sparks = []; this.hearts = []; this.enemies = []; this.movers = []; this.crumbles = [];
    this.bouncers = []; this.checkpoints = []; this.updrafts = []; this.firebars = []; this.hints = [];
    this.crates = []; this.anim = []; this.projectiles = [];
    this.grassAreas = []; this.grass = null;
    this.courses = []; this.courseTag = null;
    this.platRecs = []; this.terrain = null; this.vents = [];
    this.goal = null; this.boss = null;
    this.spawnPoint = { x: 0, y: 0, z: 0, yaw: 0 };
    this.rand = rng(def.seed || 7);
    this.killY = def.killY ?? -25;
    this.time = 0;
    this.sparkTotal = 0;
    this.mats = {};
    this.quests = spec.kind === 'kingdom' ? new QuestSystem(this) : null;
    const T0 = performance.now();
    this.loadTimes = {};
    this.setupEnvironment();
    const Ta = performance.now();
    if (spec.build) spec.build(this);
    else if (spec.kind === 'kingdom') generateKingdom(this, spec);
    else generateLevel(this, spec);
    this.par = this.par || 60;
    const Tb = performance.now();
    this.buildTerrain();
    this.genTimes = { env: Math.round(Ta - T0), gen: Math.round(Tb - Ta) };
    const T1 = performance.now();
    M.refine(this.group);
    const T2 = performance.now();
    this.bakeStatic();
    const T3 = performance.now();
    const gp = game.gfx && game.gfx.p;
    if (gp && gp.modern && gp.grass && this.grassAreas.length) {
      const areas = this.grassAreas.filter((a) => !a.mesh.userData.dyn);
      this.grass = new Grass(this, areas, 14 * gp.grass, 30 + 12 * gp.grass);
    }
    this.loadTimes = { build: Math.round(T1 - T0), refine: Math.round(T2 - T1), bake: Math.round(T3 - T2), grass: Math.round(performance.now() - T3) };
    this.buildSparkInstances();
  }

  // Unbewegliche Teile pro Material zu wenigen großen Meshes verschmelzen (spart tausende Draw Calls).
  // Verschmolzen wird nur innerhalb von 60-m-Kacheln, damit Sicht- und Schatten-Culling weiter greifen.
  get batch() { return !this.game.gfx || this.game.gfx.p.batch; }

  bakeStatic() {
    this.group.updateMatrixWorld(true);
    const CELL = 60;
    const sig = (g) => Object.keys(g.attributes).sort().join(',') + (g.index ? '|i' : '|n');
    const pieces = [];
    for (const root of this.staticRoots) {
      if (root.userData.dyn) continue;
      root.traverse((o) => {
        if (!o.isMesh || o.userData.dyn) return;
        const src = o.geometry;
        if (!src.attributes.normal || !src.attributes.uv) return;
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        if (mats.some((m) => m.transparent || m.type === 'ShaderMaterial')) return;
        const base = src.clone();
        for (const k of Object.keys(base.attributes)) if (!['position', 'normal', 'uv'].includes(k)) base.deleteAttribute(k);
        base.applyMatrix4(o.matrixWorld);
        base.computeBoundingSphere();
        const c = base.boundingSphere.center;
        const cell = Math.floor(c.x / CELL) + ':' + Math.floor(c.z / CELL);
        const push = (geo, mat) => pieces.push({ geo, mat, obj: o, key: mat.uuid + '|' + sig(geo) + '|' + o.castShadow + o.receiveShadow + '|' + cell });
        if (Array.isArray(o.material) && base.groups.length && base.index) {
          for (const gr of base.groups) {
            const part = new THREE.BufferGeometry();
            for (const k of Object.keys(base.attributes)) part.setAttribute(k, base.attributes[k]);
            part.setIndex(Array.from(base.index.array.slice(gr.start, gr.start + gr.count)));
            push(part, o.material[gr.materialIndex]);
          }
        } else if (!Array.isArray(o.material)) {
          base.clearGroups();
          push(base, o.material);
        }
      });
    }
    const group = (list) => {
      const m = new Map();
      for (const p of list) { if (!m.has(p.key)) m.set(p.key, []); m.get(p.key).push(p); }
      return m;
    };
    const mergeList = (list) => (list.length === 1 ? list[0].geo : mergeGeometries(list.map((p) => p.geo), false));
    // Phase 1: welche Objekte lassen sich nicht vollständig verschmelzen?
    const failed = new Set();
    for (const list of group(pieces).values()) if (!mergeList(list)) for (const p of list) failed.add(p.obj);
    // Phase 2: nur Teile von vollständig verschmelzbaren Objekten zusammenfügen
    const ok = pieces.filter((p) => !failed.has(p.obj));
    let merged = 0;
    for (const list of group(ok).values()) {
      const g = mergeList(list);
      if (!g) continue;
      const p0 = list[0];
      const m = new THREE.Mesh(g, p0.mat);
      m.castShadow = p0.obj.castShadow; m.receiveShadow = p0.obj.receiveShadow;
      m.userData.baked = true;
      this.group.add(m);
      merged += list.length;
    }
    // Originale aus der Szene entfernen (spart Matrix-Updates jedes Bild). Ihre letzte Weltmatrix bleibt
    // für die Kamera-Kollision (Raycast auf cameraMeshes) erhalten.
    for (const p of ok) { p.obj.visible = false; if (p.obj.parent) p.obj.parent.remove(p.obj); }
    for (const root of this.staticRoots) {
      let hasMesh = false; root.traverse((o) => { if (o.isMesh || o.isSprite) hasMesh = true; });
      if (!hasMesh && root.parent) root.parent.remove(root);
    }
    // verschmolzene Meshes bewegen sich nie
    for (const ch of this.group.children) if (ch.userData.baked) { ch.updateMatrix(); ch.matrixAutoUpdate = false; }
    this.bakedCount = merged;
  }

  surf(name) {
    if (!this.mats[name]) {
      const [t, s] = SURF[name] || SURF.grass;
      this.mats[name] = { top: M.toon(0xffffff, { map: this.T[t] }), side: M.toon(0xffffff, { map: this.T[s] }) };
    }
    return this.mats[name];
  }

  add(obj) { this.group.add(obj); return obj; }

  // ---------------- Umgebung ----------------
  setupEnvironment() {
    const th = this.def.theme;
    const sunDir = new THREE.Vector3(...(th.sunDir || [0.5, 0.8, 0.3])).normalize();
    this.sunDir = sunDir;
    const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), new THREE.ShaderMaterial({
      vertexShader: SKY_VS, fragmentShader: SKY_FS, side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        top: { value: new THREE.Color(th.skyTop) }, horizon: { value: new THREE.Color(th.skyHorizon) },
        bottom: { value: new THREE.Color(th.skyBottom) }, sunDir: { value: sunDir }, sunCol: { value: new THREE.Color(th.sunColor || 0xfff2c0) },
        stars: { value: th.stars || 0 },
        linOut: { value: this.game.gfx && this.game.gfx.composer ? 1 : 0 },
        clouds: { value: this.game.gfx && this.game.gfx.modern ? (th.skyClouds ?? 0.75) : 0 }, time: { value: 0 },
        cloudCol: { value: new THREE.Color(th.cloudCol ?? 0xffffff) },
      },
    }));
    sky.renderOrder = -10;
    sky.frustumCulled = false;
    this.sky = sky;
    this.add(sky);
    const fogK = (this.game.gfx ? this.game.gfx.p.fog : 1) * (this.spec.kind === 'kingdom' ? 1.5 : 1);
    this.fog = new THREE.Fog(th.fog, th.fogNear * fogK, th.fogFar * fogK);
    const modern = this.game.gfx && this.game.gfx.modern;
    // PC-Next-Gen: einen Teil des Himmelslichts übernimmt die Umgebungskarte (IBL)
    const hemi = new THREE.HemisphereLight(th.hemiSky, th.hemiGround, (th.hemiI ?? 1.6) * (modern ? 0.55 : 1));
    this.add(hemi);
    const sun = new THREE.DirectionalLight(th.sunLight || 0xfff1d6, th.sunI ?? 2.6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera; sc.left = sc.bottom = -28; sc.right = sc.top = 28; sc.near = 1; sc.far = 120;
    sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.03;
    if (this.game.gfx) this.game.gfx.setupSun(sun);
    this.sun = sun; this.add(sun); this.add(sun.target);
    if (th.lavaY !== undefined && false) {
      const tex = this.T.lava.clone(); tex.needsUpdate = true; tex.repeat.set(80, 80);
      const lava = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshBasicMaterial({ map: tex }));
      lava.rotation.x = -Math.PI / 2; lava.position.y = th.lavaY;
      this.add(lava); this.seaTex = tex; this.lavaFlow = true;
      this.killY = th.lavaY - 0.5;
    }
    // Wolkenmeer
    if (th.sea && false) {
      const tex = this.T[th.sea].clone(); tex.needsUpdate = true;
      tex.repeat.set(60, 60);
      const sea = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), new THREE.MeshBasicMaterial({ map: tex, color: th.seaTint || 0xffffff }));
      sea.rotation.x = -Math.PI / 2; sea.position.y = th.seaY ?? -40;
      this.add(sea);
      this.seaTex = tex;
    }
  }

  updateSun(target) {
    this.sun.position.set(target.x + this.sunDir.x * 50, target.y + this.sunDir.y * 50, target.z + this.sunDir.z * 50);
    this.sun.target.position.copy(target);
  }

  // ---------------- Plattformen ----------------
  box(x, top, z, w, d, o = {}) {
    const h = o.h ?? 3;
    const s = this.surf(o.mat || 'grass');
    const geo = SH.roundBox(w, h, d, Math.min(0.4, Math.min(w, d) * 0.12, h * 0.3));
    planarUV(geo, x, top - h / 2, z, o.tile ?? 4);
    const m = new THREE.Mesh(geo, [s.side, s.side, s.top, s.side, s.side, s.side]);
    m.position.set(x, top - h / 2, z);
    m.castShadow = true; m.receiveShadow = true;
    this.add(m); this.staticRoots.push(m);
    if (GRASSY.has(o.mat || 'grass')) this.grassAreas.push({ kind: 'box', x, z, w: w - 0.5, d: d - 0.5, top, mesh: m });
    const rec = { kind: 'box', x, z, r: Math.hypot(w, d) / 2, w, d, top, h, mesh: m, col: null, under: null, mat: s, course: this.courseTag };
    this.platRecs.push(rec);
    if (o.under !== false && !o.noUnder) {
      const uh = o.underH ?? Math.min(w, d) * 0.9;
      const ug = SH.rockUnder(1, uh, x * 0.37 + z * 0.71, 32, 4 / Math.max(w, d) * 2);
      const um = new THREE.Mesh(ug, s.side);
      um.scale.set(w * 0.47, 1, d * 0.47);
      um.position.set(x, top - h, z);
      this.add(um); this.staticRoots.push(um); rec.under = um;
    }
    const c = boxCollider(x - w / 2, top - h, z - d / 2, x + w / 2, top, z + d / 2, { mesh: m, ice: !!o.ice });
    rec.col = c;
    if (!o.noCollide) this.colliders.push(c);
    if (!o.noCam) this.cameraMeshes.push(m);
    if (o.decor) this.scatter(c, o.decor);
    return { mesh: m, col: c };
  }

  cyl(x, top, z, r, o = {}) {
    const h = o.h ?? 3;
    const s = this.surf(o.mat || 'grass');
    // runde Plattform mit abgerundeter Oberkante (nichts Kantiges mehr)
    const { geo, bevel } = SH.roundPlatform(r, r * (o.taper ?? 0.96), h, o.seg ?? Math.max(28, Math.round(r * 8)), x, top - h / 2, z, o.tile ?? 4, o.round ? null : x * 0.37 + z * 0.71);
    const m = new THREE.Mesh(geo, [s.side, s.top, s.side]);
    m.position.set(x, top - h / 2, z);
    m.castShadow = true; m.receiveShadow = true;
    this.add(m); this.staticRoots.push(m);
    if (GRASSY.has(o.mat || 'grass')) this.grassAreas.push({ kind: 'cyl', x, z, r: r - bevel + 0.05, top, mesh: m });
    const rec = { kind: 'cyl', x, z, r, top, h, mesh: m, col: null, under: null, mat: s, course: this.courseTag };
    this.platRecs.push(rec);
    if (o.under !== false) {
      // organischer Fels unter der Insel statt Kegel
      const uh = o.underH ?? r * 1.4;
      const ug = SH.rockUnder(r * 0.94, uh, x * 0.37 + z * 0.71, Math.max(24, Math.round(r * 6)));
      const um = new THREE.Mesh(ug, s.side);
      um.position.set(x, top - h, z);
      this.add(um); this.staticRoots.push(um); rec.under = um;
    }
    const c = cylCollider(x, z, r, top - h, top, { mesh: m, ice: !!o.ice });
    rec.col = c;
    if (!o.noCollide) this.colliders.push(c);
    if (!o.noCam) this.cameraMeshes.push(m);
    if (o.decor) this.scatter(c, o.decor);
    return { mesh: m, col: c };
  }

  mover(o) {
    if (o.circle) {
      const C = o.circle;
      const a0 = C.phase || 0;
      o.from = [C.cx + Math.cos(a0) * C.R, C.cy, C.cz + Math.sin(a0) * C.R];
      o.to = o.from;
    }
    const from = new THREE.Vector3(...o.from), to = new THREE.Vector3(...o.to);
    const h = o.h ?? 0.8;
    let p;
    if (o.shape === 'cyl') p = this.cyl(from.x, from.y, from.z, o.r ?? 1.8, { mat: o.mat || 'wood', h, under: false });
    else p = this.box(from.x, from.y, from.z, o.w ?? 3.5, o.d ?? 3.5, { mat: o.mat || 'wood', h, under: false });
    // kleine Laternen-Markierung, damit man bewegte Plattformen erkennt
    p.mesh.userData.dyn = true;
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.22), M.toon(0xffe066, { emissive: 0xffb000, ei: 0.6 }));
    gem.position.set(0, h / 2 + 0.05, 0); gem.scale.y = 0.5; p.mesh.add(gem);
    const mv = { ...p, from, to, period: o.period ?? 5, phase: (o.phase ?? 0) * (o.period ?? 5), pos: from.clone(), circle: o.circle || null };
    if (o.circle) mv.angle = o.circle.phase || 0;
    this.movers.push(mv);
    return mv;
  }

  crumble(x, top, z, w = 3, d = 3) {
    const p = this.box(x, top, z, w, d, { mat: this.def.crumbleMat || 'stone', h: 0.7, under: false, noCam: true });
    p.mesh.userData.dyn = true;
    p.mesh.material = p.mesh.material.map((m) => { const c = m.clone(); c.color = new THREE.Color(0xffd0a0); return c; });
    // Risse
    const crack = new THREE.Mesh(new THREE.BoxGeometry(w * 0.9, 0.05, 0.08), M.toon(0x2a1a10));
    crack.position.y = 0.36; crack.rotation.y = 0.6; p.mesh.add(crack);
    const crack2 = crack.clone(); crack2.rotation.y = -0.9; crack2.scale.x = 0.6; p.mesh.add(crack2);
    this.crumbles.push({ ...p, home: p.mesh.position.clone(), state: 'idle', t: 0 });
    return p;
  }

  crumbleCyl(x, top, z, r) {
    const p = this.cyl(x, top, z, r, { mat: this.def.crumbleMat || 'stone', h: 0.7, under: false, noCam: true });
    p.mesh.userData.dyn = true;
    p.mesh.material = p.mesh.material.map((m) => { const c = m.clone(); c.color = new THREE.Color(0xffd0a0); return c; });
    const crack = new THREE.Mesh(new THREE.BoxGeometry(r * 1.6, 0.05, 0.08), M.toon(0x2a1a10));
    crack.position.y = 0.36; crack.rotation.y = 0.6; p.mesh.add(crack);
    this.crumbles.push({ ...p, home: p.mesh.position.clone(), state: 'idle', t: 0 });
    return p;
  }

  // Test-Helfer: Mover an eine bestimmte Stelle setzen
  setMover(mi, o) {
    const mv = this.movers[mi];
    let nx, ny, nz;
    if (mv.circle) { mv.angle = o.angle; nx = mv.circle.cx + Math.cos(o.angle) * mv.circle.R; ny = mv.circle.cy; nz = mv.circle.cz + Math.sin(o.angle) * mv.circle.R; }
    else { const e = o.at ? mv.to : mv.from; nx = e.x; ny = e.y; nz = e.z; mv.phase = o.at ? mv.period / 2 : 0; }
    const dx = nx - mv.pos.x, dy = ny - mv.pos.y, dz = nz - mv.pos.z;
    mv.pos.set(nx, ny, nz); moveCollider(mv.col, dx, dy, dz); mv.col.dx = mv.col.dy = mv.col.dz = 0;
    mv.mesh.position.x += dx; mv.mesh.position.y += dy; mv.mesh.position.z += dz;
  }

  bouncer(x, top, z, strength = 23) {
    const m = M.createBouncer(this.def.bouncerColor);
    m.position.set(x, top, z);
    this.add(m);
    const c = cylCollider(x, z, 0.95, top, top + 0.72, { bounce: strength });
    this.colliders.push(c);
    this.bouncers.push({ mesh: m, col: c, t: 0 });
  }

  blink(x, top, z, r, group = 0, period = 4) {
    const p = this.cyl(x, top, z, r, { mat: this.def.blinkMat || 'clock', h: 0.6, under: false, noCam: true });
    p.mesh.userData.dyn = true;
    const col = group ? 0x6ad5ff : 0xff7ab8;
    const mat = M.toon(col, { emissive: col, ei: 0.35, transparent: true, opacity: 1, unique: true });
    p.mesh.material = mat;
    this.blinks.push({ ...p, group, period, mat });
    return p;
  }

  geyser(x, top, z, phase = 0, period = 4) {
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 0.25, 12), M.toon(0x2a1c1c, { map: this.T.basalt }));
    base.position.set(x, top + 0.1, z); this.add(base);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 6, 12, 1, true), M.basic(0xff8a2a, { transparent: true, opacity: 0.75, additive: true, side: THREE.DoubleSide }));
    col.position.set(x, top + 3, z); col.visible = false; this.add(col);
    this.geysers.push({ x, z, top, phase, period, col, base, state: 'idle' });
  }

  ghost(x, top, z, r) {
    const p = this.cyl(x, top, z, r, { mat: 'cloud', h: 0.5, under: false, noCam: true });
    p.mesh.userData.dyn = true;
    const mat = M.surfaceMat({ color: 0xe8f0ff, emissive: 0x6a8aff, emissiveIntensity: 0.4, transparent: true, opacity: 0.0 }, { rough: 0.2 });
    p.mesh.material = mat; p.mesh.castShadow = false;
    this.ghosts.push({ ...p, mat, x, y: top, z, vis: 0 });
    return p;
  }

  // Mondsplitter in Herausforderungen: Index 0/1 = Geheimnisse, 2 = alle Funken
  moonstone(x, y, z, idx) { const ms = this.moon(x, y, z, this.idPrefix + 'm' + idx); ms.idx = idx; return ms; }

  // allgemeiner Mondsplitter mit fester ID (pro Reich)
  moon(x, y, z, id) {
    const got = this.game.hasMoon(this.spec.world, id);
    const m = M.createMoonstone(got);
    m.position.set(x, y, z); this.add(m);
    const ms = { mesh: m, pos: m.position, id, taken: false, base: y };
    this.moonstones.push(ms);
    return ms;
  }

  spawnMoon(p, id) {
    if (this.moonstones.some((m) => m.id === id && !m.taken)) return;
    const ms = this.moon(p.x, p.y, p.z, id);
    this.game.audio.play('oneup');
    this.game.particles.burst(ms.pos, { count: 24, color: [0x9ab8ff, 0xffffff], speed: 6, size: 0.8, tex: 'sparkle', additive: true });
    return ms;
  }

  // ---------------- Open-World-Objekte ----------------
  poundSpot(x, top, z, id) {
    if (this.game.hasMoon(this.spec.world, id)) return;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.08, 24), M.toon(0xbfd0ff, { emissive: 0x6a8aff, ei: 0.6, transparent: true, opacity: 0.85 }));
    m.position.set(x, top + 0.04, z); m.receiveShadow = true; this.add(m);
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.1, 0.07), M.toon(0x2a3a6a));
      c.position.set(x, top + 0.09, z); c.rotation.y = i * 0.8 + 0.3; this.add(c);
    }
    this.poundSpots.push({ x, y: top, z, id, mesh: m, done: false });
  }

  piece(x, y, z) {
    const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.32), M.toon(0xbfd8ff, { emissive: 0x6a9aff, ei: 0.9 }));
    m.add(M.glowSprite(0x9ab8ff, 1.6, 0.7));
    m.position.set(x, y, z); this.add(m);
    this.pieces.push({ mesh: m, pos: m.position, base: y, taken: false });
  }

  ringRace(points, time, id) {
    const rings = points.map(([x, y, z], i) => {
      const m = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.14, 8, 32), M.toon(i ? 0xffd23f : 0x6fe8d8, { emissive: i ? 0xffa000 : 0x2fb5a8, ei: 0.7, unique: true }));
      const nx = points[(i + 1) % points.length], ang = Math.atan2(nx[0] - x, nx[2] - z);
      m.position.set(x, y, z); m.rotation.y = ang; m.visible = i === 0;
      this.add(m);
      return { mesh: m, pos: m.position };
    });
    this.rings = { rings, time, id, running: false, idx: 0, t: 0 };
  }

  lostItem(x, y, z) {
    const g = new THREE.Group();
    const b = M.toon(0xb08ad8);
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.35, 14, 10), b); g.add(body);
    for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), b); e.position.set(sx * 0.25, 0.32, 0); g.add(e); }
    const eye = M.toon(0x1a1020);
    for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 4), eye); e.position.set(sx * 0.12, 0.08, 0.32); g.add(e); }
    M.addOutline(g, 0.03);
    g.add(M.glowSprite(0xffe066, 1.5, 0.5));
    g.position.set(x, y, z); this.add(g);
    this.lost = { mesh: g, pos: g.position, base: y, state: 'lying', home: { x, y, z } };
  }

  nest(p, id) {
    const n = { x: p.x, y: p.y, z: p.z, id, enemies: [], done: this.game.hasMoon(this.spec.world, id) };
    const types = ['nebling', 'nebling', 'flatterling', 'dornling'];
    for (let i = 0; i < 4; i++) {
      const a = i / 4 * Math.PI * 2;
      const e = this.enemy(types[i], p.x + Math.cos(a) * p.r * 0.45, p.y, p.z + Math.sin(a) * p.r * 0.45, { range: p.r * 0.35 });
      n.enemies.push(e);
    }
    const flag = new THREE.Mesh(new THREE.ConeGeometry(0.6, 2.2, 24), M.toon(0x4a2f73, { emissive: 0x2a1048, ei: 1 }));
    flag.position.set(p.x, p.y + 1.1, p.z); this.add(flag);
    this.nests.push(n);
  }

  npc(x, top, z, kind, color, yaw = 0) {
    const m = M.createGlimmling(color);
    m.position.set(x, top, z); m.rotation.y = yaw; this.add(m);
    this.colliders.push(cylCollider(x, z, 0.45, top, top + 1.0));
    const it = { kind, x, y: top, z, r: 2.4, mesh: m };
    this.interactables.push(it);
    this.anim.push({ kind: 'npc', obj: m, ph: x });
    return it;
  }

  label(text, sub, x, y, z, color = '#fff1d6') {
    const c = document.createElement('canvas'); c.width = 512; c.height = 160;
    const ctx = c.getContext('2d');
    ctx.fillStyle = 'rgba(40,20,50,0.75)'; ctx.strokeStyle = color; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.roundRect(8, 8, 496, 144, 36); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff1d6'; ctx.textAlign = 'center'; ctx.font = '900 46px Nunito, Trebuchet MS, sans-serif';
    ctx.fillText(text, 256, sub ? 70 : 96, 470);
    if (sub) { ctx.font = '800 36px Nunito, Trebuchet MS, sans-serif'; ctx.fillStyle = '#ffe066'; ctx.fillText(sub, 256, 124, 470); }
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    sp.scale.set(4.2, 1.3, 1); sp.position.set(x, y, z); this.add(sp);
    return sp;
  }

  // Röhre zu einem Herausforderungs-Level (statt Lichttor): hineinspringen und ab ins Sublevel
  pipe(x, top, z, target, name, sub, locked = false) {
    const g = new THREE.Group(); g.position.set(x, top, z); this.add(g);
    const bonus = target.type === 'bonus';
    const body = bonus ? 0xe8b84a : (this.def.pipeColor ?? 0x4fb86a);
    const H = 1.5, R = 1.25;
    const bm = M.toon(body, { rough: 0.35, metal: bonus ? 0.6 : 0.1 });
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(R, R * 1.06, H, 40, 1, true), bm); tube.position.y = H / 2; tube.castShadow = true; g.add(tube);
    const inner = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.86, R * 0.86, H - 0.1, 40, 1, true), M.toon(0x1a1020, { unique: true }));
    inner.material.side = THREE.BackSide; inner.position.y = H / 2 + 0.05; g.add(inner);
    const rimCol = locked ? 0x6a6a7a : (bonus ? 0xffd23f : 0x6fe8d8);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(R * 1.02, 0.26, 18, 48), M.toon(rimCol, { emissive: locked ? 0x000000 : rimCol, ei: 0.45, unique: true }));
    rim.rotation.x = Math.PI / 2; rim.position.y = H; g.add(rim);
    // wirbelndes Licht im Inneren
    const swirl = new THREE.Mesh(new THREE.CircleGeometry(R * 0.86, 40), M.basic(rimCol, { transparent: true, opacity: locked ? 0.08 : 0.55, additive: true, side: THREE.DoubleSide }));
    swirl.rotation.x = -Math.PI / 2; swirl.position.y = H - 0.25; g.add(swirl);
    const glow = M.glowSprite(rimCol, 3.2, locked ? 0.1 : 0.5); glow.position.y = H + 0.4; g.add(glow);
    // Fuß aus Fels, damit die Röhre im Boden steckt
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(R * 1.35, R * 1.6, 0.5, 32), M.toon(0x7a6a5a, { map: this.T.stone })); foot.position.y = 0.05; g.add(foot);
    M.addOutline(tube, 0.04);
    const labelSprite = this.label(name, sub, x, top + 4.4, z, locked ? '#888' : (bonus ? '#ffd23f' : '#6fe8d8'));
    this.colliders.push(cylCollider(x, z, R + 0.25, top - 1, top + H + 0.1));
    const it = { kind: 'portal', pipe: true, x, y: top, z, r: 2.9, top: top + H + 0.1, target, locked, name, disc: swirl, labelSprite, ring: rim };
    this.interactables.push(it);
    this.portals.push(it);
    this.anim.push({ kind: 'pipe', obj: swirl, glow });
    return it;
  }

  portal(x, top, z, yaw, target, name, sub, locked) {
    const g = new THREE.Group(); g.position.set(x, top, z); g.rotation.y = yaw; this.add(g);
    const col = target.type === 'boss' ? 0xb070ff : target.type === 'bonus' ? 0xffd23f : 0x6fe8d8;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.22, 10, 40), M.toon(locked ? 0x6a6a7a : col, { emissive: locked ? 0x000000 : col, ei: 0.6, unique: true }));
    ring.position.y = 2.0; g.add(ring);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(1.55, 32), M.basic(col, { transparent: true, opacity: locked ? 0.1 : 0.45, additive: true, side: THREE.DoubleSide }));
    disc.position.y = 2.0; g.add(disc);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 2.1, 0.3, 20), M.toon(0x5a4a6a)); base.position.y = 0.15; g.add(base);
    M.addOutline(ring, 0.04);
    const labelSprite = this.label(name, sub, x, top + 4.6, z, locked ? '#888' : '#' + col.toString(16).padStart(6, '0'));
    const it = { kind: 'portal', x, y: top, z, r: 2.6, target, locked, name, disc, labelSprite, ring };
    this.interactables.push(it);
    this.portals.push(it);
    return it;
  }

  unlockPortal(type, sub) {
    const pt = this.portals.find((p) => p.target.type === type);
    if (!pt || !pt.locked) return;
    pt.locked = false;
    const col = type === 'boss' ? 0xb070ff : 0xffd23f;
    pt.ring.material.color.set(col); pt.ring.material.emissive.set(col);
    this.label(pt.name, sub, pt.x, pt.y + 4.6, pt.z, type === 'boss' ? '#b070ff' : '#ffd23f');
    if (pt.labelSprite) pt.labelSprite.visible = false;
    this.game.particles.burst(new THREE.Vector3(pt.x, pt.y + 2, pt.z), { count: 24, color: [0xffffff, 0xb070ff], speed: 6, size: 0.8, tex: 'sparkle', additive: true });
  }
  unlockBossPortal() { this.unlockPortal('boss', this.game.t('ui.boss')); }
  unlockBonusPortal() { this.unlockPortal('bonus', this.game.challengeSub(this.spec.world, 6)); }

  ship(x, y, z, yaw) {
    const a = M.createAirship(this.rand, true);
    a.position.set(x, y, z); a.rotation.y = yaw; a.scale.setScalar(2.6); this.add(a);
    // die Laterne der Leuchtfeder hängt am Bugmast
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 12), M.toon(0xfff1d6, { emissive: 0xffa040, ei: 0.9 }));
    a.userData.lampAnchor.add(lamp); lamp.add(M.glowSprite(0xffb050, 1.8, 0.85));
    this.anim.push({ kind: 'ship', obj: a, base: y, ph: 0 });
    const it = { kind: 'ship', x: x, y: 0, z: z, r: 6, mesh: a };
    this.interactables.push(it);
    return it;
  }

  nearestInteractable(p) {
    let best = null, bd = 1e9;
    for (const it of this.interactables) {
      const d = Math.hypot(p.x - it.x, p.z - it.z);
      if (d < it.r && Math.abs(p.y - it.y) < 3 && d < bd) { best = it; bd = d; }
    }
    return best;
  }

  keyAt(x, y, z) {
    if (this.game.hasKey(this.spec.world)) return;
    const k = M.createKey(); k.position.set(x, y, z); this.add(k);
    this.keyItem = { mesh: k, pos: k.position, taken: false, base: y };
  }

  spawnSparkMoonstone(p) {
    if (this.moonstones.some((m) => m.idx === 2)) return;
    const ms = this.moonstone(p.x, p.y + 2.6, p.z, 2);
    this.game.audio.play('oneup');
    this.game.particles.burst(ms.pos, { count: 20, color: [0x9ab8ff, 0xffffff], speed: 5, size: 0.7, tex: 'sparkle', additive: true });
  }

  link(a, b, o = {}) { this.links.push({ a, b, o }); }
  addCollider(x, z, r, y0, y1) { this.colliders.push(cylCollider(x, z, r, y0, y1)); }

  // ---------------- Große Landschaft statt Inseln ----------------
  buildTerrain() {
    const tT0 = performance.now();
    const kingdom = this.spec.kind === 'kingdom';
    const recs = this.platRecs;
    if (!recs.length) return;
    const wid = this.worldDef.id;
    const seed = (this.spec.seed || 7) % 997;
    let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9, far = 0;
    for (const r of recs) { minX = Math.min(minX, r.x - r.r); maxX = Math.max(maxX, r.x + r.r); minZ = Math.min(minZ, r.z - r.r); maxZ = Math.max(maxZ, r.z + r.r); far = Math.max(far, Math.hypot(r.x, r.z) + r.r); }
    let T, edge;
    if (kingdom) {
      const Rw = far + 36;
      T = new Terrain({ minX: -Rw - 90, maxX: Rw + 90, minZ: -Rw - 90, maxZ: Rw + 90, cell: 2, seed, bound: { cx: 0, cz: 0, r: Rw }, ice: wid === 'ice' && false });
      edge = (x, z) => Math.hypot(x, z) - (Rw - 6);
    } else {
      const M = 40;
      T = new Terrain({ minX: minX - M - 80, maxX: maxX + M + 80, minZ: minZ - M - 80, maxZ: maxZ + M + 80, cell: 2, seed, bound: { minX: minX - M, maxX: maxX + M, minZ: minZ - M, maxZ: maxZ + M } });
      edge = (x, z) => Math.max(minX - M - x, x - maxX - M, minZ - M - z, z - maxZ - M, -40) + 6;
    }
    // Grundform: Hügel, am Rand ein Gebirgsring
    T.base((x, z) => {
      // Gebirge erst hinter der Weltgrenze: sanft ansteigende Ausläufer, weiter draußen hohe Gipfel
      const e = Math.max(0, edge(x, z)) / 80;
      const hills = -2.2 + tfbm(x / 70, z / 70, seed, 4) * 4.5 + tfbm(x / 19, z / 19, seed + 3, 3) * 1.6;
      const ridge = 0.6 + 0.8 * tfbm(x / 34, z / 34, seed + 9, 4);
      return hills + Math.pow(Math.min(1.2, e), 1.7) * 58 * ridge;
    });
    // Gefahren-Senken: Herausforderungen im Reich, in Einzel-Levels alles
    const regions = new Map();
    for (const r of recs) {
      const key = kingdom ? r.course : 'all';
      if (key === null || key === undefined) continue;
      if (!regions.has(key)) regions.set(key, { recs: [], minX: 1e9, maxX: -1e9, minZ: 1e9, maxZ: -1e9, level: 1e9 });
      const g = regions.get(key);
      g.recs.push(r); g.level = Math.min(g.level, r.top - 3.6);
      g.minX = Math.min(g.minX, r.x - r.r - 3); g.maxX = Math.max(g.maxX, r.x + r.r + 3); g.minZ = Math.min(g.minZ, r.z - r.r - 3); g.maxZ = Math.max(g.maxZ, r.z + r.r + 3);
    }
    const ABYSS = -170;
    const inRegion = (g, x, z, m = 0) => x > g.minX - m && x < g.maxX + m && z > g.minZ - m && z < g.maxZ + m;
    // Ufer: im Sublevel liegt das ganze Land über dem Wasserspiegel, nur rund um die Strecke ist das Tal geflutet
    if (!kingdom) for (const g of regions.values()) {
      const lv = g.level + 1.2;
      T.base((x, z) => 0); // wird unten neu berechnet
      T.base((x, z) => {
        const e = Math.max(0, edge(x, z)) / 80;
        const hills = lv + tfbm(x / 40, z / 40, seed, 4) * 5 + tfbm(x / 14, z / 14, seed + 3, 3) * 1.4;
        return hills + Math.pow(Math.min(1.2, e), 1.7) * 50 * (0.6 + 0.8 * tfbm(x / 34, z / 34, seed + 9, 4));
      });
    }
    // Bergrücken unter den Inselketten (die Wege steigen mit dem Gelände an)
    if (kingdom) for (const r of recs) if (r.course === null || r.course === undefined) T.liftCircle(r.x, r.z, r.r, r.top - 7.5, 0.33, 26);
    // Plattformen und Sprungwege freihalten (begehbare Hänge)
    for (const r of recs) {
      const hz = kingdom ? (r.course !== null && r.course !== undefined) : true;
      if (hz) continue;
      T.capCircle(r.x, r.z, r.r + 0.6, r.top - 1.2, 0.6, 26);
    }
    for (const l of this.links) {
      const [ax, ay, az] = l.a, [bx, by, bz] = l.b;
      let hzr = null;
      for (const g of regions.values()) if (inRegion(g, ax, az) && inRegion(g, bx, bz)) { hzr = g; break; }
      if (hzr) T.capSegment(ax, az, bx, bz, 3, hzr.level - 2.8, 0.7, 24);
      else T.capSegment(ax, az, bx, bz, 1.6, Math.min(ay, by) - 2.0, 0.6, 18);
    }
    // Abgrund: rund um die Herausforderungen gibt es keinen Boden – steile Felswände fallen ins Leere
    // Flusstal: rund um die Strecke liegt Wasser (bzw. Lava, Treibsand, Wolken), die Felsen wachsen daraus hervor
    for (const g of regions.values()) for (const r of g.recs) T.capCircle(r.x, r.z, r.r + 3, g.level - 2.8, 0.7, 24);
    for (const g of regions.values()) T.hazards.push({ level: g.level, minX: g.minX - 40, maxX: g.maxX + 40, minZ: g.minZ - 40, maxZ: g.maxZ + 40 });
    this.terrain = T;
    const tT1 = performance.now();
    // Gelände-Mesh und Senken-Füllung
    const mesh = T.buildMesh(this.T, wid);
    this.add(mesh);
    this.hazardMeshes = T.hazardMeshes(this.T, wid);
    for (const hm of this.hazardMeshes) this.add(hm);
    // Plattformen auf den Boden stellen: Felssäulen statt schwebender Inseln
    for (const r of recs) {
      if (r.mesh.userData.dyn) continue;
      // Herausforderungen schweben über dem Abgrund: dort bleibt der hängende Fels unter der Insel
      const hz = kingdom ? (r.course !== null && r.course !== undefined) : true;
      if (hz && T.height(r.x, r.z) < r.top - 20) continue;
      let ground = T.height(r.x, r.z);
      for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2; ground = Math.min(ground, T.height(r.x + Math.cos(a) * r.r * 0.85, r.z + Math.sin(a) * r.r * 0.85)); }
      const bottom = r.top - r.h;
      if (r.under) { r.under.parent && r.under.parent.remove(r.under); const si = this.staticRoots.indexOf(r.under); if (si >= 0) this.staticRoots.splice(si, 1); r.under = null; }
      if (ground < bottom - 0.2) {
        const ph = bottom - ground + 1.5;
        const geo = r.kind === 'cyl' ? SH.pillar(r.r, ph, r.x * 0.31 + r.z * 0.57) : SH.pillar(1, ph, r.x * 0.31 + r.z * 0.57);
        const pm = new THREE.Mesh(geo, r.mat.side);
        if (r.kind === 'box') pm.scale.set(r.w * 0.48, 1, r.d * 0.48);
        pm.position.set(r.x, bottom + 0.05, r.z);
        pm.castShadow = true; pm.receiveShadow = true;
        this.add(pm); this.staticRoots.push(pm);
        if (r.col) r.col.minY = ground - 1.5;
      }
    }
    // Landschaft beleben: Bäume, Steine, Blumen, Gras
    const tT2 = performance.now();
    this.decorateTerrain(kingdom);
    this.terrainTimes = { raster: Math.round(tT1 - tT0), mesh: Math.round(tT2 - tT1), decor: Math.round(performance.now() - tT2) };
    this.killY = -1e6;
  }

  decorateTerrain(kingdom) {
    const T = this.terrain, S = this.def, rnd = this.rand;
    const b = T.bound;
    const area = b.r ? Math.PI * b.r * b.r : (b.maxX - b.minX) * (b.maxZ - b.minZ);
    const near = (x, z, m) => this.platRecs.some((r) => Math.hypot(r.x - x, r.z - z) < r.r + m);
    const ok = (x, z, m = 3) => {
      const y = T.height(x, z);
      if (T.slope(x, z) > 0.55) return null;
      if (T.hazardAt(x, y - 0.1, z)) return null;
      if (near(x, z, m)) return null;
      return y;
    };
    const rand = () => {
      if (b.r) { const a = rnd() * Math.PI * 2, rr = Math.sqrt(rnd()) * (b.r - 6); return [Math.cos(a) * rr, Math.sin(a) * rr]; }
      return [b.minX + rnd() * (b.maxX - b.minX), b.minZ + rnd() * (b.maxZ - b.minZ)];
    };
    const trees = Math.min(240, Math.round(area / 520)), rocks = Math.min(120, Math.round(area / 1100));
    const kinds = S.trees && S.trees.length ? S.trees : null;
    for (let i = 0; i < trees && kinds; i++) {
      const [x, z] = rand(); const y = ok(x, z, 3); if (y === null) continue;
      this.tree(x, y - 0.05, z, kinds[Math.floor(rnd() * kinds.length)]);
    }
    for (let i = 0; i < rocks; i++) { const [x, z] = rand(); const y = ok(x, z, 2); if (y === null) continue; this.rock(x, y, z); }
    // Welt-Deko (Büsche, Blumen, Pilze, Kakteen, Seetang …) und große Wahrzeichen
    const place = (m, landmark = false) => {
      for (let k = 0; k < 12; k++) {
        const [x, z] = rand();
        if (landmark && (Math.hypot(x, z) < 40 || (b.r && Math.hypot(x, z) > b.r - 25))) continue;
        if (landmark && T.slope(x, z) > 0.3) continue;
        const y = ok(x, z, m);
        if (y !== null) return { x, y, z };
      }
      return null;
    };
    decorateWorld(this, place, rnd, area, kingdom);
    // Gras auf Wiesen-Welten: Flecken rund um den Hub und verstreut
    if (S.big === 'grass' || S.big === 'meadow') {
      const patches = [];
      if (kingdom) patches.push({ x: 0, z: 0, r: 46 });
      for (let i = 0; i < 26; i++) { const [x, z] = rand(); patches.push({ x, z, r: 9 + rnd() * 10 }); }
      for (const p of patches) this.grassAreas.push({ kind: 'terrain', x: p.x, z: p.z, r: p.r, mesh: { userData: {} } });
    }
  }

  // ---------------- Herausforderungen direkt in der offenen Welt ----------------
  courseBegin(k) { this.courseTag = k; this.courses[k] = { k, sparkTotal: 0, got: 0, gate: null, goal: null, par: 60, done: false }; return this.courses[k]; }
  courseEnd() { this.courseTag = null; }

  // Start-Tor: Bogen aus zwei Säulen mit Zielflaggen-Muster und Namensschild
  courseGate(x, top, z, yaw, k, name, sub) {
    const g = new THREE.Group(); g.position.set(x, top, z); g.rotation.y = yaw; this.add(g);
    const col = 0x6fe8d8;
    const pm = M.toon(0xfff1d6), cm = M.toon(col, { emissive: col, ei: 0.45 });
    for (const sx of [-1.7, 1.7]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 3.4, 20), pm); p.position.set(sx, 1.7, 0); p.castShadow = true; g.add(p);
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 14), cm); b.position.set(sx, 3.5, 0); g.add(b);
    }
    const arch = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.16, 14, 48, Math.PI), cm); arch.position.y = 3.4; g.add(arch);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.5), new THREE.MeshBasicMaterial({ map: this.T.checker, side: THREE.DoubleSide }));
    flag.position.y = 3.0; g.add(flag);
    M.addOutline(g, 0.03);
    this.label(name, sub, x, top + 5.4 + (k % 2) * 1.5, z, '#6fe8d8');
    this.colliders.push(cylCollider(x + Math.cos(yaw) * 1.7, z - Math.sin(yaw) * 1.7, 0.3, top, top + 3.4));
    this.colliders.push(cylCollider(x - Math.cos(yaw) * 1.7, z + Math.sin(yaw) * 1.7, 0.3, top, top + 3.4));
    this.courses[k].gate = { x, y: top, z };
  }

  // Ziel: Sockel, Lichtsäule und der Ziel-Mondsplitter der Herausforderung
  courseGoal(x, top, z, k, flat = false) {
    const ped = new THREE.Group();
    const s = this.surf(this.def.goalMat || 'stone');
    const ph = flat ? 0.08 : 0.6;
    const base = new THREE.Mesh(new THREE.CylinderGeometry(flat ? 1.2 : 1.4, flat ? 1.25 : 1.7, ph, 32), s.side); base.position.y = ph / 2; base.castShadow = true; ped.add(base);
    M.addOutline(ped, 0.04);
    ped.position.set(x, top, z); this.add(ped);
    if (!flat) this.colliders.push(cylCollider(x, z, 1.5, top, top + 0.6));
    else top -= 0.5;
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 60, 24, 1, true), M.basic(0x9ff4ff, { transparent: true, opacity: 0.16, additive: true, side: THREE.DoubleSide }));
    beam.position.set(x, top + 30, z); this.add(beam);
    const ms = this.moon(x, top + 2.2, z, 'c' + k + 'g');
    ms.mesh.scale.setScalar(1.5);
    ms.beam = beam;
    this.courses[k].goal = { x, y: top, z };
  }

  courseSpark(k) {
    const c = this.courses[k], g = this.game;
    if (!c) return;
    c.got++;
    if (c.done || c.got < c.sparkTotal) return;
    c.done = true;
    g.hud.toast(g.t('ui.moonstoneAll'), 3);
    const p = g.player.pos;
    this.spawnMoon(new THREE.Vector3(p.x, p.y + 2.6, p.z), 'c' + k + 'm2');
  }

  // ---------------- Sammelobjekte ----------------
  spark(x, y, z) {
    const c = this.courseTag;
    this.sparks.push({ pos: new THREE.Vector3(x, y, z), taken: false, base: y, ph: x * 0.3 + z * 0.2, course: c });
    if (c !== null && this.courses[c]) this.courses[c].sparkTotal++;
    this.sparkTotal++;
  }

  buildSparkInstances() {
    if (!this.sparks.length) return;
    if (false) {
      for (const sp of this.sparks) { sp.mesh = M.createSpark(); sp.mesh.position.copy(sp.pos); this.add(sp.mesh); }
      return;
    }
    const proto = M.createSpark();
    const im = new THREE.InstancedMesh(proto.geometry, proto.material, this.sparks.length);
    im.frustumCulled = false;
    this.add(im);
    this.sparkMesh = im;
    this.updateSparkInstances(0);
  }

  updateSparkInstances(t) {
    if (false) {
      for (const sp of this.sparks) if (sp.mesh) { sp.mesh.visible = !sp.taken; sp.mesh.position.copy(sp.pos); sp.mesh.rotation.y = t * 2.5 + sp.ph; }
      return;
    }
    const im = this.sparkMesh; if (!im) return;
    const m4 = _m4, q = _q, sc = _sc, up = _up;
    this.sparks.forEach((s, i) => {
      q.setFromAxisAngle(up, t * 2.5 + s.ph);
      sc.setScalar(s.taken ? 0 : 1);
      m4.compose(s.pos, q, sc);
      im.setMatrixAt(i, m4);
    });
    im.instanceMatrix.needsUpdate = true;
  }
  sparkLine(a, b, n) {
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0 : i / (n - 1);
      this.spark(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t);
    }
  }
  sparkRing(x, y, z, r, n) {
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; this.spark(x + Math.cos(a) * r, y, z + Math.sin(a) * r); }
  }
  heart(x, y, z) {
    const m = M.createHeart(); m.position.set(x, y, z); this.add(m);
    this.hearts.push({ mesh: m, pos: m.position, taken: false, base: y });
  }
  crate(x, top, z, sparks = 5, moonId = null) {
    const m = M.createCrate(); m.position.set(x, top + 0.55, z); this.add(m);
    const c = boxCollider(x - 0.55, top, z - 0.55, x + 0.55, top + 1.1, z + 0.55, { crate: true });
    this.colliders.push(c);
    const cr = { mesh: m, col: c, sparks, broken: false, moonId };
    c.crateRef = cr;
    this.crates.push(cr);
    this.sparkTotal += sparks;
    return cr;
  }

  checkpoint(x, top, z, yaw = 0) {
    const m = M.createCheckpoint(); m.position.set(x, top, z); m.rotation.y = yaw; this.add(m);
    this.checkpoints.push({ mesh: m, x, y: top, z, yaw, active: false });
  }

  spawn(x, top, z, yaw = 0) { this.spawnPoint = { x, y: top, z, yaw }; }

  goalAt(x, top, z) {
    const ped = new THREE.Group();
    const s = this.surf(this.def.goalMat || 'stone');
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.7, 0.6, 10), s.side); base.position.y = 0.3; base.castShadow = true; ped.add(base);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 1.0, 10), s.side); col.position.y = 1.0; ped.add(col);
    M.addOutline(ped, 0.04);
    ped.position.set(x, top, z); this.add(ped);
    this.colliders.push(cylCollider(x, z, 1.0, top, top + 1.5));
    const shard = M.createShard(); shard.position.set(x, top + 3.0, z); this.add(shard);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 60, 16, 1, true), M.basic(0x9ff4ff, { transparent: true, opacity: 0.18, additive: true, side: THREE.DoubleSide }));
    beam.position.set(x, top + 30, z); this.add(beam);
    this.goal = { mesh: shard, pos: shard.position, taken: false, beam };
  }

  // ---------------- Gegner & Fallen ----------------
  enemy(type, x, top, z, o = {}) {
    let mesh;
    const tint = (this.def.tints || {})[type];
    if (type === 'nebling') mesh = M.createNebling(tint);
    else if (type === 'dornling') mesh = M.createDornling(tint);
    else mesh = M.createFlatterling(tint);
    mesh.position.set(x, top, z);
    this.add(mesh);
    const e = {
      type, mesh, pos: mesh.position, home: new THREE.Vector3(x, top, z), alive: true, dying: 0,
      r: type === 'flatterling' ? 0.55 : 0.62, h: type === 'flatterling' ? 0.9 : 1.15,
      stompable: type !== 'dornling', range: o.range ?? 3, axis: o.axis ?? 'x', speed: o.speed ?? (type === 'dornling' ? 1.8 : 2.2),
      t: this.rand() * 10, dir: 1, ground: top, chase: o.chase ?? (type === 'nebling'),
    };
    if (type === 'flatterling') { e.pos.y = top + 1.8; e.flyY = top + 1.8; }
    this.enemies.push(e);
    return e;
  }

  firebar(x, y, z, len = 4, speed = 1.4, n = 5, color) {
    const piv = new THREE.Group(); piv.position.set(x, y, z); this.add(piv);
    const c = color ?? this.def.firebarColor ?? 0xff8a3c;
    const m = M.toon(c, { emissive: c, ei: 0.8 });
    const balls = [];
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 0.8, 8), M.toon(0x4a3a5e)); post.position.y = -0.4; piv.add(post);
    for (let i = 0; i < n; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 14), m);
      b.position.x = (i + 0.6) * (len / n);
      b.add(M.glowSprite(c, 1.5, 0.6));
      piv.add(b); balls.push(b);
    }
    this.colliders.push(cylCollider(x, z, 0.3, y - 0.8, y));
    this.firebars.push({ piv, balls, speed, len });
  }

  updraft(x, z, r, y0, y1, strength = 55) {
    const geo = new THREE.CylinderGeometry(r, r, y1 - y0, 20, 1, true);
    const tex = getStreakTex().clone(); tex.needsUpdate = true; tex.repeat.set(3, (y1 - y0) / 12);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, color: 0xcff8ff, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
    m.position.set(x, (y0 + y1) / 2, z);
    this.add(m);
    // Propeller-Sockel
    const base = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.9, r, 0.5, 16), M.toon(0xe2b75e, { map: this.T.metal }));
    base.position.set(x, y0, z); this.add(base);
    const u = { x, z, r, y0, y1, strength, tex, mesh: m, base };
    this.updrafts.push(u);
    return u;
  }
  addUpdraft(x, z, r, y0, y1, strength) { return this.updraft(x, z, r, y0, y1, strength); }
  removeUpdraft(u) {
    const i = this.updrafts.indexOf(u);
    if (i < 0) return;
    this.updrafts.splice(i, 1);
    this.group.remove(u.mesh); this.group.remove(u.base);
    u.mesh.geometry.dispose(); u.mesh.material.dispose(); u.tex.dispose();
  }

  hint(x, top, z, r, text, sign = true) {
    if (sign) { const s = M.createSign(); s.position.set(x, top, z); s.rotation.y = this.rand() * 0.6 - 0.3; this.add(s); this.staticRoots.push(s); }
    this.hints.push({ x, y: top, z, r, text });
  }

  bossAt(x, top, z, arenaR) {
    this.boss = createBossFor(this, x, top, z, arenaR, this.worldDef.boss);
  }

  // ---------------- Deko ----------------
  tree(x, top, z, kind = 'round', collide = true) {
    const t = kind === 'pine' ? M.createPine(this.rand, this.def.pineColor) : kind === 'palm' ? M.createPalm(this.rand)
      : kind === 'coral' ? M.createCoralPlant(this.rand) : kind === 'snowman' ? M.createSnowman(this.rand) : kind === 'crystal' ? M.createCrystal(this.rand, this.def.crystalColor) : M.createTree(this.rand, kind);
    if (kind === 'coral') t.scale.setScalar(2.2);
    t.position.set(x, top, z); t.rotation.y = this.rand() * 6;
    this.add(t); this.staticRoots.push(t);
    if (collide) this.colliders.push(cylCollider(x, z, 0.35, top, top + 2.5));
  }
  crystal(x, top, z, color, scale = 1) {
    const c = M.createCrystal(this.rand, color ?? this.def.crystalColor);
    c.position.set(x, top, z); c.scale.setScalar(scale); this.add(c); this.staticRoots.push(c);
    if (scale > 1.4) this.colliders.push(cylCollider(x, z, 0.4 * scale, top, top + 1.5 * scale));
  }
  rock(x, top, z) { const r = M.createRock(this.rand, this.def.rockColor); r.position.set(x, top + 0.1, z); this.add(r); this.staticRoots.push(r); }

  scatter(c, kind) {
    const dens = this.game.gfx ? { low: 0.06, medium: 0.12, high: 0.18, ultra: 0.26 }[this.game.gfx.name] : 0.18;
    const n = Math.round(((c.type === 'box' ? (c.maxX - c.minX) * (c.maxZ - c.minZ) : Math.PI * c.r * c.r)) * dens);
    for (let i = 0; i < n; i++) {
      let x, z;
      if (c.type === 'box') { x = c.minX + 0.4 + this.rand() * (c.maxX - c.minX - 0.8); z = c.minZ + 0.4 + this.rand() * (c.maxZ - c.minZ - 0.8); }
      else { const a = this.rand() * 6.283, rr = Math.sqrt(this.rand()) * (c.r - 0.5); x = c.x + Math.cos(a) * rr; z = c.z + Math.sin(a) * rr; }
      let o;
      if (kind === 'meadow') o = this.rand() < 0.5 ? M.createFlower(this.rand) : M.createGrassTuft(this.rand);
      else if (kind === 'grass') o = M.createGrassTuft(this.rand, this.def.tuftColor);
      else if (kind === 'crystal') { if (this.rand() < 0.75) continue; o = M.createCrystal(this.rand, this.def.crystalColor); o.scale.setScalar(0.35); }
      else if (kind === 'coral') { if (this.rand() < 0.6) continue; o = M.createCoralPlant(this.rand); }
      else if (kind === 'rocks') { if (this.rand() < 0.85) continue; o = M.createRock(this.rand, this.def.rockColor); o.scale.setScalar(0.4); }
      else continue;
      o.position.set(x, c.maxY, z);
      o.rotation.y = this.rand() * 6;
      this.add(o); this.staticRoots.push(o);
    }
  }

  distantIsland(x, y, z, r, o = {}) {
    const s = this.surf(o.mat || 'grass');
    const g = new THREE.Group(); g.position.set(x, y, z); this.add(g);
    const top = new THREE.Mesh(SH.roundPlatform(r, r * 0.95, r * 0.35, 40, 0, 0, 0, 4).geo, [s.side, s.top, s.side]);
    g.add(top);
    const under = new THREE.Mesh(SH.rockUnder(r * 0.93, r * 1.8, x * 0.13 + z * 0.29, 40), s.side);
    under.position.y = -r * 0.175; g.add(under);
    const n = o.trees ?? Math.round(r / 2);
    for (let i = 0; i < n; i++) {
      const a = this.rand() * 6.28, rr = this.rand() * r * 0.7;
      const kind = o.kind || 'round';
      let t;
      if (kind === 'crystal') t = M.createCrystal(this.rand, this.def.crystalColor);
      else if (kind === 'pine') t = M.createPine(this.rand, this.def.pineColor);
      else if (kind === 'palm') t = M.createPalm(this.rand);
      else if (kind === 'coral') t = M.createCoralPlant(this.rand);
      else if (kind === 'none') continue;
      else t = M.createTree(this.rand, this.rand() < 0.3 ? 'blossom' : kind);
      t.position.set(Math.cos(a) * rr, r * 0.175, Math.sin(a) * rr);
      t.scale.setScalar(r / 5 + 0.5);
      g.add(t);
    }
    if (this.batch) {
      // Handy: unbeweglich, ohne Schatten, wird beim Laden verschmolzen
      g.traverse((ob) => { ob.castShadow = false; });
      this.staticRoots.push(g);
    } else {
      // PC: Inseln schweben sanft und werfen Schatten – pro Insel zu wenigen Meshes verschmolzen
      M.compactGroup(g);
      this.anim.push({ kind: 'bobGroup', obj: g, base: y, amp: 0.4, sp: 0.3 + this.rand() * 0.3, ph: this.rand() * 6 });
    }
  }

  clouds(n, cx, cz, spread, y0, y1, color, opacity) {
    for (let i = 0; i < n; i++) {
      const c = M.createCloud(this.rand, color ?? this.def.cloudColor ?? 0xffffff, opacity ?? 0.95);
      c.position.set(cx + (this.rand() - 0.5) * spread, y0 + this.rand() * (y1 - y0), cz + (this.rand() - 0.5) * spread);
      c.scale.setScalar(1 + this.rand() * 2);
      this.add(c);
      this.anim.push({ kind: 'drift', obj: c, sp: 0.3 + this.rand() * 0.6, x0: cx - spread / 2, x1: cx + spread / 2 });
    }
  }

  gear(x, y, z, r, speed = 0.3, yaw = 0) {
    const g = M.createGear(r, this.def.gearColor);
    g.position.set(x, y, z); g.rotation.y = yaw; this.add(g);
    this.anim.push({ kind: 'spin', obj: g, sp: speed });
  }

  airship(x, y, z, yaw = 0) {
    const a = M.createAirship(this.rand);
    a.position.set(x, y, z); a.rotation.y = yaw; a.scale.setScalar(1.5);
    this.add(a);
    this.anim.push({ kind: 'ship', obj: a, base: y, ph: this.rand() * 6 });
  }

  lighthouse(x, top, z, scale = 1) {
    const l = M.createLighthouse(); l.position.set(x, top, z); l.scale.setScalar(scale); this.add(l);
    this.lighthouseObj = l;
    this.colliders.push(cylCollider(x, z, 1.6 * scale, top, top + 13 * scale));
    return l;
  }

  // ---------------- Laufzeit ----------------
  updraftAt(p) {
    for (const u of this.updrafts) {
      const dx = p.x - u.x, dz = p.z - u.z;
      if (dx * dx + dz * dz < u.r * u.r && p.y > u.y0 - 1 && p.y < u.y1) return u;
    }
    return null;
  }

  // Bewegte Teile – wird im festen Physik-Takt vor dem Spieler aufgerufen
  stepWorld(dt) {
    this.time += dt;
    for (const mv of this.movers) {
      if (this.freeze) { mv.col.dx = mv.col.dy = mv.col.dz = 0; continue; }
      mv.phase += dt;
      let nx, ny, nz;
      if (mv.circle) {
        mv.angle += dt * mv.circle.speed;
        nx = mv.circle.cx + Math.cos(mv.angle) * mv.circle.R; ny = mv.circle.cy; nz = mv.circle.cz + Math.sin(mv.angle) * mv.circle.R;
      } else {
        const t = (1 - Math.cos(mv.phase / mv.period * Math.PI * 2)) / 2;
        nx = mv.from.x + (mv.to.x - mv.from.x) * t; ny = mv.from.y + (mv.to.y - mv.from.y) * t; nz = mv.from.z + (mv.to.z - mv.from.z) * t;
      }
      const dx = nx - mv.pos.x, dy = ny - mv.pos.y, dz = nz - mv.pos.z;
      mv.pos.set(nx, ny, nz);
      moveCollider(mv.col, dx, dy, dz);
      mv.mesh.position.x += dx; mv.mesh.position.y += dy; mv.mesh.position.z += dz;
    }
    for (const cr of this.crumbles) {
      if (cr.state === 'shaking') {
        cr.t += dt;
        cr.mesh.position.set(cr.home.x + (Math.random() - 0.5) * 0.12, cr.home.y, cr.home.z + (Math.random() - 0.5) * 0.12);
        if (cr.t > 0.55) {
          cr.state = 'falling'; cr.t = 0; cr.col.disabled = true; cr.vy = 0;
          this.game.audio.play('crumble');
          this.game.particles.burst(cr.home, { count: 8, color: 0xc8b8a0, speed: 3, size: 0.8, spread: 2 });
        }
      } else if (cr.state === 'falling') {
        cr.t += dt; cr.vy -= 30 * dt; cr.mesh.position.y += cr.vy * dt;
        cr.mesh.rotation.x += dt * 0.8;
        if (cr.t > 3.2) {
          cr.state = 'idle'; cr.col.disabled = false; cr.mesh.position.copy(cr.home); cr.mesh.rotation.set(0, 0, 0);
          cr.mesh.scale.setScalar(0.01); cr.grow = 0;
        }
      }
      if (cr.grow !== undefined) {
        cr.grow += dt * 3;
        cr.mesh.scale.setScalar(Math.min(1, cr.grow));
        if (cr.grow >= 1) cr.grow = undefined;
      }
    }
    for (const b of this.blinks) {
      const per = b.period, t = ((this.time + b.group * per / 2) % per) / per; // 0..1
      const on = this.freeze || t < 0.5;
      b.col.disabled = !on;
      b.warn = !this.freeze && t > 0.38 && t < 0.5;
    }
    for (const gz of this.geysers) {
      const t = (this.time + gz.phase) % gz.period;
      gz.state = this.freeze ? 'idle' : t < gz.period - 1.9 ? 'idle' : t < gz.period - 1.2 ? 'warn' : 'erupt';
    }
    for (const c of this.colliders) if (!c.dynamic) { c.dx = c.dy = c.dz = 0; }
    for (const mv of this.movers) mv.col.dynamic = true;
  }

  // Interaktionen nach dem Spielerschritt
  interact(dt, player) {
    const g = this.game;
    const p = player.pos;
    const pc = _pc.set(p.x, p.y + 0.6, p.z);
    // Crumble-Auslöser
    for (const cr of this.crumbles) if (cr.state === 'idle' && player.grounded && player.ground === cr.col) { cr.state = 'shaking'; cr.t = 0; }
    // Senke mit Wasser/Lava/Nebel
    if (this.terrain && player.alive && this.terrain.hazardAt(p.x, p.y, p.z)) { g.onPlayerFell(); return; }
    // Start-Tore der Herausforderungen
    for (const c of this.courses) {
      if (!c || !c.gate) continue;
      const gt = c.gate;
      if (Math.abs(p.y - gt.y) < 2.5 && (p.x - gt.x) ** 2 + (p.z - gt.z) ** 2 < 2.2 * 2.2) g.startCourse(c.k);
      const gl = c.goal;
      if (gl && g.course && g.course.k === c.k && Math.abs(p.y - gl.y) < 3 && (p.x - gl.x) ** 2 + (p.z - gl.z) ** 2 < 2.4 * 2.4) g.finishCourse(c.k);
    }
    // Funken
    for (const s of this.sparks) {
      if (s.taken) continue;
      if (s.pos.distanceToSquared(pc) < 1.1) {
        s.taken = true;
        g.addSparks(1, s.pos);
        if (s.course !== null && s.course !== undefined) this.courseSpark(s.course);
      }
    }
    for (const h of this.hearts) {
      if (h.taken) continue;
      if (h.pos.distanceToSquared(pc) < 1.3) { h.taken = true; h.mesh.visible = false; g.addHeart(h.pos); }
    }
    // Checkpoints
    for (const cp of this.checkpoints) {
      if (cp.active) continue;
      const dx = p.x - cp.x, dz = p.z - cp.z;
      if (dx * dx + dz * dz < 4 && Math.abs(p.y - cp.y) < 2.5) {
        for (const o of this.checkpoints) o.active = false;
        cp.active = true;
        g.setCheckpoint(cp);
      }
    }
    // Gegner
    for (const e of this.enemies) {
      if (!e.alive) continue;
      const dx = p.x - e.pos.x, dz = p.z - e.pos.z;
      const hd = Math.hypot(dx, dz);
      if (player.spinTime > 0 && hd < 1.8 && Math.abs(pc.y - (e.pos.y + e.h / 2)) < 1.6) { this.killEnemy(e, player); continue; }
      if (hd < e.r + 0.42 && p.y < e.pos.y + e.h && p.y + 1.2 > e.pos.y) {
        if (player.pounding && e.stompable) { this.killEnemy(e, player); continue; }
        if (player.vel.y < 0.5 && p.y > e.pos.y + e.h * 0.45 && e.stompable) { this.killEnemy(e, player); player.stompBounce(); continue; }
        player.hurt(e.pos);
      }
    }
    // Kristallrotoren
    const wp = _wp;
    for (const fb of this.firebars) {
      for (const b of fb.balls) {
        b.getWorldPosition(wp);
        if (wp.distanceToSquared(pc) < 0.75 * 0.75 + 0.2) { player.hurt(wp); break; }
      }
    }
    for (const ms of this.moonstones) {
      if (ms.taken) continue;
      if (ms.pos.distanceToSquared(pc) < 1.6) { ms.taken = true; ms.mesh.visible = false; if (ms.beam) ms.beam.visible = false; g.collectMoon(ms.id, ms.pos); }
    }
    for (const pc2 of this.pieces) {
      if (pc2.taken || pc2.pos.distanceToSquared(pc) > 1.4) continue;
      pc2.taken = true; pc2.mesh.visible = false;
      const n = this.pieces.filter((q) => q.taken).length;
      g.audio.play('heart');
      g.hud.toast(g.t('ui.piece', { n, m: this.pieces.length }));
      if (n === this.pieces.length && this.piecesMoon) this.spawnMoon(this.piecesMoon.pos, this.piecesMoon.id);
    }
    if (this.lost && this.lost.state === 'lying' && this.lost.pos.distanceToSquared(pc) < 1.6) {
      this.lost.state = 'carried'; g.audio.play('heart'); g.hud.toast(g.t('ui.carry'), 2.5);
    }
    if (this.rings) this.updateRings(dt, pc);
    for (const n of this.nests) {
      if (n.done) continue;
      if (n.enemies.every((e) => !e.alive)) { n.done = true; this.spawnMoon(new THREE.Vector3(n.x, n.y + 2, n.z), n.id); }
    }
    if (this.keyItem && !this.keyItem.taken && this.keyItem.pos.distanceToSquared(pc) < 1.6) {
      this.keyItem.taken = true; this.keyItem.mesh.visible = false; g.collectKey(this.keyItem.pos);
    }
    for (const gz of this.geysers) {
      if (gz.state !== 'erupt') continue;
      if (Math.hypot(p.x - gz.x, p.z - gz.z) < 1.1 && p.y < gz.top + 6 && p.y > gz.top - 1) player.hurt(new THREE.Vector3(gz.x, gz.top, gz.z + 0.01));
    }
    // Projektile
    for (const pr of this.projectiles) pr.check && pr.check(player);
    // Ziel
    if (this.goal && !this.goal.taken && this.goal.mesh.visible && this.goal.pos.distanceToSquared(pc) < 2.6) {
      this.goal.taken = true;
      g.collectShard(this.goal);
    }
    if (this.boss) this.boss.interact(player);
  }

  killEnemy(e, player) {
    e.alive = false; e.dying = 0.001;
    this.game.audio.play(player.vel.y < 0 ? 'stomp' : 'kill');
    this.game.particles.burst(new THREE.Vector3(e.pos.x, e.pos.y + 0.5, e.pos.z), { count: 14, color: [0x8f78c0, 0x5b3f8f, 0xffffff], speed: 5, size: 0.9 });
    this.game.addSparks(1, e.pos, true);
  }

  updateRings(dt, pc) {
    const R = this.rings, g = this.game;
    if (!R.running) {
      if (R.rings[0].pos.distanceTo(pc) < 1.7) {
        R.running = true; R.idx = 1; R.t = R.time;
        R.rings.forEach((r, i) => { r.mesh.visible = i > 0; });
        g.audio.play('checkpoint');
        g.hud.toast(g.t('ui.ringsStart', { n: R.rings.length - 1, s: R.time }), 2.5);
      }
      return;
    }
    R.t -= dt;
    g.hud.setRace(Math.max(0, R.t));
    const cur = R.rings[R.idx];
    cur.mesh.scale.setScalar(1 + Math.sin(this.time * 10) * 0.08);
    if (cur.pos.distanceTo(pc) < 1.7) {
      cur.mesh.visible = false; g.audio.play('spark'); R.idx++;
      if (R.idx >= R.rings.length) {
        R.running = false; g.hud.setRace(null);
        this.spawnMoon(cur.pos.clone(), R.id);
        R.rings[0].mesh.visible = true;
        return;
      }
    }
    if (R.t <= 0) {
      R.running = false; g.hud.setRace(null); g.audio.play('hurt');
      g.hud.toast(g.t('ui.ringsFail'), 2.5);
      R.rings.forEach((r, i) => { r.mesh.visible = i === 0; r.mesh.scale.setScalar(1); });
    }
  }

  shockwave(pos, radius) {
    for (const ps of this.poundSpots) {
      if (ps.done || Math.hypot(ps.x - pos.x, ps.z - pos.z) > 1.8 || Math.abs(ps.y - pos.y) > 0.6) continue;
      ps.done = true; ps.mesh.visible = false;
      this.game.shake(0.4);
      this.spawnMoon(new THREE.Vector3(ps.x, ps.y + 2.2, ps.z), ps.id);
    }
    for (const e of this.enemies) {
      if (!e.alive || !e.stompable) continue;
      if (Math.hypot(e.pos.x - pos.x, e.pos.z - pos.z) < radius && Math.abs(e.pos.y - pos.y) < 2) this.killEnemy(e, this.game.player);
    }
    if (this.boss) this.boss.shockwave(pos, radius);
  }

  breakCrate(cr) {
    if (cr.broken) return;
    cr.broken = true; cr.col.disabled = true; cr.mesh.visible = false;
    this.game.audio.play('crumble');
    this.game.particles.burst(cr.mesh.position, { count: 12, color: [0xc08850, 0x7a4a2a], speed: 6, size: 0.6, gravity: -15 });
    if (cr.sparks) this.game.addSparks(cr.sparks, cr.mesh.position);
    if (cr.moonId) this.spawnMoon(cr.mesh.position.clone().add(new THREE.Vector3(0, 1.4, 0)), cr.moonId);
  }

  spinHit(player) {
    for (const cr of this.crates) {
      if (cr.broken) continue;
      if (cr.mesh.position.distanceTo(new THREE.Vector3(player.pos.x, player.pos.y + 0.6, player.pos.z)) < 1.7) this.breakCrate(cr);
    }
  }

  // visuelle Updates einmal pro Frame
  update(dt, player, camera) {
    const t = this.time;
    if (this.grass) this.grass.update(dt, player, camera);
    if (this.hazardMeshes) for (const hm of this.hazardMeshes) { const f = hm.userData.flow; f.offset.x += dt * (hm.userData.lava ? 0.012 : 0.006); f.offset.y += dt * 0.004; }
    if (this.quests && this.game.state !== 'test') this.quests.update(dt, player);
    this.sky.material.uniforms.time.value = t;
    for (const s of this.sparks) if (!s.taken) s.pos.y = s.base + Math.sin(t * 2 + s.ph) * 0.12;
    this.updateSparkInstances(t);
    for (const h of this.hearts) if (!h.taken) { h.mesh.rotation.y = t * 1.5; h.pos.y = h.base + Math.sin(t * 2) * 0.15; }
    for (const b of this.bouncers) {
      if (b.t > 0) b.t -= dt;
      const k = b.t > 0 ? Math.sin(b.t * 30) * b.t * 1.2 : 0;
      b.mesh.userData.pad.scale.set(1 + k * 0.3, 1 - k * 0.6, 1 + k * 0.3);
    }
    for (const cp of this.checkpoints) {
      const u = cp.mesh.userData;
      const tgt = cp.active ? 1 : 0;
      u.flame.material.opacity += (tgt * 0.9 - u.flame.material.opacity) * Math.min(1, dt * 5);
      u.lampMat.color.set(cp.active ? 0xfff1d6 : 0x9a9aa8);
      u.lampMat.emissive.set(cp.active ? 0xffa040 : 0x000000);
      u.lamp.rotation.z = Math.sin(t * 2 + cp.x) * 0.1;
    }
    for (const fb of this.firebars) fb.piv.rotation.y = t * fb.speed;
    for (const u of this.updrafts) { u.tex.offset.y -= dt * 1.5; if (Math.random() < dt * 8 * (this.game.particles.rate ?? 1)) this.game.particles.burst(new THREE.Vector3(u.x + (Math.random() - 0.5) * u.r * 1.5, u.y0 + 0.5, u.z + (Math.random() - 0.5) * u.r * 1.5), { count: 1, color: 0xffffff, speed: 0.1, gravity: 14, life: 1.8, size: 0.35, drag: 0 }); }
    if (this.seaTex) { const k = this.lavaFlow ? 3 : 1; this.seaTex.offset.x += dt * 0.004 * k; this.seaTex.offset.y += dt * 0.002 * k; }
    const th = this.def.theme;
    const fxRate = this.game.particles.rate ?? 1;
    // Rauch und Funken aus Vulkanschloten in Lumis Nähe
    for (const v of this.vents) {
      const dx = v.x - player.pos.x, dz = v.z - player.pos.z;
      if (dx * dx + dz * dz > (v.big ? 160 * 160 : 60 * 60)) continue;
      if (Math.random() < dt * (v.big ? 18 : 3) * fxRate) this.game.particles.burst(new THREE.Vector3(v.x + (Math.random() - 0.5) * (v.big ? 3 : 0.4), v.y, v.z + (Math.random() - 0.5) * (v.big ? 3 : 0.4)), { count: 1, color: [0x5a4a4a, 0x8a6a5a], speed: v.big ? 1.5 : 0.4, size: v.big ? 4 : 1.2, gravity: v.big ? 3 : 1.5, life: v.big ? 5 : 2.5, drag: 0.2, grow: 2.5, opacity: 0.55 });
      if (Math.random() < dt * (v.big ? 8 : 1.5) * fxRate) this.game.particles.burst(new THREE.Vector3(v.x, v.y, v.z), { count: 1, color: [0xffb02e, 0xff6a1a], speed: v.big ? 6 : 2, up: 3, size: 0.3, tex: 'sparkle', additive: true, gravity: -6, life: 1.4 });
    }
    // Umgebungs-Partikel je Welt (Glühwürmchen, Funken, Staub, Nebel …)
    const AMB = { meadow: [0xfff6a0, 'glow', 0.25, 0.4], crystal: [0x9ff4ff, 'sparkle', 0.35, 0.3], lava: [0xffa040, 'sparkle', 0.3, 1.2], desert: [0xffe0a0, 'puff', 0.6, 0.6], fog: [0xb8a0ff, 'puff', 1.6, 0.25], sky: [0xffffff, 'sparkle', 0.25, 0.3] };
    const amb = this.terrain && AMB[this.worldDef.id];
    if (amb && Math.random() < dt * 14 * fxRate) {
      const p = player.pos, a = Math.random() * Math.PI * 2, rr = 4 + Math.random() * 22;
      const x = p.x + Math.cos(a) * rr, z = p.z + Math.sin(a) * rr, y = this.terrain.height(x, z) + 0.5 + Math.random() * 3;
      this.game.particles.burst(new THREE.Vector3(x, y, z), { count: 1, color: amb[0], speed: amb[3], up: 0.3, size: amb[2], tex: amb[1], additive: amb[1] !== 'puff', gravity: this.worldDef.id === 'lava' ? 0.8 : 0.05, life: 3.5, drag: 0.3, opacity: amb[1] === 'puff' ? 0.35 : 0.9 });
    }
    if ((th.snow || th.bubbles) && Math.random() < dt * 25 * fxRate) {
      const p = player.pos;
      const pos = new THREE.Vector3(p.x + (Math.random() - 0.5) * 30, p.y + (th.snow ? 12 : -6), p.z + (Math.random() - 0.5) * 30);
      this.game.particles.burst(pos, th.snow
        ? { count: 1, color: 0xffffff, speed: 0.3, size: 0.25, gravity: -1.2, life: 6, drag: 0 }
        : { count: 1, color: 0xbff8ff, speed: 0.3, size: 0.3, gravity: 1.5, life: 6, drag: 0, opacity: 0.6 });
    }
    for (const pc2 of this.pieces) if (!pc2.taken) { pc2.mesh.rotation.y = t * 2; pc2.pos.y = pc2.base + Math.sin(t * 3 + pc2.base) * 0.15; }
    if (this.lost) {
      if (this.lost.state === 'carried') { this.lost.pos.set(player.pos.x, player.pos.y + 1.9, player.pos.z); this.lost.mesh.rotation.y = player.facing; }
      else if (this.lost.state === 'lying') this.lost.pos.y = this.lost.base + Math.sin(t * 2) * 0.1;
    }
    for (const pt of this.portals) pt.disc.material.opacity = pt.locked ? 0.08 : 0.35 + Math.sin(t * 3) * 0.12;
    for (const ps of this.poundSpots) if (!ps.done) ps.mesh.material.opacity = 0.6 + Math.sin(t * 4) * 0.25;
    for (const ms of this.moonstones) if (!ms.taken) { ms.mesh.rotation.y = t * 2; ms.pos.y = ms.base + Math.sin(t * 2.2) * 0.15; }
    if (this.keyItem && !this.keyItem.taken) { this.keyItem.mesh.rotation.y = t * 2.5; this.keyItem.pos.y = this.keyItem.base + Math.sin(t * 3) * 0.15; }
    for (const b of this.blinks) {
      const on = !b.col.disabled;
      b.mat.opacity = on ? (b.warn ? 0.5 + Math.sin(t * 40) * 0.4 : 1) : 0.15;
      b.mesh.scale.y = on ? 1 : 0.3;
    }
    for (const gz of this.geysers) {
      gz.col.visible = gz.state === 'erupt';
      if (gz.state === 'erupt') { gz.col.scale.set(1 + Math.sin(t * 30) * 0.1, 1, 1 + Math.cos(t * 30) * 0.1); if (Math.random() < dt * 20) this.game.particles.burst(new THREE.Vector3(gz.x, gz.top + 5, gz.z), { count: 1, color: [0xffc23a, 0xff5a1a], speed: 3, size: 0.6, tex: 'glow', additive: true, gravity: -6 }); }
      if (gz.state === 'warn' && Math.random() < dt * 15) this.game.particles.burst(new THREE.Vector3(gz.x, gz.top + 0.3, gz.z), { count: 1, color: 0xff8a2a, speed: 2, size: 0.4, tex: 'glow', additive: true, gravity: 2, life: 0.5 });
    }
    for (const gh of this.ghosts) {
      const d = Math.hypot(player.pos.x - gh.x, player.pos.y - gh.y, player.pos.z - gh.z);
      const tgt = d < 6 ? 0.85 : 0.0;
      gh.vis += (tgt - gh.vis) * Math.min(1, dt * 3);
      gh.mat.opacity = Math.max(gh.vis, 0.03 + Math.sin(t * 2 + gh.x) * 0.02);
      if (Math.random() < dt * 0.6 * fxRate) this.game.particles.burst(new THREE.Vector3(gh.x + (Math.random() - 0.5) * gh.col.r, gh.y + 0.3, gh.z), { count: 1, color: 0xbfd0ff, speed: 0.3, size: 0.3, tex: 'sparkle', additive: true, gravity: 0.5, life: 1.2 });
    }
    if (this.goal && !this.goal.taken) {
      this.goal.mesh.rotation.y = t * 1.2;
      this.goal.mesh.position.y += Math.sin(t * 2) * 0.004;
      this.goal.mesh.userData.ring.rotation.z = t;
      this.goal.mesh.userData.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.1);
    }
    for (const a of this.anim) {
      if (a.kind === 'bobGroup') a.obj.position.y = a.base + Math.sin(t * a.sp + a.ph) * a.amp;
      else if (a.kind === 'bob') { const dy = Math.sin(t * a.sp + a.ph) * a.amp; a.obj.position.y = a.base + dy; a.other.position.y = a.obase + dy; }
      else if (a.kind === 'drift') { a.obj.position.x += a.sp * dt; if (a.obj.position.x > a.x1) a.obj.position.x = a.x0; }
      else if (a.kind === 'spin') a.obj.rotation.z += a.sp * dt;
      else if (a.kind === 'spin') a.obj.rotation.y = t * 0.8;
      else if (a.kind === 'windmill') a.obj.rotation.z = t * 0.9;
      else if (a.kind === 'pipe') { a.obj.rotation.z = t * 1.5; a.obj.scale.setScalar(0.9 + Math.sin(t * 3) * 0.08); }
      else if (a.kind === 'npc') { const b = a.obj.userData.body; b.position.y = Math.abs(Math.sin(t * 3 + a.ph)) * 0.08; b.rotation.z = Math.sin(t * 1.5 + a.ph) * 0.08; }
      else if (a.kind === 'ship') { a.obj.position.y = a.base + Math.sin(t * 0.6 + a.ph) * 0.8; a.obj.userData.prop.rotation.x = t * 12; a.obj.rotation.z = Math.sin(t * 0.5 + a.ph) * 0.04; }
    }
    if (this.lighthouseObj) this.lighthouseObj.userData.lamp.material.color.set(this.game.lighthouseLit ? 0xfff3a0 : 0x3b3150);
    this.updateEnemies(dt, player);
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      if (this.projectiles[i].update(dt)) this.projectiles.splice(i, 1);
    }
    if (this.boss) this.boss.update(dt, player);
  }

  updateEnemies(dt, player) {
    const p = player.pos;
    for (const e of this.enemies) {
      const u = e.mesh.userData;
      if (!e.alive) {
        if (e.dying > 0) {
          e.dying += dt;
          e.mesh.scale.set(1 + e.dying * 3, Math.max(0.05, 1 - e.dying * 4), 1 + e.dying * 3);
          if (e.dying > 0.3) { e.mesh.visible = false; e.dying = 0; }
        }
        continue;
      }
      e.t += dt;
      const dx = p.x - e.pos.x, dz = p.z - e.pos.z, dist = Math.hypot(dx, dz);
      let vx = 0, vz = 0;
      if (e.type === 'flatterling') {
        const a = e.t * 0.8;
        e.pos.x = e.home.x + Math.cos(a) * e.range;
        e.pos.z = e.home.z + Math.sin(a) * e.range;
        e.pos.y = e.flyY + Math.sin(e.t * 2.5) * 0.5;
        vx = -Math.sin(a); vz = Math.cos(a);
        u.wings[0].rotation.z = Math.sin(e.t * 18) * 0.6;
        u.wings[1].rotation.z = -Math.sin(e.t * 18) * 0.6;
      } else {
        const chasing = e.chase && dist < 7 && Math.abs(p.y - e.pos.y) < 1.8 && player.alive;
        if (chasing) {
          vx = dx / dist * e.speed * 1.25; vz = dz / dist * e.speed * 1.25;
        } else {
          const off = e.axis === 'x' ? e.pos.x - e.home.x : e.pos.z - e.home.z;
          if (off > e.range) e.dir = -1; else if (off < -e.range) e.dir = 1;
          if (e.axis === 'x') vx = e.dir * e.speed; else vz = e.dir * e.speed;
          if (e.axis === 'x') vz = (e.home.z - e.pos.z) * 2; else vx = (e.home.x - e.pos.x) * 2;
        }
        e.pos.x += vx * dt; e.pos.z += vz * dt;
        // in der Heimatzone bleiben
        const hx = e.pos.x - e.home.x, hz = e.pos.z - e.home.z, hl = Math.hypot(hx, hz), maxR = e.range + 0.5;
        if (hl > maxR) { e.pos.x = e.home.x + hx / hl * maxR; e.pos.z = e.home.z + hz / hl * maxR; }
        const sq = Math.sin(e.t * (e.type === 'dornling' ? 6 : 9));
        u.body.scale.set(1 + sq * 0.06, 1 - sq * 0.08, 1 + sq * 0.06);
        if (e.type === 'dornling') u.body.rotation.x += Math.hypot(vx, vz) * dt * 2;
      }
      if (vx || vz) {
        const target = Math.atan2(vx, vz);
        let d = target - e.mesh.rotation.y;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        e.mesh.rotation.y += d * Math.min(1, dt * 8);
      }
    }
  }

  checkpointHint(player) {
    for (const h of this.hints) {
      const dx = player.pos.x - h.x, dz = player.pos.z - h.z;
      if (dx * dx + dz * dz < h.r * h.r && Math.abs(player.pos.y - h.y) < 4) return this.game.t('hints.' + h.text);
    }
    return null;
  }

  dispose() {
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
  }
}
