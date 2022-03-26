const base = require("../pages/base.js")
// import { createURL, adminLogin, loginUser, isCurrentURL } from '@wordpress/e2e-test-utils'

module.exports = {

    // locators

    frontend: {
        //TODO: recheck all fronted locators
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
        firstName: '#first-name',
        lastName: '#last-name',
        shopName: '#company-name',
        shopUrl: '#seller-url',
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
        vendorLogout: '.fa-power-off', //TODO: delete one of the above

        // user forget password
        resetPasswordEmail: '#user_login',
        resetPasswordBtn: 'button[value="Reset password"]',
    },

    admin: {
        // admin login
        email: '#user_login',
        password: '#user_pass',
        rememberMe: '#rememberme',
        login: '#wp-submit',
        dashboardMenu: ".wp-first-item > .wp-menu-name",
        dashboardText: ".wrap h1",
        // admin logout
        userMenu: '#wp-admin-bar-my-account a',
        logout: '#wp-admin-bar-logout a',
        //logout message
        logoutSuccessMessage: "#login p",
    },


    //////////////////////////// need to review ///////////////////////////

    // async customerRegister(username, password) {
    //     // await page.goto(this.baseUrl + '/my-account');
    //     await page.click(this.myAccount)
    //     await page.type(this.regEmail, username)
    //     await page.type(this.regPassword, password);
    //     await page.click(this.regCustomer);
    //     await base.click(this.register);
    // },

    async vendorRegister(userEmail, password, firstName, lastName, shopName, shopUrl, companyName, companyId, vatNumber, bankName, bankIban, phone) {
        // await page.goto(this.baseUrl + '/my-account');
        // await page.goto(createURL('my-account/'));
        // await page.waitForTimeout(4000);
        await page.click(this.myAccount)
        await page.waitForTimeout(80000);
        await page.type(this.regEmail, userEmail)
        // await page.type(this.regPassword, password);
        await page.click(this.regVendor)
        await page.type(this.firstName, firstName);
        await page.type(this.lastName, lastName);
        await page.type(this.shopName, shopName);
        // await page.type(this.shopUrl, shopUrl);
        await page.click(this.shopUrl);
        await page.type(this.companyName, companyName);
        await page.type(this.companyId, companyId);
        await page.type(this.vatNumber, vatNumber);
        await page.type(this.bankName, bankName);
        await page.type(this.bankIban, bankIban);
        await page.type(this.phone, phone);
        await base.click(this.register);
    },

    // async customerLogout() {
    //     await page.click(this.customerLogout)
    // },
    // async vendorLogout() {
    //     await vendorPage.goToVendorDashboard()
    //     await base.click(this.vendorLogout)

    //     let homeIsVisible = await base.isVisible(page, this.home)
    //     expect(homeIsVisible).toBe(true)
    // },

    // async switchToAdmin(username, password) {
    //     // await base.openNewTab()
    //     await this.adminLogin(username, password)
    // },

    // async loginFrontend(username, password) {
    //     await page.goto(this.baseUrl + '/my-account');
    //     await page.type(this.username, username)
    //     await page.type(this.userPassword, password);
    //     await page.click(this.logIn);
    // },


    /////////////////////////////////////////  reviewed  ///////////////////////////////////////////////

    async login(username, password) {
        // await this.loginFromWpAdmin('Nannie', '01dokan01')
        // await this.loginFromWpAdmin('customer1', '01dokan01')
        await this.loginFromWPLoginDashboard(username, password)
    },

    async loginFromWPLoginDashboard(username, password) {
        await base.goto('wp-admin')
        let res = await base.isVisible(page, this.admin.email)
        if (res) {
            await page.type(this.admin.email, username)
            await page.type(this.admin.password, password)
            await base.click(this.admin.login)

            let homeIsVisible = await base.isVisible(page, this.home)
            expect(homeIsVisible).toBe(true)
        }
        else {
            return
        }
    },

    async adminLogin(username, password) {
        await base.goto('wp-admin')
        
        let res = await base.isVisible(page, this.admin.email)
        if (res) {
            await page.type(this.admin.email, username)
            await page.type(this.admin.password, password)
            await base.click(this.admin.login)

            let dashboardIsVisible = await base.isVisible(page, this.admin.dashboardMenu)
            expect(dashboardIsVisible).toBe(true)
        }
        else {
            return
        }
    },


    async adminLogout() {
        await page.hover(this.admin.userMenu)
        await page.waitForTimeout(1000)
        await base.click(this.admin.logout)

        let successMessage = await base.getSelectorText(this.admin.logoutSuccessMessage)
        expect(successMessage).toMatch('You are now logged out.')
    },



}