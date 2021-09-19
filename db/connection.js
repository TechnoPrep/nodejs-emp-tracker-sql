const mysql = require('mysql2');
const art = require('ascii-art');

// Creating our connection string function
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', //'process.env.DB_USER',
  password: 'BigMiike60!', //process.env.DB_PASS,
  database: 'company_db' //process.env.DB_NAME
},
art.font("Some Text", 'doom')
       .then((rendered)=>{
           //rendered is the ascii
       }).catch((err)=>{
           //err is an error
       })
);

module.exports = db;