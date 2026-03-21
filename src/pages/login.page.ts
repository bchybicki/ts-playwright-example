import { Locator, Page } from '@playwright/test';
import { InventoryPage } from './inventory.page';

export class LoginPage {
  usernameInput: Locator;
  userPasswordInput: Locator;
  loginButton: Locator;
  errorMessage: Locator;

  constructor(private page: Page) {
    this.usernameInput = this.page.getByPlaceholder('Username');
    this.userPasswordInput = this.page.getByPlaceholder('Password');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    this.errorMessage = this.page.locator('//h3[@data-test="error"]');
  }

  async login(username: string, password: string): Promise<InventoryPage> {
    await this.usernameInput.fill(username);
    await this.userPasswordInput.fill(password);
    await this.loginButton.click();

    return new InventoryPage(this.page);
  }
}
