import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
    server: {
      host: env.VITE_HOST || 'localhost',
      port: Number.parseInt(env.VITE_PORT, 10) || 5175,
    },
    preview: {
      host: env.VITE_HOST || 'localhost',
      port: Number.parseInt(env.VITE_PORT, 10) || 4175,
    },
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.js',
    },
  }
})
