// Level-Design. Koordinaten: y = Oberkante der Plattform. Der Weg führt grob Richtung -Z.
export const LEVELS = [
  // ============================================================ 1
  {
    id: 'meadow', name: 'Blütenwiesen', sub: 'Welt 1', music: 'meadow', seed: 11,
    theme: {
      skyTop: 0x4aa8f5, skyHorizon: 0xffe0ee, skyBottom: 0xffd2e6, fog: 0xffe3f0, fogNear: 70, fogFar: 280,
      hemiSky: 0xdff2ff, hemiGround: 0x7a9a5a, hemiI: 1.7, sunI: 2.7, sunDir: [0.4, 0.85, 0.35], sea: 'cloudSea', seaY: -40,
    },
    bouncerColor: 0xff7ab8,
    build(L) {
      L.spawn(0, 0, 3, 0);
      L.cyl(0, 0, 0, 8, { decor: 'meadow' });
      L.tree(-5, 0, 3, 'blossom'); L.tree(5.5, 0, 2); L.tree(-4.5, 0, -4.5); L.rock(5, 0, -4);
      L.hint(2.6, 0, -3, 3.2, 'Bewegen: WASD / Pfeiltasten · Springen: LEERTASTE · in der Luft nochmal drücken = Doppelsprung! Kamera: Maus ziehen oder Q / E');
      L.sparkLine([0, 1, -3], [0, 1, -7], 3);
      L.box(0, 1, -13, 6, 6, { decor: 'meadow' });
      L.sparkLine([0, 2.2, -11], [0, 2.2, -15], 3);
      L.box(0, 2.5, -21, 5, 5);
      L.sparkRing(0, 3.6, -21, 1.4, 6);
      // Wiese mit Neblingen
      L.box(0, 2.5, -34, 14, 14, { decor: 'meadow' });
      L.checkpoint(-5, 2.5, -29);
      L.hint(5, 2.5, -29, 3, 'Neblinge! Spring ihnen auf den Kopf – oder wirbel sie mit der Drehattacke weg (F / J / Linksklick).');
      L.enemy('nebling', 3, 2.5, -33, { range: 3 });
      L.enemy('nebling', -3, 2.5, -37, { range: 3 });
      L.crate(-5.2, 2.5, -38.5, 5);
      L.hint(-5.2, 2.5, -36, 2, 'Kisten zerbrechen mit der Drehattacke oder mit einer Stampfattacke (in der Luft SHIFT / C).', false);
      L.tree(5.5, 2.5, -39.5, 'blossom'); L.tree(-5.5, 2.5, -31.5);
      L.bouncer(0, 2.5, -39.3, 23);
      L.hint(2.5, 2.5, -38, 2.2, 'Spring auf die Sprungblüte, um hoch hinaus zu fliegen!', false);
      // Hochplateau
      L.box(0, 8, -50, 12, 10, { decor: 'meadow' });
      L.tree(-4, 8, -52); L.tree(4.5, 8, -47.5, 'blossom');
      L.enemy('nebling', 0, 8, -51, { range: 3.5 });
      L.sparkLine([-3, 9, -46], [3, 9, -46], 4);
      L.heart(4, 9.2, -53);
      L.mover({ from: [0, 8, -60], to: [0, 8, -74], w: 4, d: 4, period: 6 });
      L.hint(-3, 8, -54, 2.5, 'Bewegliche Plattformen nehmen dich mit. Ein bisschen Mut!', true);
      L.sparkLine([0, 9.4, -61], [0, 9.4, -73], 5);
      // Insel & Säulen
      L.cyl(0, 8, -82, 5, { decor: 'meadow' });
      L.checkpoint(-2, 8, -79);
      L.enemy('nebling', 1.5, 8, -84, { range: 2 });
      L.tree(-3, 8, -85, 'blossom');
      L.cyl(6, 9, -88, 1.5, { mat: 'stone', h: 14, under: false });
      L.cyl(10, 10.5, -93, 1.5, { mat: 'stone', h: 14, under: false });
      L.cyl(8, 12, -99, 1.5, { mat: 'stone', h: 14, under: false });
      L.cyl(3, 13, -103, 1.8, { mat: 'stone', h: 14, under: false });
      L.spark(6, 10, -88); L.spark(10, 11.5, -93); L.spark(8, 13, -99); L.spark(3, 14, -103);
      // Ziel
      L.cyl(0, 13, -113, 6, { decor: 'meadow' });
      L.tree(-4, 13, -111, 'blossom'); L.tree(4, 13, -116);
      L.goalAt(0, 13, -115);
      // Bonus: Wolkenschatz
      L.bouncer(3.8, 13, -110, 26);
      L.sparkRing(3.8, 23, -110, 2, 8);
      // Kulisse
      L.distantIsland(-45, 10, 25, 11, { trees: 4 });
      L.lighthouse(-45, 11.75, 25, 1.6);
      L.distantIsland(40, 2, -30, 8);
      L.distantIsland(-35, 16, -70, 9, { kind: 'blossom' });
      L.distantIsland(35, 22, -120, 12);
      L.distantIsland(-30, -2, -130, 7);
      L.clouds(14, 0, -60, 220, -25, -10);
      L.clouds(8, 0, -60, 260, 30, 50);
    },
  },
  // ============================================================ 2
  {
    id: 'crystal', name: 'Kristallschlucht', sub: 'Welt 2', music: 'crystal', seed: 22,
    theme: {
      skyTop: 0x150f35, skyHorizon: 0x8a5fc0, skyBottom: 0x2a1d50, fog: 0x5a3f8a, fogNear: 45, fogFar: 210,
      hemiSky: 0xc0b0ff, hemiGround: 0x3a2a5a, hemiI: 1.5, sunI: 2.0, sunLight: 0xffd0f0, sunColor: 0xffb0e0, sunDir: [-0.5, 0.6, 0.4],
      sea: 'cloudSeaDusk', seaY: -40, stars: 0.6,
    },
    crystalColor: 0x8ff3ff, crumbleMat: 'stone', goalMat: 'crystal', rockColor: 0x5a4a7a, firebarColor: 0xff6ad5, bouncerColor: 0x7ef0ff,
    build(L) {
      L.spawn(0, 0, 3, 0);
      L.box(0, 0, 0, 10, 10, { mat: 'crystal', decor: 'crystal' });
      L.crystal(-4, 0, 3.5, 0x8ff3ff, 1.6); L.crystal(4, 0, 3.8, 0xc59bff, 1.5);
      L.hint(3, 0, -2.5, 3, 'Bröckelplatten zerfallen kurz nachdem du sie betrittst – nicht trödeln!');
      for (let i = 0; i < 4; i++) { L.crumble(0, 0, -9 - i * 4); L.spark(0, 1.2, -9 - i * 4); }
      // Rotor-Plattform
      L.box(0, 0, -30, 8, 8, { mat: 'crystal' });
      L.checkpoint(-3, 0, -27);
      L.firebar(0, 0.75, -30, 3.6, 1.3, 4);
      L.hint(3, 0, -27, 2.2, 'Ein Kristallrotor! Spring über die Glutkugeln.', false);
      L.sparkRing(0, 2.2, -30, 2.5, 6);
      // Treppe
      L.box(0, 2, -38, 4, 4, { mat: 'crystal' });
      L.box(-5, 4, -42, 4, 4, { mat: 'crystal' });
      L.box(-5, 6, -49, 4, 4, { mat: 'crystal' });
      L.spark(0, 3, -38); L.spark(-5, 5, -42); L.spark(-5, 7, -49);
      L.mover({ from: [-5, 6, -55], to: [-5, 6, -70], w: 3.5, d: 3.5, period: 6, mat: 'stone' });
      L.sparkLine([-5, 7.4, -57], [-5, 7.4, -68], 4);
      // Insel B
      L.box(-5, 6, -78, 8, 8, { mat: 'crystal', decor: 'crystal' });
      L.checkpoint(-7.5, 6, -75);
      L.enemy('dornling', -5, 6, -79, { range: 2.5, axis: 'x' });
      L.hint(-2.5, 6, -75, 2.2, 'Dornlinge sind zu stachelig zum Draufspringen. Die Drehattacke hilft!', false);
      L.heart(-8, 7, -81);
      // Aufzug
      L.mover({ from: [2.5, 6, -78], to: [2.5, 13, -78], w: 3, d: 3, period: 7, mat: 'stone' });
      L.box(9, 13, -78, 5, 8, { mat: 'crystal' });
      L.crate(10.2, 13, -75.5, 6);
      L.crystal(10.5, 13, -80.5, 0xc59bff, 1.0);
      // Bröckel-Aufstieg
      L.crumble(9, 13, -85.5); L.crumble(9, 14, -89.5); L.crumble(9, 15, -93.5);
      L.spark(9, 14.2, -85.5); L.spark(9, 15.2, -89.5); L.spark(9, 16.2, -93.5);
      // Ziel
      L.box(9, 15, -103, 10, 10, { mat: 'crystal', decor: 'crystal' });
      L.enemy('flatterling', 9, 15, -101, { range: 2.5 });
      L.crystal(5.5, 15, -106.5, 0x8ff3ff, 2.2); L.crystal(12.5, 15, -106.5, 0xc59bff, 2.0);
      L.goalAt(9, 15, -105);
      // Kulisse: Kristallsäulen in der Tiefe
      for (let i = 0; i < 14; i++) {
        const x = (i % 2 ? 1 : -1) * (25 + (i * 7) % 20), z = 10 - i * 9;
        L.cyl(x, -8 + (i * 13) % 22, z, 3 + (i % 3), { mat: 'crystal', h: 30, under: false, noCollide: true });
        L.crystal(x, -8 + (i * 13) % 22, z, i % 2 ? 0x8ff3ff : 0xc59bff, 2.5);
      }
      L.distantIsland(-50, 5, -60, 10, { mat: 'crystal', kind: 'crystal', trees: 5 });
      L.distantIsland(55, 12, -110, 12, { mat: 'crystal', kind: 'crystal', trees: 6 });
      L.clouds(12, 0, -50, 220, -28, -15, 0x8a6ac0, 0.8);
    },
  },
  // ============================================================ 3
  {
    id: 'sky', name: 'Wolkenwerft', sub: 'Welt 3', music: 'sky', seed: 33,
    theme: {
      skyTop: 0x2f84e6, skyHorizon: 0xfff0d0, skyBottom: 0xffffff, fog: 0xf2f0ff, fogNear: 80, fogFar: 340,
      hemiSky: 0xe8f4ff, hemiGround: 0xb0a080, hemiI: 1.8, sunI: 2.9, sunDir: [0.6, 0.7, -0.2], sea: 'cloudSea', seaY: -30,
    },
    bouncerColor: 0xffb347, goalMat: 'metal', firebarColor: 0xff8a3c,
    build(L) {
      L.spawn(0, 0, 4, 0);
      L.box(0, 0, 0, 8, 12, { mat: 'wood' });
      L.airship(-14, 2, 4, 0.4);
      L.hint(2.5, 0, -3, 3, 'Aufwinde tragen dich nach oben! Lauf hinein und steuere zur Plattform.');
      L.updraft(0, -10, 2.5, -8, 14.5, 60);
      L.sparkLine([0, 2, -10], [0, 11, -10], 5);
      // Plattform A
      L.box(0, 10, -18, 8, 8, { mat: 'wood' });
      L.checkpoint(3, 10, -15);
      L.enemy('flatterling', 0, 10, -19, { range: 2 });
      L.crate(-2.8, 10, -20.8, 5);
      L.mover({ from: [0, 10, -25], to: [0, 10, -40], w: 3.5, d: 3.5, period: 6, mat: 'metal' });
      L.sparkLine([0, 11.4, -26], [0, 11.4, -39], 5);
      // Sprungpad
      L.cyl(0, 10, -46, 3, { mat: 'metal' });
      L.bouncer(0, 10, -46, 25);
      // Plattform C + Planke
      L.box(0, 17, -56, 6, 6, { mat: 'wood' });
      L.checkpoint(-2, 17, -54);
      L.heart(-2, 18, -58);
      L.box(8.5, 17, -56, 11, 2.2, { mat: 'wood', h: 0.6, under: false });
      L.firebar(8.5, 17.75, -56, 3.0, 1.6, 4);
      L.sparkLine([4, 18.2, -56], [12, 18.2, -56], 3);
      // Plattform D + Aufwind
      L.box(17, 17, -56, 6, 6, { mat: 'wood' });
      L.enemy('nebling', 17, 17, -56, { range: 2 });
      L.updraft(17, -63, 2.5, 5, 33.5, 60);
      L.sparkLine([17, 20, -63], [17, 29, -63], 4);
      // Plattform E
      L.box(17, 30, -71, 8, 8, { mat: 'metal' });
      L.checkpoint(14.5, 30, -68);
      L.enemy('dornling', 17, 30, -72, { range: 2.5 });
      for (let i = 0; i < 3; i++) { L.crumble(17, 30, -79 - i * 4); L.spark(17, 31.2, -79 - i * 4); }
      L.enemy('flatterling', 17, 30, -83, { range: 3 });
      // Ziel
      L.box(17, 30, -96, 10, 10, { mat: 'wood' });
      L.goalAt(17, 30, -98);
      // Kulisse
      L.airship(30, 20, -30, -0.6); L.airship(-25, 30, -70, 0.9); L.airship(40, 40, -100, 2.5); L.airship(-10, 45, -120, 0.2);
      L.distantIsland(-40, 0, -20, 9); L.distantIsland(45, 10, -70, 8);
      L.clouds(16, 0, -50, 240, -20, 0);
      L.clouds(10, 0, -50, 240, 40, 60);
    },
  },
  // ============================================================ 4
  {
    id: 'tower', name: 'Nebelturm', sub: 'Finale', music: 'tower', seed: 44, killY: -20,
    theme: {
      skyTop: 0x07040f, skyHorizon: 0x3d2560, skyBottom: 0x120a22, fog: 0x2a1a40, fogNear: 35, fogFar: 170,
      hemiSky: 0xb0a0e0, hemiGround: 0x4a3a5a, hemiI: 2.2, sunI: 2.3, sunLight: 0xc8b8ff, sunColor: 0xd0c0ff, sunDir: [0.3, 0.8, 0.5],
      sea: 'cloudSeaNight', seaY: -40, stars: 1.0,
    },
    goalMat: 'brick', crystalColor: 0xc59bff, pineColor: 0x2a3a4a, rockColor: 0x3a2a4a,
    build(L) {
      L.spawn(0, 0, 2, 0);
      L.box(0, 0, 0, 8, 8, { mat: 'tower' });
      L.hint(2.5, 0, -2, 3, 'Der Nebelturm. Ganz oben wartet Graf Nebelmaul …');
      L.box(0, 2, -8, 4, 4, { mat: 'brick' });
      L.box(5, 4, -12, 4, 4, { mat: 'brick' });
      L.box(5, 6, -18, 4, 4, { mat: 'brick' });
      L.box(0, 8, -22, 4, 4, { mat: 'brick' });
      L.spark(0, 3, -8); L.spark(5, 5, -12); L.spark(5, 7, -18); L.spark(0, 9, -22);
      L.box(0, 8, -30, 3, 8, { mat: 'brick', h: 1, under: false });
      L.enemy('nebling', 0, 8, -30, { range: 2.5, axis: 'z' });
      L.heart(0, 9.2, -27);
      // Arena
      L.cyl(0, 8, -48, 14, { mat: 'tower', h: 4 });
      L.checkpoint(2.5, 8, -36);
      L.hint(-2.5, 8, -36, 2.5, 'Wenn der Graf auf den Boden kracht, ist er benommen – spring auf seinen Kristall! Über die Schockwelle musst du springen.', false);
      for (let i = 0; i < 8; i++) {
        const a = i / 8 * Math.PI * 2 + 0.2;
        if (Math.abs(Math.cos(a) * 12.5) < 3 && Math.sin(a) > 0) continue;
        L.cyl(Math.cos(a) * 12.5, 11, -48 + Math.sin(a) * 12.5, 0.8, { mat: 'brick', h: 3, under: false });
        L.crystal(Math.cos(a) * 12.5, 11, -48 + Math.sin(a) * 12.5, 0xc59bff, 0.8);
      }
      L.bossAt(0, 8, -48, 14);
      // der Turm im Hintergrund
      L.cyl(0, 30, -75, 9, { mat: 'tower', h: 60, under: false, noCollide: true });
      L.cyl(0, 42, -75, 6, { mat: 'brick', h: 12, under: false, noCollide: true });
      for (let i = 0; i < 6; i++) L.crystal(Math.cos(i) * 5, 42, -75 + Math.sin(i) * 5, 0xc59bff, 2);
      L.distantIsland(-40, -5, -30, 8, { mat: 'tower', kind: 'pine', trees: 4 });
      L.distantIsland(45, 5, -60, 10, { mat: 'tower', kind: 'pine', trees: 5 });
      L.clouds(14, 0, -40, 220, -15, 0, 0x3d2a5c, 0.85);
    },
  },
];
