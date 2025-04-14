import { test as setup } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../builder/pages/LoginPage';
import { ProductsPage } from '../builder/pages/ProductsPage';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');
const USER_CREDENTIALS = {
    VALID_USERNAME: "standard_user",
    PASSWORD: "secret_sauce"
}

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(USER_CREDENTIALS.VALID_USERNAME, USER_CREDENTIALS.PASSWORD);

    const productsPage = new ProductsPage(page);
    await productsPage.validateProductsLogoIsDisplayed();

    await page.context().storageState({ path: authFile });
});