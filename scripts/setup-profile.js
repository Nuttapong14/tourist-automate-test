#!/usr/bin/env node

/**
 * Cross-platform Chrome profile setup script
 * Copies the user's Chrome profile to a test directory for Playwright testing
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

function getChromeUserDataDir() {
  const platform = os.platform();
  const home = os.homedir();

  switch (platform) {
    case 'win32':
      return path.join(process.env.LOCALAPPDATA || home, 'Google', 'Chrome', 'User Data');
    case 'darwin':
      return path.join(home, 'Library', 'Application Support', 'Google', 'Chrome');
    case 'linux':
    default:
      return path.join(home, '.config', 'google-chrome');
  }
}

function getTestProfileDir() {
  const platform = os.platform();
  const home = os.homedir();

  switch (platform) {
    case 'win32':
      return path.join(process.env.LOCALAPPDATA || home, 'playwright-chrome-profile');
    case 'darwin':
      return path.join(home, 'Library', 'Application Support', 'playwright-chrome-profile');
    case 'linux':
    default:
      return path.join(home, '.config', 'playwright-chrome-profile');
  }
}

function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    console.log(`Removing existing profile at: ${dirPath}`);
    if (os.platform() === 'win32') {
      execSync(`rmdir /s /q "${dirPath}"`, { stdio: 'inherit' });
    } else {
      execSync(`rm -rf "${dirPath}"`, { stdio: 'inherit' });
    }
  }
}

function copyDir(src, dest) {
  console.log(`Copying Chrome profile...`);
  console.log(`  From: ${src}`);
  console.log(`  To:   ${dest}`);

  if (os.platform() === 'win32') {
    execSync(`xcopy "${src}" "${dest}" /E /I /H /Y`, { stdio: 'inherit' });
  } else {
    execSync(`cp -r "${src}" "${dest}"`, { stdio: 'inherit' });
  }
}

function main() {
  const sourceDir = getChromeUserDataDir();
  const targetDir = getTestProfileDir();

  console.log('\n=== Chrome Profile Setup ===\n');
  console.log(`Platform: ${os.platform()}`);

  // Check if source exists
  if (!fs.existsSync(sourceDir)) {
    console.error(`\nError: Chrome profile not found at: ${sourceDir}`);
    console.error('Please ensure Google Chrome is installed and has been run at least once.');
    process.exit(1);
  }

  try {
    // Remove existing test profile
    removeDir(targetDir);

    // Copy profile
    copyDir(sourceDir, targetDir);

    console.log('\n✓ Profile copied successfully!');
    console.log('\nYou can now run tests with your Chrome profile:');
    console.log('  npm run test:gmail');
    console.log('\nOr with environment variable:');
    if (os.platform() === 'win32') {
      console.log('  set RUN_CHROME_PROFILES=1 && npx playwright test --project=chrome-test');
    } else {
      console.log('  RUN_CHROME_PROFILES=1 npx playwright test --project=chrome-test');
    }
  } catch (error) {
    console.error('\nError copying profile:', error.message);
    process.exit(1);
  }
}

main();
