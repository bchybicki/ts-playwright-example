import { prepareRandomUser } from '../src/factories/user.factory';
import { expect, test } from '../src/fixtures/page-object.fixture';

test('user adds a product to the cart', async ({ inventoryPage }) => {
  const productName = 'Sauce Labs Backpack';
  await inventoryPage.getAddToCartButtonLocator(productName).click();

  await expect(inventoryPage.cartBadge).toBeVisible();
  await expect(inventoryPage.cartBadge).toHaveText('1');

  const cartPage = await inventoryPage.openCart();

  await expect(cartPage.cartItemsList).toHaveCount(1);
  await expect(cartPage.cartItemName).toHaveText(productName);
});

test('user starts checkout process', async ({ inventoryPage }) => {
  const productName = 'Sauce Labs Bike Light';
  const userInfo = prepareRandomUser();

  await inventoryPage.getAddToCartButtonLocator(productName).click();
  const cartPage = await inventoryPage.openCart();
  const checkoutPage = await cartPage.goToCheckout();

  await expect(checkoutPage.checkoutForm).toBeVisible();

  // According to the requirements the scenario to implement was "Start the checkout process" so it should end here as the process is started.
  // But I believe testing the whole order flow would be more beneficial.

  const overviewPage = await checkoutPage.fillCheckoutInfo(userInfo);
  const orderSuccessPage = await overviewPage.finishOrder();

  await expect(orderSuccessPage.successMessage).toBeVisible();
});
