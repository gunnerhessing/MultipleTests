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
    it('should login with valid credentials and add sauce labs bike light to cart', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.itemsinCart).toBeExisting()
    
            it('add the bike light to cart'), async () => {
        
                await expect (SecurePage.addLightToCart).toBeExisting()
            }
    })
})

describe('Pressing cart button in top right', () => {
    it('Item in the cart', async () => {

        await expect(SecurePage.itemsinCart).toBeExisting()
       
    })
})

describe('Checkout credentials', () => {
    it('It should put in the correct credentials and continue on the checkout process', async () => {

        await LoginPage.checkoutInfo('Gunner', 'Hessing', '84043')
        await expect(SecurePage.itemsinCart).toBeExisting()
    })
})