const db = require('./connection');

class DBQuery {
  constructor(db){
    this.db = db;
  }

  getDepts() {
    return this.db
      .promise()
      .query(
    `SELECT * 
    FROM department`
    );
  }

  getRoles() {
    return this.db
      .promise()
      .query(
      `SELECT r.title AS Title, 
      r.salary AS Salary, 
      d.department_name AS Department
      FROM role r
      LEFT JOIN department d
      ON r.department_id = d.id
      ORDER BY Department, r.id ASC`
      );
  }

  getRoleIds(){
    return this.db
      .promise()
      .query(
      `SELECT *
      FROM role`
      );
  }

  getEmps() {
    return this.db
      .promise()
      .query(
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

  getManagers() {
    return this.db
      .promise()
      .query(
      `SELECT id, CONCAT(first_name, ' ', last_name) AS manager_name
      FROM employee 
      WHERE manager_id IS NULL`
    )
  }

  addDept(data) {
    const values = [data.name];
    return this.db
      .promise()
      .query(
        `INSERT INTO department (department_name) VALUES(?)`,
        values
        );
  }

  addRole(data) {
    const values = [data.title, data.salary, data.department_id];
    return this.db
      .promise()
      .query(
        `INSERT INTO role 
        (title, salary, department_id) 
        VALUES(?,?,?)`,
        values
        );
  }

  addEmp(data) {
    const values = [data.first, data.last, data.role_id, data.manager_id];
    return this.db
      .promise()
      .query(
        `INSERT INTO employee
        (first_name, last_name, role_id, manager_id)
        VALUES(?,?,?,?)`,
        values
      )
  }

  updateEmp() {

  }

}

module.exports = new DBQuery(db);