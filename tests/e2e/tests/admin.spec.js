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
 
    it('admin can add simple product', async () => {
        // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminLogin('admin', 'password')
        await adminPage.addSimpleProduct(data.product.name, data.product.price, 'Uncategorized', 'NYshop')
    }, timeout);

    it.skip('admin can add variable product', async () => {
        // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminLogin('admin', 'password')
        // await adminPage.addVariableProduct(data.product.name, data.product.price, 'Uncategorized', 'NYshop','size',['s','l','m'])
    }, timeout);

    it('admin can add simple subscription product', async () => {
        // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminLogin('admin', 'password')
        await adminPage.addSimpleSubscription(data.product.name, data.product.price, 'Uncategorized', 'NYshop')
    }, timeout);

    it.skip('admin can add variable subscription product', async () => {
        // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminLogin('admin', 'password')
        // await adminPage.addVariableSubscription(data.product.name, data.product.price, 'Uncategorized', 'NYshop','size',['s','l','m'])
    }, timeout);

    it('admin can add external product', async () => {
        // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminLogin('admin', 'password')
        await adminPage.addExternalProduct(data.product.name, data.product.price, 'Uncategorized', 'NYshop')
    }, timeout);
    it('admin can add dokan subscription product', async () => {
        // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminLogin('admin', 'password')
        await adminPage.addDokanSubscription(data.dokanSubscription.name, data.dokanSubscription.price, 'Uncategorized', 'admin')
    }, timeout);

    it('admin can add auction product', async () => {
        // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminLogin('admin', 'password')
        await adminPage.addAuctionProduct(data.product.name, data.product.price, 'Uncategorized', 'NYshop')
    }, timeout);

    it('admin can add booking product', async () => {
        // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminLogin('admin', 'password')
        await adminPage.addBookingProduct(data.product.name, data.product.price, 'Uncategorized', 'NYshop')
    }, timeout);


    // it('admin can add categories', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.addCategory('Shirts')
    // }, timeout);

    // it('admin can add attributes', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.addAttributes('Color', ["Red", "Blue", "Black", "Yellow"])
    // }, timeout);


    // it('admin can add test settings', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.setWpSettings()
    //     await adminPage.setWoocommerceSettings()
    //     await adminPage.setPaymentSettings()
    //     await adminPage.setDokanSettings()
    // }, timeout);

    //settings

    // //tax settings
    // it('admin can set standard tax rate', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.addStandardTaxRate()
    // }, timeout);

    // //shipping settings
    // it('admin can set flat rate shipping', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.addStandardTaxRate()
    //     await adminPage.addShippingMethod('US', 'country:US', 'flat_rate', 'Flat rate')
    // }, timeout);
    // it('admin can set free shipping', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.addStandardTaxRate()
    //     await adminPage.addShippingMethod('US', 'country:US', 'free_shipping', 'Free shipping')
    // }, timeout);
    // it('admin can set local pickup shipping', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.addStandardTaxRate()
    //     await adminPage.addShippingMethod('US', 'country:US', 'local_pickup', 'Local pickup')
    // }, timeout);
    // it('admin can set table rate shipping', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.addStandardTaxRate()
    //     await adminPage.addShippingMethod('US', 'country:US', 'dokan_table_rate_shipping', 'Vendor Table Rate')
    // }, timeout);
    // it('admin can set  distance rate shipping', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.addStandardTaxRate()
    //     await adminPage.addShippingMethod('US', 'country:US', 'dokan_distance_rate_shipping', 'Vendor Distance Rate')
    // }, timeout);
    // it('admin can set vendor shipping', async () => {
    //     // await loginPage.adminLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminLogin('admin', 'password')
    //     await adminPage.goToWooCommerceSettings()
    //     await adminPage.addStandardTaxRate()
    //     await adminPage.addShippingMethod('US', 'country:US', 'dokan_vendor_shipping', 'Vendor Shipping')
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


    //dokan settings

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





});