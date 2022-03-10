

// const custom = require('../utils/custom_method.js');


describe('Google', () => {

    beforeAll( async () => {
      // jest.setTimeout(90 * 1000)
      jest.setTimeout(600000)
      // const browser = await puppeteer.launch({
      //   headless: false,
      // });
      // const page = await browser.newPage();
      // await page.goto('https://google.com');
      // await custom.goto(URL)
      await page.goto(URL);
    });
  
    it('demo test', async () => {
      // jest.setTimeout(90 * 1000)
      // await page.goto('https://google.com');
      // await expect(page.title()).resolves.toMatch('Google');
      await page.type('input[title="Search"]', 'puppeteer')
      await page.$eval('input[title="Search"]', el => el.value = '');
      await page.type('input[title="Search"]', 'puppeteer library' )
      // await page.click('div[class="FPdoLc lJ9FBc"] input[name="btnK"]');
      await page.keyboard.press('Enter');
      // await page.waitFor(9000);

      await page.waitForTimeout(10000);
      // await page.screenshot({ path: './screenshots/example.png' });
      // await page.screenshot({path: 'bootstrap.png', fullPage: true  });
      // await page.pdf({ path: 'example.pdf', format: 'a4' });
      // await browser.close();
    });
  });
 

