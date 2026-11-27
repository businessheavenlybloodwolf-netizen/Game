// Quests in der offenen Welt: Glimmlinge geben Aufträge in 8 verschiedenen Arten.
// Pro Reich 6 Quests (IDs q0 … q5), Belohnung: ein Mondsplitter + Funken.
// Immer eine Quest aktiv; HUD-Anzeige oben rechts, goldene Lichtsäule zeigt das aktuelle Ziel.
import * as THREE from 'three';
import * as M from './models.js';
import { pebble, roundBox } from './shapes.js';

export const QUEST_TYPES = ['collect', 'deliver', 'race', 'catch', 'defeat', 'lanterns', 'lost', 'view'];
export const QUESTS_PER_KINGDOM = 6;
export const QUEST_IDS = Array.from({ length: QUESTS_PER_KINGDOM }, (_, i) => 'q' + i);
const NAMES = ['Pip', 'Mora', 'Fenn', 'Lio', 'Tuva', 'Bramm', 'Kiri', 'Odo', 'Nell', 'Rumo', 'Sisi', 'Taro', 'Ulla', 'Vix', 'Wim', 'Yara',
  'Zeno', 'Ilka', 'Juno', 'Kalle', 'Mika', 'Ronja', 'Ole', 'Fips', 'Lotti', 'Bo', 'Edda', 'Quinn', 'Hanno', 'Pia', 'Tilo', 'Greta',
  'Jasper', 'Maja', 'Nino', 'Rike', 'Sven', 'Ylvi', 'Anouk', 'Benno', 'Cleo', 'Dag', 'Elin', 'Fritz', 'Hedda', 'Ivo', 'Klara', 'Lenz'];
const COLORS = [0xffd36b, 0x9fe8ff, 0xc9b6ff, 0xa8f0a0, 0xffb38a, 0xff9ad0];
export const questName = (w, i) => NAMES[(w * QUESTS_PER_KINGDOM + i) % NAMES.length];

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

// ---------- kleine Modelle für Quest-Gegenstände ----------
function berry() {
  const g = new THREE.Group();
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.26, 24, 16), M.toon(0xff5a8a, { emissive: 0xff2a6a, ei: 0.6 })); g.add(b);
  const leaf = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10), M.toon(0x5fae4a)); leaf.scale.set(0.16, 0.04, 0.08); leaf.position.set(0.08, 0.27, 0); leaf.rotation.z = 0.4; g.add(leaf);
  g.add(M.glowSprite(0xff7aa8, 1.4, 0.55));
  return g;
}
function parcel() {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(roundBox(0.6, 0.45, 0.5, 0.08), M.toon(0xc8955a, { map: null })));
  const r1 = new THREE.Mesh(roundBox(0.62, 0.47, 0.1, 0.03), M.toon(0xd9584a)); g.add(r1);
  const r2 = new THREE.Mesh(roundBox(0.1, 0.47, 0.52, 0.03), M.toon(0xd9584a)); g.add(r2);
  const bow = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.035, 10, 24), M.toon(0xd9584a)); bow.position.y = 0.27; g.add(bow);
  M.addOutline(g, 0.03);
  return g;
}
function flag(color = 0xffd23f) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 3, 16), M.toon(0xfff1d6)); pole.position.y = 1.5; g.add(pole);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), M.toon(0xe8c070, { rough: 0.3, metal: 0.8 })); knob.position.y = 3.05; g.add(knob);
  const cloth = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.7, 8, 2), M.toon(color, { emissive: color, ei: 0.25 }));
  cloth.material = cloth.material.clone(); cloth.material.side = THREE.DoubleSide;
  cloth.position.set(0.58, 2.55, 0); g.add(cloth);
  g.userData.cloth = cloth;
  M.addOutline(pole, 0.03);
  return g;
}
function wusel() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(pebble(0.38, 2.2), M.toon(0xffe066, { emissive: 0xffb000, ei: 0.5 })); body.position.y = 0.35; g.add(body);
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.32, 16), M.toon(0xffe066, { emissive: 0xffb000, ei: 0.5 })); ear.position.set(sx * 0.2, 0.7, 0); ear.rotation.z = -sx * 0.4; g.add(ear);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8), M.toon(0x1a1020)); eye.position.set(sx * 0.12, 0.42, 0.33); g.add(eye);
  }
  g.add(M.glowSprite(0xffe066, 1.8, 0.6));
  M.addOutline(g, 0.03);
  return g;
}
function lantern() {
  const g = new THREE.Group();
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 1.6, 16), M.toon(0x6a4a3a)); post.position.y = 0.8; g.add(post);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.25, 20), M.toon(0x3a2a3a)); cap.position.y = 2.05; g.add(cap);
  const glass = new THREE.Mesh(new THREE.SphereGeometry(0.24, 20, 14), M.toon(0x8a8a9a, { unique: true })); glass.position.y = 1.78; g.add(glass);
  const glow = M.glowSprite(0xffb050, 2.4, 0.9); glow.position.y = 1.78; glow.visible = false; g.add(glow);
  M.addOutline(post, 0.03);
  g.userData = { glass, glow };
  return g;
}
function telescope() {
  const g = new THREE.Group();
  const wood = M.toon(0x8a5a3a), brass = M.toon(0xe8c070, { rough: 0.3, metal: 0.85 });
  for (let i = 0; i < 3; i++) {
    const a = i / 3 * Math.PI * 2;
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.5, 12), wood);
    leg.position.set(Math.cos(a) * 0.3, 0.7, Math.sin(a) * 0.3); leg.rotation.set(Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35); g.add(leg);
  }
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 1.2, 20), brass); tube.position.y = 1.5; tube.rotation.z = 1.2; g.add(tube);
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.15, 20), M.toon(0x9ff4ff, { emissive: 0x5fd8ff, ei: 0.6 })); lens.position.set(0.56, 1.72, 0); lens.rotation.y = Math.PI / 2; g.add(lens);
  M.addOutline(g, 0.03);
  return g;
}
function mistRing(r) {
  const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.25, 12, 64), M.basic(0x6a4c99, { transparent: true, opacity: 0.5, additive: true }));
  m.rotation.x = Math.PI / 2;
  return m;
}

