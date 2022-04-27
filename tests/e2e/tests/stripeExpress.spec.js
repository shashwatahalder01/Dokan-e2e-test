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


describe('dokan calculation functionality test', () => {
    // beforeAll(async () => {})
    // afterAll(async () => {await browser.close()})
    // beforeEach(async () => {})
    // afterEach(async () => {await browser.close()})

    it('refund through rma test', async () => { //TODO: add commission and vendor earning impact on refund
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


    it('vendor refund test', async () => { //TODO: add commission and vendor earning impact on refund
        // let productName = data.product.name.simple
        let productName = 'product1'

        //create product
        // await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        // await vendorPage.addSimpleProduct(productName, data.product.price, data.product.category)

        // buy product
        // await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        let cOrderDetails = await customerPage.buyProduct(productName, false, true)

        //getTotalAdminCommission
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        let previousTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //getTotalVendorEarning
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        let previousTotalVendorEarning = await vendorPage.getTotalVendorEarning()

        //refund order
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        await vendorPage.changeOrderStatus(cOrderDetails.orderNumber, data.orderStatus[1])
        await vendorPage.refundOrder(cOrderDetails.orderNumber, productName, true)

        // approve refund request
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        await adminPage.approveRefundRequest(cOrderDetails.orderNumber, true)

        //vendor details
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //getTotalVendorEarning
        let newTotalVendorEarning = await vendorPage.getTotalVendorEarning()
        //vendor Earning added
        let vendorEarningRefunded = helpers.roundToTwo(previousTotalVendorEarning - newTotalVendorEarning)

        //admin details
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        //getTotalAdminCommission
        let newTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //commission added
        let commissionRefunded = helpers.roundToTwo(previousTotalAdminCommission - newTotalAdminCommission)

        console.log(previousTotalAdminCommission, previousTotalVendorEarning)
        console.log(newTotalAdminCommission, newTotalVendorEarning)
        console.log(commissionRefunded, vendorEarningRefunded)


    }, timeout)


    it('calculation test without tax-shipping ', async () => {

        await loginPage.adminLogin(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        await adminPage.enableTax(false)
        await adminPage.enableShipping(false)

        let productName = data.product.name.simple
        // let productName = 'p1_v3'
        // let productName = 'p2_v3'

        // create product
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        await vendorPage.addSimpleProduct(productName, data.product.price, data.product.category)

        //getTotalAdminCommission
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        let previousTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //getTotalVendorEarning
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        let previousTotalVendorEarning = await vendorPage.getTotalVendorEarning()


        // buy product
        await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        let cOrderDetails0 = await customerPage.buyProduct(productName, false, true, 'stripeExpress', data.paymentDetails.stripExpress)
        let cOrderDetails = await customerPage.getOrderDetails(cOrderDetails0.orderNumber)

        //vendor details
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //getTotalVendorEarning
        let newTotalVendorEarning = await vendorPage.getTotalVendorEarning()
        //vendor Earning added
        let vendorEarningAdded = helpers.roundToTwo(newTotalVendorEarning - previousTotalVendorEarning)
        //vendor order details
        let vOrderDetails = await vendorPage.getOrderDetails(cOrderDetails.orderNumber)

        //admin details
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        //getTotalAdminCommission
        let newTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //commission added
        let commissionAdded = helpers.roundToTwo(newTotalAdminCommission - previousTotalAdminCommission)
        //admin order details
        let aOrderDetails = await adminPage.getOrderDetails(cOrderDetails.orderNumber)


        //all order details
        console.log('cOrderDetails: ', cOrderDetails)
        console.log('aOrderDetails: ', aOrderDetails)
        console.log('vOrderDetails: ', vOrderDetails)

        // commission & vendor earning added
        console.log('previousTotalAdminCommission:', previousTotalAdminCommission, 'previousTotalVendorEarning:', previousTotalVendorEarning)
        console.log('newTotalAdminCommission:', newTotalAdminCommission, 'newTotalVendorEarning:', newTotalVendorEarning)
        console.log('commissionAdded:', commissionAdded, 'vendorEarningAdded:', vendorEarningAdded)

        let subtotal = cOrderDetails.subtotal
        let taxRate = Number(process.env.TAX_RATE)
        let commissionRate = Number(process.env.COMMISSION_RATE)
        let calculatedTax, shipping, gatewayFee, orderDiscount, quantityDiscount, discount, totalDiscount, subTotalWithoutDiscount

        
        cOrderDetails.hasOwnProperty('shippingCost') ? shipping = cOrderDetails.shippingCost : shipping = 0
        cOrderDetails.hasOwnProperty('orderDiscount') ? orderDiscount = cOrderDetails.orderDiscount : orderDiscount = 0
        cOrderDetails.hasOwnProperty('quantityDiscount') ? quantityDiscount = cOrderDetails.quantityDiscount : quantityDiscount = 0
        cOrderDetails.hasOwnProperty('discount') ? discount = cOrderDetails.discount : discount = 0
        aOrderDetails.hasOwnProperty('gatewayFee') ? gatewayFee = aOrderDetails.gatewayFee : gatewayFee = 0
        totalDiscount = helpers.roundToTwo(orderDiscount + quantityDiscount + discount)
        subTotalWithoutDiscount = helpers.roundToTwo(subtotal - totalDiscount)
        cOrderDetails.hasOwnProperty('tax') ? calculatedTax = helpers.tax(taxRate, subTotalWithoutDiscount, shipping) : calculatedTax = 0


        let calculatedOrderTotal = helpers.orderTotal(subTotalWithoutDiscount, calculatedTax, shipping)
        let calculatedAdminCommission = helpers.adminCommission(subTotalWithoutDiscount, commissionRate, calculatedTax, shipping, gatewayFee)
        let calculatedVendorEarning = helpers.vendorEarning(subTotalWithoutDiscount, calculatedAdminCommission, calculatedTax, shipping, gatewayFee)
        console.log('calculated Data:', 'tax:', calculatedTax, 'orderTotal:', calculatedOrderTotal, 'commission:', calculatedAdminCommission, 'vendorEarning', calculatedVendorEarning)

        let commissionGatewayFee = helpers.roundToTwo(aOrderDetails.commission + gatewayFee)
        let calculatedCommissionGatewayFee = helpers.roundToTwo(calculatedAdminCommission + gatewayFee)

        //all assertions
        console.log(`orderNumber :  c:${cOrderDetails.orderNumber}, a:${aOrderDetails.orderNumber}, v:${vOrderDetails.orderNumber}`)
        console.log(`orderStatus :  c:${cOrderDetails.orderStatus}, a:${aOrderDetails.orderStatus}, v:${vOrderDetails.orderStatus}`)
        console.log(`orderDate :  c:${cOrderDetails.orderDate}, a:${aOrderDetails.orderDate}, v:${vOrderDetails.orderDate}`)
        console.log(`subtotal :  c:${cOrderDetails.subtotal}`)
        console.log(`totalDiscount :  ${totalDiscount}, orderDiscount:${orderDiscount}, quantityDiscount:${quantityDiscount}, discount:${discount}`)
        console.log(`subTotalWithoutDiscount : ${subTotalWithoutDiscount}`)
        if (cOrderDetails.shippingMethod) console.log(`shipping :  c:${cOrderDetails.shippingMethod}, v:${vOrderDetails.shippingMethod}`)
        if (cOrderDetails.shippingCost) console.log(`shipping :  c:${cOrderDetails.shippingCost}, a:${aOrderDetails.shippingCost}, v:${vOrderDetails.shippingCost}`)
        if (cOrderDetails.tax) console.log(`tax : cal:${calculatedTax}, c:${cOrderDetails.tax}, a:${aOrderDetails.tax}, v:${vOrderDetails.tax}`)
        console.log(`orderTotal : cal:${calculatedOrderTotal}, c:${cOrderDetails.orderTotal}, a:${aOrderDetails.orderTotal}, v:${vOrderDetails.orderTotal}`)
        console.log(`commission : cal:${calculatedAdminCommission}, a:${aOrderDetails.commission}`)
        console.log(`vendorEarning : cal:${calculatedVendorEarning}, a:${aOrderDetails.vendorEarning}, v:${vOrderDetails.vendorEarning}`)
        console.log(`commissionAdded : fromTotalAdminCommission:${commissionAdded}, fromCalculation:${calculatedCommissionGatewayFee} addedCommission:${commissionGatewayFee}, commission:${aOrderDetails.commission}  gatewayFee:${gatewayFee}`)
        console.log(`vendorEarningAdded : fromTotalVendorEarning:${vendorEarningAdded}, addedVendorEarning:${vOrderDetails.vendorEarning}`)


        expect(cOrderDetails.orderNumber === aOrderDetails.orderNumber && cOrderDetails.orderNumber === vOrderDetails.orderNumber).toBeTruthy()
        expect(cOrderDetails.orderStatus === aOrderDetails.orderStatus && cOrderDetails.orderStatus === vOrderDetails.orderStatus).toBeTruthy()
        // expect(cOrderDetails.orderDate === aOrderDetails.orderDate && cOrderDetails.orderDate === vOrderDetails.orderDate).toBeTruthy()
        if (cOrderDetails.tax) expect(calculatedTax === cOrderDetails.tax && calculatedTax === aOrderDetails.tax && calculatedTax === vOrderDetails.tax).toBeTruthy()
        if (cOrderDetails.shippingMethod) expect(cOrderDetails.shippingMethod === vOrderDetails.shippingMethod).toBeTruthy()
        if (cOrderDetails.shippingCost) expect(cOrderDetails.shippingCost === aOrderDetails.shippingCost && cOrderDetails.shippingCost === vOrderDetails.shippingCost).toBeTruthy()
        expect(calculatedOrderTotal === cOrderDetails.orderTotal && calculatedOrderTotal === aOrderDetails.orderTotal && calculatedOrderTotal === vOrderDetails.orderTotal).toBeTruthy()
        expect(calculatedAdminCommission === aOrderDetails.commission).toBeTruthy()
        expect(calculatedVendorEarning === aOrderDetails.vendorEarning && calculatedVendorEarning === vOrderDetails.vendorEarning).toBeTruthy()
        expect(commissionAdded === commissionGatewayFee).toBeTruthy()
        expect(vendorEarningAdded === vOrderDetails.vendorEarning).toBeTruthy()
    }, timeout)

    it('calculation test with tax', async () => {

        await loginPage.adminLogin(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        await adminPage.enableTax(true)
        await adminPage.enableShipping(false)

        let productName = data.product.name.simple
        // let productName = 'p1_v3'
        // let productName = 'Small Wooden Table (Simple)'

        // create product
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        await vendorPage.addSimpleProduct(productName, data.product.price, data.product.category)

        //getTotalAdminCommission
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        let previousTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //getTotalVendorEarning
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        let previousTotalVendorEarning = await vendorPage.getTotalVendorEarning()


        // buy product
        await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        let cOrderDetails0 = await customerPage.buyProduct(productName, false, true, 'stripeExpress', data.paymentDetails.stripExpress)
        let cOrderDetails = await customerPage.getOrderDetails(cOrderDetails0.orderNumber)

        //vendor details
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //getTotalVendorEarning
        let newTotalVendorEarning = await vendorPage.getTotalVendorEarning()
        //vendor Earning added
        let vendorEarningAdded = helpers.roundToTwo(newTotalVendorEarning - previousTotalVendorEarning)
        //vendor order details
        let vOrderDetails = await vendorPage.getOrderDetails(cOrderDetails.orderNumber)

        //admin details
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        //getTotalAdminCommission
        let newTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //commission added
        let commissionAdded = helpers.roundToTwo(newTotalAdminCommission - previousTotalAdminCommission)
        //admin order details
        let aOrderDetails = await adminPage.getOrderDetails(cOrderDetails.orderNumber)

        //all order details
        console.log('cOrderDetails: ', cOrderDetails)
        console.log('aOrderDetails: ', aOrderDetails)
        console.log('vOrderDetails: ', vOrderDetails)

        // commission & vendor earning added
        console.log('previousTotalAdminCommission:', previousTotalAdminCommission, 'previousTotalVendorEarning:', previousTotalVendorEarning)
        console.log('newTotalAdminCommission:', newTotalAdminCommission, 'newTotalVendorEarning:', newTotalVendorEarning)
        console.log('commissionAdded:', commissionAdded, 'vendorEarningAdded:', vendorEarningAdded)

        let subtotal = cOrderDetails.subtotal
        let taxRate = Number(process.env.TAX_RATE)
        let commissionRate = Number(process.env.COMMISSION_RATE)
        let calculatedTax, shipping, gatewayFee, orderDiscount, quantityDiscount, discount, totalDiscount, subTotalWithoutDiscount


        cOrderDetails.hasOwnProperty('shippingCost') ? shipping = cOrderDetails.shippingCost : shipping = 0
        cOrderDetails.hasOwnProperty('orderDiscount') ? orderDiscount = cOrderDetails.orderDiscount : orderDiscount = 0
        cOrderDetails.hasOwnProperty('quantityDiscount') ? quantityDiscount = cOrderDetails.quantityDiscount : quantityDiscount = 0
        cOrderDetails.hasOwnProperty('discount') ? discount = cOrderDetails.discount : discount = 0
        aOrderDetails.hasOwnProperty('gatewayFee') ? gatewayFee = aOrderDetails.gatewayFee : gatewayFee = 0
        totalDiscount = helpers.roundToTwo(orderDiscount + quantityDiscount + discount)
        subTotalWithoutDiscount = helpers.roundToTwo(subtotal - totalDiscount)
        cOrderDetails.hasOwnProperty('tax') ? calculatedTax = helpers.tax(taxRate, subTotalWithoutDiscount, shipping) : calculatedTax = 0


        let calculatedOrderTotal = helpers.orderTotal(subTotalWithoutDiscount, calculatedTax, shipping)
        let calculatedAdminCommission = helpers.adminCommission(subTotalWithoutDiscount, commissionRate, calculatedTax, shipping, gatewayFee)
        let calculatedVendorEarning = helpers.vendorEarning(subTotalWithoutDiscount, calculatedAdminCommission, calculatedTax, shipping, gatewayFee)
        console.log('calculated Data:', 'tax:', calculatedTax, 'orderTotal:', calculatedOrderTotal, 'commission:', calculatedAdminCommission, 'vendorEarning', calculatedVendorEarning)

        let commissionGatewayFee = helpers.roundToTwo(aOrderDetails.commission + gatewayFee)
        let calculatedCommissionGatewayFee = helpers.roundToTwo(calculatedAdminCommission + gatewayFee)

        //all assertions
        console.log(`orderNumber :  c:${cOrderDetails.orderNumber}, a:${aOrderDetails.orderNumber}, v:${vOrderDetails.orderNumber}`)
        console.log(`orderStatus :  c:${cOrderDetails.orderStatus}, a:${aOrderDetails.orderStatus}, v:${vOrderDetails.orderStatus}`)
        console.log(`orderDate :  c:${cOrderDetails.orderDate}, a:${aOrderDetails.orderDate}, v:${vOrderDetails.orderDate}`)
        console.log(`subtotal :  c:${cOrderDetails.subtotal}`)
        console.log(`totalDiscount :  ${totalDiscount}, orderDiscount:${orderDiscount}, quantityDiscount:${quantityDiscount}, discount:${discount}`)
        console.log(`subTotalWithoutDiscount : ${subTotalWithoutDiscount}`)
        if (cOrderDetails.shippingMethod) console.log(`shipping :  c:${cOrderDetails.shippingMethod}, v:${vOrderDetails.shippingMethod}`)
        if (cOrderDetails.shippingCost) console.log(`shipping :  c:${cOrderDetails.shippingCost}, a:${aOrderDetails.shippingCost}, v:${vOrderDetails.shippingCost}`)
        if (cOrderDetails.tax) console.log(`tax : cal:${calculatedTax}, c:${cOrderDetails.tax}, a:${aOrderDetails.tax}, v:${vOrderDetails.tax}`)
        console.log(`orderTotal : cal:${calculatedOrderTotal}, c:${cOrderDetails.orderTotal}, a:${aOrderDetails.orderTotal}, v:${vOrderDetails.orderTotal}`)
        console.log(`commission : cal:${calculatedAdminCommission}, a:${aOrderDetails.commission}`)
        console.log(`vendorEarning : cal:${calculatedVendorEarning}, a:${aOrderDetails.vendorEarning}, v:${vOrderDetails.vendorEarning}`)
        console.log(`commissionAdded : fromTotalAdminCommission:${commissionAdded}, fromCalculation:${calculatedCommissionGatewayFee} addedCommission:${commissionGatewayFee}, commission:${aOrderDetails.commission}  gatewayFee:${gatewayFee}`)
        console.log(`vendorEarningAdded : fromTotalVendorEarning:${vendorEarningAdded}, addedVendorEarning:${vOrderDetails.vendorEarning}`)


        expect(cOrderDetails.orderNumber === aOrderDetails.orderNumber && cOrderDetails.orderNumber === vOrderDetails.orderNumber).toBeTruthy()
        expect(cOrderDetails.orderStatus === aOrderDetails.orderStatus && cOrderDetails.orderStatus === vOrderDetails.orderStatus).toBeTruthy()
        // expect(cOrderDetails.orderDate === aOrderDetails.orderDate && cOrderDetails.orderDate === vOrderDetails.orderDate).toBeTruthy()
        if (cOrderDetails.tax) expect(calculatedTax === cOrderDetails.tax && calculatedTax === aOrderDetails.tax && calculatedTax === vOrderDetails.tax).toBeTruthy()
        if (cOrderDetails.shippingMethod) expect(cOrderDetails.shippingMethod === vOrderDetails.shippingMethod).toBeTruthy()
        if (cOrderDetails.shippingCost) expect(cOrderDetails.shippingCost === aOrderDetails.shippingCost && cOrderDetails.shippingCost === vOrderDetails.shippingCost).toBeTruthy()
        expect(calculatedOrderTotal === cOrderDetails.orderTotal && calculatedOrderTotal === aOrderDetails.orderTotal && calculatedOrderTotal === vOrderDetails.orderTotal).toBeTruthy()
        expect(calculatedAdminCommission === aOrderDetails.commission).toBeTruthy()
        expect(calculatedVendorEarning === aOrderDetails.vendorEarning && calculatedVendorEarning === vOrderDetails.vendorEarning).toBeTruthy()
        expect(commissionAdded === commissionGatewayFee).toBeTruthy()
        expect(vendorEarningAdded === vOrderDetails.vendorEarning).toBeTruthy()

    }, timeout)


    it.only('calculation test with tax-shipping', async () => {

        await loginPage.adminLogin(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        await adminPage.enableTax(true)
        await adminPage.enableShipping(true)

        let productName = data.product.name.simple
        // let productName = 'p1_v3'
        // let productName = 'Small Wooden Table (Simple)'

        // create product
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        await vendorPage.addSimpleProduct(productName, data.product.price, data.product.category)

        //getTotalAdminCommission
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        let previousTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //getTotalVendorEarning
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        let previousTotalVendorEarning = await vendorPage.getTotalVendorEarning()


        // buy product
        await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        let cOrderDetails0 = await customerPage.buyProduct(productName, false, true, 'stripeExpress', data.paymentDetails.stripExpress)
        let cOrderDetails = await customerPage.getOrderDetails(cOrderDetails0.orderNumber)

        //vendor details
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //getTotalVendorEarning
        let newTotalVendorEarning = await vendorPage.getTotalVendorEarning()
        //vendor Earning added
        let vendorEarningAdded = helpers.roundToTwo(newTotalVendorEarning - previousTotalVendorEarning)
        //vendor order details
        let vOrderDetails = await vendorPage.getOrderDetails(cOrderDetails.orderNumber)

        //admin details
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        //getTotalAdminCommission
        let newTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //commission added
        let commissionAdded = helpers.roundToTwo(newTotalAdminCommission - previousTotalAdminCommission)
        //admin order details
        let aOrderDetails = await adminPage.getOrderDetails(cOrderDetails.orderNumber)


        //all order details
        console.log('cOrderDetails: ', cOrderDetails)
        console.log('aOrderDetails: ', aOrderDetails)
        console.log('vOrderDetails: ', vOrderDetails)

        // commission & vendor earning added
        console.log('previousTotalAdminCommission:', previousTotalAdminCommission, 'previousTotalVendorEarning:', previousTotalVendorEarning)
        console.log('newTotalAdminCommission:', newTotalAdminCommission, 'newTotalVendorEarning:', newTotalVendorEarning)
        console.log('commissionAdded:', commissionAdded, 'vendorEarningAdded:', vendorEarningAdded)

        let subtotal = cOrderDetails.subtotal
        let taxRate = Number(process.env.TAX_RATE)
        let commissionRate = Number(process.env.COMMISSION_RATE)
        let calculatedTax, shipping, gatewayFee, orderDiscount, quantityDiscount, discount, totalDiscount, subTotalWithoutDiscount

  
        cOrderDetails.hasOwnProperty('shippingCost') ? shipping = cOrderDetails.shippingCost : shipping = 0
        cOrderDetails.hasOwnProperty('orderDiscount') ? orderDiscount = cOrderDetails.orderDiscount : orderDiscount = 0
        cOrderDetails.hasOwnProperty('quantityDiscount') ? quantityDiscount = cOrderDetails.quantityDiscount : quantityDiscount = 0
        cOrderDetails.hasOwnProperty('discount') ? discount = cOrderDetails.discount : discount = 0
        aOrderDetails.hasOwnProperty('gatewayFee') ? gatewayFee = aOrderDetails.gatewayFee : gatewayFee = 0
        totalDiscount = helpers.roundToTwo(orderDiscount + quantityDiscount + discount)
        subTotalWithoutDiscount = helpers.roundToTwo(subtotal - totalDiscount)
        cOrderDetails.hasOwnProperty('tax') ? calculatedTax = helpers.tax(taxRate, subTotalWithoutDiscount, shipping) : calculatedTax = 0


        let calculatedOrderTotal = helpers.orderTotal(subTotalWithoutDiscount, calculatedTax, shipping)
        let calculatedAdminCommission = helpers.adminCommission(subTotalWithoutDiscount, commissionRate, calculatedTax, shipping, gatewayFee)
        let calculatedVendorEarning = helpers.vendorEarning(subTotalWithoutDiscount, calculatedAdminCommission, calculatedTax, shipping, gatewayFee)
        console.log('calculated Data:', 'tax:', calculatedTax, 'orderTotal:', calculatedOrderTotal, 'commission:', calculatedAdminCommission, 'vendorEarning', calculatedVendorEarning)

        let commissionGatewayFee = helpers.roundToTwo(aOrderDetails.commission + gatewayFee)
        let calculatedCommissionGatewayFee = helpers.roundToTwo(calculatedAdminCommission + gatewayFee)

        //all assertions
        console.log(`orderNumber :  c:${cOrderDetails.orderNumber}, a:${aOrderDetails.orderNumber}, v:${vOrderDetails.orderNumber}`)
        console.log(`orderStatus :  c:${cOrderDetails.orderStatus}, a:${aOrderDetails.orderStatus}, v:${vOrderDetails.orderStatus}`)
        console.log(`orderDate :  c:${cOrderDetails.orderDate}, a:${aOrderDetails.orderDate}, v:${vOrderDetails.orderDate}`)
        console.log(`subtotal :  c:${cOrderDetails.subtotal}`)
        console.log(`totalDiscount :  ${totalDiscount}, orderDiscount:${orderDiscount}, quantityDiscount:${quantityDiscount}, discount:${discount}`)
        console.log(`subTotalWithoutDiscount : ${subTotalWithoutDiscount}`)
        if (cOrderDetails.shippingMethod) console.log(`shipping :  c:${cOrderDetails.shippingMethod}, v:${vOrderDetails.shippingMethod}`)
        if (cOrderDetails.shippingCost) console.log(`shipping :  c:${cOrderDetails.shippingCost}, a:${aOrderDetails.shippingCost}, v:${vOrderDetails.shippingCost}`)
        if (cOrderDetails.tax) console.log(`tax : cal:${calculatedTax}, c:${cOrderDetails.tax}, a:${aOrderDetails.tax}, v:${vOrderDetails.tax}`)
        console.log(`orderTotal : cal:${calculatedOrderTotal}, c:${cOrderDetails.orderTotal}, a:${aOrderDetails.orderTotal}, v:${vOrderDetails.orderTotal}`)
        console.log(`commission : cal:${calculatedAdminCommission}, a:${aOrderDetails.commission}`)
        console.log(`vendorEarning : cal:${calculatedVendorEarning}, a:${aOrderDetails.vendorEarning}, v:${vOrderDetails.vendorEarning}`)
        console.log(`commissionAdded : fromTotalAdminCommission:${commissionAdded}, fromCalculation:${calculatedCommissionGatewayFee} addedCommission:${commissionGatewayFee}, commission:${aOrderDetails.commission}  gatewayFee:${gatewayFee}`)
        console.log(`vendorEarningAdded : fromTotalVendorEarning:${vendorEarningAdded}, addedVendorEarning:${vOrderDetails.vendorEarning}`)


        expect(cOrderDetails.orderNumber === aOrderDetails.orderNumber && cOrderDetails.orderNumber === vOrderDetails.orderNumber).toBeTruthy()
        expect(cOrderDetails.orderStatus === aOrderDetails.orderStatus && cOrderDetails.orderStatus === vOrderDetails.orderStatus).toBeTruthy()
        // expect(cOrderDetails.orderDate === aOrderDetails.orderDate && cOrderDetails.orderDate === vOrderDetails.orderDate).toBeTruthy()
        if (cOrderDetails.tax) expect(calculatedTax === cOrderDetails.tax && calculatedTax === aOrderDetails.tax && calculatedTax === vOrderDetails.tax).toBeTruthy()
        if (cOrderDetails.shippingMethod) expect(cOrderDetails.shippingMethod === vOrderDetails.shippingMethod).toBeTruthy()
        if (cOrderDetails.shippingCost) expect(cOrderDetails.shippingCost === aOrderDetails.shippingCost && cOrderDetails.shippingCost === vOrderDetails.shippingCost).toBeTruthy()
        expect(calculatedOrderTotal === cOrderDetails.orderTotal && calculatedOrderTotal === aOrderDetails.orderTotal && calculatedOrderTotal === vOrderDetails.orderTotal).toBeTruthy()
        expect(calculatedAdminCommission === aOrderDetails.commission).toBeTruthy()
        expect(calculatedVendorEarning === aOrderDetails.vendorEarning && calculatedVendorEarning === vOrderDetails.vendorEarning).toBeTruthy()
        expect(commissionAdded === commissionGatewayFee).toBeTruthy()
        expect(vendorEarningAdded === vOrderDetails.vendorEarning).toBeTruthy()

    }, timeout)

    it('calculation test with tax-shipping-coupon', async () => {

        await loginPage.adminLogin(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        await adminPage.enableTax(true)
        await adminPage.enableShipping(true)
        let couponCode = 'c_v3'

        // let productName = data.product.name.simple
        let productName = 'p1_v3'
        // let productName = 'Small Wooden Table (Simple)'

        // create product
        // await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        // await vendorPage.addSimpleProduct(productName, data.product.price, data.product.category)

        //getTotalAdminCommission
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        let previousTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //getTotalVendorEarning
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        let previousTotalVendorEarning = await vendorPage.getTotalVendorEarning()


        // buy product
        await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        let cOrderDetails0 = await customerPage.buyProduct(productName, couponCode, true, 'stripeExpress', data.paymentDetails.stripExpress)
        let cOrderDetails = await customerPage.getOrderDetails(cOrderDetails0.orderNumber)

        //vendor details
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //getTotalVendorEarning
        let newTotalVendorEarning = await vendorPage.getTotalVendorEarning()
        //vendor Earning added
        let vendorEarningAdded = helpers.roundToTwo(newTotalVendorEarning - previousTotalVendorEarning)
        //vendor order details
        let vOrderDetails = await vendorPage.getOrderDetails(cOrderDetails.orderNumber)

        //admin details
        await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
        //getTotalAdminCommission
        let newTotalAdminCommission = await adminPage.getTotalAdminCommission()
        //commission added
        let commissionAdded = helpers.roundToTwo(newTotalAdminCommission - previousTotalAdminCommission)
        //admin order details
        let aOrderDetails = await adminPage.getOrderDetails(cOrderDetails.orderNumber)


        //all order details
        console.log('cOrderDetails: ', cOrderDetails)
        console.log('aOrderDetails: ', aOrderDetails)
        console.log('vOrderDetails: ', vOrderDetails)

        // commission & vendor earning added
        console.log('previousTotalAdminCommission:', previousTotalAdminCommission, 'previousTotalVendorEarning:', previousTotalVendorEarning)
        console.log('newTotalAdminCommission:', newTotalAdminCommission, 'newTotalVendorEarning:', newTotalVendorEarning)
        console.log('commissionAdded:', commissionAdded, 'vendorEarningAdded:', vendorEarningAdded)

        let subtotal = cOrderDetails.subtotal
        let taxRate = Number(process.env.TAX_RATE)
        let commissionRate = Number(process.env.COMMISSION_RATE)
        let calculatedTax, shipping, gatewayFee, orderDiscount, quantityDiscount, discount, totalDiscount, subTotalWithoutDiscount

        cOrderDetails.hasOwnProperty('shippingCost') ? shipping = cOrderDetails.shippingCost : shipping = 0
        cOrderDetails.hasOwnProperty('orderDiscount') ? orderDiscount = cOrderDetails.orderDiscount : orderDiscount = 0
        cOrderDetails.hasOwnProperty('quantityDiscount') ? quantityDiscount = cOrderDetails.quantityDiscount : quantityDiscount = 0
        cOrderDetails.hasOwnProperty('discount') ? discount = cOrderDetails.discount : discount = 0
        aOrderDetails.hasOwnProperty('gatewayFee') ? gatewayFee = aOrderDetails.gatewayFee : gatewayFee = 0
        totalDiscount = helpers.roundToTwo(orderDiscount + quantityDiscount + discount)
        subTotalWithoutDiscount = helpers.roundToTwo(subtotal - totalDiscount)
        cOrderDetails.hasOwnProperty('tax') ? calculatedTax = helpers.tax(taxRate, subTotalWithoutDiscount, shipping) : calculatedTax = 0


        let calculatedOrderTotal = helpers.orderTotal(subTotalWithoutDiscount, calculatedTax, shipping)
        let calculatedAdminCommission = helpers.adminCommission(subTotalWithoutDiscount, commissionRate, calculatedTax, shipping, gatewayFee)
        let calculatedVendorEarning = helpers.vendorEarning(subTotalWithoutDiscount, calculatedAdminCommission, calculatedTax, shipping, gatewayFee)
        console.log('calculated Data:', 'tax:', calculatedTax, 'orderTotal:', calculatedOrderTotal, 'commission:', calculatedAdminCommission, 'vendorEarning', calculatedVendorEarning)

        let commissionGatewayFee = helpers.roundToTwo(aOrderDetails.commission + gatewayFee)
        let calculatedCommissionGatewayFee = helpers.roundToTwo(calculatedAdminCommission + gatewayFee)

        //all assertions
        console.log(`orderNumber :  c:${cOrderDetails.orderNumber}, a:${aOrderDetails.orderNumber}, v:${vOrderDetails.orderNumber}`)
        console.log(`orderStatus :  c:${cOrderDetails.orderStatus}, a:${aOrderDetails.orderStatus}, v:${vOrderDetails.orderStatus}`)
        console.log(`orderDate :  c:${cOrderDetails.orderDate}, a:${aOrderDetails.orderDate}, v:${vOrderDetails.orderDate}`)
        console.log(`subtotal :  c:${cOrderDetails.subtotal}`)
        console.log(`totalDiscount :  ${totalDiscount}, orderDiscount:${orderDiscount}, quantityDiscount:${quantityDiscount}, discount:${discount}`)
        console.log(`subTotalWithoutDiscount : ${subTotalWithoutDiscount}`)
        if (cOrderDetails.shippingMethod) console.log(`shipping :  c:${cOrderDetails.shippingMethod}, v:${vOrderDetails.shippingMethod}`)
        if (cOrderDetails.shippingCost) console.log(`shipping :  c:${cOrderDetails.shippingCost}, a:${aOrderDetails.shippingCost}, v:${vOrderDetails.shippingCost}`)
        if (cOrderDetails.tax) console.log(`tax : cal:${calculatedTax}, c:${cOrderDetails.tax}, a:${aOrderDetails.tax}, v:${vOrderDetails.tax}`)
        console.log(`orderTotal : cal:${calculatedOrderTotal}, c:${cOrderDetails.orderTotal}, a:${aOrderDetails.orderTotal}, v:${vOrderDetails.orderTotal}`)
        console.log(`commission : cal:${calculatedAdminCommission}, a:${aOrderDetails.commission}`)
        console.log(`vendorEarning : cal:${calculatedVendorEarning}, a:${aOrderDetails.vendorEarning}, v:${vOrderDetails.vendorEarning}`)
        console.log(`commissionAdded : fromTotalAdminCommission:${commissionAdded}, fromCalculation:${calculatedCommissionGatewayFee} addedCommission:${commissionGatewayFee}, commission:${aOrderDetails.commission}  gatewayFee:${gatewayFee}`)
        console.log(`vendorEarningAdded : fromTotalVendorEarning:${vendorEarningAdded}, addedVendorEarning:${vOrderDetails.vendorEarning}`)


        expect(cOrderDetails.orderNumber === aOrderDetails.orderNumber && cOrderDetails.orderNumber === vOrderDetails.orderNumber).toBeTruthy()
        expect(cOrderDetails.orderStatus === aOrderDetails.orderStatus && cOrderDetails.orderStatus === vOrderDetails.orderStatus).toBeTruthy()
        // expect(cOrderDetails.orderDate === aOrderDetails.orderDate && cOrderDetails.orderDate === vOrderDetails.orderDate).toBeTruthy()
        if (cOrderDetails.tax) expect(calculatedTax === cOrderDetails.tax && calculatedTax === aOrderDetails.tax && calculatedTax === vOrderDetails.tax).toBeTruthy()
        if (cOrderDetails.shippingMethod) expect(cOrderDetails.shippingMethod === vOrderDetails.shippingMethod).toBeTruthy()
        if (cOrderDetails.shippingCost) expect(cOrderDetails.shippingCost === aOrderDetails.shippingCost && cOrderDetails.shippingCost === vOrderDetails.shippingCost).toBeTruthy()
        expect(calculatedOrderTotal === cOrderDetails.orderTotal && calculatedOrderTotal === aOrderDetails.orderTotal && calculatedOrderTotal === vOrderDetails.orderTotal).toBeTruthy()
        expect(calculatedAdminCommission === aOrderDetails.commission).toBeTruthy()
        expect(calculatedVendorEarning === aOrderDetails.vendorEarning && calculatedVendorEarning === vOrderDetails.vendorEarning).toBeTruthy()
        expect(commissionAdded === commissionGatewayFee).toBeTruthy()
        expect(vendorEarningAdded === vOrderDetails.vendorEarning).toBeTruthy()

    }, timeout)

    it('should update order status to completed', async () => {

        // await loginPage.switchUser(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        // let productName ='p2_v4'
        // await customerPage.searchProduct(productName)
        // await customerPage.addProductToCartFromShop(productName)
        // await customerPage.goToCartFromShop()
        // await customerPage.updateProductQuantityOnCart(productName, '5')


        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        await vendorPage.addQuantityDiscount('p1_v3', '5', '10')


    }, timeout)

})