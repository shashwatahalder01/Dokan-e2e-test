const base = require("../pages/base.js");
const vendorPage = require('../pages/vendor.js')
import { createURL, adminLogin, loginUser, isCurrentURL } from '@wordpress/e2e-test-utils'

module.exports = {

    // locators

    // frontend homepage
    home: '.nav-menu > li:nth-child(1) > a',
    cart: '.nav-menu > li:nth-child(2) > a',
    checkout: '.nav-menu > li:nth-child(3) > a',
    dashboard: '.nav-menu > li:nth-child(4) > a',
    myAccount: '.nav-menu > li:nth-child(5) > a',
    myOrders: '.nav-menu > li:nth-child(6) > a',
    shop: '.nav-menu > li:nth-child(8) > a',
    storeList: '.nav-menu > li:nth-child(9) > a',

    // frontend user login
    username: '#username',
    userPassword: '#password',
    rememberMe: '#rememberme',
    logIn: 'button[value="Log in"]',
    lostPassword: 'woocommerce-LostPassword > a',

    // user registration

    // customer registration
    regEmail: '#reg_email',
    regPassword: '#reg_password',
    regCustomer: 'input[value="customer"]', // radio btn

    // vendor registration
    regVendor: 'input[value="seller"]',  // radio btn
    firstname: '#first-name',
    lastname: '#last-name',
    shopname: '#company-name',
    shopurl: '#seller-url',
    companyName: '#dokan-company-name',
    companyId: '#dokan-company-id-number',
    vatNumber: '#dokan-vat-number',
    bankName: '#dokan-bank-name',
    bankIban: '#dokan-bank-iban',
    phone: '#shop-phone',
    subscriptionPack: '#dokan-subscription-pack',

    //register btn
    register: 'button[value="Register"]',


    // user logout
    customerLogout: '.woocommerce-MyAccount-navigation-link--customer-logout > a',
    vendorLogout: 'a:nth-child(3)',
    vendorLogout: '.fa-power-off',


    // user forget password
    resetPasswordEmail: '#user_login',
    resetPasswordbtn: 'button[value="Reset password"]',

    // admin login
    adminEmail: '#user_login',
    adminPassword: '#user_pass',
    adminRememberMe: '#rememberme',
    adminLogin: '#wp-submit',
    adminDashboard:".wp-first-item > .wp-menu-name",

    // admin logout
    adminUserMenu: '#wp-admin-bar-my-account a',
    adminLogout: '#wp-admin-bar-logout a',

    //admin dashboard
    adminDashboard:".wrap h1",

    // Data

    // baseUrl: 'http://dokan8.test',

    async customerregister(username, password) {
        // await page.goto(this.baseUrl + '/my-account');
        await page.click(this.myAccount)
        await page.type(this.regEmail, username)
        await page.type(this.regPassword, password);
        await page.click(this.regCustomer);
        await base.click(this.register);
    },

    async vendorregister(userEmail, password, firstname, lastname, shopname, shopurl, companyName, companyId, vatNumber, bankName, bankIban, phone) {
        // await page.goto(this.baseUrl + '/my-account');
        // await page.goto(createURL('my-account/'));
        // await page.waitForTimeout(4000);
        await page.click(this.myAccount)
        await page.waitForTimeout(80000);
        await page.type(this.regEmail, userEmail)
        // await page.type(this.regPassword, password);
        await page.click(this.regVendor)
        await page.type(this.firstname, firstname);
        await page.type(this.lastname, lastname);
        await page.type(this.shopname, shopname);
        // await page.type(this.shopurl, shopurl);
        await page.click(this.shopurl);
        await page.type(this.companyName, companyName);
        await page.type(this.companyId, companyId);
        await page.type(this.vatNumber, vatNumber);
        await page.type(this.bankName, bankName);
        await page.type(this.bankIban, bankIban);
        await page.type(this.phone, phone);
        await base.click(this.register);
    },


    async loginFromWpAdmin(username, password) {
        await base.goto('wp-admin')
        let res = await base.isVisible(page, this.adminEmail)
        if (res) {
            await page.type(this.adminEmail, username)
            await page.type(this.adminPassword, password)
            await base.click(this.adminLogin)

            let homeIsVisible = await base.isVisible(page, this.home)
            expect(homeIsVisible).toBe(true)
        }
        else {
            return
        }
    },

    async login(username, password) {
        // await page.goto(this.baseUrl + '/my-account');
        // await page.type(this.username, username)
        // await page.type(this.userPassword, password);
        // await page.click(this.logIn);
        // await page.waitForTimeout(5000); 
        // await isCurrentURL()
        // await loginUser('Nannie', '1aO4e9S)7iUs8cdgx5pebN7)')
        // await this.loginFromWpAdmin('Nannie', '1aO4e9S)7iUs8cdgx5pebN7)')
        // await this.loginFromWpAdmin('customer1', '01dokan01')
        await loginUser('admin', 'password')
    },

    async customerlogout() {
        await page.click(this.customerLogout)
    },
    async vendorlogout() {
        await vendorPage.goToVendorDashbord()
        await base.click(this.vendorLogout)

        let homeIsVisible = await base.isVisible(page, this.home)
        expect(homeIsVisible).toBe(true)
    },

    async switchtoadmin(username, password) {
        // await base.opennewtab()
        await this.adminlogin(username, password)
    },


    /////////////////////////////////////////  reviewed  ///////////////////////////////////////////////

    async adminlogin(username, password) {
        await base.goto('wp-admin')
        let res = await base.isVisible(page, this.adminEmail)
        if (res) {
            await page.type(this.adminEmail, username)
            await page.type(this.adminPassword, password)
            await base.click(this.adminLogin)

            let dashboardIsVisible = await base.isVisible(page, this.adminDashboard)
            expect(dashboardIsVisible).toBe(true)
        }
        else {
            return
        }
        // await loginUser('admin', 'password')
    },


    async adminlogout(username, password) {
        await page.hover(this.adminUserMenu)
        await page.waitForTimeout(2000)
        await base.click(this.adminLogout)
    },



}