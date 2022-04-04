
// const start = Date.now();

// // console.log((new Date()+ 22).toLocaleDateString())
// console.log((new Date()).toLocaleDateString('en-CA'))

// let date = new Date()

// // console.log(date.setDate(date.getDate() + 30))

// let currentDate = (new Date()).toLocaleDateString('en-CA')

// addDays = (date, days) => {
//     var result = new Date(date)
//     result.setDate(result.getDate() + days)
//     return result.toLocaleDateString('en-CA')
// }

// console.log(addDays(currentDate, 30))

let  getRandomArbitrary =(min, max) => Math.floor(Math.random() * (max - min) + min)
console.log(getRandomArbitrary(0, 3))