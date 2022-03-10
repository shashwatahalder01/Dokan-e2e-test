
const { faker } = require('@faker-js/faker');



const vendorinfo =  {
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
   name:faker.commerce.productName(),
   price:faker.commerce.price(),
   category: 'Uncategorized'
}

const coupon = {
   // amount:faker.datatype.number({ min: 1, max: 99}),
   amount:faker.datatype.number({ min: 1, max: 10}).toString(),
   title:'VC_' + faker.random.alpha({ count: 5, upcase: true })
   
}




   // console.log(coupon)

   exports.vendorinfo = vendorinfo;
   exports.product = product;
   exports.coupon = coupon;



