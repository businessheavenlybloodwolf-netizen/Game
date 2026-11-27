// Lokaler HTTP-Server, an den Spiele, Mods oder Skripte Events schicken.

import http from 'node:http';

const MAX_BODY = 256 * 1024;

export function startServer({ port, token, engine, output, routes, log = console.log }) {
  const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Token');
    if (req.method === 'OPTIONS') return res.writeHead(204).end();

    const path = new URL(req.url, 'http://x').pathname;

    if (req.method === 'GET' && path === '/') {
      const devices = [...output.devices.values()].map((d) => d.name);
      return json(res, 200, { ok: true, intiface: output.connected, devices, routes: ['/event', ...Object.keys(routes)] });
    }
    if (req.method !== 'POST') return json(res, 404, { error: 'Nicht gefunden' });

    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > MAX_BODY) { req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => {
      let data;
      try { data = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'); } catch {
        return json(res, 400, { error: 'Ungültiges JSON' });
      }
      // GSI schickt den Token in data.auth.token, eigene Skripte per Header oder Feld.
      const sent = req.headers['x-token'] || data.token || data.auth?.token || '';
      if (token && sent !== token) return json(res, 401, { error: 'Falscher Token' });

      if (path === '/event' && data.type === 'health') {
        engine.setHealth(data.value == null ? null : Number(data.value));
        return json(res, 200, { ok: true });
      }
      if (path === '/event' && data.type === 'level') {
        engine.setLevel(`http:${data.key || 'default'}`, data.value);
        return json(res, 200, { ok: true });
      }
      if (path === '/event') {
        const ok = engine.trigger({ ...data, source: data.source || 'HTTP' });
        return json(res, ok ? 200 : 400, ok ? { ok: true } : { error: `Unbekannter Event-Typ: ${data.type}` });
      }
      const handler = routes[path];
      if (!handler) return json(res, 404, { error: 'Nicht gefunden' });
      try { handler(data); } catch (e) { log(`Fehler in ${path}: ${e.message}`); }
      json(res, 200, { ok: true });
    });
  });

  server.on('error', (e) => {
    log(e.code === 'EADDRINUSE' ? `Port ${port} ist schon belegt. Läuft die Bridge schon?` : `Serverfehler: ${e.message}`);
    process.exit(1);
  });
  // Nur lokal erreichbar, nicht aus dem Netzwerk.
  server.listen(port, '127.0.0.1', () => log(`Bridge hört auf http://127.0.0.1:${port}`));
  return server;
}

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' }).end(JSON.stringify(body));
}
