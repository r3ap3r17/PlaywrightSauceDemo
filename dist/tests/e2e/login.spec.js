"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseTest_1 = __importDefault(require("../../builder/base/BaseTest"));
const ErrorMessages_1 = require("../../builder/constants/ErrorMessages");
const UserCredentials = {
    VALID_USERNAME: "standard_user",
    LOCKED_USERNAME: "locked_out_user",
    PASSWORD: "secret_sauce",
    INCORRECT_PASSWORD: "incorrect_sauce"
};
BaseTest_1.default.describe('Login tests', () => {
    (0, BaseTest_1.default)('Valid login', async ({ loginPage, productsPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(UserCredentials.VALID_USERNAME, UserCredentials.PASSWORD);
        productsPage.validateProductsLogoIsDisplayed();
    });
    (0, BaseTest_1.default)('Invalid login', async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(UserCredentials.VALID_USERNAME, UserCredentials.INCORRECT_PASSWORD);
        await loginPage.validateLoginErrorMessage(ErrorMessages_1.ErrorMessages.INVALID_CREDENTIALS);
    });
    (0, BaseTest_1.default)('Locked user login', async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(UserCredentials.LOCKED_USERNAME, UserCredentials.PASSWORD);
        await loginPage.validateLoginErrorMessage(ErrorMessages_1.ErrorMessages.LOCKED_OUT_USER);
    });
});
