
const puppeteer = require('puppeteer');
import { createURL, adminLogin, loginUser, isCurrentURL } from '@wordpress/e2e-test-utils'
// This page contains all necessary puppeteer automation methods 
module.exports = {

    async isLocatorReady(element, page) {
        const isVisibleHandle = await page.evaluateHandle((e) => {
            const style = window.getComputedStyle(e);
            return (style && style.display !== 'none' &&
                style.visibility !== 'hidden' && style.opacity !== '0');
        }, element);
        var visible = await isVisibleHandle.jsonValue();
        const box = await element.boxModel();
        if (visible && box) {
            return true;
        }
        return false;
    },

    async isVisible(page, selector) {
        return await page.evaluate((selector) => {
            var e = document.querySelector(selector);
            if (e) {
                var style = window.getComputedStyle(e);

                return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
            }
            else {
                return false;
            }
        }, selector);
    },


    async click(selector) {
        // await page.click(selector);
        // await page.waitForNavigation({waitUntil: 'networkidle2'});
        if (selector.startsWith('//')) {
            await this.clickXpath(selector)
        } else {
            await Promise.all([page.click(selector), page.waitForNavigation({ waitUntil: 'networkidle2' })])
        }
    },

    async clickXpath(selector) {
        let [element] = await page.$x(selector)
        // console.log(element)
        // await element.click()
        await Promise.all([await element.click(), page.waitForNavigation({ waitUntil: 'networkidle2' })])
  
    },    
    
    async clickXpath1(selector) {
        let [element] = await page.$x(selector)
        console.log(element)
        await element.click()
    },

    async uploadImage(selector, image) {
        const [fileChooser] = await Promise.all([page.waitForFileChooser(), this.click(selector)])
        await fileChooser.accept([image])
    },

    async goto(subpath) {
        await Promise.all([page.goto(createURL(subpath)), page.waitForNavigation({ waitUntil: 'networkidle2' })])
    },

    async reload() {
        await page.reload({ waitUntil: 'networkidle2' });
    },




    // get text
    async getSelectorText(selector) {
        let text = await page.$eval(selector, (element) => element.textContent);
        // let text =  await page.$eval(this.label, el => el.innerText);
        console.log(text);
        return text;
    },

    // get element text
    async getElementText(selector) {
        let element = await page.$(selector);
        let text = await (await element.getProperty('textContent')).jsonValue();
        console.log(text);
        return text;
    },

    // get element text
    async getElementValue(selector) {
        let element = await page.$(selector);
        let text = await (await element.getProperty('value')).jsonValue();
        console.log(text);
        return text;
    },

    // get elements
    async getElements(selector) {
        let elements = await page.$$(selector);
        return elements;
    },

    // get element length
    async getElementLength(selector) {
        let elements = await page.$$(selector);
        let length = elements.length
        // console.log(length)
        return length;
    },
    // or

    async getCount(selector) {
        let count = await page.$$eval(selector, ele => ele.length);
        console.log(count)
        return count
    },

    // get dropdowm options  span dropdown
    async getDropdownOptions(selector) {
        let elements = await page.$$(selector);
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
        console.log(texts)
        return texts
    },


    // set dropdown option  span dropdown
    async setDropdownOptionSpan(selector, value) {
        // await page.click(selector)
        let elements = await page.$$(selector);
        for (let element of elements) {
            const text = await page.evaluate(element => element.textContent, element)
            // console.log(text)
            if (value.toLowerCase() == (text.trim()).toLowerCase()) {
                // console.log(text)
                await element.click()
            }
        }

    },


    // or select dropdown
    async setSelect(selector, value) {
        await page.select(selector, value)
    },

    // get value
    async getValue(selector) {
        let value = await page.$eval(selector, (element) => element.value)
        console.log(value)
        return value
    },
    // clear input field
    async clearinputfield(selector) {
        await page.$eval(selector, el => el.value = '');
    },

    // clear input field and type
    async clearandtype(selector, value) {
        await page.$eval(selector, el => el.value = '');
        await page.type(selector, value);

    },


    // close tab
    async closetab() {

        // Browser commands
        // open new tab
        await page.close()
        // close browser or close all tab
        await browser.close()


        // get Title of a page
        await page.title()
        // Get url of current tab in puppeteer
        await page.url()
        // Content of page / Page Source
        await page.content()

        // for firefox
        //TODO: npm install puppeteer-firefox​

    },

    async opennewtab() {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        // await browser.newPage(); 
        // const page2 = await browser.newPage();        // open new tab
        // await page2.bringToFront(); 
        // const page = page2
    },


}