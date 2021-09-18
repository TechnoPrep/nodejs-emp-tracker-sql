const inquirer = require("inquirer");
const mysql = require('mysql2');

// Creating our connection string function
const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'BigMiike60!',
        database: 'company_db'
    },
    console.log(`Connected to the classlist_db database.`)
);
