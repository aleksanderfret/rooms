import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

config();

const { APP_URL } = process.env;

// eslint-disable-next-line import/no-default-export -- required by playwright
export default defineConfig({
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Galaxy S9+'],
      },
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 13'],
    },
  ],
  retries: process.env.CI ? 2 : 0,
  testDir: 'tests',
  use: {
    baseURL: APP_URL,
  },
  webServer: {
    command: 'cd ../../apps/web && npm run dev',
    url: APP_URL,
    reuseExistingServer: !process.env.CI,
  },
});
