const base = require("../pages/base.js")
const loginPage = require('../pages/login.js')
const data = require('../utils/testData.js')
const helpers = require("../utils/helpers.js")
const selector = require("../pages/selectors.js")



module.exports = {

    // navigation 

    async goToMyAccount() {
        await base.goIfNotThere(data.subUrls.frontend.myAccount)

        const url = await page.url()
        expect(url).toMatch(data.subUrls.frontend.myAccount)
    },

    async goToVendorDashboard() {
        await base.goIfNotThere(data.subUrls.frontend.dashboard)

        const url = await page.url()
        expect(url).toMatch(data.subUrls.frontend.dashboard)
    },

    // Setup Wizard 

    // Vendor Registration
    async vendorRegister(vendorInfo, setupWizardChoice, setupWizardData) {
        await this.goToMyAccount()
        let loginIsVisible = await base.isVisible(selector.customer.cRegistration.regEmail)
        if (!loginIsVisible) {
            await loginPage.logout()
        }
        username = vendorInfo.firstName()
        await base.clearAndType(selector.vendor.vRegistration.regEmail, username + data.vendor.vendorInfo.emailDomain)
        await base.clearAndType(selector.vendor.vRegistration.regPassword, vendorInfo.password)
        await base.click(selector.vendor.vRegistration.regVendor)
        await base.clearAndType1(selector.vendor.vRegistration.firstName, vendorInfo.firstName)
        await base.clearAndType(selector.vendor.vRegistration.lastName, vendorInfo.lastName)
        await base.clearAndType(selector.vendor.vRegistration.shopName, vendorInfo.shopName)
        // await base.clearAndType(selector.vendor.shopUrl, shopUrl)
        await base.click(selector.vendor.vRegistration.shopUrl)
        await base.clearAndType(selector.vendor.vRegistration.companyName, vendorInfo.companyName)
        await base.clearAndType(selector.vendor.vRegistration.companyId, vendorInfo.companyId)
        await base.clearAndType(selector.vendor.vRegistration.vatNumber, vendorInfo.vatNumber)
        await base.clearAndType(selector.vendor.vRegistration.bankName, vendorInfo.bankName)
        await base.clearAndType(selector.vendor.vRegistration.bankIban, vendorInfo.bankIban)
        await base.clearAndType(selector.vendor.vRegistration.phone, vendorInfo.phone)
        let termsAndConditionsIsVisible = await base.isVisible(selector.customer.cDashboard.termsAndConditions)
        if (termsAndConditionsIsVisible) {
            await base.check(selector.customer.cDashboard.termsAndConditions)
        }

        let subscriptionPackIsVisible = await base.isVisible(selector.vendor.vRegistration.subscriptionPack)
        if (subscriptionPackIsVisible) {
            await base.selectOptionByText(selector.vendor.vRegistration.subscriptionPack, selector.vendor.vRegistration.subscriptionPackOptions, "Dokan_subscription_Non_recurring")
        }

        await base.clickAndWait(selector.vendor.vRegistration.register)
        let registrationErrorIsVisible = await base.isVisible(selector.customer.cWooSelector.wooCommerceError)
        if (registrationErrorIsVisible) {
            let errorMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceError)
            if (errorMessage.includes(data.customer.registrationErrorMessage)) {
                return
            }
        }

        await this.vendorSetupWizard(setupWizardChoice, setupWizardData)
    },

    // Vendor Setup Wizard
    async vendorSetupWizard(vendorSetupWizard) {
        if (setupWizardChoice) {
            await base.click(selector.vendor.vSetup.letsGo)

            await base.clearAndType(selector.vendor.vSetup.storeProductsPerPage, vendorSetupWizard.storeProductsPerPage)
            await base.type(selector.vendor.vSetup.street1, vendorSetupWizard.street1)
            await base.type(selector.vendor.vSetup.street2, vendorSetupWizard.street2)
            await base.type(selector.vendor.vSetup.city, vendorSetupWizard.city)
            await base.type(selector.vendor.vSetup.zipCode, vendorSetupWizard.zipCode)
            await base.click(selector.vendor.vSetup.country)
            await base.type(selector.vendor.vSetup.countryInput, vendorSetupWizard.country)
            await base.press(data.key.enter)
            await base.type(selector.vendor.vSetup.state, vendorSetupWizard.state)
            await base.press(data.key.enter)
            await base.click(selector.vendor.vSetup.email)
            await base.clickAndWait(selector.vendor.vSetup.continueStoreSetup)

            // Paypal
            await base.clearAndType(selector.vendor.vSetup.paypal, vendorSetupWizard.paypal())
            // Bank Transfer
            await base.type(selector.vendor.vSetup.bankAccountName, vendorSetupWizard.bankAccountName)
            await base.select(selector.vendor.vSetup.bankAccountType, vendorSetupWizard.bankAccountType)
            await base.type(selector.vendor.vSetup.bankRoutingNumber, vendorSetupWizard.bankRoutingNumber)
            await base.type(selector.vendor.vSetup.bankAccountNumber, vendorSetupWizard.bankAccountNumber)
            await base.type(selector.vendor.vSetup.bankName, vendorSetupWizard.bankName)
            await base.type(selector.vendor.vSetup.bankAddress, vendorSetupWizard.bankAddress)
            await base.type(selector.vendor.vSetup.bankIban, vendorSetupWizard.bankIban)
            await base.type(selector.vendor.vSetup.bankSwiftCode, vendorSetupWizard.bankSwiftCode)
            await base.check(selector.vendor.vSetup.declaration)

            await base.type(selector.vendor.vSetup.customPayment, vendorSetupWizard.customPayment)

            await base.clearAndType(selector.vendor.vSetup.skrill, vendorSetupWizard.skrill)
            await base.clickAndWait(selector.vendor.vSetup.continuePaymentSetup)

            await base.clickAndWait(selector.vendor.vSetup.goToStoreDashboard)

            let dashboardIsVisible = await base.isVisible(selector.vendor.vDashboard.dashboard)
            expect(dashboardIsVisible).toBe(true)
        }
        else {
            await base.clickAndWait(selector.vendor.vSetup.notRightNow)

            let dashboardIsVisible = await base.isVisible(selector.vendor.vDashboard.dashboard)
            expect(dashboardIsVisible).toBe(true)
        }

    },

    // Products 

    // Vendor Add Simple Product
    async addSimpleProduct(product) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.products)
        let productName = product.productName()
        // Add New Simple Product
        await base.click(selector.vendor.product.addNewProduct)
        await base.type(selector.vendor.product.productName, productName)
        await base.type(selector.vendor.product.productPrice, product.regularPrice())
        // await base.click(selector.vendor.product.productCategory) //TODO: handel via multistep category
        // await base.type(selector.vendor.product.productCategoryInput, product.category)
        // await base.press(data.key.enter)
        await base.clickAndWait(selector.vendor.product.createProduct)

        let createdProduct = await base.getElementValue(selector.vendor.product.title)
        expect(createdProduct.toLowerCase()).toBe(productName.toLowerCase())
    },

    // Vendor Add Variable Product
    async addVariableProduct(product) {
        await this.addSimpleProduct(product)

        // Edit Product
        await base.select(selector.vendor.product.productType, product.productType)
        // Add Variation
        //TODO: create attribute if not exists
        await base.select(selector.vendor.product.customProductAttribute, `pa_${product.attribute}`)
        await base.wait(1)
        await base.click(selector.vendor.product.addAttribute)
        await base.waitForSelector(selector.vendor.product.selectAll)
        await base.click(selector.vendor.product.selectAll)
        await base.click(selector.vendor.product.usedForVariations)
        await base.waitForSelector(selector.vendor.product.saveAttributes)
        await base.click(selector.vendor.product.saveAttributes)

        await base.waitForSelector(selector.vendor.product.addVariations)
        await base.select(selector.vendor.product.addVariations, product.variable.linkAllVariation)
        await base.wait(1)
        await base.click(selector.vendor.product.go)
        await base.waitForSelector(selector.vendor.product.confirmGo)
        await base.click(selector.vendor.product.confirmGo)
        await base.wait(1)
        await base.click(selector.vendor.product.okSuccessAlertGo)
        await base.wait(1)

        await base.select(selector.vendor.product.addVariations, product.variable.variableRegularPrice)
        await base.wait(1)
        await base.click(selector.vendor.product.go)
        await base.waitForSelector(selector.vendor.product.variationPrice)
        await base.type(selector.vendor.product.variationPrice, product.regularPrice())
        await base.click(selector.vendor.product.okVariationPrice)

        await base.waitForSelector(selector.vendor.product.saveProduct)
        await base.clickAndWait(selector.vendor.product.saveProduct)
        await base.wait(1)

        let productCreateSuccessMessage = await base.getElementText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch(product.saveSuccessMessage)
    },

    // Vendor Add Simple Subscription Product
    async addSimpleSubscription(product) {
        await this.addSimpleProduct(product)

        //edit product
        await base.select(selector.vendor.product.productType, product.productType)
        await base.type(selector.vendor.product.subscriptionPrice, product.subscriptionPrice())
        await base.select(selector.vendor.product.subscriptionPeriodInterval, product.subscriptionPeriodInterval)
        await base.select(selector.vendor.product.subscriptionPeriod, product.subscriptionPeriod)
        await base.select(selector.vendor.product.expireAfter, product.expireAfter)
        await base.type(selector.vendor.product.subscriptionTrialLength, product.subscriptionTrialLength)
        await base.select(selector.vendor.product.subscriptionTrialPeriod, product.subscriptionTrialPeriod)

        await base.clickAndWait(selector.vendor.product.saveProduct)

        let productCreateSuccessMessage = await base.getElementText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch(product.saveSuccessMessage)
    },

    // Vendor Add Variable Subscription Product
    async addVariableSubscription(product) {
        await this.addSimpleProduct(product)

        // Edit Product
        await base.select(selector.vendor.product.productType, product.productType)
        await base.wait(1)

        // Add Variation
        //TODO: create attribute if not exists
        await base.select(selector.vendor.product.customProductAttribute, `pa_${product.attribute}`)
        await base.click(selector.vendor.product.addAttribute)
        await base.waitForSelector(selector.vendor.product.selectAll)
        await base.click(selector.vendor.product.selectAll)
        await base.click(selector.vendor.product.usedForVariations)
        await base.waitForSelector(selector.vendor.product.saveAttributes)
        await base.click(selector.vendor.product.saveAttributes)

        await base.waitForSelector(selector.vendor.product.addVariations)
        await base.select(selector.vendor.product.addVariations, product.variableSubscription.linkAllVariation)
        await base.wait(1)
        await base.click(selector.vendor.product.go)
        await base.waitForSelector(selector.vendor.product.confirmGo)
        await base.click(selector.vendor.product.confirmGo)
        await base.wait(1)
        await base.click(selector.vendor.product.okSuccessAlertGo)
        await base.wait(1)

        await base.select(selector.vendor.product.addVariations, product.variableSubscription.variableRegularPrice)
        await base.wait(1)
        await base.click(selector.vendor.product.go)
        await base.waitForSelector(selector.vendor.product.variationPrice)
        await base.type(selector.vendor.product.variationPrice, product.regularPrice())
        await base.click(selector.vendor.product.okVariationPrice)

        await base.waitForSelector(selector.vendor.product.saveProduct)
        await base.clickAndWait(selector.vendor.product.saveProduct)
        await base.wait(1)

        let productCreateSuccessMessage = await base.getElementText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch(product.saveSuccessMessage)
    },

    // Vendor Add External Product
    async addExternalProduct(product, productName, productPrice, category) {
        await this.addSimpleProduct(product)

        // Edit Product
        await base.select(selector.vendor.product.productType, product.productType)
        await base.type(selector.vendor.product.productUrl, await base.getBaseUrl() + product.external.productUrl)
        await base.type(selector.vendor.product.buttonText, product.buttonText)
        await base.clearAndType(selector.vendor.product.price, product.regularPrice())

        await base.clickAndWait(selector.vendor.product.saveProduct)

        let productCreateSuccessMessage = await base.getElementText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch(product.saveSuccessMessage)
    },

    // Vendor Add Auction Product
    async addAuctionProduct(product) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.auction)

        //add new auction product
        await base.clickAndWait(selector.vendor.vAuction.addNewActionProduct)
        await base.type(selector.vendor.vAuction.productName, product.productName())
        // await base.click(selector.vendor.product.productCategory)
        // await base.type(selector.vendor.product.productCategoryInput, product.category)
        // await base.press(data.key.enter)

        // await base.select(selector.vendor.vAuction.itemCondition, product.itemCondition)
        // await base.select(selector.vendor.vAuction.actionType, product.auctionType)
        await base.type(selector.vendor.vAuction.startPrice, product.regularPrice())
        await base.type(selector.vendor.vAuction.bidIncrement, product.bidIncrement)
        await base.type(selector.vendor.vAuction.reservedPrice, product.reservedPrice())
        await base.type(selector.vendor.vAuction.buyItNowPrice, product.buyItNowPrice())
        await base.removeElementAttribute(selector.vendor.vAuction.auctionStartDate, 'readonly')
        await base.removeElementAttribute(selector.vendor.vAuction.auctionEndDate, 'readonly')
        await base.type(selector.vendor.vAuction.auctionStartDate, product.startDate)
        await base.type(selector.vendor.vAuction.auctionEndDate, product.endDate)

        await base.clickAndWait(selector.vendor.vAuction.addAuctionProduct)

        let productCreateSuccessMessage = await base.getElementText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch(product.saveSuccessMessage)

    },

    // Vendor Add Booking Product
    async addBookingProduct(product,) {
        await this.goToVendorDashboard()
        let productName = product.productName()
        await base.clickAndWait(selector.vendor.vDashboard.booking)
        await base.clickAndWait(selector.vendor.vBooking.addNewBookingProduct)

        // Add New Booking Product
        await base.type(selector.vendor.vBooking.productName, productName)
        // await base.click(selector.vendor.vBooking.productCategory)
        // await base.type(selector.vendor.vBooking.productCategoryInput, product.category)
        // await base.press(data.key.enter)

        // General Booking Options
        await base.select(selector.vendor.vBooking.bookingDurationType, product.bookingDurationType)
        await base.clearAndType(selector.vendor.vBooking.bookingDurationMax, product.bookingDurationMax)
        await base.select(selector.vendor.vBooking.bookingDurationUnit, product.bookingDurationUnit)

        await base.select(selector.vendor.vBooking.calenderDisplayMode, product.calenderDisplayMode)
        await base.check(selector.vendor.vBooking.enableCalendarRangePicker)

        // Availability
        await base.clearAndType(selector.vendor.vBooking.maxBookingsPerBlock, product.maxBookingsPerBlock)
        await base.clearAndType(selector.vendor.vBooking.minimumBookingWindowIntoTheFutureDate, product.minimumBookingWindowIntoTheFutureDate)
        await base.select(selector.vendor.vBooking.minimumBookingWindowIntoTheFutureDateUnit, product.minimumBookingWindowIntoTheFutureDateUnit)
        await base.clearAndType(selector.vendor.vBooking.maximumBookingWindowIntoTheFutureDate, product.maximumBookingWindowIntoTheFutureDate)
        await base.select(selector.vendor.vBooking.maximumBookingWindowIntoTheFutureDateUnit, product.maximumBookingWindowIntoTheFutureDateUnit)

        // Costs
        await base.type(selector.vendor.vBooking.baseCost, product.baseCost)
        await base.type(selector.vendor.vBooking.blockCost, product.blockCost)

        await base.clickAndWait(selector.vendor.vBooking.saveProduct)

        let createdProduct = await base.getElementValue(selector.vendor.vBooking.productName)
        expect(createdProduct.toLowerCase()).toBe(productName.toLowerCase())

    },

    // Vendor Search Similar Product
    async searchSimilarProduct(productName) {
        await base.click(selector.vendor.vSearchSimilarProduct.search)
        await base.type(selector.vendor.vSearchSimilarProduct.search, productName)
        await base.clickAndWait(selector.vendor.vSearchSimilarProduct.search)
        await base.click(selector.vendor.vSearchSimilarProduct.search)
    },


    // Coupons 

    // Vendor Add Coupon
    async addCoupon(coupon) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.coupons)
        await base.clickAndWait(selector.vendor.vCoupon.addNewCoupon)
        await base.type(selector.vendor.vCoupon.couponTitle, coupon.title)
        await base.type(selector.vendor.vCoupon.amount, coupon.amount)
        await base.click(selector.vendor.vCoupon.selectAll)
        await base.click(selector.vendor.vCoupon.applyForNewProducts)
        await base.click(selector.vendor.vCoupon.showOnStore)
        await base.clickAndWait(selector.vendor.vCoupon.createCoupon)
        let couponError = await base.isVisible(selector.vendor.vCoupon.couponError)
        if (couponError) {
            let errorMessage = await base.getElementText(selector.vendor.vCoupon.couponError)
            if (errorMessage.includes(coupon.existingCouponErrorMessage)) {
                return
            }
        }

        let createdCoupon = await base.getElementText(selector.vendor.vCoupon.createdCoupon)
        expect(createdCoupon.toLowerCase()).toBe(coupon.title.toLowerCase()) //TODO:check working or not
    },



    // Withdraw 


    // Vendor Request Withdraw 
    async requestWithdraw(withdraw) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.withdraw)

        // try {
        //     let canRequestIsVisible = await base.isVisible(selector.vendor.vWithdraw.cancelRequest)
        //     expect(canRequestIsVisible).toBe(false)
        // } catch (err) {
        //     throw new Error("Vendor already requested for withdraw")
        // }

        let canRequestIsVisible = await base.isVisible(selector.vendor.vWithdraw.cancelRequest)
        if (canRequestIsVisible) {
            await base.clickAndWait(selector.vendor.vWithdraw.cancelRequest)
            await base.clickAndWait(selector.vendor.vWithdraw.withdrawDashboard)
        }

        let minimumWithdrawAmount = await base.getElementText(selector.vendor.vWithdraw.minimumWithdrawAmount)
        minimumWithdrawAmount = helpers.price(minimumWithdrawAmount)
        // console.log(minimumWithdrawAmount)
        let balance = await base.getElementText(selector.vendor.vWithdraw.balance)
        balance = helpers.price(balance)
        // console.log(balance)

        if (balance > minimumWithdrawAmount) {
            await base.click(selector.vendor.vWithdraw.requestWithdraw)
            await base.clearAndType(selector.vendor.vWithdraw.withdrawAmount, String(minimumWithdrawAmount))
            await base.wait(2)
            await base.select(selector.vendor.vWithdraw.withdrawMethod, withdraw.withdrawMethod.default)
            await base.clickAndWait(selector.vendor.vWithdraw.submitRequest)

            let canRequestIsVisible = await base.isVisible(selector.vendor.vWithdraw.cancelRequest)
            expect(canRequestIsVisible).toBe(true)
        } else {
            // throw new Error("Vendor balance is less than minimum withdraw amount")
            console.log("Vendor balance is less than minimum withdraw amount")
        }
    },

    // Vendor Cancel Withdraw Request
    async cancelRequestWithdraw() {
        await base.clickAndWait(selector.vendor.vDashboard.withdraw)
        await base.clickAndWait(selector.vendor.vWithdraw.cancelRequest)
        await base.clickAndWait(selector.vendor.vWithdraw.withdrawDashboard)

        let canRequestIsVisible = await base.isVisible(selector.vendor.vWithdraw.cancelRequest)
        expect(canRequestIsVisible).toBe(false)

    },

    // Vendor Add Auto Withdraw Disbursement Schedule
    async addAutoWithdrawDisbursementSchedule(withdraw) {

        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.withdraw)
        await base.click(selector.vendor.vWithdraw.editSchedule)
        await base.select(selector.vendor.vWithdraw.preferredPaymentMethod, withdraw.preferredPaymentMethod)
        await base.click(selector.vendor.vWithdraw[withdraw.preferredSchedule])
        await base.select(selector.vendor.vWithdraw.onlyWhenBalanceIs, withdraw.minimumWithdrawAmount)
        await base.select(selector.vendor.vWithdraw.maintainAReserveBalance, withdraw.reservedBalance)
        await base.clickAndWait(selector.vendor.vWithdraw.changeSchedule)
    },

    // Vendor Add Default Withdraw Payment Methods
    async addDefaultWithdrawPaymentMethods(preferredSchedule) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.withdraw)
        let defaultMethod = await base.isVisible(selector.vendor.vWithdraw.customMethodMakeDefault(preferredSchedule))
        console.log(defaultMethod)
        if (defaultMethod) {
            await base.clickAndWait(selector.vendor.vWithdraw.customMethodMakeDefault(preferredSchedule))

            let methodStatus = await base.getElementText(selector.vendor.vWithdraw.customMethodMakeDefault(preferredSchedule))
            expect(methodStatus).toMatch('Default')
        } else {
            throw new Error("Withdraw payment method isn\'t set up")
        }

    },

    // Vendor Add Vendor Details
    async setVendorDetails(vendorInfo) {
        await base.clearAndType(selector.vendor.vendorDetails.firstName, vendorInfo.firstName())
        await base.clearAndType(selector.vendor.vendorDetails.lastName, vendorInfo.lastName())
        await base.clearAndType(selector.vendor.vendorDetails.email, vendorInfo.email())
        await base.type(selector.vendor.vendorDetails.currentPassword, vendorInfo.password)
        await base.type(selector.vendor.vendorDetails.NewPassword, vendorInfo.password1)
        await base.type(selector.vendor.vendorDetails.confirmNewPassword, vendorInfo.password)
        await base.click(selector.vendor.vendorDetails.saveChanges)

    },

    // Vendor Settings 

    // Vendor Set Store Settings
    async setStoreSettings(vendorInfo) {
        await this.goToVendorDashboard()
        await base.clickAndWait(selector.vendor.vDashboard.settings)

        await this.basicInfoSettings(vendorInfo)
        await this.mapSettings(vendorInfo.mapLocation)
        await this.termsAndConditionsSettings(vendorInfo.termsAndConditions)
        await this.openingClosingTimeSettings(vendorInfo.openingClosingTime)
        await this.vacationSettings(vendorInfo.vacation)
        await this.discountSettings(vendorInfo.discount)
        await this.biographySettings(vendorInfo.biography)
        await this.storeSupportSettings(vendorInfo.supportButtonText)
        await this.minMaxSettings(vendorInfo.minMax)
        // Update Settings
        await base.click(selector.vendor.vStoreSettings.updateSettings)

        let successMessage = await base.getElementText(selector.vendor.vSocialProfileSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(vendorInfo.storeSettingsSaveSuccessMessage)
    },

    // Vendor Set Store Address 
    async setStoreAddress(vendorInfo) {
        await this.goToVendorDashboard()
        await base.clickAndWait(selector.vendor.vDashboard.settings)

        await base.clearAndType(selector.vendor.vStoreSettings.street, vendorInfo.street1)
        await base.clearAndType(selector.vendor.vStoreSettings.street2, vendorInfo.street2)
        await base.clearAndType(selector.vendor.vStoreSettings.city, vendorInfo.city)
        await base.clearAndType(selector.vendor.vStoreSettings.postOrZipCode, vendorInfo.zipCode)
        await base.select(selector.vendor.vStoreSettings.country, vendorInfo.countrySelectValue)
        await base.select(selector.vendor.vStoreSettings.state, vendorInfo.stateSelectValue)

        // Update Settings
        await base.click(selector.vendor.vStoreSettings.updateSettings)

        let successMessage = await base.getElementText(selector.vendor.vSocialProfileSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(vendorInfo.storeSettingsSaveSuccessMessage)
    },

    // Vendor Set Banner and Profile Picture Settings
    async bannerAndProfilePictureSettings(banner, profilePicture) {
        // Upload Banner and Profile Picture  
        await base.removePreviousUploadedImage(selector.vendor.vStoreSettings.bannerImage, selector.vendor.vStoreSettings.removeBannerImage)
        await base.click(selector.vendor.vStoreSettings.banner)
        await base.wpUploadFile(banner)
        await base.removePreviousUploadedImage(selector.vendor.vStoreSettings.profilePictureImage, selector.vendor.vStoreSettings.removeProfilePictureImage)
        await base.click(selector.vendor.vStoreSettings.profilePicture)
        await base.wpUploadFile(profilePicture)
    },

    // Vendor Set Basic Info Settings
    async basicInfoSettings(vendorInfo) {
        // Store Basic Info
        await base.clearAndType(selector.vendor.vStoreSettings.storeName, vendorInfo.storeName)
        await base.clearAndType(selector.vendor.vStoreSettings.storeProductsPerPage, vendorInfo.storeProductsPerPage)
        await base.clearAndType(selector.vendor.vStoreSettings.phoneNo, vendorInfo.phone)
        // Address
        await base.clearAndType(selector.vendor.vStoreSettings.street, vendorInfo.street1)
        await base.clearAndType(selector.vendor.vStoreSettings.street2, vendorInfo.street2)
        await base.clearAndType(selector.vendor.vStoreSettings.city, vendorInfo.city)
        await base.clearAndType(selector.vendor.vStoreSettings.postOrZipCode, vendorInfo.zipCode)
        await base.select(selector.vendor.vStoreSettings.country, vendorInfo.countrySelectValue)
        await base.select(selector.vendor.vStoreSettings.state, vendorInfo.stateSelectValue)
        // Company Info
        await base.clearAndType(selector.vendor.vStoreSettings.companyName, vendorInfo.companyName)
        await base.clearAndType(selector.vendor.vStoreSettings.companyIdOrEuidNumber, vendorInfo.companyId)
        await base.clearAndType(selector.vendor.vStoreSettings.vatOrTaxNumber, vendorInfo.vatNumber)
        await base.clearAndType(selector.vendor.vStoreSettings.nameOfBank, vendorInfo.bankName)
        await base.clearAndType(selector.vendor.vStoreSettings.bankIban, vendorInfo.bankIban)
        // Email
        await base.check(selector.vendor.vStoreSettings.email)
        // Show More Products
        await base.check(selector.vendor.vStoreSettings.moreProducts)
    },

    // Vendor Set Map Settings
    async mapSettings(mapLocation) {
        // Map
        await base.clearAndType(selector.vendor.vStoreSettings.map, mapLocation)
        await base.wait(1)
        await base.press(data.key.arrowDown)
        await base.press(data.key.enter)
    },

    // Vendor Set Terms and Conditions Settings
    async termsAndConditionsSettings(termsAndConditions) {
        // Terms and Conditions
        await base.check(selector.vendor.vStoreSettings.termsAndConditions)
        let termsAndConditionsIframe = await base.switchToIframe(selector.vendor.vStoreSettings.termsAndConditionsIframe)
        await base.iframeClearAndType(termsAndConditionsIframe, selector.vendor.vStoreSettings.termsAndConditionsHtmlBody, termsAndConditions)
    },

    // Vendor Set Opening Closing Time Settings
    async openingClosingTimeSettings(openingClosingTime) {
        // Store Opening Closing Time
        await base.check(selector.vendor.vStoreSettings.storeOpeningClosingTime)
        await base.wait(1)
        for (let day of openingClosingTime.days) {
            await base.click(selector.vendor.vStoreSettings.chooseBusinessDays)
            await base.wait(2)
            await base.type(selector.vendor.vStoreSettings.chooseBusinessDays, day)
            await base.press(data.key.enter)
            await base.click(selector.vendor.vStoreSettings.businessDaysTab(day))
            await base.wait(1)
            // Individual Day Settings
            await base.waitForSelector(selector.vendor.vStoreSettings.openingTime(day))
            await base.clearAndType(selector.vendor.vStoreSettings.openingTime(day), openingClosingTime.openingTime)
            await base.clearAndType(selector.vendor.vStoreSettings.closingTime(day), openingClosingTime.closingTime)
        }
    },

    // Vendor Set Vacation Settings
    async vacationSettings(vacation) {
        // Vacation
        let noVacationIsSetIsVisible = await base.isVisible(selector.vendor.vStoreSettings.noVacationIsSet)
        if (!noVacationIsSetIsVisible) {
            await base.hover(selector.vendor.vStoreSettings.vacationRow)
            await base.click(selector.vendor.vStoreSettings.deleteSavedVacationSchedule)
            await base.click(selector.vendor.vStoreSettings.confirmDeleteSavedVacationSchedule)
        }
        // let vacationDayFrom = helpers.addDays(helpers.currentDate, helpers.getRandomArbitraryInteger(31, 365))
        // let vacationDayTo = helpers.addDays(vacationDayFrom, 31)
        await base.check(selector.vendor.vStoreSettings.goToVacation)
        await base.select(selector.vendor.vStoreSettings.closingStyle, vacation.closingStyle)
        await base.type(selector.vendor.vStoreSettings.vacationDateRangeFrom, vacation.vacationDayFrom)
        await base.type(selector.vendor.vStoreSettings.vacationDateRangeTo, vacation.vacationDayTo)
        await base.type(selector.vendor.vStoreSettings.setVacationMessage, vacation.vacationMessage)
        await base.click(selector.vendor.vStoreSettings.saveVacationEdit)
    },

    // Vendor Set Discount Settings
    async discountSettings(discount) {
        // Discount
        await base.check(selector.vendor.vStoreSettings.enableStoreWideDiscount)
        await base.clearAndType(selector.vendor.vStoreSettings.minimumOrderAmount, discount.minimumOrderAmount)
        await base.clearAndType(selector.vendor.vStoreSettings.percentage, discount.minimumOrderAmountPercentage)
    },

    // Vendor Set Biography Settings
    async biographySettings(biography) {
        // Biography
        let biographyIframe = await base.switchToIframe(selector.vendor.vStoreSettings.biographyIframe)
        await base.iframeClearAndType(biographyIframe, selector.vendor.vStoreSettings.biographyHtmlBody, biography)
    },

    // Vendor Set Store Support Settings
    async storeSupportSettings(supportButtonText) {
        // Store Support
        await base.check(selector.vendor.vStoreSettings.showSupportButtonInStore)
        await base.check(selector.vendor.vStoreSettings.showSupportButtonInSingleProduct)
        await base.clearAndType(selector.vendor.vStoreSettings.supportButtonText, supportButtonText)
    },

    // Vendor Set Minmax Settings
    async minMaxSettings(minMax) {
        // Min-Max
        await base.check(selector.vendor.vStoreSettings.enableMinMaxQuantities)
        await base.clearAndType(selector.vendor.vStoreSettings.minimumProductQuantityToPlaceAnOrder, minMax.minimumProductQuantity)
        await base.clearAndType(selector.vendor.vStoreSettings.maximumProductQuantityToPlaceAnOrder, minMax.maximumProductQuantity)
        await base.check(selector.vendor.vStoreSettings.enableMinMaxAmount)
        await base.clearAndType(selector.vendor.vStoreSettings.minimumAmountToPlaceAnOrder, minMax.minimumAmount)
        await base.clearAndType(selector.vendor.vStoreSettings.maximumAmountToPlaceAnOrder, minMax.maximumAmount)
        await base.click(selector.vendor.vStoreSettings.clear)
        await base.click(selector.vendor.vStoreSettings.selectAll)
        await base.selectOptionByText(selector.vendor.vStoreSettings.selectCategory, minMax.category)
    },


    // Vendor Add Addons
    async addAddon(addon) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.addons)

        // Add Addon
        await base.clickAndWait(selector.vendor.vAddonSettings.createNewAddon)
        await base.clearAndType(selector.vendor.vAddonSettings.name, addon.name)
        await base.clearAndType(selector.vendor.vAddonSettings.priority, addon.priority)
        await base.click(selector.vendor.vAddonSettings.productCategories,)
        await base.type(selector.vendor.vAddonSettings.productCategories, addon.category)
        await base.press(data.key.enter)

        // Add-On Fields
        await base.click(selector.vendor.vAddonSettings.addField)
        await base.select(selector.vendor.vAddonSettings.type, addon.type)
        await base.select(selector.vendor.vAddonSettings.displayAs, addon.displayAs)
        await base.clearAndType(selector.vendor.vAddonSettings.titleRequired, addon.titleRequired)
        await base.select(selector.vendor.vAddonSettings.formatTitle, addon.formatTitle)
        await base.click(selector.vendor.vAddonSettings.enableDescription)
        await base.clearAndType(selector.vendor.vAddonSettings.addDescription, addon.addDescription)
        await base.click(selector.vendor.vAddonSettings.requiredField)
        await base.clearAndType(selector.vendor.vAddonSettings.enterAnOption, addon.enterAnOption)
        await base.select(selector.vendor.vAddonSettings.optionPriceType, addon.optionPriceType)
        await base.clearAndType(selector.vendor.vAddonSettings.optionPriceInput, addon.optionPriceInput)
        await base.clickAndWait(selector.vendor.vAddonSettings.publish)

        let successMessage = await base.getElementText(selector.vendor.vAddonSettings.addonUpdateSuccessMessage)
        expect(successMessage).toMatch(addon.saveSuccessMessage)
        return addon.name
    },
    // Vendor Edit Addons
    async editAddon(addon, addonName) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.addons)

        // Add Addon
        await base.clickAndWait(selector.vendor.vAddonSettings.editAddon(addonName))
        // await base.clickAndWait(selector.vendor.vAddonSettings.firstAddon)
        await base.clearAndType(selector.vendor.vAddonSettings.name, addon.name) //TODO: check if new name is generated or not
        await base.clearAndType(selector.vendor.vAddonSettings.priority, addon.priority)
        await base.click(selector.vendor.vAddonSettings.productCategories,)
        await base.type(selector.vendor.vAddonSettings.productCategories, addon.category)
        await base.press(data.key.enter)

        // Add-On Fields
        await base.click(selector.vendor.vAddonSettings.addField)
        await base.select(selector.vendor.vAddonSettings.type, addon.type)
        await base.select(selector.vendor.vAddonSettings.displayAs, addon.displayAs)
        await base.clearAndType(selector.vendor.vAddonSettings.titleRequired, addon.titleRequired)
        await base.select(selector.vendor.vAddonSettings.formatTitle, addon.formatTitle)
        await base.click(selector.vendor.vAddonSettings.enableDescription)
        await base.clearAndType(selector.vendor.vAddonSettings.addDescription, addon.addDescription)
        await base.click(selector.vendor.vAddonSettings.requiredField)
        await base.clearAndType(selector.vendor.vAddonSettings.enterAnOption, addon.enterAnOption)
        await base.select(selector.vendor.vAddonSettings.optionPriceType, addon.optionPriceType)
        await base.clearAndType(selector.vendor.vAddonSettings.optionPriceInput, addon.optionPriceInput)
        await base.clickAndWait(selector.vendor.vAddonSettings.update)

        let successMessage = await base.getElementText(selector.vendor.vAddonSettings.addonUpdateSuccessMessage)
        expect(successMessage).toMatch(addon.saveSuccessMessage)
    },

    // Paypal Payment Settings
    async setPaypal(paymentMethod) {
        // Paypal
        await base.clearAndType(selector.vendor.vPaymentSettings.paypal, paymentMethod.email())
        // Update Settings
        await base.clickAndWait(selector.vendor.vPaymentSettings.updateSettings)

        let successMessage = await base.getElementText(selector.vendor.vPaymentSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(paymentMethod.saveSuccessMessage)
    },

    // Bank Transfer Payment Settings
    async setBankTransfer(paymentMethod) {
        // Bank Transfer
        await base.clearAndType(selector.vendor.vPaymentSettings.bankAccountName, paymentMethod.bankAccountName)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankAccountNumber, paymentMethod.bankAccountNumber)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankName, paymentMethod.bankName)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankAddress, paymentMethod.bankAddress)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankRoutingNumber, paymentMethod.bankRoutingNumber)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankIban, paymentMethod.bankIban)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankSwiftCode, paymentMethod.bankSwiftCode)
        // Update Settings
        await base.clickAndWait(selector.vendor.vPaymentSettings.updateSettings)

        let successMessage = await base.getElementText(selector.vendor.vPaymentSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(paymentMethod.saveSuccessMessage)
    },

    // // Stripe Payment Settings
    // async setStripe(email) {
    //     // Stripe
    //     // await base.clickAndWait(selector.vendor.vPaymentSettings.ConnectWithStripe)
    // },

    // // Paypal Marketplace Payment Settings
    // async setPaypalMarketPlace(email) {
    //     // Paypal Marketplace
    //     // await base.clearAndType(selector.vendor.vPaymentSettings.paypalMarketplace, paypalMarketplace)
    //     // await base.clickAndWait(selector.vendor.vPaymentSettings.paypalMarketplaceSignUp)
    // },

    // // Razorpay Payment Settings
    // async setRazorpay(email) {
    //     // Razorpay
    //     //     await base.clickAndWait(selector.vendor.vPaymentSettings.rzSignup)
    //     //  // existing account info
    //     //     await base.click(selector.vendor.vPaymentSettings.rzIHaveAlreadyAnAccount)
    //     //     await base.clearAndType(selector.vendor.vPaymentSettings.rzAccountId, rzAccountId)
    //     //     await base.click(selector.vendor.vPaymentSettings.rzConnectExistingAccount)
    //     //  //new account info
    //     //     await base.clearAndType(selector.vendor.vPaymentSettings.rzAccountName, rzAccountName)
    //     //     await base.clearAndType(selector.vendor.vPaymentSettings.rzAccountEmail, rzAccountEmail)
    //     //     await base.clearAndType(selector.vendor.vPaymentSettings.rzYourCompanyName, rzYourCompanyName)
    //     //     await base.clearAndType(selector.vendor.vPaymentSettings.rzYourCompanyType, rzYourCompanyType)
    //     //     await base.clearAndType(selector.vendor.vPaymentSettings.rzBankAccountName, rzBankAccountName)
    //     //     await base.clearAndType(selector.vendor.vPaymentSettings.rzBankAccountNumber, rzBankAccountNumber)
    //     //     await base.clearAndType(selector.vendor.vPaymentSettings.rzBankIfscCode, rzBankIfscCode)
    //     //     await base.clearAndType(selector.vendor.vPaymentSettings.rzBankAccountType, rzBankAccountType)
    //     //     await base.clickAndWait(selector.vendor.vPaymentSettings.rzConnectAccount)
    // },

    // Custom Payment Settings
    async setCustom(paymentMethod) {
        // Custom Payment Method
        await base.clearAndType(selector.vendor.vPaymentSettings.customPayment, paymentMethod.email())
        // Update Settings
        await base.clickAndWait(selector.vendor.vPaymentSettings.updateSettings)

        let successMessage = await base.getElementText(selector.vendor.vPaymentSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(paymentMethod.saveSuccessMessage)
    },

    // Skrill Payment Settings
    async setSkrill(paymentMethodemail) {
        // Skrill
        await base.clearAndType(selector.vendor.skrill.email, paymentMethod.email())
        // Update Settings
        await base.clickAndWait(selector.vendor.vPaymentSettings.updateSettings)

        let successMessage = await base.getElementText(selector.vendor.vPaymentSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(paymentMethod.saveSuccessMessage)
    },

    // Vendor Set Payment Settings
    async setPaymentSettings() {

        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.payment)

        await this.setPaypal()
        await this.setBankTransfer()
        await this.setStripe()
        await this.setPaypalMarketPlace()
        await this.setRazorpay()
        await this.setCustom()
        await this.setSkrill()

    },

    // Vendor Send Id Verification Request
    async sendIdVerificationRequest(verification) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.verification)
        await base.wait(2)

        // Id Verification
        let cancelRequestIsVisible = await base.isVisible(selector.vendor.vVerificationSettings.cancelIdVerificationRequest)
        if (cancelRequestIsVisible) {
            await base.click(selector.vendor.vVerificationSettings.cancelIdVerificationRequest)
            await base.wait(2)
        }
        await base.click(selector.vendor.vVerificationSettings.startIdVerification)
        await base.wait(1)
        let previousUploadedImageIsVisible = await base.isVisible(selector.vendor.vVerificationSettings.previousUploadedPhoto)
        if (previousUploadedImageIsVisible) {
            await base.hover(selector.vendor.vVerificationSettings.previousUploadedPhoto)
            await base.click(selector.vendor.vVerificationSettings.removePreviousUploadedPhoto)
            await base.wait(2)
        }
        await base.waitForSelector(selector.vendor.vVerificationSettings.uploadPhoto)
        await base.click(selector.vendor.vVerificationSettings.uploadPhoto)
        await base.wait(2)
        let uploadedMediaIsVisible = await base.isVisible(selector.vendor.vVerificationSettings.uploadedMedia)
        if (uploadedMediaIsVisible) {
            await base.click(selector.vendor.vVerificationSettings.uploadedMedia)
            await base.wait(1)
        } else {
            await base.uploadImage(selector.vendor.vVerificationSettings.selectFiles, verification.file)
        }
        await base.click(selector.vendor.vVerificationSettings.select)
        await base.click(selector.vendor.vVerificationSettings.submitId)
        await base.wait(2)

        let successMessage = await base.getElementText(selector.vendor.vVerificationSettings.idUpdateSuccessMessage)
        expect(successMessage).toMatch(verification.idRequestSubmitSuccessMessage)
    },

    // Vendor Send Address Verification Request
    async sendAddressVerificationRequest(verification) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.verification)
        await base.wait(2)

        // Company Verification
        let cancelRequestIsVisible = await base.isVisible(selector.vendor.vVerificationSettings.cancelAddressVerificationRequest)
        if (cancelRequestIsVisible) {
            await base.click(selector.vendor.vVerificationSettings.cancelAddressVerificationRequest)
            await base.wait(1)
        }
        await base.click(selector.vendor.vVerificationSettings.startAddressVerification)
        await base.wait(1)
        await base.clearAndType(selector.vendor.vVerificationSettings.street, verification.street1)
        await base.clearAndType(selector.vendor.vVerificationSettings.street2, verification.street2)
        await base.clearAndType(selector.vendor.vVerificationSettings.city, verification.city)
        await base.clearAndType(selector.vendor.vVerificationSettings.postOrZipCode, verification.zipCode)
        await base.select(selector.vendor.vVerificationSettings.country, verification.country)
        await base.select(selector.vendor.vVerificationSettings.state, verification.state)

        // let previousUploadedImageIsVisible = await base.isVisible(selector.vendor.vVerificationSettings.previousUploadedResidenceProof)
        // if (previousUploadedImageIsVisible) {
        //     await base.hover(selector.vendor.vVerificationSettings.previousUploadedResidenceProof)
        //     await base.click(selector.vendor.vVerificationSettings.removePreviousUploadedResidenceProof)
        //     await base.wait(4)
        // }

        await base.click(selector.vendor.vVerificationSettings.uploadResidenceProof)
        await base.wait(2)
        let uploadedMediaIsVisible = await base.isVisible(selector.vendor.vVerificationSettings.uploadedMedia)
        if (uploadedMediaIsVisible) {
            await base.click(selector.vendor.vVerificationSettings.uploadedMedia)
            await base.wait(1)
        } else {
            await base.uploadImage(selector.vendor.vVerificationSettings.selectFiles, verification.file)
        }

        await base.click(selector.vendor.vVerificationSettings.select)
        await base.click(selector.vendor.vVerificationSettings.submitAddress)
        await base.wait(2)


        let successMessage = await base.getElementText(selector.vendor.vVerificationSettings.addressUpdateSuccessMessage)
        expect(successMessage).toMatch(verification.addressRequestSubmitSuccessMessage)
    },

    // Vendor Send Company Verification Request
    async sendCompanyVerificationRequest(verification) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.verification)
        await base.wait(2)

        // Company Verification
        let cancelRequestIsVisible = await base.isVisible(selector.vendor.vVerificationSettings.cancelCompanyVerificationRequest)
        if (cancelRequestIsVisible) {
            await base.click(selector.vendor.vVerificationSettings.cancelCompanyVerificationRequest)
            await base.wait(1)
        }
        await base.click(selector.vendor.vVerificationSettings.startCompanyVerification)
        await base.wait(1)
        await base.click(selector.vendor.vVerificationSettings.uploadFiles)
        await base.wait(2)
        let uploadedMediaIsVisible = await base.isVisible(selector.vendor.vVerificationSettings.uploadedMedia)
        if (uploadedMediaIsVisible) {
            await base.click(selector.vendor.vVerificationSettings.uploadedMedia)
            await base.wait(1)
        } else {
            await base.uploadImage(selector.vendor.vVerificationSettings.selectFiles, verification.file)
        }
        await base.click(selector.vendor.vVerificationSettings.select)
        await base.click(selector.vendor.vVerificationSettings.submitCompanyInfo)
        await base.wait(2)

        let successMessage = await base.getElementText(selector.vendor.vVerificationSettings.companyInfoUpdateSuccessMessage)
        expect(successMessage).toMatch(verification.companyRequestSubmitSuccessMessage)
    },

    // Vendor Set Verification Settings
    async setVerificationSettings() {
        await this.sendIdVerificationRequest()
        await this.sendAddressVerificationRequest()
        await this.sendCompanyVerificationRequest()
    },

    // Vendor Set Delivery Settings
    async setDeliveryTimeSettings(deliveryTime) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.deliveryTime)

        // Delivery Support
        await base.check(selector.vendor.vDeliveryTimeSettings.homeDelivery)
        await base.check(selector.vendor.vDeliveryTimeSettings.storePickup)
        await base.clearAndType(selector.vendor.vDeliveryTimeSettings.deliveryBlockedBuffer, deliveryTime.deliveryBlockedBuffer)

        // let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
        // let days = ['sunday',] //TODO: not working for multiple days
        for (let day of deliveryTime.days) {
            // Checkbox
            await base.check(selector.vendor.vDeliveryTimeSettings.deliveryDayCheckbox(day))
            // Tab
            await base.click(selector.vendor.vDeliveryTimeSettings.deliveryDayTab(day))
            // Individual Day Settings
            await base.select(selector.vendor.vDeliveryTimeSettings.openingTime(day), deliveryTime.openingTime)
            await base.select(selector.vendor.vDeliveryTimeSettings.closingTime(day), deliveryTime.closingTime)

            await base.clearAndType(selector.vendor.vDeliveryTimeSettings.timeSlot(day), deliveryTime.timeSlot)
            await base.clearAndType(selector.vendor.vDeliveryTimeSettings.orderPerSlot(day), deliveryTime.orderPerSlot)
            // await base.clearAndType(selector.vendor.vDeliveryTimeSettings.timeSlot, '30')
            // await base.clearAndType(selector.vendor.vDeliveryTimeSettings.orderPerSlot, '10')
        }
        await base.clickAndWait(selector.vendor.vDeliveryTimeSettings.deliveryTimeUpdateSettings)

        let successMessage = await base.getElementText(selector.vendor.vDeliveryTimeSettings.deliveryTimeUpdateSettingsSuccessMessage)
        expect(successMessage).toMatch(deliveryTime.saveSuccessMessage)
    },

    // Vendor Shipping Settings 

    // Vendor Set All Shipping Settings
    async setALLShippingSettings() {
        await this.goToVendorDashboard()
        await this.setShippingSettings(data.vendor.shipping.shippingMethods.flatRate)
        await this.setShippingSettings(data.vendor.shipping.shippingMethods.freeShipping)
        await this.setShippingSettings(data.vendor.shipping.shippingMethods.localPickup)
        await this.setShippingSettings(data.vendor.shipping.shippingMethods.tableRateShipping)
        await this.setShippingSettings(data.vendor.shipping.shippingMethods.distanceRateShipping)
    },

    // Set Shipping Policies
    async setShippingPolicies(shippingPolicy) {
        await base.clickAndWait(selector.vendor.vShippingSettings.clickHereToAddShippingPolicies)
        await base.select(selector.vendor.vShippingSettings.processingTime, shippingPolicy.processingTime)//TODO:locator don't work
        await base.clearAndType(selector.vendor.vShippingSettings.shippingPolicy, shippingPolicy.shippingPolicy)//TODO:locator don't work
        await base.type(selector.vendor.vShippingSettings.refundPolicy, shippingPolicy.refundPolicy)//TODO:locator don't work
        await base.clickAndWait(selector.vendor.vShippingSettings.shippingPoliciesSaveSettings)

        let successMessage = await base.getElementText(selector.vendor.vShippingSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(shippingPolicy.saveSuccessMessage)
    },

    // Vendor Set Shipping Settings
    async setShippingSettings(shipping) {
        await this.goToVendorDashboard()

        //TODO: admin need to enable shipping settings switch to admin & enable
        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.shipping)

        // await this.setShippingPolicies('3', 'shipping policy', 'refund policy') //TODO:locator don't work

        // Edit Shipping Zone
        await base.hover(selector.vendor.vShippingSettings.shippingZoneCell(shipping.shippingZone))
        await base.click(selector.vendor.vShippingSettings.editShippingZone(shipping.shippingZone))
        await base.wait(3)

        let methodIsVisible = await base.isVisible(selector.vendor.vShippingSettings.shippingMethodCell(shipping.shippingMethod))
        if (!methodIsVisible) {
            await base.click(selector.vendor.vShippingSettings.addShippingMethod)
            await base.wait(2)
            await base.select(selector.vendor.vShippingSettings.shippingMethod, shipping.selectShippingMethod)
            await base.click(selector.vendor.vShippingSettings.shippingMethodPopupAddShippingMethod)
            await base.wait(2)
        }

        // Edit Shipping Method
        await base.hover(selector.vendor.vShippingSettings.shippingMethodCell(shipping.shippingMethod))
        await base.click(selector.vendor.vShippingSettings.editShippingMethod(shipping.shippingMethod))
        await base.wait(2)

        switch (shipping.selectShippingMethod) {
            case 'flat_rate':
                // Flat Rate
                await base.clearAndType(selector.vendor.vShippingSettings.flatRateMethodTitle, shipping.shippingMethod)
                await base.clearAndType(selector.vendor.vShippingSettings.flatRateCost, shipping.shippingCost)
                await base.select(selector.vendor.vShippingSettings.flatRateTaxStatus, shipping.taxStatus)
                await base.clearAndType(selector.vendor.vShippingSettings.flatRateDescription, shipping.description)
                await base.select(selector.vendor.vShippingSettings.flatRateCalculationType, shipping.calculationType)
                break

            case 'free_shipping':
                // Free Shipping
                await base.clearAndType(selector.vendor.vShippingSettings.freeShippingTitle, shipping.shippingMethod)
                await base.clearAndType(selector.vendor.vShippingSettings.freeShippingMinimumOrderAmount, shipping.freeShippingMinimumOrderAmount)
                break

            case 'local_pickup':
                // Local Pickup
                await base.clearAndType(selector.vendor.vShippingSettings.localPickupTitle, shipping.shippingMethod)
                await base.clearAndType(selector.vendor.vShippingSettings.localPickupCost, shipping.shippingCost)
                await base.select(selector.vendor.vShippingSettings.localPickupTaxStatus, shipping.taxStatus)
                await base.clearAndType(selector.vendor.vShippingSettings.flatRateDescription, shipping.description)
                break

            case 'dokan_table_rate_shipping':
                // Dokan Table Rate Shipping
                await base.clearAndType(selector.vendor.vShippingSettings.tableRateShippingMethodTitle, shipping.shippingMethod)
                await base.select(selector.vendor.vShippingSettings.tableRateShippingTaxStatus, shipping.taxStatus)
                await base.select(selector.vendor.vShippingSettings.tableRateShippingTaxIncludedInShippingCosts, shipping.taxIncludedInShippingCosts)
                await base.clearAndType(selector.vendor.vShippingSettings.tableRateShippingHandlingFee, shipping.handlingFee)
                await base.clearAndType(selector.vendor.vShippingSettings.tableRateShippingMaximumShippingCost, shipping.maximumShippingCost)
                // Rates
                // await base.select(selector.vendor.vShippingSettings.tableRateShippingCalculationType,  shipping.calculationType)
                await base.clearAndType(selector.vendor.vShippingSettings.tableRateShippingHandlingFeePerOrder, shipping.handlingFeePerOrder)
                await base.clearAndType(selector.vendor.vShippingSettings.tableRateShippingMinimumCostPerOrder, shipping.minimumCostPerOrder)
                await base.clearAndType(selector.vendor.vShippingSettings.tableRateShippingMaximumCostPerOrder, shipping.maximumCostPerOrder)

                await base.click(selector.vendor.vShippingSettings.tableRateShippingUpdateSettings)
                let tableRateSuccessMessage = await base.getElementText(selector.vendor.vShippingSettings.tableRateShippingUpdateSettingsSuccessMessage)
                expect(tableRateSuccessMessage).toMatch(shipping.saveSuccessMessage)
                return

            case 'dokan_distance_rate_shipping':
                // Dokan Distance Rate Shipping
                await base.clearAndType(selector.vendor.vShippingSettings.distanceRateShippingMethodTitle, shipping.shippingMethod)
                await base.select(selector.vendor.vShippingSettings.distanceRateShippingTaxStatus, shipping.taxStatus)
                await base.select(selector.vendor.vShippingSettings.distanceRateShippingTransportationMode, shipping.transportationMode)
                await base.select(selector.vendor.vShippingSettings.distanceRateShippingAvoid, shipping.avoid)
                await base.select(selector.vendor.vShippingSettings.distanceRateShippingDistanceUnit, shipping.distanceUnit)
                await base.check(selector.vendor.vShippingSettings.distanceRateShippingShowDistance)
                await base.check(selector.vendor.vShippingSettings.distanceRateShippingShowDuration)
                // Shipping Address
                await base.clearAndType(selector.vendor.vShippingSettings.distanceRateShippingAddress1, shipping.street1)
                await base.clearAndType(selector.vendor.vShippingSettings.distanceRateShippingAddress2, shipping.street2)
                await base.clearAndType(selector.vendor.vShippingSettings.distanceRateShippingCity, shipping.city)
                await base.clearAndType(selector.vendor.vShippingSettings.distanceRateShippingZipOrPostalCode, shipping.zipCode)
                await base.clearAndType(selector.vendor.vShippingSettings.distanceRateShippingStateOrProvince, shipping.state)
                await base.select(selector.vendor.vShippingSettings.distanceRateShippingCountry, shipping.country)

                await base.click(selector.vendor.vShippingSettings.distanceRateShippingUpdateSettings)
                let distanceRateSuccessMessage = await base.getElementText(selector.vendor.vShippingSettings.distanceRateShippingUpdateSettingsSuccessMessage)
                expect(distanceRateSuccessMessage).toMatch(shipping.saveSuccessMessage)
                return

            default:
                break
        }

        await base.click(selector.vendor.vShippingSettings.shippingSettingsSaveSettings)
        await base.wait(1)
        await base.click(selector.vendor.vShippingSettings.saveChanges)

        let successMessage = await base.getElementText(selector.vendor.vShippingSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(shipping.saveSuccessMessage)
    },

    // Vendor Set Social Profile Settings
    async setSocialProfile(urls) {
        await this.goToVendorDashboard()

        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.socialProfile)

        await base.clearAndType(selector.vendor.vSocialProfileSettings.facebook, urls.facebook)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.twitter, urls.twitter)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.pinterest, urls.pinterest)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.linkedin, urls.linkedin)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.youtube, urls.youtube)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.instagram, urls.instagram)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.flicker, urls.flickr)
        // await base.click(selector.vendor.vSocialProfileSettings.updateSettings) //TODO: save settings button click don't work
        await base.press(data.key.enter)

        let successMessage = await base.getElementText(selector.vendor.vSocialProfileSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(data.urls.saveSuccessMessage)
    },

    // Vendor Set Rma Settings
    async setRmaSettings(rma) {
        await this.goToVendorDashboard()

        //TODO: admin need to enable rma settings switch to admin & enable
        await base.clickAndWait(selector.vendor.vDashboard.settings)
        await base.clickAndWait(selector.vendor.vSettings.rma)

        await base.clearAndType(selector.vendor.vRmaSettings.label, rma.label)
        await base.select(selector.vendor.vRmaSettings.type, rma.type)
        await base.select(selector.vendor.vRmaSettings.length, rma.rmaLength)
        await base.clearAndType(selector.vendor.vRmaSettings.lengthValue, rma.lengthValue)
        await base.select(selector.vendor.vRmaSettings.lengthDuration, rma.lengthDuration)

        let refundReasonIsVisible = await base.isVisible(selector.vendor.vRmaSettings.refundReasons)
        if (refundReasonIsVisible) {
            await base.checkMultiple(selector.vendor.vRmaSettings.refundReasons)
        }
        let iframe = await base.switchToIframe(selector.vendor.vRmaSettings.refundPolicyIframe)
        await base.iframeClearAndType(iframe, selector.vendor.vRmaSettings.refundPolicyHtmlBody, rma.refundPolicyHtmlBody)
        await base.click(selector.vendor.vRmaSettings.rmaSaveChanges)

        let successMessage = await base.getElementText(selector.vendor.vRmaSettings.updateSettingsSuccessMessage)
        expect(successMessage).toMatch(rma.saveSuccessMessage)

    },


    // Vendor Functions

    // Vendor Approve Product Review
    async approveProductReview(reviewMessage) {
        await this.goToVendorDashboard()
        await base.clickAndWait(selector.vendor.vDashboard.reviews)

        // let approvedReviewIsVisible = await base.isVisible(selector.vendor.vReviews.reviewRow(reviewMessage))
        // if (approvedReviewIsVisible) {
        //     expect(approvedReviewIsVisible).toBe(true)
        // }

        await base.clickAndWait(selector.vendor.vReviews.pending)
        await base.hover(selector.vendor.vReviews.reviewRow(reviewMessage))
        await base.click(selector.vendor.vReviews.approveReview(reviewMessage))
        await base.wait(2)
        await base.clickAndWait(selector.vendor.vReviews.approved)

        let reviewIsVisible = await base.isVisible(selector.vendor.vReviews.reviewRow(reviewMessage))
        expect(reviewIsVisible).toBe(true)
    },

    async approveReturnRequest(orderId, productName) {
        await this.goToVendorDashboard()
        await base.clickAndWait(selector.vendor.vDashboard.returnRequest)

        await base.clickAndWait(selector.vendor.vReturnRequest.view(orderId))

        // Change Order Status to Refund
        await base.select(selector.vendor.vReturnRequest.changeOrderStatus, 'processing')
        await base.alert('accept')
        await base.clickAndWait(selector.vendor.vReturnRequest.updateOrderStatus)

        // Refund Request
        await base.click(selector.vendor.vReturnRequest.sendRefund)
        await base.wait(3)
        let tax = String(helpers.price(await base.getElementText(selector.vendor.vReturnRequest.taxAmount(productName))))
        let subTotal = String(helpers.price(await await base.getElementText(selector.vendor.vReturnRequest.subTotal(productName))))
        await base.type(selector.vendor.vReturnRequest.taxRefund, tax)
        await base.type(selector.vendor.vReturnRequest.subTotalRefund, subTotal)
        await base.clickAndWait(selector.vendor.vReturnRequest.sendRequest)

        let successMessage = await base.getElementText(selector.vendor.vReturnRequest.sendRequestSuccessMessage)
        expect(successMessage).toMatch('Already send refund request. Wait for admin approval')

    },

    async deleteReturnRequest(orderId) {
        await this.goToVendorDashboard()
        await base.clickAndWait(selector.vendor.vDashboard.returnRequest)

        await base.hover(selector.vendor.vReturnRequest.returnRequestCell(orderId))
        await base.clickAndWait(selector.vendor.vReturnRequest.delete(orderId))

        let successMessage = await base.getElementText(selector.customer.cWooSelector.wooCommerceSuccessMessage)
        expect(successMessage).toMatch('Return Request has been deleted successfully')
    },

    async overrideRmaSettings(productName, label, type, length, lengthValue, lengthDuration) {

        await this.searchProduct(productName)
        await base.clickAndWait(selector.vendor.product.productLink(productName))
        // Override Rma Settings
        await base.check(selector.vendor.product.overrideYourDefaultRmaSettingsForThisProduct)
        await base.wait(1)

        await base.clearAndType(selector.vendor.product.rmaLabel, label)
        await base.select(selector.vendor.product.rmaType, type)
        await base.select(selector.vendor.product.rmaLength, length)
        await base.clearAndType(selector.vendor.product.rmaLengthValue, lengthValue)
        await base.select(selector.vendor.product.rmaLengthDuration, lengthDuration)

        let refundReasonIsVisible = await base.isVisible(selector.vendor.product.refundReasons)
        if (refundReasonIsVisible) {
            await base.clickAndWaitMultiple(selector.vendor.product.refundReasons)
        }

        await base.clickAndWait(selector.vendor.product.saveProduct)

        let productCreateSuccessMessage = await base.getElementText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch(product.saveSuccessMessage)
    },

    // Add Quantity Discount
    async addQuantityDiscount(productName, minimumQuantity, discountPercentage) {
        await this.searchProduct(productName)
        await base.clickAndWait(selector.vendor.product.productLink(productName))

        // Add Quantity Discount
        await base.check(selector.vendor.product.enableBulkDiscount)
        await base.wait(1)
        await base.clearAndType(selector.vendor.product.lotMinimumQuantity, minimumQuantity)
        await base.clearAndType(selector.vendor.product.lotDiscountInPercentage, discountPercentage)

        await base.clickAndWait(selector.vendor.product.saveProduct)

        let productCreateSuccessMessage = await base.getElementText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch(product.saveSuccessMessage)
    },

    // Vendor Search Product
    async searchProduct(productName) {
        await this.goToVendorDashboard()
        await base.clickAndWait(selector.vendor.vDashboard.products)
        //search product
        await base.type(selector.vendor.product.searchProduct, productName)
        await base.clickAndWait(selector.vendor.product.search)

        let searchedProductIsVisible = await base.isVisible(selector.vendor.product.productLink(productName))
        expect(searchedProductIsVisible).toBe(true)
    },

    async changeOrderStatus(orderNumber, orderStatus) {
        await this.goToVendorDashboard()
        await base.clickAndWait(selector.vendor.vDashboard.orders)

        await base.clickAndWait(selector.vendor.vOrders.orderLink(orderNumber))
        await base.click(selector.vendor.vOrders.edit)
        await base.select(selector.vendor.vOrders.orderStatus, orderStatus)
        await base.click(selector.vendor.vOrders.updateOrderStatus)
        await base.wait(3)

        let currentOrderStatus = await base.getElementText(selector.vendor.vOrders.currentOrderStatus)
        expect(currentOrderStatus.toLowerCase()).toMatch((orderStatus.replace(/(^wc)|(\W)/g, '')).toLowerCase())
    },

    // Venddor Refund Order
    async refundOrder(orderNumber, productName, partialRefund = false) {
        await this.goToVendorDashboard()
        await base.clickAndWait(selector.vendor.vDashboard.orders)
        await base.clickAndWait(selector.vendor.vOrders.orderLink(orderNumber))

        //request refund
        await base.click(selector.vendor.vOrders.requestRefund)
        let productQuantity = await base.getElementText(selector.vendor.vOrders.productQuantity(productName))
        let productCost = helpers.price(await base.getElementText(selector.vendor.vOrders.productCost(productName)))
        let productTax = helpers.price(await base.getElementText(selector.vendor.vOrders.productTax(productName)))
        await base.type(selector.vendor.vOrders.refundProductQuantity(productName), productQuantity)
        if (partialRefund) {
            await base.click(selector.vendor.vOrders.refundDiv)
            await base.clearAndType(selector.vendor.vOrders.refundProductCostAmount(productName), String(helpers.roundToTwo(productCost / 2)))
            await base.clearAndType(selector.vendor.vOrders.refundProductTaxAmount(productName), String(helpers.roundToTwo(productTax / 2)))
        }
        await base.type(selector.vendor.vOrders.refundReason, 'Defective product')
        await base.click(selector.vendor.vOrders.refundManually)
        await base.wait(1.5)
        await base.click(selector.vendor.vOrders.confirmRefund)
        await base.wait(1.5)

        let successMessage = await base.getElementText(selector.vendor.vOrders.refundRequestSuccessMessage)
        expect(successMessage).toMatch('Refund request submitted.')
        await base.click(selector.vendor.vOrders.refundRequestSuccessMessageOk)
    },


    async getOrderDetails(orderNumber) {
        await this.goToVendorDashboard()
        await base.clickAndWait(selector.vendor.vDashboard.orders)
        let vOrderDetails = {}
        vOrderDetails.vendorEarning = helpers.price(await base.getElementText(selector.vendor.vOrders.vendorEarningTable(orderNumber)))

        await base.clickAndWait(selector.vendor.vOrders.orderLink(orderNumber))
        vOrderDetails.orderNumber = (await base.getElementText(selector.vendor.vOrders.orderNumber)).split('#')[1]
        let refundedOrderTotalIsVisible = await base.isVisible(selector.vendor.vOrders.orderTotalAfterRefund)
        if (refundedOrderTotalIsVisible) {
            vOrderDetails.orderTotalBeforeRefund = helpers.price(await base.getElementText(selector.vendor.vOrders.orderTotalBeforeRefund))
            vOrderDetails.orderTotal = helpers.price(await base.getElementText(selector.vendor.vOrders.orderTotalAfterRefund))
        } else {
            vOrderDetails.orderTotal = helpers.price(await base.getElementText(selector.vendor.vOrders.orderTotal))
        }
        vOrderDetails.orderStatus = (await base.getElementText(selector.vendor.vOrders.currentOrderStatus)).replace('-', ' ')
        let orderDate = (await base.getElementText(selector.vendor.vOrders.orderDate)).split(':')[1].trim()
        vOrderDetails.orderDate = orderDate.substring(0, orderDate.indexOf(',', orderDate.indexOf(',') + 1))
        vOrderDetails.discount = helpers.price(await base.getElementText(selector.vendor.vOrders.discount))
        let shippingMethodIsVisible = await base.isVisible(selector.vendor.vOrders.shippingMethod)
        if (shippingMethodIsVisible) vOrderDetails.shippingMethod = await base.getElementText(selector.vendor.vOrders.shippingMethod)
        vOrderDetails.shippingCost = helpers.price(await base.getElementText(selector.vendor.vOrders.shippingCost))
        let taxIsVisible = await base.isVisible(selector.vendor.vOrders.tax)
        if (taxIsVisible) vOrderDetails.tax = helpers.price(await base.getElementText(selector.vendor.vOrders.tax))
        vOrderDetails.refunded = helpers.price(await base.getElementText(selector.vendor.vOrders.refunded))

        return vOrderDetails
    },

    // Get Total Vendor Earnings
    async getTotalVendorEarning() {
        await this.goToVendorDashboard()

        let totalVendorEarning = helpers.price(await base.getElementText(selector.vendor.vDashboard.earning))
        return totalVendorEarning
    },


}
