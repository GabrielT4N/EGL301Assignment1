const school = require("./GabrielTan_StudentManagement.js");
school.addStudent("Test","L1");
console.log(school.getStudent(1));
school.assignModule(1,"NewModule","AAA111","Mr New");
school.assignModule(1,"NewModule2","AAA112","Mr Newa");
school.assignModule(0,"NewModule2","AAA112","Mr Newa");
console.log(school.getStudent(1));
console.log(school.getModules(1));
school.unassignModule(1,0);
console.log(school.getModules(1));
console.log(school.getModules(0));