const base = require("../pages/base.js");

module.exports = {
    // locators





    // customer myaccount

    dashboard: '.woocommerce-MyAccount-navigation-link--dashboard > a',
    orders: '.woocommerce-MyAccount-navigation-link--orders > a',
    subscriptions: '.woocommerce-MyAccount-navigation-link--subscriptions > a',
    downloads: '.woocommerce-MyAccount-navigation-link--downloads > a',
    addresses: '.woocommerce-MyAccount-navigation-link--edit-address > a',
    paymentMethods: '.woocommerce-MyAccount-navigation-link--payment-methods > a',
    rmaRequests: '.woocommerce-MyAccount-navigation-link--rma-requests > a',
    accountDetails: '.woocommerce-MyAccount-navigation-link--edit-account > a',
    vendors: 'woocommerce-MyAccount-navigation-link--following > a',
    sellerSupportTickets: '.woocommerce-MyAccount-navigation-link--support-tickets > a',
    bookings: '.woocommerce-MyAccount-navigation-link--bookings > a',
    auctions: '.woocommerce-MyAccount-navigation-link--auctions-endpoint > a',
    logout: '.woocommerce-MyAccount-navigation-link--customer-logout > a',
    
    
    // customer dashboard

    // become vendor
    becomeVendor: 'li:nth-child(1) .btn',
    firstname: '#first-name',
    lastname: '#last-name',
    shopname: '#company-name',
    shopurl: '#seller-url',
    address: '#seller-address',
    phone: '#shop-phone',
    companyName: '#dokan-company-name',
    companyId: '#dokan-company-id-number',
    vatNumber: '#dokan-vat-number',
    bankName: '#dokan-bank-name',
    bankIban: '#dokan-bank-iban',
    becomeAVendor: 'input[value="Become a Vendor"]', 

    //become wholesale customeer
    becomeWholesaleCustomer: '#dokan-become-wholesale-customer-btn',
    
  
    

    // methods

    async customerbecomevednor(firstname, lastname, shopname, shopurl, address, phone, companyName, companyId, vatNumber,bankName, bankIban) {
        await page.click(this.becomeVendor);

        await page.type(this.firstname, firstname);
        await page.type(this.lastname, lastname);
        await page.type(this.shopname, shopname);
        await page.type(this.shopurl, shopurl);
        await page.type(this.address, address);
        await page.type(this.phone, phone);
        await page.type(this.companyName, companyName);
        await page.type(this.companyId, companyId);
        await page.type(this.vatNumber, vatNumber);
        await page.type(this.bankName, bankName);
        await page.type(this.bankIban, bankIban);

        await page.click(this.becomeAVendor);
        await page.waitForTimeout(4000); // TODO: add page load complete to revome this line
    },



    async customersendwholesalerequest() {
        await page.click(this.becomeWholesaleCustomer)
        await page.waitForTimeout(4000); // TODO: add page load complete to revome this line
    },

    async addproduct() {
        await page.click(this.product);
        await page.waitForTimeout(500);
        await page.click(this.addNewProduct);
        await page.type(this.productName, "Batt");
        await page.type(this.ProductPrice, "120");
        await page.click(this.productCategory);
        await base.getMultipleElementTexts(this.categoryValues)
        await base.setDropdownOption(this.categoryValues, 'Clothings')
        // await page.click(this.createProduct)
        await page.waitForTimeout(1000);
        // await page.waitForTimeout(5000);
    },

    // async methodname(){
    //     await page.click('')
    // },
};
