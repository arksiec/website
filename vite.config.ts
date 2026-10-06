import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  // Dev server and build configurations
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});

