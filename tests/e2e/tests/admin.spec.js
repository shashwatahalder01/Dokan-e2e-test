
const { loginUser } = require('@wordpress/e2e-test-utils');
const loginPage = require('../pages/login.js')
const adminPage = require('../pages/admin.js');
const timout = 600000


describe('admin functionaly test', () => {

    // beforeAll(async () => {
    //     await page.setDefaultNavigationTimeout(30000); // TODO: value 0 or bigger ??
    // });

    //  afterAll(async () => {
    //    await browser.close()
    //  });

    // beforeEach(async () => {
    //    await page.goto('http://dokan2.test/my-account');
    //  });

    //  afterEach(async () => {
    //    await browser.close()
    //  });


    // it('admin login', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    // });


    // it('admin logout', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await loginPage.adminlogout() // TODO: shift to vendor page

    // });



    it('admin add test settings', async () => {
        // await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
        await loginPage.adminlogin()
        // await adminPage.setWpSettings()
        // await adminPage.setDokanSettings()
        await adminPage.setWoocommerceSettings()
        // await adminPage.setpaymetnsettings()

    },timout);


    // it('admin add vendor', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addvendor()

    // });

    // it('admin add product', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addproduct()

    // });

    // it('admin add categories', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addcategory()

    // });
    // it('admin add attributes', async () => {
    //     await loginPage.adminlogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD)
    //     await adminPage.addattributes()

    // });




});