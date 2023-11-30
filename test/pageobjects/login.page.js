const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('input[type="submit"]'); 
    }

    get addingToCart () {
        return $('#add-to-cart-sauce-labs-bike-light'); 
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password 
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.addingToCart.click();
        await browser.pause(5000)
    }

async incorrectLogin (incorrectUsername, incorrectPassword) {
    await this.inputUsername.setValue(incorrectUsername);
    await this.inputPassword.setValue(incorrectPassword);
    await this.btnSubmit.click();
}



    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
