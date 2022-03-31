require('dotenv').config()
const loginPage = require('../pages/login.js')
const vendorPage = require('../pages/vendor.js')
const data = require('../utils/testData.js')
const timeout = process.env.TIME_OUT
jest.retryTimes(process.env.RETRY_TIMES)

describe('vendor functionality test', () => {
   // beforeAll(async () => {})
   // afterAll(async () => {await browser.close()})
   // beforeEach(async () => {})
   // afterEach(async () => {await browser.close()})


   it.only('vendor can register', async () => {
      await vendorPage.vendorRegister(data.vendorInfo.userEmail, data.vendorInfo.password, data.vendorInfo.firstName, data.vendorInfo.lastName,
         data.vendorInfo.shopName, data.vendorInfo.companyName, data.vendorInfo.companyId, data.vendorInfo.vatNumber, data.vendorInfo.bankName, data.vendorInfo.bankIban, data.vendorInfo.phone, true, data.vendorSetupWizard)
   })

   it('vendor can login', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      // await loginPage.switchToAdmin(process.env.ADMIN, process.env.ADMIN_PASSWORD)
   })

   it('vendor can logout', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await loginPage.vendorLogout()
   })

   it('vendor can add simple product', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.addSimpleProduct(data.product.name.simple, data.product.price, data.product.category)
   })

   it('vendor can add variable product', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.addVariableProduct(data.product.name.variable, data.product.price, data.product.category, data.product.attribute, data.product.attributeTerms)
   })

   it('vendor can add simple subscription product', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.addSimpleSubscription(data.product.name.simpleSubscription, data.product.price, data.product.category)
   })

   it('vendor can add variable subscription product', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.addVariableSubscription(data.product.name.variableSubscription, data.product.price, data.product.category, data.product.attribute, data.product.attributeTerms)
   })

   it('vendor can add external product', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.addExternalProduct(data.product.name.external, data.product.price, data.product.category)
   })

   it('vendor can add auction product', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.addAuctionProduct(data.product.name.auction, data.product.auctionPrice, data.product.category,)
   })

   it('vendor can add booking product', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.addBookingProduct(data.product.name.booking, data.product.price, data.product.category)
   })

   it('vendor can add coupon', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.addCoupon(data.coupon.title, data.coupon.amount)
   })

   it('vendor can request withdraw', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.requestWithdraw()
   })

   it.skip('vendor can cancel request withdraw', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.cancelRequestWithdraw()
   })

   it.skip('vendor can add auto withdraw disbursement schedule ', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.addAutoWithdrawDisbursementSchedule('dokan_custom', 'weekly', '5', '15')
   })

   it.skip('vendor can add default withdraw payment methods ', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      // await vendorPage.addDefaultWithdrawPaymentMethods('Skrill')
      await vendorPage.addDefaultWithdrawPaymentMethods('PayPal')
   })

   it.skip('vendor can setup default withdraw payment methods ', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.setupDefaultWithdrawPaymentMethods('weekly')
   })

   it.skip('vendor can set store settings ', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.setStoreSettings('NYshop', '12', '0123456789', 'abc street', 'xyz street2', 'New York', '1006', 'US', 'NY', 'companyName',
         'companyIdOrEuidNumber', '123456', 'nameOfBank', '123456789XVB', 'New York', '200', '10', 'Get Support',
         '1', '20', '10', '1000000'
      )
   })

   it('vendor can set social profile settings ', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.setSocialProfile(data.urls)
   })

   it.skip('vendor can set rma settings ', async () => {
      await loginPage.login(process.env.VENDOR, process.env.VENDOR_PASSWORD)
      await vendorPage.goToVendorDashboard()
      await vendorPage.setRmaSettings('Warranty', 'included_warranty', 'limited', '1', 'weeks')
   })


}) 