// require('dotenv').config()
// const loginPage = require('../pages/login.js')
// const adminPage = require('../pages/admin.js')
// const vendorPage = require('../pages/vendor.js')
// const customerPage = require('../pages/customer.js')
// const data = require('../utils/testData.js')
// const { faker } = require('@faker-js/faker')
const helpers = require('../utils/helpers.js')
// const base = require('../pages/base.js')
// const timeout = process.env.TIME_OUT
// jest.retryTimes(process.env.RETRY_TIMES)

// describe('customer functionality test', () => {
//     // beforeAll(async () => {
//     // await loginPage.customerRegister(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//     // })
//     // afterAll(async () => {await browser.close()})
//     // beforeEach(async () => {})
//     // afterEach(async () => {await browser.close()})


//     it('customer register', async () => {
//         await customerPage.customerRegister(data.customerInfo.userEmail, data.customerInfo.password)
//         await customerPage.customerLogout()
//     }, timeout)

//     it('customer login', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//     }, timeout)

//     it('customer logout', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.customerLogout()
//     }, timeout)

//     it('customer become a vendor', async () => {
//         // await customerPage.customerRegister(data.customerInfo.userEmail, data.customerInfo.password)
//         await customerPage.customerRegister(faker.internet.email(), data.customerInfo.password)
//         await customerPage.customerBecomeVendor(data.vendorInfo.firstName, data.vendorInfo.lastName, data.vendorInfo.shopName, data.vendorInfo.street1, data.vendorInfo.phone, data.vendorInfo.companyName, data.vendorInfo.companyId, data.vendorInfo.vatNumber, data.vendorInfo.bankName, data.vendorInfo.bankIban)
//         await vendorPage.vendorSetupWizardChoice(true, data.vendorSetupWizard)
//     }, timeout)

//     it('customer become a wholesale customer', async () => {
//         // await customerPage.customerRegister(data.customerInfo.userEmail, data.customerInfo.password)
//         await customerPage.customerRegister(faker.internet.email(), data.customerInfo.password)
//         await customerPage.customerBecomeWholesaleCustomer()
//     }, timeout)

//     it('customer add customer details', async () => {
//         // await customerPage.customerRegister(data.customerInfo.userEmail, data.customerInfo.password)
//         await customerPage.customerRegister(faker.internet.email(), data.customerInfo.password)
//         await customerPage.addCustomerDetails(data.customerInfo.firstName, data.customerInfo.lastName, data.customerInfo.firstName, data.customerInfo.userEmail, data.customerInfo.password, data.customerInfo.password1)
//     }, timeout)

//     it('customer add billing details', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.addBillingAddress(data.customerInfo.firstName, data.customerInfo.lastName, data.customerInfo.companyName, data.customerInfo.companyId, data.customerInfo.vatNumber, data.customerInfo.bankName, data.customerInfo.bankIban, data.customerInfo.country, data.customerInfo.street1, data.customerInfo.street2, data.customerInfo.city, data.customerInfo.city, data.customerInfo.zipCode, data.customerInfo.phone, data.customerInfo.userEmail)
//     }, timeout)

//     it('customer add shipping details', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.addShippingAddress(data.customerInfo.firstName, data.customerInfo.lastName, data.customerInfo.companyName, data.customerInfo.country, data.customerInfo.street1, data.customerInfo.street2, data.customerInfo.city, data.customerInfo.city, data.customerInfo.zipCode)
//     }, timeout)

//     it('customer can buy product', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.goToShop()
//         await customerPage.addProductToCartFromShop('product1')
//         await customerPage.goToCartFromShop()
//         await customerPage.applyCoupon('VC_RJHHN')
//         await customerPage.goToCheckoutFromCart()
//         await customerPage.placeOrder()
//     }, timeout)

//     it('customer can review product', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.reviewProduct('product1', data.product.rating)
//     }, timeout)

//     it('customer can report product', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.reportProduct('product1', data.product.reportReason, data.product.reportReasonDescription)
//     }, timeout)

//     it('customer can enquire product', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.enquireProduct('product1', data.product.enquiryDetails)
//     }, timeout)

//     it('customer can search product', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.searchProduct('product1')
//     }, timeout)

//     it('customer can apply coupon', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.goToShop()
//         await customerPage.addProductToCartFromShop('product1')
//         await customerPage.goToCartFromShop()
//         await customerPage.applyCoupon('VC_RJHHN')
//     }, timeout)

//     it('customer can add product to cart', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.goToShop()
//         await customerPage.addProductToCartFromShop('product1')
//         await customerPage.goToCartFromShop()
//         await customerPage.goToCheckoutFromCart()
//         await customerPage.placeOrder()
//     }, timeout)

//     it('customer can search vendor', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.searchVendor(process.env.VENDOR)
//     }, timeout)

//     it('customer can follow vendor', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.followVendor(process.env.VENDOR)
//     }, timeout)

//     it('customer can review store', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.reviewStore(process.env.VENDOR, data.store.rating, data.store.storeReviewTitle, data.store.storeReviewMessage)
//     }, timeout)

//     it('customer can ask for get support ', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.askForGetSupport(process.env.VENDOR, data.customerInfo.getSupportSubject, data.customerInfo.getSupportMessage)
//     }, timeout)

//     it.skip('customer can add payment method', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         await customerPage.addPaymentMethod(data.card.strip.striptNon3D, data.card.strip.expiryDate, data.card.strip.cvc)
//         await customerPage.deletePaymentMethod()
//     }, timeout)

//     it.skip('customer can send return request ', async () => {
//         await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         let cOrderDetails = await customerPage.buyProduct(productName, false, true)
//         await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
//         await vendorPage.changeOrderStatus(cOrderDetails.orderNumber, data.orderStatus[1])
//         await customerPage.sendWarrantyRequest( cOrderDetails.orderNumber, 'product1', data.order.refundRequestType, data.order.refundRequestReasons, data.order.refundRequestDetails)
//     }, timeout)

//     it.only('customer can add product to cart', async () => {
//         // await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
//         // await customerPage.goToShop()
//         // await customerPage.addProductToCartFromShop('product1')
//         // await customerPage.goToCartFromShop()
//         // await customerPage.goToCheckoutFromCart()

//         // // let [orderId, subtotal, shipping, tax, paymentMethod, orderTotal] = await customerPage.placeOrder(true)
//         // console.log(orderId, subtotal, shipping, tax, paymentMethod, orderTotal)
//         // await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
//         // // let [orderId, store, orderTotal, vendorEarning, commission, gatewayFee, shipping, tax, orderStatus, date]= await adminPage.getOrderDetails(orderId)

//         let orderTotal = 105
//         let subtotal = 100
//         let tax = 5
//         let shipping = 20
//         let percent = helpers.percentage(subtotal, 5)
//         let calculatedTax = helpers.tax(subtotal)
//         let calculatedAdminCommission = helpers.adminCommission(subtotal, tax, shipping)
//         let calculatedVendorEarning = helpers.vendorEarning(orderTotal, calculatedAdminCommission, tax, shipping)
//         console.log(calculatedTax, calculatedAdminCommission, calculatedVendorEarning)
//     }, timeout)

// })






