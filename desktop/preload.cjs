const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('lumiDesktop', {
  quit: () => ipcRenderer.send('quit'),
  toggleFullscreen: () => ipcRenderer.send('fullscreen'),
  saveFile: (name, text) => ipcRenderer.invoke('save-file', name, text),
});
