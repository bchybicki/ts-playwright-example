import { test as base } from '@playwright/test';
import { USER_PASSWORD } from '../config/env.config';
import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';

const userPassword = USER_PASSWORD;

type Pages = {
  inventoryPage: InventoryPage;
};

export const test = base.extend<Pages>({
  inventoryPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');

    const inventoryPage = await loginPage.loginToInventoryPage('standard_user', userPassword);
    await use(inventoryPage);
  },
});

export { expect } from '@playwright/test';
