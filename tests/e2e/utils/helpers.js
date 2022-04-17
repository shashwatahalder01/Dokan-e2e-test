const open = require('open')
module.exports = {

    // replace '_' to space & capitalize first letter of string
    replaceAndCapitalize: (string) => string.replace('dokan', 'vendor').replace('_', ' ').replace(/^\w{1}/, letter => letter.toUpperCase()),

    // replace '_' to space & capitalize first letter of each word
    replaceAndCapitalizeEachWord: (string) => string.replace('_', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),

    // returns a random number between min (inclusive) and max (exclusive)
    getRandomArbitrary: (min, max) => Math.random() * (max - min) + min,

    // returns a random integer number between min (inclusive) and max (exclusive)
    getRandomArbitraryInteger: (min, max) => Math.floor(Math.random() * (max - min) + min),

    //random number between 0 and 1000
    randomNumber: () => Math.floor(Math.random() * 1000),

    // opens the url in the default browser 
    openUrl: (url) => open('url'),

    // opens test report in the default browser 
    openReport: () => open('./artifacts/jest-stare/index.html'),

    //convert string to price format
    price: (string) => parseFloat(string.replace(/[^\d\-.,]/g, "").replace(/,/g, ".").replace(/\.(?=.*\.)/g, "")),

    //current day
    currentDate: new Date().toLocaleDateString('en-CA'),

    currentDateTime: new Date().toLocaleString('en-CA', {
        year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, hour: "numeric", minute: "numeric"
    }),

    // add two input days
    addDays(date, days) {
        var result = new Date(date)
        result.setDate(result.getDate() + days)
        return result.toLocaleDateString('en-CA', { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, hour: "numeric", minute: "numeric" })
    },

    // add two days
    addDays1(date, days) {
        var result = new Date(date)
        result.setDate(result.getDate() + days)
        return result.toLocaleDateString('en-CA')
    },
    //round to two decimal places
    roundToTwo(num) { return +(Math.round(num + "e+2") + "e-2") },
    //calculate percentage
    percentage(number, percentage) { return this.roundToTwo(number * (percentage / 100)) },
    //calculate percentage
    percentage1(number, percentage) { return ((number * (percentage / 100)).toFixed(2)) },

    //tax
    tax(taxRate, subtotal, shipping = 0) {
        let tax = this.percentage(subtotal, taxRate) + this.percentage(shipping, taxRate)
        return this.roundToTwo(tax)
    },

    //order total
    orderTotal(subtotal, tax, shipping = 0) {
        let orderTotal = subtotal + tax + shipping
        return this.roundToTwo(orderTotal)
    },

    //calculate admin commission
    adminCommission(subTotal, commissionRate, tax = 0, shipping = 0, gatewayFee = 0, taxReceiver = 'vendor', shippingReceiver = 'vendor', gatewayFeeGiver = 'vendor') {
        //TODO: handle gateway fee deduct from
        //TODO: handle different commission
        let adminCommission
        if ((taxReceiver == 'vendor') && (shippingReceiver == 'vendor')) {
            adminCommission = this.percentage(subTotal, commissionRate) - gatewayFee
        } else if ((taxReceiver == 'vendor') && (shippingReceiver == 'admin')) {
            adminCommission = this.percentage(subTotal, commissionRate) - gatewayFee + shipping
        } else if ((taxReceiver == 'admin') && (shippingReceiver == 'vendor')) {
            adminCommission = this.percentage(subTotal, commissionRate) - gatewayFee + tax
        } else {
            adminCommission = this.percentage(subTotal, commissionRate) - gatewayFee + tax + shipping
        }
        return this.roundToTwo(adminCommission)
    },

    //calculate vendor earning
    vendorEarning(subTotal, commission, tax = 0, shipping = 0, gatewayFee = 0, taxReceiver = 'vendor', shippingReceiver = 'vendor', gatewayFeeGiver = 'vendor') {
        // console.log(subTotal, commission, tax, shipping)
        //TODO: handle gateway fee deduct from
        let vendorEarning
        if ((taxReceiver == 'vendor') && (shippingReceiver == 'vendor')) {
            vendorEarning = subTotal - commission - gatewayFee + tax + shipping
        } else if ((taxReceiver == 'vendor') && (shippingReceiver == 'admin')) {
            vendorEarning = subTotal - commission - gatewayFee + tax
        } else if ((taxReceiver == 'admin') && (shippingReceiver == 'vendor')) {
            vendorEarning = subTotal - commission - gatewayFee + shipping
        } else {
            vendorEarning = subTotal - commission - gatewayFee
        }
        return this.roundToTwo(vendorEarning)
    },

}




