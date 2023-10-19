declare global {
  interface Window {
    ipc: {
      send: typeof Electron.ipcRenderer.send;
      invoke: typeof Electron.ipcRenderer.invoke;
      on: typeof Electron.ipcRenderer.on;
      once: typeof Electron.ipcRenderer.once;
      addEventListener: typeof Electron.ipcRenderer.addListener;
      removeListener: typeof Electron.ipcRenderer.removeListener;
      removeAllListeners: typeof Electron.ipcRenderer.removeAllListeners;
    };
  }
}

export {};
