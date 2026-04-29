const{test,expect} = require('@playwright/test');
const{customtest} = require('../test-data/test-base');
const dataset = JSON.parse(JSON.stringify(require('../test-data/userregistration.json')));
const{Homepage} = require('../pageobjects/Homepage');
const {LoginPage} = require('../pageobjects/LoginPage');
const {RegisterPage} = require('../pageobjects/RegisterPage');

test('Login from home page', async ({ page }) => {
    const home = new Homepage(page);
    const login = new LoginPage(page);
    await home.goToHomepage();
    await home.gotToLoginpage();
    await login.login("santhitest@gmail.com","testpass@1");

    
})
// for (const data of loginData) 
test('Registration for new users', async ({ page }) => {
    const home = new Homepage(page);
    const register = new RegisterPage(page);
    await home.goToHomepage();
    await home.goToRegisterPage();
    await register.register(dataset.firstname, dataset.lastname, dataset.email, dataset.telephone, dataset.password);
})

customtest('Registration for new users-fixture', async ({ page, testDataforRegistration }) => {
    const home = new Homepage(page);
    const register = new RegisterPage(page);
    await home.goToHomepage();
    await home.goToRegisterPage();
    await register.register(testDataforRegistration.firstname, testDataforRegistration.lastname, testDataforRegistration.email, testDataforRegistration.telephone, testDataforRegistration.password);
});
