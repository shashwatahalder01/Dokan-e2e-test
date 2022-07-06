const loginPage = require('../pages/login.js')
const adminPage = require('../pages/admin.js')
const customerPage = require('../pages/customer.js')
const vDashboardPage = require('../pages/vDashboard.js')
const vDashboardLocators = require("../pages/vDashboard-locators.js")
const base = require("../pages/base.js")  //Actions
const data = require('../utils/testData.js')




describe('Vendor Exploration test', () => {



    //----------------------------------Test Scripts-------------------------------------------//

    /**Option-1 
    */
    //Vendor > Dashboard Page
    it('1.0: Explore Vendor DASHBOARD', async () => {
        //TODO: vendor must exist
        await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //Explore Dashboard
        await vDashboardPage.vDashboardExplore();
    });



    /**Option-2 
    */
    //Vendor > Dashboard > Products Page
    it('2.0: Explore Vendor > PRODUCTS', async () => {
        //TODO: product must exist: publish,draft,pending review
        // await loginPage.adminLogin(process.env.ADMIN, process.env.ADMIN_PASSWORD)

        await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //Explore Products
        await vDashboardPage.vProductExplore();
    });

    //Product Add
    it('2.1: Explore Vendor > PRODUCTS > ADD', async () => {
        await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //Explore Products > Add
        await vDashboardPage.vProductAddExplore();
    });

    // Product Details
    it('2.2: Explore Vendor > PRODUCTS > DETAILS [Single Product]', async () => {
        //TODO: enable min-max settings, enable geolocation module
        await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //Explore Products > Details
        await vDashboardPage.vProductDetailsExplore();
    });



    /**Option-3
    */
    //Vendor > Dashboard > Orders Page
    it('3.0: Explore Vendor > Orders', async () => {
        //TODO: multiple customer order
        // await customerPage.buyProduct('p1_v1', false, false, 'bank')
        await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //Explore Products
        await vDashboardPage.vOrdersExplore();
    });

    //Order Details
    it('3.1: Explore Vendor > Orders > Details', async () => {
        // await loginPage.login(process.env.CUSTOMER, process.env.CUSTOMER_PASSWORD)
        // await customerPage.buyProduct('p1_v1', false, false, 'bank')
        // await loginPage.switchUser(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
        //Explore Products
        await vDashboardPage.vOrdersDetailsExplore();
    });



    // /**Option-4
    // */
    // //Vendor > Dashboard > User Subscription
    // it('4.0: Explore Vendor > User Subscriptions', async () => {
    //     await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
    //     await base.goto('dashboard/orders')
    //     //Explore Products
    //     await vDashboardPage.vUserSubscriptionsPageExplore();
    // });

    // //Vendor > Dashboard > User Subscription > Details
    // it('4.1: Explore Vendor > User Subscriptions > Details', async () => {
    //     await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
    //     await base.goto('dashboard/orders')
    //     //Explore Products
    //     await vDashboardPage.vUserSubscriptionsDetailsPageExplore();
    // });



    // /**Option-5
    // */    
    // //Vendor > Dashboard > Request Quotes
    //     it('Explore Vendor > Request Quotes', async () => {
    //         await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
    //         await base.goto('dashboard/orders')
    //         //Explore Products
    //         await vDashboardPage.vRequestQuotes();
    //     });







});