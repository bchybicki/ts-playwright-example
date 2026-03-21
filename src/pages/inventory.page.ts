import { Locator, Page } from '@playwright/test';
import { CartPage } from './cart.page';

export class InventoryPage {
  inventoryList: Locator;
  addToCartButton: String;
  cartBadge: Locator;
  cartButton: Locator;

  constructor(private page: Page) {
    this.inventoryList = this.page.locator('.inventory_list');
    this.addToCartButton = '.inventory_item:has-text("[REPLACE]") button';
    this.cartBadge = this.page.locator('.shopping_cart_badge');
    this.cartButton = this.page.locator('.shopping_cart_link');
  }

  getAddToCartButtonLocator(productName: string): Locator {
    return this.page.locator(this.addToCartButton.replaceAll('[REPLACE]', productName));
  }

  async openCart(): Promise<CartPage> {
    await this.cartButton.click();

    return new CartPage(this.page);
  }
}
