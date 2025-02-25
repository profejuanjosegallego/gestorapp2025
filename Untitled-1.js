// filepath: /path/to/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  compilerOptions: {
    types: ["@vitejs/plugin-react"]
  }
});