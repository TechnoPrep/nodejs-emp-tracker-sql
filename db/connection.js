const mysql = require('mysql2');

// Creating our connection string function
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', //'process.env.DB_USER',
  password: 'BigMiike60!', //process.env.DB_PASS,
  database: 'company_db' //process.env.DB_NAME
});

module.exports = db;