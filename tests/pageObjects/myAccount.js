const { generateRandom } = require('../support/generateRandom');
exports.myAccount = class myAccount {
    /**
      * @param {import('@playwright/test').Page} page
      */
    constructor(page) {
        this.page = page;
        this.generateRand = new generateRandom();
        this.emailAddress = page.locator('#email_create')
        this.createAccountBut = page.locator('span', { hasText: " Create an account " })
    }
    async createAccount() {
        await this.createAccountBut.click();
    }
    async createEmail() {
        await this.emailAddress.fill(this.generateRand.generateRandom("email"));
    }
}