import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  checkoutForm: Locator;

  constructor(private page: Page) {
    this.checkoutForm = this.page.locator('.checkout_info');
  }
}
