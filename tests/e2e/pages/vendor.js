const { createURL } = require("@wordpress/e2e-test-utils")
const base = require("../pages/base.js")
const selector = require("../pages/selectors.js")
const helper = require("../../e2e/utils/helpers.js")

module.exports = {



    // methods



    //-------------------------------------------------- navigation ---------------------------------------------------//



    async goToVendorDashboard() {
        await page.goto(createURL('dashboard'))

        const url = await page.url()
        expect(url).toMatch('dashboard')
    },

    //-------------------------------------------------- setup wizard ---------------------------------------------------//

    //vendor registration
    async vendorRegister(userEmail, password, firstName, lastName, shopName, companyName, companyId, vatNumber, bankName, bankIban, phone, withSetupWizard, setupWizardData) {
        await base.goto("my-account")
        await page.type(selector.vendor.vRegistration.regEmail, userEmail)
        await page.type(selector.vendor.vRegistration.regPassword, password)
        await base.clickXpath(selector.vendor.vRegistration.regVendor)
        await page.type(selector.vendor.vRegistration.firstName, firstName)
        await page.type(selector.vendor.vRegistration.lastName, lastName)
        await page.type(selector.vendor.vRegistration.shopName, shopName)
        // await page.type(selector.vendor.shopUrl, shopUrl)
        await page.click(selector.vendor.vRegistration.shopUrl)
        await page.type(selector.vendor.vRegistration.companyName, companyName)
        await page.type(selector.vendor.vRegistration.companyId, companyId)
        await page.type(selector.vendor.vRegistration.vatNumber, vatNumber)
        await page.type(selector.vendor.vRegistration.bankName, bankName)
        await page.type(selector.vendor.vRegistration.bankIban, bankIban)
        await page.type(selector.vendor.vRegistration.phone, phone)
        // let subscriptionPackIsVisible = await base.isVisible(page, selector.vendor.vWithdraw.cancelRequest) 
        // if(subscriptionPackIsVisible){
        // await page.select(selector.vendor.vRegistration.subscriptionPack, "") //TODO:select subscription pack
        // }
        await base.click(selector.vendor.vRegistration.register)

        if (withSetupWizard) {
            await this.vendorSetupWizard(
                setupWizardData.storeProductsPerPage,
                setupWizardData.street1,
                setupWizardData.street2,
                setupWizardData.city,
                setupWizardData.zipCode,
                setupWizardData.country,
                setupWizardData.state,
                setupWizardData.paypal,
                setupWizardData.bankAccountName,
                setupWizardData.bankAccountNumber,
                setupWizardData.bankName,
                setupWizardData.bankAddress,
                setupWizardData.bankRoutingNumber,
                setupWizardData.bankIban,
                setupWizardData.bankSwiftCode,
                setupWizardData.customPayment,
                setupWizardData.skrill,
            )
        }
        else {
            await base.click(selector.vendor.vSetup.notRightNow)

            let dashboardIsVisible = await base.isVisible(page, selector.vendor.vDashboard.dashboard)
            expect(dashboardIsVisible).toBe(true)
        }
    },

    async vendorSetupWizard(storeProductsPerPage, street1, street2, city, zipCode, country, state, paypal, bankAccountName, bankAccountNumber, bankName, bankAddress, bankRoutingNumber, bankIban, bankSwiftCode, customPayment, skrill) {
        await page.click(selector.vendor.vSetup.letsGo)

        await base.clearAndType(selector.vendor.vSetup.storeProductsPerPage, storeProductsPerPage)
        await page.type(selector.vendor.vSetup.street1, street1)
        await page.type(selector.vendor.vSetup.street2, street2)
        await page.type(selector.vendor.vSetup.city, city)
        await page.type(selector.vendor.vSetup.zipCode, zipCode)
        await page.click(selector.vendor.vSetup.country)
        await page.type(selector.vendor.vSetup.countryInput, country)
        await page.keyboard.press('Enter')
        await page.type(selector.vendor.vSetup.state, state)
        await page.keyboard.press('Enter')
        await page.click(selector.vendor.vSetup.email)
        await base.click(selector.vendor.vSetup.continueStoreSetup)

        await base.type(selector.vendor.vSetup.paypal, paypal)
        await base.type(selector.vendor.vSetup.bankAccountName, bankAccountName)
        await base.type(selector.vendor.vSetup.bankAccountNumber, bankAccountNumber)
        await base.type(selector.vendor.vSetup.bankName, bankName)
        await base.type(selector.vendor.vSetup.bankAddress, bankAddress)
        await base.type(selector.vendor.vSetup.bankRoutingNumber, bankRoutingNumber)
        await base.type(selector.vendor.vSetup.bankIban, bankIban)
        await base.type(selector.vendor.vSetup.bankSwiftCode, bankSwiftCode)
        await base.type(selector.vendor.vSetup.customPayment, customPayment)
        console.log(selector.vendor.vSetup.skrill)

        await base.type(selector.vendor.vSetup.skrill, skrill)
        // TODO: stripe connect
        // TODO: paypal marketplace
        await base.click(selector.vendor.vSetup.continuePaymentSetup)

        await base.click(selector.vendor.vSetup.goToStoreDashboard)

        let dashboardIsVisible = await base.isVisible(page, selector.vendor.vDashboard.dashboard)
        expect(dashboardIsVisible).toBe(true)

    },



    //-------------------------------------------------- products ---------------------------------------------------//



    //vendor add simple product
    async addSimpleProduct(productName, productPrice, category) {
        await base.click(selector.vendor.vDashboard.products)

        //add new simple product
        await page.click(selector.vendor.product.addNewProduct)
        await page.type(selector.vendor.product.productName, productName)
        await page.type(selector.vendor.product.productPrice, productPrice)
        await page.click(selector.vendor.product.productCategory)
        await page.type(selector.vendor.product.productCategoryInput, category)
        await page.keyboard.press('Enter')
        await base.click(selector.vendor.product.createProduct)

        let createdProduct = await base.getElementValue(selector.vendor.product.title)
        expect(createdProduct.toLowerCase()).toBe(productName.toLowerCase())
    },

    //vendor add variable product
    async addVariableProduct(productName, productPrice, category, attribute, attributeTerms) {
        await base.click(selector.vendor.vDashboard.products)

        //add new variable product
        await page.click(selector.vendor.product.addNewProduct)
        await page.type(selector.vendor.product.productName, productName)
        await page.type(selector.vendor.product.productPrice, productPrice)
        await page.click(selector.vendor.product.productCategory)
        await page.type(selector.vendor.product.productCategoryInput, category)
        await page.keyboard.press('Enter')
        await base.click(selector.vendor.product.createProduct)

        let createdProduct = await base.getElementValue(selector.vendor.product.title)
        expect(createdProduct.toLowerCase()).toBe(productName.toLowerCase())

        //edit product
        await page.select(selector.vendor.product.productType, 'variable')
        //add variation
        await page.select(selector.vendor.product.customProductAttribute, `pa_${attribute}`)
        await page.waitForTimeout(1000)
        await page.click(selector.vendor.product.addAttribute)
        await base.waitForSelector(selector.vendor.product.selectAll)
        await page.click(selector.vendor.product.selectAll)
        await page.click(selector.vendor.product.usedForVariations)
        await base.waitForSelector(selector.vendor.product.saveAttributes)
        await page.click(selector.vendor.product.saveAttributes)

        await base.waitForSelector(selector.vendor.product.addVariations)
        await page.select(selector.vendor.product.addVariations, 'link_all_variations')
        await page.waitForTimeout(1000)
        await page.click(selector.vendor.product.go)
        await base.waitForSelector(selector.vendor.product.confirmGo)
        await page.click(selector.vendor.product.confirmGo)
        await page.waitForTimeout(1000)
        await page.click(selector.vendor.product.okSuccessAlertGo)
        await page.waitForTimeout(1000)

        await page.select(selector.vendor.product.addVariations, 'variable_regular_price')
        await page.waitForTimeout(1000)
        await page.click(selector.vendor.product.go)
        await base.waitForSelector(selector.vendor.product.variationPrice)
        await page.type(selector.vendor.product.variationPrice, '100')
        await page.click(selector.vendor.product.okVariationPrice)

        await base.waitForSelector(selector.vendor.product.saveProduct)
        await base.click(selector.vendor.product.saveProduct)
        await page.waitForTimeout(1000)

        let productCreateSuccessMessage = await base.getSelectorText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch('Success! The product has been saved successfully. View Product →')
    },

    //vendor add simple subscription product
    async addSimpleSubscription(productName, productPrice, category) {
        await base.click(selector.vendor.vDashboard.products)

        //add new simple subscription product
        await page.click(selector.vendor.product.addNewProduct)
        await page.type(selector.vendor.product.productName, productName)
        await page.type(selector.vendor.product.productPrice, productPrice)
        await page.click(selector.vendor.product.productCategory)
        await page.type(selector.vendor.product.productCategoryInput, category)
        await page.keyboard.press('Enter')
        await base.click(selector.vendor.product.createProduct)

        let createdProduct = await base.getElementValue(selector.vendor.product.title)
        expect(createdProduct.toLowerCase()).toBe(productName.toLowerCase())

        //edit product
        await page.select(selector.vendor.product.productType, 'subscription')
        await page.type(selector.vendor.product.subscriptionPrice, productPrice)
        await page.select(selector.vendor.product.subscriptionPeriodInterval, '1')
        await page.select(selector.vendor.product.subscriptionPeriod, 'month')
        await page.select(selector.vendor.product.expireAfter, '0')
        await page.type(selector.vendor.product.subscriptionTrialLength, '0')
        await page.select(selector.vendor.product.subscriptionTrialPeriod, 'day')

        await base.click(selector.vendor.product.saveProduct)

        let productCreateSuccessMessage = await base.getSelectorText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch('Success! The product has been saved successfully. View Product →')
    },

    //vendor add variable subscription product
    async addVariableSubscription(productName, productPrice, category, attribute, attributeTerms) {
        await base.click(selector.vendor.vDashboard.products)

        //add new variable subscription product
        await page.click(selector.vendor.product.addNewProduct)
        await page.type(selector.vendor.product.productName, productName)
        await page.type(selector.vendor.product.productPrice, productPrice)
        await page.click(selector.vendor.product.productCategory)
        await page.type(selector.vendor.product.productCategoryInput, category)
        await page.keyboard.press('Enter')
        await base.click(selector.vendor.product.createProduct)

        let createdProduct = await base.getElementValue(selector.vendor.product.title)
        expect(createdProduct.toLowerCase()).toBe(productName.toLowerCase())

        //edit product
        await page.select(selector.vendor.product.productType, 'variable-subscription')
        await page.waitForTimeout(1000)

        //add variation
        await page.select(selector.vendor.product.customProductAttribute, `pa_${attribute}`)
        await page.click(selector.vendor.product.addAttribute)
        await base.waitForSelector(selector.vendor.product.selectAll)
        await page.click(selector.vendor.product.selectAll)
        await page.click(selector.vendor.product.usedForVariations)
        await base.waitForSelector(selector.vendor.product.saveAttributes)
        await page.click(selector.vendor.product.saveAttributes)

        await base.waitForSelector(selector.vendor.product.addVariations)
        await page.select(selector.vendor.product.addVariations, 'link_all_variations')
        await page.waitForTimeout(1000)
        await page.click(selector.vendor.product.go)
        await base.waitForSelector(selector.vendor.product.confirmGo)
        await page.click(selector.vendor.product.confirmGo)
        await page.waitForTimeout(1000)
        await page.click(selector.vendor.product.okSuccessAlertGo)
        await page.waitForTimeout(1000)

        await page.select(selector.vendor.product.addVariations, 'variable_regular_price')
        await page.waitForTimeout(1000)
        await page.click(selector.vendor.product.go)
        await base.waitForSelector(selector.vendor.product.variationPrice)
        await page.type(selector.vendor.product.variationPrice, '100')
        await page.click(selector.vendor.product.okVariationPrice)

        await base.waitForSelector(selector.vendor.product.saveProduct)
        await base.click(selector.vendor.product.saveProduct)
        await page.waitForTimeout(1000)

        let productCreateSuccessMessage = await base.getSelectorText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch('Success! The product has been saved successfully. View Product →')
    },

    //vendor add external product
    async addExternalProduct(productName, productPrice, category) {
        await base.click(selector.vendor.vDashboard.products)

        //add new external product
        await page.click(selector.vendor.product.addNewProduct)
        await page.type(selector.vendor.product.productName, productName)
        await page.type(selector.vendor.product.productPrice, productPrice)
        await page.click(selector.vendor.product.productCategory)
        await page.type(selector.vendor.product.productCategoryInput, category)
        await page.keyboard.press('Enter')
        await base.click(selector.vendor.product.createProduct)

        let createdProduct = await base.getElementValue(selector.vendor.product.title)
        expect(createdProduct.toLowerCase()).toBe(productName.toLowerCase())

        //edit product
        await page.select(selector.vendor.product.productType, 'external')
        await page.type(selector.vendor.product.productUrl, await base.getBaseUrl() + '/shop/uncategorized/subscription_handcrafted-granite-chicken/')
        await page.type(selector.vendor.product.buttonText, 'Buy product')
        await base.clearAndType(selector.vendor.product.price, productPrice)

        await base.click(selector.vendor.product.saveProduct)

        let productCreateSuccessMessage = await base.getSelectorText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch('Success! The product has been saved successfully. View Product →')
    },

    //vendor add auction product
    async addAuctionProduct(productName, productPrice, category) {

        await base.click(selector.vendor.vDashboard.auction)

        //add new auction product
        await base.click(selector.vendor.vAction.addNewActionProduct)
        await page.type(selector.vendor.vAction.productName, productName)
        // await page.type(selector.vendor.vAction.productShortDescription, productShortDescription)
        await page.click(selector.vendor.product.productCategory)
        await page.type(selector.vendor.product.productCategoryInput, category)
        await page.keyboard.press('Enter')
        // await page.click(selector.vendor.vAction.productCategory)
        // await base.setDropdownOptionSpan(selector.vendor.vAction.productCategoryValues, category)

        // await page.select(selector.vendor.vAction.itemCondition, itemCondition)
        // await page.select(selector.vendor.vAction.actionType, actionType)
        await page.type(selector.vendor.vAction.startPrice, productPrice)
        await page.type(selector.vendor.vAction.bidIncrement, '50')
        await page.type(selector.vendor.vAction.reservedPrice, productPrice + 400)
        await page.type(selector.vendor.vAction.buyItNowPrice, productPrice + 900)
        await page.type(selector.vendor.vAction.auctionStartDate, '2022-03-31 10:15') //TODO: handle date using datepicker or use core input filed 
        await page.type(selector.vendor.vAction.auctionEndDate, '2022-04-10 10:12')
        // await page.keyboard.press('Enter')
        await base.click(selector.vendor.vAction.addAuctionProduct)

        let productCreateSuccessMessage = await base.getSelectorText(selector.vendor.product.updatedSuccessMessage)
        expect(productCreateSuccessMessage.replace(/\s+/g, ' ').trim()).toMatch('× Success! The product has been updated successfully. View Product →')//TODO: update assertion text)

    },

    //vendor add booking product
    async addBookingProduct(productName, category, bookingDurationType, bookingDuration, bookingDurationUnit, calenderDisplayMode, enableCalendarRangePicker, maxBookingsPerBlock,
        minimumBookingWindowIntoTheFutureDate, minimumBookingWindowIntoTheFutureDateUnit, maximumBookingWindowIntoTheFutureDate, maximumBookingWindowIntoTheFutureDateUnit,
        baseCost, blockCost) {

        await page.type(selector.vendor.vBooking.productName, productName)
        await page.click(selector.vendor.vBooking.category)
        await base.setDropdownOptionSpan(selector.vendor.vBooking.categoryValues, category)

        // general Booking options
        await page.select(selector.vendor.vBooking.bookingDurationType, bookingDurationType)
        await page.type(selector.vendor.vBooking.bookingDuration, bookingDuration)
        await page.select(selector.vendor.vBooking.bookingDurationUnit, bookingDurationUnit)

        await page.select(selector.vendor.vBooking.calenderDisplayMode, calenderDisplayMode)
        await page.select(selector.vendor.vBooking.enableCalendarRangePicker, enableCalendarRangePicker)

        //availability
        await page.type(selector.vendor.vBooking.maxBookingsPerBlock, maxBookingsPerBlock)
        await page.type(selector.vendor.vBooking.minimumBookingWindowIntoTheFutureDate, minimumBookingWindowIntoTheFutureDate)
        await page.select(selector.vendor.vBooking.minimumBookingWindowIntoTheFutureDateUnit, minimumBookingWindowIntoTheFutureDateUnit)
        await page.type(selector.vendor.vBooking.maximumBookingWindowIntoTheFutureDate, maximumBookingWindowIntoTheFutureDate)
        await page.select(selector.vendor.vBooking.maximumBookingWindowIntoTheFutureDateUnit, maximumBookingWindowIntoTheFutureDateUnit)

        //costs
        await page.type(selector.vendor.vBooking.baseCost, baseCost)
        await page.type(selector.vendor.vBooking.blockCost, blockCost)

        await base.click(selector.vendor.vBooking.saveProduct)

    },

    //vendor search similar product
    async searchSimilarProduct(productName) {
        await page.click(selector.vendor.vSearchSimilarProduct.search)
        await page.type(selector.vendor.SearchSimilarProduct.search, productName)
        await base.click(selector.vendor.vSearchSimilarProduct.search)
        await page.click(selector.vendor.vSearchSimilarProduct.search)
    },



    //-------------------------------------------------- coupons ---------------------------------------------------//



    //vendor add coupon
    async addCoupon(couponTitle, couponAmount) {
        await base.click(selector.vendor.vDashboard.coupons)
        await base.click(selector.vendor.vCoupon.addNewCoupon)
        await page.type(selector.vendor.vCoupon.couponTitle, couponTitle)
        await page.type(selector.vendor.vCoupon.amount, couponAmount)
        await page.click(selector.vendor.vCoupon.selectAll)
        await page.click(selector.vendor.vCoupon.applyForNewProducts)
        await page.click(selector.vendor.vCoupon.showOnStore)
        await base.click(selector.vendor.vCoupon.createCoupon)

        let createdCoupon = await base.getElementText(selector.vendor.vCoupon.createdCoupon)
        expect(createdCoupon.toLowerCase()).toBe(couponTitle.toLowerCase())
    },



    //-------------------------------------------------- withdraw ---------------------------------------------------//



    //vendor request withdraw 
    async requestWithdraw(withdrawAmount, withdrawMethod) {

        await base.click(selector.vendor.vDashboard.withdraw)

        try {
            let canRequestIsVisible = await base.isVisible(page, selector.vendor.vWithdraw.cancelRequest)
            expect(canRequestIsVisible).toBe(false)
        } catch (err) {
            throw new Error("Vendor already requested for withdraw")
        }


        let minimumWithdrawAmount = await base.getElementText(selector.vendor.vWithdraw.minimumWithdrawAmount)
        minimumWithdrawAmount = minimumWithdrawAmount.replace('$', '')
        // console.log(minimumWithdrawAmount)
        let balance = await base.getElementText(selector.vendor.vWithdraw.balance)
        balance = balance.replace('$', '')
        // console.log(balance)

        if (Number(balance) > Number(minimumWithdrawAmount)) {
            await page.click(selector.vendor.vWithdraw.requestWithdraw)
            await page.type(selector.vendor.vWithdraw.withdrawAmount, minimumWithdrawAmount)
            // await base.setDropdownOption(selector.vendor.withdraw.withdrawMethod, withdrawMethod)
            await base.click(selector.vendor.vWithdraw.submitRequest)
        }
        try {
            let canRequestIsVisible = await base.isVisible(page, selector.vendor.vWithdraw.cancelRequest)
            expect(canRequestIsVisible).toBe(true)

        } catch (err) {
            // console.error(err)
            throw new Error("Vendor balance is less than minimum withdraw amount")
        }
    },

    //vendor cancel withdraw request
    async cancelRequestWithdraw() {
        await base.click(selector.vendor.vDashboard.withdraw)
        await page.click(selector.vendor.vWithdraw.cancelRequest)

        let canRequestIsVisible = await base.isVisible(page, selector.vendor.vWithdraw.cancelRequest)
        expect(canRequestIsVisible).toBe(false)

    },

    //vendor add auto withdraw disbursement schedule
    async addAutoWithdrawDisbursementSchedule(preferredPaymentMethod, preferredSchedule, minimumWithdrawAmount, reserveBalance) {
        await base.click(selector.vendor.vDashboard.withdraw)
        await page.click(selector.vendor.vWithdraw.editSchedule)
        await page.select(selector.vendor.vWithdraw.preferredPaymentMethod, preferredPaymentMethod)
        await page.click(selector.vendor.vWithdraw[preferredSchedule])
        // let length = await base.getCount(selector.vendor.withdraw.onlyWhenBalanceIs)
        await page.select(selector.vendor.vWithdraw.onlyWhenBalanceIs, minimumWithdrawAmount)
        await page.select(selector.vendor.vWithdraw.maintainAReserveBalance, reserveBalance)
        await base.click(selector.vendor.vWithdraw.changeSchedule)
    },

    // vendor add default withdraw payment methods
    async addDefaultWithdrawPaymentMethods(preferredSchedule) {
        // TODO : locator issue
        await base.click(selector.vendor.vDashboard.withdraw)
        await base.click(selector.vendor.vWithdraw.customMethodMakeDefault(preferredSchedule))
        await page.waitForTimeout(5000)
    },

    // vendor add default withdraw payment methods
    async setupDefaultWithdrawPaymentMethods(preferredSchedule) {
        // TODO : locator issue
        await base.click(selector.vendor.vDashboard.withdraw)
        await base.click(selector.vendor.vWithdraw.customMethodSetup(preferredSchedule))
        await page.waitForTimeout(5000)
    },


    //-------------------------------------------------- vendor settings ---------------------------------------------------//



    //vendor set store settings
    async setStoreSettings(storeName, storeProductsPerPage, phoneNo, street, street2, city, postOrZipCode, country, state, companyName,
        companyIdOrEuidNumber, vatOrTaxNumber, nameOfBank, bankIban, map, minimumOrderAmount, percentage, supportButtonText,
        minimumProductQuantityToPlaceAnOrder, maximumProductQuantityToPlaceAnOrder, minimumAmountToPlaceAnOrder, maximumAmountToPlaceAnOrder
    ) {

        await base.click(selector.vendor.vDashboard.settings)
        // await base.click(selector.vendor.vSettings.store)


        await page.click(selector.vendor.vStoreSettings.banner)
        await page.click(selector.vendor.vStoreSettings.banner)
        await page.waitForTimeout(6000)
        await base.clickXpath(selector.vendor.vStoreSettings.selectFiles)
        await base.uploadImage(selector.vendor.vStoreSettings.selectFiles, '/Users/rk/Automation/Dokan_e2e_test/avatar.png')
        await page.waitForTimeout(6000)

        const [fileChooser] = await Promise.all([page.waitForFileChooser(), base.clickXpath1(selector.vendor.vStoreSettings.selectFiles)])
        await fileChooser.accept(['./tests/e2e/utils/sampleData/avatar.png'])

        await base.clickXpath(selector.vendor.vStoreSettings.selectAndCrop)
        await base.clickXpath(selector.vendor.vStoreSettings.cropImage)

        await page.waitForTimeout(6000)

        // await base.clearAndType(selector.vendor.vStoreSettings.storeName, storeName)
        // await base.clearAndType(selector.vendor.vStoreSettings.storeProductsPerPage, storeProductsPerPage)
        // await base.clearAndType(selector.vendor.vStoreSettings.phoneNo, phoneNo)
        // //address
        // // await page.click(selector.vendor.vStoreSettings.multipleLocation)
        // // await page.type(selector.vendor.vStoreSettings.locationName, locationName)
        // // await page.click(selector.vendor.vStoreSettings.addLocation)
        // // await page.click(selector.vendor.vStoreSettings.editLocation)
        // await base.clearAndType(selector.vendor.vStoreSettings.street, street)
        // await base.clearAndType(selector.vendor.vStoreSettings.street2, street2)
        // await base.clearAndType(selector.vendor.vStoreSettings.city, city)
        // await base.clearAndType(selector.vendor.vStoreSettings.postOrZipCode, postOrZipCode)
        // await page.select(selector.vendor.vStoreSettings.country, country)
        // await page.select(selector.vendor.vStoreSettings.state, state)
        // // await page.type(selector.vendor.vStoreSettings.saveLocation, saveLocation)
        // // await page.click(selector.vendor.vStoreSettings.saveLocation)
        // // await page.click(selector.vendor.vStoreSettings.cancelSaveLocation)
        // // await page.click(selector.vendor.vStoreSettings.deleteSaveLocation)

        // //company info
        // await base.clearAndType(selector.vendor.vStoreSettings.companyName, companyName)
        // await base.clearAndType(selector.vendor.vStoreSettings.companyIdOrEuidNumber, companyIdOrEuidNumber)
        // await base.clearAndType(selector.vendor.vStoreSettings.vatOrTaxNumber, vatOrTaxNumber)
        // await base.clearAndType(selector.vendor.vStoreSettings.nameOfBank, nameOfBank)
        // await base.clearAndType(selector.vendor.vStoreSettings.bankIban, bankIban)
        // //email
        // // await page.click(selector.vendor.vStoreSettings.email)
        // // await page.click(selector.vendor.vStoreSettings.moreProducts)
        // //map
        // // await page.click(selector.vendor.vStoreSettings.map)
        // // await base.clearAndType(selector.vendor.vStoreSettings.map, map)
        // // await page.waitForTimeout(1000)
        // // await page.click(selector.vendor.vStoreSettings.map1)
        // // await page.click(selector.vendor.vStoreSettings.mapFirstResult)
        // //store opening closing time
        // //vacation

        // //discount
        // await page.click(selector.vendor.vStoreSettings.enableStoreWideDiscount)
        // await base.clearAndType(selector.vendor.vStoreSettings.minimumOrderAmount, minimumOrderAmount)
        // await base.clearAndType(selector.vendor.vStoreSettings.percentage, percentage)
        // //biography

        // //store support
        // await page.click(selector.vendor.vStoreSettings.showSupportButtonInStore)
        // await page.click(selector.vendor.vStoreSettings.showSupportButtonInSingleProduct)
        // await page.click(selector.vendor.vStoreSettings.showSupportButtonInStore)
        // await page.click(selector.vendor.vStoreSettings.showSupportButtonInSingleProduct)
        // await base.clearAndType(selector.vendor.vStoreSettings.supportButtonText, supportButtonText)

        // // //min-max
        // // await page.click(selector.vendor.vStoreSettings.enableMinMaxQuantities)
        // // await base.clearAndType(selector.vendor.vStoreSettings.minimumProductQuantityToPlaceAnOrder, minimumProductQuantityToPlaceAnOrder)
        // // await base.clearAndType(selector.vendor.vStoreSettings.maximumProductQuantityToPlaceAnOrder, maximumProductQuantityToPlaceAnOrder)
        // // await page.click(selector.vendor.vStoreSettings.enableMinMaxAmount)
        // // await base.clearAndType(selector.vendor.vStoreSettings.minimumAmountToPlaceAnOrder, minimumAmountToPlaceAnOrder)
        // // await base.clearAndType(selector.vendor.vStoreSettings.maximumAmountToPlaceAnOrder, maximumAmountToPlaceAnOrder)
        // // await page.click(selector.vendor.vStoreSettings.selectAll)

        // //update settings
        // await page.click(selector.vendor.vStoreSettings.updateSettings)
        // await page.waitForTimeout(1000)

        // let successMessage = await base.getSelectorText(selector.vendor.vSocialProfileSettings.updateSettingsSuccessMessage)
        // expect(successMessage).toMatch('Your information has been saved successfully')

    },

    //vendor set addon settings
    async setAddonSettings() {

    },

    //vendor set payment settings
    async setPaymentSettings() {

        await base.click(selector.vendor.vDashboard.settings)
        await base.click(selector.vendor.vSettings.payment)

        //paypal
        await base.clearAndType(selector.vendor.vPaymentSettings.paypal, paypal)

        //bank transfer
        await base.clearAndType(selector.vendor.vPaymentSettings.bankAccountName, bankAccountName)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankAccountNumber, bankAccountNumber)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankName, bankName)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankAddress, bankAddress)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankRoutingNumber, bankRoutingNumber)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankIban, bankIban)
        await base.clearAndType(selector.vendor.vPaymentSettings.bankSwiftCode, bankSwiftCode)


        // //Stripe
        // await base.click(selector.vendor.vPaymentSettings.ConnectWithStripe)

        // //paypal marketplace
        // await base.clearAndType(selector.vendor.vPaymentSettings.paypalMarketplace, paypalMarketplace)
        // await base.click(selector.vendor.vPaymentSettings.paypalMarketplaceSigUp)

        //razorpay
        //     await base.click(selector.vendor.vPaymentSettings.rzSignup)
        //  // existing account info
        //     await page.click(selector.vendor.vPaymentSettings.rzIHaveAlreadyAnAccount)
        //     await base.clearAndType(selector.vendor.vPaymentSettings.rzAccountId, rzAccountId)
        //     await page.click(selector.vendor.vPaymentSettings.rzConnectExistingAccount)
        //  //new account info
        //     await base.clearAndType(selector.vendor.vPaymentSettings.rzAccountName, rzAccountName)
        //     await base.clearAndType(selector.vendor.vPaymentSettings.rzAccountEmail, rzAccountEmail)
        //     await base.clearAndType(selector.vendor.vPaymentSettings.rzYourCompanyName, rzYourCompanyName)
        //     await base.clearAndType(selector.vendor.vPaymentSettings.rzYourCompanyType, rzYourCompanyType)
        //     await base.clearAndType(selector.vendor.vPaymentSettings.rzBankAccountName, rzBankAccountName)
        //     await base.clearAndType(selector.vendor.vPaymentSettings.rzBankAccountNumber, rzBankAccountNumber)
        //     await base.clearAndType(selector.vendor.vPaymentSettings.rzBankIfscCode, rzBankIfscCode)
        //     await base.clearAndType(selector.vendor.vPaymentSettings.rzBankAccountType, rzBankAccountType)
        //     await base.click(selector.vendor.vPaymentSettings.rzConnectAccount)

        //mangopay

        //custom payment method
        await base.clearAndType(selector.vendor.vPaymentSettings.customPayment, customPayment)

        //skrill
        await base.clearAndType(selector.vendor.skrill.email, skrillEmail)

        //update settings
        await page.click(selector.vendor.vPaymentSettings.updateSettings)

    },

    //vendor set verification settings
    async setVerificationSettings() {

    },


    //vendor set delivery settings
    async setDeliveryTimeSettings() {

    },

    //set shipping policies
    async setShippingPolicies(processingTime, shippingPolicy, refundPolicy) {

        await base.click(selector.vendor.vShippingSettings.clickHereToAddShippingPolicies)
        await page.waitForTimeout(5000)
        await page.select(selector.vendor.vShippingSettings.processingTime, processingTime)
        await base.clearAndType(selector.vendor.vShippingSettings.shippingPolicy, shippingPolicy)
        await base.type(selector.vendor.vShippingSettings.refundPolicy, refundPolicy)
        await base.click(selector.vendor.vShippingSettings.shippingPoliciesSaveSettings)

        let successMessage = await base.getSelectorText(selector.vendor.vShippingSettings.updateSettingsSuccessMessage)
        expect(successMessage).toBe('Settings save successfully')

    },

    //vendor set shipping settings
    async setShippingSettings(shippingZone, shippingMethod, selectShippingMethod) {
        await base.click(selector.vendor.vDashboard.settings)
        await base.click(selector.vendor.vSettings.shipping)

        // await this.setShippingPolicies('3', 'shipping policy', 'refund policy')

        // edit shipping zone
        await base.hover(selector.vendor.vShippingSettings.shippingZoneCell(shippingZone))
        await base.clickXpath(selector.vendor.vShippingSettings.editShippingZone(shippingZone))
        await page.waitForTimeout(5000)

        let methodIsVisible = await base.isVisible(page, selector.vendor.vShippingSettings.shippingMethodCell(shippingMethod))
        if (!methodIsVisible) {
            await base.clickXpath(selector.vendor.vShippingSettings.addShippingMethod)
            await page.waitForTimeout(2000)
            await page.select(selector.vendor.vShippingSettings.shippingMethod, selectShippingMethod)
            await page.click(selector.vendor.vShippingSettings.shippingMethodPopupAddShippingMethod)
            await page.waitForTimeout(3000)
        }

        //edit shipping method
        await base.hover(selector.vendor.vShippingSettings.shippingMethodCell(shippingMethod))
        await base.clickXpath(selector.vendor.vShippingSettings.editShippingMethod(shippingMethod))

        switch (selectShippingMethod) {
            case 'flat_rate':
                //flat rate
                await base.clearAndType(selector.vendor.vShippingSettings.flatRateMethodTitle, shippingMethod)
                await page.select(selector.vendor.vShippingSettings.flatRateTaxStatus, 'taxable')
                await base.clearAndType(selector.vendor.vShippingSettings.flatRateCost, '20')
                break

            case 'free_shipping':
                //free shipping
                await base.clearAndType(selector.vendor.vShippingSettings.freeShippingTitle, shippingMethod)
                await base.clearAndType(selector.vendor.vShippingSettings.freeShippingMinimumOrderAmount, '200')
                break

            case 'local_pickup':
                //local pickup
                await base.clearAndType(selector.vendor.vShippingSettings.localPickupTitle, shippingMethod)
                await page.select(selector.vendor.vShippingSettings.localPickupTaxStatus, 'taxable')
                await base.clearAndType(selector.vendor.vShippingSettings.localPickupCost, '20')
                break

            case 'dokan_table_rate_shipping':
                //dokan table rate shipping
                //TODO: add setup
                break

            case 'dokan_distance_rate_shipping':
                //dokan distance rate shipping
                //TODO: add setup
                break

            default:
                break
        }

        await page.click(selector.vendor.vShippingSettings.shippingSettingsSaveSettings)
        await page.waitForTimeout(4000)
        await base.clickXpath(selector.vendor.vShippingSettings.saveChanges)
        await page.waitForTimeout(4000)

        let successMessage = await base.getSelectorText(selector.vendor.vShippingSettings.updateSettingsSuccessMessage)
        expect(successMessage).toBe('Zone settings save successfully ×')

    },

    //vendor set social profile settings
    async setSocialProfile(urls) {
        await base.click(selector.vendor.vDashboard.settings)
        await base.click(selector.vendor.vSettings.socialProfile)

        await base.clearAndType(selector.vendor.vSocialProfileSettings.facebook, urls.facebook)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.twitter, urls.twitter)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.pinterest, urls.pinterest)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.linkedin, urls.linkedin)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.youtube, urls.youtube)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.instagram, urls.instagram)
        await base.clearAndType(selector.vendor.vSocialProfileSettings.flicker, urls.flickr)
        // await page.click(selector.vendor.vSocialProfileSettings.updateSettings) //TODO: save settings button click don't work
        await page.keyboard.press('Enter')

        let successMessage = await base.getSelectorText(selector.vendor.vSocialProfileSettings.updateSettingsSuccessMessage)
        expect(successMessage).toBe('Your information has been saved successfully')
    },

    //vendor set rma settings
    async setRmaSettings(label, type, length, lengthValue, lengthDuration) {
        //TODO: admin need to enable rma settings switch to admin & enable
        await base.click(selector.vendor.vDashboard.settings)
        await base.click(selector.vendor.vSettings.rma)

        await base.clearAndType(selector.vendor.vRmaSettings.label, label)
        await page.waitForTimeout(1000)
        await page.select(selector.vendor.vRmaSettings.type, type)
        await page.waitForTimeout(1000)
        await page.select(selector.vendor.vRmaSettings.length, length)
        await page.waitForTimeout(1000)
        await base.type(selector.vendor.vRmaSettings.lengthValue, lengthValue)
        await page.waitForTimeout(1000)
        await page.select(selector.vendor.vRmaSettings.lengthDuration, lengthDuration)

        let refundReasonIsVisible = await base.isVisible(page, selector.vendor.vRmaSettings.refundReasons)
        if (refundReasonIsVisible) {
            await base.clickMultiple(selector.vendor.vRmaSettings.refundReasons)
        }
        let iframe = await base.switchToIframe(selector.vendor.vRmaSettings.refundPolicyIframe)
        await base.iframeClearAndType(iframe, selector.vendor.vRmaSettings.refundPolicyHtmlBody, 'Refund Policy Vendor')
        await page.click(selector.vendor.vSettings.saveChanges)

        let successMessage = await base.getSelectorText(selector.vendor.vRmaSettings.rmaSaveChanges)
        expect(successMessage).toBe('Settings saved successfully')

    },

    //vendor add vendor details
    async setVendorDetails(firstName, lastName, email, currentPassword, newPassword) {
        await base.clearAndType(selector.vendor.vendorDetails.firstName, firstName)
        await base.clearAndType(selector.vendor.vendorDetails.lastName, lastName)
        await base.clearAndType(selector.vendor.vendorDetails.email, email)
        await page.type(selector.vendor.vendorDetails.currentPassword, currentPassword)
        await page.type(selector.vendor.vendorDetails.NewPassword, newPassword)
        await page.type(selector.vendor.vendorDetails.confirmNewPassword, newPassword)
        await page.click(selector.vendor.vendorDetails.saveChanges)

    },

}
