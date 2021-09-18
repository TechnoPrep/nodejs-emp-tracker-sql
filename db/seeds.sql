INSERT INTO department (department)
VALUES ("Sales"),
       ("Accounting"),
       ("Human Resources"),
       ("Business Integrations");


INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES ("Jerry", "Smith", 1, 1),
       ("Sally", "Sue", 2, 1),
       ("Bob", "Ross", 3, 1),
       ("Rick", "Sanchez", 4, 4),
       ("Barbara", "Jones", 5, 4),
       ("Michael", "Ericson", 6, 4),
       ("Morty", "Mortison", 7, 7),
       ("Sarah", "Henderson", 8, 7),
       ("Bill", "Hicks", 9, 7),
       ("Morty", "Mortison", 10, 10),
       ("Sarah", "Henderson", 11, 10),
       ("Bill", "Hicks", 12, 10),
       ("Tom", "Ocean", 13, 13),
       ("Robert", "Sham", 14, 13),
       ("Larry", "David", 15, 13);


INSERT INTO position (position_name, salary, department_id)
VALUES ("Sales Manager", 90000, 1),
       ("Sales Lead", 80000, 1),
       ("Sales Representative", 45000, 1),
       ("Accounting Manager", 85000, 2),
       ("Accounting Lead", 75000, 2),
       ("Accounting Representative", 40000, 2),
       ("HR Manager", 80000, 3),
       ("HR Lead", 70000, 3),
       ("HR Representative", 35000, 3),
       ("BI Manager", 120000, 4),
       ("Systems Administrator", 100000, 4),
       ("Application Administrator", 85000, 4);



