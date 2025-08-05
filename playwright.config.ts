import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true
  },

  timeout: 30000, // global timeout per test
  expect: {
    timeout: 5000, // per assertion
  },

  reporter: [['html', { open: 'never' }], ['list']], // HTML + console
});
