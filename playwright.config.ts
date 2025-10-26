import { defineConfig, devices } from '@playwright/test'

// https://playwright.dev/docs/test-configuration.
export default defineConfig({
  testDir: './tests',
  outputDir: '.playwright',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { outputFolder: '.playwright-report' }]],
  use: {
    baseURL: 'http://localhost:9000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npx storybook dev -p 9000 --ci',
    url: 'http://localhost:9000',
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
})
