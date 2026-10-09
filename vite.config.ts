import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path so it hosts seamlessly on GitHub Pages, Vercel, or custom domains
  base: './',
});
