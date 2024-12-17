"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const BaseActions_1 = require("../base/BaseActions");
const test_1 = require("@playwright/test");
class LoginPage extends BaseActions_1.BaseActions {
    usernameField = "#user-name";
    passwordField = "#password";
    loginButton = "#login-button";
    errorMessage = "div.error-message-container > h3";
    async navigateToLoginPage() {
        await this.goTo("/");
    }
    async login(username, password) {
        await this.typeToElementBy(this.usernameField, username);
        await this.typeToElementBy(this.passwordField, password);
        await this.clickElementBy(this.loginButton);
    }
    async validateLoginErrorMessage(message) {
        await this.waitForVisible(this.createLocator(this.errorMessage));
        await (0, test_1.expect)(this.createLocator(this.errorMessage)).toHaveText(message);
    }
}
exports.LoginPage = LoginPage;
