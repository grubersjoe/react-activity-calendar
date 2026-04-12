import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    silent: true,
    include: ['src/**/*.test.ts'],
    environment: 'jsdom',
  },
})
