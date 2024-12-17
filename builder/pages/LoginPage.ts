import { BaseActions } from '../base/BaseActions';
import { expect } from '@playwright/test';
import { logger } from "../utils/Logger";


export class LoginPage extends BaseActions {
    private readonly usernameField: string = "#user-name";
    private readonly passwordField: string = "#password";
    private readonly loginButton: string = "#login-button";
    private readonly errorMessage: string = "div.error-message-container > h3";

    async navigateToLoginPage(): Promise<void> {
        await this.goTo("/");
    }

    async login(username: string, password: string): Promise<void> {
        await this.typeToElementBy(this.usernameField, username);
        await this.typeToElementBy(this.passwordField, password);
        await this.clickElementBy(this.loginButton)
    }

    async validateLoginErrorMessage(message: string): Promise<void> {
        await this.waitForVisible(this.createLocator(this.errorMessage));
        await expect(this.createLocator(this.errorMessage)).toHaveText(message);
    }
}
