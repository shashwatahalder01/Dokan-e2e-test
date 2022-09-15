const loginPage = require('../pages/login.js')
const vendorPage = require('../pages/vendor.js')
const data = require('../utils/testData.js')
jest.retryTimes(process.env.RETRY_TIMES,{logErrorsBeforeRetry: true}) 

describe('vendor functionality test', () => {
    // beforeAll(async () => {})
    // afterAll(async () => {await browser.close()})
    // beforeEach(async () => {})
    // afterEach(async () => {await browser.close()})

   // it('vendor can register', async () => {
   //    await vendorPage.vendorRegister(data.vendor.vendorInfo,data.vendorSetupWizard)
   //    await loginPage.logout()
   // })

   // it('vendor can login', async () => {
   //    await loginPage.login(data.vendor)
   // })

   // it('vendor can logout', async () => {
   //    await loginPage.login(data.vendor)
   //    await loginPage.logout()
   // })

   it('vendor can add simple product', async () => {
      await loginPage.login(data.vendor)
      await vendorPage.addSimpleProduct(data.product.simple)
   })

   it('vendor can add variable product', async () => {
      await loginPage.login(data.vendor)
      await vendorPage.addVariableProduct(data.product.variable)
   })

   it('vendor can add simple subscription product', async () => {
      await loginPage.login(data.vendor)
      await vendorPage.addSimpleSubscription(data.product.simpleSubscription)
   })

   it.skip('vendor can add variable subscription product', async () => {
      await loginPage.login(data.vendor)
      await vendorPage.addVariableSubscription(data.product.variableSubscription)
   })

   it('vendor can add external product', async () => {
      await loginPage.login(data.vendor)
      await vendorPage.addExternalProduct(data.product.external)
   })

   it.only('vendor can add auction product', async () => {
      await loginPage.login(data.vendor)
      await vendorPage.addAuctionProduct(data.product.auction)
   })

   it('vendor can add booking product', async () => {
      await loginPage.login(data.vendor)
      await vendorPage.addBookingProduct(data.product.booking)
   })
 
//    it('vendor can add coupon', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.addCoupon(data.coupon)
//    })

//    it('vendor can request withdraw', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.requestWithdraw(data.vendor.withdraw)
//    })

//    it.skip('vendor can cancel request withdraw', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.requestWithdraw(data.vendor.withdraw)
//       await vendorPage.cancelRequestWithdraw()
//    })

//    it('vendor can add auto withdraw disbursement schedule', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.addAutoWithdrawDisbursementSchedule(data.vendor.withdraw)
//    })

//    it.skip('vendor can add default withdraw payment methods ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.addDefaultWithdrawPaymentMethods(data.vendor.withdraw.defaultWithdrawMethod.skrill)
//       // Cleanup
//       await vendorPage.addDefaultWithdrawPaymentMethods(data.vendor.withdraw.defaultWithdrawMethod.paypal)
//    })

//    // vendor settings

//    it.skip('vendor can set store settings ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.setStoreSettings(data.vendor.vendorInfo)
//    })

//    it.skip('vendor can add addons', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.addAddon(data.vendor.addon)
//    })

//    it.skip('vendor can edit addon request ', async () => {
//       await loginPage.login(data.vendor)
//       let addonName = await vendorPage.addAddon(data.vendor.addon)
//       await vendorPage.editAddon(data.vendor.addon, addonName)
//    })

//    it('vendor can send id verification request ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.sendIdVerificationRequest(data.vendor.verification)
//    })

//    it('vendor can send address verification request ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.sendAddressVerificationRequest(data.vendor.verification)
//    })

//    it('vendor can send company verification request ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.sendCompanyVerificationRequest(data.vendor.verification)
//    })

//    it('vendor can set delivery time settings ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.setDeliveryTimeSettings(data.vendor.deliveryTime)
//    })

//    it('vendor can set flat rate shipping ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.setShippingSettings(data.vendor.shipping.shippingMethods.flatRate)
//    })

//    it('vendor can set free shipping ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.setShippingSettings(data.vendor.shipping.shippingMethods.freeShipping)
//    })

//    it('vendor can set local pickup shipping ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.setShippingSettings(data.vendor.shipping.shippingMethods.localPickup)
//    })

//    it('vendor can set table rate shipping shipping ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.setShippingSettings(data.vendor.shipping.shippingMethods.tableRateShipping)
//    })

//    it('vendor can set dokan distance rate shipping ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.setShippingSettings(data.vendor.shipping.shippingMethods.distanceRateShipping)
//    })

//    it('vendor can set social profile settings ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.setSocialProfile(data.urls)
//    })

//    it('vendor can set rma settings ', async () => {
//       await loginPage.login(data.vendor)
//       await vendorPage.setRmaSettings(data.vendor.rma)
//    })

}) 