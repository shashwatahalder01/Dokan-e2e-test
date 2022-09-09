const { PendingXHR } = require('pending-xhr-puppeteer');


// This page contains all necessary puppeteer automation methods 

// let regexXpath = /^(\/\/|\(\/\/)/
module.exports = {

    // Check whether element is ready or not
    async isLocatorReady(selector) {
        let element = await this.getElement(selector)
        const isVisibleHandle = await page.evaluateHandle((element) => {
            const style = window.getComputedStyle(element)
            return (style && style.display !== 'none' &&
                style.visibility !== 'hidden' && style.opacity !== '0')
        }, el)
        var visible = await isVisibleHandle.jsonValue()
        const box = await element.boxModel()
        if (visible && box) {
            return true
        }
        return false
    },

    // Check whether element is visible or not
    async isVisible(selector) {
        return await page.evaluate((selector) => {
            if (/^(\/\/|\(\/\/)/.test(selector)) {
                var element = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
            } else {
                var element = document.querySelector(selector)
            }
            if (element) {
                let style = window.getComputedStyle(element)
                return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
            } else {
                return false
            }
        }, selector)
    },

    // Click element and wait until network idle
    async clickAndWait(selector) {
        let element = await this.getElement(selector)
        await Promise.all([element.click(), page.waitForNavigation({ waitUntil: 'networkidle2' })]) // consider navigation to be finished when there are no more than 2 network connections for at least 500 ms.
        // await Promise.all([element.click(), page.waitForNavigation({ waitUntil: 'networkidle0' })]) // consider navigation to be finished when there are no more than 0 network connections for at least 500 ms.
        // await Promise.all([element.click(), page.waitForNavigation({ waitUntil: 'domcontentloaded' })]) // consider navigation to be finished when the DOMContentLoaded event is fired.
        // await Promise.all([element.click(), page.waitForNavigation({ waitUntil: 'load' })]) // consider navigation to be finished when the load event is fired.
        // await Promise.race([element.click(), page.waitForNavigation({ waitUntil: 'networkidle2' })]) //wait on both simultaneously and handle whichever occurs first
    },

    // Click element and wait until network idle
    async clickAndWaitForResponse(selector) {
        let element = await this.getElement(selector)
        // page.waitForRequest() // TODO: implement this
        await Promise.all([element.click(), page.waitForResponse(response => response.status() === 200)])
    },

    // Click element and wait until network idle
    async clickAndWaitForHTMLRendered(selector) {
        let element = await this.getElement(selector)
        await element.click()
        await this.waitTillHTMLRendered(page)
    },


    // Wait for all xhr triggered by all the events of the page
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

    // Wait for all xhr triggered by all the events of the page with promise.race
    async clickAndWaitForAllXhrWithRacePromise(selector) {
        const pendingXHR = new PendingXHR(page)
        let element = await this.getElement(selector)
        await element.click()
        await Promise.race([pendingXHR.waitForAllXhrFinished(), new Promise(resolve => { setTimeout(resolve, 10000) }),
        ]);
    },

    // Wait for all xhr triggered by all the events of the page
    async clickAndWaitForAllXhr(selector) {
        const pendingXHR = new PendingXHR(page)
        let element = await this.getElement(selector)
        await element.click()
        console.log(pendingXHR.pendingXhrCount())
        await pendingXHR.waitForAllXhrFinished()
        // await Promise.all([element.click(), pendingXHR.waitForAllXhrFinished()])
    },

    // Wait for all xhr triggered by an event of the page
    async clickAndWaitOnceForAllXhr(selector) {
        const pendingXHR = new PendingXHR(page)
        let element = await this.getElement(selector)
        // await element.click()
        // console.log(pendingXHR.pendingXhrCount())
        // await pendingXHR.waitOnceForAllXhrFinished()
        await Promise.all([element.click(), pendingXHR.waitOnceForAllXhrFinished()])
        await this.wait(0.5)
    },

    // Wait for element and then click
    async click(selector) {
        let element = await this.getElement(selector)
        await element.click()
    },

    // Wait for element and then click by running the JavaScript HTMLElement.click() method
    async clickJs(selector) {
        let element = await this.getElement(selector)
        await page.evaluate(el => el.click(), element);
    },


    // Wait for element and then click
    async clickOnly(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            let [element] = await page.$x(selector)
            await element.click() // just click 
        } else {
            let element = await page.$(selector)
            await element.click() // just click 
        }
    },

    // Click if element is visible
    async clickIfVisible(selector) {
        let IsVisible = await this.isVisible(selector)
        if (IsVisible) {
            await this.click(selector)
        }
    },

    // Wait for element
    async waitForSelector(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            await page.waitForXPath(selector)
        } else {
            await page.waitForSelector(selector)
        }
    },

    // Wait for element to visible and then click
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

    // Hover on element
    async hover(selector) {
        let element = await this.getElement(selector)
        await element.hover()
        await this.wait(1)
    },

    // Check checkbox, if checked then skip
    async check(selector) {
        let element = await this.getElement(selector)
        const isCheckBoxChecked = await (await element.getProperty("checked")).jsonValue()
        if (!isCheckBoxChecked) {
            await element.click()
        }
        else { // if checked uncheck then check
            await element.click()
            await page.waitForTimeout(10)
            await element.click()
        }
    },

    // Uncheck checkbox, if unchecked then skip
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

    // Wait for select element then set value based on options value
    async select(selector, value) {
        let element = await this.getElement(selector)
        await element.select(value)
    },

    // Set value based on select options text
    async selectOptionByText(selectSelector, OptionSelector, textContent) {
        let elements = await page.$$(OptionSelector)

        for (let element of elements) {
            const text = await page.evaluate(element => element.textContent, element)
            if (textContent.toLowerCase() == (text.trim()).toLowerCase()) {
                let value = await (await element.getProperty('value')).jsonValue()
                // console.log(value)
                await page.select(selectSelector, value)
            }
        }
    },

    // or 

    // Set value based on select options text  optimize version
    async selectByText(selector, text) {  // TODO: don't work for text ,fix this
        // let optionValue = await page.$$eval('option', options => options.find(o => o.innerText == text)?.value)
        let optionValue = await page.$$eval('option', options => options.find(o => o.innerText === 'NYshop')?.value) //TODO:working

        var currentPageNo = "100"
        await page.$eval('div.panel-footer', (e, no) => e.setAttribute("data-page", no), currentPageNo)

        // console.log(optionValue)
        // await page.select(selector, optionValue)

        // await page.evaluate((selector,text) => {
        //     const example = document.querySelector(selector)
        //     const example_options = example.querySelectorAll('option')
        //     const selected_option = [...example_options].find(option => option.text === text)
        //     selected_option.selected = true
        // })

        // await page.evaluate(() => { $(`${selector} option:contains('${text}')`)[0].selected = true })
    },

    // Click multiple elements with same selector/class/xpath
    async clickMultiple(selector) {
        let elements = await this.getElements(selector)
        for (let element of elements) {
            await element.click()
            await this.wait(0.5)
        }
    },

    // Check multiple elements with same selector/class/xpath
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

    // Upload image via file chooser
    async uploadImage(selector, image) {
        let element = await this.getElement(selector)
        const [fileChooser] = await Promise.all([page.waitForFileChooser(), element.click()])
        await fileChooser.accept([image])
        await this.wait(5)
    },

    // Navigation

    // Get base url
    async getBaseUrl() {
        let url = await page.url()
        //   return url.match(/^https?:\/\/[^#?\/]+/)[0] //using regex
        return new URL(url).origin //using Web API's built-in URL
    },

    // Check current url is equal to expected url, return boolean
    async isCurrentURL(subpath) {
        const currentURL = new URL(await page.url())
        return currentURL.href === await this.createURL(subpath)
    },

    // Create a new url
    async createURL(subPath) {
        // let url = new URL(process.env.BASE_URL)
        // url.pathname = url.pathname + subPath + '/'
        // return url.href
        return process.env.BASE_URL + '/' + subPath + '/'

    },

    // Goto url it about:blank is loaded
    async goIfBlank(subPath) {
        let blankPage = await page.evaluate(() => { return window.location.href === 'about:blank' })
        if (blankPage) {
            await this.goto(subPath)
        }
    },

    // Goto subUrl if current url is not equal to expected url
    async goIfNotThere(subPath) {
        if (!await this.isCurrentURL(subPath)) {
            let url = await this.createURL(subPath)
            await Promise.all([page.goto(url), page.waitForNavigation({ waitUntil: 'networkidle2' })])
        }
    },

    // Goto subUrl
    async goto(subPath) {
        let url = await this.createURL(subPath)
        await Promise.all([page.goto(url), page.waitForNavigation({ waitUntil: 'networkidle2' })])
    },

    // Reload page and wait until network idle
    async reload() {
        await page.reload({ waitUntil: 'networkidle2' })
    },

    // Element & element attribute

    // Get element handle for xpath or css selector 
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

    // Get multiple elements
    async getElements(selector) {
        let elements = await page.$$(selector)
        return elements
    },

    // Get element text
    async getElementText(selector) {
        let element = await this.getElement(selector)
        let text = await (await element.getProperty('textContent')).jsonValue()
        // console.log(text.trim())
        return text.trim()
    },

    // Get element property value
    async getElementValue(selector) {
        let element = await this.getElement(selector)
        let value = await (await element.getProperty('value')).jsonValue()
        // console.log(value)
        return value
    },

    // Get element property value: background color
    async getElementBackgroundColor(selector) {
        let element = await this.getElement(selector)
        let value = await page.evaluate(element => window.getComputedStyle(element).getPropertyValue('background-color'), element)
        // console.log(value)
        return value
    },

    // Get element property value CSS
    async getElementValueCSS(selector, property) {
        let element = await this.getElement(selector)
        // let value = await page.$eval(element, el => window.getComputedStyle(el).getPropertyValue('background-color'))
        let value = await page.evaluate((element, property) => window.getComputedStyle(element).getPropertyValue(property), element, property)
        // console.log(value)
        return value
    },

    // Get element property CSS values
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

    // Get pseudo element style
    async getPseudoElementStyles(selector, pseudoElement, property) {
        let element = await this.getElement(selector)
        let value = await page.evaluate((element, pseudoElement, property) => {
            let stylesObject = window.getComputedStyle(element, '::' + pseudoElement)
            let style = stylesObject.getPropertyValue(property)
            return style
        }, element, pseudoElement, property)
        return value
    },

    // Get element class value
    async getElementClassValue(selector) {
        let element = await this.getElement(selector)
        let classValue = await (await element.getProperty('className')).jsonValue()
        // console.log(classValue)
        return classValue
    },

    // Get element attribute value
    async getElementAttributeValue(selector, attribute) {
        let element = await this.getElement(selector)
        let value = await (await element.getProperty(attribute)).jsonValue()
        // console.log(value)
        return value
    },

    // Get element attribute value
    async setElementAttributeValue(selector, attribute, value) {
        // await page.$eval(selector, (element, attribute, value) => element.setAttribute(attribute, value), attribute, value)
        let element = await this.getElement(selector)
        await page.evaluate((element, attribute, value) => element.setAttribute(attribute, value), element, attribute, value)
    },

    // Set element value
    async setElementValue(selector, value) {
        let element = await this.getElement(selector)
        await page.evaluate((element, value) => element.value = value, element, value)
    },

    // Remove element attribute
    async removeElementAttribute(selector, attribute) {
        // await page.evaluate(document.getElementsById(selector).removeAttribute(attribute))
        let element = await this.getElement(selector)
        await page.evaluate((element, attribute) => element.removeAttribute(attribute), element, attribute)
    },

    // Get element count
    async getElementCount(selector) {
        let elements = await page.$$(selector)
        let length = elements.length
        // console.log(length)
        return length
    },

    // or
    async getCount(selector) {
        let count = await page.$$eval(selector, element => element.length)
        // console.log(count)
        return count
    },

    // Get dropdown options  span dropdown
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

    // or
    async getMultipleElementTexts(selector) {
        let texts = await page.$$eval(selector, elements => elements.map(item => item.textContent))
        // console.log(texts)
        return texts
    },

    // Set dropdown option  span dropdown
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

    // Clear input field
    async clearInputField(selector) {
        let element = await this.getElement(selector)
        await page.evaluate(element => element.value = '', element)
    },

    // or
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

    // Clear input field and type 
    async clearAndType(selector, value) {
        let element = await this.getElement(selector)
        await page.evaluate(element => element.value = '', element)
        await element.type(value)
    },

    //or
    async clearAndType1(selector, value) {
        let element = await this.getElement(selector)
        await element.click({ clickCount: 3 })
        await page.keyboard.press('Backspace')
        await element.type(value)
    },

    //or
    async clearAndType2(selector, value) {
        await page.$eval(selector, element => element.value = '')
        await page.type(selector, value)
    },

    // Press key
    async press(key) {
        await page.keyboard.press(key)
    },

    // Scroll to top
    async scrollToTop() {
        await page.evaluate(() => { window.scroll(0, 0); });

    },

    // Scroll element into view
    async scrollIntoView(selector) {  //TODO: doesn't work
        let element = await this.getElement(selector)
        await page.evaluate(element => element.scrollIntoView(), element)
    },

    // Close single tab
    async closeSingleTab() {
        await page.close()
    },

    // Close all tab i.e. close browser
    async closeAllTab() {
        await browser.close()
    },

    // Switch to another tab
    async switchTab() { },//TODO: add this

    // Open link in new tab
    async openInNewTab() { //TODO: correct this
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        // await browser.newPage() 
        // const page2 = await browser.newPage()        // open new tab
        // await page2.bringToFront() 
        // const page = page2
    },

    // Iframe

    // Iframe: Switch to iframe
    async switchToIframe(selector) {
        const frameHandle = await this.getElement(selector)
        const iframe = await frameHandle.contentFrame()
        return iframe
    },

    // Iframe: Get element handle for xpath or css selector 
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

    // Iframe: Click element
    async iframeClick(iframe, selector) {
        let element = await this.getIframeElement(iframe, selector)
        await element.click()

    },

    // Iframe: Clear and type iframe input element 
    async iframeClearAndType(iframe, selector, value) {
        await iframe.$eval(selector, element => element.textContent = '')
        // await iframe.$eval(selector, element => element.value = '')
        await iframe.type(selector, value)
    },

    // Handle alert
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


    // Get page content
    async getPageContent() {
        return await page.content()
    },

    // Get page title
    async getPageTitle() {
        return await page.title()
    },

    // Timeout
    async wait(seconds) {
        await page.waitForTimeout(seconds * 1000)
    },

    // Wait for navigation
    async waitForNavigation() {
        await page.waitForNavigation({ waitUntil: 'networkidle2' })
    },

    //TODO: add function for grab console error
    //TODO: use event console.error



    //---------------------------------------------- Dokan specific functions ------------------------------------//

    // enable switch : dokan setup wizard
    // async enableSwitcherSetupWizard(selector) {
    //     let value = await this.getElementBackgroundColor(selector + '//span')
    //     if (value == 'on') {
    //         await this.click(selector)
    //         await this.click(selector)
    //     } else {
    //         await this.click(selector)
    //     }
    // },

    // Enable switch or checkbox: dokan setup wizard
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

    // Enable switch or checkbox: dokan setup wizard
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

    // Admin enable switcher , if enabled then skip : admin settings switcher
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

    // Admin disable switcher , if disabled then skip : admin settings switcher
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

    // Admin enable payment methods via slider
    async enablePaymentMethod(selector) {
        let classValueBefore = await base.getElementClassValue(selector)
        if (classValueBefore.includes('woocommerce-input-toggle--disabled')) {
            await base.click(selector)
            await base.wait(2)
        }
        // else {
        //   await base.click(selector)
        //   await base.wait(2)
        //   await base.click(selector)
        //   await base.wait(2)
        // }

        let classValueAfter = await base.getElementClassValue(selector)
        expect(classValueAfter).toContain('woocommerce-input-toggle--enabled')
    },


    // Delete element if exist (only first will delete) dokan specific :rma,report abuse
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

    // Check for php error
    async checkPHPError() {
        // let pageContent = await page.content()
        // let pageContent = pageContent.toLowerCase()  
        let pageContent = await page.content()

        if ((pageContent.includes("PHP Warning:")) || (pageContent.includes("Fatal error:")) || (pageContent.includes("PHP Notice:"))) {
            await page.screenshot({ path: 'artifacts/phpError' + Date.now() + '.png', fullPage: true })
            throw new Error("PHP Error!!")
        }
    },

    // Check if page not exits
    async checkPageNotExist() {
        let pageContent = await page.content()

        if (pageContent.includes('Oops! That page can\'t be found.')) {
            await page.screenshot({ path: 'e2e/artifacts/screenshot/pageNotExists' + Date.now() + '.png', fullPage: true })
            //TODO: save permalink
        }
    },


    // Upload image
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

    // Upload image if no image is uploaded
    async wpUploadFileIfNotUploaded(filePath) {
        //wp image upload
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

    // Remove previous uploaded image if exists
    async removePreviousUploadedImage(previousUploadedImageSelector, removePreviousUploadedImageSelector) {
        let previousUploadedImageIsVisible = await this.isVisible(previousUploadedImageSelector)
        if (previousUploadedImageIsVisible) {
            await this.hover(previousUploadedImageSelector)
            await page.click(removePreviousUploadedImageSelector)
            await this.wait(2)
        }
    },

    // Get wordpress current user
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


    // Wait till HTML Rendered
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


