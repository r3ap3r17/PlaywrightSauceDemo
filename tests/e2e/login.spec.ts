import test from '../../builder/base/BaseTest';
import { ErrorMessages } from '../../builder/constants/ErrorMessages';

const UserCredentials = {
    VALID_USERNAME: "standard_user",
    LOCKED_USERNAME: "locked_out_user",
    PASSWORD: "secret_sauce",
    INCORRECT_PASSWORD: "incorrect_sauce"
}

test.describe('Login tests', () => {

    test('Valid login', async ({ loginPage, productsPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(UserCredentials.VALID_USERNAME, UserCredentials.PASSWORD);
        productsPage.validateProductsLogoIsDisplayed();
    });

    test('Invalid login', async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(UserCredentials.VALID_USERNAME, UserCredentials.INCORRECT_PASSWORD);
        await loginPage.validateLoginErrorMessage(ErrorMessages.INVALID_CREDENTIALS);
    });

    test('Locked user login', async ({ loginPage }) => {
        await loginPage.navigateToLoginPage();
        await loginPage.login(UserCredentials.LOCKED_USERNAME, UserCredentials.PASSWORD);
        await loginPage.validateLoginErrorMessage(ErrorMessages.LOCKED_OUT_USER);
    });
});