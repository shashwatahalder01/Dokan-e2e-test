const loginPage = require('../pages/login.js')
const adminPage = require('../pages/admin.js')
const vendorPage = require('../pages/vendor.js')
const customerPage = require('../pages/customer.js')
const data = require('../utils/testData.js')
jest.retryTimes(process.env.RETRY_TIMES,{logErrorsBeforeRetry: true}) 

describe('Environment setup test', () => {
    // beforeAll(async () => {})
    // afterAll(async () => {await browser.close()})
    // beforeEach(async () => {})
    // afterEach(async () => {await browser.close()})

    // Admin Details 

    it.skip('admin check Active plugins ', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.checkActivePlugins(data.plugin)
    })

    it('admin check Active modules ', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.checkActiveModules()
    })

    it('admin set WpSettings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setWpSettings(data.wpSettings)
    })

    it('admin enable register password field', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.enablePasswordInputField(data.woocommerce)
    })

    it('admin set tax rate', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addStandardTaxRate(data.tax)
    })

    it('admin set currency options', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setCurrencyOptions(data.payment.currency)
    })

    it('admin set flat rate shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.flatRate)
    })

    it('admin set table rate shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.tableRateShipping)
    })

    it('admin set distance rate shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.distanceRateShipping)
    })

    it('admin set vendor shipping', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addShippingMethod(data.shipping.shippingMethods.vendorShipping)
    })

    it('admin set basic payments', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setupBasicPaymentMethods(data.payment)
    })

    it('admin add categories and attributes', async () => {
        await loginPage.adminLogin(data.admin)
        // add product categories
        await adminPage.addCategory(data.product.category.clothings)
        // add product attributes
        await adminPage.addAttributes(data.product.attribute.size)
    })

    it('admin add dokan subscription', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.addDokanSubscription({ ...data.product.vendorSubscription, ...data.predefined.vendorSubscription.nonRecurring })
    })

    it('admin set dokan general settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanGeneralSettings(data.dokanSettings.general)
    })

    it('admin set dokan selling settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanSellingSettings(data.dokanSettings.selling)
    })

    it('admin set dokan withdraw settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanWithdrawSettings(data.dokanSettings.withdraw)
    })


    it('admin set dokan page settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setPageSettings(data.dokanSettings.page)
    })

    it('admin set dokan appearance settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanAppearanceSettings(data.dokanSettings.appreance)
    })

    it('admin set dokan privacy policy settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanPrivacyPolicySettings(data.dokanSettings.privacyPolicy)
    })

    it('admin set dokan store support settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanStoreSupportSettings(data.dokanSettings.storeSupport)
    })

    it('admin set dokan rma settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanRmaSettings(data.dokanSettings.rma)
    })

    it('admin set dokan wholesale settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanWholesaleSettings(data.dokanSettings.wholesale)
    })

    it('admin set dokan eu compliance settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanEuComplianceSettings(data.dokanSettings.euCompliance)
    })

    it('admin set dokan delivery time settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanDeliveryTimeSettings(data.dokanSettings.deliveryTime)
    })

    it('admin set dokan product advertising settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanProductAdvertisingSettings(data.dokanSettings.productAdvertising)
    })

    it('admin set dokan geolocation settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanGeolocationSettings(data.dokanSettings.geolocation)
    })

    it('admin set dokan product report abuse settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanProductReportAbuseSettings(data.dokanSettings.productReportAbuse)
    })

    it('admin set dokan spmv settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanSpmvSettings(data.dokanSettings.spmv)
    })

    it('admin set dokan vendor subscription settings', async () => {
        await loginPage.adminLogin(data.admin)
        await adminPage.setDokanVendorSubscriptionSettings(data.dokanSettings.vendorSubscription)
    })

    // Vendor Details 

    it('add test vendor1', async () => {
        // Add Vendor1
        await vendorPage.vendorRegister({ ...data.vendor.vendorInfo, ...data.predefined.vendorInfo }, data.vendorSetupWizard)
    })

    it('add test vendor1 products', async () => {
        await loginPage.login(data.vendor)
        // Add Products
        await vendorPage.addSimpleProduct({ ...data.product.simple, ...data.predefined.simpleProduct.product1 })
    })

    it('add test vendor1 coupons', async () => {
        await loginPage.login(data.vendor)
        // Add Coupons
        await vendorPage.addCoupon({ ...data.coupon, ...data.predefined.coupon.coupon1 })
    })

    it('add test vendor1 address', async () => {
        await loginPage.login(data.vendor)
        await vendorPage.setStoreAddress(data.vendor.vendorInfo)
    })

    it('add test vendor1 rma settings', async () => {
        await loginPage.login(data.vendor)
        await vendorPage.setRmaSettings(data.vendor.rma)
    })

    it('admin add test vendor products ', async () => {
        await loginPage.switchUser(data.admin)
        await adminPage.addSimpleProduct({ ...data.product.simple, status: 'publish', stockStatus: false })
        await adminPage.addSimpleProduct({ ...data.product.simple, status: 'draft', stockStatus: false })
        await adminPage.addSimpleProduct({ ...data.product.simple, status: 'pending', stockStatus: false })
        await adminPage.addSimpleProduct({ ...data.product.simple, status: 'publish', stockStatus: true })
    })

    // Customer Details 

    it('add test customer1', async () => {
        await customerPage.customerRegister({ ...data.customer.customerInfo, ...data.predefined.customerInfo })
    })

    it('add test customer1 addresses', async () => {
        await loginPage.login(data.customer)
        await customerPage.addBillingAddress({ ...data.customer.customerInfo, ...data.predefined.customerInfo })
        await customerPage.addShippingAddress({ ...data.customer.customerInfo, ...data.predefined.customerInfo })
        await loginPage.logout()
    })

})