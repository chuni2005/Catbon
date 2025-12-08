import { contextBridge, ipcRenderer } from 'electron';
import { BackendResponse } from '../shared/types';

contextBridge.exposeInMainWorld('api', {
  getData: async (): Promise<BackendResponse> => {
    return await ipcRenderer.invoke('get-data');
  }
});
