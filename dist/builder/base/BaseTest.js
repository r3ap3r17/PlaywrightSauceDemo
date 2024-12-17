"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
const ProductsPage_1 = require("../pages/ProductsPage");
// Define the test with extended fixtures
const test = test_1.test.extend({
    // Fixture for LoginPage
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage_1.LoginPage();
        loginPage.setPage = page;
        await use(loginPage);
    },
    // Fixture for DashboardPage
    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage_1.ProductsPage();
        productsPage.setPage = page;
        await use(productsPage);
    }
});
exports.default = test;
