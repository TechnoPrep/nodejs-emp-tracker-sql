const inquirer = require("inquirer");
const cTable = require("console.table");
const sql = require('./db/query_lib');

// Query lists

// View All Departments
// Return Name and ID
const viewDept = () => {
  sql
  .getDepts()
  .then(([rows]) => {
    console.log('\n');
    console.log(cTable.getTable(rows));
  })
  .then(()=> {
      chooseRequest();
  }) 
}

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


const chooseRequest = () => {
  inquirer.prompt([
      {
        type: 'list',
        name: 'request',
        message: 'What would you like to do?',
        choices: ['Add A Department',
                  'Add an Employee',
                  'Add a Role',
                  'Update Employee',
                  'View All Departments',
                  'View All Employees',
                  'View All Roles'
                  ],
        loop: false,
      },
  ])
  .then((data) => {
      const {request} = data;
    //   Switch case
    switch (request) {
        case 'View All Departments':
            viewDept();
            break;
    
        default:
            break;
    }
  })
}

chooseRequest();


