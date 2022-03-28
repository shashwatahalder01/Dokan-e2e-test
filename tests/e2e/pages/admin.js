const { createURL } = require("@wordpress/e2e-test-utils")
const base = require("../pages/base.js")
const helper = require("../../e2e/utils/helpers.js")


module.exports = {

  // locators

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
    // dashboardMenu: "#toplevel_page_dokan .wp-first-item > .wp-first-item",
    dashboardMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Dashboard']",
    // withdrawMenu: "#toplevel_page_dokan li:nth-child(3) > a",
    withdrawMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Withdraw']",
    // vendorsMenu: "#toplevel_page_dokan li:nth-child(4) > a",
    vendorsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Vendors']",
    // abuseReportsMenu: "#toplevel_page_dokan li:nth-child(5) > a",
    abuseReportsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Abuse Reports']",
    // storeReviewsMenu: "#toplevel_page_dokan li:nth-child(6) > a",
    storeReviewsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Store Reviews']",
    // storeSupportMenu: "#toplevel_page_dokan li:nth-child(7) > a",
    storeSupportMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Store Support']",
    // announcementsMenu: "#toplevel_page_dokan li:nth-child(8) > a",
    announcementsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Announcements']",
    // refundsMenu: "#toplevel_page_dokan li:nth-child(9) > a",
    refundsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Refunds']",
    // reportsMenu: "#toplevel_page_dokan li:nth-child(10) > a",
    reportsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Reports']",
    // modulesMenu: "#toplevel_page_dokan li:nth-child(11) > a",
    modulesMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Modules']",
    // toolsMenu: "#toplevel_page_dokan li:nth-child(12) > a",
    toolsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Tools']",
    // verificationsMenu: "#toplevel_page_dokan li:nth-child(13) > a",
    verificationsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Verifications']",
    // advertisingMenu: "#toplevel_page_dokan li:nth-child(14) > a",
    advertisingMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Advertising']",
    // wholesaleCustomerMenu: "#toplevel_page_dokan li:nth-child(15) > a",
    wholesaleCustomerMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Wholesale Customer']",
    // helpMenu: "#toplevel_page_dokan li:nth-child(16) > a",
    helpMenu: "//li[contains(@class,'toplevel_page_dokan')]//span[text()='Help']/..",
    // settingsMenu: "#toplevel_page_dokan li:nth-child(18) > a",
    settingsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Settings']",
    // licenseMenu: "#toplevel_page_dokan li:nth-child(19) > a",
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
      general: ".nav-tab:nth-child(2)",
      // general: '//a[@class="nav-tab" and contains(text(),"General")]',
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
        chooseAvailableCreditCardsValues: ".select2-results ul li", //TODO: use enter instead of class
        // chooseAvailableDirectPaymentServices: ".form-table:nth-child(14) tr:nth-child(2) .select2-selection__rendered",
        chooseAvailableDirectPaymentServices: '//label[contains(text(),"Choose Available Direct Payment Services")]/../..//input[@class="select2-search__field"]',
        chooseAvailableDirectPaymentServicesValues: ".select2-results ul li", //TODO: use enter instead of class
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
      reservePrice: '#\\_auction_reserved_price',
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
    general: "#menu-settings .wp-first-item > .wp-first-item",
    writing: "#menu-settings li:nth-child(3) > a",
    reading: "#menu-settings li:nth-child(4) > a",
    discussion: "#menu-settings li:nth-child(5) > a",
    media: "#menu-settings li:nth-child(6) > a",
    permalinks: "#menu-settings li:nth-child(7) > a",
    privacy: "#menu-settings li:nth-child(8) > a",

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

  //-------------------------------------------------- navigation ---------------------------------------------------//

  //methods
  async goToAdminDashboard() {
    await await page.goto(createURL('wp-admin/index.php'))

    const url = await page.url()
    expect(url).toMatch('wp-admin/index.php') //TODO: update url 2.update assertion
  },

  async goToDokanSettings() {
    // await page.goto(createURL('wp-admin/admin.php?page=dokan#/settings'))

    await base.hover(this.aDashboard.dokan)
    await base.click(this.dokan.settingsMenu)

    const url = await page.url()
    expect(url).toMatch('wp-admin/admin.php?page=dokan#/settings') //TODO: 1.update url 2.update assertion
  },

  async goToWooCommerceSettings() {
    // await page.goto(createURL('wp-admin/admin.php?page=wc-settings'))

    await base.hover(this.aDashboard.wooCommerce)
    await base.click(this.wooCommerce.settingsMenu)

    const url = await page.url()
    expect(url).toMatch('wp-admin/admin.php?page=wc-settings') //TODO: 1.update url  2.update assertion
  },



  //--------------------------------------------- wordpress site settings ------------------------------------------------//



  // admin set wordpress site settings
  async setWpSettings() {
    await base.hover(this.aDashboard.settings)

    //set general settings
    await base.click(this.settings.general)
    // enable user registration
    await page.click(this.settings.membership)
    //timezone
    await page.select(this.settings.timezone, 'UTC+6')
    await base.click(this.settings.generalSaveChanges)

    let successMessage = await base.getSelectorText(this.settings.updatedSuccessMessage)
    expect(successMessage).toMatch('Settings saved.')

    await this.setPermalinkSettings()

  },

  //admin set permalink settings
  async setPermalinkSettings() {
    //set permalinks settings
    await base.click(this.settings.permalinks)
    await page.click(this.settings.postName)
    await page.click(this.settings.customBase)
    await page.click(this.settings.permalinkSaveChanges)

    let permalinkSuccessMessage = await base.getSelectorText(this.settings.updatedSuccessMessage)
    expect(permalinkSuccessMessage).toMatch('Permalink structure updated.')

  },





  //----------------------------------------------- dokan settings ------------------------------------------------//



  //admin set dokan settings
  async setDokanSettings() {
    await this.goToDokanSettings()
    await this.setDokanGeneralSettings()
    // await this.setDokanSellingSettings()
    // await this.setDokanWithdrawSettings()
    // await this.setDokanAppearanceSettings()
    // await this.setDokanPrivacyPolicySettings()
    // await this.setDokanStoreSupportSettings()
    // await this.setDokanRmaSettings()
    // await this.setDokanWholesaleSettings()
    // await this.setDokanEuComplianceSettings()
    // await this.setDokanDeliveryTimeSettings()
    // await this.setDokanProductAdvertisingSettings()
    // await this.setDokanGeolocationSettings()
    // await this.setDokanProductReportAbuseSettings()
    // await this.setDokanSpmvSettings()
    // await this.setDokanVendorSubscriptionSettings()
  },

  //admin set dokan general settings
  async setDokanGeneralSettings() {
    await base.click(this.dokan.settings.general)
    //site options
    // await base.check(this.dokan.settings.adminAreaAccess)
    await base.clearAndType(this.dokan.settings.vendorStoreUrl, 'store')
    await page.select(this.dokan.settings.sellingProductTypes, 'sell_both')
    //vendor store options
    await base.check(this.dokan.settings.storeTermsAndConditions)
    await base.clearAndType(this.dokan.settings.storeProductPerPage, '12')
    await base.check(this.dokan.settings.enableTermsAndCondition)
    await page.select(this.dokan.settings.storCategory, 'none')
    await page.click(this.dokan.settings.generalSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan selling settings
  async setDokanSellingSettings() {
    await base.clickXpath(this.dokan.settings.sellingOptions)

    //commission settings
    await page.select(this.dokan.settings.commissionType, 'percentage')
    await base.clearAndType(this.dokan.settings.adminCommission, '10')
    await page.select(this.dokan.settings.shippingFeeRecipient, 'seller')
    await page.select(this.dokan.settings.taxFeeRecipient, 'seller')
    //vendor capability
    await base.check(this.dokan.settings.newVendorProductUpload)
    await base.check(this.dokan.settings.orderStatusChange)
    await page.select(this.dokan.settings.newProductStatus, 'publish')
    await base.check(this.dokan.settings.duplicateProduct)
    await base.check(this.dokan.settings.productMailNotification)
    await page.select(this.dokan.settings.productCategorySelection, 'single')
    await page.click(this.dokan.settings.vendorsCanCreateTags)
    await base.check(this.dokan.settings.discountEditingAllowVendorToAddDiscountOnProduct)
    await base.check(this.dokan.settings.discountEditingAllowVendorToAddDiscountOnOrder)
    await base.check(this.dokan.settings.vendorProductReview)
    await base.check(this.dokan.settings.guestProductEnquiry)
    await base.check(this.dokan.settings.enableMinMaxQuantities)
    await base.check(this.dokan.settings.enableMinMaxAmount)
    await page.click(this.dokan.settings.sellingOptionsSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan withdraw settings
  async setDokanWithdrawSettings() {
    await base.clickXpath(this.dokan.settings.withdrawOptions)
    //withdraw options
    await base.check(this.dokan.settings.withdrawMethodsPaypal)
    await base.check(this.dokan.settings.withdrawMethodsBankTransfer)
    await base.check(this.dokan.settings.withdrawMethodsDokanCustom)
    await base.check(this.dokan.settings.withdrawMethodsSkrill)
    await base.clearAndType(this.dokan.settings.customMethodName, 'Bksh')
    await base.clearAndType(this.dokan.settings.customMethodType, 'Email')
    await base.clearAndType(this.dokan.settings.minimumWithdrawAmount, '5')
    await base.check(this.dokan.settings.orderStatusForWithdrawCompleted)
    await base.check(this.dokan.settings.orderStatusForWithdrawProcessing)
    await base.clearAndType(this.dokan.settings.withdrawThreshold, '0')
    //disbursement schedule settings
    await base.check(this.dokan.settings.withdrawDisbursementManual)
    await base.check(this.dokan.settings.withdrawDisbursementAuto)

    await base.check(this.dokan.settings.disburseMentQuarterlySchedule)
    await base.check(this.dokan.settings.disburseMentMonthlySchedule)
    await base.check(this.dokan.settings.disburseMentBiweeklySchedule)
    await base.check(this.dokan.settings.disburseMentWeeklySchedule)

    // quarterly schedule
    await page.select(this.dokan.settings.quarterlyScheduleMonth, 'march')
    await page.select(this.dokan.settings.quarterlyScheduleWeek, '1')
    await page.select(this.dokan.settings.quarterlyScheduleDay, 'monday')
    // monthly schedule
    await page.select(this.dokan.settings.monthlyScheduleWeek, '1')
    await page.select(this.dokan.settings.monthlyScheduleDay, 'monday')
    // biweekly schedule
    await page.select(this.dokan.settings.biweeklyScheduleWeek, '1')
    await page.select(this.dokan.settings.biweeklyScheduleDay, 'monday')
    // weekly schedule
    await page.select(this.dokan.settings.weeklyScheduleDay, 'monday')
    await page.click(this.dokan.settings.withdrawSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan appearance settings
  async setDokanAppearanceSettings() {
    await base.clickXpath(this.dokan.settings.appearance)

    await page.click(this.dokan.settings.showMapOnStorePage)
    await base.check(this.dokan.settings.mapApiSourceGoogleMaps)
    await base.clearAndType(this.dokan.settings.googleMapApiKey, 'apiKey')
    await page.click(this.dokan.settings.storeHeaderTemplate2)
    await page.click(this.dokan.settings.storeHeaderTemplate1)
    await base.clearAndType(this.dokan.settings.storeBannerWidth, '625')
    await base.clearAndType(this.dokan.settings.storeBannerHeight, '300')
    await base.check(this.dokan.settings.storeOpeningClosingTimeWidget)
    await base.check(this.dokan.settings.showVendorInfo)
    await page.click(this.dokan.settings.appearanceSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan privacy policy settings
  async setDokanPrivacyPolicySettings() {
    await base.clickXpath(this.dokan.settings.privacyPolicy)

    await base.check(this.dokan.settings.enablePrivacyPolicy)
    await page.select(this.dokan.settings.privacyPage, '2')
    await base.clearAndType(this.dokan.settings.privacyPolicyMessage, 'Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our [dokan_privacy_policy]')

    await page.click(this.dokan.settings.privacyPolicySaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan store support settings
  async setDokanStoreSupportSettings() {
    await base.clickXpath(this.dokan.settings.storeSupport)

    await base.check(this.dokan.settings.displayOnOrderDetails)
    await page.select(this.dokan.settings.displayOnSingleProductPage, 'Get Support')
    await base.clearAndType(this.dokan.settings.supportButtonLabel, 'Get Support')
    await page.click(this.dokan.settings.storeSupportSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan rma settings
  async setDokanRmaSettings() {
    await base.clickXpath(this.dokan.settings.rma)

    await page.select(this.dokan.settings.orderStatus, 'processing')
    await page.select(this.dokan.settings.enableRefundRequests, 'yes')
    await page.select(this.dokan.settings.enableCouponRequests, 'yes')
    await base.deleteIfExists(this.dokan.settings.reasonsForRmaSingle('Defective'))
    await base.clearAndType(this.dokan.settings.reasonsForRmaInput, 'Defective')
    await page.click(this.dokan.settings.reasonsForRmaAdd)
    await base.deleteIfExists(this.dokan.settings.reasonsForRmaSingle('Wrong Product'))
    await base.clearAndType(this.dokan.settings.reasonsForRmaInput, 'Wrong Product')
    await page.click(this.dokan.settings.reasonsForRmaAdd)
    await base.deleteIfExists(this.dokan.settings.reasonsForRmaSingle('Other'))
    await base.clearAndType(this.dokan.settings.reasonsForRmaInput, 'Other')
    await page.click(this.dokan.settings.reasonsForRmaAdd)

    let iframe = await base.switchToIframe(this.dokan.settings.refundPolicyIframe)
    await base.iframeClearAndType(iframe, this.dokan.settings.refundPolicyHtmlBody, 'Refund Policy')

    await page.click(this.dokan.settings.rmaSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  // admin set dokan wholesale settings
  async setDokanWholesaleSettings() {
    await base.clickXpath(this.dokan.settings.wholesale)

    await base.check(this.dokan.settings.whoCanSeeWholesalePriceAllUsers)
    await base.check(this.dokan.settings.showWholesalePriceOnShopArchive)
    await page.select(this.dokan.settings.needApprovalForCustomer, 'no')
    await page.click(this.dokan.settings.wholesaleSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan eu compliance settings
  async setDokanEuComplianceSettings() {
    await base.clickXpath(this.dokan.settings.euComplianceFields)

    await base.check(this.dokan.settings.vendorExtraFieldsCompanyName)
    await base.check(this.dokan.settings.vendorExtraFieldsCompanyIdOrEuidNumber)
    await base.check(this.dokan.settings.vendorExtraFieldsVatOrTaxNumber)
    await base.check(this.dokan.settings.vendorExtraFieldsNameOfBank)
    await base.check(this.dokan.settings.vendorExtraFieldsBankIban)
    await base.check(this.dokan.settings.displayInVendorRegistrationForm)
    await base.check(this.dokan.settings.customerExtraFieldsCompanyIdOrEuidNumber)
    await base.check(this.dokan.settings.customerExtraFieldsVatOrTaxNumber)
    await base.check(this.dokan.settings.customerExtraFieldsNameOfBank)
    await base.check(this.dokan.settings.customerExtraFieldsBankIban)
    await base.check(this.dokan.settings.enableGermanizedSupportForVendors)
    await base.check(this.dokan.settings.vendorsWillBeAbleToOverrideInvoiceNumber)
    await page.click(this.dokan.settings.euComplianceFieldsSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan delivery time settings
  async setDokanDeliveryTimeSettings() {
    await base.clickXpath(this.dokan.settings.deliveryTime)

    await base.check(this.dokan.settings.allowVendorSettings)
    await base.clearAndType(this.dokan.settings.deliveryDateLabel, 'Delivery Date')
    await base.clearAndType(this.dokan.settings.deliveryBlockedBuffer, '0')
    await base.clearAndType(this.dokan.settings.deliveryBoxInfo, 'This store needs %DAY% day(s) to process your delivery request')
    await base.check(this.dokan.settings.requireDeliveryDateAndTime)
    await base.check(this.dokan.settings.deliveryDaySunday)
    await base.check(this.dokan.settings.deliveryDayMonday)
    await base.check(this.dokan.settings.deliveryDayTuesday)
    await base.check(this.dokan.settings.deliveryDayWednesday)
    await base.check(this.dokan.settings.deliveryDayThursday)
    await base.check(this.dokan.settings.deliveryDayFriday)
    await base.check(this.dokan.settings.deliveryDaySaturday)
    await base.clearAndType(this.dokan.settings.openingTime, '12:00 AM')
    await base.clearAndType(this.dokan.settings.closingTime, '11:30 PM')
    await base.clearAndType(this.dokan.settings.timeSlot, '30')
    await base.clearAndType(this.dokan.settings.orderPerSlot, '0')
    await page.click(this.dokan.settings.deliveryTimeSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan product advertising settings
  async setDokanProductAdvertisingSettings() {
    await base.clickXpath(this.dokan.settings.productAdvertising)

    await base.clearAndType(this.dokan.settings.noOfAvailableSlot, '100')
    await base.clearAndType(this.dokan.settings.expireAfterDays, '10')
    await base.check(this.dokan.settings.vendorCanPurchaseAdvertisement)
    await base.clearAndType(this.dokan.settings.advertisementCostUsd, '15')
    await base.check(this.dokan.settings.enableAdvertisementInSubscription)
    await base.check(this.dokan.settings.markAdvertisedProductAsFeatured)
    await base.check(this.dokan.settings.displayAdvertisedProductOnTop)
    await base.check(this.dokan.settings.outOfStockVisibility)
    await page.click(this.dokan.settings.productAdvertisingSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan geolocation settings
  async setDokanGeolocationSettings() {
    await base.clickXpath(this.dokan.settings.geolocation)

    await page.select(this.dokan.settings.locationMapPosition, 'top')
    await page.select(this.dokan.settings.showMap, 'all')
    await base.check(this.dokan.settings.showFiltersBeforeLocationMap)
    await base.check(this.dokan.settings.productLocationTab)
    await page.select(this.dokan.settings.radiusSearchUnit, 'km')
    await base.clearAndType(this.dokan.settings.radiusSearchMinimumDistance, '0')
    await base.clearAndType(this.dokan.settings.radiusSearchMaximumDistance, '10')
    await base.clearAndType(this.dokan.settings.mapZoomLevel, '11')
    // await base.clearAndType(this.dokan.settings.defaultLocation, 'New York, NY, USA')//TODO: add default location
    await page.click(this.dokan.settings.geolocationSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan product report abuse settings
  async setDokanProductReportAbuseSettings() {
    await base.clickXpath(this.dokan.settings.productReportAbuse)
    await base.deleteIfExists(this.dokan.settings.reasonsForAbuseReportSingle('This product is fake'))
    await base.clearAndType(this.dokan.settings.reasonsForAbuseReportInput, 'This product is fake')
    await page.click(this.dokan.settings.reasonsForAbuseReportAdd)
    await page.click(this.dokan.settings.productReportAbuseSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan spmv settings
  async setDokanSpmvSettings() {
    await base.clickXpath(this.dokan.settings.singleProductMultiVendor)

    await base.check(this.dokan.settings.enableSingleProductMultipleVendor)
    await base.clearAndType(this.dokan.settings.sellItemButtonText, 'Sell This Item')
    await base.clearAndType(this.dokan.settings.availableVendorDisplayAreaTitle, 'Other Available Vendor')
    await page.select(this.dokan.settings.availableVendorSectionDisplayPosition, 'below_tabs')
    await page.select(this.dokan.settings.showSpmvProducts, 'show_all')
    await page.click(this.dokan.settings.singleProductMultiVendorSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },

  //admin set dokan vendor subscription settings
  async setDokanVendorSubscriptionSettings() {
    await base.clickXpath(this.dokan.settings.vendorSubscription)

    await page.select(this.dokan.settings.subscription, '2')
    await base.check(this.dokan.settings.enableProductSubscription)
    await base.check(this.dokan.settings.enableSubscriptionInRegistrationForm)
    await base.check(this.dokan.settings.enableEmailNotification)
    await base.clearAndType(this.dokan.settings.noOfDays, '2')
    await page.select(this.dokan.settings.productStatus, 'draft')
    await base.clearAndType(this.dokan.settings.cancellingEmailSubject, 'Subscription Package Cancel notification')
    await base.clearAndType(this.dokan.settings.cancellingEmailBody, 'Dear subscriber, Your subscription has expired. Please renew your package to continue using it.')
    await base.clearAndType(this.dokan.settings.alertEmailSubject, 'Subscription Ending Soon')
    await base.clearAndType(this.dokan.settings.alertEmailBody, 'Dear subscriber, Your subscription will be ending soon. Please renew your package in a timely')
    await page.click(this.dokan.settings.vendorSubscriptionSaveChanges)

    let successMessage = await base.getSelectorText(this.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch('Setting has been saved successfully.')
  },



  //-------------------------------------------------- tax ----------------------------------------------------//


  //admin enable tax
  async enableTax() {
    // enable tax
    await base.check(this.wooCommerce.settings.enableTaxes)
    await base.click(this.wooCommerce.settings.generalSaveChanges)

    let successMessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch('Your settings have been saved.')

  },

  //admin add standard tax rate
  async addStandardTaxRate() {

    //enable tax
    await this.enableTax()

    // set tax rate
    await base.click(this.wooCommerce.settings.tax)
    await base.click(this.wooCommerce.settings.standardRates)
    let taxIsVisible = await base.isVisible(page, this.wooCommerce.settings.taxRate)
    if (taxIsVisible === false) {
      await page.click(this.wooCommerce.settings.insertRow)
    }
    await base.clearAndType(this.wooCommerce.settings.taxRate, '5')
    await page.click(this.wooCommerce.settings.taxTable) //TODO: recheck if it required
    await page.waitForTimeout(1000)
    await page.click(this.wooCommerce.settings.taxRateSaveChanges)
    await page.waitForTimeout(1000)

    let newTaxRate = await base.getElementValue(this.wooCommerce.settings.taxRate)
    expect(newTaxRate).toBe('5.0000')


  },


  //----------------------------------------------- woocommerce settings ------------------------------------------------//



  //admin setup wooCommerce settings
  async setWoocommerceSettings() {
    await this.goToWooCommerceSettings()
    await this.addStandardTaxRate()
    await this.addShippingMethod('US', 'country:US', 'flat_rate', 'Flat rate')
    await this.addShippingMethod('US', 'country:US', 'free_shipping', 'Free shipping')
    // await this.addShippingMethod('US', 'country:US', 'local_pickup', 'Local pickup')
    // await this.addShippingMethod('US', 'country:US', 'dokan_table_rate_shipping', 'Vendor Table Rate')
    // await this.addShippingMethod('US', 'country:US', 'dokan_distance_rate_shipping', 'Vendor Distance Rate')
    await this.addShippingMethod('US', 'country:US', 'dokan_vendor_shipping', 'Vendor Shipping')
    // await this.deleteShippingZone('US')
    // await this.deleteShippingMethod('US', 'Flat rate')
  },


  //----------------------------------------------- shipping methods ------------------------------------------------//



  // admin add shipping method
  async addShippingMethod(shippingZone, shippingCountry, selectShippingMethod, shippingMethod) {

    await base.click(this.wooCommerce.settings.shipping)

    let zoneIsVisible = await base.isVisible(page, this.wooCommerce.settings.shippingZoneCell(shippingZone))
    if (zoneIsVisible === false) {
      //add shipping zone
      await base.click(this.wooCommerce.settings.addShippingZone)
      await base.clearAndType(this.wooCommerce.settings.zoneName, shippingZone)
      // await page.select(this.wooCommerce.settings.zoneRegions, shippingCountry)
      await page.click(this.wooCommerce.settings.zoneRegions)
      await page.type(this.wooCommerce.settings.zoneRegions, 'United States (US)')
      await page.keyboard.press('Enter')
    } else {
      // edit shipping zone
      await base.hoverXpath(this.wooCommerce.settings.shippingZoneCell(shippingZone))
      await base.click(this.wooCommerce.settings.editShippingMethod(shippingZone))
    }

    let methodIsVisible = await base.isVisible(page, this.wooCommerce.settings.shippingMethodCell(helper.replaceAndCapitalize(shippingMethod)))
    if (methodIsVisible === false) {
      // add shipping method
      await page.click(this.wooCommerce.settings.addShippingMethods)
      await page.select(this.wooCommerce.settings.shippingMethod, selectShippingMethod)
      await base.click(this.wooCommerce.settings.addShippingMethod)
      await page.waitForTimeout(1000)
      //set shipping method options
      await base.hoverXpath(this.wooCommerce.settings.shippingMethodCell(shippingMethod))
      await base.clickXpath(this.wooCommerce.settings.editShippingMethod(shippingMethod))
    } else {
      //edit shipping method
      await base.hoverXpath(this.wooCommerce.settings.shippingMethodCell(shippingMethod))
      await base.clickXpath(this.wooCommerce.settings.editShippingMethod(shippingMethod))
    }

    switch (selectShippingMethod) {
      case 'flat_rate':
        //flat rate
        await base.clearAndType(this.wooCommerce.settings.flatRateMethodTitle, shippingMethod)
        await page.select(this.wooCommerce.settings.flatRateTaxStatus, 'taxable')
        await base.clearAndType(this.wooCommerce.settings.flatRateCost, '20')
        break;

      case 'free_shipping':
        //free shipping
        await base.clearAndType(this.wooCommerce.settings.freeShippingTitle, shippingMethod)
        // await page.select(this.wooCommerce.settings.freeShippingRequires, 'min_amount')
        // await base.clearAndType(this.wooCommerce.settings.freeShippingMinimumOrderAmount, '200')
        // await base.check(this.wooCommerce.settings.freeShippingCouponsDiscounts)
        break;

      case 'local_pickup':
        //local pickup
        await base.clearAndType(this.wooCommerce.settings.localPickupTitle, shippingMethod)
        await page.select(this.wooCommerce.settings.localPickupTaxStatus, 'taxable')
        await base.clearAndType(this.wooCommerce.settings.localPickupCost, '20')
        break;

      case 'dokan_table_rate_shipping':
        //dokan table rate shipping
        await base.clearAndType(this.wooCommerce.settings.dokanTableRateShippingMethodTitle, shippingMethod)
        break;

      case 'dokan_distance_rate_shipping':
        //dokan distance rate shipping
        await base.clearAndType(this.wooCommerce.settings.dokanDistanceRateShippingMethodTitle, shippingMethod)
        break;

      case 'dokan_vendor_shipping':
        //vendor shipping
        await base.clearAndType(this.wooCommerce.settings.vendorShippingMethodTitle, shippingMethod)
        await page.select(this.wooCommerce.settings.vendorShippingTaxStatus, 'taxable')

      default:
        break;
    }

    await page.click(this.wooCommerce.settings.shippingMethodSaveChanges)
    await base.waitForSelector(this.wooCommerce.settings.shippingMethodCell(shippingMethod))
    let shippingMethodIsVisible = await base.isVisible(page, this.wooCommerce.settings.shippingMethodCell(shippingMethod))
    expect(shippingMethodIsVisible).toBe(true)

  },

  //admin delete shipping zone
  async deleteShippingZone(shippingZone) {
    await base.click(this.wooCommerce.settings.shipping)

    await base.hoverXpath(this.wooCommerce.settings.shippingZoneCell(shippingZone))
    await base.alert('accept')
    await base.clickXpath(this.wooCommerce.settings.deleteShippingZone(shippingZone))
    await page.waitForTimeout(1000)

    let shippingZoneIsVisible = await base.isVisible(page, this.wooCommerce.settings.shippingZoneCell(shippingZone))
    expect(shippingZoneIsVisible).toBe(false)
  },

  //admin delete shipping method
  async deleteShippingMethod(shippingZone, shippingMethod) {
    await base.click(this.wooCommerce.settings.shipping)

    await base.hoverXpath(this.wooCommerce.settings.shippingZoneCell(shippingZone))
    await base.click(this.wooCommerce.settings.editShippingZone(shippingZone))
    await base.hoverXpath(this.wooCommerce.settings.shippingMethodCell(shippingMethod))
    await base.clickXpath(this.wooCommerce.settings.deleteShippingMethod(shippingMethod))
    await page.click(this.wooCommerce.settings.shippingZoneSaveChanges)

    let shippingMethodIsVisible = await base.isVisible(page, this.wooCommerce.settings.shippingMethodCell(shippingMethod))
    expect(shippingMethodIsVisible).toBe(false)
  },



  //----------------------------------------------- payment methods ------------------------------------------------//



  //admin setup payment settings
  async setPaymentSettings() {
    await this.goToWooCommerceSettings()
    await this.setupBasicPaymentMethods()
    await this.setupStripeConnect()
    await this.setupPaypalMarketPlace()
    await this.setupDokanMangoPay()
    await this.setupDokanRazorpay()
    await this.setupStripeExpress()
  },

  //admin set currency
  async setCurrency(currency) {
    await this.goToWooCommerceSettings()
    let currentCurrency = await base.getSelectorText(this.wooCommerce.settings.currency)
    if (currentCurrency !== currency) {
      await page.click(this.wooCommerce.settings.currency)
      await page.type(this.wooCommerce.settings.currency, currency)
      await page.keyboard.press('Enter')
      await base.click(this.wooCommerce.settings.generalSaveChanges)

      let successMessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
      expect(successMessage).toMatch('Your settings have been saved.')
    }
  },

  //admin enable payment methods via slider
  async enablePaymentMethod(selector) {
    let classValue = await base.getElementClassValue(selector)
    if (classValue.includes('woocommerce-input-toggle--disabled')) {
      await base.clickXpath(selector)
    } else {
      await base.clickXpath(selector)
      await page.waitForTimeout(1000)
      await base.clickXpath(selector)
    }

    let classValue1 = await base.getElementClassValue(selector)
    expect(classValue1).toContain('woocommerce-input-toggle--enabled')
  },

  //admin setup basic payment methods
  async setupBasicPaymentMethods() {
    await base.click(this.wooCommerce.settings.payments)
    //bank transfer
    await this.enablePaymentMethod(this.wooCommerce.settings.enableDirectBankTransfer)
    //check payments
    await this.enablePaymentMethod(this.wooCommerce.settings.enableCheckPayments)
    //cash on delivery
    await this.enablePaymentMethod(this.wooCommerce.settings.enableCashOnDelivery)

    await base.click(this.wooCommerce.settings.paymentMethodsSaveChanges)

    let successMessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch('Your settings have been saved.')
  },

  //admin setup Stripe
  async setupStripeConnect() {
    await this.setCurrency('United States (US) dollar ($)')

    await base.click(this.wooCommerce.settings.payments)
    await base.click(this.wooCommerce.settings.setupDokanStripeConnect)
    //setup strip connect
    await base.check(this.wooCommerce.settings.stripe.enableDisableStripe)
    await base.clearAndType(this.wooCommerce.settings.stripe.title, 'Dokan Credit card (Stripe)')
    await base.clearAndType(this.wooCommerce.settings.stripe.description, 'Pay with your credit card via Stripe.')
    await base.check(this.wooCommerce.settings.stripe.nonConnectedSellers)
    await base.check(this.wooCommerce.settings.stripe.displayNoticeToConnectSeller)
    await base.clearAndType(this.wooCommerce.settings.stripe.displayNoticeInterval, '7')
    await base.check(this.wooCommerce.settings.stripe.threeDSecureAndSca)
    await base.check(this.wooCommerce.settings.stripe.sellerPaysTheProcessingFeeIn3DsMode)
    await base.check(this.wooCommerce.settings.stripe.testMode)
    await base.check(this.wooCommerce.settings.stripe.stripeCheckout)
    await page.click(this.wooCommerce.settings.stripe.stripeCheckoutLocale)
    await page.type(this.wooCommerce.settings.stripe.stripeCheckoutLocale, 'English')
    // await page.type('.select2-search__field', 'English')
    await page.keyboard.press('Enter')
    await base.check(this.wooCommerce.settings.stripe.savedCards)
    //test credentials
    await base.clearAndType(this.wooCommerce.settings.stripe.testPublishableKey, 'pk_test_')
    await base.clearAndType(this.wooCommerce.settings.stripe.testSecretKey, 'sk_test_')
    await base.clearAndType(this.wooCommerce.settings.stripe.testClientId, 'ca_')
    await base.click(this.wooCommerce.settings.stripe.stripeSaveChanges)

    let successMessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch('Your settings have been saved.')
  },

  // admin setup dokan paypal marketplace
  async setupPaypalMarketPlace() {
    await this.setCurrency('United States (US) dollar ($)')

    await base.click(this.wooCommerce.settings.payments)
    await base.click(this.wooCommerce.settings.setupDokanPayPalMarketplace)
    // setup paypal marketplace
    await base.check(this.wooCommerce.settings.paypalMarketPlace.enableDisablePayPalMarketplace)
    await base.clearAndType(this.wooCommerce.settings.paypalMarketPlace.title, 'PayPal Marketplace')
    await base.clearAndType(this.wooCommerce.settings.paypalMarketPlace.description, 'Pay via PayPal Marketplace you can pay with your credit card if you don\'t have a PayPal account')
    await base.clearAndType(this.wooCommerce.settings.paypalMarketPlace.payPalMerchantIdPartnerId, 'partner_')
    // api credentials
    await base.check(this.wooCommerce.settings.paypalMarketPlace.payPalSandbox)
    await base.clearAndType(this.wooCommerce.settings.paypalMarketPlace.sandboxClientId, 'client_')
    await base.clearAndType(this.wooCommerce.settings.paypalMarketPlace.sandBoxClientSecret, 'secret_')
    await base.clearAndType(this.wooCommerce.settings.paypalMarketPlace.payPalPartnerAttributionId, 'weDevs_SP_Dokan')
    await page.click(this.wooCommerce.settings.paypalMarketPlace.disbursementMode)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.paypalMarketPlace.disbursementModeValues, 'Delayed')
    await page.click(this.wooCommerce.settings.paypalMarketPlace.paymentButtonType)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.paypalMarketPlace.paymentButtonTypeValues, 'Smart Payment Buttons')
    await base.clearAndType(this.wooCommerce.settings.paypalMarketPlace.marketplaceLogo, 'http://localhost:8889/wp-content/plugins/dokan/assets/images/dokan-logo.png')//TODO: replace with base url
    await base.check(this.wooCommerce.settings.paypalMarketPlace.displayNoticeToConnectSeller)
    await base.check(this.wooCommerce.settings.paypalMarketPlace.sendAnnouncementToConnectSeller)
    await base.clearAndType(this.wooCommerce.settings.paypalMarketPlace.sendAnnouncementInterval, '7')
    await base.click(this.wooCommerce.settings.paypalMarketPlace.paypalMarketPlaceSaveChanges)

    let successMessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch('Your settings have been saved.')
  },


  //admin setup dokan mangopay
  async setupDokanMangoPay() {
    await this.setCurrency('Euro (€)')

    await base.click(this.wooCommerce.settings.payments)
    await base.click(this.wooCommerce.settings.setupDokanMangoPay)
    // setup dokan mangopay
    await base.check(this.wooCommerce.settings.dokanMangoPay.enableDisableMangoPayPayment)
    await base.clearAndType(this.wooCommerce.settings.dokanMangoPay.title, 'MangoPay')
    await base.clearAndType(this.wooCommerce.settings.dokanMangoPay.description, 'Pay via MangoPay')
    //api credentials
    await base.check(this.wooCommerce.settings.dokanMangoPay.mangoPaySandbox)
    await base.clearAndType(this.wooCommerce.settings.dokanMangoPay.sandboxClientId, 'client_')
    await base.clearAndType(this.wooCommerce.settings.dokanMangoPay.sandBoxApiKey, 'secret_')
    // payment options
    await base.clickXpath(this.wooCommerce.settings.dokanMangoPay.chooseAvailableCreditCards)
    // await base.type(this.wooCommerce.settings.dokanMangoPay.chooseAvailableCreditCards, 'CB/Visa/Mastercard')
    // await page.keyboard.press('Enter')
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.chooseAvailableCreditCardsValues, 'CB/Visa/Mastercard')
    await base.clickXpath(this.wooCommerce.settings.dokanMangoPay.chooseAvailableDirectPaymentServices)
    // await base.type(this.wooCommerce.settings.dokanMangoPay.chooseAvailableDirectPaymentServices, 'Sofort*')
    // await page.keyboard.press('Enter')
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.chooseAvailableDirectPaymentServicesValues, 'Sofort*')
    await base.check(this.wooCommerce.settings.dokanMangoPay.savedCards)
    // fund transfers and payouts
    await page.click(this.wooCommerce.settings.dokanMangoPay.transferFunds)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.transferFundsValues, 'On payment completed')
    await base.check(this.wooCommerce.settings.dokanMangoPay.payoutMode)
    // types and requirements of vendors
    await page.click(this.wooCommerce.settings.dokanMangoPay.typeOfVendors)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.typeOfVendorsValues, 'Either')
    await page.click(this.wooCommerce.settings.dokanMangoPay.businessRequirement)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.businessRequirementValues, 'Any')
    // advanced settings
    await base.check(this.wooCommerce.settings.dokanMangoPay.displayNoticeToNonConnectedSellers)
    await base.check(this.wooCommerce.settings.dokanMangoPay.sendAnnouncementToNonConnectedSellers)
    await base.clearAndType(this.wooCommerce.settings.dokanMangoPay.announcementInterval, '7')
    await base.click(this.wooCommerce.settings.dokanMangoPay.dokanMangopaySaveChanges)

    let successMessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch('Your settings have been saved.')
  },

  //admin setup dokan razorpay
  async setupDokanRazorpay() {
    await this.setCurrency('Indian rupee (₹)')

    await base.click(this.wooCommerce.settings.payments)
    await base.click(this.wooCommerce.settings.setupDokanRazorpay)
    //setup dokan razorpay
    await base.check(this.wooCommerce.settings.dokanRazorpay.enableDisableDokanRazorpay)
    await base.clearAndType(this.wooCommerce.settings.dokanRazorpay.title, 'Razorpay')
    await base.clearAndType(this.wooCommerce.settings.dokanRazorpay.description, 'Pay securely by Credit or Debit card or Internet Banking through Razorpay.')
    // api credentials
    await base.check(this.wooCommerce.settings.dokanRazorpay.razorpaySandbox)
    await base.clearAndType(this.wooCommerce.settings.dokanRazorpay.testKeyId, 'rzp_test')
    await base.clearAndType(this.wooCommerce.settings.dokanRazorpay.testKeySecret, 'rzp_test')
    await page.click(this.wooCommerce.settings.dokanRazorpay.disbursementMode)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanRazorpay.disbursementModeValues, 'Delayed')
    await base.check(this.wooCommerce.settings.dokanRazorpay.sellerPaysTheProcessingFee)
    await base.check(this.wooCommerce.settings.dokanRazorpay.displayNoticeToConnectSeller)
    await base.check(this.wooCommerce.settings.dokanRazorpay.sendAnnouncementToConnectSeller)
    await base.clearAndType(this.wooCommerce.settings.dokanRazorpay.sendAnnouncementInterval, '7')
    await base.click(this.wooCommerce.settings.dokanRazorpay.dokanRazorpaySaveChanges)

    let successMessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch('Your settings have been saved.')
  },

  //admin setup Stripe Express
  async setupStripeExpress() {
    await this.setCurrency('United States (US) dollar ($)')

    await base.click(this.wooCommerce.settings.payments)
    await base.click(this.wooCommerce.settings.setupDokanStripeExpress)

    // stripe express
    await base.check(this.wooCommerce.settings.stripeExpress.enableOrDisableStripeExpress)
    await base.clearAndType(this.wooCommerce.settings.stripeExpress.title, 'Dokan Express Payment Methods')
    await base.clearAndType(this.wooCommerce.settings.stripeExpress.description, 'Pay with your credit card via Stripe.')
    // api credentials
    await base.check(this.wooCommerce.settings.stripeExpress.testMode)
    await base.clearAndType(this.wooCommerce.settings.stripeExpress.testPublishableKey, 'pk_test_')
    await base.clearAndType(this.wooCommerce.settings.stripeExpress.testSecretKey, 'sk_test_')
    await base.clearAndType(this.wooCommerce.settings.stripeExpress.testWebhookSecret, 'webHook_test_')
    // payment and disbursement
    await base.clickXpath(this.wooCommerce.settings.stripeExpress.choosePaymentMethods)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.stripeExpress.choosePaymentMethodsValues, 'Credit/Debit Card')
    await base.clickXpath(this.wooCommerce.settings.stripeExpress.choosePaymentMethods)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.stripeExpress.choosePaymentMethodsValues, 'iDEAL')
    await base.check(this.wooCommerce.settings.stripeExpress.takeProcessingFeesFromSellers)
    await base.check(this.wooCommerce.settings.stripeExpress.savedCards)
    await base.check(this.wooCommerce.settings.stripeExpress.capturePaymentsManually)
    await page.click(this.wooCommerce.settings.stripeExpress.disburseFunds)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.stripeExpress.disbursementModeValues, 'Delayed')
    await base.clearAndType(this.wooCommerce.settings.stripeExpress.customerBankStatement, 'Dokan')
    // payment request options (apple pay/google pay)
    await base.check(this.wooCommerce.settings.stripeExpress.paymentRequestButtons)
    await page.select(this.wooCommerce.settings.stripeExpress.buttonType, 'default')
    await page.select(this.wooCommerce.settings.stripeExpress.buttonTheme, 'dark')
    await base.clickXpath(this.wooCommerce.settings.stripeExpress.buttonLocations)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.stripeExpress.buttonLocationsValues, 'Product')
    await base.clickXpath(this.wooCommerce.settings.stripeExpress.buttonLocations)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.stripeExpress.buttonLocationsValues, 'Checkout')
    // advanced settings
    await base.check(this.wooCommerce.settings.stripeExpress.displayNoticeToNonConnectedSellers)
    await base.check(this.wooCommerce.settings.stripeExpress.sendAnnouncementToNonConnectedSellers)
    await base.clearAndType(this.wooCommerce.settings.stripeExpress.announcementInterval, '7')
    await base.click(this.wooCommerce.settings.stripeExpress.stripeExpressSaveChanges)

    let successMessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch('Your settings have been saved.')

  },



  //----------------------------------------------- Vendors ---------------------------------------------------//



  //admin add new vendors
  async addVendor(firstName, lastName, storeName, phoneNumber, email, userName, password, companyName, companyIdEuidNumber, vatOrTaxNumber, nameOfBank, bankIban,
    street1, street2, city, zip, country, state, accountName, accountNumber, bankName, bankAddress, routingNumber, iban, swift, payPalEmail) {

    await base.hover(this.aDashboard.dokan)
    await base.click(this.dokan.vendorsMenu)

    //add new vendor
    await page.click(this.dokan.vendors.addNewVendor)
    // account info
    await page.type(this.dokan.vendors.firstName, firstName)
    await page.type(this.dokan.vendors.lastName, lastName)
    await page.type(this.dokan.vendors.storeName, storeName)
    await page.type(this.dokan.vendors.phoneNumber, phoneNumber)
    await page.type(this.dokan.vendors.email, email)
    await page.click(this.dokan.vendors.generatePassword)
    await page.waitForTimeout(1000)
    await base.clearAndType(this.dokan.vendors.password, password)
    await page.type(this.dokan.vendors.username, userName)
    await page.type(this.dokan.vendors.companyName, companyName)
    await page.type(this.dokan.vendors.companyIdEuidNumber, companyIdEuidNumber)
    await page.type(this.dokan.vendors.vatOrTaxNumber, vatOrTaxNumber)
    await page.type(this.dokan.vendors.nameOfBank, nameOfBank)
    await page.type(this.dokan.vendors.bankIban, bankIban)
    await page.click(this.dokan.vendors.next)

    await page.waitForSelector(this.dokan.vendors.street1)
    // address  
    await page.type(this.dokan.vendors.street1, street1)
    await page.type(this.dokan.vendors.street2, street2)
    await page.type(this.dokan.vendors.city, city)
    await page.type(this.dokan.vendors.zip, zip)
    await page.click(this.dokan.vendors.country)
    await page.type(this.dokan.vendors.countryInput, country)
    await page.keyboard.press('Enter')
    await page.click(this.dokan.vendors.state)
    await page.type(this.dokan.vendors.state, state)
    await page.click(this.dokan.vendors.next)

    await page.waitForSelector(this.dokan.vendors.accountName)
    // payment options  
    await page.type(this.dokan.vendors.accountName, accountName)
    await page.type(this.dokan.vendors.accountNumber, accountNumber)
    await page.type(this.dokan.vendors.bankName, bankName)
    await page.type(this.dokan.vendors.bankAddress, bankAddress)
    await page.type(this.dokan.vendors.routingNumber, routingNumber)
    await page.type(this.dokan.vendors.iban, iban)
    await page.type(this.dokan.vendors.swift, swift)
    await page.type(this.dokan.vendors.payPalEmail, payPalEmail)
    await page.click(this.dokan.vendors.enableSelling)
    await page.click(this.dokan.vendors.publishProductDirectly)
    await page.click(this.dokan.vendors.makeVendorFeature)
    //create vendor
    await page.click(this.dokan.vendors.createVendor)
    await page.waitForTimeout(2000)
    await base.click(this.dokan.vendors.editVendorInfo)

    let vendorEmail = await base.getElementValue(this.dokan.vendors.editVendor.email)
    expect(vendorEmail).toBe(email)

  },



  //------------------------------------------------ products --------------------------------------------------//



  //admin add categories
  async addCategory(categoryName) {
    await base.hover(this.aDashboard.products)
    await base.click(this.products.categoriesMenu)

    let categoryIsVisible = await base.isVisible(page, this.products.category.categoryCell(categoryName))
    if (!categoryIsVisible) {

      // add new category
      await page.type(this.products.category.name, categoryName)
      await page.type(this.products.category.slug, categoryName)
      await page.click(this.products.category.addNewCategory)

      await base.waitForSelector(this.products.category.categoryCell(categoryName))
      let categoryIsVisible = await base.isVisible(page, this.products.category.categoryCell(categoryName))
      expect(categoryIsVisible).toBe(true)
    }
  },

  //admin add attributes
  async addAttributes(attributeName, attributeTerms) {
    await base.hover(this.aDashboard.products)
    await base.click(this.products.attributesMenu)

    let attributeIsVisible = await base.isVisible(page, this.products.attribute.attributeCell(attributeName))
    if (!attributeIsVisible) {
      // add new attribute
      await page.type(this.products.attribute.name, attributeName)
      await page.type(this.products.attribute.slug, attributeName)
      await page.click(this.products.attribute.addAttribute)

      await base.waitForSelector(this.products.attribute.attributeCell(attributeName))
      let attributeIsVisible = await base.isVisible(page, this.products.attribute.attributeCell(attributeName))
      expect(attributeIsVisible).toBe(true)

      await base.click(this.products.attribute.configureTerms(attributeName))

      // add new term
      for (let attributeTerm of attributeTerms) {
        await page.type(this.products.attribute.attributeTerm, attributeTerm)
        await page.type(this.products.attribute.attributeTermSlug, attributeTerm)
        await page.click(this.products.attribute.addAttributeTerm)

        await base.waitForSelector(this.products.attribute.attributeTerm(attributeTerm))
        let attributeTermIsVisible = await base.isVisible(page, this.products.attribute.attributeTermCell(attributeTerm))
        expect(attributeTermIsVisible).toBe(true)
      }
    }
  },

  //admin add simple product
  async addSimpleProduct(productName, productPrice, categoryName, vendor) {
    await base.hover(this.aDashboard.products)
    await base.click(this.products.addNewMenu)

    // add new simple product
    await page.select(this.products.product.productType, 'simple')
    await page.type(this.products.product.regularPrice, productPrice)
    //category
    await base.clickXpath(this.products.product.category(categoryName))
    //vendor
    // await base.selectByText(this.products.product.vendor, vendor)//TODO: replace below line with this
    await base.selectOptionByText(this.products.product.vendor, this.products.product.vendorOptions, vendor)
    // name
    await page.type(this.products.product.productName, 'simple_' + productName) // TODO: publish element is blocked by other element that's why name is filled later
    //publish
    await base.click(this.products.product.publish)

    let productCreateSuccessMessage = await base.getSelectorText(this.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch('Product published. ')
  },

  //admin add variable product
  // async addVariableProduct(productName, productPrice, categoryName, vendor, attribute, attributeTerms) {
  //   await base.hover(this.aDashboard.products)
  //   await base.click(this.products.addNewMenu)

  //   // add new variable product
  //   await page.select(this.products.product.productType, 'variable')

  //   await page.click(this.products.product.attributes)
  //   // await page.waitForTimeout(1000)

  //   // add attributes
  //   await page.select(this.products.product.customProductAttribute, `pa_${attribute}`)
  //   await page.waitForTimeout(2000)
  //   await page.click(this.products.product.addAttribute)
  //   await page.waitForTimeout(2000)
  //   await page.click(this.products.product.selectAll)
  //   await page.click(this.products.product.usedForVariations)
  //   await page.waitForTimeout(2000)
  //   await page.click(this.products.product.saveAttributes)
  //   await page.waitForTimeout(2000)

  //   //TODO: need to update js alert 
  //   // add variations
  //   await page.click(this.products.product.variations)
  //   await page.waitForTimeout(2000)
  //   await page.click(this.products.product.variations)
  //   await page.waitForTimeout(2000)
  //   await page.select(this.products.product.addVariations, 'link_all_variations')
  //   await page.waitForTimeout(2000)
  //   await base.alert('accept')
  //   await page.click(this.products.product.go)
  //   await page.waitForTimeout(2000)

  //   await page.select(this.products.product.addVariations, 'variable_regular_price')
  //   await page.waitForTimeout(2000)
  //   await page.click(this.products.product.go)
  //   await base.alertWithValue(120)
  //   await page.waitForTimeout(2000)

  //   //category
  //   await base.clickXpath(this.products.product.category(categoryName))
  //   //vendor
  //   // await base.selectByText(this.products.product.vendor, vendor)//TODO: replace below line with this
  //   await base.selectOptionByText(this.products.product.vendor, this.products.product.vendorOptions, vendor)
  //   // name
  //   await page.type(this.products.product.productName, 'variable_' + productName) // TODO: publish element is blocked by other element that's why name is filled later
  //   //publish
  //   await base.click(this.products.product.publish)

  //   let productCreateSuccessMessage = await base.getSelectorText(this.products.product.updatedSuccessMessage)
  //   expect(productCreateSuccessMessage).toMatch('Product published. ')
  // },

  //admin add simple subscription product
  async addSimpleSubscription(productName, productPrice, categoryName, vendor) {
    await base.hover(this.aDashboard.products)
    await base.click(this.products.addNewMenu)

    // add new simple subscription
    await page.select(this.products.product.productType, 'subscription')
    await page.type(this.products.product.subscriptionPrice, productPrice)
    await page.select(this.products.product.subscriptionPeriodInterval, '1')
    await page.select(this.products.product.subscriptionPeriod, 'month')
    await page.select(this.products.product.expireAfter, '0')
    await page.type(this.products.product.subscriptionTrialLength, '0')
    await page.select(this.products.product.subscriptionTrialPeriod, 'day')
    //category
    await base.clickXpath(this.products.product.category(categoryName))
    //vendor
    // await base.selectByText(this.products.product.vendor, vendor)//TODO: replace below line with this
    await base.selectOptionByText(this.products.product.vendor, this.products.product.vendorOptions, vendor)
    // name
    await page.type(this.products.product.productName, 'subscription_' + productName) // TODO: publish element is blocked by other element that's why name is filled later
    //publish
    await base.click(this.products.product.publish)

    let productCreateSuccessMessage = await base.getSelectorText(this.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch('Product published. ')
  },

  //admin add variable subscription product
  async addVariableSubscription(productName, productPrice, categoryName, vendor, attribute, attributeTerms) {
  },

  //admin add group product
  async addGroupProduct(productName, productPrice, categoryName, vendor) {
  },

  //admin add external product
  async addExternalProduct(productName, productPrice, categoryName, vendor) {
    await base.hover(this.aDashboard.products)
    await base.click(this.products.addNewMenu)

    // add new external product
    await page.select(this.products.product.productType, 'external')
    await page.type(this.products.product.productUrl, 'http://localhost:8889/shop/uncategorized/subscription_handcrafted-granite-chicken/')
    await page.type(this.products.product.buttonText, 'Buy product')
    await page.type(this.products.product.regularPrice, productPrice)
    //category
    await base.clickXpath(this.products.product.category(categoryName))
    //vendor
    // await base.selectByText(this.products.product.vendor, vendor)//TODO: replace below line with this
    await base.selectOptionByText(this.products.product.vendor, this.products.product.vendorOptions, vendor)
    // name
    await page.type(this.products.product.productName, 'external_' + productName) // TODO: publish element is blocked by other element that's why name is filled later
    //publish
    await base.click(this.products.product.publish)

    let productCreateSuccessMessage = await base.getSelectorText(this.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch('Product published. ')
  },

  //admin add dokan subscription product
  async addDokanSubscription(productName, productPrice, categoryName, vendor) {
    await base.hover(this.aDashboard.products)
    await base.click(this.products.addNewMenu)

    // add new simple product
    await page.select(this.products.product.productType, 'product_pack')
    await page.type(this.products.product.regularPrice, productPrice)
    //category
    await base.clickXpath(this.products.product.category(categoryName))
    // subscription details
    await page.type(this.products.product.numberOfProducts, '-1')
    await page.type(this.products.product.packValidity, '0')
    await page.type(this.products.product.advertisementSlot, '-1')
    await page.type(this.products.product.expireAfterDays, '-1')
    await page.click(this.products.product.recurringPayment)
    //vendor
    // await base.selectByText(this.products.product.vendor, vendor)//TODO: replace below line with this
    await base.selectOptionByText(this.products.product.vendor, this.products.product.vendorOptions, vendor)
    // name
    await page.type(this.products.product.productName, 'Dokan Sub_' + productName) // TODO: publish element is blocked by other element that's why name is filled later
    //publish
    await base.click(this.products.product.publish)

    let productCreateSuccessMessage = await base.getSelectorText(this.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch('Product published. ')
  },

  // admin add auction product
  async addAuctionProduct(productName, productPrice, categoryName, vendor) {
    await base.hover(this.aDashboard.products)
    await base.click(this.products.addNewMenu)

    // add new auction product
    await page.select(this.products.product.productType, 'auction')

    await page.select(this.products.product.itemCondition, 'new')
    await page.select(this.products.product.auctionType, 'normal')
    await page.type(this.products.product.startPrice, productPrice)
    await page.type(this.products.product.bidIncrement, '50')
    await page.type(this.products.product.reservePrice, productPrice + 400)
    await page.type(this.products.product.buyItNowPrice, productPrice + 900)
    await page.type(this.products.product.auctionDatesFrom, '2022-03-27 23:12')
    await page.type(this.products.product.auctionDatesTo, '2022-03-31 23:13')

    //category
    await base.clickXpath(this.products.product.category(categoryName))
    //vendor
    // await base.selectByText(this.products.product.vendor, vendor)//TODO: replace below line with this
    await base.selectOptionByText(this.products.product.vendor, this.products.product.vendorOptions, vendor)
    // name
    await page.type(this.products.product.productName, 'Auction_' + productName) // TODO: publish element is blocked by other element that's why name is filled later
    //publish
    await base.click(this.products.product.publish)

    let productCreateSuccessMessage = await base.getSelectorText(this.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch('Product published. ')
  },

  //admin add booking product
  async addBookingProduct(productName, productPrice, categoryName, vendor) {
    await base.hover(this.aDashboard.products)
    await base.click(this.products.addNewMenu)

    // add new booking product
    await page.select(this.products.product.productType, 'booking')
    await page.select(this.products.product.bookingDurationType, 'customer')
    // await page.waitForTimeout(2000)
    await base.clearAndType(this.products.product.bookingDurationMax, '7')
    await page.select(this.products.product.calendarDisplayMode, 'always_visible')

    //availability
    // await base.click(this.products.product.availability)

    //costs
    await page.click(this.products.product.bookingCosts)
    await page.waitForTimeout(1000)
    await base.clearAndType(this.products.product.baseCost, productPrice)
    await base.clearAndType(this.products.product.blockCost, '20')

    //category
    await base.clickXpath(this.products.product.category(categoryName))
    //vendor
    // await base.selectByText(this.products.product.vendor, vendor)//TODO: replace below line with this
    await base.selectOptionByText(this.products.product.vendor, this.products.product.vendorOptions, vendor)
    // name
    await page.type(this.products.product.productName, 'booking_' + productName) // TODO: publish element is blocked by other element that's why name is filled later
    //publish
    await base.click(this.products.product.publish)

    let productCreateSuccessMessage = await base.getSelectorText(this.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch('Product published. ')
  },



  //-------------------------------------------- Wholesale customer ----------------------------------------------//



  //admin approve wholesale request
  async adminApproveWholesaleRequest(customer) {
    await base.hover(this.aDashboard.dokan)
    await base.click(this.dokan.wholesaleCustomerMenu)
    await base.clickXpath(this.dokan.wholesaleCustomer.statusSlider(customer))

    let enableStatusSuccessMessage = await base.getSelectorText(this.dokan.wholesaleCustomer.enableStatusUpdateSuccessMessage)
    expect(enableStatusSuccessMessage).toMatch('Wholesale capability activate')
  },


}