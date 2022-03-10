const { createURL } = require("@wordpress/e2e-test-utils");
const base = require("../pages/base.js");

module.exports = {
    // locators


    //vendor setup wizard
    vSetup: {

    //intro
    letsGo: '.lets-go-btn',
    notRightNow: '.not-right-now-btn',  

    // store setup   
    storeProductsPerPage: '#store_ppp',
    street: '#address[street_1]',
    street2: '#address[street_2]',
    city: '#address[city]',
    zipCode: '#address[zip]',
    country: '#select2-addresscountry-container',
    countryInput: '.select2-search__field',
    state: '#calc_shipping_state',
    email: 'label:nth-child(2)',  
    continueStoreSetup: '.store-step-continue',              
    skipTheStepStoreSetup: '.store-step-skip-btn',

    // payment setup

    //paypal
    paypal: '.email', 

    // bank
    bankAccountName: '.dokan-form-group:nth-child(1) .dokan-form-control', 
    bankAccountNumber: '.dokan-form-group:nth-child(2) .dokan-form-control',  
    bankName: '.dokan-form-group:nth-child(3) .dokan-form-control',  
    bankAddress: '.dokan-form-group:nth-child(4) .dokan-form-control', 
    bankRoutingNumber: '.dokan-form-group:nth-child(5) .dokan-form-control', 
    bankIban: '.dokan-form-group:nth-child(6) .dokan-form-control', 
    bankSwiftCode: '.dokan-form-group:nth-child(7) .dokan-form-control', 

    //custom payment method
    customPayment: 'tr:nth-child(3) .dokan-form-control',

    //paypal marketplace
    paypalMarketplace: '#vendor_paypal_email_address',
    paypalMarketplaceSigUp: '.vendor_paypal_connect',

    // Stripe
    ConnectWithStripe: '.dokan-stripe-connect-link',

    continuePaymentSetup: '.payment-continue-btn',
    skipTheStepPaymentSetup: '.payment-step-skip-btn',

    //last step
    goToStoreDashboard: '.wc-setup-actions step > .button',
    returnToMarketplace: '.wc-return-to-dashboard',
    },

    // vendor dashboard
    vDashboard: {
        dashboard: '.dashboard > a',
        products: '.products > a',
        orders: '.orders > a',
        userSubscription: '.user-subscription > a',
        coupons: '.coupons > a',
        reports: '.reports > a',
        deliveryTime: '.delivery-time-dashboard > a',
        reviews: '.reviews > a',
        withdraw: '.withdraw > a',
        returnRequest: '.return-request > a',
        staff: '.staffs > a',
        followers: '.followers > a',
        booking: '.booking > a',
        analytics: '.analytics > a',
        announcements: '.announcement > a',
        tools: '.tools > a',
        auction: '.auction > a',
        support: '.support > a',
        settings: '.settings > a',
        visitStore: '.fa-external-link-alt',
        editAccount: '.fa-user',
    },

    // product
    product: {
        addNewProduct: ".dokan-add-new-product",
        productName: 'input[placeholder="Product name.."]',
        ProductImage: ".dokan-feat-image-btn.btn.btn-sm",
        setFeaturedImage: 'button[class="button media-button button-primary button-large media-button-select"]',
        addGalleryImage: 'a[class="add-product-images"]',
        // addGalleryImage: '.add-image.add-product-images.tips',
        ProductPrice: "#_regular_price",
        productDiscountedPrice: "#_sale_price",
        productDiscountedSchedule: ".sale_schedule",
        scheduleFrom: "#dp1639837118141",
        scheduleTo: "#dp1639837118142",
        scheduleCancel: ".cancel_sale_schedule.dokan-hide",
        productCategory: "#select2-product_cat-container",
        // categoryValues: ".select2-results__option",
        categoryValues: ".select2-results ul li",  // TODO: create dropdown locator like this (ul > li or ul li)
        productTags: 'input[placeholder="Select product tags"]',
        productDescription: 'textarea[placeholder="Enter some short description about this product..."]',
        createProduct: "#dokan-create-new-product-btn",
        createAndNewProduct: "#dokan-create-and-add-new-product-btn",
        label: 'label[for="_regular_price"]',
    },

    //coupon 
    coupon: {
        addNewCoupon: ".dokan-btn",
        couponTitle: "#title",
        description: "#description",
        discountType: "#discount_type",
        amount: "#coupon_amount",
        emailRestrictions: "#email_restrictions",
        usageLimit: "#usage_limit",
        usageLimitPerUser: "#usage_limit_per_user",
        expireDate: "#dokan-expire",
        excludeSaleItems: "#checkboxes-2",
        minimumAmount: "#minium_ammount",
        product: ".dokan-form-group:nth-child(14) .select2-search__field",
        selectAll: ".dokan-coupon-product-select-all",
        clear: ".dokan-coupon-product-clear-all",
        applyForNewProducts: "#apply_new_products",
        excludeProducts: ".dokan-form-group:nth-child(16) .select2-search__field",
        showOnStore: "#checkboxes-3",
        createCoupon: ".dokan-btn-danger",
    },

    //withdraw
    withdraw:{
        // manual withdraw request
        minimumWithdrawAmount: "bdi",
        requestWithdraw: "#dokan-request-withdraw-button",
        withdrawAmount: "#withdraw-amount",
        withdrawMethod: "#withdraw-method",
        submitRequest: "#dokan-withdraw-request-submit",
        cancelRequest: "td > a",

        // auto Disbursement Schedule
        editSchedule: "#dokan-withdraw-display-schedule-popup",
        croseIcon: ".mfp-close",
        preferredPaymentMethod: "#preferred-payment-method",
        monthly: "#withdraw-schedule-monthly\\>",
        quarterly: "#withdraw-schedule-quarterly\\>",
        twicePerMonth: "#withdraw-schedule-biweekly\\>",
        weekly: "#withdraw-schedule-weekly\\>",
        onlyWhenBalanceIs: "#minimum-withdraw-amount",
        maintainAReserveBalance: "#withdraw-remaining-amount",
        changeSchedule: "#dokan-withdraw-schedule-request-submit",

        // view Payment
        viewPayment: "#dokan-withdraw-display-requests-button",
        pendingRequests: ".list-inline > li:nth-child(1) > a",
        approvedRequests: ".list-inline > li:nth-child(2) > a",
        cancelledRequests: ".list-inline > li:nth-child(3) > a",
        withdrawDashboard: ".dokan-btn:nth-child(2)",

        //default payment methods
        payPalMakeDefault:"//strong[contains( text(), 'PayPal')]//..//..//button",
        bankTransferMakeDefault:"//strong[contains( text(), 'Bank Transfer')]//..//..//button",
        // customMethodMakeDefault(methodName) { return `//strong[contains( text(), '${methodName}')]//..//..//button`},
        customMethodMakeDefault: (methodName) => `//strong[contains( text(), '${methodName}')]//..//..//button`,
        skrillMakeDefault:"//strong[contains( text(), 'Skrill')]//..//..//button",

        payPalSetup:"//strong[contains( text(), 'PayPal')]//..//..//button",
        bankTransferSetup:"//strong[contains( text(), 'Bank Transfer')]//..//..//button",
        // custommethodSetup(methodName) { return `//strong[contains( text(), '${methodName}')]//..//..//button`},
        customMethodSetup: (methodName) => `//strong[contains( text(), '${methodName}')]//..//..//button`,
        skrillSetup:"//strong[contains( text(), 'Skrill')]//..//..//button",

    },



    // methods

    async vendorSetupWizard(storeProductsPerPage, street, street2, city, zipCode, country, state, paypal, bankAccountName, bankAccountNumber, bankName, bankAddress, bankRoutingNumber, bankIban, bankSwiftCode, customPayment) {
        await page.click(this.vSetup.letsGo);
        // await page.waitForTimeout(3000);

        await page.type(this.vSetup.storeProductsPerPage, storeProductsPerPage);
        await page.type(this.vSetup.street, street);
        await page.type(this.vSetup.street2, street2);
        await page.type(this.vSetup.city, city);
        await page.type(this.vSetup.zipCode, zipCode);
        await page.type(this.vSetup.state, state);
        await page.click(this.vSetup.country);
        await page.type(this.vSetup.countryInput, country);
        await page.click(this.vSetup.email);
        await page.click(this.vSetup.continueStoreSetup);
        // await page.waitForTimeout(3000);


        await page.type(this.vSetup.paypal, paypal);
        await page.type(this.vSetup.bankAccountName, bankAccountName);
        await page.type(this.vSetup.bankAccountNumber, bankAccountNumber);
        await page.type(this.vSetup.bankName, bankName);
        await page.type(this.vSetup.bankAddress, bankAddress);
        await page.type(this.vSetup.bankRoutingNumber, bankRoutingNumber);
        await page.type(this.vSetup.bankIban, bankIban);
        await page.type(this.vSetup.bankSwiftCode, bankSwiftCode);

        await page.type(this.vSetup.customPayment, customPayment);

        // TODO: stripe connect
        // TODO: paypal marketplace
        await page.click(this.vSetup.continuePaymentSetup);
        // await page.waitForTimeout(3000);

        await page.click(this.vSetup.goToStoreDashboard);
        // await page.waitForTimeout(5000);

    },

    async goToVendorDashbord() {
        await page.goto(createURL('dashboard'))
    },


    async addproduct(productName, productPrice, category) {
        await base.click(this.vDashboard.products);
        await page.click(this.product.addNewProduct);
        await page.type(this.product.productName, productName);
        await page.type(this.product.ProductPrice, productPrice);
        await page.click(this.product.productCategory);
        // await base.getMultipleElementTexts(this.product.categoryValues)
        await base.setDropdownOption(this.product.categoryValues, category)
        await page.click(this.product.createProduct)
    },

    async addcoupon(couponTitle, couponAmount) {
        await base.click(this.vDashboard.coupons);
        await base.click(this.coupon.addNewCoupon);
        await page.type(this.coupon.couponTitle, couponTitle);
        await page.type(this.coupon.amount, couponAmount);
        await page.click(this.coupon.selectAll);
        await page.click(this.coupon.applyForNewProducts);
        await page.click(this.coupon.showOnStore);
        await page.click(this.coupon.createCoupon);
    },

    async requestwithdraw(withdrawAmount, withdrawMethod) {
        await base.click(this.vDashboard.withdraw);
        let minimumWithdrawAmount = await base.getElementText(this.withdraw.minimumWithdrawAmount)
        minimumWithdrawAmount = minimumWithdrawAmount.replace('$', '')
        // console.log(minimumWithdrawAmount)
        await page.click(this.withdraw.requestWithdraw);
        let balance = await base.getValue(this.withdraw.withdrawAmount)
        if ( Number(balance) >  Number(minimumWithdrawAmount)){
        await page.type(this.withdraw.withdrawAmount, minimumWithdrawAmount);
        // await base.setDropdownOption(this.withdraw.withdrawMethod, withdrawMethod);
        await page.click(this.withdraw.submitRequest);
        }
    },   
    
    async cancelrequestwithdraw() {
        await base.click(this.vDashboard.withdraw);
        await page.click(this.withdraw.cancelRequest);

    },

    async addautowithdrawdisbursementschedule(preferredSchedule) {
        await base.click(this.vDashboard.withdraw);
        await page.click(this.withdraw.editSchedule);
        // await base.setDropdownOption(this.product.preferredPaymentMethod, preferredPaymentMethod)
        await page.click(this.withdraw[preferredSchedule]);
        // await base.setDropdownOption(this.product.onlyWhenBalanceIs, onlyWhenBalanceIs)
        // await base.setDropdownOption(this.product.maintainAReserveBalance, maintainAReserveBalance)
        await page.click(this.withdraw.changeSchedule);
    },   
    
    async adddefaultwithdrawpaymentmethods(preferredSchedule) {
        await base.click(this.vDashboard.withdraw);
        // let a = page.$(this.withdraw.bankTransferSetup)
        // a.click()
        // await page.waitForXPath(this.withdraw.customMethodSetup('qwerty'));
        // await page.hover(this.withdraw.customMethodSetup('qwerty'));
        // await page.click(this.withdraw.customMethodSetup('qwerty'));
        
        // await page.waitForTimeout(5000);
  
    },



};
