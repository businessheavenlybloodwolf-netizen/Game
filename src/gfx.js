// Grafikqualität: Niedrig / Mittel (Handy-Standard) / Hoch / Ultra (bis 4K)
// batch = Handy-Modus (eingefrorene Hintergrund-Inseln ohne Schatten). Verschmolzen wird auf allen Stufen – das Bild bleibt gleich.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export const PRESETS = {
  low: { batch: true, light: false, aa: false, fx: 0.25, maxPR: 1, shadow: 512, soft: false, bloom: false, tex: 1, aniso: 2, fog: 1, shadowRange: 24 },
  medium: { batch: true, light: false, aa: false, fx: 0.4, maxPR: 1.5, shadow: 1024, soft: false, bloom: false, tex: 1, aniso: 4, fog: 1, shadowRange: 22 },
  high: { batch: false, light: true, aa: true, fx: 1, maxPR: 1.5, shadow: 2048, soft: true, bloom: true, tex: 1, aniso: 8, fog: 1.15, shadowRange: 32 },
  ultra: { batch: false, light: true, aa: true, fx: 1, maxPR: '4k', shadow: 4096, soft: true, bloom: true, tex: 2, aniso: 16, fog: 1.35, shadowRange: 40 },
};
export const ORDER = ['low', 'medium', 'high', 'ultra'];
const KEY = 'lumi_gfx';

export function loadPreset() {
  try { const s = localStorage.getItem(KEY); if (PRESETS[s]) return s; } catch (e) { /* egal */ }
  return matchMedia('(pointer: coarse)').matches ? 'medium' : 'high';
}
export function savePreset(n) { try { localStorage.setItem(KEY, n); } catch (e) { /* egal */ } }

export class Graphics {
  constructor(renderer, scene, camera, name) {
    this.renderer = renderer; this.scene = scene; this.camera = camera;
    this.name = name; this.p = PRESETS[name];
    this.composer = null;
    this.scale = 1;          // dynamische Auflösung (0.55 … 1)
    this.win = { t: 0, n: 0, good: 0 };
    this.fps = 0;
    this.apply(name);
  }

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
    if (this.composer) { this.composer.dispose(); this.composer = null; }
    if (this.p.bloom) {
      const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: this.p.maxPR === '4k' ? 0 : 4 });
      this.composer = new EffectComposer(r, rt);
      this.composer.addPass(new RenderPass(this.scene, this.camera));
      this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0.35, 0.93);
      this.composer.addPass(this.bloom);
      this.composer.addPass(new OutputPass());
    }
    this.resize();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    const pr = this.pixelRatio() * this.scale;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h);
    if (this.composer) { this.composer.setPixelRatio(pr); this.composer.setSize(w, h); }
  }

  render() {
    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }

  // Schattenkarte der Sonne an die Qualität anpassen
  setupSun(sun) {
    sun.shadow.mapSize.set(this.p.shadow, this.p.shadow);
    const sc = sun.shadow.camera, R = this.p.shadowRange;
    sc.left = sc.bottom = -R; sc.right = sc.top = R; sc.updateProjectionMatrix();
    if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
  }
}
