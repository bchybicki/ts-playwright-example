import { Locator, Page } from '@playwright/test';

export class OrderSuccessPage {
  successMessage: Locator;

  constructor(private page: Page) {
    this.successMessage = this.page.locator('div .checkout_complete_container :has-text("Thank you for your order!")');
  }
}
