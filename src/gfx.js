// Grafikqualität (PC): Niedrig / Mittel / Hoch / Ultra (bis 4K)
// batch = Handy-Modus (eingefrorene Hintergrund-Inseln ohne Schatten). Verschmolzen wird auf allen Stufen – das Bild bleibt gleich.
// modern = PC-Next-Gen-Renderer: PBR-Materialien mit Normal-Maps, Umgebungslicht (IBL) aus dem Himmel, Filmic-Tone-Mapping,
//          Lichtstrahlen, Farbkorrektur, animiertes Gras. Ultra zusätzlich Ambient Occlusion (GTAO).
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';

// PC-Version: alle Stufen nutzen den runden Next-Gen-Look. Niedrig/Mittel sind für schwächere PCs.
export const PRESETS = {
  low: { batch: true, light: false, aa: false, fx: 0.4, maxPR: 1, shadow: 1024, soft: false, bloom: true, tex: 1, aniso: 4, fog: 1.1, shadowRange: 28, modern: true, grass: 0.35 },
  medium: { batch: false, light: true, aa: true, fx: 0.7, maxPR: 1.25, shadow: 2048, soft: true, bloom: true, tex: 2, aniso: 8, fog: 1.2, shadowRange: 32, modern: true, grass: 0.6, shafts: true },
  high: { batch: false, light: true, aa: true, fx: 1, maxPR: 1.5, shadow: 2048, soft: true, bloom: true, tex: 2, aniso: 8, fog: 1.25, shadowRange: 36, modern: true, grass: 1, shafts: true },
  ultra: { batch: false, light: true, aa: true, fx: 1.3, maxPR: '4k', shadow: 4096, soft: true, bloom: true, tex: 2, aniso: 16, fog: 1.45, shadowRange: 48, modern: true, grass: 2.2, shafts: true, ao: true },
};
export const ORDER = ['low', 'medium', 'high', 'ultra'];
const KEY = 'lumi_gfx';

export function loadPreset() {
  try { const s = localStorage.getItem(KEY); if (PRESETS[s]) return s; } catch (e) { /* egal */ }
  return 'high';
}
export function savePreset(n) { try { localStorage.setItem(KEY, n); } catch (e) { /* egal */ } }

