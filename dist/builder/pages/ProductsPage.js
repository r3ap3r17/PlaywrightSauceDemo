"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsPage = void 0;
const test_1 = require("@playwright/test");
const BaseActions_1 = require("../base/BaseActions");
class ProductsPage extends BaseActions_1.BaseActions {
    productsLogo = ".app_logo";
    productTitles = "div.inventory_list div.inventory_item_name ";
    async validateProductsLogoIsDisplayed() {
        await (0, test_1.expect)(this.createLocator(this.productsLogo)).toBeVisible();
    }
    async validateProductIsDisplayedByTitle(title) {
        this.validateElementInListByText(this.productTitles, title);
    }
}
exports.ProductsPage = ProductsPage;
