
require('dotenv').config()
const loginPage = require('../pages/login.js')
const adminPage = require('../pages/admin.js')
const vendorPage = require('../pages/vendor.js')
const base = require("../pages/base.js")
const selector = require("../pages/selectors.js")
const helpers = require("../../e2e/utils/helpers.js")
const { faker } = require('@faker-js/faker')

module.exports = {


    // methods



    //-------------------------------------------------- navigation ---------------------------------------------------//



    async goToMyAccount() {
        await base.goto('my-account')

        const url = await page.url()
        expect(url).toMatch('my-account')
    },

    async goToShop() {
        await base.goto('shop')

        const url = await page.url()
        expect(url).toMatch('shop')
    },

    async goToStoreList() {
        await base.goto('store-listing')

        const url = await page.url()
        expect(url).toMatch('store-listing')
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
        let loginIsVisible = await base.isVisible(selector.customer.cRegistration.regEmail)
        if (!loginIsVisible) {
            await this.customerLogout()
        }
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

    //customer become vendor
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
        await page.waitForTimeout(2000)

        let returnMessage = await base.getSelectorText(selector.customer.cDashboard.wholesaleRequestReturnMessage)
        console.log(returnMessage)
        if (returnMessage != "Your wholesale customer request send to the admin. Please wait for approval") {
            let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
            expect(successMessage).toMatch('You are succefully converted as a wholesale customer')
        } else {
            await loginPage.switchUser(process.env.ADMIN, process.env.ADMIN_PASSWORD)
            await adminPage.adminApproveWholesaleRequest(currentUser)
        }
    },

    //customer add billing address
    async addBillingAddress(billingFirstName, billingLastName, billingCompanyName, billingCompanyIDOrEuidNumber, billingVatOrTaxNumber, billingNameOfBank, billingBankIban, billingCountryOrRegion, billingStreetAddress, billingStreetAddress2, billingTownCity,
        billingState, billingZipCode, billingPhone, billingEmailAddress) {
        await this.goToMyAccount()

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

    //customer add shipping address
    async addShippingAddress(shippingFirstName, shippingLastName, shippingCompanyName, shippingCountryOrRegion, shippingStreetAddress, shippingStreetAddress2, shippingTownCity, shippingState, shippingZipCode) {
        await this.goToMyAccount()

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


    // customer send rma request
    async sendRmaMessage(message) {
        await base.click(selector.customer.cMyAccount.rmaRequests)

        await page.type(selector.customer.cRma.message, message)
        await page.click(selector.customer.cRma.sendMessage)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Message send successfully")
    },

    //customer add payment method
    async addPaymentMethod(cardNumber, cardExpiryDate, cardCvc) { //TODO: Actual card number required
        await this.goToMyAccount()
        await page.click(selector.customer.cMyAccount.paymentMethods)
        await page.waitForTimeout(2000)
        await page.click(selector.customer.cPaymentMethods.addPaymentMethod)
        await page.waitForTimeout(2000)

        //negative test
        // await base.click(selector.customer.cPaymentMethods.addPaymentMethodCard)
        // let failureMessage = await base.getSelectorText(selector.customer.cWooSelector.failureMessage)
        // expect(failureMessage).toMatch("Your card number is incomplete.")

        let stripeCardIframe = await base.switchToIframe(selector.customer.cPaymentMethods.stripeCardIframe)
        await base.iframeClearAndType(stripeCardIframe, selector.customer.cPaymentMethods.stripeCardNumber, cardNumber)
        await base.iframeClearAndType(stripeCardIframe, selector.customer.cPaymentMethods.stripeCardExpiryDate, cardExpiryDate)
        await base.iframeClearAndType(stripeCardIframe, selector.customer.cPaymentMethods.stripeCardCvc, cardCvc)
        await page.click(selector.customer.cPaymentMethods.addPaymentMethodCard)
        await page.waitForTimeout(1000)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceError)
        expect(successMessage).toMatch("Unable to process this payment, please try again or use alternative method.")
    },

    //customer delete payment method
    async deletePaymentMethod() { //TODO:need to test
        await base.click(selector.customer.cMyAccount.paymentMethods)
        await page.click(selector.customer.cPaymentMethods.deleteMethod)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Payment method deleted.")
    },

    //customer update password
    async updatePassword(currentPassword, newPassword) {
        await base.clearAndType(selector.customer.cAccountDetails.currentPassword, currentPassword)
        await base.clearAndType(selector.customer.cAccountDetails.NewPassword, newPassword)
        await base.clearAndType(selector.customer.cAccountDetails.confirmNewPassword, newPassword)
        await page.click(selector.customer.cAccountDetails.saveChanges)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Account details changed successfully.")
    },

    //customer add customer details
    async addCustomerDetails(firstName, lastName, displayName, email, currentPassword, newPassword) {
        await this.goToMyAccount()

        await base.click(selector.customer.cMyAccount.accountDetails)

        await base.clearAndType(selector.customer.cAccountDetails.firstName, firstName)
        await base.clearAndType(selector.customer.cAccountDetails.lastName, lastName)
        await base.clearAndType(selector.customer.cAccountDetails.displayName, displayName)
        // await base.clearAndType(selector.customer.cAccountDetails.email, email) 
        await this.updatePassword(currentPassword, newPassword)

        //cleanup
        await base.click(selector.customer.cMyAccount.accountDetails)
        await this.updatePassword(newPassword, currentPassword)
    },

    //customer search vendor
    async searchVendor(vendorName) {
        await this.goToStoreList()

        await page.click(selector.customer.cStoreList.filter)
        await page.type(selector.customer.cStoreList.searchVendors, vendorName)
        await page.click(selector.customer.cStoreList.apply)

        await base.waitForSelector(selector.customer.cStoreList.visitStore(vendorName))
        let cartIsVisible = await base.isVisible(selector.customer.cStoreList.visitStore(vendorName))
        expect(cartIsVisible).toBe(true)
        await page.waitForTimeout(500)
    },

    //customer follow vendor
    async followVendor(vendorName) {
        await this.searchVendor(vendorName)

        let currentStoreFollowStatus = await base.getSelectorText(selector.customer.cStoreList.currentStoreFollowStatus(vendorName))
        if (currentStoreFollowStatus == "Following") {
            await base.clickXpath(selector.customer.cStoreList.followUnFollowStore(vendorName))
            await page.waitForTimeout(1000)
        }
        await base.clickXpath(selector.customer.cStoreList.followUnFollowStore(vendorName))
        await page.waitForTimeout(1000)
        let storeFollowStatus = await base.getSelectorText(selector.customer.cStoreList.currentStoreFollowStatus(vendorName))
        expect(storeFollowStatus).toMatch('Following')
    },

    //customer review store
    async reviewStore(vendorName, rating, reviewTitle) {
        await this.searchVendor(vendorName)

        await base.click(selector.customer.cStoreList.visitStore(vendorName))

        let reviewMessage = faker.datatype.uuid()
        await base.click(selector.customer.cSingleStore.reviews)
        await page.waitForTimeout(1000)
        let writeAReviewIsVisible = await base.isVisible(selector.customer.cSingleStore.writeAReview)
        if (writeAReviewIsVisible) {
            await page.click(selector.customer.cSingleStore.writeAReview)
        } else {
            await page.click(selector.customer.cSingleStore.editReview)
        }
        await page.waitForTimeout(2000)
        await base.setElementValue(selector.customer.cSingleStore.rating, 'style', rating)
        await base.clearAndType(selector.customer.cSingleStore.reviewTitle, reviewTitle)
        await base.clearAndType(selector.customer.cSingleStore.reviewMessage, reviewMessage)
        await page.click(selector.customer.cSingleStore.submitReview)
        await page.waitForTimeout(2000)

        let submittedReviewMessage = await base.getSelectorText(selector.customer.cSingleStore.submittedReview(reviewMessage))
        expect(submittedReviewMessage).toMatch(reviewMessage)
    },

    //customer ask for get support
    async askForGetSupport(vendorName, getSupportSubject, getSupportMessage) {
        await this.searchVendor(vendorName)

        await base.click(selector.customer.cStoreList.visitStore(vendorName))

        await page.click(selector.customer.cSingleStore.getSupport)
        await page.waitForTimeout(2000)
        await page.type(selector.customer.cSingleStore.subject, getSupportSubject)
        await page.type(selector.customer.cSingleStore.message, getSupportMessage)
        await page.click(selector.customer.cSingleStore.submitGetSupport)
        await page.waitForTimeout(2000)

        let successMessage = await base.getSelectorText(selector.customer.cDokanSelector.dokanAlertSuccessMessage)
        expect(successMessage).toMatch('Thank you. Your ticket has been submitted!')
        //close popup
        await page.click(selector.customer.cDokanSelector.dokanAlertClose)
    },

    //customer add customer support ticket
    async addCustomerSupportTicket(message) {
        await page.click(selector.customer.cMyAccount.supportTickets)
        await page.click(selector.customer.cSupportTickets.openTickets)

        // await page.click(selector.customer.cSupportTickets.addReply)
        await base.clearAndType(selector.customer.cSupportTickets.addReply, message)
        await page.click(selector.customer.cSupportTickets.submitReply)
        //TODO: add assertion
    },

    //customer search product
    async searchProduct(productName) {
        await this.goToShop()

        await page.type(selector.customer.cShop.searchProduct, productName)
        await base.click(selector.customer.cShop.search)

        let searchedProductName = await base.getSelectorText(selector.customer.cShop.searchedProductName)
        expect(searchedProductName).toMatch(productName)
    },

    //customer go to product(single) details
    async goToProductDetails(productName) {
        await this.searchProduct(productName)

        await base.click(selector.customer.cShop.productDetailsViewLink)

        let productTitle = await base.getSelectorText(selector.customer.cSingleProduct.productTitle)
        expect(productTitle).toMatch(productName)
    },

    //customer rate & review product
    async reviewProduct(productName, rating) {
        await this.goToProductDetails(productName)

        let reviewMessage = faker.datatype.uuid()
        await page.click(selector.customer.cSingleProduct.reviews)
        await page.waitForTimeout(2000)
        await page.click(selector.customer.cSingleProduct.rating(rating))
        await base.clearAndType(selector.customer.cSingleProduct.reviewMessage, reviewMessage)
        await base.click(selector.customer.cSingleProduct.submitReview)

        let duplicateCommentAlertIsVisible = await base.isVisible(selector.customer.cSingleProduct.duplicateCommentAlert)
        if (duplicateCommentAlertIsVisible) {
            await base.click(selector.customer.cSingleProduct.backFromDuplicateCommentAlert)
            await this.rateProduct(rating)
        }

        let submittedReviewMessage = await base.getSelectorText(selector.customer.cSingleProduct.submittedReview(reviewMessage))
        expect(submittedReviewMessage).toMatch(reviewMessage)

        let awaitingApprovalReviewIsVisible = await base.isVisible(selector.customer.cSingleProduct.awaitingApprovalReview(reviewMessage))
        if (awaitingApprovalReviewIsVisible) {
            await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
            await vendorPage.approveProductReview(reviewMessage)
        }

    },

    // customer report product
    async reportProduct(productName, reportReason, reportReasonDescription) {
        await this.goToProductDetails(productName)

        await page.click(selector.customer.cSingleProduct.reportAbuse)
        await page.waitForTimeout(2000)
        await base.clickXpath(selector.customer.cSingleProduct.reportReasonByName(reportReason))
        await page.type(selector.customer.cSingleProduct.reportDescription, reportReasonDescription)
        await page.click(selector.customer.cSingleProduct.reportSubmit)
        await page.waitForTimeout(2500)

        let successMessage = await base.getSelectorText(selector.customer.cSingleProduct.reportSubmitSuccessMessage)
        expect(successMessage).toMatch('Your report has been submitted. Thank you for your response.')

        await page.click(selector.customer.cSingleProduct.confirmReportSubmit)

    },

    // customer enquire product
    async enquireProduct(productName, enquiryDetails) {
        await this.goToProductDetails(productName)

        await page.click(selector.customer.cSingleProduct.productEnquiry)
        await page.waitForTimeout(1000)
        await page.type(selector.customer.cSingleProduct.enquiryMessage, enquiryDetails)
        await page.click(selector.customer.cSingleProduct.submitEnquiry)
        await page.waitForTimeout(2500)

        let successMessage = await base.getSelectorText(selector.customer.cSingleProduct.submitEnquirySuccessMessage)
        expect(successMessage).toMatch('Email sent successfully!')
    },

    async buyProduct(productName, couponCode, getOrderDetails) {
        await this.goToShop()
        await this.addProductToCartFromShop(productName)
        await this.goToCartFromShop()
        if (couponCode) {
            await this.applyCoupon(couponCode)
        }
        await this.goToCheckoutFromCart()
        let [orderId] = await this.placeOrder(getOrderDetails)
        return orderId
    },

    //customer add product to cart from shop page
    async addProductToCartFromShop(productName) {
        await page.type(selector.customer.cShop.searchProduct, productName)
        await base.click(selector.customer.cShop.search)
        await page.click(selector.customer.cShop.addToCart)

        await page.waitForSelector(selector.customer.cShop.viewCart)
        let cartIsVisible = await base.isVisible(selector.customer.cShop.viewCart)
        expect(cartIsVisible).toBe(true)

    },

    //customer add product to cart from product details page
    async addProductToCartFromSingleProductPage(productName) {
        await base.click(selector.customer.cSingleProduct.addToCart)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch(`“${productName}” has been added to your cart.`)
    },

    //go to cart from shop page
    async goToCartFromShop() {
        await page.click(selector.customer.cShop.viewCart)
        await page.waitForTimeout(2000)

        await page.waitForSelector(selector.customer.cCart.cartPageHeader)
        let cartIsVisible = await base.isVisible(selector.customer.cCart.cartPageHeader)
        expect(cartIsVisible).toBe(true)
    },

    //go to cart from product details page
    async goToCartFromSingleProductPage() {
        await page.click(selector.customer.cSingleProduct.viewCart)
        await page.waitForTimeout(2000)

        await page.waitForSelector(selector.customer.cCart.cartPageHeader)
        let cartIsVisible = await base.isVisible(selector.customer.cCart.cartPageHeader)
        expect(cartIsVisible).toBe(true)

    },

    //got to checkout from cart
    async goToCheckoutFromCart() {
        await page.click(selector.customer.cCart.proceedToCheckout)
        await page.waitForTimeout(2000)

        await page.waitForSelector(selector.customer.cCheckout.checkoutPageHeader)
        let checkoutIsVisible = await base.isVisible(selector.customer.cCheckout.checkoutPageHeader)
        expect(checkoutIsVisible).toBe(true)

    },

    //customer apply coupon
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

    //customer remove applied coupon
    async removeAppliedCoupon(couponCode) {
        await page.click(selector.customer.cCart.removeCoupon(couponCode))
        await page.waitForTimeout(6000)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch('Coupon has been removed.')
    },

    //customer place order
    async placeOrder(getOrderDetails) {
        //TODO:handle billing address warning or shipping address warning
        // await customerPage.addBillingAddressInCheckout('customer1', 'c1', 'c1company', 'c1companyID', 'c1vat', 'c1bank', 'c1bankIBAN', 'United States (US)', 'abc street', 'xyz street2', 'New York', 'New York', '10006', '0123456789', 'customer1@gamil.com')
        // await customerPage.addShippingAddressInCheckout('customer1', 'c1', 'c1company', 'United States (US)', 'abc street', 'xyz street2', 'New York', 'New York', '10006')

        await page.waitForTimeout(4000)
        // await page.waitForSelector(selector.customer.cCheckout.placeOrder)
        await page.click(selector.customer.cCheckout.placeOrder)
        await page.waitForTimeout(6000)

        await page.waitForSelector(selector.customer.cOrderReceived.orderReceivedPageHeader)
        let orderReceivedIsVisible = await base.isVisible(selector.customer.cOrderReceived.orderReceivedPageHeader)
        expect(orderReceivedIsVisible).toBe(true)

        if (getOrderDetails) {
            // await this.getOrderDetails()

            let orderId = await base.getSelectorText(selector.customer.cOrderReceived.orderNumber)
            let subtotal = await base.getSelectorText(selector.customer.cOrderReceived.subtotal)
            let shipping = await base.getSelectorText(selector.customer.cOrderReceived.shipping)
            let tax = await base.getSelectorText(selector.customer.cOrderReceived.tax)
            let paymentMethod = await base.getSelectorText(selector.customer.cOrderReceived.orderPaymentMethod)
            let orderTotal = await base.getSelectorText(selector.customer.cOrderReceived.orderTotal)
            // console.log(orderId, subtotal, shipping, tax, paymentMethod, orderTotal)
            return [orderId, subtotal, shipping, tax, paymentMethod, orderTotal]

        }
    },

    //customer add billing address in checkout
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

    //customer add shipping address in checkout
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

    //customer ask for warranty
    async sendWarrantyRequest(orderId, productName, requestType, requestReason, requestDetails) {
        await this.goToMyAccount()

        await base.click(selector.customer.cMyAccount.orders)
        await base.click(selector.customer.cOrders.ordersWarrantyRequest(orderId))

        await base.clickXpath(selector.customer.cOrders.warrantyRequestItemCheckbox(productName))
        // await page.type(selector.customer.cOrders.warrantyRequestItemQuantity(productName), itemQuantity)
        await page.select(selector.customer.cOrders.warrantyRequestType, requestType)
        // await page.select(selector.customer.cOrders.warrantyRequestReason, requestReason)
        await page.type(selector.customer.cOrders.warrantyRequestDetails, requestDetails)
        await base.click(selector.customer.cOrders.warrantySubmitRequest)
        await page.waitForTimeout(2000)

        let successMessage = await base.getSelectorText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch('Request has been successfully submitted')

        //cleanup
        await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        // await vendorPage.deleteReturnRequest(orderId)
        await vendorPage.approveReturnRequest(orderId, productName)


    },

}

