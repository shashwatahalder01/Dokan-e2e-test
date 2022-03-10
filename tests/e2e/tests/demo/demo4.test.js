describe('Google', () => {
    beforeAll(async () => {
      await page.goto('http://dokan2.test');
    });
  
    it('should be titled "Google"', async () => {
    

      // locators
  
  // vendor
  home: 'ul[class="nav-menu"] li[class="current_page_item"] a'
  cart: 'ul[class="nav-menu"] li[class="page_item page-item-11"] a'
  checkout: 'ul[class="nav-menu"] li[class="page_item page-item-12"] a'
  dashboard: 'body > div:nth-child(1) > header:nth-child(1) > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)'
  myaccount = 'li[class="page_item page-item-13 focus"] a'
  myorders: 'ul[class="nav-menu"] li[class="page_item page-item-8"] a'
  shop: 'ul[class="nav-menu"] li[class="page_item page-item-10"] a'
  storelist: 'ul[class="nav-menu"] li[class="page_item page-item-7"] a'



  page.click(myaccount)


    });
  });