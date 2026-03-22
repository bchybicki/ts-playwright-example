# ts-playwright-example

A TypeScript + Playwright test suite example.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- Install dependencies:
  ```
  npm ci
  npx playwright install --with-deps chromium
  ```

## Running the Tests

```
# Run all tests (headless)
npx playwright test OR npm run test

# Run with the Playwright UI
npx playwright test --ui OR npm run test:ui

# Run in headed mode
npx playwright test --headed OR npm run test:headed

# View the HTML report after a run
npx playwright show-report OR npm run test:report
```

For local development in VSC-based IDE's it is recommended to use the [Playwright extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) to run the tests.

## Design Decisions

### Locator strategy

Although XPath is a strength, the selectors in this project lean toward **Playwright's built-in locators** (`getByRole`, `getByText`, etc.) and **CSS selectors**. This is more aligned with Playwright's philosophy and the conventions typically used across QA teams.

### Page-returning actions

Action methods return the **next `Page` object** rather than `void`. This improves readability, enables **method chaining**, and makes the flow of navigation explicit. Where a method can result in different pages (e.g. `login`, which may or may not succeed depending on credentials), it is split into **two separate methods** - one per outcome. But this approach makes the code to be less flexible and limits method usage.

### `inventoryPage` fixture

A shared `inventoryPage` fixture handles the successful-login flow so tests that start from the inventory page don't repeat the same setup boilerplate.

### No session-cookie reuse

Reusing a session cookie was considered but intentionally skipped. Given the small number of tests, the added complexity would outweigh the performance benefit. For a bigger project it would definitely be something to consider.

### Using .env file

I added a .env file to store the password locally. The password is also kept as a Repository Secret. This is a good practice for storing sensitive information. It is not a secret management system, but it is definitely better than hardcoding the credentials in the code. In a real world application I would recommend using a secret management system like AWS Secrets Manager.
