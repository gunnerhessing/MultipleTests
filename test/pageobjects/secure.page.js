const { $ } = require('@wdio/globals')
const Page = require('./page');


class SecurePage extends Page {
  
    get addToCart () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get removeFromCart () {
        return $('remove-sauce-labs-bike-light');
    }


    get errorButton () {
        return $('.error-button');
    }

    get flashAlert () {
        return $('#item_0_title_link');
    }
}

module.exports = new SecurePage();
