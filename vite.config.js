import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path for static deployment on Vercel
  base: './',
  server: {
    host: true, // Expose to network if needed
    port: 3000
  },
  build: {
    // Ensure proper asset handling for deployment
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure consistent asset naming for caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
});
