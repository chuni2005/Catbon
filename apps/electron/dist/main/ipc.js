"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.ipcMain.handle('ping', async () => {
    return 'pong';
});
