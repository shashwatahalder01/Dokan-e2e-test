const { createURL } = require("@wordpress/e2e-test-utils")
const base = require("../pages/base.js")
const selector = require("../pages/selectors.js")
const adminPage = require("../pages/admin.js")
const vendorPage = require("../pages/vendor.js")
const customerPage = require("../pages/customer.js")


module.exports = {


    // user login
    async login(username, password) {
        await this.loginFromWPLoginDashboard(username, password)
    },

    async loginFrontend(username, password) {
        await base.goto("my-account")
        await page.type(selector.frontend.username, username)
        await page.type(selector.frontend.userPassword, password)
        await base.click(selector.frontend.logIn)
        //TODO: add assertion
        let homeIsVisible = await base.isVisible(page, selector.frontend.home)
        expect(homeIsVisible).toBe(true)
    },

    //login user form WP login dashboard
    async loginFromWPLoginDashboard(username, password) {
        await base.goto("wp-admin")
        let res = await base.isVisible(page, selector.backend.email)
        if (res) {
            await page.type(selector.backend.email, username)
            await page.type(selector.backend.password, password)
            await base.click(selector.backend.login)

            let homeIsVisible = await base.isVisible(page, selector.frontend.home)
            expect(homeIsVisible).toBe(true)
        }
    },

    async customerLogout() {
        await customerPage.goToMyAccount()
        await base.click(selector.frontend.customerLogout)

        let homeIsVisible = await base.isVisible(page, selector.frontend.home)
        expect(homeIsVisible).toBe(true)
    },

    // vendor logout
    async vendorLogout() {
        await vendorPage.goToVendorDashboard()
        await base.click(selector.frontend.vendorLogout)

        let homeIsVisible = await base.isVisible(page, selector.frontend.home)
        expect(homeIsVisible).toBe(true)
    },



    //admin login
    async adminLogin(username, password) {
        await base.goto("wp-admin")
        let res = await base.isVisible(page, selector.backend.email)
        if (res) {
            await page.type(selector.backend.email, username)
            await page.type(selector.backend.password, password)
            await base.click(selector.backend.login)

            let dashboardIsVisible = await base.isVisible(page, selector.backend.dashboardMenu)
            expect(dashboardIsVisible).toBe(true)
        }
    },

    //admin logout
    async adminLogout() {
        await base.hover(selector.backend.userMenu)
        await base.click(selector.backend.logout)

        let successMessage = await base.getSelectorText(selector.backend.logoutSuccessMessage)
        expect(successMessage).toMatch("You are now logged out.")
    },

    //switch to admin from customer or vendor
    async switchToAdmin(username, password) {
        await base.goto("my-account")
        let dashboardIsVisible = await base.isVisible(page, selector.frontend.goToVendorDashboard)
        if (dashboardIsVisible) {
            await this.vendorLogout()
        }
        else {
            await this.customerLogout()
        }
        await this.adminLogin(username, password)
    },

    //switch to vendor from admin or customer
    async switchToVendor(username, password) {
        await base.goto("wp-admin")
        let dashboardIsVisible = await base.isVisible(page, selector.backend.dashboardMenu)
        if (dashboardIsVisible) {
            await this.adminLogout()
        }
        else {
            await this.customerLogout()
        }
        await this.login(username, password)
    },

    //switch to customer from admin or vendor
    async switchToCustomer(username, password) {
        await base.goto("wp-admin")
        let dashboardIsVisible = await base.isVisible(page, selector.backend.dashboardMenu)
        if (dashboardIsVisible) {
            await this.adminLogout()
        }
        else {
            await this.vendorLogout()
        }
        await this.login(username, password)
    },



}