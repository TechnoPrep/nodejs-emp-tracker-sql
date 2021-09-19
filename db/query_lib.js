const db = require('./connection');

class DBQuery {
  constructor(db){
    this.db = db;
  }

  getDepts() {
    return this.db.promise().query(
    `SELECT * 
    FROM department`
    );
  }

  getRoles() {
    return this.db.promise().query(
      `SELECT * 
      FROM role`
      );
  }

  getEmps() {
    return this.db.promise().query(
      `SELECT e.id as 'Employee ID', 
      e.first_name AS 'First Name',
      e.last_name AS 'Last Name',
      department.department_name AS Department,
      role.salary AS Salary,
      role.title AS Role,
      CONCAT(mgmt.first_name,' ',mgmt.last_name) as Manager
      FROM employee e
      LEFT JOIN employee mgmt
      ON e.manager_id = mgmt.id 
      INNER JOIN role
      ON e.role_id = role.id 
      LEFT JOIN department 
      ON role.department_id = department.id
      ORDER BY e.id;`
      );
  }

  addDept() {

  }

  addRole() {

  }

  addEmp() {

  }

  updateEmp() {

  }

}

module.exports = new DBQuery(db);