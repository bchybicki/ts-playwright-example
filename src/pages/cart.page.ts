import { Locator, Page } from '@playwright/test';
import { CheckoutPage } from './checkout.page';

export class CartPage {
  checkoutButton: Locator;

  constructor(private page: Page) {
    this.checkoutButton = this.page.locator('#checkout');
  }

  async goToCheckout(): Promise<CheckoutPage> {
    this.checkoutButton.click();

    return new CheckoutPage(this.page);
  }
}
