import { expect, Locator, Page } from "@playwright/test";

export class BaseActions {
    private page: Page;

    private get getPage(): Page {
        return this.page;
    }

    public set setPage(page: Page) {
        this.page = page;
    }

    async goTo(url: string): Promise<void> {
        await this.getPage.goto(url);
    }

    protected createLocator(locator: string): Locator {
        return this.getPage.locator(locator);
    }

    // Wait methods

    protected async waitForVisible(element: Locator, time?: number): Promise<void> {
        await element.waitFor({ state: "visible", timeout: time });
    }

    protected async waitForNotVisible(element: Locator, time: number): Promise<void> {
        await element.waitFor({ state: "hidden", timeout: time });
    }

    protected async waitForPresent(element: Locator, time: number): Promise<void> {
        await element.waitFor({ state: "attached", timeout: time });
    }

    protected async waitForNotPresent(element: Locator, time: number): Promise<void> {
        await element.waitFor({ state: "detached", timeout: time });
    }

    // Click element
    protected async clickElement(element: Locator): Promise<void> {
        await element.click();
    }

    protected async clickElementBy(locator: string): Promise<void> {
        await this.createLocator(locator).click();
    }

    // Type to element
    protected async typeToElement(element: Locator, text: string): Promise<void> {
        await element.fill(text);
    }

    protected async typeToElementBy(locator: string, text: string): Promise<void> {
        await this.createLocator(locator).fill(text);
    }

    // Validations
    protected async validateElementInListByText(listLocator: string, text: string): Promise<void> {
        const elementTexts = await this.createLocator(listLocator).allTextContents();
        expect(elementTexts.find(e => e === text)).toBeTruthy();
    }
}
