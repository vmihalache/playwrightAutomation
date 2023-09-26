const { commonPageObjects } = require("../pageObjects/commonPageObjects");
const { myAccount } = require("../pageObjects/myAccount");
const { signUp } = require("../pageObjects/signUp");


exports.commonMethods = class createAsingleUser {
    /**
          * @param {import('@playwright/test').Page} page
          */
    constructor(page) {
        this.commonPage = new commonPageObjects(page);
        this.Account = new myAccount(page);
        this.signU = new signUp(page);
    }
    async openApplication() {
        await this.commonPage.openApplication();
    }
    async openSignInFlow() {
        await this.openApplication();
        await this.commonPage.openSignUpFlow();
    }
}