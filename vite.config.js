import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // CSS Code Splitting
    cssCodeSplit: true,
    
    // Chunk Size Warnings
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        // Vendor Chunks für besseres Caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'icons': ['lucide-react'],
          'helmet': ['react-helmet-async']
        }
      }
    },
    
    // Minify
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
      }
    }
  },
  
  // Server optimizations (for dev)
  server: {
    hmr: {
      overlay: false
    }
  }
})