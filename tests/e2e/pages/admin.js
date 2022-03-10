const { clickMenuItem, clickOnMoreMenuItem } = require("@wordpress/e2e-test-utils");
const base = require("../pages/base.js");
// // const { clickButton, clickMenuItem } = require('@wordpress/e2e-test-utils');
// const wp = require('@wordpress/e2e-test-utils');
const loginPage = require('../pages/login.js')


module.exports = {


  productsName: ["Plain Cotton Tshirt", "The moon Thsirt", "Summer Thirt"],
  prizes: [100, 150, 250],
  tshirts: ["Plain Cotton Tshirt", "The moon Thsirt", "Summer Thirt"],
  parentCategories: [
    "Electronic Devices",
    "Electronic Accessories",
    "Men's Fashion",
    "Clothings",
    "Women's Fashion",
  ],
  productCategories: [
    "SmartPhones",
    "Laptops",
    "Accessories",
    "Shirts",
    "T-Shirts",
    "Polo Shirts",
    "Jeans",
    "Pants",
    "Shoes",
    "Bags",
  ],
  productAttributes: ["Size", "Color"],
  attributeValues: [
    ["S", "M", "L", "XL", "XXL"],
    ["Red", "Blue", "Black", "Yellow", "White", "Deep blue"],
  ],

  // locators

  // wp admin dashboard

  home: 'li[id="menu-dashboard"] a[class="wp-first-item"]',
  updates: 'a[href="update-core.php"]',
  posts: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first"] div[class="wp-menu-name"]',
  media: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-media"] div[class="wp-menu-name"]',
  pages: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-page"] div[class="wp-menu-name"]',
  comments: 'a[class="wp-not-current-submenu menu-top menu-icon-comments menu-top-last"] div[class="wp-menu-name"]',
  appreance: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first"] div[class="wp-menu-name"]',
  tools: 'a[class="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-icon-tools"] div[class="wp-menu-name"]',
  settings: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-settings menu-top-last"] div[class="wp-menu-name"]',
  collapseMenu: '#collapse-button',


  // plugin

  plugin: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins"] div[class="wp-menu-name"]',
  addnew: '.page-title-action',
  searchPlugin: '#search-plugins',
  uploadPlugin: 'a[role="button"]',
  chooseFile: '#pluginzip',
  installNow: '#install-plugin-submit',
  activatePlugin: '.button.button-primary',

  activateCustomPlugin(plugin) {
    return `//strong[normalize-space()="${plugin}"]/..//div//span[@class="activate"]`
  },

  // users

  users: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-users"] div[class="wp-menu-name"]',
  // users: 'a[class="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-icon-users"] div[class="wp-menu-name"]',
  addNewusers: 'a[href="user-new.php"]',
  username: '#user_login',
  email: '#email',
  firstName: '#first_name',
  lastName: '#last_name',
  website: '#url',
  password: '#pass1',
  sendUserNotification: '#send_user_notification',
  role: '#role',
  addNewUser: '#createusersub',



  // woocommerce
  woocommerce: 'a[class="wp-has-submenu wp-not-current-submenu menu-top toplevel_page_woocommerce menu-top-first"] div[class="wp-menu-name"]',
  woocommerceHome: 'li[id="toplevel_page_woocommerce"] a[class="wp-first-item"]',
  woocommerceOrders: 'a[href="edit.php?post_type=shop_order"]',
  woocommerceSubscriptions: 'a[href="edit.php?post_type=shop_subscription"]',
  woocommerceAuctionActivity: 'a[href="admin.php?page=auctions-activity"]',
  woocommerceCustomers: 'a[href="admin.php?page=wc-admin&path=%2Fcustomers"]',
  woocommerceCoupons: 'a[href="admin.php?page=coupons-moved"]',
  woocommerceReports: 'a[href="admin.php?page=wc-reports"]',

  // woocommerce settings
  woocommerceSettings: 'a[href="admin.php?page=wc-settings"]',

  woocommerceSettingsGeneral: 'nav[class="nav-tab-wrapper woo-nav-tab-wrapper"] a:nth-child(1)',

  enableTax: '#woocommerce_calc_taxes',
  generalSaveSettings: 'button[value="Save changes"]',

  products: 'nav[class="nav-tab-wrapper woo-nav-tab-wrapper"] a:nth-child(2)',
  // tax settings
  tax: 'div[class="wrap woocommerce"] a:nth-child(3)',

  standardRates: 'a[href="http://dokan2.test/wp-admin/admin.php?page=wc-settings&tab=tax&section=standard"]', // TODO: needs to be dynamic
  insertRow: '.button.plus.insert',
  taxrate: 'input[placeholder="0"]',
  standardRatesSaveChanges: 'button[value="Save changes"]',


  shipping: 'a:nth-child(4)',
  payments: 'a:nth-child(5)',
  accountsAndPrivacy: 'body > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(5) > form:nth-child(1) > nav:nth-child(1) > a:nth-child(6)',
  emails: 'body > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(5) > form:nth-child(1) > nav:nth-child(1) > a:nth-child(7)',
  integration: 'a:nth-child(8)',
  advandce: 'a:nth-child(9)',
  auctions: 'a:nth-child(10)',
  settingsSubscriptions: 'a:nth-child(11)',

  status: 'a[href="admin.php?page=wc-status"]',
  extensions: 'a[href="admin.php?page=wc-addons"]',

  // settings

  wordpressSettings: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-settings menu-top-last"] div[class="wp-menu-name"]',

  // general settings
  // general: '.wp-first-item.current[href="options-general.php"]',
  general: '#menu-settings .wp-first-item > .wp-first-item',
  anyOneCanRegister: '#users_can_register',
  timezone: '#timezone_string',
  generalSaveChanges: '#submit',



  writing: 'a[href="options-writing.php"]',
  reading: 'a[href="options-reading.php"]',
  discussion: 'a[href="options-discussion.php"]',
  media: 'a[href="options-media.php"]',
  permalinks: 'a[href="options-permalink.php"]',
  privacy: 'a[href="options-privacy.php"]',



  // Dokan

  dokan: '.toplevel_page_dokan > .wp-menu-name',
  vendors: 'a[href="admin.php?page=dokan#/vendors"]',
  wholesaleCutomer: '.wp-submenu > li:nth-child(15) > a',






  // wholesale customer

    wholesaleCustomerSlider(customer) {
      return '//span[@class="slider round"]'
    // return `//td[contains(text(),normalize-space('${customer}'))]/ancestor::tr//span[@class="slider round"]`
    // return `//td[contains(text(),normalize-space('${customer}'))]/..//span[@class="slider round"]`
    // return `//td[@class = 'column username' and contains(text(),normalize-space('${customer}'))]/..//span[@class="slider round"]`
    
    
  },


















  //??????????????????????????????????????????????????????????

  // products
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
  categories: 'a[href="edit-tags.php?taxonomy=product_cat&post_type=product"]',
  categoryName: "#tag-name",
  categorySlug: "#tag-slug",
  addNewCategory: "#submit",

  tags: 'a[href="edit-tags.php?taxonomy=product_tag&post_type=product"]',

  // attributes
  attributes: 'a[href="edit.php?post_type=product&page=product_attributes"]',
  attributeName: "#attribute_label",
  attributeSlug: "#attribute_name",
  addAttribute: "#submit",
  configureTerms(attributeName) {
    return `//td[contains(text(), '${attributeName.toLowerCase()}')]/..//a[normalize-space()="Configure terms"]`;
  },
  attributeValue: "#tag-name",
  attributeValueSlug: "#tag-slug",



  // dokan vendors
  dokan: 'a[class="wp-has-submenu wp-not-current-submenu menu-top toplevel_page_dokan menu-top-last"] div[class="wp-menu-name"]',
  vendors: 'a[href="admin.php?page=dokan#/vendors"]',

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


  //methods

  async addtestsettings() {


    // await page.click(this.wordpressSettings)
    await page.hover(this.wordpressSettings)
    await page.waitForTimeout(2000);
    await page.click(this.general)
    await page.waitForTimeout(2000);
    // enable user registration
    await page.click(this.anyOneCanRegister)

    // set time zone

    await page.select(this.timezone, 'UTC+6')
    await page.click(this.generalSaveChanges)

    // // eanable tax
    // await page.click(this.woocommerce);
    // await page.click(this.woocommerceSettings);
    // await page.click(this.woocommerceSettingsGeneral)
    // await page.waitForTimeout(5000);
    // await page.click(this.enableTax)
    // await page.click(this.generalSaveChanges)
    // await page.waitForTimeout(2000);


    // // set tax rate
    // await page.click(this.tax);
    // await page.click(this.standardRates);
    // await page.click(this.insertRow);
    // await page.type(this.taxrate, '5');
    // await page.click(this.standardRatesSaveChanges);
    // await page.waitForTimeout(2000);


    //add shipping zone


    //add shipping methods



    await page.waitForTimeout(5000);
    await page.waitForTimeout(5000);



  },


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