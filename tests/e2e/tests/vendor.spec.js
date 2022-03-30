// require('dotenv').config()
const loginPage = require('../pages/login.js')
const vendorPage = require('../pages/vendor.js')
const data = require('../utils/testData.js')
const timeout = 600000
// jest.retryTimes(2);



describe('vendor functionality test', () => {

// beforeAll(async () => {
// await page.setDefaultNavigationTimeout(600000);
//   });

// afterAll(async () => {
// await browser.close()
//  });

// beforeEach(async () => {
//    });

// afterEach(async () => {
// await browser.close()
// });


it.skip('vendor can register', async () => {
   await loginPage.vendorRegister(data.vendorInfo.userEmail, data.vendorInfo.password, data.vendorInfo.firstName, data.vendorInfo.lastName,
      data.vendorInfo.shopName, data.vendorInfo.companyName, data.vendorInfo.companyId, data.vendorInfo.vatNumber, data.vendorInfo.bankName, data.vendorInfo.bankIban, data.vendorInfo.phone)
},timeout);

it('vendor can login', async () => {
   // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   await loginPage.login('vendor1', '01dokan01')
},timeout);

it('vendor can logout', async () => {
   // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   await loginPage.login('vendor1', '01dokan01')
   await loginPage.vendorLogout() // TODO: shift to vendor page
},timeout);

it('vendor can add simple product', async () => {
   // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.addSimpleProduct(data.product.name + ('Simple') , data.product.price, 'Uncategorized')
},timeout);

it('vendor can add variable product', async () => {
   // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.addVariableProduct(data.product.name + '(Variable)', data.product.price, 'Uncategorized','size',['s','l','m'])
},timeout);

it('vendor can add simple subscription product', async () => {
   // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.addSimpleSubscription(data.product.name + '(Subscription)', data.product.price, 'Uncategorized')
},timeout);

it('vendor can add variable subscription product', async () => {
   // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.addVariableSubscription(data.product.name + '(Variable subscription)', data.product.price, 'Uncategorized','size',['s','l','m'])
},timeout);

it('vendor can add external product', async () => {
   // await loginPage.login(process.env.VENDOR_EMAIL, process.env.VENDOR_PASSWORD)
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.addExternalProduct(data.product.name + '(External)', data.product.price, 'Uncategorized')
},timeout);

it('vendor can add coupon', async () => {
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.addCoupon(data.coupon.title, data.coupon.amount)
},timeout);

it.only('vendor can request withdraw', async () => {
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.requestWithdraw()
},timeout);

it.skip('vendor can cancel request withdraw', async () => {
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.cancelRequestWithdraw()
},timeout);

it('vendor can add auto withdraw disbursement schedule ', async () => {
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.addAutoWithdrawDisbursementSchedule('dokan_custom', 'weekly', '5', '15')
},timeout);

it.skip('vendor can add default withdraw payment methods ', async () => {
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   // await vendorPage.addDefaultWithdrawPaymentMethods('Skrill')
   await vendorPage.addDefaultWithdrawPaymentMethods('PayPal')
},timeout);

it.skip('vendor can setup default withdraw payment methods ', async () => {
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.setupDefaultWithdrawPaymentMethods('weekly')
},timeout);

it.skip('vendor can set store settings ', async () => {
   // jest.setTimeout(10 * 1000); 
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   //   await vendorPage.setStoreSettings('NYshop', '12', '0123456789', 'abc street', 'xyz street2', 'New York', '1006', 'US', 'NY', 'companyName',
   //      'companyIdOrEuidNumber', '123456', 'nameOfBank', '123456789xcvb', 'New York', '200', '10', 'Get Support',
   //      '1', '20', '10', '1000000'
   //   )
}, timeout);

it.skip('vendor can set social profile settings ', async () => {
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.setSocialProfile('https://www.facebook.com')
}, timeout);

it.skip('vendor can set rma settings ', async () => {
   await loginPage.login('vendor1', '01dokan01')
   await vendorPage.goToVendorDashboard()
   await vendorPage.setRmaSettings('Warranty', 'included_warranty', 'limited', '1', 'weeks')
}, timeout);

}); 