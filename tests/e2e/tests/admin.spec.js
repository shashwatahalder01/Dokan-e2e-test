const adminPage = require('../pages/admin.js')
const loginPage = require('../pages/login.js')
const data = require('../utils/testData.js')
jest.retryTimes(process.env.RETRY_TIMES) //TODO: add to jest config



describe('admin functionality test', () => {
    // beforeAll(async () => {
    //     let pages = await browser.pages();
    //     let page = pages[0]
    // })
    // afterAll(async () => {})
    // beforeEach(async () => {})
    // afterEach(async () => {})

    it('admin can login', async () => {
        await loginPage.adminLogin(data.admin)
    })

    it('admin can logout', async () => {
        await loginPage.adminLogin(data.admin)
        await loginPage.adminLogout()
    })

    it('admin can set dokan setup wizard', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanSetupWizard(data.dokanSetupWizard)
    })

    it('admin can add vendor', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addVendor(data.vendor.vendorInfo)

    })

    it('admin can add simple product', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addSimpleProduct(data.product.simple)
    })

    it.skip('admin can add variable product', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addVariableProduct(data.product.variable)
    })

    it('admin can add simple subscription ', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addSimpleSubscription(data.product.simpleSubscription)
    })

    it.skip('admin can add variable subscription ', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addVariableSubscription(data.product.variableSubscription)
    })

    it('admin can add external product', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addExternalProduct(data.product.external)
    })

    it('admin can add vendor subscription ', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addDokanSubscription(data.product.vendorSubscription)
    })

    it('admin can add auction product', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addAuctionProduct(data.product.auction)
    })

    it('admin can add booking product', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addBookingProduct(data.product.booking)
    })

    it('admin can add categories', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addCategory(data.product.category.clothings)
    })

    it('admin can add attributes', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addAttributes(data.product.attribute.size)
    })


    // settings

    // tax settings
    it('admin can set standard tax rate', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addStandardTaxRate(data.tax)
    })

    // shipping settings
    it('admin can set flat rate shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.flatRate)
    })

    it('admin can set free shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.freeShipping)     
    })

    it('admin can set local pickup shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.localPickup)
    })

    it('admin can set table rate shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.tableRateShipping)
    })

    it('admin can set distance rate shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.distanceRateShipping)
    })

    it('admin can set vendor shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.vendorShipping)
    })

    // payment

    it('admin can add basic payment methods', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setupBasicPaymentMethods(data.payment)
    })

    it('admin can add strip payment method', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setupStripeConnect(data.payment)
    })

    it('admin can add paypal marketplace payment method', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setupPaypalMarketPlace(data.payment)
    })

    it('admin can add mangopay payment method', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setupMangoPay(data.payment)
    })

    it('admin can add razorpay payment method', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setupRazorpay(data.payment)
    })

    it('admin can add strip express payment method', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setupStripeExpress(data.payment)
    })

    // dokan settings

    it('admin can set dokan general settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanGeneralSettings(data.dokanSettings.general)
    })

    it('admin can set dokan selling settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanSellingSettings(data.dokanSettings.selling)
    })

    it('admin can set dokan withdraw settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanWithdrawSettings(data.dokanSettings.withdraw)
    })

    it('admin can set dokan appearance settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanAppearanceSettings(data.dokanSettings.appreance)
    })

    it('admin can set dokan privacy policy settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanPrivacyPolicySettings(data.dokanSettings.privacyPolicy)
    })

    it('admin can set dokan store support settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanStoreSupportSettings(data.dokanSettings.storeSupport)
    })

    it('admin can set dokan rma settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanRmaSettings(data.dokanSettings.rma)
    })

    it('admin can set dokan wholesale settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanWholesaleSettings(data.dokanSettings.wholesale)
    })

    it('admin can set dokan eu compliance settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanEuComplianceSettings(data.dokanSettings.euCompliance)
    })

    it('admin can set dokan delivery time settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanDeliveryTimeSettings(data.dokanSettings.deliveryTime)
    })

    it('admin can set dokan product advertising settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanProductAdvertisingSettings(data.dokanSettings.productAdvertising)
    })

    it('admin can set dokan geolocation settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanGeolocationSettings(data.dokanSettings.geolocation)
    })

    it('admin can set dokan product report abuse settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanProductReportAbuseSettings(data.dokanSettings.productReportAbuse)
    })

    it('admin can set dokan spmv settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanSpmvSettings(data.dokanSettings.spmv)
    })

    it('admin can set dokan vendor subscription settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanVendorSubscriptionSettings(data.dokanSettings.vendorSubscription)
    })

})