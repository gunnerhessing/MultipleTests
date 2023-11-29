const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  

    get errorButton () {
        return $('.error-button');
    }

    get flashAlert () {
        return $('#item_0_title_link');
    }
}

module.exports = new SecurePage();
