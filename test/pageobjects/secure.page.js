const { $ } = require('@wdio/globals')
const Page = require('./page');


class SecurePage extends Page {
  
    get addLightToCart () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get removeFromCart () {
        return $('#remove-sauce-labs-bike-light');
    }


    get errorButton () {
        return $('.error-button');
    }

    get flashAlert () {
        return $('#item_0_title_link');
    }

    get AddJacketCart () {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get checkoutButton () {
        return $('#checkout');
    }

    get itemsinCart () {
        return $('.shopping_cart_badge');
    }
   

}

module.exports = new SecurePage();
