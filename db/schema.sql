DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

-- Department Name
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department VARCHAR(50) NOT NULL,
  PRIMARY KEY (id),
);


-- first name, last name, role, and manager
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  position_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) 
    REFERENCES position(id) 
    ON DELETE SET NULL,
);

-- name, salary, and department
CREATE TABLE position (
  id INT NOT NULL AUTO_INCREMENT,
  position_name VARCHAR(50) NOT NULL,
  salary INT NOT NULL,
  department_id INT NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) 
    REFERENCES department(id) 
    ON DELETE SET NULL
);