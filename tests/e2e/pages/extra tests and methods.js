// const base = require("./base.js")

// module.exports = {

//     // locators

//     continue: '#language-continue',
//     letsGo: '.button.button-large',

//     // wp database connect
//     databaseName: '#dbname',
//     username: '#uname',
//     password: '#pwd',
//     databaseHost: '#dbhost',
//     tablePrefix: '#prefix',
//     submit: 'input[value="Submit"]',
//     // runTheInstallation: '',

//     // admin setup
//     siteTitle: '#weblog_title',
//     adminUsername: '#user_login',
//     adminPassword: '#pass1',
//     confirmWeakPassword: 'input[name="pw_weak"]',
//     user_email: '#admin_email',
//     searchEngineVisibility: '#blog_public',
//     installWordPress: '#submit',

//     setupLogin: '.button.button-large',


//     // admin signIn
//     userNameOrEmail: '#user_login',
//     adminLoginPassword: '#user_pass',
//     rememberme: '#rememberme',
//     wp_login: '#wp-submit',


//     // wp admin dashboard

//     home: 'li[id="menu-dashboard"] a[class="wp-first-item"]',
//     updates: 'a[href="update-core.php"]',
//     posts: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first"] div[class="wp-menu-name"]',
//     media: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-media"] div[class="wp-menu-name"]',
//     pages: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-page"] div[class="wp-menu-name"]',
//     comments: 'a[class="wp-not-current-submenu menu-top menu-icon-comments menu-top-last"] div[class="wp-menu-name"]',
//     appearance: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first"] div[class="wp-menu-name"]',
//     tools: 'a[class="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-icon-tools"] div[class="wp-menu-name"]',
//     settings: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-settings menu-top-last"] div[class="wp-menu-name"]',
//     collapseMenu: '#collapse-button',


//     // plugin
//     //plugins menus
//     installedPlugins: '//a[text()="Installed Plugins"]',

//     //add new plugins
//     addNew: '.page-title-action',
//     searchPlugin: '#search-plugins',
//     uploadPlugin: '.upload',
//     chooseFile: '#pluginzip',
//     installNow: '#install-plugin-submit',
//     activatePlugin: '.button.button-primary',
//     activateCustomPlugin: (plugin) => `//strong[normalize-space()="${plugin}"]/..//div//span[@class="activate"]`,


//     activateCustomPlugin(plugin) {
//         return `//strong[normalize-space()="${plugin}"]/..//div//span[@class="activate"]`
//     },

//     // users
//     users: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-users"] div[class="wp-menu-name"]',
//     // users: 'a[class="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-icon-users"] div[class="wp-menu-name"]',
//     addNewUsers: 'a[href="user-new.php"]',
//     username: '#user_login',
//     email: '#email',
//     firstName: '#first_name',
//     lastName: '#last_name',
//     website: '#url',
//     password: '#pass1',
//     sendUserNotification: '#send_user_notification',
//     role: '#role',
//     addNewUser: '#createusersub',



//     // methods
//     wp_setup() {
//         page.click(this.continue)
//         page.click(this.letsGo)
//         page.type(this.databaseName, this.user_databaseName)
//         page.type(this.username, this.user_name)
//         page.type(this.password, this.user_password)
//         // page.type(this.databaseHost,this.user_databaseHost)
//         // page.type(this.tablePrefix,this.user_tablePrifix)
//         page.click(this.submit)
//     },

//     admin_setup() {
//         // page.click(this.continue)
//         // page.type(this.siteTitle,this.user_siteTitle)
//         // page.type(this.adminUsername,this.user_adminUsername)
//         // page.type(this.adminPassword,this.user_admin_password)
//         // page.click(this.confirmWeakPassword)
//         // page.type(this.user_email,this.user_admin_email)
//         // page.click(this.installWordPress)
//         page.click(this.setupLogin)
//     },

//     login() {
//         page.goto('/')
//         page.type(this.userNameOrEmail, this.user_adminUsername)
//         page.type(this.adminLoginPassword, this.user_admin_password)
//         page.click(this.rememberme)
//         page.click(this.wp_login)

//     },


//     addRemotePlugin() { },

