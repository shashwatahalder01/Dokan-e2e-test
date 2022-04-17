require('dotenv').config()
const loginPage = require('../pages/login.js')
const adminPage = require('../pages/admin.js')
const vendorPage = require('../pages/vendor.js')
const customerPage = require('../pages/customer.js')
const base = require('../pages/base.js')
const data = require('../utils/testData.js')
const helpers = require('../utils/helpers.js')
const { faker } = require('@faker-js/faker')
const timeout = process.env.TIME_OUT
jest.retryTimes(process.env.RETRY_TIMES)


describe('refund functionality test', () => {
    // beforeAll(async () => {})
    // afterAll(async () => {await browser.close()})
    // beforeEach(async () => {})
    // afterEach(async () => {await browser.close()})

    it('refund through rma test', async () => {
        // let productName = data.product.name.simple
        let productName = 'product1'

        //create product
        // await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        // await vendorPage.addSimpleProduct(data.product.name.simple, data.product.price, data.product.category)

        // buy product
        // await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        let cOrderDetails = await customerPage.buyProduct(productName, false, true)

        //update order status
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        await vendorPage.changeOrderStatus(cOrderDetails.orderNumber, data.orderStatus[1])

        //send refund request 
        await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await customerPage.sendWarrantyRequest(cOrderDetails.orderNumber, productName, data.order.refundRequestType, data.order.refundRequestReasons, data.order.refundRequestDetails)

        //vendor approve rma request
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        await vendorPage.approveReturnRequest(cOrderDetails.orderNumber, productName)
        // await vendorPage.deleteReturnRequest(orderId)

        //admin approve refund request
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        await adminPage.approveRefundRequest(cOrderDetails.orderNumber, true)
    }, timeout)


    it('vendor refund test', async () => {
        // let productName = data.product.name.simple
        let productName = 'product1'

        //create product
        // await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        // await vendorPage.addSimpleProduct(productName, data.product.price, data.product.category)

        // buy product
        // await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        let cOrderDetails = await customerPage.buyProduct(productName, false, true)

        //refund order
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        await vendorPage.changeOrderStatus(cOrderDetails.orderNumber, data.orderStatus[1])
        await vendorPage.refundOrder(cOrderDetails.orderNumber, productName, true)

        // approve refund request
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        await adminPage.approveRefundRequest(cOrderDetails.orderNumber, true)
    }, timeout)

    it.only('calculation test', async () => {
        // let productName = data.product.name.simple
        let productName = 'product1'

        //create product
        // await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        // await vendorPage.addSimpleProduct(productName, data.product.price, data.product.category)

        //buy product
        // await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        let cOrderDetails = await customerPage.buyProduct(productName, false, true)

        //vendor order details
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        let aOrderDetails = await adminPage.getOrderDetails(cOrderDetails.orderNumber)

        //admin order details
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        let vOrderDetails = await vendorPage.getOrderDetails(cOrderDetails.orderNumber)
        // let vOrderDetails = await vendorPage.getOrderDetails('988')

        console.log(cOrderDetails, aOrderDetails, vOrderDetails)
        // console.log( vOrderDetails)

    }, timeout)
})