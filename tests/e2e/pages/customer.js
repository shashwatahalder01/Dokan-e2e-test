
require('dotenv').config()
const loginPage = require('../pages/login.js')
const adminPage = require('../pages/admin.js')
const base = require("../pages/base.js")
const selector = require("../pages/selectors.js")
const helper = require("../../e2e/utils/helpers.js")

module.exports = {


    // methods



    //-------------------------------------------------- navigation ---------------------------------------------------//



    async goToMyAccount() {
        await base.goto('my-account')

        const url = await page.url()
        expect(url).toMatch('my-account')

        // let dashboardIsVisible = await base.isVisible( selector.customer.cMyAccount.dashboard)
        // expect(dashboardIsVisible).toBe(true)
    },

    async goToShop() {
        await base.goto('shop')

        const url = await page.url()
        expect(url).toMatch('shop')

        // let shopIsVisible = await base.isVisible( selector.customer.cShop.shopPageHeader)
        // expect(shopIsVisible).toBe(true)
    },

    async goToStoreList() {
        await base.goto('store-listing')

        const url = await page.url()
        expect(url).toMatch('store-listing')

        // let storeListIsVisible = await base.isVisible( selector.customer.cStoreList.storeListPageHeader)
        // expect(storeListIsVisible).toBe(true)
    },




    //-------------------------------------------------- customer logout ---------------------------------------------------//



        //customer logout
        async customerLogout() {
            await this.goToMyAccount()
            await base.click(selector.frontend.customerLogout)

            let loggedInUser = await base.getCurrentUser()
            expect(loggedInUser).toBeUndefined()
            // let homeIsVisible = await base.isVisible( selector.frontend.home)
            // expect(homeIsVisible).toBe(false)
        },



    //-------------------------------------------------- customer details ---------------------------------------------------//



    //customer register
    async customerRegister(userEmail, password) {
        await base.goto("my-account")
        await page.type(selector.customer.cRegistration.regEmail, userEmail)
        await page.type(selector.customer.cRegistration.regPassword, password)
        await base.clickXpath(selector.customer.cRegistration.regCustomer)
        await base.click(selector.customer.cRegistration.register)

        let username = (userEmail.split("@")[0]).toLowerCase()
        let loggedInUser = await base.getCurrentUser()
        expect(loggedInUser).toBe(username)
        // let regWelcomeMessage = await base.getSelectorText(selector.customer.cRegistration.regCustomerWelcomeMessage)
        // expect(regWelcomeMessage.replace(/\s+/g, ' ').trim()).toMatch(`Hello ${customer} (not ${customer}? Log out)`)
    },


    async customerBecomeVendor(firstName, lastName, shopName, address, phone, companyName, companyId, vatNumber, bankName, bankIban) {
        await base.waitForSelector(selector.customer.cDashboard.becomeVendor)
        await base.click(selector.customer.cDashboard.becomeVendor)
        // vendor registration form
        await page.type(selector.customer.cDashboard.firstName, firstName)
        await page.type(selector.customer.cDashboard.lastName, lastName)
        await page.type(selector.customer.cDashboard.shopName, shopName)
        await page.click(selector.customer.cDashboard.shopUrl)
        await page.type(selector.customer.cDashboard.address, address)
        await page.type(selector.customer.cDashboard.phone, phone)
        await page.type(selector.customer.cDashboard.companyName, companyName)
        await page.type(selector.customer.cDashboard.companyId, companyId)
        await page.type(selector.customer.cDashboard.vatNumber, vatNumber)
        await page.type(selector.customer.cDashboard.bankName, bankName)
        await page.type(selector.customer.cDashboard.bankIban, bankIban)
        await base.clickIfVisible(selector.customer.cDashboard.termsAndConditions)

        await base.click(selector.customer.cDashboard.becomeAVendor)
    },

    // customer become wholesale customer
    async customerBecomeWholesaleCustomer() {
        let currentUser = await base.getCurrentUser()
        await page.click(selector.customer.cDashboard.becomeWholesaleCustomer)

        let returnMessage = await base.getSelectorText(selector.customer.cDashboard.wholesaleRequestReturnMessage)
        if (returnMessage != "Your wholesale customer request send to the admin. Please wait for approval") {
            let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
            expect(successMessage).toMatch('You are succefully converted as a wholesale customer')
        } else {
            await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
            await adminPage.adminApproveWholesaleRequest(currentUser)
        }
    },

    async addBillingAddress(billingFirstName, billingLastName, billingCompanyName, billingCompanyIDOrEuidNumber, billingVatOrTaxNumber, billingNameOfBank, billingBankIban, billingCountryOrRegion, billingStreetAddress, billingStreetAddress2, billingTownCity,
        billingState, billingZipCode, billingPhone, billingEmailAddress) {

        await base.click(selector.customer.cMyAccount.addresses)
        //billing address
        await page.$(selector.customer.cMyAccount.addresses) !== null ? await base.click(selector.customer.cAddress.editBillingAddress) : await base.click(selector.customer.cAddress.editBillingAddress1)
        await base.clearAndType(selector.customer.cAddress.billingFirstName, billingFirstName)
        await base.clearAndType(selector.customer.cAddress.billingLastName, billingLastName)
        await base.clearAndType(selector.customer.cAddress.billingCompanyName, billingCompanyName)
        await base.clearAndType(selector.customer.cAddress.billingCompanyIDOrEuidNumber, billingCompanyIDOrEuidNumber)
        await base.clearAndType(selector.customer.cAddress.billingVatOrTaxNumber, billingVatOrTaxNumber)
        await base.clearAndType(selector.customer.cAddress.billingNameOfBank, billingNameOfBank)
        await base.clearAndType(selector.customer.cAddress.billingBankIban, billingBankIban)
        await page.click(selector.customer.cAddress.billingCountryOrRegion)
        await page.type(selector.customer.cAddress.billingCountryOrRegionInput, billingCountryOrRegion)
        await page.keyboard.press('Enter')
        // await base.setDropdownOptionSpan(selector.customer.cAddress.billingCountryOrRegionValues, billingCountryOrRegion)
        await base.clearAndType(selector.customer.cAddress.billingStreetAddress, billingStreetAddress)
        await base.clearAndType(selector.customer.cAddress.billingStreetAddress2, billingStreetAddress2)
        await base.clearAndType(selector.customer.cAddress.billingTownCity, billingTownCity)
        await page.click(selector.customer.cAddress.billingState)
        await page.type(selector.customer.cAddress.billingStateInput, billingState)
        await page.keyboard.press('Enter')
        // await base.setDropdownOptionSpan(selector.customer.cAddress.billingStateValues, billingState)
        await base.clearAndType(selector.customer.cAddress.billingZipCode, billingZipCode)
        await base.clearAndType(selector.customer.cAddress.billingPhone, billingPhone)
        await base.clearAndType(selector.customer.cAddress.billingEmailAddress, billingEmailAddress)
        await base.click(selector.customer.cAddress.billingSaveAddress)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch('Address changed successfully.')
    },

    async addShippingAddress(shippingFirstName, shippingLastName, shippingCompanyName, shippingCountryOrRegion, shippingStreetAddress, shippingStreetAddress2, shippingTownCity, shippingState, shippingZipCode) {

        await base.click(selector.customer.cMyAccount.addresses)
        //shipping address
        await base.click(selector.customer.cAddress.editShippingAddress)
        await base.clearAndType(selector.customer.cAddress.shippingFirstName, shippingFirstName)
        await base.clearAndType(selector.customer.cAddress.shippingLastName, shippingLastName)
        await base.clearAndType(selector.customer.cAddress.shippingCompanyName, shippingCompanyName)
        await page.click(selector.customer.cAddress.shippingCountryOrRegion)
        await page.type(selector.customer.cAddress.shippingCountryOrRegionInput, shippingCountryOrRegion)
        await page.keyboard.press('Enter')
        // await base.setDropdownOptionSpan(selector.customer.cAddress.shippingCountryOrRegionValues, shippingCountryOrRegion)
        await base.clearAndType(selector.customer.cAddress.shippingStreetAddress, shippingStreetAddress)
        await base.clearAndType(selector.customer.cAddress.shippingStreetAddress2, shippingStreetAddress2)
        await base.clearAndType(selector.customer.cAddress.shippingTownCity, shippingTownCity)
        await page.click(selector.customer.cAddress.shippingState)
        await page.type(selector.customer.cAddress.shippingStateInput, shippingState)
        await page.keyboard.press('Enter')
        // await base.setDropdownOptionSpan(selector.customer.cAddress.shippingStateValues, shippingState)
        await base.clearAndType(selector.customer.cAddress.shippingZipCode, shippingZipCode)
        await base.click(selector.customer.cAddress.shippingSaveAddress)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch('Address changed successfully.')
    },


    async sendRmaMessage(message) {
        await base.click(selector.customer.cMyAccount.rmaRequests)

        await page.type(selector.customer.cRma.message, message)
        await page.click(selector.customer.cRma.sendMessage)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Message send successfully")
    },

    async addPaymentMethod(cardNumber, cardExpiryDate, cardCvc) {
        await page.click(selector.customer.cMyAccount.paymentMethods)
        await page.waitForTimeout(2000)

        await base.click(selector.customer.cPaymentMethods.addPaymentMethod)

        //negative test
        // await base.click(selector.customer.cPaymentMethods.addPaymentMethodCard)
        // let failureMessage = await base.getSelectorText(selector.customer.cWooSelector.failureMessage)
        // expect(failureMessage).toMatch("Your card number is incomplete.")

        await page.type(selector.customer.cPaymentMethods.stripeCardNumber, cardNumber)
        await page.type(selector.customer.cPaymentMethods.stripeCardExpiryDate, cardExpiryDate)
        await page.type(selector.customer.cPaymentMethods.stripeCardCvc, cardCvc)

        await base.click(selector.customer.cPaymentMethods.addPaymentMethodCard)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Payment method successfully added.")
    },

    async deletePaymentMethod() {
        await base.click(selector.customer.cMyAccount.paymentMethods)
        await page.click(selector.customer.cPaymentMethods.deleteMethod)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Payment method deleted.")
    },

    async updatePassword(currentPassword, newPassword) {
        await base.clearAndType(selector.customer.cAccountDetails.currentPassword, currentPassword)
        await base.clearAndType(selector.customer.cAccountDetails.NewPassword, newPassword)
        await base.clearAndType(selector.customer.cAccountDetails.confirmNewPassword, newPassword)
        await page.click(selector.customer.cAccountDetails.saveChanges)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Account details changed successfully.")

    },

    async addCustomerDetails(firstName, lastName, displayName, email, currentPassword, newPassword) {

        await base.click(selector.customer.cMyAccount.accountDetails)

        await base.clearAndType(selector.customer.cAccountDetails.firstName, firstName)
        await base.clearAndType(selector.customer.cAccountDetails.lastName, lastName)
        await base.clearAndType(selector.customer.cAccountDetails.displayName, displayName)
        await base.clearAndType(selector.customer.cAccountDetails.email, email)
        await this.updatePassword(currentPassword, newPassword)

        
        await base.click(selector.customer.cMyAccount.accountDetails)
        await this.updatePassword(newPassword, currentPassword)
    },

    async addCustomerSupportTicket(message) {
        await page.click(selector.customer.cMyAccount.supportTickets)
        await page.click(selector.customer.cSupportTickets.openTickets)

        // await page.click(selector.customer.cSupportTickets.addReply)
        await base.clearAndType(selector.customer.cSupportTickets.addReply, message)
        await page.click(selector.customer.cSupportTickets.submitReply)
        //TODO: add assertion
    },

    async searchProduct(productName) {
        await page.type(selector.customer.cShop.searchProduct, productName)
        await base.click(selector.customer.cShop.search)

        let searchedProductName = await base.getSelectorText(selector.customer.cShop.searchedProductName)
        expect(searchedProductName).toMatch(productName)
    },

    async addProductToCartFromShop(productName) {
        await page.type(selector.customer.cShop.searchProduct, productName)
        await base.click(selector.customer.cShop.search)
        await page.click(selector.customer.cShop.addToCart)

        await page.waitForSelector(selector.customer.cShop.viewCart)
        let cartIsVisible = await base.isVisible(selector.customer.cShop.viewCart)
        expect(cartIsVisible).toBe(true)

    },

    async addProductToCartFromSingleProductPage(productName) {
        await base.click(selector.customer.cSingleProduct.addToCart)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch(`“${productName}” has been added to your cart.`)

    },

    async goToCartFromShop() {
        await page.click(selector.customer.cShop.viewCart)
        await page.waitForTimeout(2000)

        await page.waitForSelector(selector.customer.cCart.cartPageHeader)
        let cartIsVisible = await base.isVisible(selector.customer.cCart.cartPageHeader)
        expect(cartIsVisible).toBe(true)
    },

    async goToCartFromSingleProductPage() {
        await page.click(selector.customer.cSingleProduct.viewCart)
        await page.waitForTimeout(2000)

        await page.waitForSelector(selector.customer.cCart.cartPageHeader)
        let cartIsVisible = await base.isVisible(selector.customer.cCart.cartPageHeader)
        expect(cartIsVisible).toBe(true)

    },

    async goToCheckoutFromCart() {
        await page.click(selector.customer.cCart.proceedToCheckout)
        await page.waitForTimeout(2000)

        await page.waitForSelector(selector.customer.cCheckout.checkoutPageHeader)
        let checkoutIsVisible = await base.isVisible(selector.customer.cCheckout.checkoutPageHeader)
        expect(checkoutIsVisible).toBe(true)

    },
    async applyCoupon(couponCode) {
        let couponIsApplied = await base.isVisible(selector.customer.cCart.removeCoupon(couponCode))
        if (couponIsApplied) {
            await this.removeAppliedCoupon(couponCode)
        }

        await page.type(selector.customer.cCart.couponCode, couponCode)
        await base.clickXpath(selector.customer.cCart.applyCoupon)
        await page.waitForTimeout(4000)

        // // negative test
        // let failureMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        // expect(failureMessage).toMatch(`Coupon "${couponCode}" does not exist!`)
        // expect(failureMessage).toMatch("Sorry, this coupon is not applicable to selected products.") //for other vendor coupons
        // expect(failureMessage).toMatch("Coupon code already applied!") 

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Coupon code applied successfully.")
    },

    async removeAppliedCoupon(couponCode) {
        await page.click(selector.customer.cCart.removeCoupon(couponCode))
        await page.waitForTimeout(6000)

        let couponIsApplied = await base.isVisible(selector.customer.cCart.removeCoupon(couponCode))
        expect(couponIsApplied).toBe(false)
        // let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        // expect(successMessage).toMatch('Coupon has been removed.') //not reoccurring for second login
    },

    async placeOrder() {
        await page.waitForSelector(selector.customer.cCheckout.placeOrder)
        await page.click(selector.customer.cCheckout.placeOrder)
        await page.waitForTimeout(6000)

        await page.waitForSelector(selector.customer.cOrderReceived.orderReceivedPageHeader)
        let orderReceivedIsVisible = await base.isVisible(selector.customer.cOrderReceived.orderReceivedPageHeader)
        expect(orderReceivedIsVisible).toBe(true)
    },

    async addBillingAddressInCheckout(billingFirstName, billingLastName, billingCompanyName, billingCompanyIDOrEuidNumber, billingVatOrTaxNumber, billingNameOfBank, billingBankIban, billingCountryOrRegion, billingStreetAddress, billingStreetAddress2, billingTownCity,
        billingState, billingZipCode, billingPhone, billingEmailAddress) {

        //billing address
        await base.clearAndType(selector.customer.cAddress.billingFirstName, billingFirstName)
        await base.clearAndType(selector.customer.cAddress.billingLastName, billingLastName)
        await base.clearAndType(selector.customer.cAddress.billingCompanyName, billingCompanyName)
        await base.clearAndType(selector.customer.cAddress.billingCompanyIDOrEuidNumber, billingCompanyIDOrEuidNumber)
        await base.clearAndType(selector.customer.cAddress.billingVatOrTaxNumber, billingVatOrTaxNumber)
        await base.clearAndType(selector.customer.cAddress.billingNameOfBank, billingNameOfBank)
        await base.clearAndType(selector.customer.cAddress.billingBankIban, billingBankIban)
        await page.click(selector.customer.cAddress.billingCountryOrRegion)
        await page.type(selector.customer.cAddress.billingCountryOrRegionInput, billingCountryOrRegion)
        await page.keyboard.press('Enter')
        // await base.setDropdownOptionSpan(selector.customer.cAddress.bil–lingCountryOrRegionValues, billingCountryOrRegion)
        await base.clearAndType(selector.customer.cAddress.billingStreetAddress, billingStreetAddress)
        await base.clearAndType(selector.customer.cAddress.billingStreetAddress2, billingStreetAddress2)
        await base.clearAndType(selector.customer.cAddress.billingTownCity, billingTownCity)
        await page.click(selector.customer.cAddress.billingState)
        await page.type(selector.customer.cAddress.billingStateInput, billingState)
        await page.keyboard.press('Enter')
        // await base.setDropdownOptionSpan(selector.customer.cAddress.billingStateValues, billingState)
        await base.clearAndType(selector.customer.cAddress.billingZipCode, billingZipCode)
        await base.clearAndType(selector.customer.cAddress.billingPhone, billingPhone)
        await base.clearAndType(selector.customer.cAddress.billingEmailAddress, billingEmailAddress)

    },

    async addShippingAddressInCheckout(shippingFirstName, shippingLastName, shippingCompanyName, shippingCountryOrRegion, shippingStreetAddress, shippingStreetAddress2, shippingTownCity, shippingState, shippingZipCode) {

        await page.click(selector.customer.cCheckout.shipToADifferentAddress)
        //shipping address
        await base.clearAndType(selector.customer.cAddress.shippingFirstName, shippingFirstName)
        await base.clearAndType(selector.customer.cAddress.shippingLastName, shippingLastName)
        await base.clearAndType(selector.customer.cAddress.shippingCompanyName, shippingCompanyName)
        await page.click(selector.customer.cAddress.shippingCountryOrRegion)
        await page.type(selector.customer.cAddress.shippingCountryOrRegionInput, shippingCountryOrRegion)
        await page.keyboard.press('Enter')
        // await base.setDropdownOptionSpan(selector.customer.cAddress.shippingCountryOrRegionValues, shippingCountryOrRegion)
        await base.clearAndType(selector.customer.cAddress.shippingStreetAddress, shippingStreetAddress)
        await base.clearAndType(selector.customer.cAddress.shippingStreetAddress2, shippingStreetAddress2)
        await base.clearAndType(selector.customer.cAddress.shippingTownCity, shippingTownCity)
        await page.click(selector.customer.cAddress.shippingState)
        await page.type(selector.customer.cAddress.shippingStateInput, shippingState)
        await page.keyboard.press('Enter')
        // await base.setDropdownOptionSpan(selector.customer.cAddress.shippingStateValues, shippingState)
        await base.clearAndType(selector.customer.cAddress.shippingZipCode, shippingZipCode)
        await page.waitForTimeout(2000)
    },

    async sendWarrantyRequest(itemQuantity, requestType, RequestDetails) {
        await base.click(selector.customer.cOrders.warrantyRequest)
        await base.click(selector.customer.cOrders.warrantyRequestItemName)
        // await page.type(selector.customer.cOrders.warrantyRequestItemQuantity, itemQuantity)
        await page.type(selector.customer.cOrders.warrantyRequestType, requestType)
        await base.setValue(selector.customer.cOrders.warrantyRequestDetails, RequestDetails)
        await base.click(selector.customer.cOrders.warrantySubmitRequest)
    },

}
