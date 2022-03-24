const { loginUser } = require('@wordpress/e2e-test-utils');
const loginPage = require('../pages/login.js')
const adminPage = require('../pages/admin.js');
const data = require('../utils/testData.js')
const timeout = 600000

// jest.retryTimes(3);

describe('admin functionality test', () => {

    // beforeAll(async () => {
    //     await page.setDefaultNavigationTimeout(30000); 
    // });

    //  afterAll(async () => {
    //    await browser.close()
    //  });

    // beforeEach(async () => {
    //  });

    //  afterEach(async () => {
    //    await browser.close()
    //  });

    //////////////////////////// need to review ///////////////////////////////




    // it('admin add categories', async () => {
    //     await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addCategory()
    // });

    // it('admin add attributes', async () => {
    //     await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addAttributes()
    // });



    /////////////////////////////////////////////////////////////// reviewed ///////////////////////////////

    // it('admin can login', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    // });

    // it('admin can logout', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await loginPage.adminLogout()
    // });

    // it('admin can add vendor', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.addVendor(data.vendorInfo.firstName, data.vendorInfo.lastName, data.vendorInfo.shopName, data.vendorInfo.phone, data.vendorInfo.userEmail
    //         , data.vendorInfo.firstName, '01dokan01', data.vendorInfo.companyName, data.vendorInfo.companyId, data.vendorInfo.vatNumber, data.vendorInfo.bankName, data.vendorInfo.bankIban,
    //         'abc street', 'xyz street', 'New York', '10006', 'United States (US)', 'New York', 'accountName', 'accountNumber', 'bankName',
    //         'bankAddress', '111111111111', '1111111111111', '11111111111', data.vendorInfo.userEmail)

    // },timeout);


    it('admin add product', async () => {
        // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminLogin('admin', 'password')
        await adminPage.addProduct()
    },timeout);

    // it('admin can add test settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.setWpSettings()
    //     await adminPage.setDokanSettings()
    //     await adminPage.setWoocommerceSettings()
    //     await adminPage.setPaymentSettings()
    // },timeout);

    // //settings

    // it('admin can set dokan general settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanGeneralSettings()
    // }, timeout);   

    // it('admin can set dokan selling settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanSellingSettings()
    // }, timeout);

    // it('admin can set dokan withdraw settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanWithdrawSettings()
    // }, timeout);

    // it('admin can set dokan appearance settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanAppearanceSettings()
    // }, timeout);

    // it('admin can set dokan store support settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanStoreSupportSettings()
    // }, timeout);

    // it('admin can set dokan rma settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanRmaSettings()
    // }, timeout);

    // it('admin can set dokan wholesale settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanWholesaleSettings()
    // }, timeout);    

    // it('admin can set dokan eu compliance settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanEuComplianceSettings()
    // }, timeout);

    // it('admin can set dokan delivery time settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanDeliveryTimeSettings()
    // }, timeout);

    // it('admin can set dokan product advertising settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanProductAdvertisingSettings()
    // }, timeout);

    // it('admin can set dokan geolocation settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanGeolocationSettings()
    // }, timeout);

    // it('admin can set dokan product report abuse settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanProductReportAbuseSettings()
    // }, timeout);

    // it('admin can set dokan spmv settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanSpmvSettings()
    // }, timeout);

    // it('admin can set dokan vendor subscription settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToDokanSettings()
    //     await adminPage.setDokanVendorSubscriptionSettings()
    // }, timeout);

    // //payment
    // it('admin can add basic payment methods', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupBasicPaymentMethods()
    // }, timeout);


    // it('admin can add strip payment method', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupStripeConnect()
    // }, timeout);

    // it('admin can add paypal marketplace payment method', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupPaypalMarketPlace()
    // }, timeout);

    // it('admin can add dokan mangopay payment method', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupDokanMangoPay()
    // },timeout);

    // it('admin can add dokan razorpay payment method', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupDokanRazorpay()
    // },timeout);

    // it('admin can add strip express payment method', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.setupStripeExpress()
    // }, timeout);



});