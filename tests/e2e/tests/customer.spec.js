// require('dotenv').config()
const { createUser, loginUser, changeSiteTimezone } = require('@wordpress/e2e-test-utils');
const loginPage = require('../pages/login.js')
const customerPage = require('../pages/customer.js')
// const data = require('../utils/testdata.js')
const timout = 100000

// jest.retryTimes(3);

describe('customer functionaly test', () => {

    beforeAll(async () => {
        // await page.setDefaultNavigationTimeout(600000);
    });

    //  afterAll(async () => {
    //    await browser.close()
    //  });

    // beforeEach(async () => {
    //  });

    //  afterEach(async () => {
    //    await browser.close()
    //  });


    //////////////////////////// need to review ///////////////////////////////


    // it('customer register', async () => {
    //     await loginPage.customerregister('customer101@gmail.com', process.env.CUSTOMER_PASSWORD)
    // });


    // it('customer login', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.login('customer1', '01dokan01')

    // });


    // it('customer logout', async () => {
    //     await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.customerlogout() // TODO: shift to customer page
    // });


    // it('customer become a vendor', async () => {
    //     await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await customerPage.customerbecomevednor('vendor101', 'v101', 'v101', 'v101', 'abc street', '123456789', 'abcComapany', '123456789', '123456789','abcbank', '1234567890') 
    //     await vendorPage.vendorSetupWizard( 20, 'abc street', 'street2', 'New York', '10001', "United States (US)", "New York", "vendor@paypal.com", 'vendorbankaccount',  1234567890, 'abcBank', 'abc bank address', 1234567890, 1234567890, 123456789, 'custom@payment.com') 
    // });


    // it('customer become a wholesale customer', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     // await customerPage.customersendwholesalerequest() 
    //     await loginPage.switchtoadmin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.adminapprovewholesalerequest(process.env.CUSTOMER_EMAIL)
    // });

    // it('customer send return request ', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.login('customer1', '01dokan01')
    //     await customerPage.goToCustomerMyaccount()
    //     await customerPage.sendWarrentyRequest('return', 'I would like to return this product')
    //     await customerPage.deletePaymentMethod()
    // }, timout);

    // it('customer ask for get support ', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.login('customer1', '01dokan01')
    //     await customerPage.goToCustomerMyaccount()
    //     await customerPage.sendWarrentyRequest('return', 'I would like to return this product')
    //     await customerPage.deletePaymentMethod()
    // }, timout);

    // it('customer add customer details', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.login('customer1', '01dokan01')
    //     await customerPage.goToCustomerMyaccount()
    //     await customerPage.addCustomerDetails('customer1', 'c1', 'customer1', 'customer1@gamil.com', '01dokan01', '02dokan02')
    // }, timout);

    // it('customer add payment method', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.login('customer1', '01dokan01')
    //     await customerPage.goToCustomerMyaccount()
    //     await customerPage.addPaymentMethod(' 4242 4242 4242 4242', '12', '55', '111')
    //     await customerPage.deletePaymentMethod()
    // }, timout);

    /////////////////////////////////////////////////////////////// reviewed ///////////////////////////////

    it('customer add billing details', async () => {
        // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
        await loginPage.login('customer1', '01dokan01')
        await customerPage.goToCustomerMyaccount()
        await customerPage.addBillingAddress('customer1', 'c1', 'c1company', 'c1companyID', 'c1vat', 'c1bank', 'c1bankIBAN', 'United States (US)', 'abc street', 'xyz street2', 'New York', 'New York', '10006', '0123456789', 'customer1@gamil.com')
    }, timout);

    // it('customer add shipping details', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.login('customer1', '01dokan01')
    //     await customerPage.goToCustomerMyaccount()
    //     await customerPage.addShippingAddress('customer1', 'c1', 'c1company', 'United States (US)', 'abc street', 'xyz street2', 'New York', 'New York', '10006')
    // }, timout);


    // it('customer can search product', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.login('customer1', '01dokan01')
    //     await customerPage.goToShop()
    //     await customerPage.searchProduct('Handmade Steel Towels')

    // }, timout);

    // it('customer can apply coupon', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.login('customer1', '01dokan01')
    //     await customerPage.goToShop()
    //     await customerPage.addproductToCartFromShop('Handmade Steel Towels')
    //     await customerPage.goToCartFromShop()
    //     await customerPage.applyCoupon('VC_HYGCE')

    // }, timout);


    // it('customer can buy product', async () => {
    //     // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    //     await loginPage.login('customer1', '01dokan01')
    //     await customerPage.goToShop()
    //     await customerPage.addproductToCartFromShop('Handmade Steel Towels')
    //     await customerPage.goToCartFromShop()
    //     await customerPage.applyCoupon('VC_HYGCE')
    //     await customerPage.goToCheckoutFromCart()
    //     // await customerPage.addBillingAddressInCheckout('customer1', 'c1', 'c1company', 'c1companyID', 'c1vat', 'c1bank', 'c1bankIBAN', 'United States (US)', 'abc street', 'xyz street2', 'New York', 'New York', '10006', '0123456789', 'customer1@gamil.com')
    //     // await customerPage.addShippingAddressInCheckout('customer1', 'c1', 'c1company', 'United States (US)', 'abc street', 'xyz street2', 'New York', 'New York', '10006')
    //     await customerPage.placeOrder()
    // }, timout);



});