// require('dotenv').config()
const { createUser, loginUser, changeSiteTimezone } = require('@wordpress/e2e-test-utils');
const loginPage = require('../pages/login.js')
const vendorPage = require('../pages/vendor.js')
const data = require('../utils/testdata.js')
const base = require("../pages/base.js");
// const env = process.env // TODO: Configure through jest global setupß


// jest.useRealTimers();

describe('vendor functionaly test', () => {

   beforeAll(async () => {
      // jest.setTimeout(600 * 1000)
      // await page.setDefaultNavigationTimeout(30000);
      // jest.useFakeTimers('legacy')
   });
   // await page.goto('http://localhost:8889');

   //  afterAll(async () => {
   //    await browser.close()
   //  });

   beforeEach(async () => {
      // await page.goto('http://dokan2.test/my-account');
      // jest.useFakeTimers()
      // jest.setTimeout(60000) 
   });

   // afterEach(async () => {
   // jest.runOnlyPendingTimers()
   // jest.useRealTimers()
   //    // await browser.close()
   //    // await loginPage.vendorlogout()
   //    // await page.waitForTimeout(3000);
   //    // await page.waitForNavigation({waitUntil: 'networkidle2'});
   // });


   it('vendor can register', async () => {
      await loginPage.vendorregister(
         data.vendorinfo.userEmail,
         data.vendorinfo.password,
         data.vendorinfo.firstName,
         data.vendorinfo.lastName,
         data.vendorinfo.shopName,
         data.vendorinfo.companyName,
         data.vendorinfo.companyId,
         data.vendorinfo.vatNumber,
         data.vendorinfo.bankName,
         data.vendorinfo.bankIban,
         data.vendorinfo.phone,
      )
      await changeSiteTimezone('UTC+6')
      const firstName = await data.vendorinfo.firstName
      const password = await createUser(data.vendorinfo.firstName, data.vendorinfo.lastName, 'Vendor')
      await loginUser(firstName, password)
      // await loginUser('Nannie', '1aO4e9S)7iUs8cdgx5pebN7)')
      // console.log(firstName, password)
      await page.waitForTimeout(80000);
   });

   it('vendor can login', async () => {
      // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
      await loginPage.login()
   });


   // it('vendor can logout', async () => {
   //    // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   //    await loginPage.login()
   //    await loginPage.vendorlogout() // TODO: shift to vendor page
   // });



   it('vendor can add product', async () => {
      // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
      await loginPage.login()
      await vendorPage.goToVendorDashbord()
      await vendorPage.addproduct(data.product.name, data.product.price, 'Uncategorized')
   });



   it('vendor can add coupon', async () => {
      await loginPage.login()
      await vendorPage.goToVendorDashbord()
      await vendorPage.addcoupon(data.coupon.title, data.coupon.amount)
   });


   it('vendor can request withdraw', async () => {
      await loginPage.login()
      await vendorPage.goToVendorDashbord()
      await vendorPage.requestwithdraw()
   });


   it('vendor can cancel request withdraw', async () => {
      await loginPage.login()
      await vendorPage.goToVendorDashbord()
      await vendorPage.cancelrequestwithdraw()
   });

   it('vendor can add auto withdraw disbursement schedule ', async () => {
      await loginPage.login()
      await vendorPage.goToVendorDashbord()
      await vendorPage.addautowithdrawdisbursementschedule('dokan_custom', 'weekly', '5', '15')
   });

   // it.skip('vendor can add default withdraw payment methods ', async () => {
   //    await loginPage.login()
   //    await vendorPage.goToVendorDashbord()
   //    await vendorPage.adddefaultwithdrawpaymentmethods('Skrill')
   // });

   // it.skip('vendor can add default withdraw payment methods ', async () => {
   //    await loginPage.login()
   //    await vendorPage.goToVendorDashbord()
   //    await vendorPage.adddefaultwithdrawpaymentmethods('weekly')
   // });

   it('vendor can set store settings ', async () => {
      // jest.setTimeout(10 * 1000); 
      await loginPage.login()
      await vendorPage.goToVendorDashbord()
      await vendorPage.setstoresettings('NYshop', '12', '0123456789', 'abc street', 'xyz street2', 'New York', '1006', 'US', 'NY', 'companyName',
         'companyIdOrEuidNumber', '123456', 'nameOfBank', '123456789xcvb', 'New York', '200', '10', 'Get Support',
         '1', '20', '10', '1000000'
      )
   }, 100000);

   it.skip('vendor can set social profile settings ', async () => {
      await loginPage.login()
      await vendorPage.goToVendorDashbord()
      await vendorPage.setsocialprofile('https://www.facebook.com')
   }, 100000);

   it.skip('vendor can set rma settings ', async () => {
      await loginPage.login()
      await vendorPage.goToVendorDashbord()
      await vendorPage.setrmasettings('Warranty', 'included_warranty', 'limited', '1', 'weeks')
   }, 100000);






}); 