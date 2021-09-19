const mysql = require('mysql2');

// Creating our connection string function
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
},
  console.log(`Connected to the classlist_db database.`)
);

module.export = db;