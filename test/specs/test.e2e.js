const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')


describe('My Login application incorrect', () => {
    it('it should not let you login because of incorrect credentials', async () => {
        await LoginPage.open()

        await LoginPage.incorrectLogin('incorrectuser', 'thisiswrong')
        await expect(SecurePage.errorButton).toBeExisting()
        await expect(SecurePage.errorButton).toHaveTextContaining(
            '')
    })
})



describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Sauce Labs Bike Light')
    })
})

