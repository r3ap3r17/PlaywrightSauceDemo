"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseActions = void 0;
const test_1 = require("@playwright/test");
class BaseActions {
    page = null;
    get getPage() {
        return this.page;
    }
    set setPage(page) {
        this.page = page;
    }
    async goTo(url) {
        await this.getPage.goto(url);
    }
    createLocator(locator) {
        return this.getPage.locator(locator);
    }
    // Wait methods
    async waitForVisible(element, time) {
        await element.waitFor({ state: "visible", timeout: time });
    }
    async waitForNotVisible(element, time) {
        await element.waitFor({ state: "hidden", timeout: time });
    }
    async waitForPresent(element, time) {
        await element.waitFor({ state: "attached", timeout: time });
    }
    async waitForNotPresent(element, time) {
        await element.waitFor({ state: "detached", timeout: time });
    }
    // Click element
    async clickElement(element) {
        await element.click();
    }
    async clickElementBy(locator) {
        await this.createLocator(locator).click();
    }
    // Type to element
    async typeToElement(element, text) {
        await element.fill(text);
    }
    async typeToElementBy(locator, text) {
        await this.createLocator(locator).fill(text);
    }
    // Validations
    async validateElementInListByText(listLocator, text) {
        const elementTexts = await this.createLocator(listLocator).allTextContents();
        (0, test_1.expect)(elementTexts.find(e => e === text)).toBeTruthy();
    }
}
exports.BaseActions = BaseActions;
