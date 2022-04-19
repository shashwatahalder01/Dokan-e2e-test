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
        let productName = 'p1_v3'
        // let productName = 'Small Wooden Table (Simple)'

        // create product
        // await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        // await vendorPage.addSimpleProduct(productName, data.product.price, data.product.category)

        // buy product
        // await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        let cOrderDetails0 = await customerPage.buyProduct(productName, false, true, 'stripeExpress', data.paymentDetails.stripExpress)
        let cOrderDetails = await customerPage.getOrderDetails(cOrderDetails0.orderNumber)
        console.log('cOrderDetails: ', cOrderDetails)

        // //vendor order details
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        let aOrderDetails = await adminPage.getOrderDetails(cOrderDetails.orderNumber)

        // //admin order details
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        let vOrderDetails = await vendorPage.getOrderDetails(cOrderDetails.orderNumber)

        console.log(cOrderDetails, aOrderDetails, vOrderDetails)

        let subtotal = cOrderDetails.subtotal
        let taxRate = Number(process.env.TAX_RATE)
        let commissionRate = Number(process.env.COMMISSION_RATE)
        let calculatedTax, shipping, gatewayFee;

        cOrderDetails.hasOwnProperty('tax') ? calculatedTax = helpers.tax(taxRate, subtotal, shipping) : calculatedTax = 0
        cOrderDetails.hasOwnProperty('shippingCost') ? shipping = cOrderDetails.shippingCost : shipping = 0
        aOrderDetails.hasOwnProperty('gatewayFee') ? gatewayFee = aOrderDetails.gatewayFee : gatewayFee = 0


        let calculatedOrderTotal = helpers.orderTotal(subtotal, calculatedTax, shipping)
        let calculatedAdminCommission = helpers.adminCommission(subtotal, commissionRate, calculatedTax, shipping, gatewayFee)
        let calculatedVendorEarning = helpers.vendorEarning(subtotal, calculatedAdminCommission, calculatedTax, shipping, gatewayFee)
        console.log(calculatedTax, calculatedOrderTotal, calculatedAdminCommission, calculatedVendorEarning)


        console.log(`orderNumber :  c:${cOrderDetails.orderNumber}, a:${aOrderDetails.orderNumber}, v:${vOrderDetails.orderNumber}`)
        console.log(`orderStatus :  c:${cOrderDetails.orderStatus}, a:${aOrderDetails.orderStatus}, v:${vOrderDetails.orderStatus}`)
        console.log(`orderStatus :  c:${cOrderDetails.orderDate}, a:${aOrderDetails.orderDate}, v:${vOrderDetails.orderDate}`)
        console.log(`subtotal :  c:${cOrderDetails.subtotal}`)
        if (cOrderDetails.shippingMethod) console.log(`shipping :  c:${cOrderDetails.shippingMethod}, v:${vOrderDetails.shippingMethod}`)
        if (cOrderDetails.shippingCost) console.log(`shipping :  c:${cOrderDetails.shippingCost}, a:${aOrderDetails.shippingCost}, v:${vOrderDetails.shippingCost}`)
        if (cOrderDetails.tax) console.log(`tax : cal:${calculatedTax}, c:${cOrderDetails.tax}, a:${aOrderDetails.tax}, v:${vOrderDetails.tax}`)
        console.log(`orderTotal : cal:${calculatedOrderTotal}, a:${aOrderDetails.orderTotal},`)
        console.log(`commission : cal:${calculatedAdminCommission}, a:${aOrderDetails.commission}`)
        console.log(`vendorEarning : cal:${calculatedVendorEarning}, a:${aOrderDetails.vendorEarning}, v:${vOrderDetails.vendorEarning}`)

        
        expect(cOrderDetails.orderNumber === aOrderDetails.orderNumber && cOrderDetails.orderNumber === vOrderDetails.orderNumber).toBeTruthy()
        expect(cOrderDetails.orderStatus === aOrderDetails.orderStatus && cOrderDetails.orderStatus === vOrderDetails.orderStatus).toBeTruthy()
        // expect(cOrderDetails.orderDate === aOrderDetails.orderDate && cOrderDetails.orderDate === vOrderDetails.orderDate).toBeTruthy()
        if (cOrderDetails.tax) expect(calculatedTax === cOrderDetails.tax && calculatedTax === aOrderDetails.tax && calculatedTax === vOrderDetails.tax).toBeTruthy()
        if (cOrderDetails.shippingMethod) expect(cOrderDetails.shippingMethod === vOrderDetails.shippingMethod).toBeTruthy()
        if (cOrderDetails.shippingCost) expect(cOrderDetails.shippingCost === aOrderDetails.shippingCost && cOrderDetails.shippingCost === vOrderDetails.shippingCost).toBeTruthy()
        expect(calculatedOrderTotal === cOrderDetails.orderTotal && calculatedOrderTotal === aOrderDetails.orderTotal && calculatedOrderTotal === vOrderDetails.orderTotal).toBeTruthy()
        expect(calculatedAdminCommission === aOrderDetails.commission).toBeTruthy()
        expect(calculatedVendorEarning === aOrderDetails.vendorEarning && calculatedVendorEarning === vOrderDetails.vendorEarning).toBeTruthy()

    }, timeout)
})