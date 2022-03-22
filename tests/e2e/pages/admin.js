const { createURL, clickMenuItem, clickOnMoreMenuItem } = require("@wordpress/e2e-test-utils");
const base = require("../pages/base.js");
const loginPage = require('../pages/login.js');
const { setpaymetnsettings } = require("./vendor.js");



module.exports = {

  // locators

  //admin dashboard
  aDashboard: {
    //dashboard menues
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
    templetes: ".menu-icon-elementor_library > .wp-menu-name",
    appearance: ".menu-icon-appearance > .wp-menu-name",
    plugins: ".menu-icon-plugins > .wp-menu-name",
    users: ".menu-icon-users > .wp-menu-name",
    tools: ".menu-icon-tools > .wp-menu-name",
    settings: ".menu-icon-settings > .wp-menu-name",
    locoTranslate: ".toplevel_page_loco > .wp-menu-name",

    // collapseMenu: '#collapse-button',
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
    //TODO: make locators unique
    dashboard: "#toplevel_page_dokan .wp-first-item > .wp-first-item",
    withdraw: "#toplevel_page_dokan li:nth-child(3) > a",
    vendors: "#toplevel_page_dokan li:nth-child(4) > a",
    abuseReports: "#toplevel_page_dokan li:nth-child(5) > a",
    storeReviews: "#toplevel_page_dokan li:nth-child(6) > a",
    storeSupport: "#toplevel_page_dokan li:nth-child(7) > a",
    announcements: "#toplevel_page_dokan li:nth-child(8) > a",
    refunds: "#toplevel_page_dokan li:nth-child(9) > a",
    reports: "#toplevel_page_dokan li:nth-child(10) > a",
    modules: "#toplevel_page_dokan li:nth-child(11) > a",
    tools: "#toplevel_page_dokan li:nth-child(12) > a",
    verifications: "#toplevel_page_dokan li:nth-child(13) > a",
    advertising: "#toplevel_page_dokan li:nth-child(14) > a",
    wholesaleCustomer: "#toplevel_page_dokan li:nth-child(15) > a",
    help: "#toplevel_page_dokan li:nth-child(16) > a",
    settingsmenu: "#toplevel_page_dokan li:nth-child(18) > a",
    // settingsmenu: "#toplevel_page_dokan li:nth-child(17) > a",
    license: "#toplevel_page_dokan li:nth-child(18) > a",

    //dashboard
    dashboard: {},
    //withdraw
    withdraw: {},
    //vendors
    vendors: {

      // add new vendors
      addNewVendorClose: '.modal-close.modal-close-link.dashicons.dashicons-no-alt',
      addNewVendor: '.page-title-action',
      vendorPicture: 'div[class="picture"]',
      banner: 'div[class="dokan-upload-image"] button',
      vendorfirstName: '#first-name',
      vendorlastName: '#last-name',
      storeName: '#store-name',
      storeUrl: '#user-nicename',
      phoneNumber: '#store-phone',
      vendorEmail: '#store-email',
      vendorUsername: '#user-login',
      generatePassword: '.button.button-secondary',
      vendorPassword: '#store-password',
      addressLink: 'body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(1) > a:nth-child(1)',
      street1: '#street-1',
      street2: '#street-2',
      city: '#city',
      zip: '#zip',
      country: '.multiselect__single',
      countryInput: '#country',
      state: '#state',
      paymentOptionlink: 'body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > a:nth-child(1)',
      accountName: '#account-name',
      accountNumber: '#account-number',
      bankName: '#bank-name',
      bankAddress: '#bank-address',
      routingNumber: '#routing-number',
      iban: '#iban',
      swift: '#swift',
      payPalEmail: '#paypal-email',
      enableSelling: 'div[class="dokan-form-group"] div:nth-child(2) div:nth-child(1) label:nth-child(1)',
      publishProductDirectly: 'div[class="dokan-form-group"] div:nth-child(3) div:nth-child(1) label:nth-child(1)',
      makeVendorFeature: 'div[class="dokan-form-group"] div:nth-child(4) div:nth-child(1) label:nth-child(1)',
      createVendor: '.button.button-primary.button-hero',
      addAnother: 'button[class="swal2-confirm swal2-styled"]',
      next: '.button.button-primary.button-hero',
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

      // wholesale customer
      wholesaleCustomerSlider(customer) {
        return '//span[@class="slider round"]' //TODO: update locator
        // return `//td[contains(text(),normalize-space('${customer}'))]/ancestor::tr//span[@class="slider round"]`
        // return `//td[contains(text(),normalize-space('${customer}'))]/..//span[@class="slider round"]`
        // return `//td[@class = 'column username' and contains(text(),normalize-space('${customer}'))]/..//span[@class="slider round"]`
      },

    },
    //help
    help: {},

    //dokan settings
    settings: {
      //setting menus
      general: ".nav-tab:nth-child(2)",
      sellingOptions: ".nav-tab:nth-child(3)",
      withdrawOptions: ".nav-tab:nth-child(4)",
      pageSettings: ".nav-tab:nth-child(5)",
      appearance: ".nav-tab:nth-child(6)",
      privacyPolicy: ".nav-tab:nth-child(7)",
      liveSearch: ".nav-tab:nth-child(8)",
      storeSupport: ".nav-tab:nth-child(9)",
      sellerVerification: ".nav-tab:nth-child(10)",
      verificationSmsGateways: ".nav-tab:nth-child(11)",
      emailVerification: ".nav-tab:nth-child(12)",
      socialApi: ".nav-tab:nth-child(13)",
      shippingStatus: ".nav-tab:nth-child(14)",
      colors: ".nav-tab:nth-child(15)",
      liveChat: ".nav-tab:nth-child(16)",
      rma: ".nav-tab:nth-child(17)",
      wholesale: ".nav-tab:nth-child(18)",
      euComplianceFields: ".nav-tab:nth-child(19)",
      deliveryTime: ".nav-tab:nth-child(20)",
      productAdvertising: ".nav-tab:nth-child(21)",
      geolocation: ".nav-tab:nth-child(22)",
      productReportAbuse: ".nav-tab:nth-child(23)",
      singleProductMultivendor: ".nav-tab:nth-child(24)",
      vendorAnalytics: ".nav-tab:nth-child(25)",
      vendorSubscription: ".nav-tab:nth-child(26)",

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
      sroreProductPerPage: "#dokan_general\\[store_products_per_page\\]",
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

      //vendor capabilty
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
      withdrawMethodsRazorpay: "",//TODO:add selector
      withdrawMethodsMangoPay: "",//TODO:add selector
      withdrawMethodsStripe: "",//TODO:add selector
      withdrawMethodsStripeExpress: "",//TODO:add selector
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
      quarterlyScheduleMonth: "dokan_withdraw[quarterly_schedule][month]",
      quarterlyScheduleWeek: "dokan_withdraw[quarterly_schedule][week]",
      quarterlyScheduleDay: "dokan_withdraw[quarterly_schedule][days]",
      monthlyScheduleWeek: "dokan_withdraw[monthly_schedule][week]",
      monthlyScheduleDay: "dokan_withdraw[monthly_schedule][days]",
      biweeklyScheduleWeek: "dokan_withdraw[biweekly_schedule][week]",
      biweeklyScheduleDay: "dokan_withdraw[biweekly_schedule][days]",
      weeklyScheduleDay: "#dokan_withdraw\\[weekly_schedule\\]",
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
      mapApiSourceMapbox: "#dokan_appearance\\[map_api_source\\]\\[mapbox\\]",
      googleMapApiKey: "#dokan_appearance\\[gmap_api_key\\]",
      mapboxAccessToken: "#dokan_appearance\\[mapbox_access_token\\]",
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
      privacyPolicy: "#dokan_privacy\\[privacy_policy\\]",
      privacyPolicySaveChanges: "#submit",

      //live search
      liveSearchOptions: "#dokan_live_search_setting\\[live_search_option\\]",
      liveSearchSaveChanges: "#submit",

      //store support
      displayOnOrderDetails: "#dokan_store_support_setting\\[enabled_for_customer_order\\]",
      displayOnSingleProductPage: "#dokan_store_support_setting\\[store_support_product_page\\]",
      supportButttonLabel: "#dokan_store_support_setting\\[support_button_label\\]",
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
      chatProvidertalkJs: "#dokan_live_chat\\[provider\\]\\[talkjs\\]",
      chatProvidertawkTo: "#dokan_live_chat\\[provider\\]\\[tawkto\\]",
      chatProviderWhatsApp: "#dokan_live_chat\\[provider\\]\\[whatsapp\\]",
      //fb
      messangerColor: ".button > span",
      //talkjs
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
      refundPolicy: "",
      rmaSaveChanges: "#submit",

      //wholesale
      whoCaneeWholesalePriceAllUsers: "#dokan_wholesale\\[wholesale_price_display\\]\\[all_user\\]",
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

      //single product multivendor
      enableSingleProductMultipleVendor: "#dokan_spmv\\[enable_pricing\\]",
      sellItemButtonText: "#dokan_spmv\\[sell_item_btn\\]",
      availableVendorDisplayAreaTitle: "#dokan_spmv\\[available_vendor_list_title\\]",
      availableVendorSectionDisplayPosition: "#dokan_spmv\\[available_vendor_list_position\\]",
      showSpmvProducts: "#dokan_spmv\\[show_order\\]",
      singleProductMultivendorSaveChanges: "#submit",

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
      cancellingEmailbody: "#dokan_product_subscription\\[cancelling_email_body\\]",
      alertEmailSubject: "#dokan_product_subscription\\[alert_email_subject\\]",
      alertEmailBody: "#dokan_product_subscription\\[alert_email_body\\]",
      vendorSubscriptionSaveChanges: "#submit",
    },

    //license
    license: {}

  },

  //woocommerce
  wooCommerce: {
    //woocommerce menu
    settingsmenu: "#toplevel_page_woocommerce li:nth-child(6) > a",

    //woocommerce settings
    settings: {
      //settings menu
      //TODO: replace with unique locators
      general: ".nav-tab:nth-child(1)",
      products: ".nav-tab:nth-child(2)",
      tax: ".nav-tab:nth-child(3)",
      shipping: ".nav-tab:nth-child(4)",
      payments: ".nav-tab:nth-child(5)",

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
      //TODO: add locator or use enter
      currencyPosition: "#select2-woocommerce_currency_pos-container",
      //TODO: add locator or use enter
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
      pricesEnteredWithTaxpricesInclusiveOfTax: "li:nth-child(1) input",
      pricesEnteredWithTaxpricesExclusiveOfTax: "li:nth-child(2) input",
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
      taxTable: ".wc_tax_rates.wc_input_table.widefat",
      taxRateSaveChanges: ".woocommerce-save-button",

      //shipping
      addShippingZone: ".page-title-action",
      zoneName: "#zone_name",
      zoneRegions: ".select2-search__field",
      addShippingMethods: ".wc-shipping-zone-add-method",
      // shippingMethod:"select:nth-child(2)",
      shippingMethod: ".wc-shipping-zone-method-selector select",
      addShippingMethod: "#btn-ok",
      createdShippingMethod: ".wc-shipping-zone-method-rows.ui-sortable",
      editShippingMethod: '.row-actions .wc-shipping-zone-method-settings',
      // editShippingMethod: (shippingMethodName) => `//a[contains(text(),'${shippingMethodName}')]//..//a[@class='wc-shipping-zone-method-settings']`,
      deleteShippingMethod: (shippingMethodName) => `//a[contains(text(),'${shippingMethodName}')]//..//a[@class='wc-shipping-zone-method-delete']`,
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
      dokanTableRateShippingMethodTitle: "#woocommerce_dokan_distance_rate_shipping_title",
      //dokan distance rate shipping
      dokanDistanceRateShippingMethodTitle: "#woocommerce_dokan_table_rate_shipping_title",
      //vendor shipping
      vendorShippingMethodTitle: "#woocommerce_dokan_vendor_shipping_title",
      vendorShippingTaxStatus: "#woocommerce_dokan_vendor_shipping_tax_status",

      //shipping method save changes
      shipppingMethodSaveChanges: "#btn-ok",


      //payments
      //enable methods
      enableDirectBankTransfer: "//a[contains(text(),'Direct bank transfer')]//..//..//span",
      enableCheckPayments: "//a[contains(text(),'Check payments')]//..//..//span",
      enableCashOnDelivery: "//a[contains(text(),'Cash on delivery')]//..//..//span",
      enableDokanWirecardConnect: "//a[contains(text(),'Dokan Wirecard Connect')]//..//..//a[@class='wc-payment-gateway-method-toggle-enabled']",
      enableDokanPayPalAdaptivePayments: "//a[contains(text(),'Dokan PayPal Adaptive Payments')]//..//..//a[@class='wc-payment-gateway-method-toggle-enabled']",
      enableDokanPayPalMarketplace: "//a[contains(text(),'Dokan PayPal Marketplace')]//..//..//a[@class='wc-payment-gateway-method-toggle-enabled']",
      enableDokanStripeConnect: "//a[contains(text(),'Dokan Stripe Connect')]//..//..//a[@class='wc-payment-gateway-method-toggle-enabled']",
      enableDokanMangoPay: "//a[contains(text(),'Dokan MangoPay')]//..//..//a[@class='wc-payment-gateway-method-toggle-enabled']",
      enableDokanRazorpay: "//a[contains(text(),'Dokan Razorpay')]//..//..//a[@class='wc-payment-gateway-method-toggle-enabled']",
      enableDokanStripeExpress: "//a[contains(text(),'')]//..//..//span",//TODO: add locator
      // setup or manage payment methods
      setupDirectBankTransfer: "//a[contains(text(),'Direct bank transfer')]//..//..//td[@class='action']//a",
      setupCheckPayments: "//a[contains(text(),'Check payments')]//..//..//td[@class='action']//a",
      setupCashOnDelivery: "//a[contains(text(),'Cash on delivery')]//..//..//td[@class='action']//a",
      setupDokanWirecardConnect: "//a[contains(text(),'Dokan Wirecard Connect')]//..//..//td[@class='action']//a",
      setupDokanPayPalAdaptivePayments: "//a[contains(text(),'Dokan PayPal Adaptive Payments')]//..//..//td[@class='action']//a",
      setupDokanPayPalMarketplace: "//a[contains(text(),'Dokan PayPal Marketplace')]//..//..//td[@class='action']//a",
      setupDokanStripeConnect: "//a[contains(text(),'Dokan Stripe Connect')]//..//..//td[@class='action']//a",
      setupDokanMangoPay: "//a[contains(text(),'Dokan MangoPay')]//..//..//td[@class='action']//a",
      setupDokanRazorpay: "//a[contains(text(),'Dokan Razorpay')]//..//..//td[@class='action']//a",
      setupDokanStripeExpress: "",//TODO: add locator
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
        sandvoxClientSecret: "#woocommerce_dokan_paypal_marketplace_test_app_pass",
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
        sandbboxapiKey: "#woocommerce_dokan_mangopay_sandbox_api_key",
        // payment options
        chooseAvailableCreditCards: ".select2-search:nth-child(2) > .select2-search__field",
        chooseAvailableCreditCardsValues: ".select2-results ul li", //TODO: use enter instead of class
        chooseAvailableDirectPaymentServices: ".form-table:nth-child(14) tr:nth-child(2) .select2-selection__rendered",
        chooseAvailableDirectPaymentServicesValues: ".select2-results ul li", //TODO: use enter instead of class
        savedCards: "#woocommerce_dokan_mangopay_saved_cards",
        threeDs2: "#woocommerce_dokan_mangopay_disabled_3DS2",
        // Fund Transfers and Payouts
        transferFunds: "#select2-woocommerce_dokan_mangopay_disburse_mode-container",
        transferFundsValues: ".select2-results ul li", //TODO: use enter instead of class
        payoutMode: "#woocommerce_dokan_mangopay_instant_payout",
        // Types and Requirements of Vendors
        typeOfVendors: "#select2-woocommerce_dokan_mangopay_default_vendor_status-container",
        typeOfVendorsValues: ".select2-results ul li", //TODO: use enter instead of class
        businessRequirement: "#select2-woocommerce_dokan_mangopay_default_business_type-container",
        businessRequirementValues: ".select2-results ul li", //TODO: use enter instead of class
        // advancedSettings
        displayNoticeToNonconnectedSellers: "#woocommerce_dokan_mangopay_notice_on_vendor_dashboard",
        sendAnnouncementToNonconnectedSellers: "#woocommerce_dokan_mangopay_announcement_to_sellers",
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
        sellerPaysTheprocessingFee: "#woocommerce_dokan_razorpay_seller_pays_the_processing_fee",
        displayNoticeToConnectSeller: "#woocommerce_dokan_razorpay_display_notice_on_vendor_dashboard",
        sendAnnouncementToConnectSeller: "#woocommerce_dokan_razorpay_display_notice_to_non_connected_sellers",
        sendAnnouncementInterval: "#woocommerce_dokan_razorpay_display_notice_interval",
        dokanRazorpaySaveChanges: ".woocommerce-save-button",
      },

      //update success message
      updatedSuccessMessage: "#message.updated.inline p",

    },

  },


  //products
  products: {

    // products
    //TODO: recheck all locators
    products: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-product"] div[class="wp-menu-name"]',
    addNew: 'a[href="post-new.php?post_type=product"]',
    addNewonPage: '.page-title-action',
    productName: '#title',
    productType: '#product-type',
    virtural: '#_virtual',
    downloadable: '#_downloadable',
    regularPrice: '#_regular_price',
    salePrice: '#_sale_price',
    salePriceDateFrom: '#_sale_price_dates_from',
    salePriceDateTo: '#_sale_price_dates_to',
    vendor: '#dokan_product_author_override',
    publish: '#publish',


    // categories
    //TODO: recheck all locators
    categories: 'a[href="edit-tags.php?taxonomy=product_cat&post_type=product"]',
    categoryName: "#tag-name",
    categorySlug: "#tag-slug",
    addNewCategory: "#submit",

    tags: 'a[href="edit-tags.php?taxonomy=product_tag&post_type=product"]',

    // attributes
    //TODO: recheck all locators
    attributes: 'a[href="edit.php?post_type=product&page=product_attributes"]',
    attributeName: "#attribute_label",
    attributeSlug: "#attribute_name",
    addAttribute: "#submit",
    configureTerms(attributeName) {
      return `//td[contains(text(), '${attributeName.toLowerCase()}')]/..//a[normalize-space()="Configure terms"]`;
    },
    attributeValue: "#tag-name",
    attributeValueSlug: "#tag-slug",
  },
  //bookings
  bookings: {},
  //analytics
  analytics: {},
  //marketing
  marketing: {},
  //elementor
  elementor: {},
  //templetes
  templetes: {},
  //appearance
  appearance: {},
  //plugins
  plugins: {
    //plugins 
    //TODO: recheck all locators
    addnew: '.page-title-action',
    searchPlugin: '#search-plugins',
    uploadPlugin: 'a[role="button"]',
    chooseFile: '#pluginzip',
    installNow: '#install-plugin-submit',
    activatePlugin: '.button.button-primary',
    activateCustomPlugin(plugin) { return `//strong[normalize-space()="${plugin}"]/..//div//span[@class="activate"]` },
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
    newUseremail: "#email",
    newUserfirstName: "#first_name",
    newUserfastName: "#last_name",
    newUserwebsite: '#url',
    newUserlanguage: "#locale",
    newUserpassword: "#pass1",
    newUsersendUserNotification: "#send_user_notification",
    newUserrole: "#role",
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

  },

  //locoTranslate
  locoTranslate: {},


  //methods
  async goToAdminDashboard() {
    await await page.goto(createURL('wp-admin/index.php'))

    const url = await page.url();
    expect(url).toMatch('wp-admin/index.php')
  },

  async goToDokanSettings() {
    // await page.goto(createURL('wp-admin/admin.php?page=dokan#/settings'))

    await page.hover(this.aDashboard.dokan)
    await page.waitForTimeout(1000)
    await base.click(this.dokan.settingsmenu)

    const url = await page.url();
    expect(url).toMatch('wp-admin/admin.php?page=dokan#/settings')
  },

  async goToWooCommerceSettings() {
    // await page.goto(createURL('wp-admin/admin.php?page=wc-settings'))

    await page.hover(this.aDashboard.wooCommerce)
    await page.waitForTimeout(1000)
    await base.click(this.wooCommerce.settingsmenu)

    const url = await page.url();
    expect(url).toMatch('wp-admin/admin.php?page=wc-settings')
  },


  async setWpSettings() {
    await page.hover(this.aDashboard.settings)

    //set general settings
    await base.click(this.settings.general)
    // enable user registration
    await page.click(this.settings.membership)
    //timezone
    await page.select(this.settings.timezone, 'UTC+6')
    await base.click(this.settings.generalSaveChanges)

    //set permalinks settings
    await base.click(this.settings.permalinks)
    await page.click(this.settings.postName)
    await page.click(this.settings.customBase)
    await page.click(this.settings.permalinkSaveChanges)
  },

  async setDokanGeneralSettings() {
    await page.click(this.dokan.settings.general)
    //site options
    await base.check(this.dokan.settings.adminAreaAccess)
    await base.clearandtype(this.dokan.settings.vendorStoreUrl, 'store')
    await page.select(this.dokan.settings.sellingProductTypes, 'sell_both')
    //vendor store options
    await base.check(this.dokan.settings.storeTermsAndConditions)
    await base.clearandtype(this.dokan.settings.sroreProductPerPage, '12')
    await base.check(this.dokan.settings.enableTermsAndCondition)
    await page.select(this.dokan.settings.storCategory, 'none')
    await page.click(this.dokan.settings.generalSaveChanges)
    await page.waitForTimeout(6000)
  },

  async setDokanSellingSettings() {
    await page.click(this.dokan.settings.sellingOptions)

    //commission settings
    await page.select(this.dokan.settings.commissionType, 'percentage')
    await base.clearandtype(this.dokan.settings.adminCommission, '10')
    await page.select(this.dokan.settings.shippingFeeRecipient, 'seller')
    await page.select(this.dokan.settings.taxFeeRecipient, 'seller')
    //vendor capabilty
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
    await page.waitForTimeout(6000)
  },

  async setDokanWithdrawSettings() {
    await page.click(this.dokan.settings.withdrawOptions)
    //withdraw options
    await base.check(this.dokan.settings.withdrawMethodsPaypal)
    await base.check(this.dokan.settings.withdrawMethodsBankTransfer)
    await base.check(this.dokan.settings.withdrawMethodsDokanCustom)
    await base.check(this.dokan.settings.withdrawMethodsSkrill)
    await base.clearandtype(this.dokan.settings.customMethodName, 'Bksh')
    await base.clearandtype(this.dokan.settings.customMethodType, 'Email')
    await base.clearandtype(this.dokan.settings.minimumWithdrawAmount, '5')
    await base.check(this.dokan.settings.orderStatusForWithdrawCompleted)
    await base.check(this.dokan.settings.orderStatusForWithdrawProcessing)
    await base.clearandtype(this.dokan.settings.withdrawThreshold, '0')
    //disbursement schedule settings
    await base.check(this.dokan.settings.withdrawDisbursementManual)
    await base.check(this.dokan.settings.withdrawDisbursementAuto)

    await base.check(this.dokan.settings.disburseMentQuarterlySchedule)
    await base.check(this.dokan.settings.disburseMentMonthlySchedule)
    await base.check(this.dokan.settings.disburseMentBiweeklySchedule)
    await base.check(this.dokan.settings.disburseMentWeeklySchedule)

    // // quaterly schedule
    // await page.select(this.dokan.settings.quarterlyScheduleMonth, 'march')
    // await page.select(this.dokan.settings.quarterlyScheduleWeek, '1')
    // await page.select(this.dokan.settings.quarterlyScheduleDay, 'monday')
    // // monthly schedule
    // await page.select(this.dokan.settings.monthlyScheduleWeek, '1')
    // await page.select(this.dokan.settings.monthlyScheduleDay, 'monday')
    // // biweekly schedule
    // await page.select(this.dokan.settings.biweeklyScheduleWeek, '1')
    // await page.select(this.dokan.settings.biweeklyScheduleDay, 'monday')
    // // weekly schedule
    // await page.select(this.dokan.settings.weeklyScheduleDay, 'monday')
    await page.click(this.dokan.settings.withdrawSaveChanges)
    await page.waitForTimeout(6000)

  },

  async setDokanAppearanceSettings() {
    await page.click(this.dokan.settings.appearance)

    await page.click(this.dokan.settings.showMapOnStorePage)
    await base.check(this.dokan.settings.mapApiSourceGoogleMaps)
    await base.clearandtype(this.dokan.settings.googleMapApiKey, 'AIzaSyCiSPh9A7SYaO2sbZQ4qQo11AWyYB3UFvY')
    await page.click(this.dokan.settings.storeHeaderTemplate2)
    await page.click(this.dokan.settings.storeHeaderTemplate1)
    await base.clearandtype(this.dokan.settings.storeBannerWidth, '625')
    await base.clearandtype(this.dokan.settings.storeBannerHeight, '300')
    await base.check(this.dokan.settings.storeOpeningClosingTimeWidget)
    await base.check(this.dokan.settings.showVendorInfo)
    await page.click(this.dokan.settings.appearanceSaveChanges)
    await page.waitForTimeout(6000)
  },

  async setDokanStoreSupportSettings() {
    await page.click(this.dokan.settings.storeSupport)

    await base.check(this.dokan.settings.displayOnOrderDetails)
    await page.select(this.dokan.settings.displayOnSingleProductPage, 'Get Support')
    await base.clearandtype(this.dokan.settings.supportButttonLabel, 'Get Support')
    await page.click(this.dokan.settings.storeSupportSaveChanges)
    await page.waitForTimeout(6000)
  },

  async setDokanRmaSettings() {
    await page.click(this.dokan.settings.rma)

    await page.select(this.dokan.settings.orderStatus, 'processing')
    await page.select(this.dokan.settings.enableRefundRequests, 'yes')
    await page.select(this.dokan.settings.enableCouponRequests, 'yes')
    await base.deleteIfExists(this.dokan.settings.reasonsForRmaSingle('Defective'))
    await base.clearandtype(this.dokan.settings.reasonsForRmaInput, 'Defective')
    await page.click(this.dokan.settings.reasonsForRmaAdd)
    await base.deleteIfExists(this.dokan.settings.reasonsForRmaSingle('Wrong Product'))
    await base.clearandtype(this.dokan.settings.reasonsForRmaInput, 'Wrong Product')
    await page.click(this.dokan.settings.reasonsForRmaAdd)
    await base.deleteIfExists(this.dokan.settings.reasonsForRmaSingle('Other'))
    await base.clearandtype(this.dokan.settings.reasonsForRmaInput, 'Other')
    await page.click(this.dokan.settings.reasonsForRmaAdd)
    //TODO: refund policy
    await page.click(this.dokan.settings.rmaSaveChanges)
    await page.waitForTimeout(6000)
  },

  async setDokanWholesaleSettings() {
    await page.click(this.dokan.settings.wholesale)

    await base.check(this.dokan.settings.whoCaneeWholesalePriceAllUsers)
    await base.check(this.dokan.settings.showWholesalePriceOnShopArchive)
    await page.select(this.dokan.settings.needApprovalForCustomer, 'no')
    await page.click(this.dokan.settings.wholesaleSaveChanges)
    await page.waitForTimeout(6000)

  },

  async setDokanEuComplianceSettings() {
    await page.click(this.dokan.settings.euComplianceFields)

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
    await page.waitForTimeout(6000)
  },

  async setDokanDeliveryTimeSettings() {
    await page.click(this.dokan.settings.deliveryTime)

    await base.check(this.dokan.settings.allowVendorSettings)
    await base.clearandtype(this.dokan.settings.deliveryDateLabel, 'Delivery Date')
    await base.clearandtype(this.dokan.settings.deliveryBlockedBuffer, '0')
    await base.clearandtype(this.dokan.settings.deliveryBoxInfo, 'This store needs %DAY% day(s) to process your delivery request')
    await base.check(this.dokan.settings.requireDeliveryDateAndTime)
    await base.check(this.dokan.settings.deliveryDaySunday)
    await base.check(this.dokan.settings.deliveryDayMonday)
    await base.check(this.dokan.settings.deliveryDayTuesday)
    await base.check(this.dokan.settings.deliveryDayWednesday)
    await base.check(this.dokan.settings.deliveryDayThursday)
    await base.check(this.dokan.settings.deliveryDayFriday)
    await base.check(this.dokan.settings.deliveryDaySaturday)
    await base.clearandtype(this.dokan.settings.openingTime, '12:00 AM')
    await base.clearandtype(this.dokan.settings.closingTime, '11:30 PM')
    await base.clearandtype(this.dokan.settings.timeSlot, '30')
    await base.clearandtype(this.dokan.settings.orderPerSlot, '0')
    await page.click(this.dokan.settings.deliveryTimeSaveChanges)
    await page.waitForTimeout(6000)

  },

  async setDokanProductAdvertisingSettings() {
    await page.click(this.dokan.settings.productAdvertising)

    await base.clearandtype(this.dokan.settings.noOfAvailableSlot, '100')
    await base.clearandtype(this.dokan.settings.expireAfterDays, '10')
    await base.check(this.dokan.settings.vendorCanPurchaseAdvertisement)
    await base.clearandtype(this.dokan.settings.advertisementCostUsd, '15')
    await base.check(this.dokan.settings.enableAdvertisementInSubscription)
    await base.check(this.dokan.settings.markAdvertisedProductAsFeatured)
    await base.check(this.dokan.settings.displayAdvertisedProductOnTop)
    await base.check(this.dokan.settings.outOfStockVisibility)
    await page.click(this.dokan.settings.productAdvertisingSaveChanges)
    await page.waitForTimeout(6000)

  },

  async setDokanGeolocationSettings() {
    await page.click(this.dokan.settings.geolocation)

    await page.select(this.dokan.settings.locationMapPosition, 'top')
    await page.select(this.dokan.settings.showMap, 'all')
    await base.check(this.dokan.settings.showFiltersBeforeLocationMap)
    await base.check(this.dokan.settings.productLocationTab)
    await page.select(this.dokan.settings.radiusSearchUnit, 'km')
    await base.clearandtype(this.dokan.settings.radiusSearchMinimumDistance, '0')
    await base.clearandtype(this.dokan.settings.radiusSearchMaximumDistance, '10')
    await base.clearandtype(this.dokan.settings.mapZoomLevel, '11')
    // await base.clearandtype(this.dokan.settings.defaultLocation, 'New York, NY, USA')//TODO: add default location
    await page.click(this.dokan.settings.geolocationSaveChanges)
    await page.waitForTimeout(6000)

  },

  async setDokanProductReportAbuseSettings() {
    await page.click(this.dokan.settings.productReportAbuse)
    await base.deleteIfExists(this.dokan.settings.reasonsForAbuseReportSingle('This product is fake'))
    await base.clearandtype(this.dokan.settings.reasonsForAbuseReportInput, 'This product is fake')
    await page.click(this.dokan.settings.reasonsForAbuseReportAdd)
    await page.click(this.dokan.settings.productReportAbuseSaveChanges)
    await page.waitForTimeout(6000)
  },

  async setDokanSpmvSettings() {
    await page.click(this.dokan.settings.singleProductMultivendor)

    await base.check(this.dokan.settings.enableSingleProductMultipleVendor)
    await base.clearandtype(this.dokan.settings.sellItemButtonText, 'Sell This Item')
    await base.clearandtype(this.dokan.settings.availableVendorDisplayAreaTitle, 'Other Available Vendor')
    await page.select(this.dokan.settings.availableVendorSectionDisplayPosition, 'below_tabs')
    await page.select(this.dokan.settings.showSpmvProducts, 'show_all')
    await page.click(this.dokan.settings.singleProductMultivendorSaveChanges)
    await page.waitForTimeout(6000)
  },

  async setDokanVendorSubscriptionSettings() {
    await page.click(this.dokan.settings.vendorSubscription)

    await page.select(this.dokan.settings.subscription, '2')
    await base.check(this.dokan.settings.enableProductSubscription)
    await base.check(this.dokan.settings.enableSubscriptionInRegistrationForm)
    await base.check(this.dokan.settings.enableEmailNotification)
    await base.clearandtype(this.dokan.settings.noOfDays, '2')
    await page.select(this.dokan.settings.productStatus, 'draft')
    await base.clearandtype(this.dokan.settings.cancellingEmailSubject, 'Subscription Package Cancel notification')
    await base.clearandtype(this.dokan.settings.cancellingEmailbody, 'Dear subscriber, Your subscription has expired. Please renew your package to continue using it.')
    await base.clearandtype(this.dokan.settings.alertEmailSubject, 'Subscription Ending Soon')
    await base.clearandtype(this.dokan.settings.alertEmailBody, 'Dear subscriber, Your subscription will be ending soon. Please renew your package in a timely')
    await page.click(this.dokan.settings.vendorSubscriptionSaveChanges)
    await page.waitForTimeout(6000)
  },


  async setDokanSettings() {
    await this.goToDokanSettings()
    await this.setDokanGeneralSettings()
    await this.setDokanSellingSettings()
    await this.setDokanWithdrawSettings()
    await this.setDokanAppearanceSettings()
    await this.setDokanStoreSupportSettings()
    await this.setDokanRmaSettings()
    await this.setDokanWholesaleSettings()
    await this.setDokanEuComplianceSettings()
    await this.setDokanDeliveryTimeSettings()
    await this.setDokanProductAdvertisingSettings()
    await this.setDokanGeolocationSettings()
    await this.setDokanProductReportAbuseSettings()
    await this.setDokanSpmvSettings()
    await this.setDokanVendorSubscriptionSettings()
  },

  async setWoocommerceSettings() {
    await this.goToWooCommerceSettings()
    // await this.enableTax()
    await this.addStandardTaxRate()

    //add shipping region
    await base.click(this.wooCommerce.settings.shipping)
    // await base.click(this.wooCommerce.settings.addShippingZone)
    // await base.clearandtype(this.wooCommerce.settings.zoneName, 'US')
    // await page.click(this.wooCommerce.settings.zoneRegions)
    // // await page.type(this.wooCommerce.settings.zoneRegions, 'United States (US)')
    // await page.select('#zone_locations','country:US')
    // // 'country:US'
    // await page.keyboard.press('Enter')


    //flat rate
    // await page.click(this.wooCommerce.settings.addShippingMethods)
    // await page.select(this.wooCommerce.settings.shippingMethod, 'flat_rate')
    // await base.click(this.wooCommerce.settings.addShippingMethod)
    // // await page.waitForTimeout(5000)
    // await page.hover(this.wooCommerce.settings.createdShippingMethod)
    // await page.waitForTimeout(1000)
    // await page.click(this.wooCommerce.settings.editShippingMethod)
    // // await base.clickXpath(this.wooCommerce.settings.editShippingMethod('Flat Rate'))
    // await base.clearandtype(this.wooCommerce.settings.flatRateMethodTitle, 'Flat Rate admin')
    // await page.select(this.wooCommerce.settings.flatRateTaxStatus, 'taxable')
    // await base.clearandtype(this.wooCommerce.settings.flatRateCost, '20')
    // await page.click(this.wooCommerce.settings.shipppingMethodSaveChanges)
    // await page.waitForTimeout(4000)

    // await page.click(this.wooCommerce.settings.deleteShippingMethod('Flat Rate'))


    // //free shipping
    // await base.click(this.wooCommerce.settings.addShippingMethods)
    // await page.select(this.wooCommerce.settings.shippingMethod, 'free_shipping')
    // await page.click(this.wooCommerce.settings.addShippingMethod)
    // await page.click(this.wooCommerce.settings.editShippingMethod('Free Shipping'))
    // await base.clearandtype(this.wooCommerce.settings.freeShippingTitle, 'Free Shipping admin')
    // await page.select(this.wooCommerce.settings.freeShippingRequires, 'min_amount')
    // await base.clearandtype(this.wooCommerce.settings.freeShippingMinimumOrderAmount, '200')
    // await base.check(this.wooCommerce.settings.freeShippingCouponsDiscounts)
    // await page.click(this.wooCommerce.settings.shipppingMethodSaveChanges)

    // //local pickup
    // await base.click(this.wooCommerce.settings.addShippingMethods)
    // await page.select(this.wooCommerce.settings.shippingMethod, 'local_pickup')
    // await page.click(this.wooCommerce.settings.addShippingMethod)
    // await page.click(this.wooCommerce.settings.editShippingMethod('Local Pickup'))
    // await base.clearandtype(this.wooCommerce.settings.localPickupTitle, 'Local Pickup admin')
    // await page.select(this.wooCommerce.settings.localPickupTaxStatus, 'taxable')
    // await base.clearandtype(this.wooCommerce.settings.localPickupCost, '20')
    // await page.click(this.wooCommerce.settings.shipppingMethodSaveChanges)

    // //dokan table rate shipping
    // await base.click(this.wooCommerce.settings.addShippingMethods)
    // await page.select(this.wooCommerce.settings.shippingMethod, 'flat_rate')
    // await page.click(this.wooCommerce.settings.addShippingMethod)
    // await page.click(this.wooCommerce.settings.editShippingMethod('Vendor Table Rate'))
    // await base.clearandtype(this.wooCommerce.settings.dokanTableRateShippingMethodTitle, '	Vendor Table Rate admin')
    // await page.click(this.wooCommerce.settings.shipppingMethodSaveChanges)

    // //dokan distance rate shipping
    // await base.click(this.wooCommerce.settings.addShippingMethods)
    // await page.select(this.wooCommerce.settings.shippingMethod, 'flat_rate')
    // await page.click(this.wooCommerce.settings.addShippingMethod)
    // await page.click(this.wooCommerce.settings.editShippingMethod('Vendor Distance Rate'))
    // await base.clearandtype(this.wooCommerce.settings.dokanDistanceRateShippingMethodTitle, 'Vendor Distance Rate admin')
    // await page.click(this.wooCommerce.settings.shipppingMethodSaveChanges)

    // //vendor shipping
    // await base.click(this.wooCommerce.settings.addShippingMethods)
    // await page.select(this.wooCommerce.settings.shippingMethod, 'flat_rate')
    // await page.click(this.wooCommerce.settings.addShippingMethod)
    // await page.click(this.wooCommerce.settings.editShippingMethod('Vendor Shipping'))
    // await base.clearandtype(this.wooCommerce.settings.vendorShippingMethodTitle, 'Vendor Shipping admin')
    // await page.select(this.wooCommerce.settings.vendorShippingTaxStatus, 'taxable')
    // await page.click(this.wooCommerce.settings.shipppingMethodSaveChanges)
  },

  async enableTax() {
    // enable tax
    // await base.click(this.wooCommerce.settings.general) // don't need to click 
    await base.check(this.wooCommerce.settings.enableTaxes)
    await base.click(this.wooCommerce.settings.generalSaveChanges)

  },

  async addStandardTaxRate() {
    // set tax rate
    await base.click(this.wooCommerce.settings.tax)
    await base.click(this.wooCommerce.settings.standardRates)
    let taxIsVisible = await base.isVisible(page, this.wooCommerce.settings.taxRate)
    if (taxIsVisible === false) {
      await page.click(this.wooCommerce.settings.insertRow)
    }
    await base.clearandtype(this.wooCommerce.settings.taxRate, '5')
    await page.click(this.wooCommerce.settings.taxTable)
    await page.waitForTimeout(1000)
    await page.click(this.wooCommerce.settings.taxRateSaveChanges)
    page.waitForTimeout(5000)
  },

  async addShippingMethod(shippingMethod, shippingMethodName, shippingMethodCustomTitle, taxStatus) {
    await base.click(this.wooCommerce.settings.addShippingMethods)
    await page.select(this.wooCommerce.settings.shippingMethod, shippingMethod)
    await page.click(this.wooCommerce.settings.addShippingMethod)
    await page.click(this.wooCommerce.settings.editShippingMethod(shippingMethodName))
    await base.clearandtype(this.wooCommerce.settings.vendorShippingMethodTitle, shippingMethodCustomTitle)
    await page.select(this.wooCommerce.settings.vendorShippingTaxStatus, taxStatus)
    await page.click(this.wooCommerce.settings.shipppingMethodSaveChanges)
    // TODO: add switch case for different shipping methods

  },

  async deleteShippingMethod(shippingMethodName) {
    await page.click(this.wooCommerce.settings.deleteShippingMethod(shippingMethodName))
  },


  async setpaymetnsettings() {
    await this.goToWooCommerceSettings()
    await this.setupBasicPaymentMethods()
    // await this.setupStripeConnect()
    // await this.setupPaypalMarketPlace()
    // await this.setupDokanMangoPay()
    // await this.setupDokanRazorpay()

  },

  async setupBasicPaymentMethods() {


    //TODO:  only click if not enabled 'woocommerce-input-toggle--disabled'
    await base.click(this.wooCommerce.settings.payments)
    //bank transfer
    await base.clickXpath(this.wooCommerce.settings.enableDirectBankTransfer)
    //check payments
    await base.clickXpath(this.wooCommerce.settings.enableCheckPayments)
    //cash on delivery
    await base.clickXpath(this.wooCommerce.settings.enableCashOnDelivery)

    await base.click(this.wooCommerce.settings.paymentMethodsSaveChanges)

    let successmessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successmessage).toMatch('Your settings have been saved.')

  },

  async setupStripeConnect() {
    await this.setCurrency('United States (US) dollar ($)')

    await base.click(this.wooCommerce.settings.payments)
    await base.click(this.wooCommerce.settings.setupDokanStripeConnect)
    //setup strip connect
    await base.check(this.wooCommerce.settings.stripe.enableDisableStripe)
    await base.clearandtype(this.wooCommerce.settings.stripe.title, 'Dokan Credit card (Stripe)')
    await base.clearandtype(this.wooCommerce.settings.stripe.description, 'Pay with your credit card via Stripe.')
    await base.check(this.wooCommerce.settings.stripe.nonConnectedSellers)
    await base.check(this.wooCommerce.settings.stripe.displayNoticeToConnectSeller)
    await base.clearandtype(this.wooCommerce.settings.stripe.displayNoticeInterval, '7')
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
    await base.clearandtype(this.wooCommerce.settings.stripe.testPublishableKey, 'pk_test_')
    await base.clearandtype(this.wooCommerce.settings.stripe.testSecretKey, 'sk_test_')
    await base.clearandtype(this.wooCommerce.settings.stripe.testClientId, 'ca_')
    await base.click(this.wooCommerce.settings.stripe.stripeSaveChanges)

    let successmessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successmessage).toMatch('Your settings have been saved.')
  },

  async setupPaypalMarketPlace() {
    await this.setCurrency('United States (US) dollar ($)')

    await base.click(this.wooCommerce.settings.payments)
    await base.click(this.wooCommerce.settings.setupDokanPayPalMarketplace)
    // setup paypal marketplace
    await base.check(this.wooCommerce.settings.paypalMarketPlace.enableDisablePayPalMarketplace)
    await base.clearandtype(this.wooCommerce.settings.paypalMarketPlace.title, 'PayPal Marketplace')
    await base.clearandtype(this.wooCommerce.settings.paypalMarketPlace.description, 'Pay via PayPal Marketplace; you can pay with your credit card if you don\'t have a PayPal account')
    await base.clearandtype(this.wooCommerce.settings.paypalMarketPlace.payPalMerchantIdPartnerId, 'partner_')
    // api credentials
    await base.check(this.wooCommerce.settings.paypalMarketPlace.payPalSandbox)
    await base.clearandtype(this.wooCommerce.settings.paypalMarketPlace.sandboxClientId, 'client_')
    await base.clearandtype(this.wooCommerce.settings.paypalMarketPlace.sandvoxClientSecret, 'secret_')
    await base.clearandtype(this.wooCommerce.settings.paypalMarketPlace.payPalPartnerAttributionId, 'weDevs_SP_Dokan')
    await page.click(this.wooCommerce.settings.paypalMarketPlace.disbursementMode)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.paypalMarketPlace.disbursementModeValues, 'Delayed')
    await page.click(this.wooCommerce.settings.paypalMarketPlace.paymentButtonType)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.paypalMarketPlace.paymentButtonTypeValues, 'Smart Payment Buttons')
    await base.clearandtype(this.wooCommerce.settings.paypalMarketPlace.marketplaceLogo, 'http://localhost:8889/wp-content/plugins/dokan/assets/images/dokan-logo.png')
    await base.check(this.wooCommerce.settings.paypalMarketPlace.displayNoticeToConnectSeller)
    await base.check(this.wooCommerce.settings.paypalMarketPlace.sendAnnouncementToConnectSeller)
    await base.clearandtype(this.wooCommerce.settings.paypalMarketPlace.sendAnnouncementInterval, '7')
    await base.click(this.wooCommerce.settings.paypalMarketPlace.paypalMarketPlaceSaveChanges)

    let successmessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successmessage).toMatch('Your settings have been saved.')
  },

  async setupDokanMangoPay() {
    await this.setCurrency('Euro (€)')

    await base.click(this.wooCommerce.settings.payments)
    await base.click(this.wooCommerce.settings.setupDokanMangoPay)
    // setup dokan mangopay
    await base.check(this.wooCommerce.settings.dokanMangoPay.enableDisableMangoPayPayment)
    await base.clearandtype(this.wooCommerce.settings.dokanMangoPay.title, 'MangoPay')
    await base.clearandtype(this.wooCommerce.settings.dokanMangoPay.description, 'Pay via MangoPay')
    //api credentials
    await base.check(this.wooCommerce.settings.dokanMangoPay.mangoPaySandbox)
    await base.clearandtype(this.wooCommerce.settings.dokanMangoPay.sandboxClientId, 'client_')
    await base.clearandtype(this.wooCommerce.settings.dokanMangoPay.sandbboxapiKey, 'secret_')
    // payment options
    await page.click(this.wooCommerce.settings.dokanMangoPay.chooseAvailableCreditCards)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.chooseAvailableCreditCardsValues, 'CB/Visa/Mastercard')
    await page.click(this.wooCommerce.settings.dokanMangoPay.chooseAvailableDirectPaymentServices)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.chooseAvailableDirectPaymentServicesValues, 'Sofort*')
    await base.check(this.wooCommerce.settings.dokanMangoPay.savedCards)
    // Fund Transfers and Payouts
    await page.click(this.wooCommerce.settings.dokanMangoPay.transferFunds)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.transferFundsValues, 'On payment completed')
    await base.check(this.wooCommerce.settings.dokanMangoPay.payoutMode)
    // Types and Requirements of Vendors
    await page.click(this.wooCommerce.settings.dokanMangoPay.typeOfVendors)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.typeOfVendorsValues, 'Either')
    await page.click(this.wooCommerce.settings.dokanMangoPay.businessRequirement)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanMangoPay.businessRequirementValues, 'Any')
    // advancedSettings
    await base.check(this.wooCommerce.settings.dokanMangoPay.displayNoticeToNonconnectedSellers)
    await base.check(this.wooCommerce.settings.dokanMangoPay.sendAnnouncementToNonconnectedSellers)
    await base.clearandtype(this.wooCommerce.settings.dokanMangoPay.announcementInterval, '7')
    await base.click(this.wooCommerce.settings.dokanMangoPay.dokanMangopaySaveChanges)

    let successmessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successmessage).toMatch('Your settings have been saved.')
  },

  async setupDokanRazorpay() {
    await this.setCurrency('Indian rupee (₹)')

    await base.click(this.wooCommerce.settings.payments)
    await base.click(this.wooCommerce.settings.setupDokanRazorpay)
    //setup dokan razorpay
    await base.check(this.wooCommerce.settings.dokanRazorpay.enableDisableDokanRazorpay)
    await base.clearandtype(this.wooCommerce.settings.dokanRazorpay.title, 'Razorpay')
    await base.clearandtype(this.wooCommerce.settings.dokanRazorpay.description, 'Pay securely by Credit or Debit card or Internet Banking through Razorpay.')
    // api credentials
    await base.check(this.wooCommerce.settings.dokanRazorpay.razorpaySandbox)
    await base.clearandtype(this.wooCommerce.settings.dokanRazorpay.testKeyId, 'rzp_test')
    await base.clearandtype(this.wooCommerce.settings.dokanRazorpay.testKeySecret, 'rzp_test')
    await page.click(this.wooCommerce.settings.dokanRazorpay.disbursementMode)
    await base.setDropdownOptionSpan(this.wooCommerce.settings.dokanRazorpay.disbursementModeValues, 'Delayed')
    await base.check(this.wooCommerce.settings.dokanRazorpay.sellerPaysTheprocessingFee)
    await base.check(this.wooCommerce.settings.dokanRazorpay.displayNoticeToConnectSeller)
    await base.check(this.wooCommerce.settings.dokanRazorpay.sendAnnouncementToConnectSeller)
    await base.clearandtype(this.wooCommerce.settings.dokanRazorpay.sendAnnouncementInterval, '7')
    await base.click(this.wooCommerce.settings.dokanRazorpay.dokanRazorpaySaveChanges)

    let successmessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
    expect(successmessage).toMatch('Your settings have been saved.')
  },

  async setCurrency(currency) {
    await this.goToWooCommerceSettings()
    let currentCurrency = await base.getSelectorText(this.wooCommerce.settings.currency)
    if (currentCurrency !== currency) {
      await page.click(this.wooCommerce.settings.currency)
      await page.type(this.wooCommerce.settings.currency, currency)
      await page.keyboard.press('Enter')
      await base.click(this.wooCommerce.settings.generalSaveChanges)

      let successmessage = await base.getSelectorText(this.wooCommerce.settings.updatedSuccessMessage)
      expect(successmessage).toMatch('Your settings have been saved.')
    }
    else {
      return
    }

  },

































































  /////////////////////////////////////  old methods ///////////////////////////////////////////////

  async addvendor() {
    await page.click(this.dokan)
    await page.waitForTimeout(5000)
    await page.click(this.vendors)
    await page.waitForTimeout(2000)
    await page.click(this.addNewVendor)
    await page.waitForTimeout(2000)


    // account info
    // await page.click(this.addNewVendor)
    // await page.click(this.banner)
    await page.type(this.vendorfirstName, 'rk');
    await page.type(this.vendorlastName, 'sh');
    await page.type(this.storeName, 'rksuperstore');
    await page.type(this.storeUrl, '');
    await page.type(this.phoneNumber, '2102222222');
    await page.type(this.vendorEmail, 'rk@gmail.com');
    await page.type(this.vendorUsername, 'rkvendor')
    await page.click(this.generatePassword);
    await page.waitForTimeout(500);
    await base.clearandtype(this.vendorPassword, '01rksh01');
    // await page.click(this.addressLink)
    await page.click(this.next)
    await page.waitForTimeout(2000)

    // address
    await page.type(this.street1, 'abc street');
    // await page.type(this.street2, 'New York 2');
    await page.type(this.city, 'New York');
    await page.type(this.zip, '10001');
    await page.click(this.country);
    await page.type(this.countryInput, 'United States (US)');
    await page.keyboard.press('Enter');
    await page.click(this.state);
    await page.type(this.state, 'New York');
    // await page.click(this.paymentOptionlink)
    await page.click(this.next)
    await page.waitForTimeout(2000)

    // payment options
    await page.type(this.accountName, 'rkaccount');
    await page.type(this.accountNumber, '1234');
    await page.type(this.bankName, 'rkbank');
    await page.type(this.bankAddress, 'rkaddress');
    await page.type(this.routingNumber, '1111');
    await page.type(this.iban, '1111');
    await page.type(this.swift, '1111');
    await page.type(this.payPalEmail, 'rk@gmail.com');
    await page.click(this.enableSelling)
    await page.click(this.publishProductDirectly)
    await page.click(this.makeVendorFeature)

    await page.click(this.createVendor)
    // await page.click(this.addAnother)
    await page.waitForTimeout(5000)
  },



  async addproduct() {
    await page.click(this.products);
    await page.waitForTimeout(5000)
    await page.click(this.addNew);
    await page.waitForTimeout(5000)
    // Simple product, Grouped product, External/Affiliate product, Variable product
    for (let i = 0; i < this.productsName.length; i++) {
      await page.type(this.productName, this.productsName[i]);
      await page.waitForTimeout(500)
      await page.type(this.regularPrice, this.prizes[i]);

      // await page.type(this.salePrice, category);
      // await page.click(this.vendor);
      await page.waitForTimeout(1000)
      await page.click(this.publish);
      await page.waitForTimeout(500)
      await page.click(this.addNew);
      await page.waitForTimeout(1000);
    }
  },

  async addcategory() {
    await page.click(this.products);
    await page.waitForTimeout(5000)
    await page.click(this.categories);
    await page.waitForTimeout(5000)
    for (category of this.productCategories) {
      await page.type(this.categoryName, category);
      await page.type(this.categorySlug, category);
      await page.click(this.addNewCategory);
      await page.waitForTimeout(2000);
    }
  },

  // need to recheck
  async addattributes() {
    await page.click(this.products);
    await page.waitForTimeout(5000)
    await page.click(this.attributes);
    await page.waitForTimeout(5000)
    for (let i = 0; i < this.productAttributes.length; i++) {
      await page.waitForTimeout(500);
      await page.type(this.attributeName, this.productAttributes[i]);
      await page.type(this.attributeSlug, this.productAttributes[i]);
      await page.click(this.addAttribute);
      // await page.waitForTimeout(1000)
      await page.click(this.configureTerms(this.productAttributes[i]));

      for (let j = 0; j < this.attributeValues[i].length; j++) {
        await page.waitForTimeout(500);
        await page.type(this.attributeValue, this.attributeValues[i][j]);
        await page.type(this.attributeValueSlug, this.attributeValues[i][j]);
        await page.click(this.addattributeValue);
      }
      await page.click(this.attributes);
      // await page.waitForTimeout(1000)
    }
  },

  async adminapprovewholesalerequest(customer) {

    await page.click(this.dokan);
    await page.waitForTimeout(2000);
    await page.click(this.wholesaleCutomer);
    await page.waitForTimeout(10000);
    await page.click(this.wholesaleCustomerSlider(customer))
    await page.waitForTimeout(2000); // TODO: add page load complete to revome this line


    // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    // // await wp.createNewPost()

    // await wp.activatePlugin('http://wordpress.org/plugins/hello-dolly/')
    // // await page.waitForTimeout(20000); // TODO: add page load complete to revome this line
    // // clickButton('Posts')
    // await wp.clickMenuItem('Posts')
    // // await page.waitForTimeout(2000); // TODO: add page load complete to revome this line
    // // clickMenuItem('Wholesale Customer')
    // // await page.waitForTimeout(2000); // TODO: add page load complete to revome this line
    // // await page.waitForTimeout(4000); // TODO: add page load complete to revome this line

  },


}