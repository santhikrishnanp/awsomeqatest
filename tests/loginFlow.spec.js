const{test,expect} = require('@playwright/test');
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
test('Registration for new users', async ({ page }) => {
    const home = new Homepage(page);
    const register = new RegisterPage(page);
    await home.goToHomepage();
    await home.goToRegisterPage();
    await register.register("John", "Doe", "johndoe@gmail.com", "1234567890", "password123");
});
