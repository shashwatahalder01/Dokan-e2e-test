// require('dotenv').config()
const loginPage = require('../pages/login.js')
const customerPage = require('../pages/customer.js')
const adminPage = require('../pages/admin.js')
const vendorPage = require('../pages/vendor.js')
// const env = process.env // TODO: Configure through jest global setupß


describe('customer functionaly test', () => {

    beforeAll(async () => {
        await page.setDefaultNavigationTimeout(30000);
    });

    //  afterAll(async () => {
    //    await browser.close()
    //  });

    // beforeEach(async () => {
    //    await page.goto('http://dokan2.test/my-account');
    //  });

    //  afterEach(async () => {
    //    await browser.close()
    //  });


    it('customer register', async () => {
        await loginPage.customerregister('customer101@gmail.com', process.env.CUSTOMER_PASSWORD)
    });


    it('customer login', async () => {
        await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
    });


    it('customer logout', async () => {
        await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
        await loginPage.customerlogout() // TODO: shift to customer page
    });


    it('customer become a vendor', async () => {
        await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
        await customerPage.customerbecomevednor('vendor101', 'v101', 'v101', 'v101', 'abc street', '123456789', 'abcComapany', '123456789', '123456789','abcbank', '1234567890') 
        await vendorPage.vendorSetupWizard( 20, 'abc street', 'street2', 'New York', '10001', "United States (US)", "New York", "vendor@paypal.com", 'vendorbankaccount',  1234567890, 'abcBank', 'abc bank address', 1234567890, 1234567890, 123456789, 'custom@payment.com') 
    });


    it('customer become a wholesale customer', async () => {
        // await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
        // await customerPage.customersendwholesalerequest() 
        await loginPage.switchtoadmin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await adminPage.adminapprovewholesalerequest(process.env.CUSTOMER_EMAIL)
    });



    it('customer buy product', async () => {
        await loginPage.login(process.env.CUSTOMER_EMAIL, process.env.CUSTOMER_PASSWORD)
        await cutomer.addproducttocart()

    });




});