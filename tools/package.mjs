// Baut alle Release-Pakete in ./release:
//   lumi-web-itch.zip        – HTML5-Version für itch.io (index.html im Wurzelverzeichnis)
//   lumi-test.html           – einzelne HTML-Datei zum schnellen Testen
//   LUMI-win32-x64.zip       – Windows (Steam-Depot / itch.io-Download)
//   LUMI-linux-x64.zip       – Linux / Steam Deck
//   LUMI-darwin-x64.zip, LUMI-darwin-arm64.zip – macOS (unsigniert)
// Aufruf: node tools/package.mjs [win|linux|mac|web ...]
// Tipp: Electron-ZIPs können vorab in ./.electron-zips gelegt werden (spart Downloads).
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { packager } from '@electron/packager';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = path.join(root, 'release');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const want = process.argv.slice(2);
const has = (k) => !want.length || want.includes(k);
const run = (c, cwd = root) => execSync(c, { cwd, stdio: 'inherit' });

run('node build.mjs');
fs.rmSync(rel, { recursive: true, force: true });
fs.mkdirSync(rel, { recursive: true });

// ---- Web / itch.io ----
fs.copyFileSync(path.join(root, 'lumi.html'), path.join(rel, 'lumi-test.html'));
if (has('web')) {
  const web = path.join(rel, 'web');
  fs.mkdirSync(web);
  fs.copyFileSync(path.join(root, 'lumi.html'), path.join(web, 'index.html'));
  run(`zip -q -r ../lumi-web-itch.zip .`, web);
}

// ---- Electron-App-Ordner ----
const app = path.join(rel, 'app');
fs.mkdirSync(path.join(app, 'game'), { recursive: true });
fs.copyFileSync(path.join(root, 'lumi.html'), path.join(app, 'game', 'index.html'));
fs.copyFileSync(path.join(root, 'desktop', 'main.cjs'), path.join(app, 'main.cjs'));
fs.copyFileSync(path.join(root, 'desktop', 'preload.cjs'), path.join(app, 'preload.cjs'));
fs.copyFileSync(path.join(root, 'assets', 'icon-512.png'), path.join(app, 'icon.png'));
fs.copyFileSync(path.join(root, 'THIRD_PARTY_LICENSES.md'), path.join(app, 'THIRD_PARTY_LICENSES.md'));
fs.writeFileSync(path.join(app, 'package.json'), JSON.stringify({
  name: 'lumi', productName: 'LUMI', version: pkg.version, main: 'main.cjs', description: 'LUMI – 3D platformer',
}, null, 2));

const electronVersion = JSON.parse(fs.readFileSync(path.join(root, 'node_modules/electron/package.json'), 'utf8')).version;
const targets = [];
if (has('win')) targets.push(['win32', 'x64']);
if (has('linux')) targets.push(['linux', 'x64']);
if (has('mac')) targets.push(['darwin', 'x64'], ['darwin', 'arm64']);

for (const [platform, arch] of targets) {
  const out = await packager({
    dir: app, out: path.join(rel, 'build'), name: 'LUMI', executableName: platform === 'linux' ? 'lumi' : 'LUMI',
    platform, arch, electronVersion, overwrite: true, asar: true, prune: false,
    electronZipDir: fs.existsSync(path.join(root, '.electron-zips')) ? path.join(root, '.electron-zips') : undefined,
    icon: platform === 'darwin' ? path.join(root, 'assets', 'icon.icns') : undefined,
    appBundleId: 'com.lumeria.lumi', appCopyright: `© ${new Date().getFullYear()} LUMI`,
  });
  const dir = out[0];
  if (platform === 'win32') await setWindowsIcon(path.join(dir, 'LUMI.exe'));
  const zipName = `LUMI-${platform}-${arch}.zip`;
  run(`zip -q -r -y ${JSON.stringify(path.join(rel, zipName))} .`, dir);
  console.log('✓', zipName);
}

// Windows-Icon ohne Wine setzen (reines JavaScript)
async function setWindowsIcon(exe) {
  const ResEdit = await import('resedit');
  const data = fs.readFileSync(exe);
  const ex = ResEdit.NtExecutable.from(data);
  const res = ResEdit.NtExecutableResource.from(ex);
  const iconFile = ResEdit.Data.IconFile.from(fs.readFileSync(path.join(root, 'assets', 'icon.ico')));
  ResEdit.Resource.IconGroupEntry.replaceIconsForResource(res.entries, 1, 1033, iconFile.icons.map((i) => i.data));
  const vi = ResEdit.Resource.VersionInfo.fromEntries(res.entries)[0];
  if (vi) {
    vi.setStringValues({ lang: 1033, codepage: 1200 }, { ProductName: 'LUMI', FileDescription: 'LUMI', CompanyName: 'LUMI', OriginalFilename: 'LUMI.exe' });
    vi.outputToResourceEntries(res.entries);
  }
  res.outputResource(ex);
  fs.writeFileSync(exe, Buffer.from(ex.generate()));
}
console.log('Fertig →', rel);
