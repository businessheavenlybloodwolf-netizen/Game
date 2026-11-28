// Testet die Bridge ohne Spiel: node tools/send.mjs <typ> [menge] [max]
//   node tools/send.mjs damage 30
//   node tools/send.mjs death
const [type = 'damage', amount, max] = process.argv.slice(2);
const port = process.env.BRIDGE_PORT || 3110;
const body = { type };
if (amount != null) body.amount = Number(amount);
if (max != null) body.max = Number(max);
try {
  const res = await fetch(`http://127.0.0.1:${port}/event`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Token': process.env.BRIDGE_TOKEN || '' },
    body: JSON.stringify(body),
  });
  console.log(res.status, await res.text());
} catch {
  console.error(`Bridge nicht erreichbar auf Port ${port}. Läuft "npm start"?`);
  process.exit(1);
}
