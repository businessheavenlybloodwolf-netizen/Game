// PC-Next-Gen: animiertes 3D-Gras auf Wiesen-Plattformen.
// Hunderttausende Halme per Instancing, Wind im Vertex-Shader, Lumi drückt die Halme beim Durchlaufen zur Seite.
// In der Ferne werden die Halme sanft ausgeblendet; ganze Kacheln außerhalb der Sichtweite werden gar nicht gezeichnet.
import * as THREE from 'three';
import { rng } from './textures.js';

const CELL = 24;

function bladeGeometry() {
  // spitz zulaufender Halm aus 3 Segmenten (7 Ecken), leicht gebogen
  const H = [0, 0.35, 0.7, 1], W = [0.07, 0.06, 0.04, 0];
  const pos = [], uv = [], nor = [], idx = [];
  for (let i = 0; i < 4; i++) {
    const z = H[i] * H[i] * 0.12;
    if (i < 3) {
      pos.push(-W[i], H[i], z, W[i], H[i], z);
      uv.push(0, H[i], 1, H[i]);
      nor.push(0, 1, 0.35, 0, 1, 0.35);
    } else { pos.push(0, H[i], z); uv.push(0.5, 1); nor.push(0, 1, 0.35); }
  }
  idx.push(0, 1, 2, 1, 3, 2, 2, 3, 4, 3, 5, 4, 4, 5, 6);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return g;
}

export class Grass {
  constructor(level, areas, density, far) {
    this.level = level;
    this.far = far;
    this.uniforms = { uTime: { value: 0 }, uPlayer: { value: new THREE.Vector3(0, -999, 0) }, uFar: { value: far } };
    const th = level.def.theme;
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75, metalness: 0, side: THREE.DoubleSide });
    mat.userData.grass = true;
    const root = new THREE.Color(th.grassRoot ?? 0x2f7a2c), tip = new THREE.Color(th.grassTip ?? 0xb6e86a);
    const geo = bladeGeometry();
    const col = [];
    const hs = geo.attributes.uv;
    for (let i = 0; i < hs.count; i++) { const c = root.clone().lerp(tip, Math.pow(hs.getY(i), 0.8)); col.push(c.r, c.g, c.b); }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    mat.vertexColors = true;
    const U = this.uniforms;
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, U);
      sh.vertexShader = 'uniform float uTime; uniform vec3 uPlayer; uniform float uFar;\n' + sh.vertexShader.replace('#include <project_vertex>', `
        vec4 rootP = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        vec4 wp = instanceMatrix * vec4(transformed, 1.0);
        float hgt = uv.y * uv.y;
        float sh = length(instanceMatrix[1].xyz);
        float w = sin(uTime * 1.5 + rootP.x * 0.21 + rootP.z * 0.16) * 0.5 + 0.5;
        vec2 wind = vec2(0.20, 0.11) * (w * 0.85 + 0.15) + 0.05 * vec2(sin(uTime * 3.7 + rootP.z * 1.1), cos(uTime * 3.1 + rootP.x * 1.3));
        vec2 dp = rootP.xz - uPlayer.xz; float dl = length(dp);
        float push = (1.0 - smoothstep(0.25, 1.3, dl)) * (1.0 - step(1.6, abs(rootP.y - uPlayer.y)));
        wind += dp / max(dl, 0.001) * push * 0.75;
        float cd = distance(rootP.xyz, cameraPosition);
        float fade = 1.0 - smoothstep(uFar * 0.65, uFar, cd);
        wp.xyz = rootP.xyz + (wp.xyz - rootP.xyz) * fade;
        wp.xz += wind * hgt * sh * fade;
        wp.y -= length(wind) * hgt * sh * 0.35 * fade;
        vec4 mvPosition = modelViewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;`);
      // Halme etwas durchscheinend: Rückseiten nicht schwarz, Spitzen fangen Licht
      sh.fragmentShader = sh.fragmentShader.replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
        reflectedLight.indirectDiffuse += diffuseColor.rgb * 0.18 * vUv.y;`);
    };
    mat.defines = { USE_UV: '' };
    this.mat = mat;
    this.meshes = [];
    // Halme auf die Flächen verteilen, nach Kacheln sortiert
    const r = rng(4711);
    const cells = new Map();
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), e = new THREE.Euler();
    const cA = new THREE.Color();
    let total = 0;
    const MAX = 420000;
    for (const a of areas) {
      const area = a.kind === 'cyl' ? Math.PI * a.r * a.r : a.w * a.d;
      let n = Math.round(area * density);
      if (total + n > MAX) n = MAX - total;
      if (n <= 0) break;
      total += n;
      for (let i = 0; i < n; i++) {
        let x, z;
        if (a.kind === 'cyl') {
          const rr = (a.r - 0.25) * Math.sqrt(r()), aa = r() * Math.PI * 2;
          x = a.x + Math.cos(aa) * rr; z = a.z + Math.sin(aa) * rr;
        } else {
          x = a.x + (r() - 0.5) * (a.w - 0.4); z = a.z + (r() - 0.5) * (a.d - 0.4);
        }
        const key = Math.floor(x / CELL) + ':' + Math.floor(z / CELL);
        if (!cells.has(key)) cells.set(key, []);
        const h = 0.22 + r() * 0.3 + (r() < 0.07 ? 0.25 : 0);
        e.set((r() - 0.5) * 0.35, r() * Math.PI * 2, (r() - 0.5) * 0.35);
        q.setFromEuler(e);
        s.set(0.8 + r() * 0.6, h, 1);
        p.set(x, a.top - 0.02, z);
        m4.compose(p, q, s);
        cA.setHSL(0, 0, 0.82 + r() * 0.3);
        if (r() < 0.12) cA.multiply(new THREE.Color(1.1, 1.05, 0.7)); // trockene Halme
        cells.get(key).push([m4.clone(), cA.clone()]);
      }
    }
    for (const list of cells.values()) {
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach(([mm, cc], i) => { im.setMatrixAt(i, mm); im.setColorAt(i, cc); });
      im.instanceMatrix.needsUpdate = true;
      im.computeBoundingSphere();
      im.boundingSphere.radius += 1.5;
      im.receiveShadow = true; im.castShadow = false;
      im.userData.center = im.boundingSphere.center.clone();
      im.userData.r = im.boundingSphere.radius;
      level.group.add(im);
      this.meshes.push(im);
    }
    this.count = total;
  }

  update(dt, player, camera) {
    this.uniforms.uTime.value += dt;
    this.uniforms.uPlayer.value.copy(player.pos);
    const cp = camera.position, lim = this.far + 4;
    for (const m of this.meshes) m.visible = m.userData.center.distanceTo(cp) - m.userData.r < lim;
  }
}
