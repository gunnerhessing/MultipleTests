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

    get checkoutBtn () {
        return $('#checkout')
    }

    get inputPostalCode () {
        return $('#postal-code');
    }

    get firstName () {
        return $('#first-name');
    }
    get lastName () {
        return $('#last-name');
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
        await this.removingFromCart.click();
        await this.addingJacketToCart.click();
        await this.shoppingCart.click();
        await browser.pause(1500)
        await this.checkoutBtn.click();
        await browser.pause(1500)
    }

async incorrectLogin (incorrectUsername, incorrectPassword) {
    await this.inputUsername.setValue(incorrectUsername);
    await this.inputPassword.setValue(incorrectPassword);
    await this.btnSubmit.click();
}

async checkoutInfo (checkoutFirstName, checkoutLastName, postalCode) {
    await this.firstName.setValue(checkoutFirstName);
    await browser.pause(1500)
    await this.lastName.setValue(checkoutLastName);
    await browser.pause(1500)
    await this.inputPostalCode.setValue(postalCode);
    await browser.pause(1500)
    await this.btnSubmit.click();
    await browser.pause(1500)
}


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
