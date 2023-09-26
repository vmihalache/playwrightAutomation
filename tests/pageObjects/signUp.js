const  { generateRandom } = require('../support/generateRandom');

exports.signUp = class signUp {
    /**
   * @param {import('@playwright/test').Page} page
   */
   constructor(page) {
    this.page = page;
    this.generateRand = new generateRandom();
    this.firstName = page.getByLabel("First name ");
    this.lastName = page.getByLabel("Last name ");
    this.password = page.getByLabel("Password ");
    this.days  = page.locator('#days')
    this.months  = page.locator('#months');
    this.years  = page.locator('#years');
    this.register = page.getByText("Register");
   }
   async clickOnRegister () {
    await this.register.click();
   }
   async fillUserForm () {
    console.log(this.generateRand.generateRandom(""))
    await this.firstName.fill(this.generateRand.generateRandom(""));
    await this.lastName.fill(this.generateRand.generateRandom(""));
    await this.password.fill(this.generateRand.generateRandom(""))
    await this.days.selectOption("1");
    await this.months.selectOption("1");
    await this.years.selectOption("1990");
   }
   async createAccount () {
    await this.createAccount.click();
   }
}