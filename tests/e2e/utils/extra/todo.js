//TODO: deleteIfExists() recursion is not working
//TODO add press enter in map location in appearance, store  settings, product location
//TODO: npm install puppeteer-firefox
//TODO: Add required necessary steps
//TODO: remove timeout
//TODO: make select option more robust e.g. stripe express choose payment: 1. by keyboard press and input filed 2. by using setDropdownSpan custom method
//TODO: Need TO ADD Multiple VALUES TO THE SAME FIELD scenarios like multiple payment options, remove options for the second run
//TODO: Need to handle run multiselect again will remove the last selected option [multi select span]
//TODO: dokan mangopay & stripe express multiple card set & rerun also keep settings intact
//TODO: update select method for  category country state of frontend
//TODO: replace fixed data all over the codebase
//TODO: image upload
//TODO: auction date now
//TODO: delete category
//TODO: delete attribute
//TODO: add cleanup function for: category attribute shipping method
//TODO: replace selectOptionByText to selectByText : correct selectByText method
//TODO: remove waitForTimeout & waitForSelector where possible
//TODO: add category & attribute before variable product
//TODO: use jest toThrow or equivalent
//TODO: global timeout
//TODO: improve production price , fraction value needed
//TODO: add reporter
//TODO: jest detailed errors
//TODO: grab console errors
//TODO: shift toMatch with toBe jest expect
//TODO: handle all actions for xpath element and css element
//TODO: remove redundant locator
//TODO: vendor verification upload media  update function from vendor store settings
//TODO: create users & also add in before all
//TODO: min max product wholesale product,vendor subscription handle
//TODO: replace login with wp script login function
//TODO: rename orderId to orderNumber
//TODO: add is current url to every go to function
//TODO: clear cart before any purchase
//TODO: selector.customer.cWooSelector (using in vendor) shift woocommerce out of the customer object , 
//TODO: update order status if needed : refund request
//TODO: use set value instead of typing to see if theres any speed difference
//TODO: Function empty cart if not, create product if not exits(for buying product), for customer/vendor/admin (check that user is logged in or not)  via api call
//TODO: get all flags from database: tax rate, commission rate, commission type, shipping rate, 
//TODO: buy product from single product page, not from shop page (NOT ALL PRODUCT HAVE ADD TO CART OPTION ON SHOP PAGE)
//TODO: get customer order details from order page
//TODO: two recursion functions  are used clearCart() and deleteIfExists() find second one and replace it with nonRecursion function
//TODO: add increase product quantity function
//TODO: add compare order note function vendor vs admin
//TODO: add function to check vendor statement check for both order & refund
//TODO: create global object payment method test data
//TODO: wait for ajax request to complete
//TODO: duplicate line vs function call
//TODO: add commission increase & vendor earning increase in calculation function
//TODO: add permalink setup after dokan subscription enabled
//TODO: check user exists or not before login & registration
//TODO: remove all predefined data form page to test data >> subscription pack on vendor page
//TODO: check if dokan upgrade exist is exists then upgrade it
//TODO: admin add variable subscription and group product
//TODO: decide success message should come from parameter or directly import form data file or direct string value
//TODO: handle add product to cart for other products(variable,subscription),buy every product from single product page
// async getOrderDetails(orderNumber) { //TODO: separate function to get order details from inside order details base

//TODO: add this on vendor approve review request
// let awaitingApprovalReviewIsVisible = await base.isVisible(selector.customer.cSingleProduct.awaitingApprovalReview(reviewMessage))
// if (awaitingApprovalReviewIsVisible) {
//     await loginPage.switchUser(data.vendor)
//     await vendorPage.approveProductReview(reviewMessage)
// }

//TODO: add function for grab console error
    //TODO: use event console.error
