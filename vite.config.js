import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path for static deployment if needed, usually '/' is fine
  base: './',
  server: {
    host: true // Expose to network if needed
  }
});
