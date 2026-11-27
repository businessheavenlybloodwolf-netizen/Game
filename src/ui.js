// HUD, Menüs und Dialoge (DOM-Overlay)
const $ = (s) => document.querySelector(s);

export class HUD {
  constructor(audio) {
    this.audio = audio;
    this.el = {
      hud: $('#hud'), hearts: $('#hearts'), lives: $('#lives'), sparks: $('#sparks'), shards: $('#shards'),
      hint: $('#hint'), toast: $('#toast'), banner: $('#banner'), boss: $('#bossbar'), screen: $('#screen'),
      dialog: $('#dialog'), fade: $('#fade'), timer: $('#timer'), moons: $('#moons'), prompt: $('#prompt'), race: $('#race'),
    };
    this.menu = null;
    this.dlg = null;
    this.toastT = 0;
    this.bannerT = 0;
    this.el.dialog.addEventListener('click', () => this.advanceDialog());
  }

  show(v) { this.el.hud.classList.toggle('show', v); }

  setHearts(n, max = 3) {
    let h = '';
    for (let i = 0; i < max; i++) h += `<span class="heart ${i < n ? 'full' : ''}"></span>`;
    if (this.el.hearts.dataset.n !== String(n)) {
      this.el.hearts.innerHTML = h; this.el.hearts.dataset.n = n;
      this.el.hearts.classList.remove('pulse'); void this.el.hearts.offsetWidth; this.el.hearts.classList.add('pulse');
    }
  }
  setLives(n) {
    this.el.lives.style.display = n == null ? 'none' : '';
    if (n != null) this.el.lives.innerHTML = `<span class="lumi-icon"></span>× ${n}`;
  }
  setSparks(n, got, total) {
    this.el.sparks.innerHTML = `<span class="spark-icon"></span>${n}${total == null ? '' : `<small>${got}/${total}</small>`}`;
    this.el.sparks.classList.remove('pop'); void this.el.sparks.offsetWidth; this.el.sparks.classList.add('pop');
  }
  setShards(n) {
    let h = '';
    for (let i = 0; i < 7; i++) h += `<span class="shard ${i < n ? 'full' : ''}"></span>`;
    this.el.shards.innerHTML = h;
  }
  setMoons(arr) {
    if (!arr) { this.el.moons.style.display = 'none'; return; }
    this.el.moons.style.display = '';
    this.el.moons.innerHTML = arr.map((v) => `<span class="moon ${v ? 'full' : ''}"></span>`).join('');
  }
  setQuest(q) {
    const el = document.getElementById('quest');
    if (!el) return;
    el.classList.toggle('show', !!q);
    if (q) { el.querySelector('.qt').textContent = q.title; el.querySelector('.qg').textContent = q.goal; }
  }
  setTimer(t) {
    this.el.timer.style.display = t == null ? 'none' : '';
    if (t == null) return;
    const sec = Math.floor(t);
    if (sec === this.lastSec) return;
    this.lastSec = sec;
    const m = Math.floor(t / 60), s = Math.floor(t % 60);
    this.el.timer.textContent = `${m}:${String(s).padStart(2, '0')}`;
  }

  setMoonCount(n, total) {
    this.el.moons.style.display = '';
    this.el.moons.innerHTML = `<span class="moon full"></span> ${n}<small>/${total}</small>`;
  }
  saved(text) {
    let el = document.getElementById('saved');
    if (!el) { el = document.createElement('div'); el.id = 'saved'; document.body.appendChild(el); }
    el.textContent = '💾 ' + text;
    el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  }
  prompt(text) {
    if (text === this.curPrompt) return;
    this.curPrompt = text;
    this.el.prompt.classList.toggle('show', !!text);
    if (text) this.el.prompt.innerHTML = `<span class="key">${this.keyLabel || 'Enter'}</span> ${text}`;
  }
  setRace(t) {
    this.el.race.classList.toggle('show', t != null);
    if (t != null) this.el.race.textContent = t.toFixed(1);
  }
  hint(text) {
    if (text === this.curHint) return;
    this.curHint = text;
    if (text) { this.el.hint.textContent = text; this.el.hint.classList.add('show'); }
    else this.el.hint.classList.remove('show');
  }

  toast(text, dur = 2.2) {
    if (!text) return;
    this.el.toast.textContent = text; this.el.toast.classList.add('show'); this.toastT = dur;
  }

  banner(title, sub, dur = 2.8) {
    this.el.banner.innerHTML = `<h2>${sub || ''}</h2><h1>${title}</h1>`;
    this.el.banner.classList.add('show'); this.bannerT = dur;
  }

  showBoss(name, frac) {
    this.el.boss.classList.add('show');
    this.el.boss.innerHTML = `<div class="name">${name}</div><div class="bar"><div class="fill" style="width:${Math.max(0, frac) * 100}%"></div></div>`;
  }
  hideBoss() { this.el.boss.classList.remove('show'); }

  fade(v) { this.el.fade.classList.toggle('show', v); }

