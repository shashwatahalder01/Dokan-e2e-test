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
        // continue from payment setup
        continuePaymentSetup: '.payment-continue-btn',
        skipTheStepPaymentSetup: '.payment-step-skip-btn',

        //last step
        goToStoreDashboard: '.wc-setup-actions step > .button',
        returnToMarketplace: '.wc-return-to-dashboard',
    },

    //vendor dashboard
    vDashboard: {
        //dashboard menus
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

    //products
    product: {
        //menus
        all: ".active:nth-child(1) > a",
        online: ".dokan-listing-filter > li:nth-child(2) > a",
        pendingReview: ".dokan-listing-filter > li:nth-child(3) > a",
        inStock: ".dokan-listing-filter > li:nth-child(4) > a",
        //TODO: add more menu bar
        //filter
        filterByDate: "#filter-by-date",
        filterByCategory: "#product_cat",
        filterByType: "#filter-by-type",
        filterByOther: ".dokan-w8 > .dokan-form-group:nth-child(4) > .dokan-form-control",
        filter: ".dokan-btn:nth-child(6)",
        //search product
        searchProduct: ".dokan-w5 .dokan-form-control",
        search: ".dokan-w5 > .dokan-btn",
        //bulk action
        selectAll: "#cb-select-all",
        bulkProductActionSelect: "#bulk-product-action-selector",
        applyBulkAction: "#bulk-product-action",

        //import export product
        import: ".dokan-add-product-link > .dokan-btn:nth-child(2)",
        export: ".dokan-add-product-link > .dokan-btn:nth-child(3)",

        // product sub options
        editproduct: ".row-actions > .edit > a",
        deletePermanently: ".row-actions > .delete > a",
        view: ".row-actions > .view > a",
        quickedit: ".row-actions > .item-inline-edit > a",
        duplicate: ".row-actions > .duplicate > a",


        //create product
        closeCreateProductPopup: ".mfp-close",
        addNewProduct: ".dokan-add-new-product",
        productName: "input[name='post_title']",
        productImage: ".dokan-feat-image-btn",
        productUploadProductImage: '#\\__wp-uploader-id-1',
        productAddGalleryImage: ".fa-plus",
        productUploadalleryImage: "#\\__wp-uploader-id-4",
        productPrice: "#_regular_price",
        productDiscountedPrice: "#_sale_price",
        productDiscountedPriceSchedule: ".sale_schedule",
        productScheduleFrom: ".dokan-start-date",
        productScheduleTo: ".dokan-end-date",
        productScheduleCancel: ".cancel_sale_schedule.dokan-hide",
        productCategory: "#select2-product_cat-container",
        productcategoryValues: ".select2-results ul li",  // TODO: create dropdown locator like this (ul > li or ul li)
        productTags: '.select2-search__field',
        productDescription: 'textarea[placeholder="Enter some short description about this product..."]',
        createProduct: "#dokan-create-new-product-btn",
        createAndNewProduct: "#dokan-create-and-add-new-product-btn",

        //edit product
        viewProduct: ".dokan-right > .dokan-btn",
        title: "#post_title",
        //permalink
        premalinkEdit: ".edit-slug",
        confirmPremalinkEdit: ".cancel",
        cancelPremalinkEdit: ".save",
        //image
        productImage: ".dokan-feat-image-btn",
        uploadProductImage: '#\\__wp-uploader-id-1',
        addGalleryImage: ".fa-plus",
        uploadalleryImage: "#\\__wp-uploader-id-4",
        //product type
        productType: "#product_type",
        downloadable: "#\\_downloadable",
        vitual: "#\\_virtual",
        price: "#\\_regular_price",
        discountedPrice: "#\\_sale_price",
        discountedPriceSchedule: ".sale_schedule",
        scheduleFrom: ".dokan-start-date",
        scheduleTo: ".dokan-end-date",
        scheduleCancel: ".cancel_sale_schedule",
        category: "#select2-product_cat-container",
        tags: ".select2-search__field",
        //description
        shortDescription: "p", //TODO:
        description: "p", //TODO:
        //inventory
        sku: "#\\_sku",
        stockStatus: "#\\_stock_status",
        enableProductStockManagement: "#\\_manage_stock",
        stockQuantity: ".show_if_stock > .content-half-part:nth-child(1) > .dokan-form-control",
        lowStockThreshold: ".show_if_stock > .content-half-part:nth-child(2) > .dokan-form-control",
        allowBackorders: "#\\_backorders",
        allowOnlyOneQuantityOfThisProductToBeBoughtInASingleOrder: "#\\_sold_individually",
        //geolocation
        sameAsStore: "#\\_dokan_geolocation_use_store_settings",
        productLocation: "#\\_dokan_geolocation_product_location",
        productLocationFirstresult: ".gm-style > div:nth-child(2) > div:nth-child(2)",
        //add-ons
        addField: ".wc-pao-add-field",
        type: "#wc-pao-addon-content-type-0",
        displayAs: "#wc-pao-addon-content-display-0",
        titleRequired: "#wc-pao-addon-content-name-0",
        formatTitle: "#wc-pao-addon-content-title-format",
        enableDescription: "wc-pao-addon-description-enable-0",
        addDescription: "#wc-pao-addon-description-0",
        requiredField: "#wc-pao-addon-required-0",
        import: ".wc-pao-import-addons",
        export: ".wc-pao-export-addons",
        excludeAddons: "\\_product_addons_exclude_global",
        expandAll: ".wc-pao-expand-all",
        closeAll: ".wc-pao-close-all",
        //add-ons option
        enterAnOption: ".wc-pao-addon-content-label > input",
        optionPriceType: ".wc-pao-addon-option-price-type",
        optionPrice: ".wc_input_price:nth-child(1)",
        addOption: ".wc-pao-add-option",
        removOptionCrossIcon: ".wc-pao-addon-content-remove > .button",
        cacelRemoveOption: ".swal2-cancel",
        okRemoveOption: ".swal2-confirm",
        //shipping
        thisProductRequiresShipping: "#\\_disable_shipping",
        weight: "#\\_weight",
        length: "#\\_length",
        width: "#\\_width",
        height: "#\\_height",
        shippingClass: "#product_shipping_class",
        shippingSettings: ".help-block > a",
        //tax
        taxStatus: "#\\_tax_status",
        taxClass: "#\\_tax_class",
        //linked products
        upSells: ".content-half-part:nth-child(1) > .select2 .select2-search__field",
        crossSells: ".dokan-section-content > .content-half-part:nth-child(2) .select2-search__field",
        //attribute
        customAttribute: "#predefined_attribute",
        addAttribute: ".add_new_attribute",
        visibleOnTheProductPage: "checkbox-item:nth-child(6) > input",
        useForVariaion: ".show_if_variable > input",
        selectItems: "dokan-section-content > .content-half-part:nth-child(2) .select2-search__field",
        selectAll: ".plus",
        selectNone: ".minus",
        removeAttribute: ".dokan-product-remove-attribute",
        confirmRemoveAttribute: ".swal2-confirm",
        cancelRemoveAttribute: ".swal2-cancel",
        saveAttribute: ".dokan-save-attribute",
        addVariation: "#field_to_edit",
        go: ".do_variation_action",
        confirmGo: ".do_variation_action",
        okSuccessAlertGo: ".do_variation_action",
        cancelGo: ".do_variation_action",
        saveVariationchanges: ".save-variation-changes",
        cancelVariationchanges: ".cancel-variation-changes",
        defaultAttribute: ".dokan-variation-default-select > .dokan-form-control",
        //discount options
        enableBulkDiscount: "#\\_is_lot_discount",
        MinimumQuantity: "#\\_lot_discount_quantity",
        discountInPercentage: "#\_lot_discount_amount",
        //rma options
        overrideYourDefaultRmaSettingsForThisProduct: "#dokan_rma_product_override",
        label: "#dokan-rma-label",
        type: "#dokan-warranty-type",
        length: "#dokan-warranty-length",
        lengthValue: "content-half-part:nth-child(4) > .dokan-form-control",
        lengthDuration: "#dokan-warranty-length-duration",
        rmaPolicy: "p", //TODO: improve
        //wholesale options
        enableWholeSaleForThisProduct: "#wholesale\\[enable_wholesale\\]",
        wholesalePrice: "#dokan-wholesale-price",
        minimumQuantityForWholesale: "#dokan-wholesale-qty",
        //min-max options
        enableMinMaxRulesThisProduct: "#product_wise_activation",
        minimumQuantity: "#min_quantity",
        maximumQuantity: "#max_quantity",
        minimumAmount: "#min_amount",
        maximumAmount: "#max_amount",
        orderRulesDoNotCount: "#\\_donot_count",
        CategoryRulesExclude: "#ignore_from_cat",
        //other Options
        productStatus: "#post_status",
        visibility: "#\\_visibility",
        purchaseNote: "#\\_purchase_note",
        enableProductReviews: "#\\_enable_reviews",
        //advertise product
        advertiseThisProduct: "#dokan_advertise_single_product",
        confirmAdvertiseThisProduct: ".swal2-confirm",
        okSuccessAlertAdvertiseThisProduct: ".swal2-confirm",  //TODO:recheck
        cancellAdvertiseThisProduct: ".swal2-cancel",
        // save product
        saveProduct: ".dokan-btn-lg",
    },

    //orders
    vOrders: {
        //menues
        all: ".active:nth-child(1) > a",
        completed: ".list-inline > li:nth-child(2) > a",
        processing: ".list-inline > li:nth-child(3) > a",
        onhold: ".list-inline > li:nth-child(4) > a",
        pending: ".list-inline > li:nth-child(5) > a",
        cancelled: ".list-inline > li:nth-child(6) > a",
        refunded: ".list-inline > li:nth-child(7) > a",
        failed: ".list-inline > li:nth-child(8) > a",
        exportAll: ".dokan-btn-sm:nth-child(3)",
        exportFiltered: ".dokan-right .dokan-btn:nth-child(4)",
        //filter
        filterByDate: "#order_date_filter",
        filterByRegisteredCustomer: ".page-template-default",
        filter: ".dokan-left .dokan-btn",
        //bulk actions
        selectAll: "#cb-select-all",
        selectBulkOrderAction: "#bulk-order-action-selector",
        applyBulkOrder: "#bulk-order-action",
    },

    //user subscriptions
    vUserSubscriptions: {
        //filter
        filterByDate: "#order_date_filter",
        filter: ".dokan-btn",

        //edit subscription
        subscribtion: "td > a > strong",
        //edit subscription order status
        editSubscribtionOrderStatus: ".dokan-edit-status > small",
        subscribtionOrderStatus: "#order_status",
        updateSubscribtionOrderStatus: ".dokan-btn:nth-child(5)",
        cancelSubscribtionOrderStatus: ".dokan-btn-default",
        //downloadable product permission
        chooseADownloadableProduct: ".select2-search__field",
        grantAccess: ".grant_access",
        downloadsRemaining: ".form-input",
        accessExpires: "td > .short ",
        removeAccess: ".revoke_access",
        confirmRemoveAccess: ".swal2-confirm",
        cancelRemoveAccess: ".swal2-cancel",
        //subscription schedule
        billingInterval: "#\\_billing_interval",
        billingPeriod: "#\\_billing_period",
        nextPayment: "#next_payment",
        nextPaymentminute: "#next_payment_hour",
        nextPaymentMinute: "#next_payment_minute",
        endDate: "#end",
        endDateHour: "#end_hour",
        endDateMinute: "#end_minute",
        updateSchedule: ".dokan-btn:nth-child(4)",
        //subscription notes
        addNoteContent: "#add-note-content",
        orderNoteType: "#order_note_type",
        addNote: ".btn",
    },

    //coupons 
    vCoupon: {
        //create coupon
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

        //menues
        myCoupons: ".active:nth-child(1) > a",
        marketplaceCoupons: ".active:nth-child(2) > a",
    },

    //reports
    vReports: {
        //menues
        overview: ".active:nth-child(1) > a",
        salesByDay: ".dokan_tabs > li:nth-child(2) > a",
        topSelling: ".dokan_tabs > li:nth-child(3) > a",
        topEarning: ".dokan_tabs > li:nth-child(4) > a",
        statement: ".dokan_tabs > li:nth-child(5) > a",
        exportStatements: ".dokan-right",
        //filter
        startDate: "#from",
        endDate: "#to",
        show: ".dokan-btn",
    },

    //deliveryTime
    vDeliveryTime: {
        //filter
        deliveryTipeFilter: "#delivery-type-filter",
        filter: ".dokan-btn",
        // calander navigation
        month: ".fc-dayGridMonth-button",
        week: ".fc-timeGridWeek-button",
        day: ".fc-timeGridDay-button",
        list: ".fc-listWeek-button",
        previous: ".fc-prev-button",
        next: ".fc-next-button",
        today: ".fc-today-button"
    },

    //review
    vReviews: {
        //menus
        approved: ".active:nth-child(1) > a",
        pending: ".subsubsub > li:nth-child(2) > a",
        spam: ".subsubsub > li:nth-child(3) > a",
        trash: ".subsubsub > li:nth-child(4) > a",

        //bulk action
        seleceAll: ".dokan-check-all",
        commentStatus: "select",
        commentStatusSubmit: ".dokan-btn",

        //comment Actons
        viewComment: ".approved:nth-child(1) > .col-link > a",
        unapproveComment: ".approved:nth-child(1) li:nth-child(1) > .dokan-cmt-action",
        SpamComment: "approved:nth-child(1) li:nth-child(2) > .dokan-cmt-action",
        trashComment: "approved:nth-child(1) li:nth-child(3) > .dokan-cmt-action"
    },

    //withdraw
    vWithdraw: {
        // manual withdraw request
        minimumWithdrawAmount: "bdi",
        requestWithdraw: "#dokan-request-withdraw-button",
        withdrawAmount: "#withdraw-amount",
        withdrawMethod: "#withdraw-method",
        submitRequest: "#dokan-withdraw-request-submit",
        cancelRequest: "td > a",

        // auto disbursement schedule
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

        // view payment
        viewPayment: "#dokan-withdraw-display-requests-button",
        pendingRequests: ".list-inline > li:nth-child(1) > a",
        approvedRequests: ".list-inline > li:nth-child(2) > a",
        cancelledRequests: ".list-inline > li:nth-child(3) > a",
        withdrawDashboard: ".dokan-btn:nth-child(2)",

        //default payment methods
        payPalMakeDefault: "//strong[contains( text(), 'PayPal')]//..//..//button",
        bankTransferMakeDefault: "//strong[contains( text(), 'Bank Transfer')]//..//..//button",
        // customMethodMakeDefault(methodName) { return `//strong[contains( text(), '${methodName}')]//..//..//button`},
        customMethodMakeDefault: (methodName) => `//strong[contains( text(), '${methodName}')]//..//..//button`,
        skrillMakeDefault: "//strong[contains( text(), 'Skrill')]//..//..//button",
        //default payment setup links
        payPalSetup: "//strong[contains( text(), 'PayPal')]//..//..//button",
        bankTransferSetup: "//strong[contains( text(), 'Bank Transfer')]//..//..//button",
        // custommethodSetup(methodName) { return `//strong[contains( text(), '${methodName}')]//..//..//button`},
        customMethodSetup: (methodName) => `//strong[contains( text(), '${methodName}')]//..//..//button`,
        skrillSetup: "//strong[contains( text(), 'Skrill')]//..//..//button",
    },

    //return request
    vReturnRequest: {
        //menus
        all: ".active:nth-child(1) > a",
        new: ".list-inline > li:nth-child(2) > a",
        view: ".fa-eye",
        manage: ".request-manage",
        //return request
        backToList: ".left-header-content > a",
        changeOrderStatus: "#status",
        updateOrderStatus: ".dokan-btn", //TODO: has alert to handle
        sendRequest: ".dokan-send-refund-request",
        //TODO: add More locator 
        message: "#message",
        sendMessage: ".woocommerce-button",
    },

    //staff
    staff: {
        // add staff
        addNewStuff: ".dokan-btn",
        firstName: "#first_name",
        lastName: "#last_name",
        email: "#email",
        phone: "#phone",
        createStuff: ".dokan-btn",
        editStuff: ".edit > a",
        password: "#reg_password",
        updateStuff: ".dokan-btn",
        deleteStuff: ".delete > a",
        okDelete: ".swal2-confirm",
        cancelDelete: ".swal2-cancel",

        //manage permission
        managePermission: ".permission > a",
        updateStuffPermission: ".dokan-btn",
    },

    // booking
    vBooking: {
        //create booking product
        viewProduct: ".view-product",
        title: "#post_title",
        ProductImage: ".dokan-feat-image-btn",
        uploadProductImage: '#\\__wp-uploader-id-1',
        addGalleryImage: ".fa-plus",
        uploadalleryImage: "#\\__wp-uploader-id-4",
        vitual: "#\\_virtual",
        accommodationBooking: "#\\_is_dokan_accommodation",
        category: "#select2-product_cat-container ",
        tags: ".select2-search__field",
        //accommodation Booking options
        minimumNumberOfNightsAllowedInABooking: "#\\_wc_booking_min_duration",
        maximumNumberOfNightsAllowedInABooking: "#\\_wc_booking_max_duration",
        checkinTime: "#\\_dokan_accommodation_checkin_time",
        checkoutTime: "#\\_dokan_accommodation_checkout_time",
        // general Booking options
        bookingDurationType: "#\\_wc_booking_duration_type",
        bookingDuration: "#\\_wc_booking_duration",
        bookingDurationUnit: "#\\_wc_booking_duration_unit",
        //checkboxs
        calanderDisplayMode: "#\\_wc_booking_calendar_display_mode",
        enableCalendarRangePicker: "#\\_wc_booking_enable_range_picker",
        requiresConfirmation: "#\\_wc_booking_requires_confirmation",

        canBeCancelled: "#\\_wc_booking_user_can_cancel",
        bookingCanbeCancelledLimit: "#\\_wc_booking_cancel_limit",
        bookingCanbeCancelledLimitUnit: "#\\_wc_booking_cancel_limit_unit",
        //shipping
        thisProductRequiresShipping: "#\\_disable_shipping",
        weight: "#\\_weight",
        length: "#\\_length",
        width: "#\\_width",
        height: "#\\_height",
        shippingClass: "#product_shipping_class",
        shippingSettings: ".help-block > a",
        //tax
        taxStatus: "#\\_tax_status",
        taxClass: "#\\_tax_class",
        //availability
        maxBookingsPerBlock: "#\\_wc_booking_qty",
        minimumBookingWindowIntoTheFutureDate: "#\\_wc_booking_min_date",
        minimumBookingWindowIntoTheFutureDateUnit: "#\\_wc_booking_min_date_unit",
        maximumBookingwindowIntoTheFutureDate: "#\\_wc_booking_max_date",
        maximumBookingwindowIntoTheFutureDateUnit: "#\\_wc_booking_max_date_unit",
        requireABufferPeriodOfMonthsBetweenBookings: "#\\_wc_booking_buffer_period",
        adjacentBuffering: "#\\_wc_booking_apply_adjacent_buffer",
        allDatesAre: "#\\_wc_booking_default_date_availability",
        checkRulesAgainst: "#\\_wc_booking_check_availability_against",
        restrictStartAndEndDays: "#dokan_booking_has_restricted_days_field",
        sunday: "#\\_wc_booking_restricted_days\[0\]",
        monday: "#\\_wc_booking_restricted_days\[1\]",
        tuesday: "#\\_wc_booking_restricted_days\[2\]",
        wednesday: "#\\_wc_booking_restricted_days\[3\]",
        thursday: "#\\_wc_booking_restricted_days\[4\]",
        friday: "#\\_wc_booking_restricted_days\[5\]",
        saturday: "#\\_wc_booking_restricted_days\[6\]",
        //setAvailabilityRange
        addRangeAvailability: ".table_grid:nth-child(8) .button",
        rangeTypeAbility: ".wc_booking_availability_type > select",
        rangeFromAbility: ".from_date > .date-picker ",
        rangeToAbility: ".to_date > .date-picker ",
        bookableAbility: "td:nth-child(6) select",
        priorityAbility: ".priority > input",
        cancelAbility: "#availability_rows .remove",
        //costs
        baseCost: "#\\_wc_booking_cost",
        blockCost: "#\\_wc_booking_block_cost",
        displayCost: "#\\_wc_display_cost",
        //costRange
        addRangeCost: "dokan-booking-range-table > tfoot .button",
        rangeTypeCostRange: ".wc_booking_pricing_type > select",
        rangeFromCostRange: ".from_date > .date-picker",
        rangeToCostRange: ".to_date > .date-picker ",
        baseCostModifier: "td:nth-child(6) select",
        baseCostRange: "td:nth-child(6) > .dokan-form-control",
        blockCostModifier: "td:nth-child(7) select",
        blockCostRange: "td:nth-child(7) > .dokan-form-control",
        cancelCostRange: "#pricing_rows .remove",
        //extra Options
        //has persons
        hasPersons: "#\\_wc_booking_has_persons",
        minPersons: "#\\_wc_booking_min_persons_group",
        maxPersons: "#\\_wc_booking_max_persons_group",
        multiplyAllCostsByPersonCount: "#\\_wc_booking_person_cost_multiplier",
        countPersonsAsBookings: "#\\_wc_booking_person_qty_multiplier",
        enablePersonTypes: "#\\_wc_booking_has_person_types",
        //add person
        addPersonType: ".add_person",
        personTypeName: ".person_name:nth-child(2)",
        personBaseCost: ".wc-metabox-content tr:nth-child(1) > td:nth-child(2) > input",
        personBlockCost: ".wc-metabox-content tr:nth-child(1) > td:nth-child(3) > input",
        description: ".person_description",
        min: "tr:nth-child(2) > td:nth-child(2) > input",
        max: "tr:nth-child(2) > td:nth-child(3) > input",
        unlink: ".unlink_booking_person", //TODO: confirmation in alert
        //has resources
        hasResources: "#\\_wc_booking_has_resources",
        //add resourse
        label: "#\\_wc_booking_resource_label",
        resourcesAre: "#\\_wc_booking_resources_assignment",
        addResouceId: ".add_resource_id",
        addResource: ".add_resource",
        resourceBaseCost: "td:nth-child(1) > input",
        resourceBlockCost: ".wc-metabox-content td:nth-child(2) > input",
        removeResource: ".wc-metabox-content td:nth-child(2) > input", //TODO: confirmation in alert
        //description
        shortDescription: "", //TODO:
        description: "", //TODO:
        //inventory
        sku: "#\\_sku",
        stockStatus: "#\\_stock_status",
        enableProductStockManagement: "#\\_manage_stock",
        stockQuantity: ".show_if_stock > .content-half-part:nth-child(1) > .dokan-form-control",
        lowStockThreshold: ".show_if_stock > .content-half-part:nth-child(2) > .dokan-form-control",
        allowBackorders: "#\\_backorders",
        allowOnlyOneQuantityOfThisProductToBeBoughtInASingleOrder: "#\\_sold_individually",
        //geolocation
        sameAsStore: "#\\_dokan_geolocation_use_store_settings",
        productLocation: "#\\_dokan_geolocation_product_location",
        productLocationFirstresult: ".gm-style > div:nth-child(2) > div:nth-child(2)",
        //add-ons
        addField: ".wc-pao-add-field",
        type: "#wc-pao-addon-content-type-0",
        displayAs: "#wc-pao-addon-content-display-0",
        titleRequired: "#wc-pao-addon-content-name-0",
        formatTitle: "#wc-pao-addon-content-title-format",
        enableDescription: "wc-pao-addon-description-enable-0",
        addDescription: "#wc-pao-addon-description-0",
        requiredField: "#wc-pao-addon-required-0",
        bookingsMultiplyCostByPersonCount: "#addon_wc_booking_person_qty_multiplier_0",
        bookingsMultiplyCostByBlockCount: "#addon_wc_booking_block_qty_multiplier_0",
        import: ".wc-pao-import-addons",
        export: ".wc-pao-export-addons",
        excludeAddons: "#\\_product_addons_exclude_global",
        expandAll: ".wc-pao-expand-all",
        closeAll: ".wc-pao-close-all",
        //add-ons option
        enterAnOption: ".wc-pao-addon-content-label > input",
        optionPriceType: ".wc-pao-addon-option-price-type",
        optionPrice: ".wc_input_price:nth-child(1)",
        addOption: ".wc-pao-add-option",
        removOptionCrossIcon: ".wc-pao-addon-content-remove > .button",
        cacelRemoveOption: ".swal2-cancel",
        okRemoveOption: ".swal2-confirm",
        //other Options
        productStatus: "#post_status",
        visibility: "#\\_visibility",
        purchaseNote: "#\\_purchase_note",
        enableProductReviews: "#\\_enable_reviews",
        // save product
        saveProduct: ".dokan-btn-lg",

        //allBookingProduct
        allBookingProduct: ".dokan_tabs > li:nth-child(1) > a",
        addNewbookingProduct: ".dokan-btn-theme",
        addNewbooking: ".dokan-btn-theme",
        //addbooking
        customerId: "#select2-customer_id-container",
        selectABookableProduct: "#select2-bookable_product_id-container",
        createANewCorrespondingOrderForThisNewBooking: "p:nth-child(1) .checkbox",
        assignThisBookingToAnExistingOrderWithThisId: "p:nth-child(2) .checkbox",
        bookingdOrderId: ".text",
        DontCreateAnOrderForThisBooking: "p:nth-child(3) .checkbox",
        next: ".button-primary",
        //TODO: add new booking
        //filter
        filterByDate: "#filter-by-date",
        filterByCategory: "#product_cat",
        filterByType: "#filter-by-type",
        filterByOther: ".dokan-w8 > .dokan-form-group:nth-child(4) > .dokan-form-control",
        filter: ".dokan-btn:nth-child(6)",
        //search product
        searchProduct: ".dokan-w5 .dokan-form-control",
        search: ".dokan-w5 > .dokan-btn",

        //manage Booking
        manageBookings: ".dokan_tabs > li:nth-child(2) > a",
        all: ".list-inline > li:nth-child(1) > a",
        unPaid: "a > .status-unpaid",
        paidAndConfirmed: "a > .status-paid",
        view: ".dokan-btn",
        editBookingStatus: 'small:nth-child(1)',
        selectOrderStatus: "#booking_order_status",
        UpdateOrderStatus: ".dokan-btn-success",
        cancelUpdateOrderStatus: "dokan-btn-default",

        //calander
        calendar: ".dokan_tabs > li:nth-child(3) > a",
        calendarBookingsFilter: "#calendar-bookings-filter",
        month: "div:nth-child(2) > .dokan-form-control",
        year: "div:nth-child(3) > .dokan-form-control",
        previous: ".prev",
        next: ".next",
        calanderDay: "//input[@placeholder='yyyy-mm-dd']",  //XPath
        dayView: ".day",
        monthView: ".month",

        //manage resources
        manageResources: ".dokan_tabs > li:nth-child(4) > a",
        addNewResouce: ".dokan-right",
        resourceName: ".swal2-input",
        cancelAddNewResouce: ".swal2-cancel",
        confirmAddNewResouce: ".swal2-confirm",
        editResource: "",
        removeResource: "",
        //edit resource
        resourceTitle: "#post_title",
        availableQuantity: "#\\_wc_booking_qty",
        rangetypeResource: ".wc_booking_availability_type > select",
        rangeFromResource: ".from_date > .date-picker",
        rangeToResource: ".to_date > .date-picker ",
        bookableResource: "td:nth-child(6) select",
        priorityResource: ".priority > input",
        addRangeResource: ".button",
        saveResource: ".dokan-btn-lg",
    },

    //announcements
    vAnnouncement: {
        seeMore: "p > a",
        backToAllNotice: ".dokan-btn",
        deleteAnnouncement: ".dokan-announcement-wrapper-item:nth-child(1) .fas",
        confirmDeleteAnnouncement: ".swal2-confirm",
        canceldeleteAnnouncement: ".swal2-cancel",
    },

    // tools
    vTools: {
        //menus
        import: ".active > .active",
        export: ".dokan_tabs > li:nth-child(2) > a",

        //import
        //xml
        chooseXml: "#import p:nth-child(1) > input",
        importXml: "p:nth-child(2) > .btn",
        //csv
        importCsv: "#import > .dokan-btn",
        chooseCsv: "#upload",
        updateExistingProducts: "#woocommerce-importer-update-existing",
        continue: ".button",
        runTheImporter: ".button",
        viewImportLog: ".woocommerce-importer-done-view-errors",
        viewProducts: ".button",

        //export
        //xml
        all: "#export_all",
        product: "#export_product",
        variation: "#export_variation_product",
        exportXml: "p:nth-child(4) > .btn",
        //csv
        exportCsv: "#export > .dokan-btn",
        exportCustomMeta: "#woocommerce-exporter-meta",
        generateCsv: ".woocommerce-exporter-button",
    },

    //action
    vAction: {
        //menus
        all: ".active:nth-child(1) > a",
        online: ".dokan-listing-filter > li:nth-child(2) > a",
        pending: ".dokan-listing-filter > li:nth-child(3) > a",
        review: "",
        draft: ".dokan-listing-filter > li:nth-child(4) > a",

        // create action product
        addNewActionProduct: ".dokan-btn-theme",
        productName: "#post-title",
        productShortDescription: "#content > .col-full",
        ProductImage: ".dokan-feat-image-btn",
        uploadProductImage: '#\\__wp-uploader-id-1',
        addGalleryImage: ".fa-plus",
        uploadalleryImage: "#\\__wp-uploader-id-4",
        productCategory: "select2-product_cat-container",
        productTag: ".select2-search__field",
        downloadable: "#\\_downloadable",
        virtual: "#\\_virtual",
        //general options
        itemCondition: "#\\_auction_item_condition",
        actionType: "#\\_auction_type",
        enableProxyBiddingForThisAuctionProduct: ".dokan-form-group > .checkbox > label",
        startPrice: "#\\_auction_start_price",
        bidIncrement: "#\\_auction_bid_increment",
        reservedPrice: "#\\_auction_reserved_price",
        buyItNowPrice: "#\\_regular_price",
        auctionStartDate: "#\\_auction_dates_from",
        auctionEndDate: "#\\_auction_dates_to",
        enableAutomaticRelistingForThisAuction: "#\\_auction_automatic_relist",
        relistIfFailAfterNHours: "#\\_auction_relist_fail_time",
        relistIfNotPaidAfterNHours: "#\\_auction_relist_not_paid_time",
        relistAuctionDurationInH: "#\\_auction_relist_duration",
        //shipping
        thisProductRequiresShipping: "#\\_disable_shipping",
        weight: "#\\_weight",
        length: "#\\_length",
        width: "#\\_width",
        height: "#\\_height",
        shippingClass: "#product_shipping_class",
        shippingSettings: ".help-block > a",
        //tax
        taxStatus: "#\\_tax_status",
        taxClass: "#\\_tax_class",
        //description
        productShortDescription: "", //TODO:
        //add auction
        addAuctionProduct: ".dokan-btn-theme",

        //TODO: add more locators


        //action activity
        actionActivity: ".button-ml > .dokan-btn",
        backToActions: ".entry-title > #auction-clear-filter-button",
        //filter
        filterDateFrom: "#\\_auction_dates_from",
        filterDateTo: "#\\_auction_dates_to",
        filter: ".dokan-btn-theme",
        filterReset: "div > #auction-clear-filter-button",
        //search
        searchAuctionActivity: ".dokan-form-control",
        search: ".dokan-btn:nth-child(2)",
    },

    //support
    vSupport: {
        //menus
        allTickets: ".dokan-support-topic-counts > li:nth-child(1) > a",
        openTickets: ".dokan-support-topic-counts > li:nth-child(2) > a",
        closedTickets: ".dokan-support-topic-counts > li:nth-child(3) > a",

        //filter
        selectCustomer: ".page-template-default",
        ticketDateFilter: "#support_ticket_date_filter",
        tickedIdOrKeyword: "#dokan-support-ticket-search-input",
        filter: ".dokan-btn:nth-child(6)",

        //manage ticket
        backToTickets: ".dokan-dashboard-content > a",
        selectTicket: ".column-primary > a",
        addReplyNote: "#comment",
        changeStatus: ".dokan-support-topic-select",
        submitReply: "#submit",
        okEmptySubmit: ".swal2-confirm",

        //close ticket
        closeTopic: "tr:nth-child(2) .dokan-btn",
        confirmCloseTopic: ".swal2-confirm",
        cancelCloseTopic: ".swal2-cancel",
    },

    // vendor account details
    vAccountDetails: {
        firstName: "#account_first_name",
        lastName: "#account_last_name",
        email: "#account_email",
        currentPassword: "#password_current",
        NewPassword: "#password_1",
        confirmNewPassword: "#password_2",
        saveChanges: ".dokan-btn",
    },

    // search similar product
    vSerchSimilarProduct: {
        //search similar product spmv
        openSearchField: ".fa-caret-down",
        closeSearchField: ".fa-caret-up",
        searchProduct: ".input-group-center > .dokan-form-control",
        search: ".dokan-btn-search",
        orCreateNewProduct: ".footer-create-new-section > a",
        sortProduct: ".orderby",
        editProduct: "td > .dokan-btn",
        addToStore: ".dokan-spmv-clone-product",
    },

    //settings
    vSettings: {
        store: ".store > a",
        addons: ".product-addon > a",
        payment: ".payment > a",
        verification: ".verification > a",
        deliveryTime: ".delivery-time > a",
        shipping: ".shipping > a",
        shipStation: ".shipstation > a",
        socialProfile: ".social > a",
        rma: ".rma > a",
        storeSEO: ".seo > a",
    },

    //store settings
    vStoreSwettings: {
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        updateSettings: ".dokan-btn",
    },

    //addons settings
    vAddonSettings: {
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        updateSettings: ".dokan-btn",
    },

    //payment settings
    vPaymentSettings: {
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        updateSettings: ".dokan-btn",
    },

    //verification settings
    vVerificationSettings: {
        //ID verification
        startIdVerification: "#dokan_v_id_click",
        passport: ".radio:nth-child(1) > input",
        nationalIdCard: ".radio:nth-child(2) > input",
        drivingLicense: ".radio:nth-child(3) > input",
        uploadPhoto: ".dokan-gravatar-drag",
        selectPhoto: "#\\__wp-uploader-id-1",
        submitId: "#dokan_v_id_submit",
        cancelSubmitId: "#dokan_v_id_cancel_form",

        //address  verification
        startAddressVerification: "#dokan_v_address_click",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        submitAddress: "",
        cancelSubmitAddress: "",


        //Social profiles
        //TODO: add more locator

        //company verification
        startCompanyVerification: "",
        a: "",
    },

    //delivery time settings
    vDeliveryTimeSettins: {
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
    },

    //shipping settings
    vShippingSettings: {
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
        a: "",
    },

    //store SEO settings
    vStoreSeoSettings: {

    },

    //social profile settings
    vSocialProfileSettings: {
        facebook: "#settings\[social\]\[fb\]",
        twitter: "#settings\[social\]\[twitter\]",
        pinterest: "#settings\[social\]\[pinterest\]",
        linkedin: "#settings\[social\]\[linkedin\]",
        youtube: "#settings\[social\]\[youtube\]",
        instragram: "#settings\[social\]\[instagram\]",
        flicker: "#settings\[social\]\[flickr\]",
        updateSettings: ".dokan-btn",
    },

    //rma settings
    vRmaSettings: {
        label: "#dokan-rma-label",
        type: "#dokan-warranty-type",
        length: "#dokan-warranty-length",
        lengthValue: "content-half-part:nth-child(4) > .dokan-form-control",
        lengthDuration: "#dokan-warranty-length-duration",
        rmaPolicy: "p", //TODO: improve
        saveChanges: "#dokan-store-rma-form-submit",
    },

    //store SEO settings
    vStoreSeoSettings: {

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
        // await page.click(this.product.productCategory);
        // await base.getMultipleElementTexts(this.product.categoryValues)
        await base.setDropdownOptionSpan(this.product.categoryValues, category)
        await page.click(this.product.createProduct)
    },

    async addcoupon(couponTitle, couponAmount) {
        await base.click(this.vDashboard.coupons);
        await base.click(this.vCoupon.addNewCoupon);
        await page.type(this.vCoupon.couponTitle, couponTitle);
        await page.type(this.vCoupon.amount, couponAmount);
        await page.click(this.vCoupon.selectAll);
        await page.click(this.vCoupon.applyForNewProducts);
        await page.click(this.vCoupon.showOnStore);
        await page.click(this.vCoupon.createCoupon);
    },

    async requestwithdraw(withdrawAmount, withdrawMethod) {
        await base.click(this.vDashboard.withdraw);
        let minimumWithdrawAmount = await base.getElementText(this.vWithdraw.minimumWithdrawAmount)
        minimumWithdrawAmount = minimumWithdrawAmount.replace('$', '')
        // console.log(minimumWithdrawAmount)
        await page.click(this.vWithdraw.requestWithdraw);
        let balance = await base.getValue(this.withdraw.withdrawAmount)
        if (Number(balance) > Number(minimumWithdrawAmount)) {
            await page.type(this.vWithdraw.withdrawAmount, minimumWithdrawAmount);
            // await base.setDropdownOption(this.withdraw.withdrawMethod, withdrawMethod);
            await page.click(this.vWithdraw.submitRequest);
        }
    },

    async cancelrequestwithdraw() {
        await base.click(this.vDashboard.withdraw);
        await page.click(this.vWithdraw.cancelRequest);

    },

    async addautowithdrawdisbursementschedule(preferredPaymentMethod, preferredSchedule, minimumWithdrawAmount, reserveBalance) {
        await base.click(this.vDashboard.withdraw);
        await page.click(this.vWithdraw.editSchedule);
        await page.select(this.vWithdraw.preferredPaymentMethod, preferredPaymentMethod)
        await page.click(this.vWithdraw[preferredSchedule]);
        // let length = await base.getCount(this.withdraw.onlyWhenBalanceIs)
        await page.select(this.vWithdraw.onlyWhenBalanceIs, minimumWithdrawAmount)
        await page.select(this.vWithdraw.maintainAReserveBalance, reserveBalance)
        await page.click(this.vWithdraw.changeSchedule);
        // await page.waitForTimeout(5000)
    },

    async adddefaultwithdrawpaymentmethods(preferredSchedule) {
        // TODO : locator issue
        await base.click(this.vDashboard.withdraw);
        // let a = page.$(this.vWithdraw.bankTransferSetup)
        // a.click()
        // await page.waitForXPath(this.vWithdraw.customMethodSetup('qwerty'));
        // await page.hover(this.vWithdraw.customMethodSetup('qwerty'));
        // await page.click(this.vWithdraw.customMethodSetup('qwerty'));
        // await page.waitForTimeout(5000);
    },



};
