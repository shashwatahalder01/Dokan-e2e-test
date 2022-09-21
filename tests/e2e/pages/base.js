const { PendingXHR } = require('pending-xhr-puppeteer');


// This page contains all necessary puppeteer automation methods 

// let regexXpath = /^(\/\/|\(\/\/)/
module.exports = {

    // Check Whether Element Is Ready or Not
    async isLocatorReady(selector) {
        let element = await this.getElement(selector)
        const isVisibleHandle = await page.evaluateHandle((element) => {
            const style = window.getComputedStyle(element)
            return (style && style.display !== 'none' &&
                style.visibility !== 'hidden' && style.opacity !== '0')
        }, element)
        var visible = await isVisibleHandle.jsonValue()
        const box = await element.boxModel()
        if (visible && box) {
            return true
        }
        return false
    },

    // Check Whether Element Is Visible or Not
    async isVisible(selector) {
        return await page.evaluate((selector) => {
            let element;
            if (/^(\/\/|\(\/\/)/.test(selector)) {
                element = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
            } else {
                element = document.querySelector(selector)
            }
            if (element) {
                let style = window.getComputedStyle(element)
                return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
            } else {
                return false
            }
        }, selector)
    },

    // Click Element and Wait until Network Idle
    async clickAndWait(selector) {
        let element = await this.getElement(selector)
        await Promise.all([element.click(), page.waitForNavigation({ waitUntil: 'networkidle2' })]) // Consider Navigation to Be Finished When There Are No More than 2 Network Connections for at Least 500 Ms.
        // await Promise.all([element.click(), page.waitForNavigation({ waitUntil: 'networkidle0' })]) // Consider Navigation to Be Finished When There Are No More than 0 Network Connections for at Least 500 Ms.
        // await Promise.all([element.click(), page.waitForNavigation({ waitUntil: 'domcontentloaded' })]) // Consider Navigation to Be Finished When the Domcontentloaded Event Is Fired.
        // await Promise.all([element.click(), page.waitForNavigation({ waitUntil: 'load' })]) // Consider Navigation to Be Finished When the Load Event Is Fired.
        // await Promise.race([element.click(), page.waitForNavigation({ waitUntil: 'networkidle2' })]) // Wait on Both Simultaneously and Handle Whichever Occurs First
    },

    // Click Element and Wait until Network Idle
    async clickAndWaitForResponse(selector) {
        let element = await this.getElement(selector)
        await Promise.all([element.click(), page.waitForResponse(response => response.status() === 200)])
    },

    // Click Element and Wait until Network Idle
    async clickAndWaitForHTMLRendered(selector) {
        let element = await this.getElement(selector)
        await element.click()
        await this.waitTillHTMLRendered(page)
    },


    // Wait for All Xhr Triggered by All the Events of the Page
    async clickAndWaitForAllXhrTest(selector) {
        const pendingXHR = new PendingXHR(page)
        let element = await this.getElement(selector)
        await element.click()
        // console.log(pendingXHR.pendingXhrCount())
        // await pendingXHR.waitForAllXhrFinished()
        // await Promise.all([element.click(), pendingXHR.waitForAllXhrFinished()])

        // await page.waitForNavigation({waitUntil: 'load'})
        // await page.waitForNavigation({waitUntil: 'networkidle0'})

        // await page.waitForFunction(() => document.readyState === "complete")
        // await page.once('load', () => console.log('Page loaded!'));
        // await page.waitForFunction('window.status === "ready"');


        // await this.waitTillHTMLRendered(page) // working
        // console.log("Clicked and waited for response")
    },

    // Wait for All Xhr Triggered by All the Events of the Page with Promise.Race
    async clickAndWaitForAllXhrWithRacePromise(selector) {
        const pendingXHR = new PendingXHR(page)
        let element = await this.getElement(selector)
        await element.click()
        await Promise.race([pendingXHR.waitForAllXhrFinished(), new Promise(resolve => { setTimeout(resolve, 10000) }),]);
    },

    // Wait for All Xhr Triggered by All the Events of the Page
    async clickAndWaitForAllXhr(selector) {
        const pendingXHR = new PendingXHR(page)
        let element = await this.getElement(selector)
        await element.click()
        console.log(pendingXHR.pendingXhrCount())
        await pendingXHR.waitForAllXhrFinished()
        // await Promise.all([element.click(), pendingXHR.waitForAllXhrFinished()])
    },

    // Wait for All Xhr Triggered by an Event of the Page
    async clickAndWaitOnceForAllXhr(selector) {
        const pendingXHR = new PendingXHR(page)
        let element = await this.getElement(selector)
        // await element.click()
        // console.log(pendingXHR.pendingXhrCount())
        // await pendingXHR.waitOnceForAllXhrFinished()
        await Promise.all([element.click(), pendingXHR.waitOnceForAllXhrFinished()])
        await this.wait(0.5)
    },

    // Wait for Element and Then Click
    async click(selector) {
        let element = await this.getElement(selector)
        await element.click()
    },

    // Wait for Element and Then Click by Running the Javascript element.Click() method
    async clickJs(selector) {
        let element = await this.getElement(selector)
        await page.evaluate(el => el.click(), element);
    },


    // Wait for Element and Then Click
    async clickOnly(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            let [element] = await page.$x(selector)
            await element.click() // just click 
        } else {
            let element = await page.$(selector)
            await element.click() // just click 
        }
    },

    // Click If Element Is Visible
    async clickIfVisible(selector) {
        let IsVisible = await this.isVisible(selector)
        if (IsVisible) {
            await this.click(selector)
        }
    },

    // Wait for Element
    async waitForSelector(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            await page.waitForXPath(selector)
        } else {
            await page.waitForSelector(selector)
        }
    },

    // Wait for Element to Visible and Then Click
    async waitVisibleAndClick(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            await page.waitForXPath(selector, { visible: true })
            let [element] = await page.$x(selector)
            await element.click()
        } else {
            await page.waitForSelector(selector, { visible: true })
            let element = await page.$(selector)
            await element.click()
        }
    },

    // Hover on Element
    async hover(selector) {
        let element = await this.getElement(selector)
        await element.hover()
        await this.wait(1)
    },

    // Check Checkbox, If Checked Then Skip
    async check(selector) {
        let element = await this.getElement(selector)
        const isCheckBoxChecked = await (await element.getProperty("checked")).jsonValue()
        if (!isCheckBoxChecked) {
            await element.click()
        }
        else { // If Checked Uncheck Then Check
            await element.click()
            await page.waitForTimeout(10)
            await element.click()
        }
    },

    // Uncheck Checkbox, If Unchecked Then Skip
    async uncheck(selector) {
        let element = await this.getElement(selector)
        const isCheckBoxChecked = await (await element.getProperty("checked")).jsonValue()
        if (isCheckBoxChecked) {
            await element.click()
        }
        else { // if unchecked check then uncheck
            await element.click()
            await page.waitForTimeout(10)
            await element.click()
        }
    },

    // Wait for Select Element Then Set Value Based on Options Value
    async select(selector, value) {
        let element = await this.getElement(selector)
        await element.select(value)
    },

    // Set Value Based on Select Options Text
    async selectOptionByText(selectSelector, optionSelector, textContent) {
        let elements = await page.$$(optionSelector)
        
        for (let element of elements) {  
            const text = await page.evaluate(element => element.textContent, element)
            if (textContent.toLowerCase() == (text.trim()).toLowerCase()) {
                let value = await (await element.getProperty('value')).jsonValue()
                // console.log(value)
                await page.select(selectSelector, value)
            }
        }
    },

    // Or 

    // Set Value Based on Select Options Text 
    async selectByText(selectSelector, optionSelector, text) {
        let optionValue = await page.$$eval(optionSelector, (options, text) => options.find(option => (option.innerText).toLowerCase() === text.toLowerCase())?.value, text)
        await page.select(selectSelector, optionValue);
    },

    // Or 

    // Set Value Based on Select Options Text [N.B. Both Selector Must Be Xpath Selector]
    async selectByText1(selector, opptionSelector) {
        let optionValue = await this.getElementValue(opptionSelector)
        await page.select(selector, optionValue)
    },

    // Click Multiple Elements with Same Selector/Class/Xpath
    async clickMultiple(selector) {
        let elements = await this.getElements(selector)
        for (let element of elements) {
            await element.click()
            await this.wait(0.5)
        }
    },

    // Check Multiple Elements with Same Selector/Class/Xpath
    async checkMultiple(selector) {
        let elements = await this.getElements(selector)
        for (let element of elements) {
            const isCheckBoxChecked = await (await element.getProperty("checked")).jsonValue()
            if (isCheckBoxChecked) {
                await element.click()
                await page.waitForTimeout(10)
                await element.click()
            }
            else {
                await element.click()
            }
        }
    },

    // Media

    // Upload Image via File Chooser
    async uploadImage(selector, image) {
        let element = await this.getElement(selector)
        const [fileChooser] = await Promise.all([page.waitForFileChooser(), element.click()])
        await fileChooser.accept([image])
        await this.wait(5)
    },

    // Navigation

    // Get Base URL
    async getBaseUrl() {
        let url = await page.url()
        //   return url.match(/^https?:\/\/[^#?\/]+/)[0] //using regex
        return new URL(url).origin //using Web API's built-in URL
    },

    // Check Current URL Is Equal to Expected URL, Return Boolean
    async isCurrentURL(subpath) {
        const currentURL = new URL(await page.url())
        return currentURL.href === await this.createURL(subpath)
    },

    // Create a New URL
    async createURL(subPath) {
        // let url = new URL(process.env.BASE_URL)
        // url.pathname = url.pathname + subPath + '/'
        // return url.href
        return process.env.BASE_URL + '/' + subPath + '/'

    },

    // Goto URL It about:Blank Is Loaded
    async goIfBlank(subPath) {
        let blankPage = await page.evaluate(() => window.location.href === 'about:blank')
        if (blankPage) {
            await this.goto(subPath)
        }
    },

    // Goto Suburl If Current URL Is Not Equal to Expected URL
    async goIfNotThere(subPath) {
        if (!await this.isCurrentURL(subPath)) {
            let url = await this.createURL(subPath)
            await Promise.all([page.goto(url), page.waitForNavigation({ waitUntil: 'networkidle2' })])

            let currentUrl = await page.url()
            expect(currentUrl).toMatch(subPath)
        }
    },

    // Goto Suburl
    async goto(subPath) {
        let url = await this.createURL(subPath)
        await Promise.all([page.goto(url), page.waitForNavigation({ waitUntil: 'networkidle2' })])
    },

    // Reload Page and Wait until Network Idle
    async reload() {
        await page.reload({ waitUntil: 'networkidle2' })
    },

    // Element & Element Attribute

    // Get Element Handle for Xpath or Css Selector 
    async getElement(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            await Promise.race([page.waitForXPath(selector), page.waitForNavigation({ waitUntil: "networkidle2" })])
            // await page.waitForXPath(selector)
            let [element] = await page.$x(selector)
            return element
        } else {
            await Promise.race([page.waitForSelector(selector), page.waitForNavigation({ waitUntil: "networkidle2" })])
            // await page.waitForSelector(selector)
            let element = await page.$(selector)
            return element
        }
    },

    // Get Multiple Elements
    async getElements(selector) {
        let elements = await page.$$(selector)
        return elements
    },

    // Get Element Text
    async getElementText(selector) {
        let element = await this.getElement(selector)
        let text = await (await element.getProperty('textContent')).jsonValue()
        // console.log(text.trim())
        return text.trim()
    },

    // Get Element Property Value
    async getElementValue(selector) {
        let element = await this.getElement(selector)
        let value = await (await element.getProperty('value')).jsonValue()
        // console.log(value)
        return value
    },

    // Get Element Property Value: Background Color
    async getElementBackgroundColor(selector) {
        let element = await this.getElement(selector)
        let value = await page.evaluate(element => window.getComputedStyle(element).getPropertyValue('background-color'), element)
        // console.log(value)
        return value
    },

    // Get Element Property Value CSS
    async getElementValueCSS(selector, property) {
        let element = await this.getElement(selector)
        // let value = await page.$eval(element, el => window.getComputedStyle(el).getPropertyValue('background-color'))
        let value = await page.evaluate((element, property) => window.getComputedStyle(element).getPropertyValue(property), element, property)
        // console.log(value)
        return value
    },

    // Get Element Property CSS Values
    async getElementValueCSSAll(selector) {
        let element = await this.getElement(selector)
        let value = await page.evaluate(element => {
            const stylesObject = window.getComputedStyle(element)
            const styles = {}
            for (let property in stylesObject) {
                if (stylesObject.hasOwnProperty(property))
                    styles[property] = stylesObject[property]
            }
            return styles
        }, element)
        // console.log(value)
        return value
    },

    // Get Pseudo Element Style
    async getPseudoElementStyles(selector, pseudoElement, property) {
        let element = await this.getElement(selector)
        let value = await page.evaluate((element, pseudoElement, property) => {
            let stylesObject = window.getComputedStyle(element, '::' + pseudoElement)
            let style = stylesObject.getPropertyValue(property)
            return style
        }, element, pseudoElement, property)
        return value
    },

    // Get Element Class Value
    async getElementClassValue(selector) {
        let element = await this.getElement(selector)
        let classValue = await (await element.getProperty('className')).jsonValue()
        // console.log(classValue)
        return classValue
    },

    // Get Element Attribute Value
    async getElementAttributeValue(selector, attribute) {
        let element = await this.getElement(selector)
        let value = await (await element.getProperty(attribute)).jsonValue()
        // console.log(value)
        return value
    },

    // Get Element Attribute Value
    async setElementAttributeValue(selector, attribute, value) {
        // await page.$eval(selector, (element, attribute, value) => element.setAttribute(attribute, value), attribute, value)
        let element = await this.getElement(selector)
        await page.evaluate((element, attribute, value) => element.setAttribute(attribute, value), element, attribute, value)
    },

    // Set Element Value
    async setElementValue(selector, value) {
        let element = await this.getElement(selector)
        await page.evaluate((element, value) => element.value = value, element, value)
    },

    // Remove Element Attribute
    async removeElementAttribute(selector, attribute) {
        let element = await this.getElement(selector)
        await page.evaluate((element, attribute) => element.removeAttribute(attribute), element, attribute)
    },

    // Get Element Count
    async getElementCount(selector) {
        let elements = await page.$$(selector)
        let length = elements.length
        // console.log(length)
        return length
    },

    // Or
    async getCount(selector) {
        let count = await page.$$eval(selector, element => element.length)
        // console.log(count)
        return count
    },

    // Get Dropdown Options  Span Dropdown
    async getDropdownOptions(selector) {
        let elements = await page.$$(selector)
        let options = []
        for (let element of elements) {
            const text = await page.evaluate(element => element.textContent, element)
            options.push(text)
            // console.log(text)
        }
        return options
    },

    // Or
    async getMultipleElementTexts(selector) {
        let texts = await page.$$eval(selector, elements => elements.map(item => item.textContent))
        // console.log(texts)
        return texts
    },

    // Set Dropdown Option  Span Dropdown
    async setDropdownOptionSpan(selector, value) {
        let elements = await page.$$(selector)
        for (let element of elements) {
            const text = await page.evaluate(element => element.textContent, element)
            // console.log(text)
            if (value.toLowerCase() == (text.trim()).toLowerCase()) {
                // console.log(text)
                await element.click()
            }
        }
    },

    // Clear Input Field
    async clearInputField(selector) {
        let element = await this.getElement(selector)
        await page.evaluate(element => element.value = '', element)
    },

    // Or
    async clearInputField1(selector) {
        let element = await this.getElement(selector)
        await element.click({ clickCount: 3 })
        await page.keyboard.press('Backspace')
    },

    // Type
    async type(selector, value) {
        let element = await this.getElement(selector)
        await element.type(value)
    },

    // Clear Input Field and Type 
    async clearAndType(selector, value) {
        let element = await this.getElement(selector)
        await page.evaluate(element => element.value = '', element)
        await element.type(value)
    },

    // Or
    async clearAndType1(selector, value) {
        let element = await this.getElement(selector)
        await element.click({ clickCount: 3 })
        await page.keyboard.press('Backspace')
        await element.type(value)
    },

    // Or
    async clearAndType2(selector, value) {
        await page.$eval(selector, element => element.value = '')
        await page.type(selector, value)
    },

    // Press Key
    async press(key) {
        await page.keyboard.press(key)
    },

    // Scroll to Top
    async scrollToTop() {
        await page.evaluate(() => { window.scroll(0, 0); });

    },

    // Scroll Element into View
    async scrollIntoView(selector) {  //TODO: doesn't work
        let element = await this.getElement(selector)
        await page.evaluate(element => element.scrollIntoView(), element)
    },

    // Close Single Tab
    async closeSingleTab() {
        await page.close()
    },

    // Close All Tab I.E. Close Browser
    async closeAllTab() {
        await browser.close()
    },

    // Iframe

    // Iframe: Switch to Iframe
    async switchToIframe(selector) {
        const frameHandle = await this.getElement(selector)
        const iframe = await frameHandle.contentFrame()
        return iframe
    },

    // Iframe: Get Element Handle for Xpath or Css Selector 
    async getIframeElement(iframe, selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            await iframe.waitForXPath(selector)
            let [element] = await iframe.$x(selector)
            return element
        } else {
            await iframe.waitForSelector(selector)
            let element = await iframe.$(selector)
            return element
        }
    },

    // Iframe: Click Element
    async iframeClick(iframe, selector) {
        let element = await this.getIframeElement(iframe, selector)
        await element.click()

    },

    // Iframe: Clear and Type Iframe Input Element 
    async iframeClearAndType(iframe, selector, value) {
        await iframe.$eval(selector, element => element.textContent = '')
        // await iframe.$eval(selector, element => element.value = '')
        await iframe.type(selector, value)
    },

    // Handle Alert
    async alert(action) {
        page.on('dialog', async dialog => {
            // console.log(dialog.message())
            if (action == 'accept') {
                await dialog.accept()
            } else if (action == 'cancel') {
                await dialog.dismiss()
            }
        })
    },

    async alertWithValue(value) {//TODO: don't work fix this
        page.on('dialog', async dialog => {
            // console.log(dialog.message())
            // await dialog.accept()
        })
        page.evaluate(() => alert('500'))
    },
    //     class: Dialog   //TODO: implement this dialog class
    // dialog.accept([promptText])
    // dialog.defaultValue()
    // dialog.dismiss()
    // dialog.message()
    // dialog.type()


    // Get Page Content
    async getPageContent() {
        return await page.content()
    },

    // Get Page Title
    async getPageTitle() {
        return await page.title()
    },

    // Timeout
    async wait(seconds) {
        await page.waitForTimeout(seconds * 1000)
    },

    // Wait for Navigation
    async waitForNavigation() {
        await page.waitForNavigation({ waitUntil: 'networkidle2' })
    },




    // Dokan Specific Functions 

    // Enable Switch : Dokan Setup Wizard
    // async enableSwitcherSetupWizard(selector) {
    //     let value = await this.getElementBackgroundColor(selector + '//span')
    //     if (value == 'on') {
    //         await this.click(selector)
    //         await this.click(selector)
    //     } else {
    //         await this.click(selector)
    //     }
    // },

    // Enable Switch or Checkbox: Dokan Setup Wizard
    async enableSwitcherSetupWizard(selector) {
        let IsVisible = await this.isVisible(selector)
        if (IsVisible) {
            let element = await this.getElement(selector)
            await element.focus()
            let value = await this.getPseudoElementStyles(selector, 'before', 'background-color')
            // console.log('before', value)
            // rgb(251, 203, 196) for switcher & rgb(242, 98, 77) for checkbox
            if ((value.includes('rgb(251, 203, 196)')) || (value.includes('rgb(242, 98, 77)'))) {
                // console.log('if:', selector)
                await page.evaluate(el => el.click(), element)
                await this.wait(0.3)
                await page.evaluate(el => el.click(), element)
            } else {
                // console.log('else:', selector)
                await page.evaluate(el => el.click(), element)
            }
        }
    },

    // Enable Switch or Checkbox: Dokan Setup Wizard
    async disableSwitcherSetupWizard(selector) {
        let IsVisible = await this.isVisible(selector)
        if (IsVisible) {
            let element = await this.getElement(selector)
            await element.focus()
            let value = await this.getPseudoElementStyles(selector, 'before', 'background-color')
            // console.log('before', value)
            // rgb(251, 203, 196) for switcher & rgb(242, 98, 77) for checkbox
            if ((value.includes('rgb(251, 203, 196)')) || (value.includes('rgb(242, 98, 77)'))) {
                // console.log('if:', selector)
                await page.evaluate(el => el.click(), element)
            } else {
                // console.log('else:', selector)
                await page.evaluate(el => el.click(), element)
                await this.wait(0.3)
                await page.evaluate(el => el.click(), element)
            }
        }
    },

    // Admin Enable Switcher , If Enabled Then Skip : Admin Settings Switcher
    async enableSwitcher(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            selector = selector + '//span'
        } else {
            selector = selector + ' span'
        }
        let value = await this.getElementBackgroundColor(selector)
        if (!value.includes('rgb(0, 144, 255)')) {
            await this.click(selector)
        }

    },

    // Admin Disable Switcher , If Disabled Then Skip : Admin Settings Switcher
    async disableSwitcher(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            selector = selector + '//span'
        } else {
            selector = selector + ' span'
        }
        let value = await this.getElementBackgroundColor(selector)
        if (value.includes('rgb(0, 144, 255)')) {
            await this.click(selector)
        }
    },

    // Admin Enable Payment Methods via Slider
    async enablePaymentMethod(selector) {
        let classValueBefore = await this.getElementClassValue(selector)
        if (classValueBefore.includes('woocommerce-input-toggle--disabled')) {
            await this.click(selector)
            await this.wait(2)
        }
        // else {
        //   await this.click(selector)
        //   await this.wait(2)
        //   await this.click(selector)
        //   await this.wait(2)
        // }

        let classValueAfter = await this.getElementClassValue(selector)
        expect(classValueAfter).toContain('woocommerce-input-toggle--enabled')
    },


    // Delete Element If Exist (Only First Will Delete) dokan Specific :Rma,Report Abuse
    async deleteIfExists(selector) { //TODO: there may be alternative solution, this method might not needed
        let elementExists = await this.isVisible(selector)
        if (elementExists) {
            let [element] = await page.$x(selector)
            await element.click()
        }
    },

    // Delete element if exist until all instance deleted
    // async deleteListElement(selector, value) {
    //     let elements = await page.$$(selector)
    //     for (let element of elements) {
    //         const text = await page.evaluate(element => element.textContent, element)
    //         var children = await page.$x(element)
    //         console.log(children)
    // console.log(text)
    // if (value.toLowerCase() == (text.trim()).toLowerCase()) {
    // console.log(text)
    // await element.click()
    //     console.log(element.childNodes.length)
    // }
    //     }
    // },

    // Check for Php Error
    async checkPHPError() {
        // let pageContent = await page.content()
        // let pageContent = pageContent.toLowerCase()  
        let pageContent = await page.content()

        if ((pageContent.includes("PHP Warning:")) || (pageContent.includes("Fatal error:")) || (pageContent.includes("PHP Notice:"))) {
            await page.screenshot({ path: 'artifacts/phpError' + Date.now() + '.png', fullPage: true })
            throw new Error("PHP Error!!")
        }
    },

    // Check If Page Not Exits
    async checkPageNotExist() {
        let pageContent = await page.content()

        if (pageContent.includes('Oops! That page can\'t be found.')) {
            await page.screenshot({ path: 'e2e/artifacts/screenshot/pageNotExists' + Date.now() + '.png', fullPage: true })
            //TODO: save permalink
        }
    },


    // Upload Image
    async wpUploadFile(filePath) {
        //wp image upload
        let wpUploadFiles = "//div[@class='supports-drag-drop' and @style='position: relative;']//button[@id='menu-item-upload']"
        let uploadedMedia = ".attachment-preview"
        let selectFiles = "//div[@class='supports-drag-drop' and @style='position: relative;']//button[@class='browser button button-hero']"
        let select = "//div[@class='supports-drag-drop' and @style='position: relative;']//button[contains(@class, 'media-button-select')]"
        let crop = "//div[@class='supports-drag-drop' and @style='position: relative;']//button[contains(@class, 'media-button-insert')]"
        await this.wait(1)
        let uploadedMediaIsVisible = await this.isVisible(uploadedMedia)
        if (uploadedMediaIsVisible) {
            await this.click(wpUploadFiles)
            // await page.click(uploadedMedia)   
            await this.wait(1)
        }
        // else {
        await this.uploadImage(selectFiles, filePath)
        await this.click(select)
        await this.wait(2)
        let cropIsVisible = await this.isVisible(crop)
        if (cropIsVisible) {
            await this.click(crop)
            await this.wait(3)
        }
        // }
    },

    // Upload Image If No Image Is Uploaded
    async wpUploadFileIfNotUploaded(filePath) {
        // Wp Image Upload
        let wpUploadFiles = "//div[@class='supports-drag-drop' and @style='position: relative;']//button[@id='menu-item-upload']"
        let uploadedMedia = ".attachment-preview"
        let selectFiles = "//div[@class='supports-drag-drop' and @style='position: relative;']//button[@class='browser button button-hero']"
        let select = "//div[@class='supports-drag-drop' and @style='position: relative;']//button[contains(@class, 'media-button-select')]"
        let crop = "//div[@class='supports-drag-drop' and @style='position: relative;']//button[contains(@class, 'media-button-insert')]"

        let uploadedMediaIsVisible = await this.isVisible(uploadedMedia)
        if (uploadedMediaIsVisible) {
            // await page.click(wpUploadFiles)
            await page.click(uploadedMedia)
            await this.wait(1)
        }
        else {
            await this.uploadImage(selectFiles, filePath)
            await this.click(select)
            await this.wait(1)
            let cropIsVisible = await this.isVisible(crop)
            if (cropIsVisible) {
                await this.click(crop)
                await this.wait(1)
            }
        }
    },

    // Remove Previous Uploaded Image If Exists
    async removePreviousUploadedImage(previousUploadedImageSelector, removePreviousUploadedImageSelector) {
        let previousUploadedImageIsVisible = await this.isVisible(previousUploadedImageSelector)
        if (previousUploadedImageIsVisible) {
            await this.hover(previousUploadedImageSelector)
            await page.click(removePreviousUploadedImageSelector)
            await this.wait(2)
        }
    },

    // Get Wordpress Current User
    async getCurrentUser() {
        const cookies = await page.cookies()
        const cookie = cookies.find(c => {
            var _c$name
            return !!(c !== null && c !== void 0 && (_c$name = c.name) !== null && _c$name !== void 0 && _c$name.startsWith('wordpress_logged_in_'))
        })
        if (!(cookie !== null && cookie !== void 0 && cookie.value)) {
            return
        }
        return decodeURIComponent(cookie.value).split('|')[0]
    },


    // Wait Till Html Rendered
    async waitTillHTMLRendered(page, timeout = 30000) {
        const checkDurationMsecs = 1000;
        const maxChecks = timeout / checkDurationMsecs;
        let lastHTMLSize = 0;
        let checkCounts = 1;
        let countStableSizeIterations = 0;
        const minStableSizeIterations = 3;

        while (checkCounts++ <= maxChecks) {
            let html = await page.content();
            let currentHTMLSize = html.length;

            let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

            console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);

            if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
                countStableSizeIterations++;
            else
                countStableSizeIterations = 0; //reset the counter

            if (countStableSizeIterations >= minStableSizeIterations) {
                console.log("Page rendered fully..");
                break;
            }
            lastHTMLSize = currentHTMLSize;
            await page.waitFor(checkDurationMsecs);
        }
    },

}