  update(dt) {
    if (this.toastT > 0) { this.toastT -= dt; if (this.toastT <= 0) this.el.toast.classList.remove('show'); }
    if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) this.el.banner.classList.remove('show'); }
    if (this.dlg && !this.dlg.done) {
      this.dlg.t += dt * 45;
      const n = Math.min(this.dlg.full.length, Math.floor(this.dlg.t));
      if (n !== this.dlg.shown) {
        this.dlg.shown = n;
        this.el.dialog.querySelector('.text').textContent = this.dlg.full.slice(0, n);
        if (n % 3 === 0) this.audio.play('text');
      }
      if (n >= this.dlg.full.length) this.dlg.done = true;
    }
  }

  // ---------- Menüs ----------
  showMenu({ title = '', subtitle = '', body = '', items = [], cls = '', onLeft = null, onRight = null, sel = null }) {
    const s = this.el.screen;
    s.className = 'show ' + cls;
    s.innerHTML = `<div class="panel">${title ? `<div class="title">${title}</div>` : ''}${subtitle ? `<div class="subtitle">${subtitle}</div>` : ''}${body ? `<div class="body">${body}</div>` : ''}<div class="items"></div></div>`;
    const box = s.querySelector('.items');
    this.menu = { items, sel: sel ?? items.findIndex((i) => !i.disabled), buttons: [], onLeft, onRight };
    items.forEach((it, i) => {
      const b = document.createElement('button');
      if (it.html) b.innerHTML = it.html; else b.textContent = it.label;
      b.disabled = !!it.disabled;
      b.addEventListener('click', () => { this.audio.init(); this.audio.play('confirm'); it.action(); });
      b.addEventListener('mouseenter', () => { if (!it.disabled) { this.menu.sel = i; this.refreshSel(); } });
      box.appendChild(b); this.menu.buttons.push(b);
    });
    this.refreshSel();
  }

  refreshSel() { if (!this.menu) return; this.menu.buttons.forEach((b, i) => b.classList.toggle('sel', i === this.menu.sel)); }

  hideMenu() { this.el.screen.className = ''; this.el.screen.innerHTML = ''; this.menu = null; }

  menuInput(input) {
    if (!this.menu) return false;
    const p = input.pressed, pad = input.padPressed || {};
    const n = this.menu.items.length;
    const move = (d) => {
      if (!n) return;
      let i = this.menu.sel;
      for (let k = 0; k < n; k++) { i = (i + d + n) % n; if (!this.menu.items[i].disabled) break; }
      this.menu.sel = i; this.refreshSel(); this.audio.play('select');
    };
    if (p.has('ArrowDown') || p.has('KeyS') || pad.down) move(1);
    if (p.has('ArrowUp') || p.has('KeyW') || pad.up) move(-1);
    if (input.pad && !this.padHeld && Math.abs(input.pad.ly) > 0.6) { move(Math.sign(input.pad.ly)); this.padHeld = true; }
    if (input.pad && Math.abs(input.pad.ly) < 0.3) this.padHeld = false;
    if (this.menu.onLeft && (p.has('ArrowLeft') || p.has('KeyA') || p.has('KeyQ'))) { this.menu.onLeft(); return true; }
    if (this.menu.onRight && (p.has('ArrowRight') || p.has('KeyD') || p.has('KeyE'))) { this.menu.onRight(); return true; }
    if (p.has('Enter') || p.has('Space') || pad.confirm) {
      const it = this.menu.items[this.menu.sel];
      if (it && !it.disabled) { this.audio.init(); this.audio.play('confirm'); it.action(); }
      return true;
    }
    return true;
  }

  // ---------- Dialoge ----------
  dialog(lines, onDone, onLine = null) {
    if (!lines || !lines.length) { onDone && onDone(); return; }
    this.dlgLines = lines.slice(); this.dlgDone = onDone; this.dlgOnLine = onLine; this.dlgIdx = -1;
    this.el.dialog.classList.add('show');
    this.nextLine();
  }
  nextLine() {
    const l = this.dlgLines.shift();
    if (!l) { this.el.dialog.classList.remove('show'); this.dlg = null; const cb = this.dlgDone; this.dlgDone = null; cb && cb(); return; }
    this.el.dialog.querySelector('.who').textContent = l.who;
    this.el.dialog.dataset.who = l.role || l.who;
    this.el.dialog.querySelector('.text').textContent = '';
    this.dlg = { full: l.text, t: 0, shown: 0, done: false };
    this.dlgIdx++;
    if (this.dlgOnLine) this.dlgOnLine(this.dlgIdx);
  }
  advanceDialog() {
    if (!this.dlg) return;
    if (!this.dlg.done) { this.dlg.t = 1e9; return; }
    this.audio.play('select');
    this.nextLine();
  }
  dialogInput(input) {
    if (!this.dlg) return false;
    if (input.confirmPressed() || input.pressed.has('KeyK')) this.advanceDialog();
    if (input.pressed.has('Escape')) { this.dlgLines = []; this.dlg.done = true; this.advanceDialog(); }
    return true;
  }
  get dialogOpen() { return !!this.dlg; }
}
