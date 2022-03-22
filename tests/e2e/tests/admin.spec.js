
const { loginUser } = require('@wordpress/e2e-test-utils');
const loginPage = require('../pages/login.js')
const adminPage = require('../pages/admin.js');
const timout = 600000


describe('admin functionaly test', () => {

    // beforeAll(async () => {
    //     await page.setDefaultNavigationTimeout(30000); 
    // });

    //  afterAll(async () => {
    //    await browser.close()
    //  });

    // beforeEach(async () => {
    //    await page.goto('http://dokan2.test/my-account');
    //  });

    //  afterEach(async () => {
    //    await browser.close()
    //  });


    // it('admin login', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    // });


    // it('admin logout', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogout() // 

    // });



    it('admin can add test settings', async () => {
        // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminlogin('admin', 'password')
        await adminPage.setWpSettings()
        // await adminPage.setDokanSettings()
        await adminPage.setWoocommerceSettings()
        // await adminPage.setpaymetnsettings()

    },timout);


    // it('admin add vendor', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addvendor()

    // });

    // it('admin add product', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addproduct()

    // });

    // it('admin add categories', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addcategory()

    // });
    // it('admin add attributes', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addattributes()

    // });



    // //settings

    // it('admin can set dokan general settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanGeneralSettings()
    // }, timout);   

    // it('admin can set dokan selling settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanSellingSettings()
    // }, timout);

    // it('admin can set dokan withdraw settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanWithdrawSettings()
    // }, timout);

    // it('admin can set dokan appreance settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanAppearanceSettings()
    // }, timout);

    // it('admin can set dokan store support settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanStoreSupportSettings()
    // }, timout);

    // it('admin can set dokan rma settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanRmaSettings()
    // }, timout);

    // it('admin can set dokan wholesale settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanWholesaleSettings()
    // }, timout);    

    // it('admin can set dokan eu compliance settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanEuComplianceSettings()
    // }, timout);

    // it('admin can set dokan delivery time settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanDeliveryTimeSettings()
    // }, timout);

    // it('admin can set dokan product advertising settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanProductAdvertisingSettings()
    // }, timout);

    // it('admin can set dokan geolocation settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanGeolocationSettings()
    // }, timout);

    // it('admin can set dokan product report abuse settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanProductReportAbuseSettings()
    // }, timout);

    // it('admin can set dokan spmv settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanSpmvSettings()
    // }, timout);

    // it('admin can set dokan vendor subscription settings', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanVendorSubscriptionSettings()
    // }, timout);

    // //payment
    // it('admin can add basic payment methods', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupBasicPaymentMethods()
    // }, timout);


    // it('admin can add strip payment method', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupStripeConnect()
    // }, timout);

    // it('admin can add paypal marketplace payment method', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupPaypalMarketPlace()
    // }, timout);

    // it('admin can add dokan mangopay payment method', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupDokanMangoPay()
    // },timout);

    // it('admin can add dokan razorpay payment method', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupDokanRazorpay()
    // },timout);

    // it.skip('admin can add strip express payment method', async () => {
    //     // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupStripeExpress()
    // }, timout);



});