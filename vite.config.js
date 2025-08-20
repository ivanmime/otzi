import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-google-recaptcha'],
      onwarn(warning, warn) {
        // Ignorar completamente warnings de react-google-recaptcha
        if (warning.code === 'UNRESOLVED_IMPORT' && warning.message.includes('react-google-recaptcha')) {
          return;
        }
        warn(warning);
      }
    }
  }
})