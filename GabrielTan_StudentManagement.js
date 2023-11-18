module.exports = {
    // dummy data for students
    students:[
        {
            studentName:"John",
            group:"L1",
            modules:[
                {
                    moduleName:"",
                    moduleCode:"",
                    moduleLecturer:"",
                }
            ]
        },

    ],
    // addStudent adds a new student with a provided name and group and a empty modules array
    addStudent(studentName, group){
        this.students.push({studentName:studentName, group:group,modules:[]});
    },
    // getStudent returns a student at the specified index
    getStudent(index){
        return this.students[index];
    },
    // removeStudent removes a student entry at the specified index
    removeStudent(index){
        this.students.splice(index,1);
    },
    // assignModule adds a new module to the student at the specified index's modules array with a
    // provided module name, code and lecturer
    assignModule(index,moduleName,moduleCode,moduleLecturer){
        this.students[index].modules.push({moduleName:moduleName,moduleCode:moduleCode,moduleLecturer:moduleLecturer});
    },
    // getModules returns all assigned modules from the student at the specified index
    getModules(index){
        return this.students[index].modules;
    },
    // unassignModule removes a module entry at the specified module index from the student at the
    // specified student index
    unassignModule(studentIndex,moduleIndex){
        this.students[studentIndex].modules.splice(moduleIndex,1)
    }
    
}