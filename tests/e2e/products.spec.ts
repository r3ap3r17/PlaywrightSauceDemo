import test from '../../builder/base/BaseTest';

const UserCredentials = {
    VALID_USERNAME: "standard_user",
    LOCKED_USERNAME: "locked_out_user",
    PASSWORD: "secret_sauce",
    INCORRECT_PASSWORD: "incorrect_sauce"
}

test.describe('Product page tests', () => {

    test('Product is displayed', async ({ loginPage, productsPage }) => {
        const PRODUCT_TITLE = 'Sauce Labs Backpack';

        await loginPage.navigateToLoginPage();
        await loginPage.login(UserCredentials.VALID_USERNAME, UserCredentials.PASSWORD);
        await productsPage.validateProductsLogoIsDisplayed();
        await productsPage.validateProductIsDisplayedByTitle(PRODUCT_TITLE);
    });
});