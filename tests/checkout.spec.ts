import { expect, test } from '../src/fixtures/page-object.fixture';

test('user adds a product to the cart', async ({ inventoryPage }) => {
  await inventoryPage.backpackAddToCartButton.click();

  await expect(inventoryPage.cartBadge).toBeVisible();
  await expect(inventoryPage.cartBadge).toHaveText('1');
});

test('user starts checkout process', async ({ inventoryPage }) => {
  await inventoryPage.backpackAddToCartButton.click();
  const cartPage = await inventoryPage.openCart();
  const checkoutPage = await cartPage.goToCheckout();

  await expect(checkoutPage.checkoutForm).toBeVisible();
});
