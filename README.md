# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# Student Management System
This Student Management System is created to manage students within a school and their modules

## Students
There are 3 functions associated with the Students
### Add Student
```addStudent(studentName,group)```
Adds a student to students array
"studentName" = name of student
"group" = group that student is in
this function also creates an empty modules array for that student
### Get Student
```getStudent(index)```
Gets the student at the specified index
"index" = index of target student in students array
### Remove Student
```removeStudent(index)```
Removes the student from the students array at the specified index
"index" = index of target student in students array

## Modules
There are 3 functions associated with the Modules
### Assign Module
```assignModule(index,moduleName,moduleCode,moduleLecturer)```
Adds a module with the provided attributes to the specified student
"index" = index of target student in students array
"moduleName" = name of module
"moduleCode" = module code
"moduleLecturer" = name of lecturer in charge of module
### Get Modules
```getModules(index)```
Returns all modules assigned to specified student
"index" = index of target student in students array
### Unassign Module
```unassignModule(studentIndex,moduleIndex)```
Removes a module from modules array of specified student
"studentIndex" = index of target student in students array
"moduleIndex" = index of target module in modules array