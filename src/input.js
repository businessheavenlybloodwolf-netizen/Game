// Tastatur, Maus und Gamepad (PC-Version)
export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set(); // in diesem Frame gedrückt
    this.mouseDX = 0; this.mouseDY = 0;
    this.locked = false;
    this.dragging = false;
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
  }

  requestLock() {
    try {
      const p = this.canvas.requestPointerLock && this.canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* in Frames evtl. nicht erlaubt – Ziehen mit der Maus funktioniert trotzdem */ }
  }

  releaseLock() { if (document.pointerLockElement) document.exitPointerLock(); }

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
    const l = Math.hypot(x, y);
    if (l > 1) { x /= l; y /= l; }
    return { x, y };
  }

  camera() {
    let dx = this.mouseDX * 0.0035, dy = this.mouseDY * 0.0035;
    this.mouseDX = this.mouseDY = 0;
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

  jumpHeld() { return this.keys.has('Space') || this.keys.has('KeyK') || (this.pad && this.pad.jump); }
  jumpPressed() { return this.pressed.has('Space') || this.pressed.has('KeyK') || (this.padPressed && this.padPressed.jump); }
  spinPressed() { return this.pressed.has('KeyF') || this.pressed.has('KeyJ') || this.pressed.has('Mouse0') || (this.padPressed && this.padPressed.spin); }
  poundPressed() { return this.pressed.has('ShiftLeft') || this.pressed.has('ShiftRight') || this.pressed.has('KeyC') || this.pressed.has('Mouse2') || (this.padPressed && this.padPressed.pound); }
  interactPressed() { return this.pressed.has('Enter') || this.pressed.has('KeyT') || (this.padPressed && this.padPressed.act); }
  pausePressed() { return this.pressed.has('Escape') || this.pressed.has('KeyP') || (this.padPressed && this.padPressed.pause); }
  confirmPressed() { return this.pressed.has('Enter') || this.pressed.has('Space') || (this.padPressed && this.padPressed.confirm); }

  endFrame() { this.pressed.clear(); }
}
