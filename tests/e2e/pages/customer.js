const loginPage = require('../pages/login.js')
const adminPage = require('../pages/admin.js')
const base = require("../pages/base.js")
const data = require('../utils/testData.js')
const helpers = require("../utils/helpers.js")
const selector = require("../pages/selectors.js")



module.exports = {

    // Navigation 

    async goToMyAccount() {
        await base.goIfNotThere(data.subUrls.frontend.myAccount)

        const url = await page.url()
        expect(url).toMatch(data.subUrls.frontend.myAccount)
    },

    async goToShop() {
        await base.goIfNotThere(data.subUrls.frontend.shop)

        const url = await page.url()
        expect(url).toMatch(data.subUrls.frontend.shop)
    },

    async goToStoreList() {
        await base.goIfNotThere(data.subUrls.frontend.storeListing)

        const url = await page.url()
        expect(url).toMatch(data.subUrls.frontend.storeListing)
    },

    async goToCart() {
        await base.goIfNotThere(data.subUrls.frontend.cart)

        const url = await page.url()
        expect(url).toMatch(data.subUrls.frontend.cart)
    },

    // Customer Details 


    // Customer Register
    async customerRegister(customerInfo) {
        let username = customerInfo.username() 
        await this.goToMyAccount()
        let loginIsVisible = await base.isVisible(selector.customer.cRegistration.regEmail)
        if (!loginIsVisible) {
            await loginPage.logout()
        }
        await base.clearAndType(selector.customer.cRegistration.regEmail, username + data.customer.customerInfo.emailDomain)
        await base.clearAndType(selector.customer.cRegistration.regPassword, customerInfo.password)
        await base.click(selector.customer.cRegistration.regCustomer)
        await base.clickAndWait(selector.customer.cRegistration.register)

        let registrationErrorIsVisible = await base.isVisible(selector.customer.cWooSelector.wooCommerceError)
        if (registrationErrorIsVisible) {
            let errorMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceError)
            if (errorMessage.includes(data.customer.registrationErrorMessage)) {
                return
            }
        }

        let loggedInUser = await base.getCurrentUser()
        expect(username.toLowerCase()).toBe(loggedInUser)
    },


    // Customer Become Vendor
    async customerBecomeVendor(customerInfo) {
        firstName = customerInfo.firstName()
        await base.clickAndWait(selector.customer.cDashboard.becomeVendor)
        // vendor registration form
        await base.type(selector.customer.cDashboard.firstName, firstName)
        await base.type(selector.customer.cDashboard.lastName, customerInfo.lastName())
        await base.type(selector.customer.cDashboard.shopName, customerInfo.storename())
        await base.click(selector.customer.cDashboard.shopUrl)
        await base.type(selector.customer.cDashboard.address, customerInfo.street1)
        await base.type(selector.customer.cDashboard.phone, customerInfo.phone)
        await base.type(selector.customer.cDashboard.companyName, customerInfo.companyName)
        await base.type(selector.customer.cDashboard.companyId, customerInfo.companyId)
        await base.type(selector.customer.cDashboard.vatNumber, customerInfo.vatNumber)
        await base.type(selector.customer.cDashboard.bankName, customerInfo.bankName)
        await base.type(selector.customer.cDashboard.bankIban, customerInfo.bankIban)
        await base.clickIfVisible(selector.customer.cDashboard.termsAndConditions)
        let subscriptionPackIsVisible = await base.isVisible(selector.customer.cDashboard.subscriptionPack)
        await base.click(selector.customer.cDashboard.becomeAVendor)
        await base.wait(4)
        // if (subscriptionPackIsVisible) {
        //     console.log('subscription pack is visible')
        //     await this.placeOrder('bank', false, false, true)//TODO: don't work: handle vendor subscription pack scenario and assertion too
        // }

    },

    // Customer Become Wholesale Customer
    async customerBecomeWholesaleCustomer() {
        let currentUser = await base.getCurrentUser()
        await base.click(selector.customer.cDashboard.becomeWholesaleCustomer)
        await base.wait(4)
        let returnMessage = await base.getElementText(selector.customer.cDashboard.wholesaleRequestReturnMessage)
        if (returnMessage != data.wholesale.wholesaleRequestSendMessage) {
            let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
            expect(successMessage).toMatch(data.wholesale.becomeWholesaleCustomerSuccessMessage)
        } else {
            await loginPage.switchUser(data.admin)
            await adminPage.adminApproveWholesaleRequest(currentUser)
        }
    },

    // Customer Add Billing Address
    async addBillingAddress(billingInfo) {
        await this.goToMyAccount()

        await base.clickAndWait(selector.customer.cMyAccount.addresses)
        //billing address
        await page.$(selector.customer.cMyAccount.addresses) !== null ? await base.clickAndWait(selector.customer.cAddress.editBillingAddress) : await base.clickAndWait(selector.customer.cAddress.editBillingAddress1)
        await base.clearAndType(selector.customer.cAddress.billingFirstName, billingInfo.firstName())
        await base.clearAndType(selector.customer.cAddress.billingLastName, billingInfo.lastName())
        await base.clearAndType(selector.customer.cAddress.billingCompanyName, billingInfo.companyName)
        await base.clearAndType(selector.customer.cAddress.billingCompanyID, billingInfo.companyId)
        await base.clearAndType(selector.customer.cAddress.billingVatOrTaxNumber, billingInfo.vatNumber)
        await base.clearAndType(selector.customer.cAddress.billingNameOfBank, billingInfo.bankName)
        await base.clearAndType(selector.customer.cAddress.billingBankIban, billingInfo.bankIban)
        await base.click(selector.customer.cAddress.billingCountryOrRegion)
        await base.type(selector.customer.cAddress.billingCountryOrRegionInput, billingInfo.country)
        await base.press(data.key.enter)
        await base.clearAndType(selector.customer.cAddress.billingStreetAddress, billingInfo.street1)
        await base.clearAndType(selector.customer.cAddress.billingStreetAddress2, billingInfo.street2)
        await base.clearAndType(selector.customer.cAddress.billingTownCity, billingInfo.city)
        await base.click(selector.customer.cAddress.billingState)
        await base.type(selector.customer.cAddress.billingStateInput, billingInfo.state)
        await base.press(data.key.enter)
        await base.clearAndType(selector.customer.cAddress.billingZipCode, billingInfo.zipCode)
        await base.clearAndType(selector.customer.cAddress.billingPhone, billingInfo.phone)
        await base.clearAndType(selector.customer.cAddress.billingEmailAddress, billingInfo.email)
        await base.clickAndWait(selector.customer.cAddress.billingSaveAddress)

        let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch(data.customer.customerInfo.addressChangeSuccessMessage)//TODO: decide success message should come from parameter or directly import form data file
    },

    // Customer Add Shipping Address
    async addShippingAddress(shippingInfo) {
        await this.goToMyAccount()

        await base.clickAndWait(selector.customer.cMyAccount.addresses)
        //shipping address
        await base.clickAndWait(selector.customer.cAddress.editShippingAddress)
        await base.clearAndType(selector.customer.cAddress.shippingFirstName, shippingInfo.firstName())
        await base.clearAndType(selector.customer.cAddress.shippingLastName, shippingInfo.lastName())
        await base.clearAndType(selector.customer.cAddress.shippingCompanyName, shippingInfo.companyName)
        await base.click(selector.customer.cAddress.shippingCountryOrRegion)
        await base.type(selector.customer.cAddress.shippingCountryOrRegionInput, shippingInfo.country)
        await base.press(data.key.enter)
        await base.clearAndType(selector.customer.cAddress.shippingStreetAddress, shippingInfo.street1)
        await base.clearAndType(selector.customer.cAddress.shippingStreetAddress2, shippingInfo.street2)
        await base.clearAndType(selector.customer.cAddress.shippingTownCity, shippingInfo.city)
        await base.click(selector.customer.cAddress.shippingState)
        await base.type(selector.customer.cAddress.shippingStateInput, shippingInfo.state)
        await base.press(data.key.enter)
        await base.clearAndType(selector.customer.cAddress.shippingZipCode, shippingInfo.zipCode)
        await base.clickAndWait(selector.customer.cAddress.shippingSaveAddress)

        let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch(data.customer.customerInfo.addressChangeSuccessMessage)
    },

    // Customer Send Rma Request
    async sendRmaMessage(message) {
        await base.clickAndWait(selector.customer.cMyAccount.rmaRequests)

        await base.type(selector.customer.cRma.message, message)
        await base.click(selector.customer.cRma.sendMessage)

        let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Message send successfully")
    },

    // Customer Update Password
    async updatePassword(currentPassword, newPassword) {
        await base.clearAndType(selector.customer.cAccountDetails.currentPassword, currentPassword)
        await base.clearAndType(selector.customer.cAccountDetails.NewPassword, newPassword)
        await base.clearAndType(selector.customer.cAccountDetails.confirmNewPassword, newPassword)
        await base.click(selector.customer.cAccountDetails.saveChanges)

        let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Account details changed successfully.")
    },

    // Customer Add Customer Details
    async addCustomerDetails(customerInfo) {
        await this.goToMyAccount()

        await base.clickAndWait(selector.customer.cMyAccount.accountDetails)

        await base.clearAndType(selector.customer.cAccountDetails.firstName, customerInfo.firstName())
        await base.clearAndType(selector.customer.cAccountDetails.lastName, customerInfo.lastName())
        await base.clearAndType(selector.customer.cAccountDetails.displayName, customerInfo.firstName())
        // await base.clearAndType(selector.customer.cAccountDetails.email, customerInfo.email()) 
        await this.updatePassword(customerInfo.password, customerInfo.password1)

        // Cleanup
        // await base.clickAndWait(selector.customer.cMyAccount.accountDetails)
        // await this.updatePassword(newPassword, currentPassword)
    },

    // Customer Search Vendor
    async searchVendor(vendorName) {
        await this.goToStoreList()

        await base.click(selector.customer.cStoreList.filter)
        await base.type(selector.customer.cStoreList.searchVendors, vendorName)
        await base.click(selector.customer.cStoreList.apply)

        await base.waitForSelector(selector.customer.cStoreList.visitStore(vendorName))
        let cartIsVisible = await base.isVisible(selector.customer.cStoreList.visitStore(vendorName))
        expect(cartIsVisible).toBe(true)
        await base.wait(0.5)
    },

    // Customer Follow Vendor
    async followVendor(vendorName) {
        await this.searchVendor(vendorName)

        let currentStoreFollowStatus = await base.getElementText(selector.customer.cStoreList.currentStoreFollowStatus(vendorName))
        // Unfollow If Not Already
        if (currentStoreFollowStatus == "Following") {
            await base.clickAndWaitOnceForAllXhr(selector.customer.cStoreList.followUnFollowStore(vendorName))
            await base.wait(1)
        }
        await base.clickAndWaitOnceForAllXhr(selector.customer.cStoreList.followUnFollowStore(vendorName))
        await base.wait(1)
        let storeFollowStatus = await base.getElementText(selector.customer.cStoreList.currentStoreFollowStatus(vendorName))
        expect(storeFollowStatus).toMatch('Following')
    },

    // Customer Review Store
    async reviewStore(vendorName, store) {
        await this.searchVendor(vendorName)

        await base.clickAndWait(selector.customer.cStoreList.visitStore(vendorName))

        let reviewMessage = store.reviewMessage()
        await base.clickAndWait(selector.customer.cSingleStore.reviews)
        await base.wait(1)
        let writeAReviewIsVisible = await base.isVisible(selector.customer.cSingleStore.writeAReview)
        if (writeAReviewIsVisible) {
            await base.click(selector.customer.cSingleStore.writeAReview)
        } else {
            await base.click(selector.customer.cSingleStore.editReview)
        }
        await base.wait(2)
        await base.setElementAttributeValue(selector.customer.cSingleStore.rating, 'style', rating)
        await base.clearAndType(selector.customer.cSingleStore.reviewTitle, store.reviewTitle)
        await base.clearAndType(selector.customer.cSingleStore.reviewMessage, store.reviewMessage)
        await base.click(selector.customer.cSingleStore.submitReview)
        await base.wait(2)

        let submittedReviewMessage = await base.getElementText(selector.customer.cSingleStore.submittedReview(reviewMessage))
        expect(submittedReviewMessage).toMatch(reviewMessage)
    },

    // Customer Ask for Get Support
    async askForGetSupport(vendorName, getSupport) {
        await this.searchVendor(vendorName)

        await base.clickAndWait(selector.customer.cStoreList.visitStore(vendorName))

        await base.click(selector.customer.cSingleStore.getSupport)
        await base.wait(2)
        await base.type(selector.customer.cSingleStore.subject, getSupport.subject)
        await base.type(selector.customer.cSingleStore.message, getSupport.message)
        await base.click(selector.customer.cSingleStore.submitGetSupport)
        await base.wait(2)

        let successMessage = await base.getElementText(selector.customer.cDokanSelector.dokanAlertSuccessMessage)
        expect(successMessage).toMatch(getSupport.supportSubmitSuccessMessage)

        // Close Popup
        await base.click(selector.customer.cDokanSelector.dokanAlertClose)
    },

    // Customer Add Customer Support Ticket
    async addCustomerSupportTicket(message) {
        await base.click(selector.customer.cMyAccount.supportTickets)
        await base.click(selector.customer.cSupportTickets.openTickets)

        // await base.click(selector.customer.cSupportTickets.addReply)
        await base.clearAndType(selector.customer.cSupportTickets.addReply, message)
        await base.click(selector.customer.cSupportTickets.submitReply)
        //TODO: add assertion
    },

    // Customer Rate & Review Product
    async reviewProduct(productName, review) {
        await this.goToProductDetails(productName)

        let reviewMessage = review.reviewMessage()
        await base.click(selector.customer.cSingleProduct.reviews)
        await base.wait(2)
        await base.click(selector.customer.cSingleProduct.rating(review.rating))
        await base.clearAndType(selector.customer.cSingleProduct.reviewMessage, reviewMessage)
        await base.clickAndWait(selector.customer.cSingleProduct.submitReview)

        let duplicateCommentAlertIsVisible = await base.isVisible(selector.customer.cSingleProduct.duplicateCommentAlert)
        if (duplicateCommentAlertIsVisible) {
            await base.clickAndWait(selector.customer.cSingleProduct.backFromDuplicateCommentAlert)
            await this.rateProduct(rating)
        }

        let submittedReviewMessage = await base.getElementText(selector.customer.cSingleProduct.submittedReview(reviewMessage))
        expect(submittedReviewMessage).toMatch(reviewMessage)

        //TODO: uncomment after handling circular issue
        // let awaitingApprovalReviewIsVisible = await base.isVisible(selector.customer.cSingleProduct.awaitingApprovalReview(reviewMessage))
        // if (awaitingApprovalReviewIsVisible) {
        //     await loginPage.switchUser(data.vendor)
        //     await vendorPage.approveProductReview(reviewMessage)
        // }

    },

    // Customer Report Product
    async reportProduct(productName, report) {
        await this.goToProductDetails(productName)

        await base.click(selector.customer.cSingleProduct.reportAbuse)
        // await base.wait(2)
        await base.click(selector.customer.cSingleProduct.reportReasonByName(report.reportReason))
        await base.type(selector.customer.cSingleProduct.reportDescription, report.reportReasonDescription)
        await base.click(selector.customer.cSingleProduct.reportSubmit)
        // await base.wait(2.5)

        let successMessage = await base.getElementText(selector.customer.cSingleProduct.reportSubmitSuccessMessage)
        expect(successMessage).toMatch(report.reportSubmitSuccessMessage)

        await base.click(selector.customer.cSingleProduct.confirmReportSubmit) //TODO: why this line??

    },

    // Customer Enquire Product
    async enquireProduct(productName, enquiry) {
        await this.goToProductDetails(productName)

        await base.click(selector.customer.cSingleProduct.productEnquiry)
        // await base.wait(1)
        await base.type(selector.customer.cSingleProduct.enquiryMessage, enquiry.enquiryDetails)
        await base.click(selector.customer.cSingleProduct.submitEnquiry)
        // await base.wait(2.5)

        let successMessage = await base.getElementText(selector.customer.cSingleProduct.submitEnquirySuccessMessage)
        expect(successMessage).toMatch(enquiry.enquirySubmitSuccessMessage)
    },

    async buyProduct(productName, couponCode = false, getOrderDetails = false, payMentMethod = 'bank', paymentDetails) {
        // Clear Cart before Buying
        // await this.clearCart()
        // Buy Product
        await this.searchProduct(productName)
        await this.addProductToCartFromShop(productName)//TODO: implement for other products , buy every product from single product page
        await this.goToCartFromShop()
        if (couponCode) {
            await this.applyCoupon(couponCode)
        }
        await this.goToCheckoutFromCart()
        let cOrderDetails = await this.placeOrder(payMentMethod, getOrderDetails, paymentDetails)
        return cOrderDetails
    },

    // Customer Search Product
    async searchProduct(productName) {
        await this.goToShop()

        await base.type(selector.customer.cShop.searchProduct, productName)
        await base.clickAndWait(selector.customer.cShop.search)

        let searchedProductName = await base.getElementText(selector.customer.cShop.searchedProductName)
        expect(searchedProductName).toMatch(productName)
    },

    // Customer Go to Product(single) details
    async goToProductDetails(productName) {
        await this.searchProduct(productName)

        await base.clickAndWait(selector.customer.cShop.productDetailsViewLink)

        let productTitle = await base.getElementText(selector.customer.cSingleProduct.productTitle)
        expect(productTitle).toMatch(productName)
    },


    // Customer Add Product to Cart from Shop Page
    async addProductToCartFromShop(productName) {
        await this.searchProduct(productName)

        await base.click(selector.customer.cShop.addToCart)

        await base.waitForSelector(selector.customer.cShop.viewCart)
        let cartIsVisible = await base.isVisible(selector.customer.cShop.viewCart)
        expect(cartIsVisible).toBe(true)

    },

    // Customer Add Product to Cart from Product Details Page
    async addProductToCartFromSingleProductPage(productName) {
        await base.clickAndWait(selector.customer.cSingleProduct.addToCart)

        let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch(`“${productName}” has been added to your cart.`)
    },

    // Go to Cart from Shop Page
    async goToCartFromShop() {
        await base.click(selector.customer.cShop.viewCart)
        // await base.wait(2)  

        await base.waitForSelector(selector.customer.cCart.cartPageHeader)
        let cartIsVisible = await base.isVisible(selector.customer.cCart.cartPageHeader)
        expect(cartIsVisible).toBe(true) //TODO: update assertion, also verify cart product added product from shop
    },


    // Go to Cart from Product Details Page
    async goToCartFromSingleProductPage() {
        await base.click(selector.customer.cSingleProduct.viewCart)
        // await base.wait(2)

        await base.waitForSelector(selector.customer.cCart.cartPageHeader)
        let cartIsVisible = await base.isVisible(selector.customer.cCart.cartPageHeader)
        expect(cartIsVisible).toBe(true)
    },

    // Got to Checkout from Cart
    async goToCheckoutFromCart() {
        await base.click(selector.customer.cCart.proceedToCheckout)
        // await base.wait(2)
        await base.waitForSelector(selector.customer.cCheckout.checkoutPageHeader)
        let checkoutIsVisible = await base.isVisible(selector.customer.cCheckout.checkoutPageHeader)
        expect(checkoutIsVisible).toBe(true)
    },

    // Clear Cart
    async clearCart() {
        await this.goToCart()
        let cartProductIsVisible = await base.isVisible(selector.customer.cCart.productCrossIcon)
        if (cartProductIsVisible) {
            await base.click(selector.customer.cCart.productCrossIcon)
            let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
            expect(successMessage).toContain('removed. Undo?')
            await this.clearCart()
        } else {
            let successMessage = await base.getElementText(selector.customer.cCart.cartEmptyMessage)
            expect(successMessage).toMatch('Your cart is currently empty.')
        }
    },

    // Update Product Quantity from Cart
    async updateProductQuantityOnCart(productName, quantity) {
        await base.clearAndType(selector.customer.cCart.quantity(productName), quantity)
        await base.click(selector.customer.cCart.updateCart)
        await base.wait(6)

        // let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        // expect(successMessage).toMatch("Cart updated.")
        let updateProductQuantity = await base.getElementValue(selector.customer.cCart.quantity(productName))
        expect(updateProductQuantity).toMatch(quantity)
    },

    // Customer Apply Coupon
    async applyCoupon(couponCode) {
        let couponIsApplied = await base.isVisible(selector.customer.cCart.removeCoupon(couponCode))
        if (couponIsApplied) {
            await this.removeAppliedCoupon(couponCode)
        }

        await base.type(selector.customer.cCart.couponCode, couponCode)
        await base.click(selector.customer.cCart.applyCoupon)
        await base.wait(6)

        // // Negative Test
        // let failureMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        // expect(failureMessage).toMatch(`Coupon "${couponCode}" does not exist!`)
        // expect(failureMessage).toMatch("Sorry, this coupon is not applicable to selected products.") //for other vendor coupons
        // expect(failureMessage).toMatch("Coupon code already applied!") 

        let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch("Coupon code applied successfully.")
    },

    // Customer Remove Applied Coupon
    async removeAppliedCoupon(couponCode) {
        await base.click(selector.customer.cCart.removeCoupon(couponCode))
        await base.wait(5)

        let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch('Coupon has been removed.')
    },

    // Customer Place Order
    async placeOrder(paymentMethod = 'bank', getOrderDetails = false, paymentDetails, billingDetails = false, shippingDetails = false) {
        //TODO:handle billing address warning or shipping address warning
        if (billingDetails) await this.addBillingAddressInCheckout(data.customer.customerInfo)
        if (shippingDetails) await this.addShippingAddressInCheckout(data.customer.customerInfo)
        await base.wait(6)

        switch (paymentMethod) {
            case 'bank':
                await base.click(selector.customer.cCheckout.directBankTransfer)
                await base.wait(2)
                await base.clickAndWait(selector.customer.cCheckout.placeOrder)

                break
            case 'check':
                await base.click(selector.customer.cCheckout.checkPayments)
                await base.wait(2)
                await base.clickAndWait(selector.customer.cCheckout.placeOrder)
                break
            case 'cod':
                await base.click(selector.customer.cCheckout.cashOnDelivery)
                await base.wait(2)
                await base.clickAndWait(selector.customer.cCheckout.placeOrder)
                break
            case 'stripe':
                await this.payWithStripe()
                break
            case 'paypalMarketPlace':
                await this.payWithPaypalMarketPlace()
                break
            case 'razorPay':
                await this.payWithRazorPay()
                break
            case 'mangoPay':
                await this.payWithMangoPay()
                break
            case 'stripeExpress':
                await this.payWithStripeExpress(paymentDetails)
                break
            default:
                break
        }

        await base.waitForSelector(selector.customer.cOrderReceived.orderReceivedPageHeader)
        let orderReceivedIsVisible = await base.isVisible(selector.customer.cOrderReceived.orderReceivedPageHeader)
        expect(orderReceivedIsVisible).toBe(true)

        if (getOrderDetails) {
            return await this.getOrderDetailsAfterPlaceOrder()
        }
    },


    async payWithStripe() { },
    async payWithPaypalMarketPlace() { },
    async payWithRazorPay() { },
    async payWithMangoPay() { },
    async payWithStripeExpress(paymentDetails) {
        let paymentMethod = paymentDetails.paymentMethod
        let cardInfo = paymentDetails.cardInfo

        await base.click(selector.customer.cCheckout.stripeExpress)
        await base.wait(2)

        let savedTestCard4242IsVisible = await base.isVisible(selector.customer.cPayWithStripeExpress.savedTestCard4242)
        if (!savedTestCard4242IsVisible) {
            let stripeExpressCardIframe = await base.switchToIframe(selector.customer.cPayWithStripeExpress.stripeExpressIframe)
            switch (paymentMethod) {
                case 'card':
                    await base.iframeClick(stripeExpressCardIframe, selector.customer.cPayWithStripeExpress.creditCard)
                    await base.iframeClearAndType(stripeExpressCardIframe, selector.customer.cPayWithStripeExpress.cardNumber, cardInfo.cardNumber)
                    await base.iframeClearAndType(stripeExpressCardIframe, selector.customer.cPayWithStripeExpress.expDate, cardInfo.cardExpiryDate)
                    await base.iframeClearAndType(stripeExpressCardIframe, selector.customer.cPayWithStripeExpress.cvc, cardInfo.cardCvc)
                    await base.click(selector.customer.cPayWithStripeExpress.savePaymentInformation)
                    break
                case 'gPay':
                    await base.iframeClick(stripeExpressCardIframe, selector.customer.cPayWithStripeExpress.gPay)
                    return
                case 'applePay':
                    await base.iframeClick(stripeExpressCardIframe, selector.customer.cPayWithStripeExpress.gPay)
                    return
                case 'iDeal':
                    await base.iframeClick(stripeExpressCardIframe, selector.customer.cPayWithStripeExpress.iDeal)
                    break
                default:
                    break
            }
        } else {
            await base.click(selector.customer.cPayWithStripeExpress.savedTestCard4242)
        }
        await base.click(selector.customer.cCheckout.placeOrder)
        await base.wait(5)
    },

    // Get Order Details after Purchase
    async getOrderDetailsAfterPlaceOrder() {
        let cOrderDetails = {}
        cOrderDetails.orderNumber = await base.getElementText(selector.customer.cOrderReceived.orderNumber)
        cOrderDetails.subtotal = helpers.price(await base.getElementText(selector.customer.cOrderReceived.subTotal))

        // let onlyShippingIsVisible = await base.isVisible(selector.customer.cOrderReceived.shipping)//TODO:delete this line when shipping is fixed
        // if (onlyShippingIsVisible) cOrderDetails.shippingMethod = await base.getElementText(selector.customer.cOrderReceived.shipping)//TODO:delete this line when shipping is fixed

        let shippingIsVisible = await base.isVisible(selector.customer.cOrderReceived.shippingCost)
        if (shippingIsVisible) {
            cOrderDetails.shippingCost = helpers.price(await base.getElementText(selector.customer.cOrderReceived.shippingCost))
            cOrderDetails.shippingMethod = helpers.price(await base.getElementText(selector.customer.cOrderReceived.shippingMethod))
        }
        let taxIsVisible = await base.isVisible(selector.customer.cOrderReceived.shipping)
        if (taxIsVisible) cOrderDetails.tax = helpers.price(await base.getElementText(selector.customer.cOrderReceived.tax))

        cOrderDetails.paymentMethod = await base.getElementText(selector.customer.cOrderReceived.orderPaymentMethod)
        cOrderDetails.orderTotal = helpers.price(await base.getElementText(selector.customer.cOrderReceived.orderTotal))

        return cOrderDetails
    },

    // Get Order Details
    async getOrderDetails(orderNumber) {
        await this.goToMyAccount()

        await base.clickAndWait(selector.customer.cMyAccount.orders)
        await base.clickAndWait(selector.customer.cOrders.OrderDetailsLInk(orderNumber))

        let cOrderDetails = {}
        cOrderDetails.orderNumber = await base.getElementText(selector.customer.cOrders.orderNumber)
        cOrderDetails.orderDate = await base.getElementText(selector.customer.cOrders.orderDate)
        cOrderDetails.orderStatus = await base.getElementText(selector.customer.cOrders.orderStatus)
        cOrderDetails.subtotal = helpers.price(await base.getElementText(selector.customer.cOrders.subTotal))

        // let onlyShippingIsVisible = await base.isVisible(selector.customer.cOrders.shipping)//TODO:delete this line when shipping is fixed
        // if (onlyShippingIsVisible) cOrderDetails.shippingMethod = await base.getElementText(selector.customer.cOrders.shippingMethod)//TODO:delete this line when shipping is fixed

        let shippingIsVisible = await base.isVisible(selector.customer.cOrders.shippingCost)
        if (shippingIsVisible) {
            cOrderDetails.shippingCost = helpers.price(await base.getElementText(selector.customer.cOrders.shippingCost))
            cOrderDetails.shippingMethod = (await base.getElementText(selector.customer.cOrders.shippingMethod)).replace('via ', '')
        }

        let taxIsVisible = await base.isVisible(selector.customer.cOrders.tax)
        if (taxIsVisible) cOrderDetails.tax = helpers.price(await base.getElementText(selector.customer.cOrders.tax))

        let orderDiscount = await base.isVisible(selector.customer.cOrders.orderDiscount)
        if (orderDiscount) cOrderDetails.orderDiscount = helpers.price(await base.getElementText(selector.customer.cOrders.orderDiscount))

        let quantityDiscount = await base.isVisible(selector.customer.cOrders.quantityDiscount)
        if (quantityDiscount) cOrderDetails.quantityDiscount = helpers.price(await base.getElementText(selector.customer.cOrders.quantityDiscount))

        let discount = await base.isVisible(selector.customer.cOrders.discount)
        if (discount) cOrderDetails.discount = helpers.price(await base.getElementText(selector.customer.cOrders.discount))

        cOrderDetails.paymentMethod = await base.getElementText(selector.customer.cOrders.paymentMethod)
        cOrderDetails.orderTotal = helpers.price(await base.getElementText(selector.customer.cOrders.orderTotal))

        // console.log(cOrderDetails)
        return cOrderDetails
    },

    // Customer Add Billing Address in Checkout
    async addBillingAddressInCheckout(billingInfo) {

        // Billing Address
        await base.clearAndType(selector.customer.cAddress.billingFirstName, billingInfo.firstName())
        await base.clearAndType(selector.customer.cAddress.billingLastName, billingInfo.lastName())
        await base.clearAndType(selector.customer.cAddress.billingCompanyName, billingInfo.companyName)
        await base.clearAndType(selector.customer.cAddress.billingCompanyID, billingInfo.companyId)
        await base.clearAndType(selector.customer.cAddress.billingVatOrTaxNumber, billingInfo.vatNumber)
        await base.clearAndType(selector.customer.cAddress.billingNameOfBank, billingInfo.bankName)
        await base.clearAndType(selector.customer.cAddress.billingBankIban, billingInfo.bankIban)
        await base.click(selector.customer.cAddress.billingCountryOrRegion)
        await base.type(selector.customer.cAddress.billingCountryOrRegionInput, billingInfo.country)
        await base.press(data.key.enter)
        await base.clearAndType(selector.customer.cAddress.billingStreetAddress, billingInfo.street1)
        await base.clearAndType(selector.customer.cAddress.billingStreetAddress2, billingInfo.street2)
        await base.clearAndType(selector.customer.cAddress.billingTownCity, billingInfo.city)
        await base.click(selector.customer.cAddress.billingState)
        await base.type(selector.customer.cAddress.billingStateInput, billingInfo.state)
        await base.press(data.key.enter)
        await base.clearAndType(selector.customer.cAddress.billingZipCode, billingInfo.zipCode)
        await base.clearAndType(selector.customer.cAddress.billingPhone, billingInfo.phone)
        await base.clearAndType(selector.customer.cAddress.billingEmailAddress, billingInfo.email)
    },

    // Customer Add Shipping Address in Checkout
    async addShippingAddressInCheckout(shippingInfo) {

        await base.click(selector.customer.cCheckout.shipToADifferentAddress)
        // Shipping Address
        await base.clearAndType(selector.customer.cAddress.shippingFirstName, shippingInfo.firstName())
        await base.clearAndType(selector.customer.cAddress.shippingLastName, shippingInfo.lastName())
        await base.clearAndType(selector.customer.cAddress.shippingCompanyName, shippingInfo.companyName)
        await base.click(selector.customer.cAddress.shippingCountryOrRegion)
        await base.type(selector.customer.cAddress.shippingCountryOrRegionInput, shippingInfo.country)
        await base.press(data.key.enter)
        await base.clearAndType(selector.customer.cAddress.shippingStreetAddress, shippingInfo.street1)
        await base.clearAndType(selector.customer.cAddress.shippingStreetAddress2, shippingInfo.street2)
        await base.clearAndType(selector.customer.cAddress.shippingTownCity, shippingInfo.city)
        await base.click(selector.customer.cAddress.shippingState)
        await base.type(selector.customer.cAddress.shippingStateInput, shippingInfo.state)
        await base.press(data.key.enter)
        await base.clearAndType(selector.customer.cAddress.shippingZipCode, shippingInfo.zipCode)
        await base.wait(2)
    },

    // Customer Ask for Warranty
    async sendWarrantyRequest(orderNumber, productName, refund) {
        await this.goToMyAccount()

        await base.clickAndWait(selector.customer.cMyAccount.orders)
        await base.clickAndWait(selector.customer.cOrders.ordersWarrantyRequest(orderNumber))

        await base.click(selector.customer.cOrders.warrantyRequestItemCheckbox(productName))
        // await base.type(selector.customer.cOrders.warrantyRequestItemQuantity(productName), refund.itemQuantity)
        await base.select(selector.customer.cOrders.warrantyRequestType, refund.refundRequestType)
        // await base.select(selector.customer.cOrders.warrantyRequestReason, refund.refundRequestReasons)
        await base.type(selector.customer.cOrders.warrantyRequestDetails, refund.refundRequestDetails)
        await base.clickAndWait(selector.customer.cOrders.warrantySubmitRequest)
        await base.wait(2)

        let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch(refund.refundSubmitSuccessMessage)
    },

}

