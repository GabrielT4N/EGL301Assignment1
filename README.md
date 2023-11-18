# Student Management System
This Student Management System is created to manage students within a school and their modules

## Students
There are 3 functions associated with the Students
### Add Student
```bash
addStudent(studentName,group)
```
Adds a student to students array  
"studentName" = name of student  
"group" = group that student is in  
this function also creates an empty modules array for that student
### Get Student
```bash
getStudent(index)
```
Gets the student at the specified index  
"index" = index of target student in students array
### Remove Student
```bash
removeStudent(index)
```
Removes the student from the students array at the specified index  
"index" = index of target student in students array

## Modules
There are 3 functions associated with the Modules
### Assign Module   
```bash
assignModule(index,moduleName,moduleCode,moduleLecturer)
```
Adds a module with the provided attributes to the specified student  
"index" = index of target student in students array  
"moduleName" = name of module  
"moduleCode" = module code  
"moduleLecturer" = name of lecturer in charge of module
### Get Modules
```bash
getModules(index)
```
Returns all modules assigned to specified student  
"index" = index of target student in students array  
### Unassign Module
```bash
unassignModule(studentIndex,moduleIndex)
```
Removes a module from modules array of specified student  
"studentIndex" = index of target student in students array  
"moduleIndex" = index of target module in modules array