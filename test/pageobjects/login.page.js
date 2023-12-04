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

    get addingLightToCart () {
        return $('#add-to-cart-sauce-labs-bike-light'); 
    }

    get removingFromCart () {
        return $('#remove-sauce-labs-bike-light')
    }

    get addingJacketToCart () {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    get shoppingCart () {
        return $('.shopping_cart_link')
    }



    /** 
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password 
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.addingLightToCart.click();
        await browser.pause(3000)
        await this.removingFromCart.click();
        await browser.pause(3000)
        await this.addingJacketToCart.click();
        await browser.pause(3000)
        await this.shoppingCart.click();
        await browser.pause(3000)
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
