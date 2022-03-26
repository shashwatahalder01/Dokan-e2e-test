// require('dotenv').config()
const loginPage = require('../pages/login.js')
const vendorPage = require('../pages/vendor.js')
const data = require('../utils/testData.js')
const timeout = 600000
// jest.retryTimes(3);

// console.log(data.vendorInfo.firstName)

// describe('vendor functionality test', () => {

//    beforeAll(async () => {
//       // await page.setDefaultNavigationTimeout(600000);
//   });

//   //  afterAll(async () => {
//   //    await browser.close()
//   //  });

//   // beforeEach(async () => {
//   //  });

//   //  afterEach(async () => {
//   //    await browser.close()
//   //  });

//    beforeEach(async () => {
//       // await page.goto('http://dokan2.test/my-account');
//       // jest.useFakeTimers()
//       // jest.setTimeout(60000) 
//    });

//    // afterEach(async () => {
//    // jest.runOnlyPendingTimers()
//    // jest.useRealTimers()
//    //    // await browser.close()
//    //    // await loginPage.vendorLogout()
//    //    // await page.waitForTimeout(3000);
//    //    // await page.waitForNavigation({waitUntil: 'networkidle2'});
//    // });


//    // it('vendor can register', async () => {
//    //    await loginPage.vendorRegister(
//    //       data.vendorInfo.userEmail,
//    //       data.vendorInfo.password,
//    //       data.vendorInfo.firstName,
//    //       data.vendorInfo.lastName,
//    //       data.vendorInfo.shopName,
//    //       data.vendorInfo.companyName,
//    //       data.vendorInfo.companyId,
//    //       data.vendorInfo.vatNumber,
//    //       data.vendorInfo.bankName,
//    //       data.vendorInfo.bankIban,
//    //       data.vendorInfo.phone,
//    //    )
//    //    await changeSiteTimezone('UTC+6')
//    //    const firstName = await data.vendorInfo.firstName
//    //    const password = await createUser(data.vendorInfo.firstName, data.vendorInfo.lastName, 'Vendor')
//    //    await loginUser(firstName, password)
//    //    // await loginUser('Nannie', '1aO4e9S)7iUs8cdgx5pebN7)')
//    //    // console.log(firstName, password)
//    //    await page.waitForTimeout(80000);
//    // });

//    // it('vendor can login', async () => {
//    //    // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
//    //    await loginPage.login('Nannie', '01dokan01')
//    // });


//    // it('vendor can logout', async () => {
//    //    // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
//    //    await loginPage.login('Nannie', '01dokan01')
//    //    await loginPage.vendorLogout() // TODO: shift to vendor page
//    // });



//    it('vendor can add product', async () => {
//       // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
//       await loginPage.login('Nannie', '01dokan01')
//       await vendorPage.goToVendorDashboard()
//       await vendorPage.addProduct(data.product.name, data.product.price, 'Uncategorized')
//    });



//    it('vendor can add coupon', async () => {
//       await loginPage.login('Nannie', '01dokan01')
//       await vendorPage.goToVendorDashboard()
//       await vendorPage.addCoupon(data.coupon.title, data.coupon.amount)
//    });


//    it('vendor can request withdraw', async () => {
//       await loginPage.login('Nannie', '01dokan01')
//       await vendorPage.goToVendorDashboard()
//       await vendorPage.requestWithdraw()
//    });


//    it('vendor can cancel request withdraw', async () => {
//       await loginPage.login('Nannie', '01dokan01')
//       await vendorPage.goToVendorDashboard()
//       await vendorPage.cancelRequestWithdraw()
//    });

//    it('vendor can add auto withdraw disbursement schedule ', async () => {
//       await loginPage.login('Nannie', '01dokan01')
//       await vendorPage.goToVendorDashboard()
//       await vendorPage.addAutoWithdrawDisbursementSchedule('dokan_custom', 'weekly', '5', '15')
//    });

//    // it.skip('vendor can add default withdraw payment methods ', async () => {
//    //    await loginPage.login('Nannie', '01dokan01')
//    //    await vendorPage.goToVendorDashboard()
//    //    await vendorPage.addDefaultWithdrawPaymentMethods('Skrill')
//    // });

//    // it.skip('vendor can add default withdraw payment methods ', async () => {
//    //    await loginPage.login('Nannie', '01dokan01')
//    //    await vendorPage.goToVendorDashboard()
//    //    await vendorPage.addDefaultWithdrawPaymentMethods('weekly')
//    // });

//    it('vendor can set store settings ', async () => {
//       // jest.setTimeout(10 * 1000); 
//       await loginPage.login('Nannie', '01dokan01')
//       await vendorPage.goToVendorDashboard()
//       await vendorPage.setStoreSettings('NYshop', '12', '0123456789', 'abc street', 'xyz street2', 'New York', '1006', 'US', 'NY', 'companyName',
//          'companyIdOrEuidNumber', '123456', 'nameOfBank', '123456789xcvb', 'New York', '200', '10', 'Get Support',
//          '1', '20', '10', '1000000'
//       )
//    }, 100000);

//    it.skip('vendor can set social profile settings ', async () => {
//       await loginPage.login('Nannie', '01dokan01')
//       await vendorPage.goToVendorDashboard()
//       await vendorPage.setSocialProfile('https://www.facebook.com')
//    }, 100000);

//    it.skip('vendor can set rma settings ', async () => {
//       await loginPage.login('Nannie', '01dokan01')
//       await vendorPage.goToVendorDashboard()
//       await vendorPage.setRmaSettings('Warranty', 'included_warranty', 'limited', '1', 'weeks')
//    }, 100000);

// }); 