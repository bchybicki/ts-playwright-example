import { Locator, Page } from '@playwright/test';
import { CheckoutPage } from './checkout.page';

export class CartPage {
  checkoutButton: Locator;
  cartItemsList: Locator;
  cartItemName: Locator;

  constructor(private page: Page) {
    this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
    this.cartItemsList = this.page.locator('.cart_item');
    this.cartItemName = this.page.locator('.inventory_item_name');
  }

  async goToCheckout(): Promise<CheckoutPage> {
    await this.checkoutButton.click();

    return new CheckoutPage(this.page);
  }
}
