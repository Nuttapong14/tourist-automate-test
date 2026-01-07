# Tourist E-Wallet Back Office Test Automation

Playwright-based test automation framework for the Tourist E-Wallet Back Office application.

## Prerequisites

- Node.js 18+
- Google Chrome installed at `/opt/google/chrome/chrome`
- Linux environment (tested on Ubuntu)

## Installation

```bash
npm install
```

## Running Tests

```bash
# Run tests in headless Chrome (default)
npm test

# Run tests in visible Chrome for debugging
npm run test:headed

# Run tests with copied Chrome profile (allows Chrome to stay open)
npm run setup:profile  # First: copies your Chrome profile
npm run test:gmail     # Then: run tests with the profile

# View HTML test reports
npm run report
```

## Running Individual Tests

```bash
# Run a specific test file
npx playwright test tests/auth/login.spec.ts

# Run tests matching a pattern
npx playwright test --grep "TC_Tourist_E-Wallet_BO_0001"

# Run with specific project
npx playwright test tests/auth/login.spec.ts --project=chromium
```

## Project Structure

```
tourist-automate-test/
├── tests/
│   ├── auth/                  # Authentication tests
│   ├── dashboard/             # Dashboard tests
│   ├── wallet-management/     # Wallet operations
│   ├── transaction-history/   # Transaction records
│   ├── kyc-management/        # KYC verification
│   ├── client-management/     # Client lifecycle
│   ├── partners/              # Partner management
│   ├── internal-users/        # Admin user tests
│   ├── global-fee/            # Fee configuration
│   ├── global-limit/          # Limit configuration
│   ├── reports/               # Report generation
│   └── fixtures/              # Shared test data and helpers
├── test-results/              # Test artifacts (git-ignored)
├── test-reports/              # HTML and JSON reports (git-ignored)
├── screenshots/               # Failure screenshots (git-ignored)
└── playwright.config.ts       # Playwright configuration
```

## Test Fixtures

The `tests/fixtures/test-fixtures.ts` file contains:

- **TEST_DATA**: Credentials, URLs, and test user data
- **SELECTORS**: CSS selectors organized by page/feature
- **Helper Functions**: `login()`, `logout()`, `navigateToMenu()`, `waitForTableLoad()`

Always import from fixtures when writing new tests:

```typescript
import { test, expect, TEST_DATA, SELECTORS, login } from '../fixtures/test-fixtures';
```

## Browser Projects

| Project | Description |
|---------|-------------|
| `chromium` | Headless Chrome (default, CI-friendly) |
| `chrome-headed` | Visible Chrome with your profile (requires closing Chrome) |
| `chrome-test` | Visible Chrome with copied profile (Chrome can stay open) |

## Configuration

Key settings in `playwright.config.ts`:

- **Base URL**: `https://backoffice-wallet-dev.inception.asia`
- **Timeout**: 120 seconds per test
- **Screenshots**: Captured on every test
- **Video**: Retained on failure
- **Retries**: 2 retries in CI, 0 locally

## Test Naming Convention

Tests follow the pattern: `TC_Tourist_E-Wallet_BO_XXXX - Description`

Test IDs correspond to entries in `All-Test-Case.md`.

## Debugging

- Use `--project=chrome-headed` for visible browser with `slowMo: 500`
- Screenshots are saved to `screenshots/` on failure
- HTML reports available via `npm run report`
- Video recordings retained on failure in `test-results/`
