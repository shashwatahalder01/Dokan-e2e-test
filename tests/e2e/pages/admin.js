const base = require("../pages/base.js")
const data = require('../utils/testData.js')
const helpers = require("../utils/helpers.js")
const selector = require("../pages/selectors.js")

module.exports = {


  // navigation 

  // methods
  async goToAdminDashboard() {
    await base.goIfNotThere(data.subUrls.backend.adminDashboard) //TODO: check if goto or goifnothere is applicable

    const url = await page.url()
    expect(url).toMatch(data.subUrls.backend.adminDashboard)
  },

  async goToDokanSettings() {
    await base.goIfNotThere(data.subUrls.backend.dokanSettings)
    // await base.hover(selector.admin.aDashboard.dokan)
    // await base.clickAndWait(selector.admin.dokan.settingsMenu)

    const url = await page.url()
    expect(url).toMatch(data.subUrls.backend.dokanSettings)
  },

  async goToWooCommerceSettings() {
    await base.goIfNotThere(data.subUrls.backend.woocommerceSettings)
    // await base.hover(selector.admin.aDashboard.wooCommerce)
    // await base.clickAndWait(selector.admin.wooCommerce.settingsMenu)

    const url = await page.url()
    expect(url).toMatch(data.subUrls.backend.woocommerceSettings)
  },

  async goToPlugins() {
    await base.goto(data.subUrls.backend.plugins)
    // await base.hover(selector.admin.aDashboard.plugins)
    // await base.clickAndWait(selector.admin.plugins.installedPlugins)

    const url = await page.url()
    expect(url).toMatch(data.subUrls.backend.plugins)
  },


  // wordpress site settings 


  // admin logout
  async adminLogout() {
    await base.hover(selector.backend.userMenu)
    await base.clickAndWait(selector.backend.logout)

    let loggedInUser = await base.getCurrentUser()
    expect(loggedInUser).toBeUndefined()
  },



  // wordpress site settings 

  // plugin activation check
  async checkActivePlugins(plugin) {
    await this.goToPlugins()
    for (let pluginSlug of plugin.pluginSlugList) {
      let classValue = await base.getElementClassValue(selector.admin.plugins.plugin(pluginSlug))
      expect(classValue).toMatch(plugin.activeClass)
    }
  },


  // admin set wordpress site settings
  async setWpSettings() {
    await this.setWpGeneralSettings()
    await this.goToAdminDashboard()
    await this.setPermalinkSettings()

  },

  async setWpGeneralSettings(general) {
    await base.hover(selector.admin.aDashboard.settings)
    //set general settings
    await base.clickAndWait(selector.admin.settings.general)
    // enable user registration
    await base.check(selector.admin.settings.membership)
    //timezone
    await base.select(selector.admin.settings.timezone, general.timezone)
    await base.clickAndWait(selector.admin.settings.generalSaveChanges)

    let successMessage = await base.getElementText(selector.admin.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(general.saveSuccessMessage)
  },

  //admin set permalink settings
  async setPermalinkSettings(permalink) {
    await base.hover(selector.admin.aDashboard.settings)
    //set permalinks settings
    await base.clickAndWait(selector.admin.settings.permalinks)
    await base.click(selector.admin.settings.postName)
    await base.click(selector.admin.settings.customBase)
    await base.clearAndType(selector.admin.settings.customBaseInput, permalink.customBaseInput)
    await base.click(selector.admin.settings.permalinkSaveChanges)

    let permalinkSuccessMessage = await base.getElementText(selector.admin.settings.updatedSuccessMessage)
    expect(permalinkSuccessMessage).toMatch(permalink.saveSuccessMessage)

  },

  //dokan settings 

  //admin set dokan settings
  async setDokanSettings() {
    await this.goToDokanSettings()
    await this.setDokanGeneralSettings()
    await this.setDokanSellingSettings()
    await this.setDokanWithdrawSettings()
    await this.setPageSettings()
    await this.setDokanAppearanceSettings()
    await this.setDokanPrivacyPolicySettings()
    await this.setDokanStoreSupportSettings()
    await this.setDokanRmaSettings()
    await this.setDokanWholesaleSettings()
    await this.setDokanEuComplianceSettings()
    await this.setDokanDeliveryTimeSettings()
    await this.setDokanProductAdvertisingSettings()
    await this.setDokanGeolocationSettings()
    await this.setDokanProductReportAbuseSettings()
    await this.setDokanSpmvSettings()
    await this.setDokanVendorSubscriptionSettings()
  },

  //admin set dokan general settings
  async setDokanGeneralSettings(general) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.general)

    //site options
    await base.enableSwitcher(selector.admin.dokan.settings.adminAreaAccess)
    await base.clearAndType(selector.admin.dokan.settings.vendorStoreUrl, general.vendorStoreUrl)
    await base.click(selector.admin.dokan.settings.sellingProductTypes(general.sellingProductTypes))

    //vendor store options
    await base.enableSwitcher(selector.admin.dokan.settings.storeTermsAndConditions)
    await base.clearAndType(selector.admin.dokan.settings.storeProductPerPage, general.storeProductPerPage)
    await base.enableSwitcher(selector.admin.dokan.settings.enableTermsAndCondition)
    await base.click(selector.admin.dokan.settings.storCategory(general.storCategory))
    await base.click(selector.admin.dokan.settings.generalSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(general.saveSuccessMessage)
  },

  //admin set dokan selling settings
  async setDokanSellingSettings(selling) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.sellingOptions)

    //commission settings
    await base.select(selector.admin.dokan.settings.commissionType, selling.commissionType)
    await base.clearAndType(selector.admin.dokan.settings.adminCommission, selling.adminCommission)
    await base.click(selector.admin.dokan.settings.shippingFeeRecipient(selling.shippingFeeRecipient))
    await base.click(selector.admin.dokan.settings.taxFeeRecipient(selling.taxFeeRecipient))


    //vendor capability
    await base.enableSwitcher(selector.admin.dokan.settings.newVendorProductUpload)
    await base.enableSwitcher(selector.admin.dokan.settings.orderStatusChange)
    await base.click(selector.admin.dokan.settings.newProductStatus(selling.newProductStatus))
    await base.enableSwitcher(selector.admin.dokan.settings.duplicateProduct)
    await base.enableSwitcher(selector.admin.dokan.settings.productMailNotification)
    await base.click(selector.admin.dokan.settings.productCategorySelection(selling.productCategorySelection))
    await base.enableSwitcher(selector.admin.dokan.settings.vendorsCanCreateTags)
    await base.enableSwitcher(selector.admin.dokan.settings.orderDiscount)
    await base.enableSwitcher(selector.admin.dokan.settings.productDiscount)
    await base.enableSwitcher(selector.admin.dokan.settings.vendorProductReview)
    await base.enableSwitcher(selector.admin.dokan.settings.guestProductEnquiry)
    await base.enableSwitcher(selector.admin.dokan.settings.newVendorEnableAuction)
    await base.enableSwitcher(selector.admin.dokan.settings.enableMinMaxQuantities)
    await base.enableSwitcher(selector.admin.dokan.settings.enableMinMaxAmount)
    await base.clickAndWait(selector.admin.dokan.settings.sellingOptionsSaveChanges)//TODO:might not need clickandwait

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(selling.saveSuccessMessage) //TODO: check working or not

    // let commission = await base.getElementValue(selector.admin.dokan.settings.adminCommission)//TODO: update assertion
    // expect(commission).toMatch(selling.adminCommission)
  },

  //admin set dokan withdraw settings
  async setDokanWithdrawSettings(withdraw) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.withdrawOptions)

    //withdraw options
    await base.enableSwitcher(selector.admin.dokan.settings.withdrawMethodsPaypal)
    await base.enableSwitcher(selector.admin.dokan.settings.withdrawMethodsBankTransfer)
    await base.enableSwitcher(selector.admin.dokan.settings.withdrawMethodsDokanCustom)
    await base.enableSwitcher(selector.admin.dokan.settings.withdrawMethodsSkrill)
    await base.clearAndType(selector.admin.dokan.settings.customMethodName, withdraw.customMethodName)
    await base.clearAndType(selector.admin.dokan.settings.customMethodType, withdraw.customMethodType)
    await base.clearAndType(selector.admin.dokan.settings.minimumWithdrawAmount, withdraw.minimumWithdrawAmount)
    await base.enableSwitcher(selector.admin.dokan.settings.orderStatusForWithdrawCompleted)
    await base.enableSwitcher(selector.admin.dokan.settings.orderStatusForWithdrawProcessing)
    await base.clearAndType(selector.admin.dokan.settings.withdrawThreshold, withdraw.withdrawThreshold)

    //disbursement schedule settings
    await base.enableSwitcher(selector.admin.dokan.settings.withdrawDisbursementManual)
    await base.enableSwitcher(selector.admin.dokan.settings.withdrawDisbursementAuto)

    // disbursement schedule
    await base.enableSwitcher(selector.admin.dokan.settings.disburseMentQuarterlySchedule)
    await base.enableSwitcher(selector.admin.dokan.settings.disburseMentMonthlySchedule)
    await base.enableSwitcher(selector.admin.dokan.settings.disburseMentBiweeklySchedule)
    await base.enableSwitcher(selector.admin.dokan.settings.disburseMentWeeklySchedule)

    // quarterly schedule
    await base.select(selector.admin.dokan.settings.quarterlyScheduleMonth, withdraw.quarterlyScheduleMonth)
    await base.select(selector.admin.dokan.settings.quarterlyScheduleWeek, withdraw.quarterlyScheduleWeek)
    await base.select(selector.admin.dokan.settings.quarterlyScheduleDay, withdraw.quarterlyScheduleDay)
    // monthly schedule
    await base.select(selector.admin.dokan.settings.monthlyScheduleWeek, withdraw.monthlyScheduleWeek)
    await base.select(selector.admin.dokan.settings.monthlyScheduleDay, withdraw.monthlyScheduleDay)
    // biweekly schedule
    await base.select(selector.admin.dokan.settings.biweeklyScheduleWeek, withdraw.biweeklyScheduleWeek)
    await base.select(selector.admin.dokan.settings.biweeklyScheduleDay, withdraw.biweeklyScheduleDay)
    // weekly schedule
    await base.select(selector.admin.dokan.settings.weeklyScheduleDay, withdraw.weeklyScheduleDay)
    await base.click(selector.admin.dokan.settings.withdrawSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(withdraw.saveSuccessMessage)
  },

  //admin set dokan page settings
  async setPageSettings(page) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.pageSettings)

    //base settings
    await base.select(selector.admin.dokan.settings.termsAndConditionsPage, page.termsAndConditionsPage)
    await base.click(selector.admin.dokan.settings.pageSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(page.saveSuccessMessage)

  },

  //admin set dokan appearance settings
  async setDokanAppearanceSettings(appreance) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.appearance)

    //appearance settings
    await base.enableSwitcher(selector.admin.dokan.settings.showMapOnStorePage)
    await base.click(selector.admin.dokan.settings.mapApiSourceGoogleMaps)
    await base.clearAndType(selector.admin.dokan.settings.googleMapApiKey, appreance.googleMapApiKey)
    await base.click(selector.admin.dokan.settings.storeHeaderTemplate2)
    await base.click(selector.admin.dokan.settings.storeHeaderTemplate1)
    await base.clearAndType(selector.admin.dokan.settings.storeBannerWidth, appreance.storeBannerWidth)
    await base.clearAndType(selector.admin.dokan.settings.storeBannerHeight, appreance.storeBannerHeight)
    await base.enableSwitcher(selector.admin.dokan.settings.storeOpeningClosingTimeWidget)
    await base.enableSwitcher(selector.admin.dokan.settings.showVendorInfo)
    await base.clickAndWait(selector.admin.dokan.settings.appearanceSaveChanges) //TODO:might not need clickandwait

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage) //TODO: check working or not
    expect(successMessage).toMatch(appreance.saveSuccessMessage)
    // let apiKey = await base.getElementValue(selector.admin.dokan.settings.googleMapApiKey) //TODO: update assertion
    // expect(apiKey).toMatch(appreance.googleMapApiKey)
  },

  //admin set dokan privacy policy settings
  async setDokanPrivacyPolicySettings(privacyPolicy) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.privacyPolicy)

    //privacy policy settings
    await base.enableSwitcher(selector.admin.dokan.settings.enablePrivacyPolicy)
    await base.select(selector.admin.dokan.settings.privacyPage, privacyPolicy.privacyPage)

    let iframe = await base.switchToIframe(selector.admin.dokan.settings.privacyPolicyIframe)
    await base.iframeClearAndType(iframe, selector.admin.dokan.settings.privacyPolicyHtmlBody, privacyPolicy.privacyPolicyHtmlBody)

    await base.click(selector.admin.dokan.settings.privacyPolicySaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(privacyPolicy.saveSuccessMessage)
  },

  //admin set dokan store support settings
  async setDokanStoreSupportSettings(storeSupport) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.storeSupport)

    //store support settings
    await base.wait(0.5) //required
    await base.enableSwitcher(selector.admin.dokan.settings.displayOnOrderDetails)
    await base.select(selector.admin.dokan.settings.displayOnSingleProductPage, storeSupport.displayOnSingleProductPage)
    await base.clearAndType(selector.admin.dokan.settings.supportButtonLabel, storeSupport.supportButtonLabel)
    await base.enableSwitcher(selector.admin.dokan.settings.supportTicketEmailNotification)
    await base.click(selector.admin.dokan.settings.storeSupportSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(storeSupport.saveSuccessMessage)
  },

  //admin set dokan rma settings
  async setDokanRmaSettings(rma) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.rma)

    //rma settings
    await base.select(selector.admin.dokan.settings.orderStatus, rma.orderStatus)
    await base.enableSwitcher(selector.admin.dokan.settings.enableRefundRequests)
    await base.enableSwitcher(selector.admin.dokan.settings.enableCouponRequests)

    for (let rmaReason of rma.rmaReasons) {
      await base.deleteIfExists(selector.admin.dokan.settings.reasonsForRmaSingle(rmaReason))
      await base.clearAndType(selector.admin.dokan.settings.reasonsForRmaInput, rmaReason)
      await base.click(selector.admin.dokan.settings.reasonsForRmaAdd)
    }

    let iframe = await base.switchToIframe(selector.admin.dokan.settings.refundPolicyIframe)
    await base.iframeClearAndType(iframe, selector.admin.dokan.settings.refundPolicyHtmlBody, rma.refundPolicyHtmlBody)

    await base.click(selector.admin.dokan.settings.rmaSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(rma.saveSuccessMessage)
  },

  // admin set dokan wholesale settings
  async setDokanWholesaleSettings(wholesale) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.wholesale)

    //wholesale settings
    await base.click(selector.admin.dokan.settings.whoCanSeeWholesalePrice(wholesale.whoCanSeeWholesalePrice))
    await base.enableSwitcher(selector.admin.dokan.settings.showWholesalePriceOnShopArchive)
    await base.enableSwitcher(selector.admin.dokan.settings.needApprovalForCustomer)
    await base.click(selector.admin.dokan.settings.wholesaleSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(wholesale.saveSuccessMessage)
  },

  //admin set dokan eu compliance settings
  async setDokanEuComplianceSettings() {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.euComplianceFields)

    //eu compliance settings
    await base.wait(0.5)
    await base.enableSwitcher(selector.admin.dokan.settings.vendorExtraFieldsCompanyName)
    await base.enableSwitcher(selector.admin.dokan.settings.vendorExtraFieldsCompanyIdOrEuidNumber)
    await base.enableSwitcher(selector.admin.dokan.settings.vendorExtraFieldsVatOrTaxNumber)
    await base.enableSwitcher(selector.admin.dokan.settings.vendorExtraFieldsNameOfBank)
    await base.enableSwitcher(selector.admin.dokan.settings.vendorExtraFieldsBankIban)
    await base.enableSwitcher(selector.admin.dokan.settings.displayInVendorRegistrationForm)
    await base.enableSwitcher(selector.admin.dokan.settings.customerExtraFieldsCompanyIdOrEuidNumber)
    await base.enableSwitcher(selector.admin.dokan.settings.customerExtraFieldsVatOrTaxNumber)
    await base.enableSwitcher(selector.admin.dokan.settings.customerExtraFieldsNameOfBank)
    await base.enableSwitcher(selector.admin.dokan.settings.customerExtraFieldsBankIban)
    await base.enableSwitcher(selector.admin.dokan.settings.enableGermanizedSupportForVendors)
    await base.enableSwitcher(selector.admin.dokan.settings.vendorsWillBeAbleToOverrideInvoiceNumber)
    await base.click(selector.admin.dokan.settings.euComplianceFieldsSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(euCompliance.saveSuccessMessage)
  },

  //admin set dokan delivery time settings
  async setDokanDeliveryTimeSettings(deliveryTime) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.deliveryTime)

    //delivery time settings
    await base.wait(0.5)
    await base.enableSwitcher(selector.admin.dokan.settings.allowVendorSettings)
    await base.clearAndType(selector.admin.dokan.settings.deliveryDateLabel, deliveryTime.deliveryDateLabel)
    await base.clearAndType(selector.admin.dokan.settings.deliveryBlockedBuffer, deliveryTime.deliveryBlockedBuffer)
    await base.clearAndType(selector.admin.dokan.settings.deliveryBoxInfo, deliveryTime.deliveryBoxInfo)
    await base.enableSwitcher(selector.admin.dokan.settings.requireDeliveryDateAndTime)
    await base.enableSwitcher(selector.admin.dokan.settings.deliveryDay(deliveryTime.deliveryDay[0])) //TODO:update this
    await base.enableSwitcher(selector.admin.dokan.settings.deliveryDay(deliveryTime.deliveryDay[1]))
    await base.enableSwitcher(selector.admin.dokan.settings.deliveryDay(deliveryTime.deliveryDay[2]))
    await base.enableSwitcher(selector.admin.dokan.settings.deliveryDay(deliveryTime.deliveryDay[3]))
    await base.enableSwitcher(selector.admin.dokan.settings.deliveryDay(deliveryTime.deliveryDay[4]))
    await base.enableSwitcher(selector.admin.dokan.settings.deliveryDay(deliveryTime.deliveryDay[5]))
    await base.enableSwitcher(selector.admin.dokan.settings.deliveryDay(deliveryTime.deliveryDay[6]))
    await base.clearAndType(selector.admin.dokan.settings.openingTime, deliveryTime.openingTime)
    await base.clearAndType(selector.admin.dokan.settings.closingTime, deliveryTime.closingTime)
    await base.clearAndType(selector.admin.dokan.settings.timeSlot, deliveryTime.timeSlot)
    await base.clearAndType(selector.admin.dokan.settings.orderPerSlot, deliveryTime.orderPerSlot)
    await base.click(selector.admin.dokan.settings.deliveryTimeSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(deliveryTime.saveSuccessMessage)
  },

  //admin set dokan product advertising settings
  async setDokanProductAdvertisingSettings(productAdvertising) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.productAdvertising)

    //product advertising settings
    await base.clearAndType(selector.admin.dokan.settings.noOfAvailableSlot, productAdvertising.noOfAvailableSlot)
    await base.clearAndType(selector.admin.dokan.settings.expireAfterDays, productAdvertising.expireAfterDays)
    await base.enableSwitcher(selector.admin.dokan.settings.vendorCanPurchaseAdvertisement)
    await base.clearAndType(selector.admin.dokan.settings.advertisementCost, productAdvertising.advertisementCost)
    await base.enableSwitcher(selector.admin.dokan.settings.enableAdvertisementInSubscription)
    await base.enableSwitcher(selector.admin.dokan.settings.markAdvertisedProductAsFeatured)
    await base.enableSwitcher(selector.admin.dokan.settings.displayAdvertisedProductOnTop)
    await base.enableSwitcher(selector.admin.dokan.settings.outOfStockVisibility)
    await base.click(selector.admin.dokan.settings.productAdvertisingSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(productAdvertising.saveSuccessMessage)
  },

  //admin set dokan geolocation settings
  async setDokanGeolocationSettings(geolocation) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.geolocation)

    //geolocation settings
    await base.click(selector.admin.dokan.settings.locationMapPosition(geolocation.locationMapPosition))
    await base.click(selector.admin.dokan.settings.showMap(geolocation.showMap))
    await base.enableSwitcher(selector.admin.dokan.settings.showFiltersBeforeLocationMap)
    await base.enableSwitcher(selector.admin.dokan.settings.productLocationTab)
    await base.click(selector.admin.dokan.settings.radiusSearchUnit(geolocation.radiusSearchUnit))
    await base.clearAndType(selector.admin.dokan.settings.radiusSearchMinimumDistance, geolocation.radiusSearchMinimumDistance)
    await base.clearAndType(selector.admin.dokan.settings.radiusSearchMaximumDistance, geolocation.radiusSearchMaximumDistance)
    await base.clearAndType(selector.admin.dokan.settings.mapZoomLevel, geolocation.mapZoomLevel)
    await base.clearAndType(selector.admin.dokan.settings.defaultLocation, geolocation.defaultLocation)
    await base.wait(1)
    await base.press(data.key.arrowDown)
    await base.press(data.key.enter)
    await base.click(selector.admin.dokan.settings.geolocationSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(geolocation.saveSuccessMessage)
  },

  //admin set dokan product report abuse settings
  async setDokanProductReportAbuseSettings(productReportAbuse) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.productReportAbuse)

    //product report abuse settings
    await base.deleteIfExists(selector.admin.dokan.settings.reasonsForAbuseReportSingle(productReportAbuse.reasonsForAbuseReport))
    await base.clearAndType(selector.admin.dokan.settings.reasonsForAbuseReportInput, productReportAbuse.reasonsForAbuseReport)
    await base.click(selector.admin.dokan.settings.reasonsForAbuseReportAdd)
    await base.click(selector.admin.dokan.settings.productReportAbuseSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(productReportAbuse.saveSuccessMessage)
  },

  //admin set dokan spmv settings
  async setDokanSpmvSettings(spmv) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.singleProductMultiVendor)

    await base.enableSwitcher(selector.admin.dokan.settings.enableSingleProductMultipleVendor)
    await base.clearAndType(selector.admin.dokan.settings.sellItemButtonText, spmv.sellItemButtonText)
    await base.clearAndType(selector.admin.dokan.settings.availableVendorDisplayAreaTitle, spmv.availableVendorDisplayAreaTitle)
    await base.select(selector.admin.dokan.settings.availableVendorSectionDisplayPosition, spmv.availableVendorSectionDisplayPosition)
    await base.select(selector.admin.dokan.settings.showSpmvProducts, spmv.showSpmvProducts)
    await base.click(selector.admin.dokan.settings.singleProductMultiVendorSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(spmv.saveSuccessMessage)
  },

  //admin set dokan vendor subscription settings
  async setDokanVendorSubscriptionSettings(subscription) {
    await this.goToDokanSettings()

    await base.click(selector.admin.dokan.settings.vendorSubscription)

    //vendor subscription settings
    await base.select(selector.admin.dokan.settings.subscription, subscription.displayPage)
    await base.enableSwitcher(selector.admin.dokan.settings.enableProductSubscription)
    await base.enableSwitcher(selector.admin.dokan.settings.enableSubscriptionInRegistrationForm)
    await base.enableSwitcher(selector.admin.dokan.settings.enableEmailNotification)
    await base.clearAndType(selector.admin.dokan.settings.noOfDays, subscription.noOfDays)
    await base.select(selector.admin.dokan.settings.productStatus, subscription.productStatus)
    await base.clearAndType(selector.admin.dokan.settings.cancellingEmailSubject, subscription.cancellingEmailSubject)
    await base.clearAndType(selector.admin.dokan.settings.cancellingEmailBody, subscription.cancellingEmailBody)
    await base.clearAndType(selector.admin.dokan.settings.alertEmailSubject, subscription.alertEmailSubject)
    await base.clearAndType(selector.admin.dokan.settings.alertEmailBody, subscription.alertEmailBody)
    await base.click(selector.admin.dokan.settings.vendorSubscriptionSaveChanges)

    let successMessage = await base.getElementText(selector.admin.dokan.settings.dokanUpdateSuccessMessage)
    expect(successMessage).toMatch(subscription.saveSuccessMessage)
  },



  // tax 

  // admin enable-disable tax
  async enableTax(enableTax = true) {
    await this.goToWooCommerceSettings()

    // enable-disable tax
    enableTax ? await base.check(selector.admin.wooCommerce.settings.enableTaxes) : await base.uncheck(selector.admin.wooCommerce.settings.enableTaxes)
    await base.clickAndWait(selector.admin.wooCommerce.settings.generalSaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(data.tax.saveSuccessMessage)
  },

  //admin add standard tax rate
  async addStandardTaxRate(tax) {
    await this.goToWooCommerceSettings()

    //enable tax
    await this.enableTax()

    // set tax rate
    await base.clickAndWait(selector.admin.wooCommerce.settings.tax)
    await base.clickAndWait(selector.admin.wooCommerce.settings.standardRates)
    let taxIsVisible = await base.isVisible(selector.admin.wooCommerce.settings.taxRate)
    if (!taxIsVisible) {
      await base.click(selector.admin.wooCommerce.settings.insertRow)
    }
    await base.clearAndType(selector.admin.wooCommerce.settings.taxRate, tax.taxRate)
    await base.click(selector.admin.wooCommerce.settings.taxTable) //TODO: recheck if it required
    await base.wait(1)
    await base.click(selector.admin.wooCommerce.settings.taxRateSaveChanges)
    await base.wait(3)

    let newTaxRate = await base.getElementValue(selector.admin.wooCommerce.settings.taxRate)
    expect(newTaxRate).toBe('5.0000') //TODO: update this


  },


  // Woocommerce settings 

  //admin setup wooCommerce settings
  async setWoocommerceSettings() {
    await this.enablePasswordInputField()
    await this.addStandardTaxRate(data.tax)
    await this.setCurrencyOptions(data.currency)
    // await this.addShippingMethod(data.shipping.shippingMethods.flatRate)
    // await this.addShippingMethod(data.shipping.shippingMethods.flatRate)
    // await this.addShippingMethod(data.shipping.shippingMethods.freeShipping)
    // await this.addShippingMethod(data.shipping.shippingMethods.tableRateShipping)
    // await this.addShippingMethod(data.shipping.shippingMethods.distanceRateShipping)
    // await this.addShippingMethod(data.shipping.shippingMethods.vendorShipping)
    // await this.deleteShippingMethod(data.shipping.shippingMethods.flatRate)
    // await this.deleteShippingZone(data.shipping.shippingZone)
  },


  // Enable password field
  async enablePasswordInputField(woocommerce) {
    await this.goToWooCommerceSettings()
    await base.clickAndWait(selector.admin.wooCommerce.settings.accounts)
    await base.uncheck(selector.admin.wooCommerce.settings.automaticPasswordGeneration)
    await base.clickAndWait(selector.admin.wooCommerce.settings.accountSaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(woocommerce.saveSuccessMessage)
  },


  // Shipping methods 

  // Enable enable-disable shipping 

  async enableShipping(enableShipping = true) {

    await this.goToWooCommerceSettings()
    await base.click(selector.admin.wooCommerce.settings.enableShipping)
    if (enableShipping) {
      await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.enableShippingValues, data.shipping.enableShipping)
    } else {
      await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.enableShippingValues, data.shipping.disableShipping)
    }
    await base.clickAndWait(selector.admin.wooCommerce.settings.generalSaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(data.shipping.saveSuccessMessage)

  },


  // Admin add shipping method
  async addShippingMethod(shipping) {
    await this.goToWooCommerceSettings()

    await base.clickAndWait(selector.admin.wooCommerce.settings.shipping)

    let zoneIsVisible = await base.isVisible(selector.admin.wooCommerce.settings.shippingZoneCell(shipping.shippingZone))
    if (!zoneIsVisible) {
      //add shipping zone
      await base.clickAndWait(selector.admin.wooCommerce.settings.addShippingZone)
      await base.clearAndType(selector.admin.wooCommerce.settings.zoneName, shipping.shippingZone)
      // await base.select(selector.admin.wooCommerce.settings.zoneRegions, shippingCountry) //user select values  'country:US',
      await base.click(selector.admin.wooCommerce.settings.zoneRegions)
      await base.type(selector.admin.wooCommerce.settings.zoneRegions, shipping.shippingCountry)
      await base.wait(2)
      await base.press(data.key.enter)
    } else {
      // edit shipping zone
      await base.hover(selector.admin.wooCommerce.settings.shippingZoneCell(shipping.shippingZone))
      await base.clickAndWait(selector.admin.wooCommerce.settings.editShippingMethod(shipping.shippingZone))
    }

    let methodIsVisible = await base.isVisible(selector.admin.wooCommerce.settings.shippingMethodCell(helpers.replaceAndCapitalize(shipping.shippingMethod)))
    if (!methodIsVisible) {
      // add shipping method
      await base.click(selector.admin.wooCommerce.settings.addShippingMethods)
      await base.select(selector.admin.wooCommerce.settings.shippingMethod, shipping.selectShippingMethod)
      await base.clickAndWait(selector.admin.wooCommerce.settings.addShippingMethod)
      await base.wait(1)
      //set shipping method options
      await base.hover(selector.admin.wooCommerce.settings.shippingMethodCell(shipping.shippingMethod))
      await base.click(selector.admin.wooCommerce.settings.editShippingMethod(shipping.shippingMethod))
    } else {
      //edit shipping method
      await base.hover(selector.admin.wooCommerce.settings.shippingMethodCell(shipping.shippingMethod))
      await base.click(selector.admin.wooCommerce.settings.editShippingMethod(shipping.shippingMethod))
    }

    switch (shipping.selectShippingMethod) {
      case 'flat_rate':
        //flat rate
        await base.clearAndType(selector.admin.wooCommerce.settings.flatRateMethodTitle, shipping.shippingMethod)
        await base.select(selector.admin.wooCommerce.settings.flatRateTaxStatus, shipping.taxStatus)
        await base.clearAndType(selector.admin.wooCommerce.settings.flatRateCost, shipping.shippingCost)
        break

      case 'free_shipping':
        //free shipping
        await base.clearAndType(selector.admin.wooCommerce.settings.freeShippingTitle, shipping.shippingMethod)
        // await base.select(selector.admin.wooCommerce.settings.freeShippingRequires, shipping.freeShippingRequires)
        // await base.clearAndType(selector.admin.wooCommerce.settings.freeShippingMinimumOrderAmount,shipping.freeShippingMinimumOrderAmount)
        // await base.check(selector.admin.wooCommerce.settings.freeShippingCouponsDiscounts)
        break

      case 'local_pickup':
        // local pickup
        await base.clearAndType(selector.admin.wooCommerce.settings.localPickupTitle, shipping.shippingMethod)
        await base.select(selector.admin.wooCommerce.settings.localPickupTaxStatus, shipping.taxStatus)
        await base.clearAndType(selector.admin.wooCommerce.settings.localPickupCost, shipping.shippingCost)
        break

      case 'dokan_table_rate_shipping':
        // dokan table rate shipping
        await base.clearAndType(selector.admin.wooCommerce.settings.dokanTableRateShippingMethodTitle, shipping.shippingMethod)
        break

      case 'dokan_distance_rate_shipping':
        //dokan distance rate shipping
        await base.clearAndType(selector.admin.wooCommerce.settings.dokanDistanceRateShippingMethodTitle, shipping.shippingMethod)
        break

      case 'dokan_vendor_shipping':
        //vendor shipping
        await base.clearAndType(selector.admin.wooCommerce.settings.vendorShippingMethodTitle, shipping.shippingMethod)
        await base.select(selector.admin.wooCommerce.settings.vendorShippingTaxStatus, shipping.taxStatus)
        break

      default:
        break
    }

    await base.click(selector.admin.wooCommerce.settings.shippingMethodSaveChanges)

    await base.waitForSelector(selector.admin.wooCommerce.settings.shippingMethodCell(shipping.shippingMethod))
    let shippingMethodIsVisible = await base.isVisible(selector.admin.wooCommerce.settings.shippingMethodCell(shipping.shippingMethod))
    expect(shippingMethodIsVisible).toBe(true)

  },

  // admin delete shipping zone
  async deleteShippingZone(shippingZone) {
    await base.clickAndWait(selector.admin.wooCommerce.settings.shipping)

    await base.hover(selector.admin.wooCommerce.settings.shippingZoneCell(shippingZone))
    await base.alert('accept')
    await base.click(selector.admin.wooCommerce.settings.deleteShippingZone(shippingZone))
    await base.wait(1)

    let shippingZoneIsVisible = await base.isVisible(selector.admin.wooCommerce.settings.shippingZoneCell(shippingZone))
    expect(shippingZoneIsVisible).toBe(false)
  },

  // admin delete shipping method
  async deleteShippingMethod(shipping) {
    await base.clickAndWait(selector.admin.wooCommerce.settings.shipping)

    await base.hover(selector.admin.wooCommerce.settings.shippingZoneCell(shipping.shippingZone))
    await base.clickAndWait(selector.admin.wooCommerce.settings.editShippingZone(shipping.shippingZone))
    await base.hover(selector.admin.wooCommerce.settings.shippingMethodCell(shipping.shippingMethod))
    await base.click(selector.admin.wooCommerce.settings.deleteShippingMethod(shipping.shippingMethod))
    await base.click(selector.admin.wooCommerce.settings.shippingZoneSaveChanges)

    let shippingMethodIsVisible = await base.isVisible(selector.admin.wooCommerce.settings.shippingMethodCell(shipping.shippingMethod))
    expect(shippingMethodIsVisible).toBe(false)
  },



  //payment methods 

  // admin setup payment settings
  async setPaymentSettings() {
    await this.goToWooCommerceSettings()
    await this.setupBasicPaymentMethods()
    await this.setupStripeConnect()
    await this.setupPaypalMarketPlace()
    await this.setupDokanMangoPay()
    await this.setupDokanRazorpay()
    await this.setupStripeExpress()
  },

  // setCurrencyOptions
  async setCurrencyOptions(currency) {
    await this.goToWooCommerceSettings()

    //set currency options
    await base.clearAndType(selector.admin.wooCommerce.settings.thousandSeparator, currency.currencyOptions.thousandSeparator)
    await base.clearAndType(selector.admin.wooCommerce.settings.decimalSeparator, currency.currencyOptions.decimalSeparator)
    await base.clearAndType(selector.admin.wooCommerce.settings.numberOfDecimals, currency.currencyOptions.numberOfDecimals)
    await base.clickAndWait(selector.admin.wooCommerce.settings.generalSaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(currency.saveSuccessMessage)

  },

  // admin set currency
  async setCurrency(currency) {
    await this.goToWooCommerceSettings()
    let currentCurrency = await base.getElementText(selector.admin.wooCommerce.settings.currency)
    if (currentCurrency !== currency) {
      await base.click(selector.admin.wooCommerce.settings.currency)
      await base.type(selector.admin.wooCommerce.settings.currency, currency)
      await base.press(data.key.enter)
      await base.clickAndWait(selector.admin.wooCommerce.settings.generalSaveChanges)

      let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
      expect(successMessage).toMatch(currency.saveSuccessMessage)
    }
  },



  // admin setup basic payment methods
  async setupBasicPaymentMethods(payment) {
    await this.goToWooCommerceSettings()

    await base.clickAndWait(selector.admin.wooCommerce.settings.payments)
    //bank transfer
    await base.enablePaymentMethod(selector.admin.wooCommerce.settings.enableDirectBankTransfer)
    //check payments
    await base.enablePaymentMethod(selector.admin.wooCommerce.settings.enableCheckPayments)
    //cash on delivery
    await base.enablePaymentMethod(selector.admin.wooCommerce.settings.enableCashOnDelivery)

    await base.clickAndWait(selector.admin.wooCommerce.settings.paymentMethodsSaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(payment.saveSuccessMessage)
  },

  //admin setup Stripe
  async setupStripeConnect(payment) {
    await this.goToWooCommerceSettings()

    await this.setCurrency(payment.currency.dollar)

    await base.clickAndWait(selector.admin.wooCommerce.settings.payments)
    await base.clickAndWait(selector.admin.wooCommerce.settings.setupDokanStripeConnect)
    //setup strip connect
    await base.check(selector.admin.wooCommerce.settings.stripe.enableDisableStripe)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripe.title, payment.stripeConnect.title)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripe.description, payment.stripeConnect.description)
    await base.check(selector.admin.wooCommerce.settings.stripe.nonConnectedSellers)
    await base.check(selector.admin.wooCommerce.settings.stripe.displayNoticeToConnectSeller)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripe.displayNoticeInterval, payment.stripeConnect.displayNoticeInterval)
    await base.check(selector.admin.wooCommerce.settings.stripe.threeDSecureAndSca)
    await base.check(selector.admin.wooCommerce.settings.stripe.sellerPaysTheProcessingFeeIn3DsMode)
    await base.check(selector.admin.wooCommerce.settings.stripe.testMode)
    await base.check(selector.admin.wooCommerce.settings.stripe.stripeCheckout)
    await base.click(selector.admin.wooCommerce.settings.stripe.stripeCheckoutLocale)
    await base.type(selector.admin.wooCommerce.settings.stripe.stripeCheckoutLocale, payment.stripeConnect.stripeCheckoutLocale)
    await base.press(data.key.enter)
    await base.check(selector.admin.wooCommerce.settings.stripe.savedCards)
    //test credentials
    await base.clearAndType(selector.admin.wooCommerce.settings.stripe.testPublishableKey, payment.stripeConnect.testPublishableKey)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripe.testSecretKey, payment.stripeConnect.testSecretKey)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripe.testClientId, payment.stripeConnect.testClientId)
    await base.clickAndWait(selector.admin.wooCommerce.settings.stripe.stripeSaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(payment.saveSuccessMessage)
  },

  // admin setup dokan paypal marketplace
  async setupPaypalMarketPlace(payment) {
    await this.goToWooCommerceSettings()

    await this.setCurrency(payment.currency.dollar)

    await base.clickAndWait(selector.admin.wooCommerce.settings.payments)
    await base.clickAndWait(selector.admin.wooCommerce.settings.setupDokanPayPalMarketplace)
    // setup paypal marketplace
    await base.check(selector.admin.wooCommerce.settings.paypalMarketPlace.enableDisablePayPalMarketplace)
    await base.clearAndType(selector.admin.wooCommerce.settings.paypalMarketPlace.title, payment.paypalMarketPlace.title)
    await base.clearAndType(selector.admin.wooCommerce.settings.paypalMarketPlace.description, payment.paypalMarketPlace.description)
    await base.clearAndType(selector.admin.wooCommerce.settings.paypalMarketPlace.payPalMerchantId, payment.paypalMarketPlace.payPalMerchantId)
    // api credentials
    await base.check(selector.admin.wooCommerce.settings.paypalMarketPlace.payPalSandbox)
    await base.clearAndType(selector.admin.wooCommerce.settings.paypalMarketPlace.sandboxClientId, payment.paypalMarketPlace.sandboxClientId)
    await base.clearAndType(selector.admin.wooCommerce.settings.paypalMarketPlace.sandBoxClientSecret, payment.paypalMarketPlace.sandBoxClientSecret)
    await base.clearAndType(selector.admin.wooCommerce.settings.paypalMarketPlace.payPalPartnerAttributionId, payment.paypalMarketPlace.payPalPartnerAttributionId)
    await base.click(selector.admin.wooCommerce.settings.paypalMarketPlace.disbursementMode)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.paypalMarketPlace.disbursementModeValues, payment.paypalMarketPlace.disbursementMode)
    await base.click(selector.admin.wooCommerce.settings.paypalMarketPlace.paymentButtonType)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.paypalMarketPlace.paymentButtonTypeValues, payment.paypalMarketPlace.paymentButtonType)
    await base.clearAndType(selector.admin.wooCommerce.settings.paypalMarketPlace.marketplaceLogo, await base.getBaseUrl() + payment.paypalMarketPlace.marketplaceLogoPath)
    await base.check(selector.admin.wooCommerce.settings.paypalMarketPlace.displayNoticeToConnectSeller)
    await base.check(selector.admin.wooCommerce.settings.paypalMarketPlace.sendAnnouncementToConnectSeller)
    await base.clearAndType(selector.admin.wooCommerce.settings.paypalMarketPlace.sendAnnouncementInterval, payment.paypalMarketPlace.announcementInterval)
    await base.clickAndWait(selector.admin.wooCommerce.settings.paypalMarketPlace.paypalMarketPlaceSaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(payment.saveSuccessMessage)
  },

  //admin setup dokan mangopay
  async setupMangoPay(payment) {
    await this.goToWooCommerceSettings()

    await this.setCurrency(payment.currency.euro)

    await base.clickAndWait(selector.admin.wooCommerce.settings.payments)
    await base.clickAndWait(selector.admin.wooCommerce.settings.setupDokanMangoPay)
    // setup dokan mangopay
    await base.check(selector.admin.wooCommerce.settings.dokanMangoPay.enableDisableMangoPayPayment)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanMangoPay.title, payment.mangoPay.title)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanMangoPay.description, payment.mangoPay.description)
    //api credentials
    await base.check(selector.admin.wooCommerce.settings.dokanMangoPay.mangoPaySandbox)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanMangoPay.sandboxClientId, payment.mangoPay.sandboxClientId)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanMangoPay.sandBoxApiKey, payment.mangoPay.sandBoxApiKey)
    // payment options
    await base.click(selector.admin.wooCommerce.settings.dokanMangoPay.chooseAvailableCreditCards)
    // await base.type(selector.admin.wooCommerce.settings.dokanMangoPay.chooseAvailableCreditCards, 'CB/Visa/Mastercard')
    // await base.press(data.key.enter)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.dokanMangoPay.chooseAvailableCreditCardsValues, payment.mangoPay.availableCreditCards)
    await base.click(selector.admin.wooCommerce.settings.dokanMangoPay.chooseAvailableDirectPaymentServices)
    // await base.type(selector.admin.wooCommerce.settings.dokanMangoPay.chooseAvailableDirectPaymentServices, 'Sofort*')
    // await base.press(data.key.enter) //TODO: check why commented
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.dokanMangoPay.chooseAvailableDirectPaymentServicesValues, payment.mangoPay.availableDirectPaymentServices)
    await base.check(selector.admin.wooCommerce.settings.dokanMangoPay.savedCards)
    // fund transfers and payouts
    await base.click(selector.admin.wooCommerce.settings.dokanMangoPay.transferFunds)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.dokanMangoPay.transferFundsValues, payment.mangoPay.transferFunds)
    await base.check(selector.admin.wooCommerce.settings.dokanMangoPay.payoutMode)
    // types and requirements of vendors
    await base.click(selector.admin.wooCommerce.settings.dokanMangoPay.typeOfVendors)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.dokanMangoPay.typeOfVendorsValues, payment.mangoPay.typeOfVendors)
    await base.click(selector.admin.wooCommerce.settings.dokanMangoPay.businessRequirement)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.dokanMangoPay.businessRequirementValues, payment.mangoPay.businessRequirement)
    // advanced settings
    await base.check(selector.admin.wooCommerce.settings.dokanMangoPay.displayNoticeToNonConnectedSellers)
    await base.check(selector.admin.wooCommerce.settings.dokanMangoPay.sendAnnouncementToNonConnectedSellers)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanMangoPay.announcementInterval, payment.mangoPay.announcementInterval)
    await base.clickAndWait(selector.admin.wooCommerce.settings.dokanMangoPay.dokanMangopaySaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(payment.saveSuccessMessage)
  },

  //admin setup dokan razorpay
  async setupRazorpay(payment) {
    await this.goToWooCommerceSettings()

    await this.setCurrency(payment.currency.rupee)

    await base.clickAndWait(selector.admin.wooCommerce.settings.payments)
    await base.clickAndWait(selector.admin.wooCommerce.settings.setupDokanRazorpay)
    //setup dokan razorpay
    await base.check(selector.admin.wooCommerce.settings.dokanRazorpay.enableDisableDokanRazorpay)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanRazorpay.title, payment.razorPay.title)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanRazorpay.description, payment.razorPay.description)
    // api credentials
    await base.check(selector.admin.wooCommerce.settings.dokanRazorpay.razorpaySandbox)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanRazorpay.testKeyId, payment.razorPay.testKeyId)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanRazorpay.testKeySecret, payment.razorPay.testKeySecret)
    await base.click(selector.admin.wooCommerce.settings.dokanRazorpay.disbursementMode)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.dokanRazorpay.disbursementModeValues, payment.razorPay.disbursementMode)
    await base.check(selector.admin.wooCommerce.settings.dokanRazorpay.sellerPaysTheProcessingFee)
    await base.check(selector.admin.wooCommerce.settings.dokanRazorpay.displayNoticeToConnectSeller)
    await base.check(selector.admin.wooCommerce.settings.dokanRazorpay.sendAnnouncementToConnectSeller)
    await base.clearAndType(selector.admin.wooCommerce.settings.dokanRazorpay.sendAnnouncementInterval, payment.razorPay.announcementInterval)
    await base.clickAndWait(selector.admin.wooCommerce.settings.dokanRazorpay.dokanRazorpaySaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(payment.saveSuccessMessage)
  },

  //admin setup Stripe Express
  async setupStripeExpress(payment) {
    await this.goToWooCommerceSettings()

    await this.setCurrency(payment.currency.dollar)

    await base.clickAndWait(selector.admin.wooCommerce.settings.payments)
    await base.clickAndWait(selector.admin.wooCommerce.settings.setupDokanStripeExpress)

    // stripe express
    await base.check(selector.admin.wooCommerce.settings.stripeExpress.enableOrDisableStripeExpress)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripeExpress.title, payment.stripeExpress.title)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripeExpress.description, payment.stripeExpress.description)
    // api credentials
    await base.check(selector.admin.wooCommerce.settings.stripeExpress.testMode)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripeExpress.testPublishableKey, payment.stripeExpress.testPublishableKey)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripeExpress.testSecretKey, payment.stripeExpress.testSecretKey)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripeExpress.testWebhookSecret, payment.stripeExpress.testWebhookSecret)
    // payment and disbursement
    await base.click(selector.admin.wooCommerce.settings.stripeExpress.choosePaymentMethods)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.stripeExpress.choosePaymentMethodsValues, payment.stripeExpress.paymentMethods.card)
    await base.click(selector.admin.wooCommerce.settings.stripeExpress.choosePaymentMethods)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.stripeExpress.choosePaymentMethodsValues, payment.stripeExpress.paymentMethods.ideal)
    await base.check(selector.admin.wooCommerce.settings.stripeExpress.takeProcessingFeesFromSellers)
    await base.check(selector.admin.wooCommerce.settings.stripeExpress.savedCards)
    await base.check(selector.admin.wooCommerce.settings.stripeExpress.capturePaymentsManually)
    await base.click(selector.admin.wooCommerce.settings.stripeExpress.disburseFunds)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.stripeExpress.disbursementModeValues, payment.stripeExpress.disbursementMode)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripeExpress.customerBankStatement, payment.stripeExpress.customerBankStatement)
    // payment request options (apple pay/google pay)
    await base.check(selector.admin.wooCommerce.settings.stripeExpress.paymentRequestButtons)
    await base.select(selector.admin.wooCommerce.settings.stripeExpress.buttonType, payment.stripeExpress.paymentRequestButtonType)
    await base.select(selector.admin.wooCommerce.settings.stripeExpress.buttonTheme, payment.stripeExpress.paymentRequestButtonTheme)
    await base.click(selector.admin.wooCommerce.settings.stripeExpress.buttonLocations)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.stripeExpress.buttonLocationsValues, payment.stripeExpress.paymentRequestButtonLocation.product)
    await base.click(selector.admin.wooCommerce.settings.stripeExpress.buttonLocations)
    await base.setDropdownOptionSpan(selector.admin.wooCommerce.settings.stripeExpress.buttonLocationsValues, payment.stripeExpress.paymentRequestButtonLocation.cart)
    // advanced settings
    await base.check(selector.admin.wooCommerce.settings.stripeExpress.displayNoticeToNonConnectedSellers)
    await base.check(selector.admin.wooCommerce.settings.stripeExpress.sendAnnouncementToNonConnectedSellers)
    await base.clearAndType(selector.admin.wooCommerce.settings.stripeExpress.announcementInterval, payment.stripeExpress.announcementInterval)
    await base.clickAndWait(selector.admin.wooCommerce.settings.stripeExpress.stripeExpressSaveChanges)

    let successMessage = await base.getElementText(selector.admin.wooCommerce.settings.updatedSuccessMessage)
    expect(successMessage).toMatch(payment.saveSuccessMessage)
  },



  // Vendors 

  // admin add new vendors
  async addVendor(vendorInfo) {

    let firstName = vendorInfo.firstName()
    let email = vendorInfo.email()
    await base.hover(selector.admin.aDashboard.dokan)
    await base.clickAndWait(selector.admin.dokan.vendorsMenu)

    //add new vendor
    await base.click(selector.admin.dokan.vendors.addNewVendor)
    // account info
    await base.type(selector.admin.dokan.vendors.firstName, firstName)
    await base.type(selector.admin.dokan.vendors.lastName, vendorInfo.lastName())
    await base.type(selector.admin.dokan.vendors.storeName, vendorInfo.storeName)
    await base.type(selector.admin.dokan.vendors.phoneNumber, vendorInfo.phoneNumber)
    await base.type(selector.admin.dokan.vendors.email, email)
    await base.click(selector.admin.dokan.vendors.generatePassword)
    await base.clearAndType(selector.admin.dokan.vendors.password, vendorInfo.password)
    await base.type(selector.admin.dokan.vendors.username, firstName)
    await base.type(selector.admin.dokan.vendors.companyName, vendorInfo.companyName)
    await base.type(selector.admin.dokan.vendors.companyIdEuidNumber, vendorInfo.companyIdEuidNumber)
    await base.type(selector.admin.dokan.vendors.vatOrTaxNumber, vendorInfo.vatOrTaxNumber)
    await base.type(selector.admin.dokan.vendors.nameOfBank, vendorInfo.nameOfBank)
    await base.type(selector.admin.dokan.vendors.bankIban, vendorInfo.bankIban)
    await base.wait(3)
    await base.click(selector.admin.dokan.vendors.next)

    // address  
    await base.type(selector.admin.dokan.vendors.street1, vendorInfo.street1)
    await base.type(selector.admin.dokan.vendors.street2, vendorInfo.street2)
    await base.type(selector.admin.dokan.vendors.city, vendorInfo.city)
    await base.type(selector.admin.dokan.vendors.zip, vendorInfo.zip)
    await base.click(selector.admin.dokan.vendors.country)
    await base.type(selector.admin.dokan.vendors.countryInput, vendorInfo.country)
    await base.press(data.key.enter)
    await base.click(selector.admin.dokan.vendors.state)
    await base.type(selector.admin.dokan.vendors.state, vendorInfo.state)
    await base.click(selector.admin.dokan.vendors.next)

    // payment options  
    await base.type(selector.admin.dokan.vendors.accountName, vendorInfo.accountName)
    await base.type(selector.admin.dokan.vendors.accountNumber, vendorInfo.accountNumber)
    await base.type(selector.admin.dokan.vendors.bankName, vendorInfo.bankName)
    await base.type(selector.admin.dokan.vendors.bankAddress, vendorInfo.bankAddress)
    await base.type(selector.admin.dokan.vendors.routingNumber, vendorInfo.routingNumber)
    await base.type(selector.admin.dokan.vendors.iban, vendorInfo.iban)
    await base.type(selector.admin.dokan.vendors.swift, vendorInfo.swift)
    await base.type(selector.admin.dokan.vendors.payPalEmail, vendorInfo.payPalEmail)
    await base.check(selector.admin.dokan.vendors.enableSelling)
    await base.check(selector.admin.dokan.vendors.publishProductDirectly)
    await base.check(selector.admin.dokan.vendors.makeVendorFeature)
    //create vendor
    await base.click(selector.admin.dokan.vendors.createVendor)
    await base.clickAndWait(selector.admin.dokan.vendors.editVendorInfo)

    let vendorEmail = await base.getElementValue(selector.admin.dokan.vendors.editVendor.email)
    expect(vendorEmail).toBe(email)

  },



  // Products 



  // Admin add categories
  async addCategory(categoryName) {
    await base.hover(selector.admin.aDashboard.products)
    await base.clickAndWait(selector.admin.products.categoriesMenu)

    let categoryIsVisible = await base.isVisible(selector.admin.products.category.categoryCell(categoryName))
    if (!categoryIsVisible) {

      // Add new category
      await base.type(selector.admin.products.category.name, categoryName)
      await base.type(selector.admin.products.category.slug, categoryName)
      await base.click(selector.admin.products.category.addNewCategory)

      await base.waitForSelector(selector.admin.products.category.categoryCell(categoryName))
      let categoryIsVisible = await base.isVisible(selector.admin.products.category.categoryCell(categoryName))
      expect(categoryIsVisible).toBe(true)
    }
  },

  // Admin add attributes
  async addAttributes(attribute) {
    await base.hover(selector.admin.aDashboard.products)
    await base.clickAndWait(selector.admin.products.attributesMenu)

    let attributeIsVisible = await base.isVisible(selector.admin.products.attribute.attributeCell(attribute.attributeName))
    if (!attributeIsVisible) {
      // Add new attribute
      await base.type(selector.admin.products.attribute.name, attribute.attributeName)
      await base.type(selector.admin.products.attribute.slug, attribute.attributeName)
      await base.click(selector.admin.products.attribute.addAttribute)

      await base.waitForSelector(selector.admin.products.attribute.attributeCell(attribute.attributeName))
      let attributeIsVisible = await base.isVisible(selector.admin.products.attribute.attributeCell(attribute.attributeName))
      expect(attributeIsVisible).toBe(true)

      await base.clickAndWait(selector.admin.products.attribute.configureTerms(attribute.attributeName))

      // Add new term
      for (let attributeTerm of attribute.attributeTerms) {
        await base.type(selector.admin.products.attribute.attributeTerm, attributeTerm)
        await base.type(selector.admin.products.attribute.attributeTermSlug, attributeTerm)
        await base.click(selector.admin.products.attribute.addAttributeTerm)

        await base.waitForSelector(selector.admin.products.attribute.attributeTermCell(attributeTerm))
        let attributeTermIsVisible = await base.isVisible(selector.admin.products.attribute.attributeTermCell(attributeTerm))
        expect(attributeTermIsVisible).toBe(true)
      }
    }
  },

  // Admin add simple product
  async addSimpleProduct(product) {
    await base.hover(selector.admin.aDashboard.products)
    await base.clickAndWait(selector.admin.products.addNewMenu)

    // Add new simple product
    // Name
    await base.type(selector.admin.products.product.productName, product.productName())
    await base.select(selector.admin.products.product.productType, product.productType)
    await base.type(selector.admin.products.product.regularPrice, product.regularPrice())
    // Category
    await base.click(selector.admin.products.product.category(product.category))
    // Stock status
    if (product.stockStatus) {
      await this.editStockStatus(data.product.stockStatus.outOfStock)
    }

    // Vendor Store Name
    // await base.selectByText(selector.admin.products.product.storeName, product.storeName)//TODO: replace below line with this
    await base.selectOptionByText(selector.admin.products.product.storeName, selector.admin.products.product.vendorOptions, product.storeName)
    await base.scrollToTop()

    switch (product.status) {
      case 'publish':
        // Publish
        await base.wait(1)
        await base.clickAndWait(selector.admin.products.product.publish)
        let productCreateSuccessMessage = await base.getElementText(selector.admin.products.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage).toMatch(data.product.publishSuccessMessage)
        break

      case 'draft':
        // Draft
        await base.clickAndWait(selector.admin.products.product.saveDraft)
        let draftProductCreateSuccessMessage = await base.getElementText(selector.admin.products.product.updatedSuccessMessage)
        expect(draftProductCreateSuccessMessage).toMatch(data.product.draftUpdateSuccessMessage)
        break

      case 'pending':
        // Pending
        await base.click(selector.admin.products.product.editStatus)
        await base.select(selector.admin.products.product.status, data.product.status.pending)
        await base.wait(1)
        await base.clickAndWait(selector.admin.products.product.saveDraft)
        let pendingProductCreateSuccessMessage = await base.getElementText(selector.admin.products.product.updatedSuccessMessage)
        expect(pendingProductCreateSuccessMessage).toMatch(data.product.pendingProductUpdateSuccessMessage)
        break

      default:
        break
    }

  },

  //admin add variable product
  // async addVariableProduct(productName, productPrice, categoryName, vendor, attribute, attributeTerms) {
  //   await base.hover(selector.admin.aDashboard.products)
  //   await base.clickAndWait(selector.admin.products.addNewMenu)

  //   // add new variable product
  //   await base.select(selector.admin.products.product.productType, 'variable')

  //   await base.click(selector.admin.products.product.attributes)
  //   // await base.wait(1)

  //   // add attributes
  //   await base.select(selector.admin.products.product.customProductAttribute, `pa_${attribute}`)
  //   await base.wait(2)
  //   await base.click(selector.admin.products.product.addAttribute)
  //   await base.wait(2)
  //   await base.click(selector.admin.products.product.selectAll)
  //   await base.click(selector.admin.products.product.usedForVariations)
  //   await base.wait(2)
  //   await base.click(selector.admin.products.product.saveAttributes)
  //   await base.wait(2)

  //   //TODO: need to update js alert 
  //   // add variations
  //   await base.click(selector.admin.products.product.variations)
  //   await base.wait(2)
  //   await base.click(selector.admin.products.product.variations)
  //   await base.wait(2)
  //   await base.select(selector.admin.products.product.addVariations, 'link_all_variations')
  //   await base.wait(2)
  //   await base.alert('accept')
  //   await base.click(selector.admin.products.product.go)
  //   await base.wait(2)

  //   await base.select(selector.admin.products.product.addVariations, 'variable_regular_price')
  //   await base.wait(2)
  //   await base.click(selector.admin.products.product.go)
  //   await base.alertWithValue(120)
  //   await base.wait(2)

  //   //category
  //   await base.click(selector.admin.products.product.category(categoryName))
  //   //vendor
  //   // await base.selectByText(selector.admin.products.product.storeName, product.storeName)//TODO: replace below line with this
  //   await base.selectOptionByText(selector.admin.products.product.storeName, selector.admin.products.product.vendorOptions, product.storeName)
  //   // name
  //   await base.type(selector.admin.products.product.productName, product.productName) // TODO: publish element is blocked by other element that's why name is filled later
  //   //publish
  //   await base.clickAndWait(selector.admin.products.product.publish)

  //   let productCreateSuccessMessage = await base.getElementText(selector.admin.products.product.updatedSuccessMessage)
  //   expect(productCreateSuccessMessage).toMatch(data.product.publishSuccessMessage)
  // },

  //admin add simple subscription product
  async addSimpleSubscription(product) {
    await base.hover(selector.admin.aDashboard.products)
    await base.clickAndWait(selector.admin.products.addNewMenu)

    // Add new simple subscription
    // Name
    await base.type(selector.admin.products.product.productName, product.productName())
    await base.select(selector.admin.products.product.productType, product.productType)
    await base.type(selector.admin.products.product.subscriptionPrice, product.subscriptionPrice())
    await base.select(selector.admin.products.product.subscriptionPeriodInterval, product.subscriptionPeriodInterval)
    await base.select(selector.admin.products.product.subscriptionPeriod, product.subscriptionPeriod)
    await base.select(selector.admin.products.product.expireAfter, product.expireAfter)
    await base.type(selector.admin.products.product.subscriptionTrialLength, product.subscriptionTrialLength)
    await base.select(selector.admin.products.product.subscriptionTrialPeriod, product.subscriptionTrialPeriod)
    // Category
    await base.click(selector.admin.products.product.category(product.category))
    // Vendor Store Name
    // await base.selectByText(selector.admin.products.product.storeName, product.storeName)//TODO: replace below line with this
    await base.selectOptionByText(selector.admin.products.product.storeName, selector.admin.products.product.vendorOptions, product.storeName)
    // Publish
    await base.scrollToTop()
    await base.clickAndWait(selector.admin.products.product.publish)

    let productCreateSuccessMessage = await base.getElementText(selector.admin.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch(data.product.publishSuccessMessage)
  },

  // Admin add variable subscription product
  async addVariableSubscription(productName, productPrice, categoryName, vendor, attribute, attributeTerms) {
  },

  // Admin add group product
  async addGroupProduct(productName, productPrice, categoryName, vendor) {
  },

  // Admin add external product
  async addExternalProduct(product) {
    await base.hover(selector.admin.aDashboard.products)
    await base.clickAndWait(selector.admin.products.addNewMenu)

    // Add new external product
    // Name
    await base.type(selector.admin.products.product.productName, product.productName())
    await base.select(selector.admin.products.product.productType, product.productType)
    await base.type(selector.admin.products.product.productUrl, await base.getBaseUrl() + product.external.productUrl)
    await base.type(selector.admin.products.product.buttonText, product.buttonText)
    await base.type(selector.admin.products.product.regularPrice, product.regularPrice())
    // Category
    await base.click(selector.admin.products.product.category(product.category))
    // Vendor Store Name
    // await base.selectByText(selector.admin.products.product.storeName, product.storeName)//TODO: replace below line with this
    await base.selectOptionByText(selector.admin.products.product.storeName, selector.admin.products.product.vendorOptions, product.storeName)

    // Publish
    await base.scrollToTop()
    await base.clickAndWait(selector.admin.products.product.publish)

    let productCreateSuccessMessage = await base.getElementText(selector.admin.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch(data.product.publishSuccessMessage)
  },

  //admin add dokan subscription product
  async addDokanSubscription(product) {
    await base.hover(selector.admin.aDashboard.products)
    await base.clickAndWait(selector.admin.products.addNewMenu)

    // Add new dokan subscription product
    // Name
    await base.type(selector.admin.products.product.productName, product.productName())
    await base.select(selector.admin.products.product.productType, product.productType)
    await base.type(selector.admin.products.product.regularPrice, product.regularPrice())
    // Category
    await base.click(selector.admin.products.product.category(product.category))
    // Subscription details
    await base.type(selector.admin.products.product.numberOfProducts, product.numberOfProducts)
    await base.type(selector.admin.products.product.packValidity, product.packValidity)
    await base.type(selector.admin.products.product.advertisementSlot, product.advertisementSlot)
    await base.type(selector.admin.products.product.expireAfterDays, product.expireAfterDays)
    await base.click(selector.admin.products.product.recurringPayment)
    // Vendor Store Name
    // await base.selectByText(selector.admin.products.product.storeName, product.storeName)//TODO: replace below line with this
    await base.selectOptionByText(selector.admin.products.product.storeName, selector.admin.products.product.vendorOptions, product.storeName)

    // Publish
    await base.scrollToTop()
    await base.clickAndWait(selector.admin.products.product.publish)

    let productCreateSuccessMessage = await base.getElementText(selector.admin.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch(data.product.publishSuccessMessage)
  },

  // Admin add auction product
  async addAuctionProduct(product) {
    await base.hover(selector.admin.aDashboard.products)
    await base.clickAndWait(selector.admin.products.addNewMenu)

    // Add new auction product
    // Name
    await base.type(selector.admin.products.product.productName, product.productName())
    await base.select(selector.admin.products.product.productType, product.productType)

    await base.select(selector.admin.products.product.itemCondition, product.itemCondition)
    await base.select(selector.admin.products.product.auctionType, product.auctionType)
    await base.type(selector.admin.products.product.startPrice, product.regularPrice)
    await base.type(selector.admin.products.product.bidIncrement, product.bidIncrement)
    await base.type(selector.admin.products.product.reservedPrice, product.reservedPrice())
    await base.type(selector.admin.products.product.buyItNowPrice, product.buyItNowPrice())
    await base.type(selector.admin.products.product.auctionDatesFrom, product.startDate)
    await base.type(selector.admin.products.product.auctionDatesTo, product.endDate)

    // Category
    await base.click(selector.admin.products.product.category(product.category))
    // Vendor Store Name
    // await base.selectByText(selector.admin.products.product.storeName, product.storeName)//TODO: replace below line with this
    await base.selectOptionByText(selector.admin.products.product.storeName, selector.admin.products.product.vendorOptions, product.storeName)

    // Publish
    await base.scrollToTop()
    await base.clickAndWait(selector.admin.products.product.publish)

    let productCreateSuccessMessage = await base.getElementText(selector.admin.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch(product.publishSuccessMessage)
  },

  // Admin add booking product
  async addBookingProduct(product) {
    await base.hover(selector.admin.aDashboard.products)
    await base.clickAndWait(selector.admin.products.addNewMenu)

    // add new booking product
    // Name
    await base.type(selector.admin.products.product.productName, product.productName())

    await base.select(selector.admin.products.product.productType, product.productType)
    await base.select(selector.admin.products.product.bookingDurationType, product.bookingDurationType)
    await base.clearAndType(selector.admin.products.product.bookingDurationMax, product.bookingDurationMax)
    await base.select(selector.admin.products.product.calendarDisplayMode, product.calendarDisplayMode)

    //costs
    await base.click(selector.admin.products.product.bookingCosts)
    await base.wait(1)
    await base.clearAndType(selector.admin.products.product.baseCost, product.baseCost)
    await base.clearAndType(selector.admin.products.product.blockCost, product.blockCost)

    // Category
    await base.click(selector.admin.products.product.category(product.category))
    // Vendor Store Name
    // await base.selectByText(selector.admin.products.product.storeName, vendor)//TODO: replace below line with this
    await base.selectOptionByText(selector.admin.products.product.storeName, selector.admin.products.product.vendorOptions, product.storeName)
    // Publish
    await base.scrollToTop()
    await base.clickAndWait(selector.admin.products.product.publish)

    let productCreateSuccessMessage = await base.getElementText(selector.admin.products.product.updatedSuccessMessage)
    expect(productCreateSuccessMessage).toMatch(product.publishSuccessMessage)
  },

  //admin update product stock status
  async editStockStatus(status) {
    await base.click(selector.admin.products.product.inventory)
    await base.select(selector.admin.products.product.stockStatus, status)
  },



  // Wholesale customer 



  // Admin approve wholesale request
  async adminApproveWholesaleRequest(customer) {
    await base.hover(selector.admin.aDashboard.dokan)
    await base.clickAndWait(selector.admin.dokan.wholesaleCustomerMenu)
    await base.click(selector.admin.dokan.wholesaleCustomer.statusSlider(customer))

    let enableStatusSuccessMessage = await base.getElementText(selector.admin.dokan.wholesaleCustomer.enableStatusUpdateSuccessMessage)
    expect(enableStatusSuccessMessage).toMatch('Wholesale capability activate')
  },

  async getOrderDetails(orderNumber) { //TODO: separate function to get order details form inside order details base
    let subMenuOpened = await base.getElementClassValue(selector.admin.aDashboard.dokanMenu)
    if (subMenuOpened.includes('opensub')) {
      await base.hover(selector.admin.aDashboard.dokan)
      await base.clickAndWait(selector.admin.dokan.reportsMenu)
    } else {
      await base.click(selector.admin.dokan.reportsMenu)
      await base.wait(2)
    }
    await base.click(selector.admin.dokan.reports.allLogs)
    await base.wait(3)
    await base.type(selector.admin.dokan.reports.searchByOrder, orderNumber)
    await base.wait(2)

    let aOrderDetails = {
      orderNumber: (await base.getElementText(selector.admin.dokan.reports.orderId)).split('#')[1],
      store: await base.getElementText(selector.admin.dokan.reports.store),
      orderTotal: helpers.price(await base.getElementText(selector.admin.dokan.reports.orderTotal)),
      vendorEarning: helpers.price(await base.getElementText(selector.admin.dokan.reports.vendorEarning)),
      commission: helpers.price(await base.getElementText(selector.admin.dokan.reports.commission)),
      gatewayFee: helpers.price(await base.getElementText(selector.admin.dokan.reports.gatewayFee)),
      shippingCost: helpers.price(await base.getElementText(selector.admin.dokan.reports.shippingCost)),
      tax: helpers.price(await base.getElementText(selector.admin.dokan.reports.tax)),
      orderStatus: await base.getElementText(selector.admin.dokan.reports.orderStatus),
      orderDate: await base.getElementText(selector.admin.dokan.reports.orderDate),
    }
    return aOrderDetails
  },

  // Get total admin commission from admin dashboard
  async getTotalAdminCommission() {
    await base.hover(selector.admin.aDashboard.dokan)
    await base.clickAndWait(selector.admin.dokan.dashboardMenu)

    let totalAdminCommission = helpers.price(await base.getElementText(selector.admin.dokan.dashboard.commissionEarned))
    return totalAdminCommission
  },

  async approveRefundRequest(orderNumber, approve = false) {
    await this.searchRefundRequest(orderNumber)

    await base.hover(selector.admin.dokan.refunds.refundCell(orderNumber))
    if (approve) {
      await base.click(selector.admin.dokan.refunds.approveRefund(orderNumber))
    } else {
      await base.click(selector.admin.dokan.refunds.cancelRefund(orderNumber))
    }
    await base.wait(3)

    let refundRequestIsVisible = await base.isVisible(selector.admin.dokan.refunds.refundCell(orderNumber))
    expect(refundRequestIsVisible).toBe(false)
  },

  async searchRefundRequest(orderNumber) {
    await base.hover(selector.admin.aDashboard.dokan)
    await base.clickAndWait(selector.admin.dokan.refundsMenu)

    //search refund request
    await base.type(selector.admin.dokan.refunds.searchRefund, orderNumber)
    // await base.press(data.key.enter)
    await base.wait(3)

    await base.waitForSelector(selector.admin.dokan.refunds.refundCell(orderNumber))
    let searchedRefundRequestIsVisible = await base.isVisible(selector.admin.dokan.refunds.refundCell(orderNumber))
    expect(searchedRefundRequestIsVisible).toBe(true)
  },


  // Dokan Setup Wizard 

  // Admin set dokan setup wizard
  async setDokanSetupWizard(dokanSetupWizard) {
    await base.hover(selector.admin.aDashboard.dokan)
    await base.clickAndWait(selector.admin.dokan.toolsMenu)

    // Open dokan setup wizard
    await base.clickAndWait(selector.admin.dokan.tools.openSetupWizard)

    await base.clickAndWait(selector.admin.dokan.dokanSetupWizard.letsGo)
    // Store
    await base.clearAndType(selector.admin.dokan.dokanSetupWizard.vendorStoreURL, dokanSetupWizard.vendorStoreURL)
    await base.click(selector.admin.dokan.dokanSetupWizard.shippingFeeRecipient)
    await base.setDropdownOptionSpan(selector.admin.dokan.dokanSetupWizard.shippingFeeRecipientValues, dokanSetupWizard.shippingFeeRecipient)
    await base.click(selector.admin.dokan.dokanSetupWizard.taxFeeRecipient)
    await base.setDropdownOptionSpan(selector.admin.dokan.dokanSetupWizard.taxFeeRecipientValues, dokanSetupWizard.taxFeeRecipient)
    await base.click(selector.admin.dokan.dokanSetupWizard.mapApiSource)
    await base.setDropdownOptionSpan(selector.admin.dokan.dokanSetupWizard.mapApiSource, dokanSetupWizard.mapApiSource)
    await base.clearAndType(selector.admin.dokan.dokanSetupWizard.googleMapApiKey, dokanSetupWizard.googleMapApiKey)
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.shareEssentialsOff)
    await base.click(selector.admin.dokan.dokanSetupWizard.sellingProductTypes)
    await base.setDropdownOptionSpan(selector.admin.dokan.dokanSetupWizard.sellingProductTypes, dokanSetupWizard.sellingProductTypes)
    await base.clickAndWait(selector.admin.dokan.dokanSetupWizard.continue)
    // await base.clickAndWait(selector.admin.dokan.dokanSetupWizard.skipThisStep)

    // Selling
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.newVendorEnableSelling)
    await base.click(selector.admin.dokan.dokanSetupWizard.commissionType)
    await base.setDropdownOptionSpan(selector.admin.dokan.dokanSetupWizard.commissionTypeValues, dokanSetupWizard.commissionTypeValues)
    await base.clearAndType(selector.admin.dokan.dokanSetupWizard.adminCommission, dokanSetupWizard.adminCommission)
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.orderStatusChange)
    await base.clickAndWait(selector.admin.dokan.dokanSetupWizard.continue)
    // await base.clickAndWait(selector.admin.dokan.dokanSetupWizard.skipThisStep)

    // Withdraw
    //TODO: add more payment methods
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.payPal)
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.bankTransfer)
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.wirecard)
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.stripe)
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.custom)
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.skrill)
    await base.clearAndType(selector.admin.dokan.dokanSetupWizard.minimumWithdrawLimit, dokanSetupWizard.minimumWithdrawLimit)
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.orderStatusForWithdrawCompleted)
    await base.enableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.orderStatusForWithdrawProcessing)
    await base.clickAndWait(selector.admin.dokan.dokanSetupWizard.continue)

    // Recommended
    await base.disableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.wooCommerceConversionTracking)
    await base.disableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.weMail)
    await base.disableSwitcherSetupWizard(selector.admin.dokan.dokanSetupWizard.texty)
    await base.clickAndWait(selector.admin.dokan.dokanSetupWizard.continueRecommended)

    // Ready!
    await base.clickAndWait(selector.admin.dokan.dokanSetupWizard.visitDokanDashboard)

    await base.waitForSelector(selector.admin.dokan.dashboard.dashboardText)
    let dashboardTextIsVisible = await base.isVisible(selector.admin.dokan.dashboard.dashboardText)
    expect(dashboardTextIsVisible).toBe(true)

  },

  // Dokan Modules 

  // Module activation check
  async checkActiveModules() {
    await base.hover(selector.admin.aDashboard.dokan)
    await base.clickAndWait(selector.admin.dokan.modulesMenu)
    await base.wait(2)
    await base.click(selector.admin.dokan.modules.inActive)
    await base.wait(2)

    let noModulesMessage = await base.isVisible(selector.admin.dokan.modules.noModulesFound)
    if (noModulesMessage) {
      let noModulesMessageText = await base.getElementText(selector.admin.dokan.modules.noModulesFound)
      expect(noModulesMessageText).toMatch('No modules found.')
    } else {
      let inActiveModuleNames = await base.getMultipleElementTexts(selector.admin.dokan.modules.moduleName)
      throw new Error("Inactive module exists: " + inActiveModuleNames)
    }
  },
}