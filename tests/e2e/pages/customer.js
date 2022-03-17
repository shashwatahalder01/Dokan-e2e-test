const base = require("../pages/base.js");

module.exports = {
    //locators

    //customer home menus
    cHomeMenus: {
        home: "//a[contains(text(),'Home')]",
        cart: "//a[contains(text(),'Cart')]",
        checkout: "//a[contains(text(),'Checkout')]",
        dashbord: "//a[contains(text(),'Dashboard')]",
        myAccount: "//a[contains(text(),'My account')]",
        myOrders: "//a[contains(text(),'My Orders')]",
        shop: "//a[contains(text(),'Shop')]",
        storeList: "//a[contains(text(),'Store List')]"
    },

    //customer myaccount
    cMyaccount: {
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
    },

    //customer dashboard
    cDashboard: {
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
        becomeAVendor: '.dokan-btn',

        //become wholesale customeer
        becomeWholesaleCustomer: '#dokan-become-wholesale-customer-btn',
    },
    //customer orders
    cOrders: {
        view: ".order:nth-child(1) .button",
        // request warrenty
        warrantyRequest: ".request_warranty",
        warrantyRequestItemName: "th > input:nth-child(1)",
        warrantyRequestItemQuantity: "#request_item_qty\\[\\]",
        warrantyRequestType: "#type",
        warrantyRequestDetails: "#warranty_request_details",
        warrantySubmitRequest: ".dokan-btn",

        //paynow
        paynow: "",//TODO:
    },

    //customer subscription
    cSubscription: {
    },

    //customer downloads
    cDownloads: {

    },

    //customer address
    cAddress: {
        //billing address
        editBillingAddress: ".u-column1 .edit",// TODO: if shipping disable locator class change
        billingFirstName: "#billing_first_name",
        billingLastName: "#billing_last_name",
        billingCompanyName: "#billing_company",
        billingCompanyIDOrEuidNumber: "#billing_dokan_company_id_number",
        billingVatOrTaxNumber: "#billing_dokan_vat_number",
        billingNameOfBank: "#billing_dokan_bank_name",
        billingBankIban: "#billing_dokan_bank_iban",
        billingCountryOrRegion: "#select2-billing_country-container",
        billingStreetAddress: "#billing_address_1",
        billingStreetAddress2: "#billing_address_2",
        billingTownCity: "#billing_city",
        billingState: "#select2-billing_state-container",
        billingZipCode: "#billing_postcode",
        billingPhone: "#billing_phone",
        billingEmailAddress: "#billing_email",
        billingSaveAddress: "p:nth-child(2) > .button",

        //shipping address
        editShippingAddress: ".u-column2 .edit",
        shippingFirstName: "#shipping_first_name",
        shippingLastName: "#shipping_last_name",
        shippingCompanyName: "#shipping_company",
        shippingCountryOrRegion: "select2-shipping_country-container",
        shippingStreetAddress: "#shipping_address_1",
        shippingStreetAddress2: "#shipping_address_2",
        shippingTownCity: "#shipping_city",
        shippingState: "select2-shipping_state-container",
        shippingZipCode: "#shipping_postcode",
        shippingSaveAddress: "p:nth-child(2) > .button",

        // //success message
        // successMessage: ".woocommerce-message",

    },

    //customer rma requests
    cRma: {
        view: ".order:nth-child(1) .woocommerce-button",
        // Conversations
        message: "#message",
        sendMessage: ".woocommerce-button"


    },

    // customer payment methods
    cPaymentMethods: {
        deleteMethod: ".delete",
        addPaymentMethod: "button",

        // stripe card
        stripeCardNumber: ".CardNumberField-input-wrapper .InputElement",
        stripeCardExpiryDate: ".CardField-expiry .InputElement",
        stripeCardCvc: ".CardField-cvc .InputElement",

        addPaymentMethodCard: "#place_order",

    },

    // customer account details
    cAccountDetails: {
        firstName: "#account_first_name",
        lastName: "#account_last_name",
        displayName: "#account_display_name",
        email: "#account_email",
        currentPassword: "#password_current",
        NewPassword: "#password_1",
        confirmNewPassword: "#password_2",
        saveChanges: ".woocommerce-Button",
    },

    // customer followed vendors
    cVendors: {
        visiteStore: ".dokan-single-seller:nth-child(1) .dashicons",
        unfollowStore: ".dokan-single-seller:nth-child(1) .dokan-follow-store-button-label-unfollow"
    },

    // customer support tickets
    cSupportTickets: {
        //menues
        allTickets: ".dokan-support-topic-counts > li:nth-child(1) > a",
        openTickets: ".dokan-support-topic-counts > li:nth-child(2) > a",
        closedTickets: ".dokan-support-topic-counts > li:nth-child(3) > a",

        addReply: "#comment",
        submitReply: "#submit",
    },

    // customer bookings
    cBookings: {
    },

    // customer auctions settings
    cAuctionsSettings: {
    },

    //customer shop page
    cShop: {

        shopPageHeader: ".woocommerce-products-header__title",
        //filter
        searchProduct: ".dokan-form-control",
        location: ".location-address > input",
        selectCategory: "#product_cat",
        radius: ".dokan-range-slider",
        sorting: ".woocommerce-ordering:nth-child(3) > .orderby",
        search: ".dokan-btn",
        //cart
        addToCart: ".button", //TODO: edit
        viewCart: ".added_to_cart",
        //pagination
        previous: ".woocommerce-pagination:nth-child(3) .prev",
        next: ".woocommerce-pagination:nth-child(3) .next",
        // TODO:page navigation, map
    },

    //customer store page
    cStoreList: {

        storeListPageHeader: ".entry-title",
        //filter
        filter: ".dokan-icon-div:nth-child(1)",
        featured: "#featured",
        openNow: "#open-now",
        rating: (star) => `.star-${star}`,
        apply: "#apply-filter-btn",
        //sortby
        sortBy: "#stores_orderby",
        //view style
        gridView: ".dashicons-screenoptions",
        listView: ".dashicons-menu-alt",
        //search vendor
        searchVendors: "dokan_seller_search",
        location: ".location-address > input",
        //TODO:map
        visitStore: "dokan_stripe_express_sources_",
        followUnfollowStore: ".dokan-single-seller:nth-child(1) .dokan-btn"
    },

    //customer header cart
    cHeaderCart: {
        //cartContent
        cartContent: ".cart-contents > .woocommerce-Price-amount",
        removeItem: ".remove",
        viewCart: ".button:nth-child(1)",
        checkout: ".checkout",
    },

    // customer single store 
    cSingleStore: {

        products: ".dokan-list-inline > li:nth-child(1) > a",
        //reviews
        reviews: "dokan-list-inline > li:nth-child(2) > a",
        writeAReview: ".add-review-btn",
        closeReviewPopup: ".mfp-close",
        reviewStar: (star) => `.jq-ry-rated-group > svg:nth-child(${star}) > polygon`,
        reviewTitle: "#dokan-review-title",
        reviewMessage: "#dokan-review-details",
        submitReview: "#support-submit-btn",

        //follow store
        follow: ".dokan-follow-store-button",

        //get Support
        getSupport: ".dokan-store-support-btn",
        closeGetSupportPopup: ".mfp-close",
        subject: "#dokan-support-subject",
        getSupportOrderId: ".dokan-select",
        message: "#dokan-support-msg",
        submitGetSupport: "#support-submit-btn",

        share: ".dokan-share-btn",
        facebook: ".fa-facebook",
        twitter: ".fa-twitter",
        linked: ".fa-linkedin",
        pinterest: ".fa-pinterest",
        mail: ".fa-at",
        //open now
        openNow: ".fa.fa-angle-down",

        //search product
        productName: ".product-name-search",
        search: ".search-store-products",
        //sorting
        sortBy: ".orderby",
    },

    // customer single product
    cSingleProduct: {

        quantity: ".quantity .qty",
        addToCart: ".single_add_to_cart_button",
        viewCart: ".woocommerce-message > .button",

        //getsuppott
        getSupport: ".dokan-store-support-btn-product",
        closeGetSupportPopup: ".mfp-close",
        subject: "#dokan-support-subject",
        getSupportOrderId: ".dokan-select",
        message: "#dokan-support-msg",
        submitGetSupport: "#support-submit-btn",

        //report abuse
        reportAbuse: ".dokan-report-abuse-button",
        reportReason: (reasonNumber) => `li:nth-child(${reasonNumber}) input`,
        reportDescription: ".dokan-form-control",
        reportSubmit: "#dokan-report-abuse-form-submit-btn",
        confirmReportSubmit: ".swal2-confirm",

        //other available vendor
        OtherAvailableVendorViewStore: ".fa-external-link-alt",
        OtherAvailableVendorViewProduct: ".view",
        OtherAvailableVendorAddToCart: ".dokan-btn:nth-child(3)",

        //pruduct menus
        description: "#tab-title-description > a",
        reviews: "#tab-title-reviews",
        vendorInfo: "#tab-title-seller > a",
        location: "#tab-title-geolocation > a",
        moreProducts: "#tab-title-more_seller_product > a",
        warrantyPolicy: "#tab-title-refund_policy > a",
        productEnquiry: "#tab-title-seller_enquiry_form > a",

        // preduct reviews
        rating: (star) => `.star-${star}`,
        reviewMessage: "#comment",
        submitReview: "#submit",

        //priduct enquiry
        enquirymessage: "#dokan-enq-message",
        submitEnquiry: ".dokan-btn-theme"
    },

    // customer cart
    cCart: {
        cartPageHeader: ".entry-title",
        //edit cart
        removeItem: ".woocommerce-cart-form__cart-item:nth-child(1) .remove",
        quantity: ".quantity .qty",//TODO
        couponCode: "#coupon_code",
        applyCoupon: ".button:nth-child(3)",
        updateCart: ".button:nth-child(2)",
        //shipping methods
        flatRate: "#shipping_method_0_flat_rate1",
        freeShipping: "#shipping_method_0_free_shipping2",
        //TODO: edit locator based on vendor
        //proceed To Checkout
        proceedToCheckout: ".checkout-button"

    },

    //customer checkout
    cCheckout: {

        checkoutPageHeader: ".entry-title",
        // billing details
        billingFirstName: "#billing_first_name",
        billingLastName: "#billing_last_name",
        billingCompanyName: "#billing_company",
        billingCompanyIDOrEuidNumber: "#billing_dokan_company_id_number",
        billingVatOrTaxNumber: "#billing_dokan_vat_number",
        billingNameOfBank: "#billing_dokan_bank_name",
        billingBankIban: "#billing_dokan_bank_iban",
        billingCountryOrRegion: "#select2-billing_country-container",
        billingStreetAddress: "#billing_address_1",
        billingStreetAddress2: "#billing_address_2",
        billingTownCity: "#billing_city",
        billinPhone: "#billing_phone",
        billingEmailAddress: "#billing_email",
        billinggState: "#select2-billing_state-container",
        billingZipCode: "#billing_postcode",

        //shipping details
        shipToADifferentAddress: "#ship-to-different-address-checkbox",
        shippingFirstName: "#shipping_first_name",
        shippingLastName: "#shipping_last_name",
        shippingCompanyName: "#shipping_company",
        shippingCountryOrRegion: "select2-shipping_country-container",
        shippingStreetAddress: "#shipping_address_1",
        shippingStreetAddress2: "#shipping_address_2",
        shippingTownCity: "#shipping_city",
        shippingState: "select2-shipping_state-container",
        shippingZipCode: "#shipping_postcode",
        shippingSaveAddress: "p:nth-child(2) > .button",

        //order comments
        orderComments: "#order_comments",

        //shipping methods
        flatRate: "#shipping_method_0_flat_rate1",
        freeShipping: "#shipping_method_0_free_shipping2",
        //TODO: edit locator based on vendor

        //payment methods
        directBankTransfer: ".payment_method_bacs > label",
        checkPayments: ".payment_method_cheque > label",
        cashOndelivery: ".payment_method_cod > label",
        paypalAdaptive: ".payment_method_dokan_paypal_adaptive > label",
        wireCardCreditCard: ".payment_method_dokan-moip-connect > label",
        //TODO:razorapy,mangopay,paypal marketplace,strip,stripeExpress

        //place order
        placeOrder: "#place_order"

    },

    cPayWithStripe: {},
    cPayWithPaypalMarketPlace: {},
    cPayWithRazorpay: {},
    cPayWithMangoPay: {},
    cPayWithStripeExpress: {},

    cOrderReceived:{
        orderReceivedPageHeader: ".entry-title",

        orderNumber: ".woocommerce-order-overview__order.order strong",
        orderDate: ".woocommerce-order-overview__date.date strong",
        email:".woocommerce-order-overview__email.email strong",
        total:".woocommerce-order-overview__total.total strong ",
        paymentMethod:".woocommerce-order-overview__payment-method.method strong ",

        //order details
        subtotal:"//th[normalize-space()='Subtotal:']//..//span",
        shipping:"//th[normalize-space()='Shipping:']//..//span",	
        orderDetailsPaymentMethod:"//th[normalize-space()='Payment method:']//..//td",	
        orderDetailsTotal:"//th[normalize-space()='Total:']//..//span",
    },

    cWooSelector: {
        wooCommerceSuccessMessage: ".woocommerce-message",
        wooCommerceError: ".woocommerce_error",
    },

    cBookings: {
        bookNow: ".wc-bookings-booking-form-button",
    },
    cAuctionss: {},
    // methods

    async goToCustomerMyaccount() {
        await page.goto(createURL('my-account'))

        let dashboardIsVisible = await base.isVisible(page, this.cMyaccount.dashboard)
        expect(dashboardIsVisible).toBe(true)

    },

    async goToShop() {
        await page.goto(createURL('shop'))

        let shopIsVisible = await base.isVisible(page, this.cShop.shopPageHeader)
        expect(shopIsVisible).toBe(true)

    },

    async goToStoreList() {
        await page.goto(createURL('my-account'))

        let storeListIsVisible = await base.isVisible(page, this.cStoreList.storeListPageHeader)
        expect(storeListIsVisible).toBe(true)

    },

    async customerbecomevednor(firstname, lastname, shopname, shopurl, address, phone, companyName, companyId, vatNumber, bankName, bankIban) {
        await page.click(this.cDashboard.becomeVendor);
        // venodr registration form
        await page.type(this.cDashboard.firstname, firstname);
        await page.type(this.cDashboard.lastname, lastname);
        await page.type(this.cDashboard.shopname, shopname);
        await page.type(this.cDashboard.shopurl, shopurl);
        await page.type(this.cDashboard.address, address);
        await page.type(this.cDashboard.phone, phone);
        await page.type(this.cDashboard.companyName, companyName);
        await page.type(this.cDashboard.companyId, companyId);
        await page.type(this.cDashboard.vatNumber, vatNumber);
        await page.type(this.cDashboard.bankName, bankName);
        await page.type(this.cDashboard.bankIban, bankIban);

        await base.click(this.becomeAVendor);
        // await page.waitForTimeout(4000); // TODO: add page load complete to revome this line
    },

    async customersendwholesalerequest() {
        await base.click(this.becomeWholesaleCustomer)
        // await page.waitForTimeout(4000); // TODO: add page load complete to revome this line
    },

    async addBillingAddress(billingFirstName, billingLastName, billingCompanyName, billingCompanyIDOrEuidNumber, billingVatOrTaxNumber, billingNameOfBank, billingBankIban, billingCountryOrRegion, billingStreetAddress, adbillingStreetAddress2dress, billingTownCity,
        billingState, billingZipCode, billingPhone, billingEmailAddress) {

        await page.click(this.cMyaccount.addresses)
        //billing address
        await page.click(this.cAddress.editBillingAddress)

        await base.clearAndType(this.cAddress.billingFirstName, billingFirstName)
        await base.clearAndType(this.cAddress.billingLastName, billingLastName)
        await base.clearAndType(this.cAddress.billingCompanyName, billingCompanyName)
        await base.clearAndType(this.cAddress.billingCompanyIDOrEuidNumber, billingCompanyIDOrEuidNumber)
        await base.clearAndType(this.cAddress.billingVatOrTaxNumber, billingVatOrTaxNumber)
        await base.clearAndType(this.cAddress.billingNameOfBank, billingNameOfBank)
        await base.clearAndType(this.cAddress.billingBankIban, billingBankIban)
        await page.select(this.cAddress.billingCountryOrRegion, billingCountryOrRegion)
        await base.clearAndType(this.cAddress.billingStreetAddress, billingStreetAddress)
        await base.clearAndType(this.cAddress.billingStreetAddress2, adbillingStreetAddress2dress)
        await base.clearAndType(this.cAddress.billingTownCity, billingTownCity)
        await page.select(this.cAddress.billingState, billingState)
        await base.clearAndType(this.cAddress.billingZipCode, billingZipCode)
        await base.clearAndType(this.cAddress.billingPhone, billingPhone)
        await base.clearAndType(this.cAddress.billingEmailAddress, billingEmailAddress)
        await page.click(this.cAddress.billingSaveAddress)

        let SuccessMessage = await base.getSelectorText(this.cWooSelector.successMessage)
        expect(SuccessMessage).toMatch('Address changed successfully.')
    },

    async addShippingAddress(shippingFirstName, shippingLastName, shippingCompanyName, shippingCountryOrRegion, shippingStreetAddress, shippingStreetAddress2, shippingTownCity, shippingState, shippingZipCode) {

        await page.click(this.cMyaccount.addresses)
        //shipping address
        await page.click(this.cAddress.editShippingAddress)
        await base.clearAndType(this.cAddress.shippingFirstName, shippingFirstName)
        await base.clearAndType(this.cAddress.shippingLastName, shippingLastName)
        await base.clearAndType(this.cAddress.shippingCompanyName, shippingCompanyName)
        await page.select(this.cAddress.shippingCountryOrRegion, shippingCountryOrRegion)
        await base.clearAndType(this.cAddress.shippingStreetAddress, shippingStreetAddress)
        await base.clearAndType(this.cAddress.shippingStreetAddress2, shippingStreetAddress2)
        await base.clearAndType(this.cAddress.shippingTownCity, shippingTownCity)
        await page.select(this.cAddress.shippingState, shippingState)
        await base.clearAndType(this.cAddress.shippingZipCode, shippingZipCode)
        await page.click(this.cAddress.shippingSaveAddress)

        let SuccessMessage = await base.getSelectorText(this.cWooSelector.successMessage)
        expect(SuccessMessage).toMatch('Address changed successfully.')
    },


    async sendRmaMessage(message) {
        await base.click(this.cMyaccount.rmaRequests)

        await page.type(this.cRma.message, message)
        await page.click(this.cRma.sendMessage)

        let successMessage = await base.getSelectorText(this.cWooSelector.successMessage)
        expect(successMessage).toMatch("Message send successfully")
    },

    async addCard(cardNumber, cardExpiryDate, cardCvc) {
        await base.click(this.cMyaccount.paymentMethods)

        await base.click(this.cPaymentMethods.addPaymentMethod)

        //negative test
        // await base.click(this.cPaymentMethods.addPaymentMethodCard)
        // let failureMessage = await base.getSelectorText(this.cWooSelector.failureMessage)
        // expect(failureMessage).toMatch("Your card number is incomplete.")

        await page.type(this.cPaymentMethods.stripeCardNumber, cardNumber)
        await page.type(this.cPaymentMethods.stripeCardExpiryDate, cardExpiryDate)
        await page.type(this.cPaymentMethods.stripeCardCvc, cardCvc)

        await base.click(this.cPaymentMethods.addPaymentMethodCard)

        let successMessage = await base.getSelectorText(this.cWooSelector.successMessage)
        expect(successMessage).toMatch("Payment method successfully added.")
    },

    async deleteCard() {
        await base.click(this.cMyaccount.paymentMethods)
        await page.click(this.cPaymentMethods.deleteMethod)

        let successMessage = await base.getSelectorText(this.cWooSelector.successMessage)
        expect(successMessage).toMatch("Payment method deleted.")
    },

    async updatePassword(currentPassword, newPassword) {
        await base.clearAndType(this.cAccountDetails.currentPassword, currentPassword)
        await base.clearAndType(this.cAccountDetails.NewPassword, newPassword)
        await base.clearAndType(this.cAccountDetails.confirmNewPassword, newPassword)
        await page.click(this.cAccountDetails.saveChanges)

        let successMessage = await base.getSelectorText(this.cWooSelector.successMessage)
        expect(successMessage).toMatch("Account details changed successfully.")

    },

    async addCustomerDetails(firstName, lastName, displayName, email, currentPassword, newPassword) {

        await page.click(this.cMyaccount.accountDetails)

        await base.clearAndType(this.cAccountDetails.firstName, firstName)
        await base.clearAndType(this.cAccountDetails.lastName, lastName)
        await base.clearAndType(this.cAccountDetails.displayName, displayName)
        await base.clearAndType(this.cAccountDetails.email, email)
        await this.updatePassword(currentPassword, newPassword)
        await this.updatePassword(newPassword, currentPassword)
    },

    async addCustomerSupportTicket(message) {
        await page.click(this.cMyaccount.supportTickets)
        await page.click(this.cSupportTickets.openTickets)

        // await page.click(this.cSupportTickets.addReply)
        await base.clearAndType(this.cSupportTickets.addReply, message)
        await page.click(this.cSupportTickets.submitReply)
        //TODO: add assertion
    },

    async addproductToCartFromShop(preductName) {
        await page.type(this.cShop.searchProduct, productName)
        await page.click(this.cShop.search)
        await page.click(this.cShop.addToCart)

        let cartIsVisible = await base.isVisible(page, this.cShop.viewCart)
        expect(cartIsVisible).toBe(true)

    },

    async addProductToCartFromSingleProductPage(productName) {
        await page.click(this.cSingleProduct.addToCart)

        let successMessage = await base.getSelectorText(this.cWooSelector.successMessage)
        expect(successMessage).toMatch(`“${productName}” has been added to your cart.`)

    },

    async goToCartFromShop() {
        await page.click(this.cShop.viewCart)

        let cartIsVisible = await base.isVisible(page, this.cCart.cartPageHeader)
        expect(cartIsVisible).toBe(true)
    },

    async goToCartFromSingleProductPage() {
        await page.click(this.cSingleProduct.viewCart)

        let cartIsVisible = await base.isVisible(page, this.cCart.cartPageHeader)
        expect(cartIsVisible).toBe(true)

    },

    async goToCheckoutFromCart() {
        await page.click(this.cCart.proceedToCheckout)

        let checkoutIsVisible = await base.isVisible(page, this.cCheckout.checkoutPageHeader)
        expect(checkoutIsVisible).toBe(true)

    },
    async applyCoupon(couponCode) {
        await page.type(this.cCart.couponCode, couponCode)
        await page.click(this.cCart.applyCoupon)

        // // negative test
        // let failureMessage = await base.getSelectorText(this.cWooSelector.successMessage)
        // expect(failureMessage).toMatch(`Coupon "${couponCode}" does not exist!`)
        // expect(failureMessage).toMatch("Sorry, this coupon is not applicable to selected products.") //for other vendor coupons

        let successMessage = await base.getSelectorText(this.cWooSelector.successMessage)
        expect(successMessage).toMatch("Coupon code applied successfully.")
    },

    async placeOrder() {
        await page.click(this.cCheckout.placeOrder)

        let orderReceivedIsVisible = await base.isVisible(page, this.cOrderReceived.orderReceivedPageHeader)
        expect(orderReceivedIsVisible).toBe(true)
    }
};
