import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  build: {
    // Bundle optimization - using esbuild instead of terser
    minify: 'esbuild',
    
    // Chunk splitting for better caching
    rollupOptions: {
      external: ['react-google-recaptcha', 'react-helmet-async'],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
      onwarn(warning, warn) {
        // Ignorar completamente warnings de react-google-recaptcha y react-helmet-async
        if (warning.code === 'UNRESOLVED_IMPORT' && 
            (warning.message.includes('react-google-recaptcha') || 
             warning.message.includes('react-helmet-async'))) {
          return;
        }
        warn(warning);
      }
    },
    
    // Asset optimization
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  
  // Preload optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})