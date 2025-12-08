// src/main/ipc.ts
import { ipcMain } from 'electron';
import type { BackendResponse } from '../shared/types';

ipcMain.handle('get-data', async (): Promise<BackendResponse> => {
  return { message: 'Hello from Electron backend!' };
});
