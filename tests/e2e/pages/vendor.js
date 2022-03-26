const { createURL } = require("@wordpress/e2e-test-utils");
const base = require("../pages/base.js");

module.exports = {
    // locators

    //vendor setup wizard
    vSetup: {
        //intro
        letsGo: '.lets-go-btn',
        notRightNow: '.not-right-now-btn',

        //store setup   
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

        //payment setup
        //paypal
        paypal: '.email',
        //bank
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
        //skrill
        skrill: "", //TODO: add skrill locator
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
        editProduct: ".row-actions > .edit > a",
        deletePermanently: ".row-actions > .delete > a",
        view: ".row-actions > .view > a",
        quickEdit: ".row-actions > .item-inline-edit > a",
        duplicate: ".row-actions > .duplicate > a",


        //create product
        closeCreateProductPopup: ".mfp-close",
        addNewProduct: ".dokan-add-new-product",
        productName: "input[name='post_title']",
        productImage: ".dokan-feat-image-btn",
        productUploadProductImage: '#\\__wp-uploader-id-1',
        productAddGalleryImage: ".fa-plus",
        productUploadGalleryImage: "#\\__wp-uploader-id-4",
        productPrice: "#_regular_price",
        productDiscountedPrice: "#_sale_price",
        productDiscountedPriceSchedule: ".sale_schedule",
        productScheduleFrom: ".dokan-start-date",
        productScheduleTo: ".dokan-end-date",
        productScheduleCancel: ".cancel_sale_schedule.dokan-hide",
        productCategory: "#select2-product_cat-container",
        productCategoryValues: ".select2-results ul li",  // TODO: create dropdown locator like this (ul > li or ul li)
        productTags: '.select2-search__field',
        productDescription: 'textarea[placeholder="Enter some short description about this product..."]',
        createProduct: "#dokan-create-new-product-btn",
        createAndNewProduct: "#dokan-create-and-add-new-product-btn",

        //edit product
        viewProduct: ".dokan-right > .dokan-btn",
        title: "#post_title",
        //permalink
        permalinkEdit: ".edit-slug",
        confirmPermalinkEdit: ".cancel",
        cancelPermalinkEdit: ".save",
        //image
        productImage: ".dokan-feat-image-btn",
        uploadProductImage: '#\\__wp-uploader-id-1',
        addGalleryImage: ".fa-plus",
        uploadGalleryImage: "#\\__wp-uploader-id-4",
        //product type
        productType: "#product_type",
        downloadable: "#\\_downloadable",
        virtual: "#\\_virtual",
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
        allowBackOrders: "#\\_backorders",
        allowOnlyOneQuantityOfThisProductToBeBoughtInASingleOrder: "#\\_sold_individually",
        //geolocation
        sameAsStore: "#\\_dokan_geolocation_use_store_settings",
        productLocation: "#\\_dokan_geolocation_product_location",
        productLocationFirstResult: ".gm-style > div:nth-child(2) > div:nth-child(2)",
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
        removeOptionCrossIcon: ".wc-pao-addon-content-remove > .button",
        cancelRemoveOption: ".swal2-cancel",
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
        useForVariation: ".show_if_variable > input",
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
        saveVariationChanges: ".save-variation-changes",
        cancelVariationChanges: ".cancel-variation-changes",
        defaultAttribute: ".dokan-variation-default-select > .dokan-form-control",
        //discount options
        enableBulkDiscount: "#\\_is_lot_discount",
        MinimumQuantity: "#\\_lot_discount_quantity",
        discountInPercentage: "#\\_lot_discount_amount",
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
        cancelAdvertiseThisProduct: ".swal2-cancel",
        // save product
        saveProduct: ".dokan-btn-lg",
    },

    //orders
    vOrders: {
        //menus
        all: ".active:nth-child(1) > a",
        completed: ".list-inline > li:nth-child(2) > a",
        processing: ".list-inline > li:nth-child(3) > a",
        onHold: ".list-inline > li:nth-child(4) > a",
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
        subscription: "td > a > strong",
        //edit subscription order status
        editSubscriptionOrderStatus: ".dokan-edit-status > small",
        subscriptionOrderStatus: "#order_status",
        updateSubscriptionOrderStatus: ".dokan-btn:nth-child(5)",
        cancelSubscriptionOrderStatus: ".dokan-btn-default",
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
        nextPaymentHour: "#next_payment_hour",
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

        //menus
        myCoupons: ".active:nth-child(1) > a",
        marketplaceCoupons: ".active:nth-child(2) > a",

        //coupon dashboard
        createdCoupon: ".coupon-code.column-primary strong span"
    },

    //reports
    vReports: {
        //menus
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
        deliveryTimeFilter: "#delivery-type-filter",
        filter: ".dokan-btn",
        // calender navigation
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
        selectAll: ".dokan-check-all",
        commentStatus: "select",
        commentStatusSubmit: ".dokan-btn",

        //comment Actions
        viewComment: ".approved:nth-child(1) > .col-link > a",
        unApproveComment: ".approved:nth-child(1) li:nth-child(1) > .dokan-cmt-action",
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
        crossIcon: ".mfp-close",
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
        // customMethodSetup(methodName) { return `//strong[contains( text(), '${methodName}')]//..//..//button`},
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
    vStaff: {
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
        uploadGalleryImage: "#\\__wp-uploader-id-4",
        virtual: "#\\_virtual",
        accommodationBooking: "#\\_is_dokan_accommodation",
        category: "#select2-product_cat-container ",
        categoryValues: ".select2-results ul li",
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

        calenderDisplayMode: "#\\_wc_booking_calendar_display_mode",
        //checkboxes
        enableCalendarRangePicker: "#\\_wc_booking_enable_range_picker",
        requiresConfirmation: "#\\_wc_booking_requires_confirmation",
        canBeCancelled: "#\\_wc_booking_user_can_cancel",
        bookingCanBeCancelledLimit: "#\\_wc_booking_cancel_limit",
        bookingCanBeCancelledLimitUnit: "#\\_wc_booking_cancel_limit_unit",
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
        maximumBookingWindowIntoTheFutureDate: "#\\_wc_booking_max_date",
        maximumBookingWindowIntoTheFutureDateUnit: "#\\_wc_booking_max_date_unit",
        requireABufferPeriodOfMonthsBetweenBookings: "#\\_wc_booking_buffer_period",
        adjacentBuffering: "#\\_wc_booking_apply_adjacent_buffer",
        allDatesAre: "#\\_wc_booking_default_date_availability",
        checkRulesAgainst: "#\\_wc_booking_check_availability_against",
        restrictStartAndEndDays: "#dokan_booking_has_restricted_days_field",
        sunday: "#\\_wc_booking_restricted_days\\[0\\]",
        monday: "#\\_wc_booking_restricted_days\\[1\\]",
        tuesday: "#\\_wc_booking_restricted_days\\[2\\]",
        wednesday: "#\\_wc_booking_restricted_days\\[3\\]",
        thursday: "#\\_wc_booking_restricted_days\\[4\\]",
        friday: "#\\_wc_booking_restricted_days\\[5\\]",
        saturday: "#\\_wc_booking_restricted_days\\[6\\]",
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
        //add resource
        label: "#\\_wc_booking_resource_label",
        resourcesAre: "#\\_wc_booking_resources_assignment",
        addResourceId: ".add_resource_id",
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
        productLocationFirstResult: ".gm-style > div:nth-child(2) > div:nth-child(2)",
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
        removeOptionCrossIcon: ".wc-pao-addon-content-remove > .button",
        cancelRemoveOption: ".swal2-cancel",
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
        addNewBookingProduct: ".dokan-btn-theme",
        addNewBooking: ".dokan-btn-theme",
        //addBooking
        customerId: "#select2-customer_id-container",
        selectABookableProduct: "#select2-bookable_product_id-container",
        createANewCorrespondingOrderForThisNewBooking: "p:nth-child(1) .checkbox",
        assignThisBookingToAnExistingOrderWithThisId: "p:nth-child(2) .checkbox",
        bookingOrderId: ".text",
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

        //calender
        calendar: ".dokan_tabs > li:nth-child(3) > a",
        calendarBookingsFilter: "#calendar-bookings-filter",
        month: "div:nth-child(2) > .dokan-form-control",
        year: "div:nth-child(3) > .dokan-form-control",
        previous: ".prev",
        next: ".next",
        calenderDay: "//input[@placeholder='yyyy-mm-dd']",  //XPath
        dayView: ".day",
        monthView: ".month",

        //manage resources
        manageResources: ".dokan_tabs > li:nth-child(4) > a",
        addNewResource: ".dokan-right",
        resourceName: ".swal2-input",
        cancelAddNewResource: ".swal2-cancel",
        confirmAddNewResource: ".swal2-confirm",
        editResource: "",
        removeResource: "",
        //edit resource
        resourceTitle: "#post_title",
        availableQuantity: "#\\_wc_booking_qty",
        rangeTypeResource: ".wc_booking_availability_type > select",
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
        cancelDeleteAnnouncement: ".swal2-cancel",
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
        uploadGalleryImage: "#\\__wp-uploader-id-4",
        category: "select2-product_cat-container",
        categoryValues: ".select2-results ul li",
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
    vSearchSimilarProduct: {
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
    vStoreSettings: {
        banner: ".dokan-banner-drag",
        // banner: "//a[normalize-space()='Upload banner']",
        // uploadBanner: "#\\__wp-uploader-id-1",
        profilePicture: ".dokan-pro-gravatar-drag",
        // uploadProfilePicture: "#\\__wp-uploader-id-4",

        // selectFiles: "//div[@style='position: relative;']//button[@class='browser button button-hero']",
        selectFiles: "//div[@style='position: relative;']//button[contains(text(),'Select Files')]",
        // selectAndCrop: "//div[@style='position: relative;']//button[@class='button media-button button-primary button-large media-button-select']",
        selectAndCrop: "//div[@style='position: relative;']//button[contains(text(),'Select and Crop')]",
        // cropImage: "//div[@style='position: relative;']//button[@class='button media-button button-primary button-large media-button-insert']",
        cropImage: "//div[@style='position: relative;']//button[contains(text(),'Crop image')]",

        storeName: "#dokan_store_name",
        storeProductsPerPage: "#dokan_store_ppp",
        phoneNo: "#setting_phone",
        multipleLocation: "#multiple-store-location",
        locationName: "#store-location-name-input",
        //address
        addLocation: "#show-add-store-location-section-btn",
        editLocation: ".store-pickup-location-edit-btn",
        street: "#dokan_address\\[street_1\\]",
        street2: "#dokan_address\\[street_2\\]",
        city: "#dokan_address\\[city\\]",
        postOrZipCode: "#dokan_address\\[zip\\]",
        country: "#dokan_address_country",
        state: "#dokan_address_state",
        saveLocation: "#dokan-save-store-location-btn",
        cancelSaveLocation: "#cancel-store-location-section-btn",
        deleteSaveLocation: ".store-pickup-location-delete-btn",
        //company info
        companyName: "#settings_dokan_company_name",
        companyIdOrEuidNumber: "#settings_dokan_company_id_number",
        vatOrTaxNumber: "#setting_vat_number",
        nameOfBank: "#setting_bank_name",
        bankIban: "#setting_bank_iban",
        //email
        email: "input[name='setting_show_email']",
        moreProducts: "input[name='setting_show_more_ptab']",
        //map
        map: "#dokan-map-add",
        // map1: "#dokan-location-find-btn",//not intractable
        // mapFirstResult: "#ui-id-4", //not working
        mapFirstResult: "#ui-id-3",
        //store opening closing time
        storeOpeningClosingTime: "#dokan-store-time-enable",
        chooseBusinessDays: ".select2-container--below .select2-selection__rendered",
        // TODO: need to improve locator days, opening and closing time,addRow,delete row
        monday: ".tabs > li:nth-child(1)",
        tuesday: ".tabs > li:nth-child(2)",
        wednesday: ".tabs > li:nth-child(3)",
        thursday: ".tabs > li:nth-child(4)",
        friday: ".tabs > li:nth-child(5)",
        saturday: ".tabs > li:nth-child(6)",
        sunday: ".tabs > li:nth-child(7)",
        openingTime: "#opening-time-sunday",
        closingTime: "#closing-time-sunday",
        addNewRow: "#store-tab-sunday .added-store-opening-time > .fa",
        deleteOneRow: ".remove-store-closing-time > .fa",
        storeOpenNotice: ".dokan-form-group:nth-child(19) .dokan-form-control",
        storeCloseNotice: ".dokan-form-group:nth-child(20) .dokan-form-control",
        //vacation
        goToVacation: "#dokan-seller-vacation-activate",
        closingStyle: "label > .form-control",
        dateRangeFrom: "#dokan-seller-vacation-date-from",
        dateRangeTo: "#dokan-seller-vacation-date-to",
        setVacationMessage: ".dokan-form-group:nth-child(2) #dokan-seller-vacation-message",
        saveEdit: "#dokan-seller-vacation-save-edit > span",
        cancelEdit: "#dokan-seller-vacation-cancel-edit",
        setVacationMessage: ".dokan-form-group:nth-child(2) #dokan-seller-vacation-message",
        editSavedVacationSchedule: "tr:nth-child(1) > .dokan-seller-vacation-list-action .fas",
        deleteSavedVacationSchedule: "tr:nth-child(1) .dokan-seller-vacation-remove-schedule",
        confirmDeleteSavedVacationSchedule: ".swal2-confirm",
        cancelDeleteSavedVacationSchedule: ".swal2-cancel",
        //discount
        enableStoreWideDiscount: "#lbl_setting_minimum_quantity",
        minimumOrderAmount: "#setting_minimum_order_amount",
        percentage: "#setting_order_percentage",
        //biography
        biography: "p",//TODO: improve
        //store support
        showSupportButtonInStore: "#support_checkbox",
        showSupportButtonInSingleProduct: "#support_checkbox_product",
        supportButtonText: "#dokan_support_btn_name",
        //min-max
        enableMinMaxQuantities: "#enable_vendor_min_max_quantity",
        minimumProductQuantityToPlaceAnOrder: "#min_quantity_to_order",
        maximumProductQuantityToPlaceAnOrder: "#max_quantity_to_order",
        enableMinMaxAmount: "#enable_vendor_min_max_amount",
        minimumAmountToPlaceAnOrder: "#min_amount_to_order",
        maximumAmountToPlaceAnOrder: "#max_amount_to_order",
        selectProducts: ".select2-search:nth-child(1) > .select2-search__field",
        selectAll: ".dokan-min-max-product-select-all",
        clear: ".dokan-min-max-product-clear-all",
        selectCategory: "#product_cat",

        //update settings
        updateSettings: ".dokan-btn",

    },

    //addons settings
    vAddonSettings: {
        createNewAddon: ".dokan-btn",
        createNew: "div:nth-child(2) > a:nth-child(1)",
        backToAddonLists: ".back-to-addon-lists-btn",
        name: "#addon-reference",
        priority: "#addon-priority",
        productCategories: ".select2-search__field",
        //TODO: locators may need to be updated addons
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
        expandAll: ".wc-pao-expand-all",
        closeAll: ".wc-pao-close-all",
        publish: "#submit",

    },

    //payment settings
    vPaymentSettings: {
        //paypal
        paypal: '.payment-field-paypal .dokan-form-control',

        //bank transfer
        bankAccountName: '.dokan-form-group:nth-child(1) > .dokan-w8 > .dokan-form-control',
        bankAccountNumber: '.dokan-form-group:nth-child(2) .dokan-form-control',
        bankName: '.dokan-form-group:nth-child(3) .dokan-form-control',
        bankAddress: '.dokan-form-group:nth-child(4) .dokan-form-control',
        bankRoutingNumber: '.dokan-form-group:nth-child(5) .dokan-form-control',
        bankIban: '.dokan-form-group:nth-child(6) .dokan-form-control',
        bankSwiftCode: '.dokan-form-group:nth-child(7) .dokan-form-control',

        //Stripe
        ConnectWithStripe: '.dokan-stripe-connect-link',

        //paypal marketplace
        paypalMarketplace: '#vendor_paypal_email_address',
        paypalMarketplaceSigUp: '.vendor_paypal_connect',

        //razorpay
        rzSignup: ".vendor_razorpay_connect",
        rzClosePopup: ".mfp-close",
        // existing account info
        rzIHaveAlreadyAnAccount: "#dokan_razorpay_existing_user_chekbox",
        rzAccountId: "#dokan_razorpay_account_id",
        rzConnectExistingAccount: "#dokan_razorpay_vendor_register_button",
        //new account info
        rzAccountName: "#razorpay_account_name",
        rzAccountEmail: "#razorpay_account_email",
        rzYourCompanyName: "#razorpay_business_name",
        rzYourCompanyType: "#razorpay_business_type",
        rzBankAccountName: "#razorpay_beneficiary_name",
        rzBankAccountNumber: "#razorpay_account_number",
        rzBankIfscCode: "#razorpay_ifsc_code",
        rzBankAccountType: "#razorpay_account_type",
        rzConnectAccount: "#dokan_razorpay_vendor_register_button",

        //mangopay
        //mangopay payment setup options
        accountForm: ".dokan-mp-account",
        bankAccount: ".dokan-mp-bank",
        verification: ".dokan-mp-verification",
        eWallets: ".dokan-mp-wallets",

        //connect & account info
        dateOfBirth: "#dokan-mangopay-user-birthday",
        nationality: "#dokan-mangopay-user-nationality",
        typeOfUser: "#dokan-mangopay-user-status",
        typeOfBusiness: "#dokan-mangopay-business-type",
        companyNumber: "#dokan-mangopay-company-number",
        address: "#dokan-mangopay-address1",
        addressDetails: "#dokan-mangopay-address2",
        country: "#dokan-mangopay-country",
        state: "#dokan-mangopay-state",
        city: "#dokan-mangopay-city",
        postcode: "#dokan-mangopay-postcode",
        connect: "#dokan-mangopay-account-connect",
        disconnect: "#dokan-mangopay-account-disconnect",
        update: "#dokan-mangopay-account-connect",
        // bank account
        addNew: "#dokan-mp-bank-account-add-new",
        accountType: "#dokan-mangopay-vendor-acccount-type",
        //iban
        ibanIban: "#dokan-mangopay-vendor-acccount-IBAN-iban",
        ibanBic: "#dokan-mangopay-vendor-acccount-IBAN-bic",
        //gb
        gbAccountNumber: "#dokan-mangopay-vendor-acccount-GB-account_number",
        gbSortCode: "#dokan-mangopay-vendor-acccount-GB-sort_code",
        //us
        usAccountNumber: "#dokan-mangopay-vendor-acccount-US-account_number",
        usAba: "#dokan-mangopay-vendor-acccount-US-aba",
        usDepositAccountType: "#dokan-mangopay-vendor-acccount-US-datype",
        //ca    
        caBankName: "#dokan-mangopay-vendor-acccount-CA-bank_name",
        caInstitutionNumber: "#dokan-mangopay-vendor-acccount-CA-inst_number",
        caBranchCode: "#dokan-mangopay-vendor-acccount-CA-branch_code",
        caAccountNumber: "#dokan-mangopay-vendor-acccount-CA-account_number",
        //others
        othersCountry: "#dokan-mangopay-vendor-acccount-OTHER-country",
        othersBic: "#dokan-mangopay-vendor-acccount-OTHER-bic",
        othersAccountNumber: "#dokan-mangopay-vendor-acccount-OTHER-account_number",
        //account holders details
        accountHoldersName: "#dokan-mangopay-vendor-account-name",
        accountHoldersAddress: "#dokan-mangopay-vendor-account-address1",
        accountHoldersAddressDetails: "#dokan-mangopay-vendor-account-address2",
        accountHoldersCountry: "#dokan-mangopay-vendor-account-country",
        accountHoldersState: "#dokan-mangopay-vendor-account-state",
        city: "#dokan-mangopay-vendor-account-city",
        postcode: "#dokan-mangopay-vendor-account-postcode",
        submit: "#dokan-mp-bank-account-create",
        cancel: "#dokan-mp-bank-account-cancel",
        // verification
        documentType: "#dokan-kyc-file-type",
        chooseFiles: "#dokan-kyc-file",
        //TODO: add UBO locators
        submit: "#dokan-mangopay-submit-kyc",

        //custom payment method
        customPayment: '.payment-field-dokan_custom',

        //skrill
        skrill: ".payment-field-skrill",

        //update settings
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
        cancelIdVerificationRequest: "#dokan_v_id_cancel_form",

        //address  verification
        startAddressVerification: "#dokan_v_address_click",
        street: "#dokan_address\\[street_1\\]",
        street2: "#dokan_address\\[street_2\\]",
        city: "#dokan_address\\[city\\]",
        postOrZipCode: "#dokan_address\\[zip\\]",
        country: "#dokan_address_country",
        state: "#dokan_address_state",
        submitAddress: "#dokan_v_address_submit",
        cancelSubmitAddress: ".dokan-form-group > #dokan_v_address_cancel",
        cancelAddressVerificationRequest: ".dokan-panel-body > #dokan_v_address_cancel",

        //Social profiles
        //TODO: add more locator

        //company verification
        startCompanyVerification: "#dokan_v_company_click",
        uploadCompanyInfo: ".dokan-files-drag",
        selectInfo: "#\\__wp-uploader-id-19",
        cancelSelectedInfo: ".fa-times",
        submitCompanyInfo: "#dokan_v_company_submit",
        cancelSubmitCompanyInfo: ".dokan-w5 > #dokan_v_company_cancel",
        cancelCompanyVerificationRequest: ".dokan-panel-body > #dokan_v_company_cancel",
    },

    //delivery time settings
    vDeliveryTimeSettings: {
        // delivery support
        homeDelivery: ".checkbox > label > input:nth-child(2)",
        storePickup: "#enable-store-location-pickup",

        deliveryBlockedBuffer: ".checkbox > div:nth-child(3)",

        // Delivery day
        sundayCheckbox: "div:nth-child(1) > label > .delivery-day-checkbox",
        mondayCheckbox: "div:nth-child(2) > label > .delivery-day-checkbox",
        tuesdayCheckbox: "div:nth-child(3) > label > .delivery-day-checkbox",
        wednesdayCheckbox: "div:nth-child(4) .delivery-day-checkbox",
        thursdayCheckbox: "div:nth-child(5) .delivery-day-checkbox",
        fridayCheckbox: "div:nth-child(6) .delivery-day-checkbox",
        saturdayCheckbox: "div:nth-child(7) .delivery-day-checkbox",

        sunday: ".tabs > li:nth-child(1)",
        monday: ".tabs > li:nth-child(2)",
        tuesday: ".tabs > li:nth-child(3)",
        wednesday: ".tabs > li:nth-child(4)",
        thursday: ".tabs > li:nth-child(5)",
        friday: ".tabs > li:nth-child(6)",
        saturday: ".tabs > li:nth-child(7)",

        //individual day settings
        openingTime: (day) => `#delivery_opening_time\\[${day}\\]`,
        closingTime: (day) => `#delivery_closing_time\\[${day}\\]`,
        timeSlot: (day) => `#delivery_time_slot-${day}`,
        orderPerSlot: (day) => `#order_per_slot-${day}`,
    },

    //shipping settings
    vShippingSettings: {
        clickHereToAddShippingPolicies: ".dokan-btn",
        backToZoneList: ".router-link-active",
        processingTime: "#dps_pt",
        shippingPolicy: "#\\_dps_shipping_policy",
        refundPolicy: ".dokan-form-group:nth-child(3) .dokan-form-control",
        saveSettings: ".dokan-btn-danger",

        //ZoneWise Shipping Settings
        addShippingMethod: "p:nth-child(1) > a:nth-child(2)",
        backToZoneList: "",
        edit: "",
        selectStates: "",
        limitZIPOrPostcodes: "",
        addShippingMethod: "",
        saveChanges: "",
        //ToDO: add more locators

        //previous shipping settings
        previousShippingSettings: "p:nth-child(2) > a",
        backToZoneWiseShippingSettings: ".dokan-page-help a",
        enableShipping: "",
        enableShippingFunctionality: "",
        defaultShippingPrice: "",
        perProductAdditionalPrice: "",
        perQtyAdditionalPrice: "",
        processingTime: "",
        readyToShipIn: "",
        shippingPolicy: "",
        refundPolicy: "",
        shipsFrom: "",
        shipTo: "",
        cost: "",
        addLocation: "",
        previousShippingSaveSettings: "",


    },

    //shipStation settings
    vShipStationSettings: {
        exportOrderStatuses: ".select2-search__field",
        shippedOrderStatus: "#select2--container",
        saveChanges: "#dokan-store-shipstation-form-submit",
    },

    //social profile settings
    vSocialProfileSettings: {
        facebook: "#settings\\[social\\]\\[fb\\]",
        twitter: "#settings\\[social\\]\\[twitter\\]",
        pinterest: "#settings\\[social\\]\\[pinterest\\]",
        linkedin: "#settings\\[social\\]\\[linkedin\\]",
        youtube: "#settings\\[social\\]\\[youtube\\]",
        instagram: "#settings\\[social\\]\\[instagram\\]",
        flicker: "#settings\\[social\\]\\[flickr\\]",
        updateSettings: ".dokan-btn",
        updateSettingsSuccessMessage: ".dokan-alert.dokan-alert-success > p",
    },

    //rma settings
    vRmaSettings: {
        label: "#dokan-rma-label",
        type: "#dokan-warranty-type",
        length: "#dokan-warranty-length",
        lengthValue: "content-half-part:nth-child(4) > .dokan-form-control",
        lengthDuration: "#dokan-warranty-length-duration",
        //TODO: add more locators add warranty as addon and  refund reasons invoked from admin settings

        rmaPolicy: "p", //TODO: improve
        saveChanges: "#dokan-store-rma-form-submit",
    },

    //store SEO settings
    vStoreSeoSettings: {
        seoTitle: "#dokan-seo-meta-title",
        metaDescription: "#dokan-seo-meta-desc",
        metaKeywords: "#dokan-seo-meta-keywords",
        facebookTitle: "#dokan-seo-og-title",
        facebookDescription: "#dokan-seo-og-desc",
        facebookImage: ".dokan-form-group:nth-child(6) .dokan-gravatar-drag",
        uploadFacebookImage: "#\\__wp-uploader-id-1",
        twitterTitle: "#dokan-seo-twitter-title",
        twitterDescription: "#dokan-seo-twitter-desc",
        twitterImage: ".dokan-form-group:nth-child(9) .dokan-gravatar-drag",
        uploadTwitterImage: "#\\__wp-uploader-id-4",
        saveChanges: "#dokan-store-seo-form-submit",
    },


    // methods

    async goToVendorDashboard() {
        await page.goto(createURL('dashboard'))

        let dashboardIsVisible = await base.isVisible(page, this.vDashboard.dashboard)
        expect(dashboardIsVisible).toBe(true)

    },

    // async vendorSetupWizard(storeProductsPerPage, street, street2, city, zipCode, country, state, paypal, bankAccountName, bankAccountNumber, bankName, bankAddress, bankRoutingNumber, bankIban, bankSwiftCode, customPayment) {
    //     await page.click(this.vSetup.letsGo);
    //     // await page.waitForTimeout(3000);

    //     await page.type(this.vSetup.storeProductsPerPage, storeProductsPerPage);
    //     await page.type(this.vSetup.street, street);
    //     await page.type(this.vSetup.street2, street2);
    //     await page.type(this.vSetup.city, city);
    //     await page.type(this.vSetup.zipCode, zipCode);
    //     await page.type(this.vSetup.state, state);
    //     await page.click(this.vSetup.country);
    //     await page.type(this.vSetup.countryInput, country);
    //     await page.click(this.vSetup.email);
    //     await page.click(this.vSetup.continueStoreSetup);
    //     // await page.waitForTimeout(3000);


    //     await page.type(this.vSetup.paypal, paypal);
    //     await page.type(this.vSetup.bankAccountName, bankAccountName);
    //     await page.type(this.vSetup.bankAccountNumber, bankAccountNumber);
    //     await page.type(this.vSetup.bankName, bankName);
    //     await page.type(this.vSetup.bankAddress, bankAddress);
    //     await page.type(this.vSetup.bankRoutingNumber, bankRoutingNumber);
    //     await page.type(this.vSetup.bankIban, bankIban);
    //     await page.type(this.vSetup.bankSwiftCode, bankSwiftCode);

    //     await page.type(this.vSetup.customPayment, customPayment);

    //     // TODO: stripe connect
    //     // TODO: paypal marketplace
    //     await page.click(this.vSetup.continuePaymentSetup);
    //     // await page.waitForTimeout(3000);

    //     await page.click(this.vSetup.goToStoreDashboard);
    //     // await page.waitForTimeout(5000);

    // },



    //products
    //vendor create product
    async addProduct(productName, productPrice, category) {
        await base.click(this.vDashboard.products);
        await page.click(this.product.addNewProduct);
        await page.type(this.product.productName, productName);
        await page.type(this.product.productPrice, productPrice);
        await page.click(this.product.productCategory);
        // await base.getMultipleElementTexts(this.product.productCategoryValues)
        await base.setDropdownOptionSpan(this.product.productCategoryValues, category)
        await base.click(this.product.createProduct)

        let createdProduct = await base.getElementValue(this.product.title)
        expect(createdProduct.toLowerCase()).toBe(productName.toLowerCase());
    },
    //coupon
    //vendor create coupon
    async addCoupon(couponTitle, couponAmount) {
        await base.click(this.vDashboard.coupons);
        await base.click(this.vCoupon.addNewCoupon);
        await page.type(this.vCoupon.couponTitle, couponTitle);
        await page.type(this.vCoupon.amount, couponAmount);
        await page.click(this.vCoupon.selectAll);
        await page.click(this.vCoupon.applyForNewProducts);
        await page.click(this.vCoupon.showOnStore);
        await base.click(this.vCoupon.createCoupon);

        let createdCoupon = await base.getElementText(this.vCoupon.createdCoupon)
        expect(createdCoupon.toLowerCase()).toBe(couponTitle.toLowerCase());
    },

    //withdraw
    //vendor request withdraw 
    async requestWithdraw(withdrawAmount, withdrawMethod) {
        await base.click(this.vDashboard.withdraw);
        let minimumWithdrawAmount = await base.getElementText(this.vWithdraw.minimumWithdrawAmount)
        minimumWithdrawAmount = minimumWithdrawAmount.replace('$', '')
        // console.log(minimumWithdrawAmount)
        await page.click(this.vWithdraw.requestWithdraw);
        let balance = await base.getValue(this.vWithdraw.withdrawAmount)
        if (Number(balance) > Number(minimumWithdrawAmount)) {
            await page.type(this.vWithdraw.withdrawAmount, minimumWithdrawAmount);
            // await base.setDropdownOption(this.withdraw.withdrawMethod, withdrawMethod);
            await base.click(this.vWithdraw.submitRequest);
        }
        //TODO: handle else condition
        // await base.reload()
        let canRequestIsVisible = await base.isVisible(page, this.vWithdraw.cancelRequest)
        expect(canRequestIsVisible).toBe(true)

    },

    async cancelRequestWithdraw() {
        await base.click(this.vDashboard.withdraw);
        await page.click(this.vWithdraw.cancelRequest);

        let canRequestIsVisible = await base.isVisible(page, this.vWithdraw.cancelRequest)
        expect(canRequestIsVisible).toBe(false)

    },

    async addAutoWithdrawDisbursementSchedule(preferredPaymentMethod, preferredSchedule, minimumWithdrawAmount, reserveBalance) {
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

    // async addDefaultWithdrawPaymentMethods(preferredSchedule) {
    //     // TODO : locator issue
    //     await base.click(this.vDashboard.withdraw);
    //     // let a = page.$(this.vWithdraw.bankTransferSetup)
    //     // a.click()
    //     // await page.waitForXPath(this.vWithdraw.customMethodSetup('qwerty'));
    //     // await page.hover(this.vWithdraw.customMethodSetup('qwerty'));
    //     // await page.click(this.vWithdraw.customMethodSetup('qwerty'));
    //     // await page.waitForTimeout(5000);
    // },


    async setStoreSettings(storeName, storeProductsPerPage, phoneNo, street, street2, city, postOrZipCode, country, state, companyName,
        companyIdOrEuidNumber, vatOrTaxNumber, nameOfBank, bankIban, map, minimumOrderAmount, percentage, supportButtonText,
        minimumProductQuantityToPlaceAnOrder, maximumProductQuantityToPlaceAnOrder, minimumAmountToPlaceAnOrder, maximumAmountToPlaceAnOrder
    ) {

        await base.click(this.vDashboard.settings)
        // await base.click(this.vSettings.store)


        // await page.click(this.vStoreSettings.banner)
        // await page.click(this.vStoreSettings.banner)
        // await page.waitForTimeout(6000)
        // await base.clickXpath(this.vStoreSettings.selectFiles)
        // await base.uploadImage(this.vStoreSettings.selectFiles, '/Users/rk/Automation/Dokan_e2e_test/avatar.png')
        // await page.waitForTimeout(6000)

        // const [fileChooser] = await Promise.all([ page.waitForFileChooser(),base.clickXpath1(this.vStoreSettings.selectFiles)])
        // await fileChooser.accept(['/Users/rk/Automation/Dokan_e2e_test/avatar.png'])

        // await base.clickXpath(this.vStoreSettings.selectAndCrop)
        // await base.clickXpath(this.vStoreSettings.cropImage)

        // await page.waitForTimeout(6000)

        await base.clearAndType(this.vStoreSettings.storeName, storeName)
        await base.clearAndType(this.vStoreSettings.storeProductsPerPage, storeProductsPerPage)
        await base.clearAndType(this.vStoreSettings.phoneNo, phoneNo)
        //address
        // await page.click(this.vStoreSettings.multipleLocation)
        // await page.type(this.vStoreSettings.locationName, locationName)
        // await page.click(this.vStoreSettings.addLocation)
        // await page.click(this.vStoreSettings.editLocation)
        await base.clearAndType(this.vStoreSettings.street, street)
        await base.clearAndType(this.vStoreSettings.street2, street2)
        await base.clearAndType(this.vStoreSettings.city, city)
        await base.clearAndType(this.vStoreSettings.postOrZipCode, postOrZipCode)
        await page.select(this.vStoreSettings.country, country)
        await page.select(this.vStoreSettings.state, state)
        // await page.type(this.vStoreSettings.saveLocation, saveLocation)
        // await page.click(this.vStoreSettings.saveLocation)
        // await page.click(this.vStoreSettings.cancelSaveLocation)
        // await page.click(this.vStoreSettings.deleteSaveLocation)

        //company info
        await base.clearAndType(this.vStoreSettings.companyName, companyName)
        await base.clearAndType(this.vStoreSettings.companyIdOrEuidNumber, companyIdOrEuidNumber)
        await base.clearAndType(this.vStoreSettings.vatOrTaxNumber, vatOrTaxNumber)
        await base.clearAndType(this.vStoreSettings.nameOfBank, nameOfBank)
        await base.clearAndType(this.vStoreSettings.bankIban, bankIban)
        //email
        // await page.click(this.vStoreSettings.email)
        // await page.click(this.vStoreSettings.moreProducts)
        //map
        // await page.click(this.vStoreSettings.map)
        // await base.clearAndType(this.vStoreSettings.map, map)
        // await page.waitForTimeout(2000)
        // await page.click(this.vStoreSettings.map1)
        // await page.click(this.vStoreSettings.mapFirstResult)
        //store opening closing time
        //vacation

        //discount
        await page.click(this.vStoreSettings.enableStoreWideDiscount)
        await base.clearAndType(this.vStoreSettings.minimumOrderAmount, minimumOrderAmount)
        await base.clearAndType(this.vStoreSettings.percentage, percentage)
        //biography

        //store support
        await page.click(this.vStoreSettings.showSupportButtonInStore)
        await page.click(this.vStoreSettings.showSupportButtonInSingleProduct)
        await page.click(this.vStoreSettings.showSupportButtonInStore)
        await page.click(this.vStoreSettings.showSupportButtonInSingleProduct)
        await base.clearAndType(this.vStoreSettings.supportButtonText, supportButtonText)

        // //min-max
        // await page.click(this.vStoreSettings.enableMinMaxQuantities)
        // await base.clearAndType(this.vStoreSettings.minimumProductQuantityToPlaceAnOrder, minimumProductQuantityToPlaceAnOrder)
        // await base.clearAndType(this.vStoreSettings.maximumProductQuantityToPlaceAnOrder, maximumProductQuantityToPlaceAnOrder)
        // await page.click(this.vStoreSettings.enableMinMaxAmount)
        // await base.clearAndType(this.vStoreSettings.minimumAmountToPlaceAnOrder, minimumAmountToPlaceAnOrder)
        // await base.clearAndType(this.vStoreSettings.maximumAmountToPlaceAnOrder, maximumAmountToPlaceAnOrder)
        // await page.click(this.vStoreSettings.selectAll)

        //update settings
        await page.click(this.vStoreSettings.updateSettings)
        await page.waitForTimeout(2000)

        let successMessage = await base.getSelectorText(this.vSocialProfileSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch('Your information has been saved successfully')

    },

    async setAddonSettings() {

    },

    async setPaymentSettings() {

        await base.click(this.vDashboard.settings)
        await base.click(this.vSettings.payment)

        //paypal
        await base.clearAndType(this.vPaymentSettings.paypal, paypal)

        //bank transfer
        await base.clearAndType(this.vPaymentSettings.bankAccountName, bankAccountName)
        await base.clearAndType(this.vPaymentSettings.bankAccountNumber, bankAccountNumber)
        await base.clearAndType(this.vPaymentSettings.bankName, bankName)
        await base.clearAndType(this.vPaymentSettings.bankAddress, bankAddress)
        await base.clearAndType(this.vPaymentSettings.bankRoutingNumber, bankRoutingNumber)
        await base.clearAndType(this.vPaymentSettings.bankIban, bankIban)
        await base.clearAndType(this.vPaymentSettings.bankSwiftCode, bankSwiftCode)


        // //Stripe
        // await base.click(this.vPaymentSettings.ConnectWithStripe)

        // //paypal marketplace
        // await base.clearAndType(this.vPaymentSettings.paypalMarketplace, paypalMarketplace)
        // await base.click(this.vPaymentSettings.paypalMarketplaceSigUp)

        //razorpay
        //     await base.click(this.vPaymentSettings.rzSignup)
        //  // existing account info
        //     await page.click(this.vPaymentSettings.rzIHaveAlreadyAnAccount)
        //     await base.clearAndType(this.vPaymentSettings.rzAccountId, rzAccountId)
        //     await page.click(this.vPaymentSettings.rzConnectExistingAccount)
        //  //new account info
        //     await base.clearAndType(this.vPaymentSettings.rzAccountName, rzAccountName)
        //     await base.clearAndType(this.vPaymentSettings.rzAccountEmail, rzAccountEmail)
        //     await base.clearAndType(this.vPaymentSettings.rzYourCompanyName, rzYourCompanyName)
        //     await base.clearAndType(this.vPaymentSettings.rzYourCompanyType, rzYourCompanyType)
        //     await base.clearAndType(this.vPaymentSettings.rzBankAccountName, rzBankAccountName)
        //     await base.clearAndType(this.vPaymentSettings.rzBankAccountNumber, rzBankAccountNumber)
        //     await base.clearAndType(this.vPaymentSettings.rzBankIfscCode, rzBankIfscCode)
        //     await base.clearAndType(this.vPaymentSettings.rzBankAccountType, rzBankAccountType)
        //     await base.click(this.vPaymentSettings.rzConnectAccount)

        //mangopay

        //custom payment method
        await base.clearAndType(this.vPaymentSettings.customPayment, customPayment)

        //skrill
        await base.clearAndType(this.skrill.email, skrillEmail)

        //update settings
        await page.click(this.vPaymentSettings.updateSettings)

    },

    async setVerificationSettings() {

    },



    async setDeliveryTimeSettings() {

    },

    async setShippingSettings() {

    },

    async setSocialProfile(url) {
        await base.click(this.vDashboard.settings)
        await base.click(this.vSettings.socialProfile)

        await page.type(this.vSocialProfileSettings.facebook, url);
        await page.type(this.vSocialProfileSettings.twitter, url);
        await page.type(this.vSocialProfileSettings.pinterest, url);
        await page.type(this.vSocialProfileSettings.linkedin, url);
        await page.type(this.vSocialProfileSettings.youtube, url);
        await page.type(this.vSocialProfileSettings.instagram, url);
        await page.type(this.vSocialProfileSettings.flicker, url);
        await page.click(this.vSocialProfileSettings.updateSettings);
        await page.waitForTimeout(6000)

        let successMessage = await base.getSelectorText(this.vSocialProfileSettings.updateSettingsSuccessMessage)
        expect(successMessage).toBe('Your information has been saved successfully')
    },

    async setRmaSettings(label, type, length, lengthValue, lengthDuration) {
        await base.click(this.vDashboard.settings)
        await base.click(this.vSettings.rma)

        await base.clearAndType(this.vRmaSettings.label, label);
        await page.select(this.vRmaSettings.type, type);
        await page.select(this.vRmaSettings.length, length);
        await base.clearAndType(this.vRmaSettings.lengthValue, lengthValue);
        await page.select(this.vRmaSettings.lengthDuration, lengthDuration);
        await base.click(this.vSettings.saveChanges)

        let successMessage = await base.getSelectorText(this.vRmaSettings.updateSettingsSuccessMessage)
        expect(successMessage).toBe('Settings saved successfully')

    },

    async addAuctionProduct(productName, productShortDescription, category, itemCondition, actionType, startPrice, bidIncrement, reservedPrice, buyItNowPrice, auctionStartDate, auctionEndDate) {

        await base.click(this.vDashboard.auction)

        await base.click(this.vAction.addNewActionProduct)
        await page.type(this.vAction.productName, productName)
        await page.type(this.vAction.productShortDescription, productShortDescription)
        await page.click(this.vAction.productCategory);
        await base.setDropdownOptionSpan(this.vAction.productCategoryValues, category)
        await page.select(this.vAction.itemCondition, itemCondition)
        await page.select(this.vAction.actionType, actionType)
        await page.type(this.vAction.startPrice, startPrice)
        await page.type(this.vAction.bidIncrement, bidIncrement)
        await page.type(this.vAction.reservedPrice, reservedPrice)
        await page.type(this.vAction.buyItNowPrice, buyItNowPrice)
        await page.type(this.vAction.auctionStartDate, auctionStartDate)
        await page.type(this.vAction.auctionEndDate, auctionEndDate)
        await page.click(this.vAction.addAuctionProduct)

    },

    async addBookingProduct(productName, category, bookingDurationType, bookingDuration, bookingDurationUnit, calenderDisplayMode, enableCalendarRangePicker, maxBookingsPerBlock,
        minimumBookingWindowIntoTheFutureDate, minimumBookingWindowIntoTheFutureDateUnit, maximumBookingWindowIntoTheFutureDate, maximumBookingWindowIntoTheFutureDateUnit,
        baseCost, blockCost) {

        await page.type(this.vBooking.productName, productName)
        await page.click(this.vBooking.category);
        await base.setDropdownOptionSpan(this.vBooking.categoryValues, category)

        // general Booking options
        await page.select(this.vBooking.bookingDurationType, bookingDurationType)
        await page.type(this.vBooking.bookingDuration, bookingDuration)
        await page.select(this.vBooking.bookingDurationUnit, bookingDurationUnit)

        await page.select(this.vBooking.calenderDisplayMode, calenderDisplayMode)
        await page.select(this.vBooking.enableCalendarRangePicker, enableCalendarRangePicker)

        //availability
        await page.type(this.vBooking.maxBookingsPerBlock, maxBookingsPerBlock)
        await page.type(this.vBooking.minimumBookingWindowIntoTheFutureDate, minimumBookingWindowIntoTheFutureDate)
        await page.select(this.vBooking.minimumBookingWindowIntoTheFutureDateUnit, minimumBookingWindowIntoTheFutureDateUnit)
        await page.type(this.vBooking.maximumBookingWindowIntoTheFutureDate, maximumBookingWindowIntoTheFutureDate)
        await page.select(this.vBooking.maximumBookingWindowIntoTheFutureDateUnit, maximumBookingWindowIntoTheFutureDateUnit)

        //costs
        await page.type(this.vBooking.baseCost, baseCost)
        await page.type(this.vBooking.blockCost, blockCost)

        await base.click(this.vBooking.saveProduct)

    },

    async searchSimilarProduct(productName) {
        await page.click(this.vSearchSimilarProduct.search)
        await page.type(this.SearchSimilarProduct.search, productName)
        await base.click(this.vSearchSimilarProduct.search)
        await page.click(this.vSearchSimilarProduct.search)
    },

    async setVendorDetails(firstName, lastName, email, currentPassword, newPassword) {
        await base.clearAndType(this.vendorDetails.firstName, firstName)
        await base.clearAndType(this.vendorDetails.lastName, lastName)
        await base.clearAndType(this.vendorDetails.email, email)
        await page.type(this.vendorDetails.currentPassword, currentPassword)
        await page.type(this.vendorDetails.NewPassword, newPassword)
        await page.type(this.vendorDetails.confirmNewPassword, newPassword)
        await page.click(this.vendorDetails.saveChanges)

    },

};
