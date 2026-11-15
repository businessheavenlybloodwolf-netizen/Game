// Tastatur, Maus, Gamepad und Touch-Steuerung
export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set(); // in diesem Frame gedrückt
    this.mouseDX = 0; this.mouseDY = 0;
    this.locked = false;
    this.dragging = false;
    this.touch = { active: false, mx: 0, my: 0, camDX: 0, camDY: 0 };
    this.touchButtons = new Set();
    this.touchPressed = new Set();
    this.padPrev = {};
    this.lastDevice = 'keyboard';

    window.addEventListener('keydown', (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
      this.lastDevice = 'keyboard';
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());

    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0 && this.locked) this.pressed.add('Mouse0');
      if (e.button === 2 && this.locked) this.pressed.add('Mouse2');
      this.dragging = true;
    });
    window.addEventListener('mouseup', () => { this.dragging = false; });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mousemove', (e) => {
      if (this.locked || this.dragging) {
        this.mouseDX += e.movementX || 0;
        this.mouseDY += e.movementY || 0;
      }
    });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
    });
    this.setupTouch();
  }

  requestLock() {
    if (this.isTouch) return;
    try {
      const p = this.canvas.requestPointerLock && this.canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* in Frames evtl. nicht erlaubt – Ziehen mit der Maus funktioniert trotzdem */ }
  }

  releaseLock() { if (document.pointerLockElement) document.exitPointerLock(); }

  setupTouch() {
    const root = document.getElementById('touch');
    this.isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (!root) return;
    if (this.isTouch) root.classList.add('show');
    const stick = root.querySelector('.stick'), knob = root.querySelector('.knob');
    let stickId = null, camId = null, cx = 0, cy = 0, lx = 0, ly = 0;
    const R = 50;
    stick.addEventListener('touchstart', (e) => {
      const t = e.changedTouches[0]; stickId = t.identifier;
      const r = stick.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2;
      e.preventDefault();
    }, { passive: false });
    root.querySelectorAll('[data-btn]').forEach((b) => {
      const name = b.dataset.btn;
      b.addEventListener('touchstart', (e) => { e.preventDefault(); this.touchButtons.add(name); this.touchPressed.add(name); b.classList.add('down'); }, { passive: false });
      b.addEventListener('touchend', (e) => { e.preventDefault(); this.touchButtons.delete(name); b.classList.remove('down'); }, { passive: false });
    });
    const cam = root.querySelector('.camzone');
    cam.addEventListener('touchstart', (e) => {
      const t = e.changedTouches[0]; camId = t.identifier; lx = t.clientX; ly = t.clientY; e.preventDefault();
    }, { passive: false });
    window.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stickId) {
          let dx = t.clientX - cx, dy = t.clientY - cy;
          const l = Math.hypot(dx, dy);
          if (l > R) { dx = dx / l * R; dy = dy / l * R; }
          knob.style.transform = `translate(${dx}px, ${dy}px)`;
          this.touch.mx = dx / R; this.touch.my = dy / R; this.touch.active = true;
        } else if (t.identifier === camId) {
          this.touch.camDX += (t.clientX - lx); this.touch.camDY += (t.clientY - ly);
          lx = t.clientX; ly = t.clientY;
        }
      }
      this.lastDevice = 'touch';
    }, { passive: false });
    const end = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stickId) { stickId = null; knob.style.transform = ''; this.touch.mx = this.touch.my = 0; this.touch.active = false; }
        if (t.identifier === camId) camId = null;
      }
    };
    window.addEventListener('touchend', end);
    window.addEventListener('touchcancel', end);
  }

  pollPad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const p = pads && [...pads].find((x) => x && x.connected);
    this.pad = null;
    if (!p) return;
    const dz = (v) => (Math.abs(v) < 0.18 ? 0 : v);
    const b = (i) => !!(p.buttons[i] && p.buttons[i].pressed);
    const state = {
      lx: dz(p.axes[0] || 0), ly: dz(p.axes[1] || 0), rx: dz(p.axes[2] || 0), ry: dz(p.axes[3] || 0),
      jump: b(0), spin: b(2) || b(1), act: b(3), pound: b(6) || b(7) || b(4) || b(5), pause: b(9), confirm: b(0), back: b(1),
      up: b(12), down: b(13),
    };
    this.pad = state;
    this.padPressed = {};
    for (const k of Object.keys(state)) {
      if (typeof state[k] === 'boolean') { this.padPressed[k] = state[k] && !this.padPrev[k]; }
    }
    this.padPrev = state;
    if (state.lx || state.ly || state.jump) this.lastDevice = 'pad';
  }

  // ---------- abstrahierte Aktionen ----------
  move() {
    let x = 0, y = 0;
    const k = this.keys;
    if (k.has('KeyW') || k.has('ArrowUp')) y -= 1;
    if (k.has('KeyS') || k.has('ArrowDown')) y += 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (this.pad && (this.pad.lx || this.pad.ly)) { x = this.pad.lx; y = this.pad.ly; }
    if (this.touch.active) { x = this.touch.mx; y = this.touch.my; }
    const l = Math.hypot(x, y);
    if (l > 1) { x /= l; y /= l; }
    return { x, y };
  }

  camera() {
    let dx = this.mouseDX * 0.0035, dy = this.mouseDY * 0.0035;
    this.mouseDX = this.mouseDY = 0;
    dx += this.touch.camDX * 0.006; dy += this.touch.camDY * 0.006;
    this.touch.camDX = this.touch.camDY = 0;
    const k = this.keys;
    let kx = 0;
    if (k.has('KeyQ')) kx -= 1;
    if (k.has('KeyE')) kx += 1;
    let ky = 0;
    if (k.has('KeyR')) ky -= 1;
    if (k.has('KeyV')) ky += 1;
    if (this.pad) { kx += this.pad.rx; ky += this.pad.ry; }
    return { dx, dy, kx, ky };
  }

  jumpHeld() { return this.keys.has('Space') || this.keys.has('KeyK') || (this.pad && this.pad.jump) || this.touchButtons.has('jump'); }
  jumpPressed() { return this.pressed.has('Space') || this.pressed.has('KeyK') || (this.padPressed && this.padPressed.jump) || this.touchPressed.has('jump'); }
  spinPressed() { return this.pressed.has('KeyF') || this.pressed.has('KeyJ') || this.pressed.has('Mouse0') || (this.padPressed && this.padPressed.spin) || this.touchPressed.has('spin'); }
  poundPressed() { return this.pressed.has('ShiftLeft') || this.pressed.has('ShiftRight') || this.pressed.has('KeyC') || this.pressed.has('Mouse2') || (this.padPressed && this.padPressed.pound) || this.touchPressed.has('pound'); }
  interactPressed() { return this.pressed.has('Enter') || this.pressed.has('KeyT') || (this.padPressed && this.padPressed.act) || this.touchPressed.has('act'); }
  pausePressed() { return this.pressed.has('Escape') || this.pressed.has('KeyP') || (this.padPressed && this.padPressed.pause) || this.touchPressed.has('pause'); }
  confirmPressed() { return this.pressed.has('Enter') || this.pressed.has('Space') || (this.padPressed && this.padPressed.confirm); }

  endFrame() { this.pressed.clear(); this.touchPressed.clear(); }
}
