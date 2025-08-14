// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // optional: hide overlay while you iterate
    // hmr: { overlay: false }
  }
})
