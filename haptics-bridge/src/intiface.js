// Minimaler Buttplug-v3-Client für Intiface Central (ohne Abhängigkeiten,
// nutzt den in Node 22 eingebauten WebSocket).

const RECONNECT_MS = 3000;
const REQUEST_TIMEOUT_MS = 5000;
const SUPPORTED = new Set(['Vibrate', 'Oscillate']);

export class Intiface {
  constructor({ url, deviceFilter = [], log = console.log }) {
    this.url = url;
    this.filter = deviceFilter.map((s) => s.toLowerCase());
    this.log = log;
    this.ws = null;
    this.nextId = 1;
    this.pending = new Map();
    this.devices = new Map(); // index -> { name, features: [{ index, type }] }
    this.connected = false;
    this.pingTimer = null;
    this.stopped = false;
    this.target = 0;
    this.sending = false;
  }

  start() { this.connect(); }

  connect() {
    if (this.stopped) return;
    const ws = new WebSocket(this.url);
    this.ws = ws;

    ws.onopen = async () => {
      try {
        const res = await this.request({ RequestServerInfo: { ClientName: 'Haptics Bridge', MessageVersion: 3 } });
        const info = res.ServerInfo;
        this.connected = true;
        this.warned = false;
        this.log(`Intiface verbunden (${info.ServerName}).`);
        if (info.MaxPingTime > 0) {
          this.pingTimer = setInterval(() => this.request({ Ping: {} }).catch(() => {}), Math.max(100, info.MaxPingTime / 2));
        }
        const list = await this.request({ RequestDeviceList: {} });
        for (const d of list.DeviceList.Devices) this.addDevice(d);
        await this.request({ StartScanning: {} });
        this.log('Suche nach Geräten läuft ...');
      } catch (e) {
        this.log(`Handshake mit Intiface fehlgeschlagen: ${e.message}`);
        ws.close();
      }
    };

    ws.onmessage = (ev) => this.onMessage(ev.data);
    ws.onerror = () => {}; // onclose folgt
    ws.onclose = () => {
      const was = this.connected;
      this.connected = false;
      clearInterval(this.pingTimer);
      for (const p of this.pending.values()) p.reject(new Error('Verbindung getrennt'));
      this.pending.clear();
      this.devices.clear();
      if (this.stopped) return;
      if (was) this.log('Intiface getrennt, verbinde neu ...');
      else if (!this.warned) this.log(`Intiface Central nicht erreichbar (${this.url}). Läuft es und ist "Start Server" gedrückt? Ich versuche es weiter.`);
      this.warned = !was;
      setTimeout(() => this.connect(), RECONNECT_MS);
    };
  }

  request(msg) {
    const name = Object.keys(msg)[0];
    const id = this.nextId++;
    msg[name].Id = id;
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return reject(new Error('Nicht verbunden'));
      const timer = setTimeout(() => {
        if (this.pending.delete(id)) reject(new Error(`${name}: keine Antwort`));
      }, REQUEST_TIMEOUT_MS);
      this.pending.set(id, {
        resolve: (v) => { clearTimeout(timer); resolve(v); },
        reject: (e) => { clearTimeout(timer); reject(e); },
      });
      this.ws.send(JSON.stringify([msg]));
    });
  }

  onMessage(raw) {
    let msgs;
    try { msgs = JSON.parse(raw); } catch { return; }
    for (const m of msgs) {
      const name = Object.keys(m)[0];
      const body = m[name];
      if (name === 'DeviceAdded') this.addDevice(body);
      else if (name === 'DeviceRemoved') {
        const d = this.devices.get(body.DeviceIndex);
        if (d) this.log(`Gerät entfernt: ${d.name}`);
        this.devices.delete(body.DeviceIndex);
      }
      if (body && body.Id) {
        const p = this.pending.get(body.Id);
        if (!p) continue;
        this.pending.delete(body.Id);
        if (name === 'Error') p.reject(new Error(body.ErrorMessage));
        else p.resolve(m);
      }
    }
  }

  addDevice(d) {
    const name = d.DeviceDisplayName || d.DeviceName;
    if (this.filter.length && !this.filter.some((f) => name.toLowerCase().includes(f))) {
      this.log(`Gerät ignoriert (Filter): ${name}`);
      return;
    }
    const features = (d.DeviceMessages?.ScalarCmd || [])
      .map((f, index) => ({ index, type: f.ActuatorType }))
      .filter((f) => SUPPORTED.has(f.type));
    if (!features.length) {
      this.log(`Gerät ohne Vibration, ignoriert: ${name}`);
      return;
    }
    this.devices.set(d.DeviceIndex, { name, features });
    this.log(`Gerät bereit: ${name} (${features.length} Motor${features.length > 1 ? 'en' : ''})`);
    this.flush();
  }

  // Setzt die Stärke (0..1) auf allen Geräten. Neue Werte während eines
  // laufenden Sendevorgangs werden zusammengefasst, damit Bluetooth nicht überläuft.
  set(level) {
    this.target = level;
    this.flush();
  }

  async flush() {
    if (this.sending || !this.connected) return;
    this.sending = true;
    try {
      let sent;
      do {
        sent = this.target;
        await Promise.all([...this.devices.entries()].map(([index, d]) =>
          this.request({
            ScalarCmd: {
              DeviceIndex: index,
              Scalars: d.features.map((f) => ({ Index: f.index, Scalar: sent, ActuatorType: f.type })),
            },
          }).catch((e) => this.log(`Fehler bei ${d.name}: ${e.message}`)),
        ));
      } while (sent !== this.target && this.connected);
    } finally {
      this.sending = false;
    }
  }

  async stop() {
    this.stopped = true;
    if (this.connected) await this.request({ StopAllDevices: {} }).catch(() => {});
    this.ws?.close();
  }
}

// Ohne Intiface (intifaceUrl leer), z. B. wenn nur eine bHaptics-Weste benutzt wird.
export class NullOutput {
  constructor() { this.devices = new Map(); this.connected = false; }
  start() {}
  set() {}
  async stop() {}
}

// Ausgabe für --dry: zeigt die Stärke als Balken in der Konsole.
export class DryOutput {
  constructor() { this.devices = new Map([[0, { name: 'Konsole' }]]); this.connected = true; }
  start() { console.log('Trockenlauf: keine Verbindung zu Intiface, Stärke wird nur angezeigt.'); }
  set(level) {
    const n = Math.round(level * 30);
    console.log(`[${'#'.repeat(n)}${' '.repeat(30 - n)}] ${(level * 100).toFixed(0).padStart(3)} %`);
  }
  async stop() {}
}
