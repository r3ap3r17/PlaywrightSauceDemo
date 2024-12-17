"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseTest_1 = __importDefault(require("../../builder/base/BaseTest"));
const UserCredentials = {
    VALID_USERNAME: "standard_user",
    LOCKED_USERNAME: "locked_out_user",
    PASSWORD: "secret_sauce",
    INCORRECT_PASSWORD: "incorrect_sauce"
};
BaseTest_1.default.describe('Product page tests', () => {
    (0, BaseTest_1.default)('Product is displayed', async ({ loginPage, productsPage }) => {
        const PRODUCT_TITLE = 'Sauce Labs Backpack';
        await loginPage.navigateToLoginPage();
        await loginPage.login(UserCredentials.VALID_USERNAME, UserCredentials.PASSWORD);
        await productsPage.validateProductsLogoIsDisplayed();
        await productsPage.validateProductIsDisplayedByTitle(PRODUCT_TITLE);
    });
});
