import { ipcMain } from 'electron';

ipcMain.handle('ping', async () => {
  return 'pong';
});
