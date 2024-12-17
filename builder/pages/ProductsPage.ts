import { expect } from '@playwright/test';
import { BaseActions } from '../base/BaseActions';

export class ProductsPage extends BaseActions {
    private readonly productsLogo: string = ".app_logo";
    private readonly productTitles: string = "div.inventory_list div.inventory_item_name ";

    async validateProductsLogoIsDisplayed(): Promise<void> {
        await expect(this.createLocator(this.productsLogo)).toBeVisible();
    }

    async validateProductIsDisplayedByTitle(title: string) {
        this.validateElementInListByText(this.productTitles, title);
    }
}