// Lichtstrahlen (God Rays): helle Bereiche rund um die Sonne werden radial zur Sonne hin verwischt.
// Bäume, Inseln und Figuren vor der Sonne schneiden dabei sichtbare Strahlen heraus.
const ShaftShader = {
  uniforms: { tDiffuse: { value: null }, sunPos: { value: new THREE.Vector2(0.5, 0.5) }, strength: { value: 0 }, sunCol: { value: new THREE.Color(1, 0.95, 0.8) }, aspect: { value: 1 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 sunPos; uniform float strength; uniform vec3 sunCol; uniform float aspect; varying vec2 vUv;
float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec4 base = texture2D(tDiffuse, vUv);
  if (strength <= 0.001) { gl_FragColor = base; return; }
  vec2 d = sunPos - vUv;
  float dist = length(d * vec2(aspect, 1.0));
  const int N = 40;
  vec2 stepv = d / float(N) * 0.9;
  vec2 uv = vUv + stepv * rnd(vUv * 731.0);
  float acc = 0.0, decay = 1.0;
  for (int i = 0; i < N; i++) {
    uv += stepv;
    vec3 c = clamp(texture2D(tDiffuse, uv).rgb, 0.0, 8.0);
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    acc += smoothstep(1.0, 2.2, l) * decay;
    decay *= 0.96;
  }
  acc /= float(N);
  float fall = exp(-dist * 1.4);
  vec3 add = sunCol * acc * strength * fall;
  if (!(add.r >= 0.0 && add.r < 100.0)) add = vec3(0.0);
  gl_FragColor = vec4(base.rgb + add, base.a);
}`,
};

// Farbkorrektur im Bildraum (nach dem Tone-Mapping): Kontrast, Sättigung, Split-Toning, Vignette, leichte chromatische Aberration
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, sat: { value: 1.12 }, contrast: { value: 1.06 }, vignette: { value: 0.28 }, aspect: { value: 1 }, ca: { value: 0.0012 },
    shadowTint: { value: new THREE.Color(0.96, 0.98, 1.06) }, highTint: { value: new THREE.Color(1.04, 1.01, 0.96) } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float sat; uniform float contrast; uniform float vignette; uniform float aspect; uniform float ca;
uniform vec3 shadowTint; uniform vec3 highTint; varying vec2 vUv;
void main(){
  vec2 d = vUv - 0.5;
  float r2 = dot(d * vec2(aspect, 1.0), d * vec2(aspect, 1.0));
  vec2 off = d * ca * (1.0 + r2 * 4.0);
  vec3 c = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(vec3(l), c, sat);
  c = (c - 0.5) * contrast + 0.5;
  c *= mix(shadowTint, highTint, smoothstep(0.15, 0.85, l));
  c *= 1.0 - vignette * smoothstep(0.12, 0.75, r2);
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`,
};

// GTAO in halber Auflösung (sieht fast gleich aus, kostet ein Viertel)
class HalfGTAOPass extends GTAOPass {
  setSize(w, h) { super.setSize(Math.max(1, w >> 1), Math.max(1, h >> 1)); }
}

export class Graphics {
  constructor(renderer, scene, camera, name) {
    this.renderer = renderer; this.scene = scene; this.camera = camera;
    this.name = name; this.p = PRESETS[name];
    this.composer = null;
    this.scale = 1;          // dynamische Auflösung (0.55 … 1)
    this.win = { t: 0, n: 0, good: 0 };
    this.fps = 0;
    this.envRT = null;
    this.apply(name);
  }

  get modern() { return !!this.p.modern; }

  // Dynamische Auflösung: fällt die Bildrate unter ~50 FPS, wird die Renderauflösung schrittweise gesenkt,
  // bei viel Luft langsam wieder angehoben (mit Hysterese, damit nichts flackert).
  adapt(dt) {
    const w = this.win;
    w.t += dt; w.n++;
    if (w.t < 0.75) return;
    const ms = (w.t / w.n) * 1000;
    this.fps = Math.round(w.n / w.t);
    w.t = 0; w.n = 0;
    let next = this.scale;
    if (ms > 21) { next = Math.max(0.55, this.scale - (ms > 33 ? 0.15 : 0.08)); w.good = 0; }
    else if (ms < 17.8) { w.good++; if (w.good >= 4 && this.scale < 1) { next = Math.min(1, this.scale + 0.05); w.good = 0; } }
    else w.good = 0;
    if (Math.abs(next - this.scale) > 0.001) { this.scale = next; this.resize(); }
  }

  pixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    if (this.p.maxPR === '4k') {
      // Zielauflösung bis 3840×2160: auf 4K-Monitoren nativ, auf kleineren Bildschirmen als Supersampling
      return Math.max(dpr, Math.min(3840 / window.innerWidth, 2160 / window.innerHeight, 3));
    }
    return Math.min(dpr, this.p.maxPR);
  }

  apply(name) {
    this.name = name; this.p = PRESETS[name];
    const r = this.renderer;
    r.shadowMap.type = this.p.soft ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
    r.shadowMap.needsUpdate = true;
    // Filmic: neutrales Tone-Mapping erhält die kräftigen Farben, holt aber Lichter weich zurück
    r.toneMapping = this.modern ? THREE.NeutralToneMapping : THREE.NoToneMapping;
    r.toneMappingExposure = this.modern ? 1.0 : 1;
    if (this.composer) { this.composer.dispose(); this.composer = null; }
    this.shafts = this.grade = this.ao = null;
    if (this.p.bloom) {
      const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: this.p.maxPR === '4k' ? 0 : 4 });
      this.composer = new EffectComposer(r, rt);
      this.composer.addPass(new RenderPass(this.scene, this.camera));
      if (this.p.ao) {
        this.ao = new HalfGTAOPass(this.scene, this.camera, 2, 2);
        this.ao.updateGtaoMaterial({ radius: 0.9, distanceExponent: 1.4, thickness: 1.2, scale: 1.0, samples: 12 });
        this.ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
        this.ao.blendIntensity = 0.85;
        this.composer.addPass(this.ao);
      }
      if (this.p.shafts) { this.shafts = new ShaderPass(ShaftShader); this.composer.addPass(this.shafts); }
      this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), this.modern ? 0.35 : 0.2, this.modern ? 0.5 : 0.35, this.modern ? 1.0 : 0.93);
      this.composer.addPass(this.bloom);
      this.composer.addPass(new OutputPass());
      if (this.modern) { this.grade = new ShaderPass(GradeShader); this.composer.addPass(this.grade); }
    }
    this.resize();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    const pr = this.pixelRatio() * this.scale;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h);
    if (this.composer) { this.composer.setPixelRatio(pr); this.composer.setSize(w, h); }
    const asp = w / Math.max(1, h);
    if (this.shafts) this.shafts.uniforms.aspect.value = asp;
    if (this.grade) this.grade.uniforms.aspect.value = asp;
  }

  // Umgebungslicht (Image Based Lighting): Der Himmel des Levels wird in eine vorgefilterte Umgebungskarte gerendert.
  // Daraus kommen weiches Himmelslicht von allen Seiten und Spiegelungen auf glatten Flächen (Eis, Kristall, Metall, Edelsteine).
  setupEnvironment(level) {
    if (this.envRT) { this.envRT.dispose(); this.envRT = null; }
    this.scene.environment = null;
    this.level = level;
    if (!this.modern || !level || !level.sky) return;
    const envScene = new THREE.Scene();
    const sky = level.sky.clone();
    sky.material = level.sky.material.clone();
    sky.material.uniforms.linOut.value = 1;
    sky.material.uniforms.stars.value = 0;
    sky.material.uniforms.clouds.value *= 0.5;
    sky.geometry = new THREE.SphereGeometry(50, 32, 16);
    envScene.add(sky);
    // heller „Boden“ in Theme-Farbe, damit Unterseiten nicht schwarz werden
    const th = level.def.theme;
    const ground = new THREE.Mesh(new THREE.CircleGeometry(40, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(th.hemiGround ?? 0x808080).multiplyScalar(0.6) }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -6;
    envScene.add(ground);
    const pm = new THREE.PMREMGenerator(this.renderer);
    const tm = this.renderer.toneMapping; this.renderer.toneMapping = THREE.NoToneMapping;
    this.envRT = pm.fromScene(envScene, 0.02, 0.1, 200);
    this.renderer.toneMapping = tm;
    pm.dispose();
    sky.geometry.dispose(); sky.material.dispose(); ground.geometry.dispose(); ground.material.dispose();
    this.scene.environment = this.envRT.texture;
    this.scene.environmentIntensity = th.envI ?? 0.75;
    if (this.shafts) this.shafts.uniforms.sunCol.value.set(th.sunColor || 0xfff2c0);
  }

  // pro Bild: Sonnenposition für die Lichtstrahlen
  update() {
    if (!this.shafts) return;
    const L = this.level, u = this.shafts.uniforms;
    if (!L || !L.sunDir) { u.strength.value = 0; return; }
    const cam = this.camera;
    const sp = this._sp || (this._sp = new THREE.Vector3());
    const fw = this._fw || (this._fw = new THREE.Vector3());
    cam.getWorldDirection(fw);
    const facing = fw.dot(L.sunDir);
    sp.copy(cam.position).addScaledVector(L.sunDir, 800).project(cam);
    u.sunPos.value.set(sp.x * 0.5 + 0.5, sp.y * 0.5 + 0.5);
    const edge = Math.max(Math.abs(sp.x), Math.abs(sp.y));
    if (!Number.isFinite(edge) || edge > 2.6 || sp.z > 1) { u.strength.value = 0; return; }
    u.strength.value = facing > 0 ? (L.def.theme.shafts ?? 0.9) * Math.min(1, facing * 3) * THREE.MathUtils.clamp(1.6 - edge * 0.6, 0, 1) : 0;
  }

  render() {
    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }

  // Schattenkarte der Sonne an die Qualität anpassen
  setupSun(sun) {
    sun.shadow.mapSize.set(this.p.shadow, this.p.shadow);
    const sc = sun.shadow.camera, R = this.p.shadowRange;
    sc.left = sc.bottom = -R; sc.right = sc.top = R; sc.far = this.modern ? 180 : 120; sc.updateProjectionMatrix();
    if (this.modern) { sun.shadow.radius = 3; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04; }
    if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
  }
}
