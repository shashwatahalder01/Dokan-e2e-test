require('dotenv').config()
const mysql = require('like-mysql')
const db = mysql('127.0.0.1:3306', 'root', '01dokan01', 'dokan4')

async function dbQuery (sql,callback) {
await db.ready()
const result = await db.query(sql)

callback(result)

await db.end()
}

let tablePrefix = process.env.DB_TABLE_PREFIX
let parameter = '451'
let sql = `Select * From ${tablePrefix}wc_order_stats where order_id=` + `'${parameter}'`

let result =  dbQuery(sql,async (data)=>{
    console.log(data)

})







