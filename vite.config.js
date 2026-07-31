import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          motion: ['framer-motion'],
        },
      },
    },
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
});
