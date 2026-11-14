// Baut das Spiel: index.html + game.js (für den Ordner) und lumi.html (eine einzige Datei zum Teilen)
import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'fs';

const res = await build({
  entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', target: 'es2020', write: false,
  legalComments: 'none',
});
const js = res.outputFiles[0].text;
const css = readFileSync('src/style.css', 'utf8');
const tpl = readFileSync('src/index.template.html', 'utf8').replace('/*CSS*/', () => css);
writeFileSync('game.js', js);
writeFileSync('index.html', tpl.replace('<!--SCRIPT-->', '<script src="game.js"></script>'));
writeFileSync('lumi.html', tpl.replace('<!--SCRIPT-->', () => `<script>${js.replace(/<\/script/g, '<\\/script')}</script>`));
console.log(`OK – game.js ${(js.length / 1024).toFixed(0)} KB, lumi.html ${((js.length + css.length) / 1024).toFixed(0)} KB`);
