
const { faker } = require('@faker-js/faker');


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