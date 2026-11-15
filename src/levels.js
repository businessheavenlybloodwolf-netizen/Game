// Handgebaute erste Level der Welten 1–3. Alle anderen Level baut der Generator.
export const HANDMADE = [
  // ============================================================ 1
  {
    id: 'meadow', name: 'Blütenwiesen', sub: 'Welt 1', music: 'meadow', seed: 11,
    bouncerColor: 0xff7ab8,
    build(L) {
      L.par = 80;
      L.spawn(0, 0, 3, 0);
      L.cyl(0, 0, 0, 8, { decor: 'meadow' });
      L.tree(-5, 0, 3, 'blossom'); L.tree(5.5, 0, 2); L.tree(-4.5, 0, -4.5); L.rock(5, 0, -4);
      L.hint(2.6, 0, -3, 3.2, 'move');
      L.sparkLine([0, 1, -3], [0, 1, -7], 3);
      L.box(0, 1, -13, 6, 6, { decor: 'meadow' });
      L.sparkLine([0, 2.2, -11], [0, 2.2, -15], 3);
      L.box(0, 2.5, -21, 5, 5);
      L.sparkRing(0, 3.6, -21, 1.4, 6);
      // Wiese mit Neblingen
      L.box(0, 2.5, -34, 14, 14, { decor: 'meadow' });
      L.checkpoint(-5, 2.5, -29);
      L.hint(5, 2.5, -29, 3, 'enemy');
      L.enemy('nebling', 3, 2.5, -33, { range: 3 });
      L.enemy('nebling', -3, 2.5, -37, { range: 3 });
      L.crate(-5.2, 2.5, -38.5, 5);
      L.hint(-5.2, 2.5, -36, 2, 'crate', false);
      L.tree(5.5, 2.5, -39.5, 'blossom'); L.tree(-5.5, 2.5, -31.5);
      L.bouncer(0, 2.5, -39.3, 23);
      L.hint(2.5, 2.5, -38, 2.2, 'bouncer', false);
      // Hochplateau
      L.box(0, 8, -50, 12, 10, { decor: 'meadow' });
      L.tree(-4, 8, -52); L.tree(4.5, 8, -47.5, 'blossom');
      L.enemy('nebling', 0, 8, -51, { range: 3.5 });
      L.sparkLine([-3, 9, -46], [3, 9, -46], 4);
      L.heart(4, 9.2, -53);
      L.mover({ from: [0, 8, -60], to: [0, 8, -74], w: 4, d: 4, period: 6 });
      L.hint(-3, 8, -54, 2.5, 'mover', true);
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
      L.sparkRing(3.8, 21, -110, 2, 8);
      L.moonstone(3.8, 21.2, -110, 0);
      // Geheimnis unter der Startinsel
      L.hint(-2.6, 0, 3.5, 2.6, 'moonstones');
      L.cyl(0, -7, 13.5, 2.5, { mat: 'grass', h: 2 });
      L.bouncer(-1, -7, 13.8, 30);
      L.moonstone(1, -5.6, 13.2, 1);
      L.link([0, 0, 7.4], [1, -7, 13.2], {}); L.link([-1, -6.1, 13.8], [0, 0, 5], { via: [-1, 13.8], viaY: 3 });
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
    crystalColor: 0x8ff3ff, crumbleMat: 'stone', goalMat: 'crystal', rockColor: 0x5a4a7a, firebarColor: 0xff6ad5, bouncerColor: 0x7ef0ff,
    build(L) {
      L.par = 85;
      L.spawn(0, 0, 3, 0);
      L.box(0, 0, 0, 10, 10, { mat: 'crystal', decor: 'crystal' });
      L.crystal(-4, 0, 3.5, 0x8ff3ff, 1.6); L.crystal(4, 0, 3.8, 0xc59bff, 1.5);
      L.hint(3, 0, -2.5, 3, 'crumble');
      for (let i = 0; i < 4; i++) { L.crumble(0, 0, -9 - i * 4); L.spark(0, 1.2, -9 - i * 4); }
      // Rotor-Plattform
      L.box(0, 0, -30, 8, 8, { mat: 'crystal' });
      L.checkpoint(-3, 0, -27);
      L.firebar(0, 0.75, -30, 3.6, 1.3, 4);
      L.hint(3, 0, -27, 2.2, 'rotor', false);
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
      L.hint(-2.5, 6, -75, 2.2, 'dornling', false);
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
      // Mutpfad
      L.cyl(-14, 7, -78, 1.5, { mat: 'crystal', h: 14, under: false });
      L.cyl(-19, 8.5, -80, 1.5, { mat: 'crystal', h: 14, under: false });
      L.moonstone(-19, 10, -80, 0);
      // Geisterplatten
      L.ghost(16, 16, -103, 1.2); L.ghost(20, 17.5, -105, 1.2); L.ghost(24, 19, -103, 1.2);
      L.moonstone(24, 20.5, -103, 1);
      L.link([-8.4, 6, -78], [-14, 7, -78], { jump: 1 }); L.link([-15.3, 7, -78.5], [-19, 8.5, -80], { jump: 1 });
      L.link([13.4, 15, -103], [16, 16, -103], { jump: 1 }); L.link([16.6, 16, -103.6], [20, 17.5, -105], { jump: 1 }); L.link([20.6, 17.5, -104.6], [24, 19, -103], { jump: 1 });
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
    bouncerColor: 0xffb347, goalMat: 'metal', firebarColor: 0xff8a3c,
    build(L) {
      L.par = 75;
      L.spawn(0, 0, 4, 0);
      L.box(0, 0, 0, 8, 12, { mat: 'wood' });
      L.airship(-14, 2, 4, 0.4);
      L.hint(2.5, 0, -3, 3, 'updraft');
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
      // hoher Schatz
      L.bouncer(19.5, 30, -73.5, 28);
      L.cyl(24, 38, -73, 2, { mat: 'cloud', h: 1.2 });
      L.moonstone(24, 39.5, -73, 0);
      // Versteck unter dem Dock
      L.cyl(0, -6, 10, 2.5, { mat: 'wood', h: 1.5 });
      L.bouncer(-1, -6, 10.4, 30);
      L.moonstone(1, -4.6, 9.6, 1);
      L.link([19.5, 30.9, -73.5], [24, 38, -73], { via: [19.5, -73.5], viaY: 39 }); L.link([0, 0, 5.4], [1, -6, 9.6], {}); L.link([-1, -5.1, 10.4], [0, 0, 4], { via: [-1, 10.4], viaY: 3 });
      // Kulisse
      L.airship(30, 20, -30, -0.6); L.airship(-25, 30, -70, 0.9); L.airship(40, 40, -100, 2.5); L.airship(-10, 45, -120, 0.2);
      L.distantIsland(-40, 0, -20, 9); L.distantIsland(45, 10, -70, 8);
      L.clouds(16, 0, -50, 240, -20, 0);
      L.clouds(10, 0, -50, 240, 40, 60);
    },
  },
];
