import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text-summary'], // <- toto je coverage reporter
      include: ['src/**/*.{ts,vue}'],
      exclude: ['**/node_modules/**', '**/dist/**']
    }
  }
})
