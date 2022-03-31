
module.exports = {



    //--------------------------------------------login---------------------------------------------//



    // selectors
    frontend: {
        //fronted menus
        home: "//a[contains(text(),'Home')]",
        cart: "//a[contains(text(),'Cart')]",
        checkout: "//a[contains(text(),'Checkout')]",
        dashboard: "//a[contains(text(),'Dashboard')]",
        myAccount: "//a[contains(text(),'My account')]",
        myOrders: "//a[contains(text(),'My Orders')]",
        samplePage: "//a[contains(text(),'Sample Page')]",
        shop: "//a[contains(text(),'Shop')]",
        storeList: "//a[contains(text(),'Store List')]",

        //go to vendor dashboard
        goToVendorDashboard: ".dokan-btn.dokan-btn-theme.vendor-dashboard",

        //user login
        username: "#username",
        userPassword: "#password",
        rememberMe: "#rememberme",
        logIn: "//button[@value='Log in']",
        lostPassword: ".woocommerce-LostPassword > a",

        //user logout
        customerLogout: ".woocommerce-MyAccount-navigation-link--customer-logout > a",
        vendorLogout: ".fa-power-off",

        //user forget password
        resetPasswordEmail: "#user_login",
        resetPasswordBtn: ".woocommerce-Button.button"
    },

    backend: {
        // admin login
        email: "#user_login",
        password: "#user_pass",
        rememberMe: "#rememberme",
        login: "#wp-submit",
        dashboardMenu: ".wp-first-item > .wp-menu-name",
        dashboardText: ".wrap h1",
        // admin logout
        userMenu: "#wp-admin-bar-my-account a",
        logout: "#wp-admin-bar-logout a",
        //logout message
        logoutSuccessMessage: "#login p",
    },



    //--------------------------------------------admin---------------------------------------------//



    admin: {
  //admin dashboard
  aDashboard: {
    //dashboard menus
    dashboard: ".wp-first-item > .wp-menu-name",
    posts: ".menu-icon-post > .wp-menu-name",
    media: ".menu-icon-media > .wp-menu-name",
    pages: ".menu-icon-page > .wp-menu-name",
    comments: ".menu-icon-comments > .wp-menu-name",
    emailLog: ".toplevel_page_email-log > .wp-menu-name",
    dokan: ".toplevel_page_dokan > .wp-menu-name",
    wooCommerce: ".toplevel_page_woocommerce > .wp-menu-name",
    products: ".menu-icon-product > .wp-menu-name",
    bookings: ".menu-icon-wc_booking > .wp-menu-name",
    analytics: ".toplevel_page_wc-admin\\&path\\=\\/analytics\\/overview > .wp-menu-name",
    marketing: ".toplevel_page_woocommerce-marketing > .wp-menu-name",
    elementor: ".toplevel_page_elementor > .wp-menu-name",
    templates: ".menu-icon-elementor_library > .wp-menu-name",
    appearance: ".menu-icon-appearance > .wp-menu-name",
    plugins: ".menu-icon-plugins > .wp-menu-name",
    users: ".menu-icon-users > .wp-menu-name",
    tools: ".menu-icon-tools > .wp-menu-name",
    settings: ".menu-icon-settings > .wp-menu-name",
    locoTranslate: ".toplevel_page_loco > .wp-menu-name",
    //collapse menu
    collapseMenu: '#collapse-button',
  },

  //dashboard
  dashboard: {},
  //posts
  posts: {},
  //media
  media: {},
  //pages
  pages: {},
  //comments
  comments: {},
  //emailLog
  emailLog: {},
  //dokan
  dokan: {
    //dokan menus
    dashboardMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Dashboard']",
    withdrawMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Withdraw']",
    vendorsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Vendors']",
    abuseReportsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Abuse Reports']",
    storeReviewsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Store Reviews']",
    storeSupportMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Store Support']",
    announcementsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Announcements']",
    refundsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Refunds']",
    reportsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Reports']",
    modulesMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Modules']",
    toolsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Tools']",
    verificationsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Verifications']",
    advertisingMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Advertising']",
    wholesaleCustomerMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Wholesale Customer']",
    helpMenu: "//li[contains(@class,'toplevel_page_dokan')]//span[text()='Help']/..",
    settingsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Settings']",
    licenseMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='License']",

    //dashboard
    dashboard: {},
    //withdraw
    withdraw: {},
    //vendors
    vendors: {
      // add new vendors
      //menus
      accountInfo: '.first',
      address: '.tab-title:nth-child(2) a',
      paymentOptions: '.last a',
      addNewVendorCloseModal: '.modal-close',
      next: '.button.button-primary.button-hero',
      //account info
      addNewVendor: '.page-title-action',
      // vendorPicture: '//div[@class="supports-drag-drop" and @style="position: relative"]//div[@class="moxie-shim moxie-shim-html5"]//input',
      // selectFiles: '//div[@class="supports-drag-drop" and @style="position: relative"]//button[@class="browser button button-hero"]',
      // banner: '', //TODO: add locator 
      firstName: '#first-name',
      lastName: '#last-name',
      storeName: '#store-name',
      storeUrl: '#user-nicename',
      phoneNumber: '#store-phone',
      email: '#store-email',
      username: '#user-login',
      generatePassword: '.button.button-secondary',
      password: '#store-password',
      companyName: "#company-name",
      companyIdEuidNumber: "#company-id-number",
      vatOrTaxNumber: "#vat-tax-number",
      nameOfBank: "#dokan-bank-name",
      bankIban: "#dokan-bank-iban",
      //address
      street1: '#street-1',
      street2: '#street-2',
      city: '#city',
      zip: '#zip',
      country: '.multiselect__single',
      countryInput: '#country',
      state: '#state',
      // payment options
      accountName: '#account-name',
      accountNumber: '#account-number',
      bankName: '#bank-name',
      bankAddress: '#bank-address',
      routingNumber: '#routing-number',
      iban: '#iban',
      swift: '#swift',
      payPalEmail: '#paypal-email',
      enableSelling: '.checkbox-group:nth-child(2) .slider',
      publishProductDirectly: '.checkbox-group:nth-child(3) .slider',
      makeVendorFeature: '.checkbox-group:nth-child(4) .slider',
      createVendor: '.button.button-primary.button-hero',
      //sweet alert
      createAnother: '.swal2-confirm',  //sweet alert confirm 
      editVendorInfo: '.swal2-cancel',  //sweet alert cancel
      closeSweetAlert: '.swal2-close', //sweet alert close

      //edit vendor form
      editVendor: {
        editVendorIcon: ".dashicons-edit",
        changeStorePhoto: "", //TODO: add locator
        changeStoreBanner: "", //TODO: add locator
        //account info
        firstName: '#first-name',
        lastName: '#last-name',
        storeName: '#store-name',
        phoneNumber: '#store-phone',
        email: '#store-email',
        companyName: "#company-name",
        companyIdEuidNumber: "#company-id-number",
        vatOrTaxNumber: "#vat-tax-number",
        nameOfBank: "#dokan-bank-name",
        bankIban: "#dokan-bank-iban",
        // address
        street1: '#street-1',
        street2: '#street-2',
        city: '#city',
        zip: '#zip',
        country: '.multiselect__single',
        countryInput: '#country',
        state: '#state',
        // social options
        facebook: "#facebook",
        flickr: "#flickr",
        twitter: "#twitter",
        youtube: "#youtube",
        linkedin: "#linkedin",
        pinterest: "#pinterest",
        instagram: "#instagram",
        // payment options
        accountName: '#account-name',
        accountNumber: '#account-number',
        bankName: '#bank-name',
        bankAddress: '#bank-address',
        routingNumber: '#routing-number',
        iban: '#iban',
        swift: '#swift',
        payPalEmail: '#paypal-email',
        AdminCommissionType: ".multiselect__single:nth-child(3)",
        AdminCommissionFlat: ".wc_input_price",
        AdminCommissionPercentage: ".wc_input_decimal",
        EnableSelling: ".checkbox-group:nth-child(4) .slider",
        PublishProductDirectly: ".checkbox-group:nth-child(5) .slider",
        MakeVendorFeatured: ".checkbox-group:nth-child(6) .slider",
        // vendor subscription
        AssignSubscriptionPack: ".multiselect--active > .multiselect__tags",
        //edit options
        cancelEdit: ".footer > .button:nth-child(1)",
        saveChanges: ".footer > .button-primary",
        cancelEditOnTop: ".action-links:nth-child(2) > .button:nth-child(1)",
        saveChangesOnTop: ".action-links:nth-child(2) > .button-primary",
        confirmSaveChanges: ".swal2-confirm",
      },

    },
    //abuseReports
    abuseReports: {},
    //storeReviews
    storeReviews: {},
    //storeSupport
    storeSupport: {},
    //announcements
    announcements: {},
    //refunds
    refunds: {},

    //reports
    reports: {
      //reports
      reports: '.nav-tab:nth-child(1)',
      //by day
      byDay: ".subsubsub > li:nth-child(1) > a",
      byDayFrom: "//span[1]//input[1]",
      byDayTo: "//span[2]//input[1]",
      byDayShow: ".button",
      //by year
      byYear: ".subsubsub > li:nth-child(2) > a",
      byYearNumber: ".dokan-input",
      byYearShow: ".button",
      //by vendor
      byVendor: ".subsubsub > li:nth-child(3) > a",
      storeName: ".multiselect__tags",
      byVendorFrom: "//span[2]//input[1]",
      byVendorTo: "//span[3]//input[1]",
      byVendorShow: ".button",

      //all logs
      allLogs: ".router-link-active:nth-child(2)",
      //search
      searchByOrder: "#post-search-input",
      clearSearch: ".button:nth-child(6)",
      exportLogs: "#export-all-logs",
      //filter
      filterByStore: "#select2-filter-vendors-container",
      filterByStoreValues: ".select2-results ul li",
      filterByStatus: "#select2-filter-status-container",
      filterByStatusValues: ".select2-results ul li",
      filterByDate: ".form-control",

      //order details
      orderId: ".column.order_id > a",
      store: ".column.vendor_id > a",
      orderTotal: ".column.order_total > div",
      vendorEarning: ".column.vendor_earning > div",
      commission: ".column.commission > div",
      gatewayFee: ".column.dokan_gateway_fee > div",
      shipping: ".column.shipping_total > div",
      taxStatus: ".column.tax_total > div",
      orderStatus: "td.column.status ",
      date: "td.column.date ",
    },

    //modules
    modules: {},
    //tools
    tools: {},
    //verifications
    verifications: {},
    //advertising
    advertising: {},
    //wholesaleCustomer
    wholesaleCustomer: {
      statusSlider: (username) => `//td[contains(text(), '${username}')]/..//label[@class='switch tips']`,
      enableStatusUpdateSuccessMessage: '.notification-content'
    },
    //help
    help: {},

    //dokan settings
    settings: {
      //setting menus
      // general: ".nav-tab:nth-child(2)",
      general: '//a[@class="nav-tab" and contains(text(),"General")]',
      // sellingOptions: ".nav-tab:nth-child(3)",
      sellingOptions: '//a[@class="nav-tab" and contains(text(),"Selling Options")]',
      // withdrawOptions: ".nav-tab:nth-child(4)",
      withdrawOptions: '//a[@class="nav-tab" and contains(text(),"Withdraw Options")]',
      // pageSettings: ".nav-tab:nth-child(5)",
      pageSettings: '//a[@class="nav-tab" and contains(text(),"Page Settings")]',
      // appearance: ".nav-tab:nth-child(6)",
      appearance: '//a[@class="nav-tab" and contains(text(),"Appearance")]',
      // privacyPolicy: ".nav-tab:nth-child(7)",
      privacyPolicy: '//a[@class="nav-tab" and contains(text(),"Privacy Policy")]',
      // liveSearch: ".nav-tab:nth-child(8)",
      liveSearch: '//a[@class="nav-tab" and contains(text(),"Live Search")]',
      // storeSupport: ".nav-tab:nth-child(9)",
      storeSupport: '//a[@class="nav-tab" and contains(text(),"Store Support")]',
      // sellerVerification: ".nav-tab:nth-child(10)",
      sellerVerification: '//a[@class="nav-tab" and contains(text(),"Seller Verification")]',
      // verificationSmsGateways: ".nav-tab:nth-child(11)",
      verificationSmsGateways: '//a[@class="nav-tab" and contains(text(),"Verification SMS Gateways")]',
      // emailVerification: ".nav-tab:nth-child(12)",
      emailVerification: '//a[@class="nav-tab" and contains(text(),"Email Verification")]',
      // socialApi: ".nav-tab:nth-child(13)",
      socialApi: '//a[@class="nav-tab" and contains(text(),"Social API")]',
      // shippingStatus: ".nav-tab:nth-child(14)",
      shippingStatus: '//a[@class="nav-tab" and contains(text(),"Shipping Status")]',
      // colors: ".nav-tab:nth-child(15)",
      colors: '//a[@class="nav-tab" and contains(text(),"Colors")]',
      // liveChat: ".nav-tab:nth-child(16)",
      liveChat: '//a[@class="nav-tab" and contains(text(),"Live Chat")]',
      // rma: ".nav-tab:nth-child(17)",
      rma: '//a[@class="nav-tab" and contains(text(),"RMA")]',
      // wholesale: ".nav-tab:nth-child(18)",
      wholesale: '//a[@class="nav-tab" and contains(text(),"Wholesale")]',
      // euComplianceFields: ".nav-tab:nth-child(19)",
      euComplianceFields: '//a[@class="nav-tab" and contains(text(),"EU Compliance Fields")]',
      // deliveryTime: ".nav-tab:nth-child(20)",
      deliveryTime: '//a[@class="nav-tab" and contains(text(),"Delivery Time")]',
      // productAdvertising: ".nav-tab:nth-child(21)",
      productAdvertising: '//a[@class="nav-tab" and contains(text(),"Product Advertising")]',
      // geolocation: ".nav-tab:nth-child(22)",
      geolocation: '//a[@class="nav-tab" and contains(text(),"Geolocation")]',
      // productReportAbuse: ".nav-tab:nth-child(23)",
      productReportAbuse: '//a[@class="nav-tab" and contains(text(),"Product Report Abuse")]',
      // singleProductMultiVendor: ".nav-tab:nth-child(24)",
      singleProductMultiVendor: '//a[@class="nav-tab" and contains(text(),"Single Product MultiVendor")]',
      // vendorAnalytics: ".nav-tab:nth-child(25)",
      vendorAnalytics: '//a[@class="nav-tab" and contains(text(),"Vendor Analytics")]',
      // vendorSubscription: ".nav-tab:nth-child(26)",
      vendorSubscription: '//a[@class="nav-tab" and contains(text(),"Vendor Subscription")]',

      //general
      //site options
      adminAreaAccess: "#dokan_general\\[admin_access\\]",
      vendorStoreUrl: "#dokan_general\\[custom_store_url\\]",
      vendorSetupWizardLogo: "#dokan_general\\[setup_wizard_logo_url\\]",
      disableWelcomeWizard: "#dokan_general\\[disable_welcome_wizard\\]",
      sellingProductTypes: "#dokan_general\\[global_digital_mode\\]",
      logShipStationApiRequest: "#dokan_general\\[enable_shipstation_logging\\]",
      dataClear: "#dokan_general\\[data_clear_on_uninstall\\]",
      confirmDataClear: ".swal2-confirm",
      cancelDataClear: ".swal2-cancel",

      //vendor store options
      storeTermsAndConditions: "#dokan_general\\[seller_enable_terms_and_conditions\\]",
      storeProductPerPage: "#dokan_general\\[store_products_per_page\\]",
      enableTermsAndCondition: "#dokan_general\\[enable_tc_on_reg\\]",
      enableSingSellerMode: "#dokan_general\\[enable_single_seller_mode\\]",
      storCategory: "#dokan_general\\[store_category_type\\]",
      generalSaveChanges: "#submit",

      //selling options
      //commission
      commissionType: "#dokan_selling\\[commission_type\\]",
      adminCommission: "#dokan_selling\\[admin_percentage\\]",
      shippingFeeRecipient: "#dokan_selling\\[shipping_fee_recipient\\]",
      taxFeeRecipient: "#dokan_selling\\[tax_fee_recipient\\]",
      processRefundViaAPI: "#dokan_selling\\[automatic_process_api_refund\\]",

      //vendor capability
      newVendorProductUpload: "#dokan_selling\\[new_seller_enable_selling\\]",
      disableProductPopup: "#dokan_selling\\[disable_product_popup\\]",
      orderStatusChange: "#dokan_selling\\[order_status_change\\]",
      newProductStatus: "#dokan_selling\\[product_status\\]",
      duplicateProduct: "#dokan_selling\\[vendor_duplicate_product\\]",
      editedProductStatus: "#dokan_selling\\[edited_product_status\\]",
      productMailNotification: "#dokan_selling\\[product_add_mail\\]",
      productCategorySelection: "#dokan_selling\\[product_category_style\\]",
      vendorsCanCreateTags: "#dokan_selling\\[product_vendors_can_create_tags\\]",
      discountEditingAllowVendorToAddDiscountOnProduct: "#dokan_selling\\[discount_edit\\]\\[product-discount\\]",
      discountEditingAllowVendorToAddDiscountOnOrder: "#dokan_selling\\[discount_edit\\]\\[order-discount\\]",
      hideCustomerInfo: "#dokan_selling\\[hide_customer_info\\]",
      vendorProductReview: "#dokan_selling\\[seller_review_manage\\]",
      guestProductEnquiry: "#dokan_selling\\[enable_guest_user_enquiry\\]",
      newVendorEnableAuction: "#dokan_selling\\[new_seller_enable_auction\\]",
      enableMinMaxQuantities: "#dokan_selling\\[enable_min_max_quantity\\]",
      enableMinMaxAmount: "#dokan_selling\\[enable_min_max_amount\\]",
      disableShipping: "#dokan_selling\\[disable_shipping_tab\\]",
      sellingOptionsSaveChanges: "#submit",

      //withdraw options
      withdrawMethodsPaypal: "#dokan_withdraw\\[withdraw_methods\\]\\[paypal\\]",
      withdrawMethodsBankTransfer: "#dokan_withdraw\\[withdraw_methods\\]\\[bank\\]",
      withdrawMethodsWirecard: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan-moip-connect\\]",
      withdrawMethodsPaypalMarketplace: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan-paypal-marketplace\\]",
      withdrawMethodsDokanCustom: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan_custom\\]",
      withdrawMethodsRazorpay: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan_razorpay\\]",
      withdrawMethodsMangoPay: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan_mangopay\\]",
      withdrawMethodsStripe: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan-stripe-connect\\]",
      withdrawMethodsStripeExpress: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan_stripe_express\\]",
      withdrawMethodsSkrill: "#dokan_withdraw\\[withdraw_methods\\]\\[skrill\\]",
      customMethodName: "#dokan_withdraw\\[withdraw_method_name\\]",
      customMethodType: "#dokan_withdraw\\[withdraw_method_type\\]",
      minimumWithdrawAmount: "#dokan_withdraw\\[withdraw_limit\\]",
      orderStatusForWithdrawCompleted: "#dokan_withdraw\\[withdraw_order_status\\]\\[wc-completed\\]",
      orderStatusForWithdrawProcessing: "#dokan_withdraw\\[withdraw_order_status\\]\\[wc-processing\\]",
      orderStatusForWithdrawOnHold: "#dokan_withdraw\\[withdraw_order_status\\]\\[wc-on-hold\\]",
      excludeCodPayments: "#dokan_withdraw\\[exclude_cod_payment\\]",
      withdrawThreshold: "#dokan_withdraw\\[withdraw_date_limit\\]",
      hideWithdrawOption: "#dokan_withdraw\\[hide_withdraw_option\\]",
      //disbursement schedule settings
      withdrawDisbursementManual: "#dokan_withdraw\\[disbursement\\]\\[manual\\]",
      withdrawDisbursementAuto: "#dokan_withdraw\\[disbursement\\]\\[schedule\\]",
      disburseMentQuarterlySchedule: "#dokan_withdraw\\[disbursement_schedule\\]\\[quarterly\\]",
      disburseMentMonthlySchedule: "#dokan_withdraw\\[disbursement_schedule\\]\\[monthly\\]",
      disburseMentBiweeklySchedule: "#dokan_withdraw\\[disbursement_schedule\\]\\[biweekly\\]",
      disburseMentWeeklySchedule: "#dokan_withdraw\\[disbursement_schedule\\]\\[weekly\\]",
      quarterlyScheduleMonth: "select[name='dokan_withdraw[quarterly_schedule][month]']",
      quarterlyScheduleWeek: "select[name='dokan_withdraw[quarterly_schedule][week]']",
      quarterlyScheduleDay: "select[name='dokan_withdraw[quarterly_schedule][days]']",
      monthlyScheduleWeek: "select[name='dokan_withdraw[monthly_schedule][week]']",
      monthlyScheduleDay: "select[name='dokan_withdraw[monthly_schedule][days]']",
      biweeklyScheduleWeek: "select[name='dokan_withdraw[biweekly_schedule][week]']",
      biweeklyScheduleDay: "select[name='dokan_withdraw[biweekly_schedule][days]']",
      weeklyScheduleDay: "select[name='dokan_withdraw[weekly_schedule]']",
      withdrawSaveChanges: "#submit",

      //page settings
      dashboard: "#dokan_pages\\[dashboard\\]",
      myOrders: "#dokan_pages\\[my_orders\\]",
      storeListing: "#dokan_pages\\[store_listing\\]",
      termsAndConditionsPage: "#dokan_pages\\[reg_tc_page\\]",
      pageSaveChanges: "#submit",

      //appearance
      showMapOnStorePage: "#dokan_appearance\\[store_map\\]",
      mapApiSourceGoogleMaps: "#dokan_appearance\\[map_api_source\\]\\[google_maps\\]",
      mapApiSourceMapBox: "#dokan_appearance\\[map_api_source\\]\\[mapbox\\]",
      googleMapApiKey: "#dokan_appearance\\[gmap_api_key\\]",
      mapBoxAccessToken: "#dokan_appearance\\[mapbox_access_token\\]",
      googleReCAPTCHAValidationSiteKey: "#dokan_appearance\\[recaptcha_site_key\\]",
      googleReCAPTCHAValidationSecretKey: "#dokan_appearance\\[recaptcha_secret_key\\]",
      showContactFormOnStorePage: "#dokan_appearance\\[contact_seller\\]",
      storeHeaderTemplate1: ".radio-image:nth-child(1) .button",
      storeHeaderTemplate2: ".radio-image:nth-child(2) .button",
      storeHeaderTemplate3: ".radio-image:nth-child(3) .button",
      storeHeaderTemplate4: ".radio-image:nth-child(4) .button",
      storeBannerWidth: "#dokan_appearance\\[store_banner_width\\]",
      storeBannerHeight: "#dokan_appearance\\[store_banner_height\\]",
      storeOpeningClosingTimeWidget: "#dokan_appearance\\[store_open_close\\]",
      enableStoreSidebarFromTheme: "#dokan_appearance\\[enable_theme_store_sidebar\\]",
      showVendorInfo: "#dokan_appearance\\[show_vendor_info\\]",
      hideVendorInfoEmailAddress: "#dokan_appearance\\[hide_vendor_info\\]\\[email\\]",
      hideVendorInfoPhoneNumber: "#dokan_appearance\\[hide_vendor_info\\]\\[phone\\]",
      hideVendorInfoStoreAddress: "#dokan_appearance\\[hide_vendor_info\\]\\[address\\]",
      appearanceSaveChanges: "#submit",

      //privacy policy
      enablePrivacyPolicy: "#dokan_privacy\\[enable_privacy\\]",
      privacyPage: "#dokan_privacy\\[privacy_page\\]",
      privacyPolicyMessage: "#dokan_privacy\\[privacy_policy\\]",
      privacyPolicySaveChanges: "#submit",

      //live search
      liveSearchOptions: "#dokan_live_search_setting\\[live_search_option\\]",
      liveSearchSaveChanges: "#submit",

      //store support
      displayOnOrderDetails: "#dokan_store_support_setting\\[enabled_for_customer_order\\]",
      displayOnSingleProductPage: "#dokan_store_support_setting\\[store_support_product_page\\]",
      supportButtonLabel: "#dokan_store_support_setting\\[support_button_label\\]",
      storeSupportSaveChanges: "#submit",

      //seller verification
      //TODO: add locators
      //verification sms gateways
      //TODO: add locators 
      //email verification
      enableEmailVerification: "#dokan_email_verification\\[enabled\\]",
      registrationNotice: "#dokan_email_verification\\[registration_notice\\]",
      loginNotice: "#dokan_email_verification\\[login_notice\\]",
      emailVerificationSaveChanges: "#submit",

      //social api
      //TODO: add locators 
      //shipping status
      //TODO: add locators 
      //colors
      //TODO: add locators 

      //live chat
      enableLiveChat: "#dokan_live_chat\\[enable\\]",
      chatProviderFacebookMessenger: "#dokan_live_chat\\[provider\\]\\[messenger\\]",
      chatProviderTalkJs: "#dokan_live_chat\\[provider\\]\\[talkjs\\]",
      chatProviderTawkTo: "#dokan_live_chat\\[provider\\]\\[tawkto\\]",
      chatProviderWhatsApp: "#dokan_live_chat\\[provider\\]\\[whatsapp\\]",
      //fb
      messengerColor: ".button > span",
      //talkJs
      appId: "#dokan_live_chat\\[app_id\\]",
      appSecret: "#dokan_live_chat\\[app_secret\\]",
      //whatsapp
      openingPattern: "#dokan_live_chat\\[wa_opening_method\\]",
      preFilledMessage: "#dokan_live_chat\\[wa_pre_filled_message\\]",
      //chat button
      chatButtonOnVendorPage: "#dokan_live_chat\\[chat_button_seller_page\\]",
      chatButtonOnProductPage: "#dokan_live_chat\\[chat_button_product_page\\]",
      liveChatSaveChanges: "#submit",

      //rma
      orderStatus: "#dokan_rma\\[rma_order_status\\]",
      enableRefundRequests: "#dokan_rma\\[rma_enable_refund_request\\]",
      enableCouponRequests: "#dokan_rma\\[rma_enable_coupon_request\\]",
      reasonsForRmaSingle: (reason) => `//li[contains(text(),'${reason}')]//span[@class="dashicons dashicons-no-alt remove-item"]`,
      reasonsForRmaInput: ".regular-text",
      reasonsForRmaAdd: ".dokan-repetable-add-item-btn",
      refundPolicyIframe: 'iframe',
      refundPolicyHtmlBody: '#tinymce',

      rmaSaveChanges: "#submit",

      //wholesale
      whoCanSeeWholesalePriceAllUsers: "#dokan_wholesale\\[wholesale_price_display\\]\\[all_user\\]",
      whoCanSeeWholesalePriceWholesaleCustomer: "#dokan_wholesale\\[wholesale_price_display\\]\\[wholesale_customer\\]",
      showWholesalePriceOnShopArchive: "#dokan_wholesale\\[display_price_in_shop_archieve\\]",
      needApprovalForCustomer: "#dokan_wholesale\\[need_approval_for_wholesale_customer\\]",
      wholesaleSaveChanges: "#submit",

      //eu compliance fields
      vendorExtraFieldsCompanyName: "#dokan_germanized\\[vendor_fields\\]\\[dokan_company_name\\]",
      vendorExtraFieldsCompanyIdOrEuidNumber: "#dokan_germanized\\[vendor_fields\\]\\[dokan_company_id_number\\]",
      vendorExtraFieldsVatOrTaxNumber: "#dokan_germanized\\[vendor_fields\\]\\[dokan_vat_number\\]",
      vendorExtraFieldsNameOfBank: "#dokan_germanized\\[vendor_fields\\]\\[dokan_bank_name\\]",
      vendorExtraFieldsBankIban: "#dokan_germanized\\[vendor_fields\\]\\[dokan_bank_iban\\]",
      displayInVendorRegistrationForm: "#dokan_germanized\\[vendor_registration\\]",
      customerExtraFieldsCompanyIdOrEuidNumber: "#dokan_germanized\\[customer_fields\\]\\[billing_dokan_company_id_number\\]",
      customerExtraFieldsVatOrTaxNumber: "#dokan_germanized\\[customer_fields\\]\\[billing_dokan_vat_number\\]",
      customerExtraFieldsNameOfBank: "#dokan_germanized\\[customer_fields\\]\\[billing_dokan_bank_name\\]",
      customerExtraFieldsBankIban: "#dokan_germanized\\[customer_fields\\]\\[billing_dokan_bank_iban\\]",
      enableGermanizedSupportForVendors: "#dokan_germanized\\[enabled_germanized\\]",
      vendorsWillBeAbleToOverrideInvoiceNumber: "#dokan_germanized\\[override_invoice_number\\]",
      euComplianceFieldsSaveChanges: "#submit",

      //delivery time
      allowVendorSettings: "#dokan_delivery_time\\[allow_vendor_override_settings\\]",
      deliveryDateLabel: "#dokan_delivery_time\\[delivery_date_label\\]",
      deliveryBlockedBuffer: "#dokan_delivery_time\\[preorder_date\\]",
      deliveryBoxInfo: "#dokan_delivery_time\\[delivery_box_info\\]",
      requireDeliveryDateAndTime: "#dokan_delivery_time\\[selection_required\\]",
      deliveryDaySunday: "#dokan_delivery_time\\[delivery_day\\]\\[sunday\\]",
      deliveryDayMonday: "#dokan_delivery_time\\[delivery_day\\]\\[monday\\]",
      deliveryDayTuesday: "#dokan_delivery_time\\[delivery_day\\]\\[tuesday\\]",
      deliveryDayWednesday: "#dokan_delivery_time\\[delivery_day\\]\\[wednesday\\]",
      deliveryDayThursday: "#dokan_delivery_time\\[delivery_day\\]\\[thursday\\]",
      deliveryDayFriday: "#dokan_delivery_time\\[delivery_day\\]\\[friday\\]",
      deliveryDaySaturday: "#dokan_delivery_time\\[delivery_day\\]\\[saturday\\]",
      openingTime: "#dokan_delivery_time\\[opening_time\\]",
      closingTime: "#dokan_delivery_time\\[closing_time\\]",
      timeSlot: "#dokan_delivery_time\\[time_slot_minutes\\]",
      orderPerSlot: "#dokan_delivery_time\\[order_per_slot\\]",
      deliveryTimeSaveChanges: "#submit",

      //product advertising
      noOfAvailableSlot: "#dokan_product_advertisement\\[total_available_slot\\]",
      expireAfterDays: "#dokan_product_advertisement\\[expire_after_days\\]",
      vendorCanPurchaseAdvertisement: "#dokan_product_advertisement\\[per_product_enabled\\]",
      advertisementCostUsd: "#dokan_product_advertisement\\[cost\\]",
      enableAdvertisementInSubscription: "#dokan_product_advertisement\\[vendor_subscription_enabled\\]",
      markAdvertisedProductAsFeatured: "#dokan_product_advertisement\\[featured\\]",
      displayAdvertisedProductOnTop: "#dokan_product_advertisement\\[catalog_priority\\]",
      outOfStockVisibility: "#dokan_product_advertisement\\[hide_out_of_stock_items\\]",
      productAdvertisingSaveChanges: "#submit",

      //geolocation
      locationMapPosition: "#dokan_geolocation\\[show_locations_map\\]",
      showMap: "#dokan_geolocation\\[show_location_map_pages\\]",
      showFiltersBeforeLocationMap: "#dokan_geolocation\\[show_filters_before_locations_map\\]",
      productLocationTab: "#dokan_geolocation\\[show_product_location_in_wc_tab\\]",
      radiusSearchUnit: "#dokan_geolocation\\[distance_unit\\]",
      radiusSearchMinimumDistance: "#dokan_geolocation\\[distance_min\\]",
      radiusSearchMaximumDistance: "#dokan_geolocation\\[distance_max\\]",
      mapZoomLevel: "#dokan_geolocation\\[map_zoom\\]",
      defaultLocation: ".search-address",
      geolocationSaveChanges: "#submit",

      //product report abuse
      reportedBy: "#dokan_report_abuse\\[reported_by_logged_in_users_only\\]",
      reasonsForAbuseReportList: ".dokan-settings-repeatable-list li",
      reasonsForAbuseReportSingle: (reason) => `//li[contains(text(),'${reason}')]//span[@class="dashicons dashicons-no-alt remove-item"]`,
      reasonsForAbuseReportInput: ".regular-text",
      reasonsForAbuseReportAdd: ".dokan-repetable-add-item-btn",
      productReportAbuseSaveChanges: "#submit",

      //single product multi vendor
      enableSingleProductMultipleVendor: "#dokan_spmv\\[enable_pricing\\]",
      sellItemButtonText: "#dokan_spmv\\[sell_item_btn\\]",
      availableVendorDisplayAreaTitle: "#dokan_spmv\\[available_vendor_list_title\\]",
      availableVendorSectionDisplayPosition: "#dokan_spmv\\[available_vendor_list_position\\]",
      showSpmvProducts: "#dokan_spmv\\[show_order\\]",
      singleProductMultiVendorSaveChanges: "#submit",

      //vendor analytics
      //TODO: add locators 

      //vendor subscription
      subscription: "#dokan_product_subscription\\[subscription_pack\\]",
      enableProductSubscription: "#dokan_product_subscription\\[enable_pricing\\]",
      enableSubscriptionInRegistrationForm: "#dokan_product_subscription\\[enable_subscription_pack_in_reg\\]",
      enableEmailNotification: "#dokan_product_subscription\\[notify_by_email\\]",
      noOfDays: "#dokan_product_subscription\\[no_of_days_before_mail\\]",
      productStatus: "#dokan_product_subscription\\[product_status_after_end\\]",
      cancellingEmailSubject: "#dokan_product_subscription\\[cancelling_email_subject\\]",
      cancellingEmailBody: "#dokan_product_subscription\\[cancelling_email_body\\]",
      alertEmailSubject: "#dokan_product_subscription\\[alert_email_subject\\]",
      alertEmailBody: "#dokan_product_subscription\\[alert_email_body\\]",
      vendorSubscriptionSaveChanges: "#submit",

      // update Settings
      dokanUpdateSuccessMessage: '#setting-message_updated > p > strong',
    },

    //license
    license: {}
  },

  //woocommerce
  wooCommerce: {
    //woocommerce menu
    // settingsMenu: "#toplevel_page_woocommerce li:nth-child(6) > a",
    settingsMenu: "//li[contains(@class,'toplevel_page_woocommerce')]//a[text()='Settings']",

    //woocommerce settings
    settings: {
      //settings menu
      // general: ".nav-tab:nth-child(1)",
      general: '//a[contains(@class,"nav-tab") and text()="General"]',
      // products: ".nav-tab:nth-child(2)",
      products: '//a[contains(@class,"nav-tab") and text()="Products"]',
      // tax: ".nav-tab:nth-child(3)",
      tax: '//a[contains(@class,"nav-tab") and text()="Tax"]',
      // shipping: ".nav-tab:nth-child(4)",
      shipping: '//a[contains(@class,"nav-tab") and text()="Shipping"]',
      // payments: ".nav-tab:nth-child(5)",
      payments: '//a[contains(@class,"nav-tab") and text()="Payments"]',

      //general
      //store address
      addressLine1: "#woocommerce_store_address",
      addressLine2: "#woocommerce_store_address_2",
      city: "#woocommerce_store_city",
      countryOrState: "#select2-woocommerce_default_country-g1-container",
      PostcodeOrZip: "#woocommerce_store_postcode",
      //general options
      sellingLocation: "#select2-woocommerce_allowed_countries-container",
      shippingLocation: "#select2-woocommerce_ship_to_countries-container",
      defaultCustomerLocation: "#select2-woocommerce_default_customer_address-container",
      enableTaxes: "#woocommerce_calc_taxes",
      enableCoupon: "#woocommerce_enable_coupons",
      calculateCouponDiscountsSequentially: "#woocommerce_calc_discounts_sequentially",
      //currency options
      currency: "#select2-woocommerce_currency-container",
      currencyPosition: "#select2-woocommerce_currency_pos-container",
      currencyPositionValues: ".select2-results ul li",
      thousandSeparator: "#woocommerce_price_thousand_sep",
      decimalSeparator: "#woocommerce_price_decimal_sep",
      numberOfDecimals: "#woocommerce_price_num_decimals",
      generalSaveChanges: ".woocommerce-save-button",

      //tax
      //tax menus
      taxOptions: ".subsubsub > li:nth-child(1) > a",
      standardRates: ".subsubsub > li:nth-child(2) > a",
      reducedRateRates: ".subsubsub > li:nth-child(3) > a",
      zeroRateRates: ".subsubsub > li:nth-child(4) > a",

      //tax options
      pricesEnteredWithTaxPricesInclusiveOfTax: "li:nth-child(1) input",
      pricesEnteredWithTaxPricesExclusiveOfTax: "li:nth-child(2) input",
      calculateTaxBasedOn: "#select2-woocommerce_tax_based_on-container",
      shippingTaxClass: "#select2-woocommerce_shipping_tax_class-container",
      rounding: "#woocommerce_tax_round_at_subtotal",
      additionalTaxClasses: "#woocommerce_tax_classes",
      displayPricesInTheShop: "#select2-woocommerce_tax_display_shop-container",
      displayPricesDuringCartAndCheckout: "#select2-woocommerce_tax_display_cart-container",
      priceDisplaySuffix: "#woocommerce_price_display_suffix",
      displayTaxTotals: "#select2-woocommerce_tax_total_display-container",
      taxSaveChanges: ".woocommerce-save-button",

      //add tax
      taxTable: ".wc_tax_rates",
      insertRow: ".plus",
      taxRate: ".rate input",
      taxRateSaveChanges: ".woocommerce-save-button",

      //shipping
      addShippingZone: ".page-title-action",
      zoneName: "#zone_name",
      // zoneRegions: ".select2-search__field",
      zoneRegions: "#zone_locations",
      shippingZoneCell: (shippingZone) => `//a[contains(text(), '${shippingZone}')]/..`,
      editShippingZone: (shippingZone) => `//a[contains(text(), '${shippingZone}')]/..//div//a[contains(text(), 'Edit')]`,
      deleteShippingZone: (shippingZone) => `//a[contains(text(), '${shippingZone}')]/..//div//a[contains(text(), 'Delete')]`,
      addShippingMethods: ".wc-shipping-zone-add-method",
      shippingMethod: ".wc-shipping-zone-method-selector select",
      addShippingMethod: "#btn-ok",
      // createdShippingMethod: ".wc-shipping-zone-method-rows.ui-sortable",
      // editShippingMethod: '.row-actions .wc-shipping-zone-method-settings',
      shippingMethodCell: (shippingMethodName) => `//a[contains(text(),'${shippingMethodName}')]/..`,
      editShippingMethod: (shippingMethodName) => `//a[contains(text(),'${shippingMethodName}')]/..//div//a[contains(text(), 'Edit')]`,
      deleteShippingMethod: (shippingMethodName) => `//a[contains(text(),'${shippingMethodName}')]/..//div//a[contains(text(), 'Delete')]`,

      //edit shipping methods
      //flat rate
      flatRateMethodTitle: "#woocommerce_flat_rate_title",
      flatRateTaxStatus: "#woocommerce_flat_rate_tax_status",
      flatRateCost: "#woocommerce_flat_rate_cost",
      //free shipping
      freeShippingTitle: "#woocommerce_free_shipping_title",
      freeShippingRequires: "#woocommerce_free_shipping_requires",
      freeShippingMinimumOrderAmount: "#woocommerce_free_shipping_min_amount",
      freeShippingCouponsDiscounts: "#woocommerce_free_shipping_ignore_discounts",
      //local pickup
      localPickupTitle: "#woocommerce_local_pickup_title",
      localPickupTaxStatus: "#woocommerce_local_pickup_tax_status",
      localPickupCost: "#woocommerce_local_pickup_cost",
      //dokan table rate shipping
      dokanTableRateShippingMethodTitle: "#woocommerce_dokan_table_rate_shipping_title",
      //dokan distance rate shipping
      dokanDistanceRateShippingMethodTitle: "#woocommerce_dokan_distance_rate_shipping_title",
      //vendor shipping
      vendorShippingMethodTitle: "#woocommerce_dokan_vendor_shipping_title",
      vendorShippingTaxStatus: "#woocommerce_dokan_vendor_shipping_tax_status",

      //shipping method save changes
      shippingMethodSaveChanges: "#btn-ok",
      //shipping zone save changes
      shippingZoneSaveChanges: ".button.wc-shipping-zone-method-save",

      //payments
      //enable methods
      enableDirectBankTransfer: "//a[contains(text(),'Direct bank transfer')]/../..//span",
      enableCheckPayments: "//a[contains(text(),'Check payments')]/../..//span",
      enableCashOnDelivery: "//a[contains(text(),'Cash on delivery')]/../..//span",
      enableDokanWirecardConnect: "//a[contains(text(),'Dokan Wirecard Connect')]/../..//td[@class='status']//span",
      enableDokanPayPalAdaptivePayments: "//a[contains(text(),'Dokan PayPal Adaptive Payments')]/../..//td[@class='status']//span",
      enableDokanPayPalMarketplace: "//a[contains(text(),'Dokan PayPal Marketplace')]/../..//td[@class='status']//span",
      enableDokanStripeConnect: "//a[contains(text(),'Dokan Stripe Connect')]/../..//td[@class='status']//span",
      enableDokanMangoPay: "//a[contains(text(),'Dokan MangoPay')]/../..//td[@class='status']//span",
      enableDokanRazorpay: "//a[contains(text(),'Dokan Razorpay')]/../..//td[@class='status']//span",
      enableDokanStripeExpress: "//a[contains(text(),'Dokan Stripe Express')]/../..//td[@class='status']//span",
      // setup or manage payment methods
      setupDirectBankTransfer: "//a[contains(text(),'Direct bank transfer')]/../..//td[@class='action']//a",
      setupCheckPayments: "//a[contains(text(),'Check payments')]/../..//td[@class='action']//a",
      setupCashOnDelivery: "//a[contains(text(),'Cash on delivery')]/../..//td[@class='action']//a",
      setupDokanWirecardConnect: "//a[contains(text(),'Dokan Wirecard Connect')]/../..//td[@class='action']//a",
      setupDokanPayPalAdaptivePayments: "//a[contains(text(),'Dokan PayPal Adaptive Payments')]/../..//td[@class='action']//a",
      setupDokanPayPalMarketplace: "//a[contains(text(),'Dokan PayPal Marketplace')]/../..//td[@class='action']//a",
      setupDokanStripeConnect: "//a[contains(text(),'Dokan Stripe Connect')]/../..//td[@class='action']//a",
      setupDokanMangoPay: "//a[contains(text(),'Dokan MangoPay')]/../..//td[@class='action']//a",
      setupDokanRazorpay: "//a[contains(text(),'Dokan Razorpay')]/../..//td[@class='action']//a",
      setupDokanStripeExpress: "//a[contains(text(),'Dokan Stripe Express')]/../..//td[@class='action']//a",
      paymentMethodsSaveChanges: ".woocommerce-save-button",

      //stripe
      stripe: {
        //stripe connect
        enableDisableStripe: "#woocommerce_dokan-stripe-connect_enabled",
        title: "#woocommerce_dokan-stripe-connect_title",
        description: "#woocommerce_dokan-stripe-connect_description",
        nonConnectedSellers: "#woocommerce_dokan-stripe-connect_allow_non_connected_sellers",
        displayNoticeToConnectSeller: "#woocommerce_dokan-stripe-connect_display_notice_to_non_connected_sellers",
        displayNoticeInterval: "#woocommerce_dokan-stripe-connect_display_notice_interval",
        threeDSecureAndSca: "#woocommerce_dokan-stripe-connect_enable_3d_secure",
        sellerPaysTheProcessingFeeIn3DsMode: "#woocommerce_dokan-stripe-connect_seller_pays_the_processing_fee",
        testMode: "#woocommerce_dokan-stripe-connect_testmode",
        stripeCheckout: "#woocommerce_dokan-stripe-connect_stripe_checkout",
        stripeCheckoutLocale: "#select2-woocommerce_dokan-stripe-connect_stripe_checkout_locale-container",
        checkoutImage: "#woocommerce_dokan-stripe-connect_stripe_checkout_image",
        checkoutButtonLabel: "#woocommerce_dokan-stripe-connect_stripe_checkout_label",
        savedCards: "#woocommerce_dokan-stripe-connect_saved_cards",
        //test credentials
        testPublishableKey: "#woocommerce_dokan-stripe-connect_test_publishable_key",
        testSecretKey: "#woocommerce_dokan-stripe-connect_test_secret_key",
        testClientId: "#woocommerce_dokan-stripe-connect_test_client_id",
        stripeSaveChanges: ".woocommerce-save-button",
      },

      //paypal marketplace
      paypalMarketPlace: {
        enableDisablePayPalMarketplace: "#woocommerce_dokan_paypal_marketplace_enabled",
        title: "#woocommerce_dokan_paypal_marketplace_title",
        description: "#woocommerce_dokan_paypal_marketplace_description",
        payPalMerchantIdPartnerId: "#woocommerce_dokan_paypal_marketplace_partner_id",
        // api credentials
        payPalSandbox: "#woocommerce_dokan_paypal_marketplace_test_mode",
        sandboxClientId: "#woocommerce_dokan_paypal_marketplace_test_app_user",
        sandBoxClientSecret: "#woocommerce_dokan_paypal_marketplace_test_app_pass",
        payPalPartnerAttributionId: "#woocommerce_dokan_paypal_marketplace_bn_code",
        disbursementMode: "#select2-woocommerce_dokan_paypal_marketplace_disbursement_mode-container",
        disbursementModeValues: ".select2-results ul li",
        paymentButtonType: "#select2-woocommerce_dokan_paypal_marketplace_button_type-container",
        paymentButtonTypeValues: ".select2-results ul li",
        allowUnbrandedCreditCard: "#woocommerce_dokan_paypal_marketplace_ucc_mode",
        marketplaceLogo: "#woocommerce_dokan_paypal_marketplace_marketplace_logo",
        displayNoticeToConnectSeller: "#woocommerce_dokan_paypal_marketplace_display_notice_on_vendor_dashboard",
        sendAnnouncementToConnectSeller: "#woocommerce_dokan_paypal_marketplace_display_notice_to_non_connected_sellers",
        sendAnnouncementInterval: "#woocommerce_dokan_paypal_marketplace_display_notice_interval",
        paypalMarketPlaceSaveChanges: ".woocommerce-save-button",
      },

      //dokan mangopay
      dokanMangoPay: {
        enableDisableMangoPayPayment: "#woocommerce_dokan_mangopay_enabled",
        title: "#woocommerce_dokan_mangopay_title",
        description: "#woocommerce_dokan_mangopay_description",
        //api credentials
        mangoPaySandbox: "#woocommerce_dokan_mangopay_sandbox_mode",
        sandboxClientId: "#woocommerce_dokan_mangopay_sandbox_client_id",
        sandBoxApiKey: "#woocommerce_dokan_mangopay_sandbox_api_key",
        // payment options
        // chooseAvailableCreditCards: ".select2-search:nth-child(2) > .select2-search__field",
        chooseAvailableCreditCards: '//label[contains(text(),"Choose Available Credit Cards ")]/../..//input[@class="select2-search__field"]',
        chooseAvailableCreditCardsValues: ".select2-results ul li",
        // chooseAvailableDirectPaymentServices: ".form-table:nth-child(14) tr:nth-child(2) .select2-selection__rendered",
        chooseAvailableDirectPaymentServices: '//label[contains(text(),"Choose Available Direct Payment Services")]/../..//input[@class="select2-search__field"]',
        chooseAvailableDirectPaymentServicesValues: ".select2-results ul li",
        savedCards: "#woocommerce_dokan_mangopay_saved_cards",
        threeDs2: "#woocommerce_dokan_mangopay_disabled_3DS2",
        // Fund Transfers and Payouts
        transferFunds: "#select2-woocommerce_dokan_mangopay_disburse_mode-container",
        transferFundsValues: ".select2-results ul li",
        payoutMode: "#woocommerce_dokan_mangopay_instant_payout",
        // Types and Requirements of Vendors
        typeOfVendors: "#select2-woocommerce_dokan_mangopay_default_vendor_status-container",
        typeOfVendorsValues: ".select2-results ul li",
        businessRequirement: "#select2-woocommerce_dokan_mangopay_default_business_type-container",
        businessRequirementValues: ".select2-results ul li",
        // advancedSettings
        displayNoticeToNonConnectedSellers: "#woocommerce_dokan_mangopay_notice_on_vendor_dashboard",
        sendAnnouncementToNonConnectedSellers: "#woocommerce_dokan_mangopay_announcement_to_sellers",
        announcementInterval: "#woocommerce_dokan_mangopay_notice_interval",
        dokanMangopaySaveChanges: ".woocommerce-save-button",
      },

      dokanRazorpay: {
        enableDisableDokanRazorpay: "#woocommerce_dokan_razorpay_enabled",
        title: "#woocommerce_dokan_razorpay_title",
        description: "#woocommerce_dokan_razorpay_description",
        // api credentials
        razorpaySandbox: "#woocommerce_dokan_razorpay_test_mode",
        testKeyId: "#woocommerce_dokan_razorpay_test_key_id",
        testKeySecret: "#woocommerce_dokan_razorpay_test_key_secret",
        disbursementMode: "#select2-woocommerce_dokan_razorpay_disbursement_mode-container",
        disbursementModeValues: ".select2-results ul li",
        sellerPaysTheProcessingFee: "#woocommerce_dokan_razorpay_seller_pays_the_processing_fee",
        displayNoticeToConnectSeller: "#woocommerce_dokan_razorpay_display_notice_on_vendor_dashboard",
        sendAnnouncementToConnectSeller: "#woocommerce_dokan_razorpay_display_notice_to_non_connected_sellers",
        sendAnnouncementInterval: "#woocommerce_dokan_razorpay_display_notice_interval",
        dokanRazorpaySaveChanges: ".woocommerce-save-button",
      },

      stripeExpress: {
        // Stripe Express
        enableOrDisableStripeExpress: "#woocommerce_dokan_stripe_express_enabled",
        title: "#woocommerce_dokan_stripe_express_title",
        description: "#woocommerce_dokan_stripe_express_description",
        // API Credentials
        testMode: "#woocommerce_dokan_stripe_express_testmode",
        testPublishableKey: "#woocommerce_dokan_stripe_express_test_publishable_key",
        testSecretKey: "#woocommerce_dokan_stripe_express_test_secret_key",
        testWebhookSecret: "#woocommerce_dokan_stripe_express_test_webhook_key",
        // Payment and Disbursement
        choosePaymentMethods: "//select[@id='woocommerce_dokan_stripe_express_enabled_payment_methods']/..//span[@class='select2-selection select2-selection--multiple']",
        // choosePaymentMethods: ".select2-search__field",
        choosePaymentMethodsValues: ".select2-results ul li",
        takeProcessingFeesFromSellers: "#woocommerce_dokan_stripe_express_sellers_pay_processing_fee",
        savedCards: "#woocommerce_dokan_stripe_express_saved_cards",
        capturePaymentsManually: "#woocommerce_dokan_stripe_express_capture",
        disburseFunds: "#select2-woocommerce_dokan_stripe_express_disburse_mode-container",
        disbursementModeValues: ".select2-results ul li",
        customerBankStatement: "#woocommerce_dokan_stripe_express_statement_descriptor",
        // Payment Request Options (Apple Pay / Google Pay)
        paymentRequestButtons: "#woocommerce_dokan_stripe_express_payment_request",
        buttonType: "#woocommerce_dokan_stripe_express_payment_request_button_type",
        buttonTheme: "#woocommerce_dokan_stripe_express_payment_request_button_theme",
        buttonLocations: "//select[@id='woocommerce_dokan_stripe_express_payment_request_button_locations']/..//span[@class='select2-selection select2-selection--multiple']",
        buttonLocationsValues: ".select2-results ul li",
        buttonSize: "#woocommerce_dokan_stripe_express_payment_request_button_size",
        // Advanced Settings
        displayNoticeToNonConnectedSellers: "#woocommerce_dokan_stripe_express_notice_on_vendor_dashboard",
        sendAnnouncementToNonConnectedSellers: "#woocommerce_dokan_stripe_express_announcement_to_sellers",
        announcementInterval: "#woocommerce_dokan_stripe_express_notice_interval",
        debugLog: "#woocommerce_dokan_stripe_express_debug",
        stripeExpressSaveChanges: ".woocommerce-save-button",
      },

      //update success message
      updatedSuccessMessage: "#message.updated.inline p",
    },

  },


  //products
  products: {
    //products menus
    // allProductsMenu: '#menu-posts-product .wp-first-item > .wp-first-item',
    allProductsMenu: '//li[@id="menu-posts-product"]//a[text()="All Products"]',
    // addNewMenu: '#menu-posts-product li:nth-child(3) > a',
    addNewMenu: '//li[@id="menu-posts-product"]//a[text()="Add New"]',
    // categoriesMenu: '#menu-posts-product li:nth-child(4) > a',
    categoriesMenu: '//li[@id="menu-posts-product"]//a[text()="Categories"]',
    // tagsMenu: "#menu-posts-product li:nth-child(5) > a",
    tagsMenu: '//li[@id="menu-posts-product"]//a[text()="Tags"]',
    // addOnsMenu: '#menu-posts-product li:nth-child(6) > a',
    addOnsMenu: '//li[@id="menu-posts-product"]//a[text()="Add-ons"]',
    // attributesMenu: '#menu-posts-product li:nth-child(7) > a',
    attributesMenu: '//li[@id="menu-posts-product"]//a[text()="Attributes"]',

    //product
    product: {
      //add new product
      productName: '#title',
      //product data
      productType: '#product-type',
      virtual: '#\\_virtual',
      downloadable: '#\\_downloadable',
      //add new product sub menus
      general: '.general_options > a',
      inventory: '.inventory_options > a',
      shipping: '.shipping_options > a',
      linkedProducts: '.linked_product_options > a',
      attributes: '.attribute_options > a',
      variations: '.variations_options > a',
      advanced: '.advanced_options > a',
      auction: '.auction_tab_options > a',
      bookingAvailability: '.bookings_availability_options > a',
      bookingCosts: '.bookings_pricing_options > a',

      //General
      regularPrice: '#\\_regular_price',
      salePrice: '#\\_sale_price',
      salePriceDateFrom: '#\\_sale_price_dates_from',
      salePriceDateTo: '#\\_sale_price_dates_to',
      addDownloadableFiles: '.insert',
      fileName: '.file_name > .input_text',
      fileUrl: '.file_url > .input_text',
      chooseFile: '.upload_file_button',
      UploadFile: "",//TODO:add locator
      downloadLimit: '#\\_download_limit',
      downloadExpiry: "#\\_download_expiry",
      taxStatus: "#\\_tax_status",
      taxClass: "#\\_tax_class",
      enableWholesale: "#enable_wholesale",
      wholesalePrice: "#wholesale_price",
      minimumQuantityForWholesale: "#wholesale_quantity",
      enableMinMaxRule: "#product_wise_activation",
      minimumQuantityToOrder: "#min_quantity",
      maximumQuantityToOrder: "#max_quantity",
      minimumAmountToOrder: "#min_amount",
      maximumAmountToOrder: "#max_amount",
      orderRules: "#\\_donot_count",
      categoryRules: "#ignore_from_cat",
      //external product
      productUrl: '#\\_product_url',
      buttonText: '#\\_button_text',
      //simple subscription
      subscriptionPrice: '#\\_subscription_price',
      subscriptionPeriodInterval: '#\\_subscription_period_interval',
      subscriptionPeriod: '#\\_subscription_period',
      expireAfter: '#\\_subscription_length',
      signUpFee: '#\\_subscription_sign_up_fee',
      subscriptionTrialLength: '#\\_subscription_trial_length',
      subscriptionTrialPeriod: '#\\_subscription_trial_period',
      //dokan subscription 
      numberOfProducts: '#\\_no_of_product',
      packValidity: '#\\_pack_validity',
      advertisementSlot: '#\\_dokan_advertisement_slot_count',
      expireAfterDays: '#\\_dokan_advertisement_validity',
      dokanSubscriptionAdminCommissionType: '#\\_subscription_product_admin_commission_type',
      dokanSubscriptionAdminCommissionSingle: '.show_if_product_pack #admin_commission',
      dokanSubscriptionAdminCommissionCombined: '.subscription_additional_fee > .input-text',
      allowedProductTypes: '.form-field:nth-child(9) .select2-search__field',
      allowedCategoriesUncategorized: '.form-field:nth-child(10) .select2-search__field',
      restrictGalleryImageUpload: '#\\_enable_gallery_restriction',
      recurringPayment: '#\\_enable_recurring_payment',
      billingCycleRange: '#\\_dokan_subscription_period_interval',
      billingCyclePeriodInterval: '#\\_dokan_subscription_period',
      billingCycleStop: '#\\_dokan_subscription_length',
      enableTrial: '#dokan_subscription_enable_trial',
      trialPeriodRange: '.dokan-subscription-range',
      trialPeriodPeriod: '.dokan_subscription_trial_period > select:nth-child(3)',

      //action
      itemCondition: '#\\_auction_item_condition',
      auctionType: '#\\_auction_type',
      proxyBidding: '#\\_auction_proxy',
      startPrice: '#\\_auction_start_price',
      bidIncrement: '#\\_auction_bid_increment',
      reservePriced: '#\\_auction_reserved_price',
      buyItNowPrice: '.form-field:nth-child(7) > #\\_regular_price',
      auctionDatesFrom: '#\\_auction_dates_from',
      auctionDatesTo: '#\\_auction_dates_to',

      //booking
      bookingDurationType: '#\\_wc_booking_duration_type',
      bookingDuration: '#\\_wc_booking_duration',
      bookingDurationMin: '#\\_wc_booking_min_duration',
      bookingDurationMax: '#\\_wc_booking_max_duration',
      bookingDurationUnit: '#\\_wc_booking_duration_unit',
      calendarDisplayMode: '#\\_wc_booking_calendar_display_mode',
      requiresConfirmation: '#\\_wc_booking_requires_confirmation',
      canBeCancelled: '#\\_wc_booking_user_can_cancel',
      //booking availability
      MaxBookingsPerBlock: '#\\_wc_booking_qty',
      MinimumBlockBookableMinDate: '#\\_wc_booking_min_date',
      MinimumBlockBookableMinDateUnit: '#\\_wc_booking_min_date_unit',
      MaximumBlockBookableMaxDate: '#\\_wc_booking_max_date',
      MaximumBlockBookableMaxDateUnit: '#\\_wc_booking_max_date_unit',
      RequireABufferPeriodOf: '#\\_wc_booking_buffer_period',
      AdjacentBuffering: '#\\_wc_booking_apply_adjacent_buffer',
      AllDatesAre: '#\\_wc_booking_default_date_availability',
      CheckRulesAgainst: '#\\_wc_booking_check_availability_against',
      RestrictSelectableDay: '#\\_wc_booking_has_restricted_days',
      //booking costs
      baseCost: '#\\_wc_booking_cost',
      blockCost: '#\\_wc_booking_block_cost',
      displayCost: '#\\_wc_display_cost',

      //inventory
      sku: '#\\_sku',
      manageStock: '#\\_manage_stock',
      stockQuantity: '#\\_stock',
      allowBackOrders: '#\\_backorders',
      lowStockThreshold: '#\\_low_stock_amount',
      stockStatus: '#\\_stock_status',
      soldIndividually: '#\\_sold_individually',
      //shipping
      weightKg: '#\\_weight',
      length: '#product_length',
      width: '#product_width',
      height: '#product_height',
      shippingClass: '#product_shipping_class',
      //linked Products
      // upSells: ".options_group:nth-child(2) > .form-field:nth-child(1) .select2-search__field", 
      upSells: '//label[contains(text(),"Grouped products")]/..//input[@class="select2-search__field"]',
      // crossSells: ".form-field:nth-child(2) .select2-search__field", 
      crossSells: '//label[contains(text(),"Upsells")]/..//input[@class="select2-search__field"]',
      //attributes
      customProductAttribute: '.attribute_taxonomy',
      addAttribute: '.add_attribute',
      attributeName: '.woocommerce_attribute:nth-child(1) .attribute_name > .attribute_name',
      attributeValues: '.woocommerce_attribute:nth-child(1) textarea',
      selectAll: '.select_all_attributes',
      selectNone: '.minus',
      addNewAttribute: '.button.add_new_attribute',
      visibleOnTheProductPage: '.woocommerce_attribute:nth-child(1) td > label > .checkbox',
      usedForVariations: '.woocommerce_attribute:nth-child(1) .enable_variation .checkbox',
      saveAttributes: '.save_attributes',
      //variations
      //TODO: add more locators
      addVariations: '#field_to_edit',
      go: '.bulk_edit',  // invokes default js alert
      //advanced
      purchaseNote: '#\\_purchase_note',
      menuOrder: '#menu_order',
      enableReviews: '#comment_status',
      adminCommissionType: '#\\_per_product_admin_commission_type',
      adminCommissionSingle: '.show_if_simple #admin_commission',
      adminCommissionCombined: '.additional_fee > .input-text',
      //vendor
      vendor: '#dokan_product_author_override',
      vendorOptions: "#dokan_product_author_override > option",

      //category
      category: (categoryName) => `//label[contains(text(), ' ${categoryName}')]/input`,
      //tags
      tagInput: '#new-tag-product_tag',
      addTag: '.tagadd',
      //publish
      saveDraft: '#save-post',
      preview: '#post-preview',
      publish: '#publish',
      // publish: '.button.button-primary.button-large',
      updatedSuccessMessage: ".updated.notice.notice-success",
    },

    // categories
    category: {
      name: "#tag-name",
      slug: "#tag-slug",
      parentCategory: "#parent",
      description: "#tag-description",
      commissionType: "#per_category_admin_commission_type",
      adminCommissionFromThisCategory: ".wc_input_price:nth-child(2)",
      displayType: "#display_type",
      uploadOrAddImage: ".upload_image_button",
      addNewCategory: "#submit",
      categoryCell: (categoryName) => `//td[contains(text(), '${categoryName.toLowerCase()}')]/..`,
    },

    // attributes
    attribute: {
      name: "#attribute_label",
      slug: "#attribute_name",
      enableArchives: "#attribute_public",
      defaultSortOrder: "#attribute_orderby",
      addAttribute: "#submit",
      attributeCell: (attributeName) => `//td[contains(text(), '${attributeName.toLowerCase()}')]/..`,
      configureTerms: (attributeName) => `//td[contains(text(), '${attributeName.toLowerCase()}')]/..//a[normalize-space()="Configure terms"]`,
      // terms
      attributeTerm: "#tag-name",
      attributeTermSlug: "#tag-slug",
      description: "#tag-description",
      addAttributeTerm: "#submit",
      attributeTermCell: (attributeTerm) => `//td[contains(text(), '${attributeTerm.toLowerCase()}')]/..`,
    },

  },
  //bookings
  bookings: {},

  //analytics
  analytics: {},

  //marketing
  marketing: {
    //coupon
  },

  //elementor
  elementor: {},

  //templates
  templates: {},

  //appearance
  appearance: {},

  //plugins
  plugins: {
    //plugins menus
    installedPlugins: '//a[text()="Installed Plugins"]',

    //add new plugins
    addNew: '.page-title-action',
    searchPlugin: '#search-plugins',
    uploadPlugin: '.upload',
    chooseFile: '#pluginzip',
    installNow: '#install-plugin-submit',
    activatePlugin: '.button.button-primary',
    activateCustomPlugin: (plugin) => `//strong[normalize-space()="${plugin}"]/..//div//span[@class="activate"]`,
  },

  //users
  users: {
    //users menu
    allUsers: "#menu-users .wp-first-item > .wp-first-item",
    addNew: "#menu-users li:nth-child(3) > a",
    profile: "#menu-users li:nth-child(4) > a",

    //all users
    allUsersAddNew: ".page-title-action",
    editUser: ".visible > .edit > a",

    //add new user
    newUserName: "#user_login",
    newUserEmail: "#email",
    newUserFirstName: "#first_name",
    newUserFastName: "#last_name",
    newUserWebsite: '#url',
    newUserLanguage: "#locale",
    newUserPassword: "#pass1",
    newUserSendUserNotification: "#send_user_notification",
    newUserRole: "#role",
    addNewUser: "#createusersub",

    //edit user
    //personal info
    role: "#role",
    firstName: "#first_name",
    lastName: "#last_name",
    nickname: "#nickname",
    displayNamePubliclyAs: "#display_name",
    //contact info
    email: "#email",
    website: "#url",
    //about the user
    biographicalInfo: "#description",
    //account Management
    setNewPassword: ".wp-generate-pw",
    newPassword: "#pass1",
    //customer billing address
    billingFirstName: "#billing_first_name",
    billingLastName: "#billing_last_name",
    billingCompany: "#billing_company",
    billingAddress1: "#billing_address_1",
    billingAddress2: "#billing_address_2",
    billingCity: "#billing_city",
    billingPostcode: "#billing_postcode",
    billingCountryOrRegion: "#select2-billing_country-container",
    billingCountryOrRegionValues: ".select2-results ul li",
    billingState: "#billing_state",
    billingPhone: "#billing_phone",
    billingEmailAddress: "#billing_email",
    billingCompanyIdOrEuidNumber: "#billing_dokan_company_id_number",
    billingVatOrTaxNumber: "#billing_dokan_vat_number",
    billingBank: "#billing_dokan_bank_name",
    billingBankIban: "#billing_dokan_bank_iban",
    //customer shipping address
    copyFromBillingAddress: "#copy_billing",
    shippingFirstName: "#shipping_first_name",
    shippingLastName: "#shipping_last_name",
    shippingCompany: "#shipping_company",
    shippingAddress1: "#shipping_address_1",
    shippingAddress2: "#shipping_address_2",
    shippingCity: "#shipping_city",
    shippingPostcode: "#shipping_postcode",
    shippingCountryOrRegion: "#select2-shipping_country-container",
    shippingCountryOrRegionValues: ".select2-results ul li",
    shippingState: "#shipping_state",
    shippingPhone: "#shipping_phone",
    //dokan options
    dokanBanner: "",//TODO: add locator
    dokanStoreName: ".form-table:nth-child(21) tr:nth-child(2) .regular-text",
    dokanStoreUrl: "#seller-url",
    dokanAddress1: ".form-table:nth-child(21) tr:nth-child(4) .regular-text",
    dokanAddress2: ".form-table:nth-child(21) tr:nth-child(5) .regular-text",
    dokanCity: ".form-table:nth-child(21) tr:nth-child(6) .regular-text",
    dokanPostcode: ".form-table:nth-child(21) tr:nth-child(7) .regular-text",
    dokanCountry: "#select2-country-container",
    dokanCountryValues: ".select2-results ul li",
    dokanState: "##select2-state-container",
    dokanStateValues: ".select2-results ul li",
    dokanPhone: ".form-table:nth-child(21) tr:nth-child(10) .regular-text",
    dokanCompanyName: "form-table:nth-child(21) tr:nth-child(11) .regular-text",
    dokanCompanyIdOrEuidNumber: ".form-table:nth-child(21) tr:nth-child(12) .regular-text",
    dokanVatOrTaxNumber: ".form-table:nth-child(21) tr:nth-child(13) .regular-text",
    dokanBank: ".form-table:nth-child(21) tr:nth-child(14) .regular-text",
    dokanBankIban: ".form-table:nth-child(21) tr:nth-child(15) .regular-text",
    dokanFacebook: "tr:nth-child(16) .regular-text",
    dokanTwitter: "tr:nth-child(17) .regular-text",
    dokanPinterest: "tr:nth-child(18) .regular-text",
    dokanLinkedin: "tr:nth-child(19) .regular-text",
    dokanYoutube: "tr:nth-child(20) .regular-text",
    dokanInstagram: "tr:nth-child(21) .regular-text",
    dokanFlicker: "tr:nth-child(22) .regular-text",
    dokanSelling: "#dokan_enable_selling",
    dokanPublishing: "#dokan_publish",
    dokanAdminCommissionType: "#dokan_admin_percentage_type",
    dokanAdminCommission: "#admin-commission",
    dokanFeaturedVendor: "#dokan_feature",
    dokanWithdrawThreshold: "#withdraw_date_limit",
    dokanAuction: "#dokan_disable_auction",
    //dokan subscription
    assignSubscriptionPack: ".dps_assign_pack select",
    //update user
    updateUser: "#submit",
  },

  //tools
  tools: {},

  //settings
  settings: {
    // settings menus
    // general: "#menu-settings .wp-first-item > .wp-first-item",
    general: "//li[@id='menu-settings']//a[text()='General']",
    // writing: "#menu-settings li:nth-child(3) > a",
    writing: "//li[@id='menu-settings']//a[text()='Writing']",
    // reading: "#menu-settings li:nth-child(4) > a",
    reading: "//li[@id='menu-settings']//a[text()='Reading']",
    // discussion: "#menu-settings li:nth-child(5) > a",
    discussion: "//li[@id='menu-settings']//a[text()='Discussion']",
    // media: "#menu-settings li:nth-child(6) > a",
    media: "//li[@id='menu-settings']//a[text()='Media']",
    // permalinks: "#menu-settings li:nth-child(7) > a",
    permalinks: "//li[@id='menu-settings']//a[text()='Permalinks']",
    // privacy: "#menu-settings li:nth-child(8) > a",
    privacy: "//li[@id='menu-settings']//a[text()='Privacy']",

    // general settings
    siteTitle: "#blogname",
    tagline: "#blogdescription",
    wordPressAddressUrl: "#siteurl",
    siteAddressUrl: "#home",
    administrationEmailAddress: "#new_admin_email",
    membership: "#users_can_register",
    newUserDefaultRole: "#default_role",
    siteLanguage: "#WPLANG",
    timezone: "#timezone_string",
    dateFormat: "",// TODO: add locator
    timeFormat: "",// TODO: add locator
    weekStartsOn: "#start_of_week",
    generalSaveChanges: "#submit",

    //permalinks settings
    //common settings
    numeric: ".permalink-structure tr:nth-child(4) input",
    postName: ".permalink-structure tr:nth-child(5) input",
    //optional settings
    shopBaseWithCategory: "tr:nth-child(3) .wctog",
    customBase: "#woocommerce_custom_selection",
    permalinkSaveChanges: "#submit",

    //update settings
    updatedSuccessMessage: "#setting-error-settings_updated strong",
  },

  //locoTranslate
  locoTranslate: {},
    },



    //--------------------------------------------vendor---------------------------------------------//



    vendor: {
    //vendor registration
    vRegistration: {
        //vendor registration
        regEmail: "#reg_email",
        regPassword: "#reg_password",
        regVendor: "//input[@value='seller']",
        firstName: "#first-name",
        lastName: "#last-name",
        shopName: "#company-name",
        shopUrl: "#seller-url",
        companyName: "#dokan-company-name",
        companyId: "#dokan-company-id-number",
        vatNumber: "#dokan-vat-number",
        bankName: "#dokan-bank-name",
        bankIban: "#dokan-bank-iban",
        phone: "#shop-phone",
        subscriptionPack: "#dokan-subscription-pack",
        //register button
        register: ".woocommerce-Button",
    },

    //vendor setup wizard
    vSetup: {
        //intro
        letsGo: '.lets-go-btn',
        notRightNow: '.not-right-now-btn',

        //store setup   
        storeProductsPerPage: '#store_ppp',
        street1: '#address\\[street_1\\]',
        street2: '#address\\[street_2\\]',
        city: '#address\\[city\\]',
        zipCode: '#address\\[zip\\]',
        country: '#select2-addresscountry-container',
        countryInput: '.select2-search__field',
        state: '#calc_shipping_state',
        email: 'label:nth-child(2)',
        continueStoreSetup: '.store-step-continue',
        skipTheStepStoreSetup: '.store-step-skip-btn',

        //payment setup
        //paypal
        paypal: "//input[@name='settings[paypal][email]']",
        //bank
        bankAccountName: "//input[@placeholder='Your bank account name']",
        bankAccountNumber: "//input[@placeholder='Your bank account number']",
        bankName: "//input[@placeholder='Name of bank']",
        bankAddress: "//input[@placeholder='Address of your bank']",
        bankRoutingNumber: "//input[@placeholder='Routing number']",
        bankIban: "//input[@placeholder='IBAN']",
        bankSwiftCode: "//input[@placeholder='Swift code']",
        //custom payment method
        customPayment: "//input[@name='settings[dokan_custom][value]']",
        //paypal marketplace
        paypalMarketplace: '#vendor_paypal_email_address',
        paypalMarketplaceSigUp: '.vendor_paypal_connect',
        // Stripe
        ConnectWithStripe: '.dokan-stripe-connect-link',
        //skrill
        skrill: "//input[@name='settings[skrill][email]']",
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
        //TODO: add more menu bar locators
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
        productCategoryInput: ".select2-search--dropdown > .select2-search__field",
        productCategoryValues: ".select2-results ul li",
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
        //external product
        productUrl: '#\\_product_url',
        buttonText: '#\\_button_text',
        //simple subscription
        subscriptionPrice: '#\\_subscription_price',
        subscriptionPeriodInterval: '#\\_subscription_period_interval',
        subscriptionPeriod: '#\\_subscription_period',
        expireAfter: '#\\_subscription_length',
        signUpFee: '#\\_subscription_sign_up_fee',
        subscriptionTrialLength: '#\\_subscription_trial_length',
        subscriptionTrialPeriod: '#\\_subscription_trial_period',
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
        customProductAttribute: "#predefined_attribute",
        addAttribute: ".add_new_attribute",
        visibleOnTheProductPage: "checkbox-item:nth-child(6) > input",
        usedForVariations: ".show_if_variable > input",
        selectItems: "dokan-section-content > .content-half-part:nth-child(2) .select2-search__field",
        selectAll: ".plus",
        selectNone: ".minus",
        removeAttribute: ".dokan-product-remove-attribute",
        confirmRemoveAttribute: ".swal2-confirm",
        cancelRemoveAttribute: ".swal2-cancel",
        saveAttributes: ".dokan-save-attribute",
        addVariations: "#field_to_edit",
        go: ".do_variation_action",
        confirmGo: ".swal2-confirm",
        okSuccessAlertGo: ".swal2-confirm",
        cancelGo: ".swal2-cancel.swal2-styled",
        variationPrice: ".swal2-popup.swal2-modal.swal2-show .swal2-input",
        okVariationPrice: ".swal2-confirm",
        cancelVariationPrice: ".swal2-cancel",
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
        categoryRulesExclude: "#ignore_from_cat",
        //other Options
        productStatus: "#post_status",
        visibility: "#\\_visibility",
        purchaseNote: "#\\_purchase_note",
        enableProductReviews: "#\\_enable_reviews",
        //advertise product
        advertiseThisProduct: "#dokan_advertise_single_product",
        confirmAdvertiseThisProduct: ".swal2-confirm",
        okSuccessAlertAdvertiseThisProduct: ".swal2-confirm",
        cancelAdvertiseThisProduct: ".swal2-cancel",
        // save product
        saveProduct: ".dokan-btn-lg",
        updatedSuccessMessage: ".dokan-message"
    },

    //orders
    vOrders: {
        //menus
        //TODO: make locators unique
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
        //TODO: make locators unique
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
        //TODO: make locators unique
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
        balance: "//p[contains(text(),'Your Balance:')]//a//span[@class='woocommerce-Price-amount amount']",
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
        customMethodMakeDefault: (methodName) => `//strong[contains( text(), '${methodName}')]/../..//button[contains(@class, 'dokan-btn')]`,
        //default payment setup links
        customMethodSetup: (methodName) => `//strong[contains( text(), '${methodName}')]/../..//a[@class='dokan-btn']`,
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
        //TODO: add new booking locators
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
        productShortDescription: "", //TODO: add locator
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
        // selectFiles: "//div[@style='position: relative']//button[@class='browser button button-hero']",
        selectFiles: "//div[@style='position: relative']//button[contains(text(),'Select Files')]",
        // selectAndCrop: "//div[@style='position: relative']//button[@class='button media-button button-primary button-large media-button-select']",
        selectAndCrop: "//div[@style='position: relative']//button[contains(text(),'Select and Crop')]",
        // cropImage: "//div[@style='position: relative']//button[@class='button media-button button-primary button-large media-button-insert']",
        cropImage: "//div[@style='position: relative']//button[contains(text(),'Crop image')]",

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
        // TODO: need to improve locator days, opening and closing time, addRow, delete row
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

        //TODO: make locators unique
        // Delivery day
        sundayCheckbox: "div:nth-child(1) > label > .delivery-day-checkbox",
        mondayCheckbox: "div:nth-child(2) > label > .delivery-day-checkbox",
        tuesdayCheckbox: "div:nth-child(3) > label > .delivery-day-checkbox",
        wednesdayCheckbox: "div:nth-child(4) .delivery-day-checkbox",
        thursdayCheckbox: "div:nth-child(5) .delivery-day-checkbox",
        fridayCheckbox: "div:nth-child(6) .delivery-day-checkbox",
        saturdayCheckbox: "div:nth-child(7) .delivery-day-checkbox",

        //TODO: make locators unique
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
        updateSettings: ".dokan-btn.dokan-btn-danger.dokan-btn-theme",
        // updateSettings: "//input[@class='dokan-btn dokan-btn-danger dokan-btn-theme']",
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

    },



    //--------------------------------------------customer---------------------------------------------//


    customer: {

        //customer registration
        cRegistration: {
            regEmail: "#reg_email",
            regPassword: "#reg_password",
            regCustomer: "//input[@value='customer']",
            regCustomerWelcomeMessage: "//div[@class='woocommerce-MyAccount-content']//p[contains(text(),'Hello')]",
            //register button
            register: ".woocommerce-Button",
        },

        //customer home menus
        cHomeMenus: {
            home: "//a[contains(text(),'Home')]",
            cart: "//a[contains(text(),'Cart')]",
            checkout: "//a[contains(text(),'Checkout')]",
            dashboard: "//a[contains(text(),'Dashboard')]",
            myAccount: "//a[contains(text(),'My account')]",
            myOrders: "//a[contains(text(),'My Orders')]",
            samplePage: "//a[contains(text(),'Sample Page')]",
            shop: "//a[contains(text(),'Shop')]",
            storeList: "//a[contains(text(),'Store List')]"
        },

        //customer my account
        cMyAccount: {
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
            firstName: '#first-name',
            lastName: '#last-name',
            shopName: '#company-name',
            shopUrl: '#seller-url',
            address: '#seller-address',
            phone: '#shop-phone',
            companyName: '#dokan-company-name',
            companyId: '#dokan-company-id-number',
            vatNumber: '#dokan-vat-number',
            bankName: '#dokan-bank-name',
            bankIban: '#dokan-bank-iban',
            becomeAVendor: '.dokan-btn',

            //become wholesale customer
            becomeWholesaleCustomer: '#dokan-become-wholesale-customer-btn',
        },

        //customer orders
        cOrders: {
            view: ".order:nth-child(1) .button",
            // request warranty
            warrantyRequest: ".request_warranty",
            warrantyRequestItemName: "th > input:nth-child(1)",
            warrantyRequestItemQuantity: "#request_item_qty\\[\\]",
            warrantyRequestType: "#type",
            warrantyRequestDetails: "#warranty_request_details",
            warrantySubmitRequest: ".dokan-btn",

            //payNow
            payNow: "",//TODO:
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
            editBillingAddress: ".u-column1.col-1 .edit",
            editBillingAddress1: ".edit", // when shipping disabled
            billingFirstName: "#billing_first_name",
            billingLastName: "#billing_last_name",
            billingCompanyName: "#billing_company",
            billingCompanyIDOrEuidNumber: "#billing_dokan_company_id_number",
            billingVatOrTaxNumber: "#billing_dokan_vat_number",
            billingNameOfBank: "#billing_dokan_bank_name",
            billingBankIban: "#billing_dokan_bank_iban",
            billingCountryOrRegion: "#select2-billing_country-container",
            billingCountryOrRegionValues: ".select2-results ul li",
            billingStreetAddress: "#billing_address_1",
            billingStreetAddress2: "#billing_address_2",
            billingTownCity: "#billing_city",
            billingState: "#select2-billing_state-container",
            billingStateValues: ".select2-results ul li",
            billingZipCode: "#billing_postcode",
            billingPhone: "#billing_phone",
            billingEmailAddress: "#billing_email",
            billingSaveAddress: "p:nth-child(2) > .button",

            //shipping address
            editShippingAddress: ".u-column2.col-2 .edit",
            shippingFirstName: "#shipping_first_name",
            shippingLastName: "#shipping_last_name",
            shippingCompanyName: "#shipping_company",
            shippingCountryOrRegion: "#select2-shipping_country-container",
            shippingCountryOrRegionValues: ".select2-results ul li",
            shippingStreetAddress: "#shipping_address_1",
            shippingStreetAddress2: "#shipping_address_2",
            shippingTownCity: "#shipping_city",
            shippingState: "#select2-shipping_state-container",
            shippingStateValues: ".select2-results ul li",
            shippingZipCode: "#shipping_postcode",
            shippingSaveAddress: "p:nth-child(2) > .button",

            //success message
            successMessage: ".woocommerce-message",

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
            addPaymentMethod: ".woocommerce-MyAccount-content .button",

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
            visitStore: ".dokan-single-seller:nth-child(1) .dashicons",
            unFollowStore: ".dokan-single-seller:nth-child(1) .dokan-follow-store-button-label-unfollow"
        },

        // customer support tickets
        cSupportTickets: {
            //menus
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
            searchedProductName: ".woocommerce-loop-product__title",
            location: ".location-address > input",
            selectCategory: "#product_cat",
            radius: ".dokan-range-slider",
            sorting: ".woocommerce-ordering:nth-child(3) > .orderby",
            search: ".dokan-btn",
            //cart
            addToCart: ".button.add_to_cart_button.ajax_add_to_cart", //TODO: edit
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
            followUnFollowStore: ".dokan-single-seller:nth-child(1) .dokan-btn"
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

            //get support
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

            //product menus
            description: "#tab-title-description > a",
            reviews: "#tab-title-reviews",
            vendorInfo: "#tab-title-seller > a",
            location: "#tab-title-geolocation > a",
            moreProducts: "#tab-title-more_seller_product > a",
            warrantyPolicy: "#tab-title-refund_policy > a",
            productEnquiry: "#tab-title-seller_enquiry_form > a",

            // product reviews
            rating: (star) => `.star-${star}`,
            reviewMessage: "#comment",
            submitReview: "#submit",

            //product enquiry
            enquiryMessage: "#dokan-enq-message",
            submitEnquiry: ".dokan-btn-theme"
        },

        // customer cart
        cCart: {
            cartPageHeader: ".entry-title",
            //edit cart
            removeItem: ".woocommerce-cart-form__cart-item:nth-child(1) .remove",
            quantity: ".quantity .qty",//TODO:handle for multiple product
            couponCode: "#coupon_code",
            applyCoupon: ".button:nth-child(3)",
            reviewStar: (star) => `.jq-ry-rated-group > svg:nth-child(${star}) > polygon`,
            removeCoupon: (couponCode) => `.cart-discount.coupon-${couponCode.toLowerCase()} .woocommerce-remove-coupon`,
            updateCart: ".button:nth-child(2)",
            //shipping methods
            flatRate: "#shipping_method_0_flat_rate1",
            freeShipping: "#shipping_method_0_free_shipping2",
            //TODO: edit locator based on vendor
            //proceed To Checkout
            proceedToCheckout: ".checkout-button.button.wc-forward"

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
            billingCountryOrRegionValues: ".select2-results ul li",
            billingStreetAddress: "#billing_address_1",
            billingStreetAddress2: "#billing_address_2",
            billingTownCity: "#billing_city",
            billingPhone: "#billing_phone",
            billingEmailAddress: "#billing_email",
            billingState: "#select2-billing_state-container",
            billingStateValues: ".select2-results ul li",
            billingZipCode: "#billing_postcode",

            //shipping details
            shipToADifferentAddress: "#ship-to-different-address-checkbox",
            shippingFirstName: "#shipping_first_name",
            shippingLastName: "#shipping_last_name",
            shippingCompanyName: "#shipping_company",
            shippingCountryOrRegion: "select2-shipping_country-container",
            shippingCountryOrRegionValues: ".select2-results ul li",
            shippingStreetAddress: "#shipping_address_1",
            shippingStreetAddress2: "#shipping_address_2",
            shippingTownCity: "#shipping_city",
            shippingState: "select2-shipping_state-container",
            shippingStateValues: ".select2-results ul li",
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
            cashOnDelivery: ".payment_method_cod > label",
            paypalAdaptive: ".payment_method_dokan_paypal_adaptive > label",
            wireCardCreditCard: ".payment_method_dokan-moip-connect > label",
            //TODO:Razorpay,mangopay,paypal marketplace,strip,stripeExpress

            //place order
            placeOrder: "#place_order"

        },

        cPayWithStripe: {},
        cPayWithPaypalMarketPlace: {},
        cPayWithRazorpay: {},
        cPayWithMangoPay: {},
        cPayWithStripeExpress: {},

        cOrderReceived: {
            orderReceivedPageHeader: ".entry-title",

            orderNumber: ".woocommerce-order-overview__order.order strong",
            orderDate: ".woocommerce-order-overview__date.date strong",
            email: ".woocommerce-order-overview__email.email strong",
            total: ".woocommerce-order-overview__total.total strong ",
            paymentMethod: ".woocommerce-order-overview__payment-method.method strong ",

            //order details
            subtotal: "//th[normalize-space()='Subtotal:']//..//span",
            shipping: "//th[normalize-space()='Shipping:']//..//span",
            orderDetailsPaymentMethod: "//th[normalize-space()='Payment method:']//..//td",
            orderDetailsTotal: "//th[normalize-space()='Total:']//..//span",
        },

        cWooSelector: {
            wooCommerceSuccessMessage: ".woocommerce-message",
            wooCommerceError: ".woocommerce_error",
        },

        cBookings: {
            bookNow: ".wc-bookings-booking-form-button",
        },
        cAuctions: {},

    },



}