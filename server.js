const inquirer = require("inquirer");
const mysql = require('mysql2');
require('dotenv').config();

// Creating our connection string function
const db = mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    },
    console.log(`Connected to the classlist_db database.`)
);

// Query lists

// View All Departments
// Return Name and ID

// View All Roles
// Return title, role id, department it belongs to, and salary

// View All employees
// ID, FName, LName, Job Title, Departments, salaries, and Manager

// add an department
// Enter fields: Department Name

// Add a role
// Enter fields: Name, Salary, Department for role

// add an employee
// Enter fields: fname, lname, role, manager

// update an employees role



