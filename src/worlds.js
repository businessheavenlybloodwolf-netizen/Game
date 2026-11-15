// Die 8 Welten von Lumeria: Aussehen, Mechaniken, Gegner und Bosse.
// seg: Gewichte der Level-Bausteine für den Generator.
export const WORLDS = [
  {
    id: 'meadow', music: 'meadow', color: '#7fd06a',
    theme: { skyTop: 0x4aa8f5, skyHorizon: 0xffe0ee, skyBottom: 0xffd2e6, fog: 0xffe3f0, fogNear: 70, fogFar: 280, hemiSky: 0xdff2ff, hemiGround: 0x7a9a5a, hemiI: 1.7, sunI: 2.7, sunDir: [0.4, 0.85, 0.35], sea: 'cloudSea', seaY: -40 },
    style: { big: 'grass', small: 'grass', pillar: 'stone', mover: 'wood', crumbleMat: 'stone', bridge: 'wood', blinkMat: 'wood', decor: 'meadow', trees: ['round', 'blossom'], bouncerColor: 0xff7ab8, goalMat: 'stone', islandKind: 'round' },
    enemies: ['nebling', 'nebling', 'flatterling'],
    seg: { hops: 3, stairs: 2, descend: 1, moverGap: 1, bounceUp: 1.5, pillars: 1, bridge: 1, circleMover: 0.4 },
    boss: { color: 0x8ab86a, accent: 0x3a6a2a, accentGlow: 0x2a5a1a, style: 'leaves', puff: 0xa8c890, monocle: false, hp: 3, speed: 0.8, minion: 'nebling' },
  },
  {
    id: 'crystal', music: 'crystal', color: '#8ff3ff',
    theme: { skyTop: 0x150f35, skyHorizon: 0x8a5fc0, skyBottom: 0x2a1d50, fog: 0x5a3f8a, fogNear: 45, fogFar: 210, hemiSky: 0xc0b0ff, hemiGround: 0x3a2a5a, hemiI: 1.6, sunI: 2.0, sunLight: 0xffd0f0, sunColor: 0xffb0e0, sunDir: [-0.5, 0.6, 0.4], sea: 'cloudSeaDusk', seaY: -40, stars: 0.6 },
    style: { big: 'crystal', small: 'crystal', pillar: 'crystal', mover: 'stone', crumbleMat: 'stone', bridge: 'stone', blinkMat: 'crystal', decor: 'crystal', trees: ['crystal'], crystalColor: 0x8ff3ff, rockColor: 0x5a4a7a, firebarColor: 0xff6ad5, bouncerColor: 0x7ef0ff, goalMat: 'crystal', islandKind: 'crystal' },
    enemies: ['nebling', 'dornling', 'flatterling'],
    seg: { hops: 2, crumble: 2, firebar: 1.5, moverGap: 1, lift: 1, stairs: 1, descend: 1, pillars: 1 },
    boss: { color: 0x7a8ae0, accent: 0x9ff4ff, accentGlow: 0x5fd8ff, style: 'spikes', puff: 0x9a8ad6, monocle: false, hp: 3, speed: 0.95, minion: 'dornling' },
  },
  {
    id: 'sky', music: 'sky', color: '#ffd28a',
    theme: { skyTop: 0x2f84e6, skyHorizon: 0xfff0d0, skyBottom: 0xffffff, fog: 0xf2f0ff, fogNear: 80, fogFar: 340, hemiSky: 0xe8f4ff, hemiGround: 0xb0a080, hemiI: 1.8, sunI: 2.9, sunDir: [0.6, 0.7, -0.2], sea: 'cloudSea', seaY: -30 },
    style: { big: 'wood', small: 'wood', pillar: 'metal', mover: 'metal', crumbleMat: 'wood', bridge: 'wood', blinkMat: 'metal', decor: 'none', trees: [], bouncerColor: 0xffb347, goalMat: 'metal', firebarColor: 0xff8a3c, islandKind: 'round', ships: true },
    enemies: ['flatterling', 'nebling', 'dornling'],
    seg: { updraft: 2, moverGap: 2, bounceUp: 1, hops: 2, bridge: 1.2, circleMover: 1, crumble: 0.8 },
    boss: { color: 0x8a7ab0, accent: 0x3a2a1a, accentGlow: 0x000000, style: 'hat', puff: 0xd8d0f0, monocle: false, hp: 4, speed: 1.0, minion: 'flatterling' },
  },
  {
    id: 'lava', music: 'lava', color: '#ff7a2a', killY: -12,
    theme: { skyTop: 0x2a0a10, skyHorizon: 0xff6a3a, skyBottom: 0x3a0a0a, fog: 0x8a2a1a, fogNear: 40, fogFar: 200, hemiSky: 0xffc0a0, hemiGround: 0x6a2010, hemiI: 1.6, sunI: 2.2, sunLight: 0xffb080, sunColor: 0xff8040, sunDir: [0.3, 0.7, -0.4], lavaY: -8 },
    style: { big: 'basalt', small: 'basalt', pillar: 'basalt', mover: 'metal', crumbleMat: 'basalt', bridge: 'darkwood', blinkMat: 'basalt', decor: 'rocks', trees: [], rockColor: 0x3a2a2a, firebarColor: 0xffb02e, bouncerColor: 0xff6a3a, goalMat: 'basalt', crystalColor: 0xff8a3c, islandKind: 'crystal', minY: -4,
      tints: { nebling: 0xd06a5a, dornling: 0xff8a2a, flatterling: 0xa04a4a } },
    enemies: ['dornling', 'nebling', 'flatterling'],
    seg: { hops: 2, geyser: 2, firebar: 2, crumble: 1.5, moverGap: 1, lift: 1, stairs: 1 },
    boss: { color: 0xc8604a, accent: 0x2a1010, accentGlow: 0xff5a1a, style: 'horns', puff: 0x8a5a5a, monocle: false, hp: 4, speed: 1.1, minion: 'dornling', orb: 0xff6a1a },
  },
  {
    id: 'ice', music: 'ice', color: '#bfe8ff',
    theme: { skyTop: 0x6aa8e0, skyHorizon: 0xe8f4ff, skyBottom: 0xffffff, fog: 0xe0ecff, fogNear: 50, fogFar: 230, hemiSky: 0xf0f8ff, hemiGround: 0x8aa0c0, hemiI: 1.9, sunI: 2.4, sunDir: [-0.3, 0.6, 0.5], sea: 'cloudSea', seaY: -35, snow: true },
    style: { big: 'snow', small: 'snow', pillar: 'ice', mover: 'wood', crumbleMat: 'ice', bridge: 'wood', blinkMat: 'ice', decor: 'none', trees: ['pine', 'snowman'], pineColor: 0x2f6a5a, crystalColor: 0xbff0ff, bouncerColor: 0x6ad5ff, goalMat: 'ice', rockColor: 0x9ab0c8, islandKind: 'pine',
      tints: { nebling: 0x8ab0e8, dornling: 0x6ad0ff, flatterling: 0x7a90d0 } },
    enemies: ['nebling', 'dornling', 'flatterling'],
    seg: { iceSlide: 2, hops: 2, blink: 1.5, bounceUp: 1, moverGap: 1, descend: 1, crumble: 1 },
    boss: { color: 0x9ac8f0, accent: 0xe8f8ff, accentGlow: 0x7fd8ff, style: 'spikes', puff: 0xe0f0ff, monocle: false, hp: 4, speed: 1.15, minion: 'nebling', orb: 0x7fd8ff },
  },
  {
    id: 'desert', music: 'desert', color: '#f2c96a',
    theme: { skyTop: 0x3a8ae8, skyHorizon: 0xffe0a0, skyBottom: 0xffd890, fog: 0xffe2b0, fogNear: 60, fogFar: 260, hemiSky: 0xfff0d0, hemiGround: 0xa08050, hemiI: 1.8, sunI: 3.0, sunDir: [0.2, 0.9, 0.2], sea: 'sand', seaY: -30, seaTint: 0xffffff },
    style: { big: 'sandstone', small: 'sandstone', pillar: 'sandstone', mover: 'darkwood', crumbleMat: 'sandstone', bridge: 'darkwood', blinkMat: 'sandstone', decor: 'rocks', trees: ['palm'], rockColor: 0xc8a060, bouncerColor: 0xffa040, goalMat: 'sandstone', firebarColor: 0xff8a3c, islandKind: 'palm',
      tints: { nebling: 0xb08a6a, dornling: 0xd0a040, flatterling: 0x9a7a5a } },
    enemies: ['nebling', 'dornling', 'flatterling'],
    seg: { pillars: 2, lift: 1.5, crumble: 1.5, blink: 1.5, hops: 1.5, firebar: 1, moverGap: 1 },
    boss: { color: 0xc8a878, accent: 0x6a4a2a, accentGlow: 0xffa040, style: 'crown', puff: 0xe8d0a0, monocle: false, hp: 5, speed: 1.2, minion: 'flatterling', orb: 0xffb040 },
  },
  {
    id: 'coral', music: 'coral', color: '#6fe8d8', gravity: 0.65,
    theme: { skyTop: 0x04203a, skyHorizon: 0x1a8aa0, skyBottom: 0x02101e, fog: 0x0a5a70, fogNear: 30, fogFar: 170, hemiSky: 0x9af0ff, hemiGround: 0x1a4a5a, hemiI: 1.9, sunI: 2.0, sunLight: 0xb0f0ff, sunColor: 0x9af0ff, sunDir: [0.1, 0.9, 0.3], sea: 'water', seaY: -35, bubbles: true },
    style: { big: 'coral', small: 'coral', pillar: 'sea', mover: 'sea', crumbleMat: 'sea', bridge: 'sea', blinkMat: 'coral', decor: 'coral', trees: ['coral'], crystalColor: 0x6fe8d8, rockColor: 0x2a5a6a, bouncerColor: 0xd08aff, goalMat: 'sea', firebarColor: 0xff6ad5, islandKind: 'coral',
      tints: { nebling: 0x5aa0c8, dornling: 0xff7a9a, flatterling: 0x7a6ad8 } },
    enemies: ['flatterling', 'nebling', 'dornling'],
    seg: { updraft: 2, bounceUp: 2, circleMover: 1.5, hops: 2, blink: 1, descend: 1 },
    boss: { color: 0x5a8ac8, accent: 0xff7a9a, accentGlow: 0xd03a6a, style: 'tentacles', puff: 0x7ad0e0, monocle: false, hp: 5, speed: 1.25, minion: 'flatterling', orb: 0x6fe8d8 },
  },
  {
    id: 'fog', music: 'tower', color: '#c59bff', killY: -20,
    theme: { skyTop: 0x07040f, skyHorizon: 0x3d2560, skyBottom: 0x120a22, fog: 0x2a1a40, fogNear: 35, fogFar: 170, hemiSky: 0xb0a0e0, hemiGround: 0x4a3a5a, hemiI: 2.2, sunI: 2.3, sunLight: 0xc8b8ff, sunColor: 0xd0c0ff, sunDir: [0.3, 0.8, 0.5], sea: 'cloudSeaNight', seaY: -40, stars: 1.0 },
    style: { big: 'tower', small: 'brick', pillar: 'brick', mover: 'clock', crumbleMat: 'brick', bridge: 'darkwood', blinkMat: 'clock', decor: 'crystal', trees: ['crystal'], crystalColor: 0xc59bff, rockColor: 0x3a2a4a, goalMat: 'brick', gearColor: 0xa08ad0, islandKind: 'crystal', gears: true, bouncerColor: 0xc59bff },
    enemies: ['nebling', 'dornling', 'flatterling'],
    seg: { circleMover: 2, blink: 2, crumble: 1.5, firebar: 1.5, hops: 1.5, moverGap: 1, lift: 1, updraft: 0.8 },
    boss: { color: 0x9a7ad8, style: 'crown', hp: 6, speed: 1.35, minion: 'nebling', final: true },
  },
];

// Mondsteine, die nötig sind, um eine Welt zu betreten (zusätzlich zum Sieg über den vorherigen Boss)
export const WORLD_REQ = [0, 0, 3, 8, 14, 20, 28, 36];
export const LEVELS_PER_WORLD = 7; // 0-4 normal, 5 Boss, 6 Bonus
export const BOSS_IDX = 5, BONUS_IDX = 6, KEY_LEVEL = 2;
