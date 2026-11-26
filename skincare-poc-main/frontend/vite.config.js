import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['creative-liberation-production-92f2b9ee.up.railway.app'],
  },
})
