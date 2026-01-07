import { defineConfig, devices } from '@playwright/test';

// Get user's home directory for Chrome profile
const userHome = process.env.HOME || '/home/nuttapong';
const chromeUserDataDir = `${userHome}/.config/google-chrome`;
// Test profile directory (copy of your profile for testing without closing Chrome)
const testProfileDir = `${userHome}/.config/playwright-chrome-profile`;

const projects = [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      viewport: { width: 1920, height: 1080 },
      launchOptions: {
        executablePath: '/opt/google/chrome/chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    },
  },
];

if (process.env.RUN_CHROME_PROFILES === '1') {
  projects.push(
    // Headed mode with YOUR Chrome profile (REQUIRES closing Chrome first)
    // Use: RUN_CHROME_PROFILES=1 npx playwright test --project=chrome-headed
    {
      name: 'chrome-headed',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        headless: false,
        userDataDir: chromeUserDataDir,
        launchOptions: {
          executablePath: '/opt/google/chrome/chrome',
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
          slowMo: 500, // Slow down actions for visibility
        },
      },
    },
    // Headed mode with TEST profile (can run while Chrome is open)
    // First run: npm run setup:profile (copies your Chrome profile)
    // Then use: RUN_CHROME_PROFILES=1 npx playwright test --project=chrome-test
    {
      name: 'chrome-test',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        headless: false,
        userDataDir: testProfileDir,
        launchOptions: {
          executablePath: '/opt/google/chrome/chrome',
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
          slowMo: 500,
        },
      },
    },
  );
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: [
    ['html', { outputFolder: 'test-reports/html' }],
    ['json', { outputFile: 'test-reports/results.json' }],
    ['list']
  ],
  use: {
    baseURL: 'https://backoffice-wallet-dev.inception.asia',
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'retain-on-failure',
    actionTimeout: 30000,
    navigationTimeout: 60000,
  },
  projects,
  outputDir: 'test-results/',
  timeout: 120000,
});
