exports.commonPageObjects = class commonPageObjects {
    /**
      * @param {import('@playwright/test').Page} page
      */
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('a', { hasText: " Sign in " })
    }
    async openSignUpFlow() {
        await this.signInButton.click();
    }
    async openApplication() {
    await this.page.goto("http://www.automationpractice.pl/index.php");
    }
}