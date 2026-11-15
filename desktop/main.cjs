// Desktop-Version (Steam / itch.io App) – Electron-Hülle um das Spiel
const { app, BrowserWindow, ipcMain, Menu, dialog } = require('electron');
const fs = require('fs');
const path = require('path');

app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

function createWindow() {
  const win = new BrowserWindow({
    width: 1600, height: 900, minWidth: 800, minHeight: 450,
    backgroundColor: '#1a1020', title: 'LUMI',
    icon: path.join(__dirname, 'icon.png'),
    fullscreen: !process.argv.includes('--windowed'),
    autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.cjs'), contextIsolation: true, nodeIntegration: false, backgroundThrottling: false },
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'game', 'index.html'));
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && (input.key === 'F11' || (input.alt && input.key === 'Enter'))) { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
  });
  // externe Links nie im Spiel öffnen
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (e) => e.preventDefault());
}

ipcMain.on('quit', () => app.quit());
// Speicherstand als Datei exportieren (mit Speichern-Dialog)
ipcMain.handle('save-file', async (e, name, text) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  const r = await dialog.showSaveDialog(win, { defaultPath: path.join(app.getPath('documents'), name), filters: [{ name: 'LUMI', extensions: ['lumi-save'] }] });
  if (r.canceled || !r.filePath) return false;
  fs.writeFileSync(r.filePath, text, 'utf8');
  return true;
});
ipcMain.on('fullscreen', (e) => { const w = BrowserWindow.fromWebContents(e.sender); if (w) w.setFullScreen(!w.isFullScreen()); });

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
