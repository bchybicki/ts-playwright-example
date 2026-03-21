import { Locator, Page } from '@playwright/test';
import { OrderSuccessPage } from './order-success.page';

export class OverviewPage {
  finishButton: Locator;

  constructor(private page: Page) {
    this.finishButton = this.page.getByRole('button', { name: 'Finish' });
  }

  async finishOrder(): Promise<OrderSuccessPage> {
    await this.finishButton.click();

    return new OrderSuccessPage(this.page);
  }
}
