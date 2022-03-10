
const { faker } = require('@faker-js/faker');





const randomFindName = faker.name.findName()
const randomFirstName = faker.name.firstName()
const randomLastName = faker.name.lastName()
const randomMiddleName = faker.name.middleName()

const randomPhone = faker.phone.phoneNumber()
const randomEmail = faker.internet.email()
const randomPassword = faker.internet.password()
const randomExampleEmail = faker.internet.exampleEmail()
const randomUserName = faker.internet.userName()
const randomUrl = faker.internet.url()
const randomColor = faker.internet.color()




const randomStreetName = faker.address.streetName()
const randomStreetAddress = faker.address.streetAddress()
const randomSecondaryAddress = faker.address.secondaryAddress()
const randomCity = faker.address.city()
const randomCityName = faker.address.cityName()
const randomCountry = faker.address.country()
const randomState = faker.address.state()
const randomZipCode = faker.address.zipCode()
const randomZipCodeByState = faker.address.zipCodeByState()

// console.log(randomStreetName)
// console.log(randomStreetAddress)
// console.log(randomSecondaryAddress)
// console.log(randomCity)
// console.log(randomCityName)
// console.log(randomCountry)
// console.log(randomState)
// console.log(randomZipCode)
// console.log(randomZipCodeByState)



const randomProduct = faker.commerce.product()
const randomProductName = faker.commerce.productName()
const randomPrice = faker.commerce.price()
const randomProductDescription = faker.commerce.productDescription()
const randomProductAdjective = faker.commerce.productAdjective()
const randomProductMaterial = faker.commerce.productMaterial()

console.log(randomProduct)
console.log(randomProductName)
console.log(randomPrice)
// console.log(randomProductDescription)
// console.log(randomProductAdjective)
// console.log(randomProductMaterial)
// console.log()




const randomCompanyName = faker.company.companyName()
const randomCompanySuffixes = faker.company.suffixes()
const randomCompanySuffix = faker.company.companySuffix()
const randomBs = faker.company.bs()
const randomCatchPhraseNoun = faker.company.catchPhraseNoun()
const randomBsNoun = faker.company.bsNoun()
const randomBsBsAdjective = faker.company.bsAdjective()
const randomBsBuzz = faker.company.bsBuzz()

const randomNumber = faker.datatype.number({ min: 1000000 })
const randomUuid = faker.datatype.uuid()
const randomAlphaNumeric = faker.random.alphaNumeric(10)

// console.log(randomNumber)
// console.log(randomUuid)
// console.log(randomAlphaNumeric)
// console.log(randomCompanySuffixes)
// console.log(randomCompanySuffix)
// console.log(randomBs)
// console.log(randomCatchPhraseNoun)
console.log(randomBsNoun)
console.log(randomBsBsAdjective)
console.log(randomBsBuzz)

const randomAccount = faker.finance.account()
const randomAccountName = faker.finance.accountName()
const randomRoutingNumber = faker.finance.routingNumber()
const randomCreditCardNumber = faker.finance.creditCardNumber()
const randomIban = faker.finance.iban()
const randomBic = faker.finance.bic()
// const randomAmount = faker.finance.amount()


// console.log(randomAccount)
// console.log(randomAccountName)
// console.log(randomRoutingNumber)
// console.log(randomCreditCardNumber)
// console.log(randomIban)
// console.log(randomBic)
// console.log(randomAmount)






// const randomName = faker.name.findName()
// const randomCard = faker.helpers.createCard()

// const randomAvatar = faker.image.avatar()


// console.log(randomName)
// console.log(randomFirstName)
// console.log(randomLastName)
// console.log(randomPhone)
// console.log(randomEmail)
// // console.log(randomCard)
// console.log(randomCity)
// console.log(randomProduct)
// console.log(randomCompanyName)
// console.log(randomAmount)
// console.log(randomAvatar)


const randomWord = faker.lorem.word()
const randomWords = faker.lorem.words()
const randomSentence = faker.lorem.sentence()
const randomSlug = faker.lorem.slug()
const randomSentences = faker.lorem.sentences()
const randomParagraph = faker.lorem.paragraph()
const randomParagraphs = faker.lorem.paragraphs()
const randomText = faker.lorem.text()
const randomLines = faker.lorem.lines()



const random = faker.lorem.word()


