const loginPage = require('../pages/login.js')
const vDashboardPage = require('../pages/vDashboard.js')
const vDashboardLocators = require("../pages/vDashboard-locators.js")
const base = require("../pages/base.js")  //Actions




describe('Vendor Exploration test', () => {



    //----------------------------------Test Scripts-------------------------------------------//

    /**Option-1 
    */
    //Vendor > Dashboard Page
    it.only('1.0: Explore Vendor DASHBOARD', async () => {
        await loginPage.login(process.env.RATVENDOR2, process.env.RATVENDOR2_PASSWORD)
        // await base.goto('dashboard')
        // //Explore Dashboard
        // await vDashboardPage.vDashboardExplore();
    });



    /**Option-2 
    */
    //Vendor > Dashboard > Products Page
    it('2.0: Explore Vendor > PRODUCTS', async () => {
        await loginPage.login(process.env.RATVENDOR2, process.env.RATVENDOR2_PASSWORD)
        await base.goto('dashboard/products')
        //Explore Products
        await vDashboardPage.vProductExplore();
    });

    //Product Add
    it('2.1: Explore Vendor > PRODUCTS > ADD', async () => {
        await loginPage.login(process.env.RATVENDOR2, process.env.RATVENDOR2_PASSWORD)
        await base.goto('dashboard/products')
        await base.clickAndWaitForHTMLRendered(vDashboardLocators.vProductsPage.addNewProductButton)
        //Explore Products > Add
        await vDashboardPage.vProductAddExplore();
    });

    //Product Details
    it('2.2: Explore Vendor > PRODUCTS > DETAILS [Single Product]', async () => {
        await loginPage.login(process.env.RATVENDOR2, process.env.RATVENDOR2_PASSWORD)

        await base.goto('dashboard/products')
        await base.clickAndWait(vDashboardLocators.vProductsDetailsPage.productClick1)
        //Explore Products > Details
        await vDashboardPage.vProductDetailsExplore();
    });



    /**Option-3
    */
    //Vendor > Dashboard > Orders Page
    it('3.0: Explore Vendor > Orders', async () => {
        await loginPage.login(process.env.RATVENDOR2, process.env.RATVENDOR2_PASSWORD)
        await base.goto('dashboard/orders')
        //Explore Products
        await vDashboardPage.vOrdersExplore();
    });

    //Order Details
    it('3.1: Explore Vendor > Orders > Details', async () => {
        await loginPage.login(process.env.RATVENDOR2, process.env.RATVENDOR2_PASSWORD)
        await base.goto('dashboard/orders')
        //Explore Products
        await vDashboardPage.vOrdersDetailsExplore();
    });



    /**Option-4
    */
    //Vendor > Dashboard > User Subscription
    it('4.0: Explore Vendor > User Subscriptions', async () => {
        await loginPage.login(process.env.RATVENDOR2, process.env.RATVENDOR2_PASSWORD)
        await base.goto('dashboard/orders')
        //Explore Products
        await vDashboardPage.vUserSubscriptionsPageExplore();
    });

    //Vendor > Dashboard > User Subscription > Details
    it('4.1: Explore Vendor > User Subscriptions > Details', async () => {
        await loginPage.login(process.env.RATVENDOR2, process.env.RATVENDOR2_PASSWORD)
        await base.goto('dashboard/orders')
        //Explore Products
        await vDashboardPage.vUserSubscriptionsDetailsPageExplore();
    });



    // /**Option-5
    // */    
    // //Vendor > Dashboard > Request Quotes
    //     it('Explore Vendor > Request Quotes', async () => {
    //         await loginPage.login(process.env.RATVENDOR2, process.env.RATVENDOR2_PASSWORD)
    //         await base.goto('dashboard/orders')
    //         //Explore Products
    //         await vDashboardPage.vRequestQuotes();
    //     });







});