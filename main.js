const { app, BrowserWindow } = require('electron');
const path = require('path');
const { Menu } = require('electron');
Menu.setApplicationMenu(null);


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // 開發模式載入 Vite Dev Server
  win.loadURL('http://localhost:5173');
}

app.whenReady().then(() => {
  createWindow();
});
