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
        year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, hour: "numeric",
        minute: "numeric"
    }),

    // add two input days
    addDays: (date, days) => {
        var result = new Date(date)
        result.setDate(result.getDate() + days)
        return result.toLocaleDateString('en-CA', { year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, hour: "numeric", minute: "numeric" })
    },

    // add two days
    addDays1: (date, days) => {
        var result = new Date(date)
        result.setDate(result.getDate() + days)
        return result.toLocaleDateString('en-CA')
    },
    //round to two decimal places
    roundToTwo: (num) => +(Math.round(num + "e+2") + "e-2"),
    //calculate percentage
    percentage: (number, percentage) => this.roundToTwo(number * (percentage / 100)),
    //calculate percentage
    percentage1: (number, percentage) => ((number * (percentage / 100)).toFixed(2)),

    //tax
    tax: (taxRate, subtotal, shipping = 0) => {
        return tax = this.percentage(subtotal, taxRate) + this.percentage(shipping, taxRate)
    },


    //calculate admin commission
    adminCommission: (subTotal, tax = 0, shipping = 0, gatewayFee = 0, taxReceiver = 'vendor', shippingReceiver = 'vendor', gatewayFeeGiver = 'vendor') => {
        //TODO: handle gateway fee deduct from
        //TODO: handle different commission
        if ((taxReceiver == 'vendor') && (shippingReceiver == 'vendor')) {
            return adminCommission = this.percentage(subTotal) - gatewayFee
        } else if ((taxReceiver == 'vendor') && (shippingReceiver == 'admin')) {
            return vendorEarning = this.percentage(subTotal) - gatewayFee + shipping
        } else if ((taxReceiver == 'admin') && (shippingReceiver == 'vendor')) {
            return vendorEarning = this.percentage(subTotal) - gatewayFee + tax
        } else {
            return vendorEarning = this.percentage(subTotal) - gatewayFee + tax + shipping
        }
    },


    //calculate vendor earning
    vendorEarning: (orderTotal, commission, tax = 0, shipping = 0, gatewayFee = 0, taxReceiver = 'vendor', shippingReceiver = 'vendor', gatewayFeeGiver = 'vendor') => {
        //TODO: handle gateway fee deduct from
        if ((taxReceiver == 'vendor') && (shippingReceiver == 'vendor')) {
            return vendorEarning = orderTotal - commission - gatewayFee + tax + shipping
        } else if ((taxReceiver == 'vendor') && (shippingReceiver == 'admin')) {
            return vendorEarning = orderTotal - commission - gatewayFee + tax
        } else if ((taxReceiver == 'admin') && (shippingReceiver == 'vendor')) {
            return vendorEarning = orderTotal - commission - gatewayFee + shipping
        } else {
            return vendorEarning = orderTotal - commission - gatewayFee
        }
    },
}




