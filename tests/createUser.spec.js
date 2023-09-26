import { test, expect } from '@playwright/test';

const { commonMethods } = require('./keywords/commonPageKeywords');
const { createAsingleUser } = require('./keywords/createUser');

test('createASingleUser', async ({ page }) => {

    const commonMethod = new commonMethods(page);
    const create = new createAsingleUser(page);

    await commonMethod.openSignInFlow();
    await create.createUser();
    
    await expect(page).toHaveURL("http://www.automationpractice.pl/index.php?controller=my-account");
})