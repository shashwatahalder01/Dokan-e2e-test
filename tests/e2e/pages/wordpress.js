const base = require("../pages/base.js");

module.exports = {


    // data
    user_databaseName: 'wp',
    user_name: 'root',
    user_password: '01shashwata01',
    user_databaseHost: 'localhost',
    user_tablePrifix: 'wp_',

    //admin data 
    user_siteTitle: 'wp_site',
    user_adminUsername: 'admin',
    user_admin_password: 'admin',
    user_admin_email: 'shashwata@wedevs.com',


    //plugin_path
    helloDolloy: 'data/hello-dolly.1.7.2.zip',


    // locators

    continue: '#language-continue',
    letsgo: '.button.button-large',

    // wp database connect
    databaseNamae: '#dbname',
    username: '#uname',
    password: '#pwd',
    databaseHost: '#dbhost',
    tablePrefix: '#prefix',
    submit: 'input[value="Submit"]',

    // runtheinstallation: '', ?????

    // admin setup
    siteTitle: '#weblog_title',
    adminUsername: '#user_login',
    adminPassword: '#pass1',
    confirmWeakPassword: 'input[name="pw_weak"]',
    user_email: '#admin_email',
    searchEngineVisibility: '#blog_public',
    installWordPress: '#submit',

    setup_login: '.button.button-large',


    // admin signin
    usernmaorEmail: '#user_login',
    adminlogin_Password: '#user_pass',
    rememberme: '#rememberme',
    wp_login: '#wp-submit',


    // wp admin dashboard

    home: 'li[id="menu-dashboard"] a[class="wp-first-item"]',
    updates: 'a[href="update-core.php"]',
    posts: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first"] div[class="wp-menu-name"]',
    media: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-media"] div[class="wp-menu-name"]',
    pages: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-page"] div[class="wp-menu-name"]',
    comments: 'a[class="wp-not-current-submenu menu-top menu-icon-comments menu-top-last"] div[class="wp-menu-name"]',
    appearance: 'a[class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first"] div[class="wp-menu-name"]',
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



    // methods
    wp_setup() {
        I.click(this.continue);
        I.wait(1);
        I.click(this.letsgo);
        I.wait(2);
        I.fillField(this.databaseNamae, this.user_databaseName);
        I.fillField(this.username, this.user_name);
        I.fillField(this.password, this.user_password);
        // I.fillField(this.databaseHost,this.user_databaseHost);
        // I.fillField(this.tablePrefix,this.user_tablePrifix);
        I.click(this.submit);
        I.wait(30)
    },

    admin_setup() {
        // I.click(this.continue);
        // I.wait(1);
        // I.fillField(this.siteTitle,this.user_siteTitle);
        // I.fillField(this.adminUsername,this.user_adminUsername);
        // I.fillField(this.adminPassword,this.user_admin_password);
        // I.click(this.confirmWeakPassword)
        // I.fillField(this.user_email,this.user_admin_email);
        // I.click(this.installWordPress)
        // I.wait(40)
        I.click(this.logsetup_loginin)
    },

    login() {
        I.amOnPage('/');
        I.fillField(this.usernmaorEmail, this.user_adminUsername);
        I.fillField(this.adminlogin_Password, this.user_admin_password);
        I.click(this.rememberme)
        I.click(this.wp_login)

    },


    addRemotePlugin() {

    },
    addLocalPlugin() {
        I.click(this.plugin)
        // I.click(this.addnew)
        // I.click(this.uploadPlugin)
        // I.attachFile(this.chooseFile, this.helloDolloy)
        // I.click(this.installNow)
        // I.click(this.activatePlugin)
        // I.click(this.activateCustomPlugin('Hello Dolly'))
        I.wait(20)

    },

    activateCustomPluggin() {
        I.click(this.plugin)
        I.click(this.activateCustomPlugin('Hello Dolly'))
    },

}