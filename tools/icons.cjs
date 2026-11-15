// Erzeugt App-Icons (PNG, ICO, ICNS) aus assets/icon.svg
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  const root = path.join(__dirname, '..');
  const svg = fs.readFileSync(path.join(root, 'assets/icon.svg'), 'utf8');
  const browser = await chromium.launch();
  const out = path.join(root, 'assets');
  for (const size of [1024, 512, 256, 128, 64, 48, 32, 16]) {
    const page = await browser.newPage({ viewport: { width: size, height: size } });
    await page.setContent(`<html><body style="margin:0;background:transparent">${svg.replace('<svg ', `<svg width="${size}" height="${size}" `)}</body></html>`);
    await page.screenshot({ path: path.join(out, `icon-${size}.png`), omitBackground: true });
    await page.close();
  }
  await browser.close();
  const pngToIco = (await import('png-to-ico')).default;
  fs.writeFileSync(path.join(out, 'icon.ico'), await pngToIco([256, 128, 64, 48, 32, 16].map((n) => path.join(out, `icon-${n}.png`))));
  const png2icons = require('png2icons');
  fs.writeFileSync(path.join(out, 'icon.icns'), png2icons.createICNS(fs.readFileSync(path.join(out, 'icon-1024.png')), png2icons.BICUBIC, 0));
  console.log('Icons erzeugt:', fs.readdirSync(out).join(', '));
})();
