const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipc", {
  send: (channel, ...args) => ipcRenderer.send(channel, ...args),
  invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
  on: (channel, listener) => ipcRenderer.on(channel, listener),
  once: (channel, listener) => ipcRenderer.once(channel, listener),
  addEventListener: (channel, listener) =>
    ipcRenderer.addListener(channel, listener),
  removeListener: (channel, listener) => ipcRenderer.removeListener(channel, listener),
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel),
});