//     addLocalPlugin() {
//         page.click(this.plugin)
//         page.click(this.addNew)
//         page.click(this.uploadPlugin)
//         page.attachFile(this.chooseFile, this.helloDolly)
//         page.click(this.installNow)
//         page.click(this.activatePlugin)
//         page.click(this.activateCustomPlugin('Hello Dolly'))
//     },

//     activateCustomPlugin() {
//         page.click(this.plugin)
//         page.click(this.activateCustomPlugin('Hello Dolly'))
//     },

// }








// ######################################################################################




// //TODO: delete this not necessary
// async checkUserExists(user) {
//     await base.goIfNotThere(data.subUrls.backend.login)
//     let emailField = await base.isVisible(selector.backend.email)
//     if (emailField) {
//         await base.clearAndType(selector.backend.email, user.username)
//         await base.clearAndType(selector.backend.password, user.password)
//         await base.clickAndWait(selector.backend.login)
//     }
//     let loginError = await base.isVisible(selector.backend.loginError)
//     if (loginError) {
//         let errorMessage = await base.getElementText(selector.backend.loginError)
//         expect(errorMessage).toMatch(`Error: The username ${user.username} is not registered on this site. If you are unsure of your username, try your email address instead.`)
//         return false
//     }
//     return true
// }



// Customer Add Payment Method //TODO: shift to payment page
// async addPaymentMethod(card) { //TODO: Actual card number required
//     await this.goToMyAccount()
//     await page.click(selector.customer.cMyAccount.paymentMethods)
//     await base.wait(2)
//     await page.click(selector.customer.cPaymentMethods.addPaymentMethod)
//     await base.wait(2)

//     //negative test
//     // await base.clickAndWait(selector.customer.cPaymentMethods.addPaymentMethodCard)
//     // let failureMessage = await base.getElementText(selector.customer.cWooSelector.failureMessage)
//     // expect(failureMessage).toMatch("Your card number is incomplete.")

//     let stripeCardIframe = await base.switchToIframe(selector.customer.cPaymentMethods.stripeCardIframe)
//     await base.iframeClearAndType(stripeCardIframe, selector.customer.cPaymentMethods.stripeCardNumber, card.number)
//     await base.iframeClearAndType(stripeCardIframe, selector.customer.cPaymentMethods.stripeCardExpiryDate, card.expiryDate)
//     await base.iframeClearAndType(stripeCardIframe, selector.customer.cPaymentMethods.stripeCardCvc, card.cvc)
//     await page.click(selector.customer.cPaymentMethods.addPaymentMethodCard)
//     await base.wait(1)

//     let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceError)
//     expect(successMessage).toMatch("Unable to process this payment, please try again or use alternative method.")
// },

// // Customer Delete Payment Method
// async deletePaymentMethod() { //TODO:need to test
//     await base.clickAndWait(selector.customer.cMyAccount.paymentMethods)
//     await page.click(selector.customer.cPaymentMethods.deleteMethod)

//     let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
//     expect(successMessage).toMatch("Payment method deleted.")
// },

// Customer Register If Not Exists //TODO: delete if not necessary
// async customerRegisterIfNotExists(userEmail, password) {
//     let UserExists = await loginPage.checkUserExists(userEmail, password)
//     if (!UserExists) {
//         await this.customerRegister(userEmail + '@gmail.com', password)
//     }
// },


it.skip('customer can add payment method', async () => {
  await loginPage.login(data.customer)
  await customerPage.addPaymentMethod(data.card.strip)
  await customerPage.deletePaymentMethod()
})


it.skip('admin set dokan settings', async () => {
  await loginPage.adminLogin(data.admin)
  await adminPage.goToDokanSettings()
  await adminPage.setDokanSettings()
})


        // // Vendor Register If Not Exists
        // async vendorRegisterIfNotExists(userEmail, password, firstName, lastName, shopName, companyName, companyId, vatNumber, bankName, bankIban, phone, setupWizardChoice, setupWizardData) {
        //     let UserExists = await loginPage.checkUserExists(userEmail, password)
        //     if (!UserExists) {
        //         await this.vendorRegister(userEmail, password, firstName, lastName, shopName, companyName, companyId, vatNumber, bankName, bankIban, phone, setupWizardChoice, setupWizardData)
        //     }
        // },


    // beforeAll(async () => {
    //     let pages = await browser.pages();
    //         if (pages.length > 1)
    //             await pages[0].close();
    // })