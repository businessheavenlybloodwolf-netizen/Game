// Rendert Store-Grafiken für Steam und itch.io aus dem Spiel (Präsentationsmodus) nach ./store
// Aufruf: node tools/store-art.cjs   (benötigt Playwright + Chromium; Sprache: ART_LANG=de|en|...)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'store');
const game = 'file://' + path.join(root, 'lumi.html');

// [Datei, Breite, Höhe, Parameter des Präsentationsmodus]
const ART = [
  ['steam/header_capsule_920x430.png', 920, 430, 'w=0&l=0&a=-0.5&d=4.6&h=1.4&logo=left&ly=1.9&fx=-1.5&fz=-3'],
  ['steam/small_capsule_462x174.png', 462, 174, 'w=0&l=0&a=-0.5&d=4.6&h=1.4&logo=left&sub=0&ly=1.9&fx=-1.5&fz=-3'],
  ['steam/main_capsule_1232x706.png', 1232, 706, 'w=0&l=0&a=0.6&d=8&h=2.4&logo=top&ly=2.6'],
  ['steam/vertical_capsule_748x896.png', 748, 896, 'w=3&l=0&a=0.2&d=9&h=2.5&logo=top&ly=3.2'],
  ['steam/library_capsule_600x900.png', 600, 900, 'w=6&l=0&a=0.3&d=9&h=2.5&logo=top&ly=3.2'],
  ['steam/library_hero_3840x1240.png', 3840, 1240, 'w=0&l=0&a=0.7&d=11&h=2.5&logo=none&ly=2.2&fx=6'],
  ['steam/page_background_1438x810.png', 1438, 810, 'w=7&l=0&a=0.4&d=14&h=4&logo=none&ly=3'],
  ['itch/cover_630x500.png', 630, 500, 'w=0&l=0&a=0.5&d=8&h=2.4&logo=top&ly=2.6'],
  ['screenshots/00_open_world.png', 1920, 1080, 'w=0&a=1.9&d=24&h=13&ly=1&face=1.9'],
  ['screenshots/01_meadows.png', 1920, 1080, 'w=0&l=0&a=0.2&d=8&h=3.2&ly=2.2&face=3.34'],
  ['screenshots/02_crystal.png', 1920, 1080, 'w=1&l=0&a=0.15&d=8&h=3.5&ly=2.2&face=3.29'],
  ['screenshots/03_shipyard.png', 1920, 1080, 'w=2&l=0&a=0.25&d=8&h=4&ly=3.5&face=3.39'],
  ['screenshots/04_volcano.png', 1920, 1080, 'w=3&l=1&a=0.2&d=8&h=3.2&ly=2.2&face=3.34'],
  ['screenshots/05_frost.png', 1920, 1080, 'w=4&l=1&a=0.2&d=8&h=3.2&ly=2.2&face=3.34'],
  ['screenshots/06_ruins.png', 1920, 1080, 'w=5&l=2&a=0.2&d=8&h=3.2&ly=2.2&face=3.34'],
  ['screenshots/07_coral.png', 1920, 1080, 'w=6&l=1&a=0.2&d=8&h=3.2&ly=2.2&face=3.34'],
  ['screenshots/08_fog.png', 1920, 1080, 'w=7&l=3&a=0.2&d=8&h=3.2&ly=2.2&face=3.34'],
  ['screenshots/09_boss_volcano.png', 1920, 1080, 'w=3&l=5&boss=1&d=8.5&h=2.4&ly=4.8'],
  ['screenshots/10_boss_final.png', 1920, 1080, 'w=7&l=5&boss=1&d=8.5&h=2.4&ly=4.8'],
];

(async () => {
  const only = process.argv[2];
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const lang = process.env.ART_LANG || 'en';
  for (const [file, w, h, q] of ART) {
    if (only && !file.includes(only)) continue;
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    page.setDefaultTimeout(600000);
    await page.goto(`${game}?promo=1&lang=${lang}&${q}`);
    await page.waitForFunction(() => window.__lumi && window.__lumi.level, null, { timeout: 600000 });
    await page.waitForTimeout(w > 2000 ? 12000 : 8000);
    fs.mkdirSync(path.dirname(path.join(out, file)), { recursive: true });
    await page.screenshot({ path: path.join(out, file), timeout: 300000 });
    await page.close();
    console.log('✓', file);
  }
  if (!only || 'library_logo'.includes(only)) {
    // Bibliotheks-Logo: transparent, nur Schriftzug
    const css = fs.readFileSync(path.join(root, 'src/style.css'), 'utf8');
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.setContent(`<html><head><style>${css} html,body{background:transparent!important}</style></head><body><div class="promo-logo center" style="top:50%;transform:translateY(-50%)"><span class="logo" style="font-size:300px">LUMI</span></div></body></html>`);
    fs.mkdirSync(path.join(out, 'steam'), { recursive: true });
    await page.screenshot({ path: path.join(out, 'steam/library_logo_1280x720.png'), omitBackground: true });
    console.log('✓ steam/library_logo_1280x720.png');
  }
  await browser.close();
})();
