import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../../dist/apps/electron/renderer',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html'
    }
  },
  base: './'
});
