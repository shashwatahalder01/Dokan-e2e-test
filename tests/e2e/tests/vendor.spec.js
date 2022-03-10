// require('dotenv').config()
const { createUser, loginUser, changeSiteTimezone } = require('@wordpress/e2e-test-utils');
const loginPage = require('../pages/login.js')
const vendorPage = require('../pages/vendor.js')
const data = require('../utils/testdata.js')
// const env = process.env // TODO: Configure through jest global setupß


describe('vendor functionaly test', () => {

   beforeAll(async () => {
      // await page.setDefaultNavigationTimeout(30000);
   });
   // await page.goto('http://localhost:8889');

   //  afterAll(async () => {
   //    await browser.close()
   //  });

   // beforeEach(async () => {
   //    await page.goto('http://dokan2.test/my-account');
   //  });

   //  afterEach(async () => {
   //    await browser.close()
   //  });


   // it('vendor register', async () => {
      // await loginPage.vendorregister(
      //    data.vendorinfo.userEmail,
      //    data.vendorinfo.password,
      //    data.vendorinfo.firstName,
      //    data.vendorinfo.lastName,
      //    data.vendorinfo.shopName,
      //    data.vendorinfo.companyName,
      //    data.vendorinfo.companyId,
      //    data.vendorinfo.vatNumber,
      //    data.vendorinfo.bankName,
      //    data.vendorinfo.bankIban,
      //    data.vendorinfo.phone,
      //    )
      // await changeSiteTimezone('UTC+6')
      // const firstName = await data.vendorinfo.firstName
      // const passwordd = await createUser(data.vendorinfo.firstName,data.vendorinfo.lastName,'Vendor')
      // await loginUser(firstName, passwordd)
      // console.log(firstName, passwordd)
      // await page.waitForTimeout(80000);
   // });

   // it('vendor login', async () => {
   //    await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   // });


   // it('vendor logout', async () => {
   //    await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   //    await loginPage.vendorlogout() // TODO: shift to vendor page
   // });



   // it('vendor add product', async () => {
   //    // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   //    await loginPage.login()
   //    await vendorPage.goToVendorDashbord()
   //    await vendorPage.addproduct(data.product.name,data.product.price,'Uncategorized')
   // });



   // it('vendor add coupon', async () => {
   //    await loginPage.login()
   //    await vendorPage.goToVendorDashbord()
   //    await vendorPage.addcoupon(data.coupon.title, data.coupon.amount)
   // });


   //    it('vendor request withdraw', async () => {
   //    await loginPage.login()
   //    await vendorPage.goToVendorDashbord()
   //    await vendorPage.requestwithdraw()
   // });


   // it('vendor cancel request withdraw', async () => {
   //    // await loginPage.login()
   //    // await vendorPage.goToVendorDashbord()
   //    await vendorPage.cancelrequestwithdraw()
   // });

   //    it('vendor add auto withdraw disbursement schedule ', async () => {
   //    await loginPage.login()
   //    await vendorPage.goToVendorDashbord()
   //    await vendorPage.addautowithdrawdisbursementschedule('weekly')
   // });

      it('vendor add default withdraw payment methods ', async () => {
      await loginPage.login()
      await vendorPage.goToVendorDashbord()
      await vendorPage.adddefaultwithdrawpaymentmethods('weekly')
   });




}); 