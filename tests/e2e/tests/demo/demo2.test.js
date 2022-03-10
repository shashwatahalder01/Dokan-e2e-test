describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com');
    });
  
    it('should be titled "Google"', async () => {
      await expect(page.title()).resolves.toMatch('Google');
    });
  });
  



//   Some examples:

// Find a text in the page
// Assert that current page contains 'Text in the page'
// await expect(page).toMatch('Text in the page')
// Click a button
// Assert that a button containing text "Home" will be clicked
// await expect(page).toClick('button', { text: 'Home' })
// Fill a form
// Assert that a form will be filled
// await expect(page).toFillForm('form[name="myForm"]', {
//   firstName: 'James',
//   lastName: 'Bond',
// })


// Puppeteer get children of selected element
// Copy
// onst els = await page.$$('div.parent');

// for (let i = 0; i < els.length; i++) {
//     const img = await els[i].$eval('img', i => i.getAttribute('src'));
//     console.log(img);
//     const link = await els[i].$eval('a', a => a.getAttribute('href'));
//     console.log(link);
// }