// ---------- Quest-System pro Reich ----------
export class QuestSystem {
  constructor(level) {
    this.level = level; this.game = level.game;
    this.w = level.spec.world;
    this.list = [];
    this.active = null;
    // Zielmarkierung: goldene Lichtsäule
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 70, 24, 1, true), M.basic(0xffd36b, { transparent: true, opacity: 0.22, additive: true, side: THREE.DoubleSide }));
    beam.visible = false; level.add(beam); this.beam = beam;
    this.time = 0;
  }

  get done() { return this.game.save.quests || (this.game.save.quests = {}); }
  isDone(i) { return !!this.done[this.w + '-' + i]; }

  // vom Generator: Quest anlegen. o.giver = {x,y,z}; weitere Felder je nach Art
  add(i, type, o) {
    const L = this.level, g = this.game;
    const name = questName(this.w, i);
    const color = COLORS[i % COLORS.length];
    const npc = L.npc(o.giver.x, o.giver.y, o.giver.z, 'quest', color, o.giver.yaw || 0);
    npc.quest = i;
    // Ausrufezeichen über offenen Quests
    const mark = new THREE.Group();
    const bar = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.32, 6, 16), M.toon(0xffd23f, { emissive: 0xffa000, ei: 0.7 })); bar.position.y = 0.25; mark.add(bar);
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 12), bar.material); dot.position.y = -0.12; mark.add(dot);
    mark.add(M.glowSprite(0xffd36b, 1.4, 0.6));
    mark.position.set(o.giver.x, o.giver.y + 2.1, o.giver.z); L.add(mark);
    const q = { i, type, name, npc, mark, o, state: this.isDone(i) ? 'done' : 'open', items: [], n: 0, m: 0, t: 0 };
    this.list.push(q);
    // erledigt, aber Splitter noch nicht eingesammelt (z. B. nach Neustart): Splitter wartet beim Auftraggeber
    if (q.state === 'done' && !g.hasMoon(this.w, 'q' + i)) L.spawnMoon(V(o.giver.x + 1.2, o.giver.y + 1.6, o.giver.z), 'q' + i);
    return q;
  }

  // Gespräch mit einem Auftraggeber – gibt [Textschlüssel, Parameter, danach] zurück
  talk(i) {
    const q = this.list.find((x) => x.i === i);
    if (!q) return null;
    if (q.state === 'done') return ['thanks', {}];
    if (q.state === 'active') {
      if (q.ready) { this.complete(q); return ['done', {}]; }
      return ['remind', { n: q.n, m: q.m }];
    }
    // neue Quest annehmen (eine eventuell laufende wird pausiert/abgebrochen)
    if (this.active && this.active !== q) this.cancel(this.active, true);
    this.start(q);
    return ['offer', { n: q.m, s: q.limit ? Math.round(q.limit) : 0 }];
  }

  start(q) {
    const L = this.level, o = q.o;
    q.state = 'active'; q.n = 0; q.ready = false; q.t = 0; q.items = [];
    this.active = q;
    switch (q.type) {
      case 'collect': {
        q.m = o.spots.length;
        for (const p of o.spots) { const b = berry(); b.position.set(p.x, p.y + 1.1, p.z); L.add(b); q.items.push({ obj: b, pos: b.position, taken: false, base: p.y + 1.1 }); }
        break;
      }
      case 'deliver': {
        q.m = 1; q.carry = true;
        const p = parcel(); L.add(p); q.parcel = p;
        const r = L.npc(o.target.x, o.target.y, o.target.z, 'questTarget', 0xfff1d6, o.target.yaw || 0);
        L.interactables.splice(L.interactables.indexOf(r), 1); // Abgabe geschieht beim Näherkommen
        q.receiver = r;
        break;
      }
      case 'race': {
        q.m = 1; q.limit = o.limit;
        const f = flag(); f.position.set(o.target.x, o.target.y, o.target.z); L.add(f); q.items.push({ obj: f, pos: f.position });
        break;
      }
      case 'catch': {
        q.m = 3;
        const c = wusel(); c.position.set(o.area.x, o.area.y, o.area.z); L.add(c);
        q.critter = { obj: c, pos: c.position, vx: 0, vz: 0, hop: 0, cool: 0 };
        break;
      }
      case 'defeat': {
        const a = o.area;
        const types = ['nebling', 'nebling', 'flatterling', 'dornling', 'nebling'];
        q.enemies = types.map((tp, k) => { const ang = k / types.length * Math.PI * 2; return L.enemy(tp, a.x + Math.cos(ang) * a.r * 0.45, a.y, a.z + Math.sin(ang) * a.r * 0.45, { range: a.r * 0.3 }); });
        q.m = q.enemies.length;
        const ring = mistRing(a.r * 0.8); ring.position.set(a.x, a.y + 0.15, a.z); L.add(ring); q.items.push({ obj: ring });
        break;
      }
      case 'lanterns': {
        q.m = o.spots.length; q.limit = o.limit; q.running = false;
        for (const p of o.spots) { const l = lantern(); l.position.set(p.x, p.y, p.z); L.add(l); q.items.push({ obj: l, pos: l.position, lit: false }); }
        break;
      }
      case 'lost': {
        q.m = o.spots.length;
        for (const p of o.spots) {
          const c = M.createGlimmling(COLORS[(q.i + q.items.length + 2) % COLORS.length]); c.scale.setScalar(0.55);
          c.position.set(p.x, p.y, p.z); L.add(c);
          q.items.push({ obj: c, pos: c.position, follow: false, home: false });
        }
        break;
      }
      case 'view': {
        q.m = 1;
        const t = telescope(); t.position.set(o.target.x, o.target.y, o.target.z); L.add(t); q.items.push({ obj: t, pos: t.position });
        break;
      }
    }
    this.game.audio.play('confirm');
    this.game.hud.setQuest(this.trackerText(q));
  }

  cancel(q, silent = false) {
    const L = this.level;
    for (const it of q.items) if (it.obj && it.obj.parent) it.obj.parent.remove(it.obj);
    if (q.parcel && q.parcel.parent) q.parcel.parent.remove(q.parcel);
    if (q.critter && q.critter.obj.parent) q.critter.obj.parent.remove(q.critter.obj);
    if (q.receiver) { L.group.remove(q.receiver.mesh); const ii = L.interactables.indexOf(q.receiver); if (ii >= 0) L.interactables.splice(ii, 1); const ci = L.colliders.findIndex((c) => c.x === q.receiver.x && c.z === q.receiver.z && c.r === 0.45); if (ci >= 0) L.colliders.splice(ci, 1); q.receiver = null; }
    if (q.enemies) { for (const e of q.enemies) if (e.alive) { e.alive = false; e.mesh.visible = false; } q.enemies = null; }
    q.items = []; q.state = 'open'; q.ready = false;
    if (this.active === q) { this.active = null; this.game.hud.setQuest(null); this.game.hud.setRace(null); }
    if (!silent) this.game.hud.toast(this.game.t('quest.failed'), 2.5);
  }

  // Ziel erreicht: zurück zum Auftraggeber (Sammeln, Fangen, Verirrte) oder direkt belohnen
  objectiveMet(q) {
    const back = q.type === 'collect' || q.type === 'catch' || q.type === 'lost';
    if (back) { q.ready = true; this.game.hud.toast(this.game.t('quest.returnTo', { name: q.name }), 3); this.game.audio.play('oneup'); this.game.hud.setQuest(this.trackerText(q)); return; }
    this.complete(q);
  }

  complete(q) {
    const L = this.level, g = this.game;
    q.state = 'done'; q.ready = false;
    this.done[this.w + '-' + q.i] = true;
    for (const it of q.items) if (it.obj && it.obj.parent && q.type !== 'lanterns') it.obj.parent.remove(it.obj);
    if (q.parcel && q.parcel.parent) q.parcel.parent.remove(q.parcel);
    if (q.critter && q.critter.obj.parent) q.critter.obj.parent.remove(q.critter.obj);
    if (q.type === 'lost') for (const it of q.items) { /* die Kleinen bleiben beim Auftraggeber */ }
    this.active = null;
    g.hud.setQuest(null); g.hud.setRace(null);
    const where = q.type === 'race' || q.type === 'view' || q.type === 'defeat' ? (q.o.target || q.o.area) : q.o.giver;
    const p = q.type === 'deliver' ? q.o.target : where;
    L.spawnMoon(V(p.x + 1.2, p.y + 1.8, p.z), 'q' + q.i);
    g.addSparks(25, V(p.x, p.y + 1.5, p.z), true);
    g.hud.banner(g.t('quest.complete'), g.t(`quest.${q.type}.title`), 2.4);
    g.audio.play('clear');
    g.writeSave();
  }

  trackerText(q) {
    const t = this.game.t;
    const title = t(`quest.${q.type}.title`);
    let goal;
    if (q.ready) goal = t('quest.returnTo', { name: q.name });
    else if (q.type === 'deliver') goal = t('quest.deliver.goal', { name: questName(this.w, q.i + 3) });
    else goal = t(`quest.${q.type}.goal`, { n: q.n, m: q.m });
    return { title: `${q.name}: ${title}`, goal };
  }

  // aktuelles Ziel für die Lichtsäule
  targetOf(q) {
    if (!q) return null;
    if (q.ready) return q.o.giver;
    switch (q.type) {
      case 'collect': { const it = q.items.find((x) => !x.taken); return it ? it.pos : null; }
      case 'deliver': return q.o.target;
      case 'race': case 'view': return q.o.target;
      case 'catch': return q.critter ? q.critter.pos : null;
      case 'defeat': return q.o.area;
      case 'lanterns': { const it = q.items.find((x) => !x.lit); return it ? it.pos : null; }
      case 'lost': { const it = q.items.find((x) => !x.follow && !x.home); return it ? it.pos : q.o.giver; }
    }
    return null;
  }

  onRespawn() {
    const q = this.active;
    if (!q) return;
    if (q.type === 'race' || q.type === 'deliver') { this.cancel(q); }
  }

  update(dt, player) {
    this.time += dt;
    const t = this.time, g = this.game, p = player.pos;
    for (const q of this.list) {
      q.mark.visible = q.state !== 'done' && !(q.state === 'active' && !q.ready);
      q.mark.position.y = q.npc.y + 2.1 + Math.sin(t * 3 + q.i) * 0.12;
      q.mark.rotation.y = t * 2;
    }
    const q = this.active;
    const tgt = this.targetOf(q);
    this.beam.visible = !!tgt;
    if (tgt) { this.beam.position.set(tgt.x, tgt.y + 34, tgt.z); this.beam.material.opacity = 0.16 + Math.sin(t * 4) * 0.06; }
    if (!q) return;
    const near = (pos, r) => (p.x - pos.x) ** 2 + (p.z - pos.z) ** 2 < r * r && Math.abs(p.y + 0.6 - pos.y) < 2.2;
    const before = q.n;
    switch (q.type) {
      case 'collect':
        for (const it of q.items) {
          if (it.taken) continue;
          it.obj.position.y = it.base + Math.sin(t * 2.5 + it.pos.x) * 0.15; it.obj.rotation.y = t * 2;
          if (near(it.pos, 1.0)) { it.taken = true; it.obj.visible = false; q.n++; g.audio.play('heart'); g.particles.burst(it.pos, { count: 10, color: [0xff7aa8, 0xffffff], speed: 3, size: 0.5, tex: 'sparkle', additive: true }); }
        }
        if (q.n >= q.m && !q.ready) this.objectiveMet(q);
        break;
      case 'deliver': {
        const pc = q.parcel;
        pc.position.set(p.x, p.y + 1.75 + Math.sin(t * 4) * 0.05, p.z); pc.rotation.y = player.facing;
        if (near(V(q.o.target.x, q.o.target.y + 0.6, q.o.target.z), 2.0)) { q.n = 1; this.complete(q); }
        break;
      }
      case 'race': {
        q.t += dt;
        const left = q.limit - q.t;
        g.hud.setRace(Math.max(0, left));
        const f = q.items[0].obj; if (f.userData.cloth) f.userData.cloth.rotation.y = Math.sin(t * 5) * 0.3;
        if (near(V(q.o.target.x, q.o.target.y + 0.6, q.o.target.z), 1.8)) { q.n = 1; this.complete(q); }
        else if (left <= 0) this.cancel(q);
        break;
      }
      case 'catch': {
        const c = q.critter, a = q.o.area;
        c.cool -= dt; c.hop += dt * 9;
        const dx = c.pos.x - p.x, dz = c.pos.z - p.z, d = Math.hypot(dx, dz) || 1;
        if (d < 4.5 && Math.abs(p.y - a.y) < 2) { c.vx += dx / d * 30 * dt; c.vz += dz / d * 30 * dt; }
        c.vx += (Math.random() - 0.5) * 6 * dt; c.vz += (Math.random() - 0.5) * 6 * dt;
        const sp = Math.hypot(c.vx, c.vz), max = 6.2;
        if (sp > max) { c.vx *= max / sp; c.vz *= max / sp; }
        c.vx *= 1 - dt * 1.5; c.vz *= 1 - dt * 1.5;
        c.pos.x += c.vx * dt; c.pos.z += c.vz * dt;
        // auf der Arena bleiben: am Rand zur Seite ausweichen (so kann man es in die Enge treiben)
        const ex = c.pos.x - a.x, ez = c.pos.z - a.z, el = Math.hypot(ex, ez), lim = a.r - 1.2;
        if (el > lim) { c.pos.x = a.x + ex / el * lim; c.pos.z = a.z + ez / el * lim; const vn = (c.vx * ex + c.vz * ez) / el; if (vn > 0) { c.vx -= vn * ex / el * 1.6; c.vz -= vn * ez / el * 1.6; } }
        c.pos.y = a.y + Math.abs(Math.sin(c.hop)) * 0.35;
        c.obj.rotation.y = Math.atan2(c.vx, c.vz);
        if (c.cool <= 0 && d < 1.1 && Math.abs(p.y - a.y) < 1.6) {
          q.n++; c.cool = 1.2; g.audio.play('stomp');
          g.particles.burst(c.pos.clone().add(V(0, 0.4, 0)), { count: 16, color: [0xffe066, 0xffffff], speed: 4, size: 0.6, tex: 'sparkle', additive: true });
          if (q.n >= q.m) { c.obj.visible = false; this.objectiveMet(q); }
          else { const ang = Math.random() * Math.PI * 2, rr = a.r * 0.6; c.pos.set(a.x + Math.cos(ang) * rr, a.y, a.z + Math.sin(ang) * rr); c.vx = c.vz = 0; g.hud.toast(g.t('quest.catch.again', { n: q.m - q.n }), 1.6); }
        }
        break;
      }
      case 'defeat':
        q.n = q.enemies.filter((e) => !e.alive).length;
        q.items[0].obj.rotation.z = t * 0.4;
        if (q.n >= q.m) this.complete(q);
        break;
      case 'lanterns': {
        if (q.running) {
          q.t += dt;
          const left = q.limit - q.t;
          g.hud.setRace(Math.max(0, left));
          if (left <= 0) {
            for (const it of q.items) { it.lit = false; it.obj.userData.glow.visible = false; it.obj.userData.glass.material.color.set(0x8a8a9a); it.obj.userData.glass.material.emissive.set(0); }
            q.n = 0; q.running = false; q.t = 0; g.hud.setRace(null);
            g.hud.toast(g.t('quest.lanterns.out'), 2.5); g.audio.play('hurt');
          }
        }
        for (const it of q.items) {
          if (it.lit || !near(V(it.pos.x, it.pos.y + 0.6, it.pos.z), 1.3)) continue;
          it.lit = true; q.n++; q.running = true;
          it.obj.userData.glow.visible = true; it.obj.userData.glass.material.color.set(0xfff1c0); it.obj.userData.glass.material.emissive.set(0xffa040);
          g.audio.play('checkpoint');
          g.particles.burst(V(it.pos.x, it.pos.y + 1.8, it.pos.z), { count: 14, color: [0xffd36b, 0xffffff], speed: 3, size: 0.6, tex: 'glow', additive: true });
        }
        if (q.n >= q.m) { g.hud.setRace(null); this.complete(q); }
        break;
      }
      case 'lost': {
        let k = 0;
        for (const it of q.items) {
          if (it.home) continue;
          if (!it.follow && near(it.pos, 1.2)) { it.follow = true; g.audio.play('heart'); g.hud.toast(g.t('quest.lost.found'), 1.6); }
          if (it.follow) {
            k++;
            // folgen in einer kleinen Kette hinter Lumi
            const f = player.facing, dist = 1.0 + k * 0.7;
            const tx = p.x - Math.sin(f) * dist, tz = p.z - Math.cos(f) * dist;
            it.pos.x += (tx - it.pos.x) * Math.min(1, dt * 4); it.pos.z += (tz - it.pos.z) * Math.min(1, dt * 4);
            it.pos.y += (p.y + 0.2 + Math.abs(Math.sin(t * 6 + k)) * 0.15 - it.pos.y) * Math.min(1, dt * 6);
            it.obj.rotation.y = f;
            const gv = q.o.giver;
            if ((it.pos.x - gv.x) ** 2 + (it.pos.z - gv.z) ** 2 < 16 && Math.abs(it.pos.y - gv.y) < 2.5) {
              it.home = true; it.follow = false; q.n++;
              const a = q.n * 1.3;
              it.pos.set(gv.x + Math.cos(a) * 1.4, gv.y, gv.z + Math.sin(a) * 1.4);
              g.audio.play('oneup');
            }
          } else it.obj.position.y = it.pos.y;
        }
        if (q.n >= q.m && !q.ready) { q.ready = true; this.game.hud.setQuest(this.trackerText(q)); this.game.hud.toast(this.game.t('quest.returnTo', { name: q.name }), 3); }
        break;
      }
      case 'view':
        if (near(V(q.o.target.x, q.o.target.y + 0.6, q.o.target.z), 1.5)) { q.n = 1; this.complete(q); }
        break;
    }
    if (q.n !== before && this.active === q) g.hud.setQuest(this.trackerText(q));
  }
}
