// require('dotenv').config()
// // console.log(process.env.ENV)

// // if (process.env.ENV == 'local') {
// //     console.log('first file')
// //     require('dotenv').config({ path: '.env.local' })

// //     console.log(process.env.ABC)
// //     console.log(process.env.ENV)
// // }

// var dotenv = require('dotenv');
// var fs = require('fs');
// if (process.env.ENV === 'local') {
//     //  process.env = dotenv.parse(fs.readFileSync('.env'));
//     process.env = dotenv.parse(fs.readFileSync('.env.local'));
// }
// // console.log(config1.ABC)
// // console.log(config2.ABC)
// console.log(process.env)
// var a = 3.76546
// console.log(a.toPrecision(5))


let aobj= {
    m1: 's1',
    m2: 's2'
}

let obj2 ={
    m2: 'changed value'
}

function my(...obj){
    console.log(...obj)
}


// my(aobj)

console.log({...aobj ,...obj2})