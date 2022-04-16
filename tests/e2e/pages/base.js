require('dotenv').config()
// This page contains all necessary puppeteer automation methods 

let regexXpath = /^(\/\/|\(\/\/)/
module.exports = {

    //check whether element is ready or not
    async isLocatorReady(selector, page) {
        const isVisibleHandle = await page.evaluateHandle((e) => {
            const style = window.getComputedStyle(e)
            return (style && style.display !== 'none' &&
                style.visibility !== 'hidden' && style.opacity !== '0')
        }, selector)
        var visible = await isVisibleHandle.jsonValue()
        const box = await selector.boxModel()
        if (visible && box) {
            return true
        }
        return false
    },

    //check whether element is visible or not
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

    //click element and wait until network idle
    async clickAndWait(selector) {
        let element = await this.getElement(selector)
        await Promise.all([await element.click(), page.waitForNavigation({ waitUntil: 'networkidle2' })]) //wait for network idle
        // await Promise.all([await element.click(), page.waitForNavigation({ waitUntil: 'networkidle0' })]) //wait for network idle
        // await Promise.all([await element.click(), page.waitForNavigation({ waitUntil: 'domcontentloaded' })]) //wait util dom content loaded
        // await Promise.race([await element.click(), page.waitForNavigation({ waitUntil: 'networkidle2' })]) //wait on both simultaneously and handle whichever occurs first
    },

    //wait for element and then click
    async click(selector) {
        let element = await this.getElement(selector)
        await element.click()
    },

    //wait for element and then click
    async clickOnly(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            let [element] = await page.$x(selector)
            await element.click() // just click 
        } else {
            let element = await page.$(selector)
            await element.click() // just click 
        }
    },

    //click if element is visible
    async clickIfVisible(selector) {
        let IsVisible = await this.isVisible(selector)
        if (IsVisible) {
            await this.click(selector)
        }
    },

    //wait for element
    async waitForSelector(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            await page.waitForXPath(selector)
        } else {
            await page.waitForSelector(selector)
        }
    },

    //wait for element to visible and then click
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

    //hover on element
    async hover(selector) {
        let element = await this.getElement(selector)
        await element.hover()
        await this.wait(1)
    },

    //check checkbox, if checked then skip
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

    // uncheck checkbox, if unchecked then skip
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

    //wait for select element then set value based on options value
    async select(selector, value) {
        let element = await this.getElement(selector)
        await element.select(value)
    },

    //set value based on select options text
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

    //set value based on select options text  optimize version
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

    //click multiple elements with same selector/class/xpath
    async clickMultiple(selector) {
        let elements = await this.getElements(selector)
        for (let element of elements) {
            await element.click()
            await this.wait(0.5)
        }
    },

    //check multiple elements with same selector/class/xpath
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

    // media

    //upload image via file chooser
    async uploadImage(selector, image) {
        let element = await this.getElement(selector)
        const [fileChooser] = await Promise.all([page.waitForFileChooser(), element.click()])
        await fileChooser.accept([image])
        await this.wait(3)
    },

    // Navigation

    //get base url
    async getBaseUrl() {
        let url = await page.url()
        //   return url.match(/^https?:\/\/[^#?\/]+/)[0] //using regex
        return new URL(url).origin //using Web API's built-in URL
    },

    // check current url is equal to expected url, return boolean
    async isCurrentURL(subpath) {
        const currentURL = new URL(await page.url())
        return currentURL.href === await this.createURL(subpath)
    },

    // create a new url
    async createURL(subPath) {
        let url = new URL(process.env.BASE_URL)
        url.pathname = url.pathname + subPath + '/'
        return url.href
    },

    //goto subUrl if current url is not equal to expected url
    async goIfNotThere(subPath) {
        if (!await this.isCurrentURL(subPath)) {
            let url = await this.createURL(subPath)
            await Promise.all([page.goto(url), page.waitForNavigation({ waitUntil: 'networkidle2' })])
        }
    },

    //goto subUrl
    async goto(subPath) {
        let url = await this.createURL(subPath)
        await Promise.all([page.goto(url), page.waitForNavigation({ waitUntil: 'networkidle2' })])
    },

    //reload page and wait until network idle
    async reload() {
        await page.reload({ waitUntil: 'networkidle2' })
    },

    // element & element attribute

    //get element handle for xpath or css selector 
    async getElement(selector) {
        if (/^(\/\/|\(\/\/)/.test(selector)) {
            await page.waitForXPath(selector)
            let [element] = await page.$x(selector)
            return element
        } else {
            await page.waitForSelector(selector)
            let element = await page.$(selector)
            return element
        }
    },

    // get multiple elements
    async getElements(selector) {
        let elements = await page.$$(selector)
        return elements
    },

    // get element text
    async getElementText(selector) {
        let element = await this.getElement(selector)
        let text = await (await element.getProperty('textContent')).jsonValue()
        // console.log(text.trim())
        return text.trim()
    },

    // get element property value
    async getElementValue(selector) {
        let element = await this.getElement(selector)
        let value = await (await element.getProperty('value')).jsonValue()
        // console.log(value)
        return value
    },

    // get element class value
    async getElementClassValue(selector) {
        let element = await this.getElement(selector)
        let classValue = await (await element.getProperty('className')).jsonValue()
        // console.log(classValue)
        return classValue
    },

    // get element attribute value
    async getElementAttributeValue(selector, attribute) {
        let element = await this.getElement(selector)
        let value = await (await element.getProperty(attribute)).jsonValue()
        // console.log(value)
        return value
    },

    // get element attribute value
    async setElementAttributeValue(selector, attribute, value) {
        // await page.$eval(selector, (element, attribute, value) => element.setAttribute(attribute, value), attribute, value)
        let element = await this.getElement(selector)
        await page.evaluate((element, attribute, value) => element.setAttribute(attribute, value), element, attribute, value)
    },

    // set element value
    async setElementValue(selector, value) {
        let element = await this.getElement(selector)
        page.evaluate((element, value) => element.value = value, element, value)
    },

    // remove element attribute
    async removeElementAttribute(selector, attribute) { //TODO: need to test
        await page.evaluate(document.getElementsById(selector).removeAttribute(attribute))
    },

    // get element count
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

    // get dropdown options  span dropdown
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

    // set dropdown option  span dropdown
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

    // clear input field
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

    //type
    async type(selector, value) {
        let element = await this.getElement(selector)
        await element.type(value)
    },

    // clear input field and type 
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

    //scroll element into view
    async scrollIntoView(selector) {  //TODO: doesn't work
        let element = await this.getElement(selector)
        await page.evaluate((element) => { element.scrollIntoView() }, element)
    },

    // close single tab
    async closeSingleTab() {
        await page.close()
    },

    // close all tab i.e. close browser
    async closeAllTab() {
        await browser.close()
    },

    //switch to another tab
    async switchTab() { },//TODO: add this

    //open link in new tab
    async openInNewTab() { //TODO: correct this
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        // await browser.newPage() 
        // const page2 = await browser.newPage()        // open new tab
        // await page2.bringToFront() 
        // const page = page2
    },

    //iframe
    async switchToIframe(selector) {
        const frameHandle = await this.getElement(selector)
        const iframe = await frameHandle.contentFrame()
        return iframe
    },

    //iframe: clear and type iframe input element 
    async iframeClearAndType(iframe, selector, value) {
        await iframe.$eval(selector, element => element.textContent = '')
        // await iframe.$eval(selector, element => element.value = '')
        await iframe.type(selector, value)
    },

    //handle alert
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

    async alertWithValue(value) {//TODO: dont work fix this
        page.on('dialog', async dialog => {
            // console.log(dialog.message())
            // await dialog.accept()
        })
        page.evaluate(() => alert('500'))
    },


    // get page content
    async getPageContent() {
        return await page.content()
    },

    // get page title
    async getPageTitle() {
        return await page.title()
    },

    //timeout
    async wait(seconds) {
        await page.waitForTimeout(seconds * 1000)
    },

    //TODO: add function for grab console error



    //---------------------------------------------- Dokan specific functions ------------------------------------//


    //delete element if exist (only first will delete) dokan specific :rma,report abuse
    async deleteIfExists(selector) { //TODO: there may be alternative solution, this method might not needed
        if (await page.$x(selector) !== null) {
            let [element] = await page.$x(selector)
            await element.click()
        }
    },

    //delete element if exist until all instance deleted
    // async deleteListElement(selector, value) {
    //     let elements = await page.$$(selector)
    //     for (let element of elements) {
    //         const text = await page.evaluate(element => element.textContent, element)
    //         var children = await page.$x(element)
    //         console.log(children)
    //         // console.log(text)
    //         // if (value.toLowerCase() == (text.trim()).toLowerCase()) {
    //         //     // console.log(text)
    //         //     // await element.click()
    //         //     console.log(element.childNodes.length)
    //         // }
    //     }
    // },

    //check for php error
    async checkPHPError() {
        // let pageContent = await page.content()
        // let pageContent = pageContent.toLowerCase()  
        let pageContent = await page.content()

        if ((pageContent.includes('Warning')) || (pageContent.includes('Fatal error')) || (pageContent.includes('Notice:'))) {
            await page.screenshot({ path: 'tests/e2e/screenshot/phpError' + Date.now() + '.png', fullPage: true })
            throw new Error("PHP Error!!")
        }
    },

    // check if page not exits
    async checkPageNotExist() {
        let pageContent = await page.content()

        if (pageContent.includes('Oops! That page can\'t be found.')) {
            await page.screenshot({ path: 'tests/e2e/screenshot/pageNotExists' + Date.now() + '.png', fullPage: true })
            //TODO: save permalink
        }
        else {
            console.log('Page exists')
        }
    },


    // upload image
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

    // upload image if no image is uploaded
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

    // remove previous uploaded image if exists
    async removePreviousUploadedImage(previousUploadedImageSelector, removePreviousUploadedImageSelector) {
        let previousUploadedImageIsVisible = await this.isVisible(previousUploadedImageSelector)
        if (previousUploadedImageIsVisible) {
            await this.hover(previousUploadedImageSelector)
            await page.click(removePreviousUploadedImageSelector)
            await this.wait(2)
        }
    },

    //get wordpress current user
    async getCurrentUser() {
        const cookies = await page.cookies();
        const cookie = cookies.find(c => {
            var _c$name;
            return !!(c !== null && c !== void 0 && (_c$name = c.name) !== null && _c$name !== void 0 && _c$name.startsWith('wordpress_logged_in_'));
        });
        if (!(cookie !== null && cookie !== void 0 && cookie.value)) {
            return;
        }
        return decodeURIComponent(cookie.value).split('|')[0];
    },



    //--------------------------------------------------- extra -----------------------------------------------//



    // Network handle methods

    //option 1
    // You can wait on both simultaneously and handle whichever occurs first:
    // await Promise.race([page.waitForNavigation({ waitUntil: "networkidle0" }),page.waitForSelector(".Error")])

    //option 2
    // age.waitForResponse( response => response.status() === 200 )   

    //option 3
    // await page.waitForNavigation({ waitUntil: 'domcontentloaded' })   

    //option 4
    // Since v1.6.0 there's page.waitForResponse.  

    //option 5
    // Create promise object before event trigger, If you want to satisfy any one of the condition to wait use
    // const watchDog2 = [page.waitForSelector('.form .error'),page.waitForNavigation({ waitUntil: 'networkidle2' })]
    // await continueButton.evaluate(continueButton => continueButton.click())
    // await await Promise.race(watchDog2)


}


