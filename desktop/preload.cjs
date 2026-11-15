const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('lumiDesktop', {
  quit: () => ipcRenderer.send('quit'),
  toggleFullscreen: () => ipcRenderer.send('fullscreen'),
});
