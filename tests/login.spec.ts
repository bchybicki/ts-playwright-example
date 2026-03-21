import { expect, test } from '@playwright/test';
import { USER_PASSWORD } from '../src/config/env.config';
import { LoginPage } from '../src/pages/login.page';

const userPassword = USER_PASSWORD;

test('user should see products list after a successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');

  const inventoryPage = await loginPage.login('standard_user', userPassword);

  await expect(inventoryPage.inventoryList).toBeVisible();
});

test('user should see error message after logging in as a locked out user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');

  loginPage.login('locked_out_user', userPassword);
  // nie używam zwracanego inventoryPage, czy to okej?
  await expect(loginPage.errorMessage).toBeVisible();
});
