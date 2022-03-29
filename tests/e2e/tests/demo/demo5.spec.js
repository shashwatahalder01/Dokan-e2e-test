
const base = require("../../pages/base.js")

// jest.retryTimes(3);
describe('Google', () => {


  it('fails', async () => {
    await page.goto('http://localhost:8889/wp-admin/')
    console.log(await base.getBaseUrl())
  });

  // it('fails', () => {
  //   console.log('fails1');
  //   expect(true).toBeFalsy();
  // });


  // it('passes', () => {
  //     console.log('passes1');
  //   expect(true).toBeTruthy();
  // });

  // it('passes2', () => {
  //   console.log('passes2');
  //   expect(true).toBeTruthy();
  // });


});


