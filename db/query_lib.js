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

  getAllRoles() {

  }

  getAllEmp() {

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