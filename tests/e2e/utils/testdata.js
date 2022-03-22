
const { faker } = require('@faker-js/faker');
const { wooCommerce } = require('../pages/admin');

// productsName: ["Plain Cotton Tshirt", "The moon Thsirt", "Summer Thirt"],
// prizes: [100, 150, 250],
// tshirts: ["Plain Cotton Tshirt", "The moon Thsirt", "Summer Thirt"],
// parentCategories: [
//   "Electronic Devices",
//   "Electronic Accessories",
//   "Men's Fashion",
//   "Clothings",
//   "Women's Fashion",
// ],
// productCategories: [
//   "SmartPhones",
//   "Laptops",
//   "Accessories",
//   "Shirts",
//   "T-Shirts",
//   "Polo Shirts",
//   "Jeans",
//   "Pants",
//   "Shoes",
//   "Bags",
// ],
// productAttributes: ["Size", "Color"],
// attributeValues: [
//   ["S", "M", "L", "XL", "XXL"],
//   ["Red", "Blue", "Black", "Yellow", "White", "Deep blue"],
// ],

// wooCommerce
//shipping
const shippingMethods = ['flat_rate','free_shipping','local_pickup','dokan_table_rate_shipping','dokan_distance_rate_shipping','dokan_vendor_shipping']
const taxStatus = ['taxable','none']
const freeShippingRequires = ['coupon','min_amount','either','both']
//payment
const razorpayDisbursementMode = ['Immediate','On Order Complete','Delayed']
const payPalMarketplaceDisbursementMode = ['Immediate','On Order Complete','Delayed']
const payPalMarketplacePaymentButtonType = ['Smart Payment Buttons','Standard Button']
const mangopayAvailableCreditCards = ['CB/Visa/Mastercard','Maestro*','Bancontact/Mister Cash','Przelewy24*','Diners*','PayLib','iDeal*','MasterPass*','Bankwire Direct*']
const mangopayAvailableDirectPaymentServices = ['Sofort*','Giropay*']
const mangopayTransferFunds = ['On payment completed','On order completed','Delayed']
const mangopayTypeOfVendors = ['Individuals','Business','Either']
const mangopayBusinessRequirement = ['Organizations','Soletraders','Businesses','Any']

//Dokan
//admin
//general settings
const sellingProductTypes = ['sell_both', 'sell_physical', 'sell_digital']
const storeCategory = ['none','Single','Multiple']
//selling options settings
const commissionType = ['flat','percentage','combine']
const shippingFeeRecipient = ['seller','admin']
const taxFeeRecipient = ['seller','admin']
const newProductStatus = ['publish','pending']
const productCategory = ['single','multiple']
//withdraw
const quarterlyScheduleMonth = ['january','february','march']
const quarterlyScheduleWeek = ['1','2','3','L']
const quarterlyScheduleDay = ['monday','tuesday','wednesday','thursday','friday']
const monthlyScheduleWeek = ['1','2','3','L']
const monthlyScheduleDay = ['monday','tuesday','wednesday','thursday','friday']
const biweeklyScheduleWeek = ['1','2']
const biweeklyScheduleDay = ['saturday','sunday','monday','tuesday','wednesday','thursday','friday']
const weeklyScheduleDay = ['saturday','sunday','monday','tuesday','wednesday','thursday','friday']
//appreance settings
const gMapApiKey = "AIzaSyCiSPh9A7SYaO2sbZQ4qQo11AWyYB3UFvY"
const mapboxAccessToken = "pk.eyJ1Ijoic2hhc2h3YXRhIiwiYSI6ImNrdzV3bm43eTAxeDYzMG52b2lwanZ4MnkifQ.tb3LaMr3Wa_-YOj5MwkEUA"
//privacy policy settings
const privacyPolicy = ['2','3','4','5','6','7','8','9','10']
//getsupport settings
const displayOnSingleProductPage = ['above_tab','inside_tab','dont_show']
//rma settings
const rmaOrderStatus = ['wc-pending','wc-processing','wc-on-hold','wc-completed','wc-cancelled','wc-refunded','wc-failed']
const enableRefundRequests = ['yes','no']
const enableCouponRequests = ['yes','no']
//wholesale customer settings
const needApprovalForCustomer = ['yes','no']
//delivery time settings
const storeOpeningClosingTime = ['12:00 AM','11:30 PM'] //TODO: has more elements -> generate using function
//geolocation settings
const locationMapPosition = ['top','left','right']
const showMap = ['all','store_listing','shop']
const radiusSearchUnit = ['km','miles']
//spmv settings
const availableVendorSectionDisplayPosition = ['below_tabs','inside_tabs','after_tabs']
const showSpmvProducts = ['show_all','min_price','max_price','top_rated_vendor']
//vendor subscription settings
const subscription = ['2','4','5','6','8','9','10','11','15','-1']
const productStatus = ['publish','pending','draft']



//vendor
const withdrawPaymentmethods = ['paypal', 'bank', 'dokan_custom', 'skrill']
const reserveBalance = ['0','5','10','15','50','100','200','300','500','1000','2000','3000','5000','10000']

//rma settings
const rmaType=['no_warranty','included_warranty','addon_warranty']
const rmalength=['limited','lifetime']
const rmalengthDuration =['days','weeks','months','years']
//auction
const itemCondition= ['new','used']
const actionType= ['normal','reverse']


const vendorinfo = {
   userEmail: faker.internet.email(),
   password: process.env.VENDOR_PASSWORD,
   firstName: faker.name.firstName(),
   lastName: faker.name.lastName(),
   shopName: faker.company.companyName(),
   // shopurl: faker.company.companyName(),
   companyName: faker.company.companyName(),
   companyId: faker.random.alphaNumeric(5),
   vatNumber: faker.random.alphaNumeric(10),
   bankName: faker.address.state(),
   bankIban: faker.finance.iban(),
   phone: faker.phone.phoneNumber(),
}

const product = {
   name: faker.commerce.productName(),
   price: faker.commerce.price(),
   category: 'Uncategorized'
}

const coupon = {
   // amount:faker.datatype.number({ min: 1, max: 99}),
   amount: faker.datatype.number({ min: 1, max: 10 }).toString(),
   title: 'VC_' + faker.random.alpha({ count: 5, upcase: true })

}




// console.log(coupon)

exports.vendorinfo = vendorinfo;
exports.product = product;
exports.coupon = coupon;




// min=0
// max=5
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

console.log(Date.now())

// console.log(date.toLocaleString('en-US '))
let d= new Date()
console.log(d.toLocaleString('en-US',{ dateStyle:'short', timeStyle:'medium'    }));   
console.log('tests/e2e/screenshot/phpError'+Date.now()+ '.png')