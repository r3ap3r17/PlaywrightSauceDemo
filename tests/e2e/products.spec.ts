import test from '../../builder/base/PageManager';


test.describe('Product page tests', () => {
    // test.use({ storageState: 'playwright/.auth/user.json' });

    test('Product 1 is displayed', async ({ productsPage }) => {
        const PRODUCT_TITLE = 'Sauce Labs Backpack';

        await productsPage.navigateToProductsPage();
        await productsPage.validateProductsLogoIsDisplayed();
        await productsPage.validateProductIsDisplayedByTitle(PRODUCT_TITLE);
    });

    test('Product 2 is displayed', async ({ productsPage }) => {
        const PRODUCT_TITLE = 'Sauce Labs Backpack';

        await productsPage.navigateToProductsPage();
        await productsPage.validateProductsLogoIsDisplayed();
        await productsPage.validateProductIsDisplayedByTitle(PRODUCT_TITLE);
    });

    test('Product 3 is displayed', async ({ productsPage }) => {
        const PRODUCT_TITLE = 'Sauce Labs Backpack';

        await productsPage.navigateToProductsPage();
        await productsPage.validateProductsLogoIsDisplayed();
        await productsPage.validateProductIsDisplayedByTitle(PRODUCT_TITLE);
    });
});