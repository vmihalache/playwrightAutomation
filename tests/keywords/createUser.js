const { commonPageObjects } = require("../pageObjects/commonPageObjects");
const { myAccount } = require("../pageObjects/myAccount");
const { signUp } = require("../pageObjects/signUp");


exports.createAsingleUser = class createAsingleUser {
    /**
          * @param {import('@playwright/test').Page} page
          */
    constructor(page) {
        this.commonPage = new commonPageObjects(page);
        this.Account = new myAccount(page);
        this.signU = new signUp(page);
    }
    async createUser() {
        await this.Account.createEmail();
        await this.Account.createAccount()
        await this.signU.fillUserForm();
        await this.signU.clickOnRegister();
    }
}