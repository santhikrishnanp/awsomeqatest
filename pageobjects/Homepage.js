const { stat } = require("node:fs");

class Homepage {
    constructor(page){
        this.page = page;
       
        this.myAccountButton = page.getByText('My Account Register Login');
        this.loginButton = page.getByRole('link', { name: /login/i });
        this.registerButton = page.getByRole('link', { name: /register/i });

    }

    async goToHomepage(){
        await this.page.goto('https://awesomeqa.com/ui/');
        await this.page.waitForLoadState('networkidle');
    }
    async gotToLoginpage(){
        await this.myAccountButton.click();
        await this.loginButton.waitFor({state:'visible'});
        await this.loginButton.click();
    }
    async goToRegisterPage(){
        await this.myAccountButton.click();
        await this.registerButton.waitFor({state:'visible'});
        await this.registerButton.click();
}
}
module.exports = { Homepage };