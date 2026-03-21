import { Locator, Page } from '@playwright/test';
import { UserInfoModel } from '../models/user-info.model';
import { OverviewPage } from './overview.page';

export class CheckoutPage {
  checkoutForm: Locator;
  firstNameInput: Locator;
  lastNameInput: Locator;
  zipInput: Locator;
  continueButton: Locator;

  constructor(private page: Page) {
    this.checkoutForm = this.page.locator('.checkout_info');
    this.firstNameInput = this.page.getByPlaceholder('First Name');
    this.lastNameInput = this.page.getByPlaceholder('Last Name');
    this.zipInput = this.page.getByPlaceholder('Zip');
    this.continueButton = this.page.getByRole('button', { name: 'Continue' });
  }

  async fillCheckoutInfo(userInfo: UserInfoModel): Promise<OverviewPage> {
    await this.firstNameInput.fill(userInfo.firstName);
    await this.lastNameInput.fill(userInfo.lastName);
    await this.zipInput.fill(userInfo.zip);
    await this.continueButton.click();

    return new OverviewPage(this.page);
  }
}
