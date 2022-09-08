const loginPage = require('../pages/login.js')
const vendorPage = require('../pages/vendor.js')
const customerPage = require('../pages/customer.js')
const data = require('../utils/testData.js')
const { faker } = require('@faker-js/faker')
jest.retryTimes(process.env.RETRY_TIMES) //TODO: update this

describe('customer functionality test', () => {
    // beforeAll(async () => {})
    // afterAll(async () => {})
    // beforeEach(async () => {})
    // afterEach(async () => {})


    it('customer register', async () => {
        await customerPage.customerRegister(data.customer.customerInfo)
        await loginPage.logout()
    })

    it('customer login', async () => {
        await loginPage.login(data.customer)
    })

    it('customer logout', async () => {
        await loginPage.login(data.customer)
        await loginPage.logout()
    })

    it('customer become a vendor', async () => {
        await customerPage.customerRegister(data.customer.customerInfo)
        await customerPage.customerBecomeVendor(data.customer.customerInfo)
        await vendorPage.vendorSetupWizard(false, data.vendorSetupWizard)
    })

    it('customer become a wholesale customer', async () => {
        await customerPage.customerRegister(data.customer.customerInfo)
        await customerPage.customerBecomeWholesaleCustomer()
    })

    it('customer add customer details', async () => {
        await customerPage.customerRegister(data.customer.customerInfo)
        await customerPage.addCustomerDetails(data.customer.customerInfo)
    })

    it('customer add billing details', async () => {
        await loginPage.login(data.customer)
        await customerPage.addBillingAddress(data.customer.customerInfo)
    })

    it('customer add shipping details', async () => {
        await loginPage.login(data.customer)
        await customerPage.addShippingAddress(data.customer.customerInfo)
    })

    it('customer search vendor', async () => {
        await loginPage.login(data.customer)
        await customerPage.searchVendor(data.predefined.vendorStores.vendor1)
    })

    it('customer search product', async () => {
        await loginPage.login(data.customer)
        await customerPage.searchProduct(data.predefined.simpleProduct.product1)
    })

    it('customer buy product', async () => {
        await loginPage.login(data.customer)
        await customerPage.clearCart()
        await customerPage.goToShop()
        await customerPage.addProductToCartFromShop(data.predefined.simpleProduct.product1)
        await customerPage.goToCartFromShop()
        await customerPage.goToCheckoutFromCart()
        await customerPage.placeOrder()
    })

    it('customer can review product', async () => {
        await loginPage.login(data.customer)
        await customerPage.reviewProduct(data.predefined.simpleProduct.product1, data.product.review)
    })

    it('customer can report product', async () => {
        await loginPage.login(data.customer)
        await customerPage.reportProduct(data.predefined.simpleProduct.product1, data.product.report)
    })

    it('customer can enquire product', async () => {
        await loginPage.login(data.customer)
        await customerPage.enquireProduct(data.predefined.simpleProduct.product1, data.product.enquiry)
    })

    it('customer can apply coupon', async () => {
        await loginPage.login(data.customer)
        await customerPage.clearCart()
        await customerPage.goToShop()
        await customerPage.addProductToCartFromShop(data.predefined.simpleProduct.product1)
        await customerPage.goToCartFromShop()
        await customerPage.applyCoupon(data.predefined.couponCode.coupon1)
    })

    it('customer can add product to cart', async () => {
        await loginPage.login(data.customer)
        await customerPage.clearCart()
        await customerPage.goToShop()
        await customerPage.addProductToCartFromShop(data.predefined.simpleProduct.product1)
        await customerPage.goToCartFromShop()
    })

    it('customer can follow vendor', async () => {
        await loginPage.login(data.customer)
        await customerPage.followVendor(data.predefined.vendorStores.vendor1)
    })

    it('customer can review store', async () => {
        await loginPage.login(data.customer)
        await customerPage.reviewStore(data.predefined.vendorStores.vendor1, data.store)
    })

    it('customer can ask for get support ', async () => {
        await loginPage.login(data.customer)
        await customerPage.askForGetSupport(data.predefined.vendorStores.vendor1, data.customer.customerInfo.getSupport)
    })

    it.skip('customer can send return request ', async () => {
        await loginPage.login(data.customer)
        let cOrderDetails = await customerPage.buyProduct(data.predefined.simpleProduct.product1, false, true)
        await loginPage.switchUser(data.vendor)
        await vendorPage.changeOrderStatus(cOrderDetails.orderNumber, data.orderStatus[1])
        await loginPage.switchUser(data.customer)
        await customerPage.sendWarrantyRequest(cOrderDetails.orderNumber, data.predefined.simpleProduct.product1, data.order)
    })

})






