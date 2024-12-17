import { test as baseTest, Page, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

// Define the test with extended fixtures
const test = baseTest.extend<{
    page: Page;
    browserContext: BrowserContext;
    loginPage: LoginPage;
    productsPage: ProductsPage;
}>({
    // Fixture for LoginPage
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage();
        loginPage.setPage = page;
        await use(loginPage);
    },

    // Fixture for DashboardPage
    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage();
        productsPage.setPage = page;
        await use(productsPage);
    }
});

export default test;
