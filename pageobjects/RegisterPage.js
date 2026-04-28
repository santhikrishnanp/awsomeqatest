class RegisterPage{
    constructor(page){
        this.page = page;
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.emailInput = page.getByRole('textbox', { name: 'E-Mail' });
        this.telephoneInput = page.getByRole('textbox', { name: 'Telephone' });
        // this.passwordInput = page.getByRole('textbox', { name: 'Password',exact: true });
        this.passwordInput = page.getByText('Password',{exact: true});
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Password Confirm' });
        this.subscribe = page.getByRole('radio', { name: 'Yes' });
        this.terms = page.getByRole('checkbox', { name: 'Privacy Policy' });
        this.submit = page.getByRole('button', { name: 'Continue' });
    }

    async register(firstName, lastName, email, telephone, password){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.telephoneInput.fill(telephone);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.subscribe.click();
        await this.terms.click();
        await this.submit.click();
    }

}module.exports = { RegisterPage };