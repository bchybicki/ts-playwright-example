import { Locator, Page } from '@playwright/test';
import { CartPage } from './cart.page';

export class InventoryPage {
  inventoryList: Locator;
  backpackAddToCartButton: Locator;
  cartBadge: Locator;
  cartButton: Locator;

  constructor(private page: Page) {
    this.inventoryList = this.page.locator('.inventory_list');
    this.backpackAddToCartButton = this.page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartBadge = this.page.locator('.shopping_cart_badge');
    this.cartButton = this.page.locator('.shopping_cart_link');
  }

  async openCart(): Promise<CartPage> {
    this.cartButton.click();

    return new CartPage(this.page);
  }
}
