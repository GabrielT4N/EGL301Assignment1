module.exports = {
    // Explain what function A does
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
    
    addStudent(studentName, group){
        this.students.push({studentName:studentName, group:group,modules:[]});
    },
    // Explain what function B does
    getStudent(index){
        return this.students[index];
    },
    removeStudent(index){
        this.students.splice(index,1);
    },
    assignModule(index,moduleName,moduleCode,moduleLecturer){
        this.students[index].modules.push({moduleName:moduleName,moduleCode:moduleCode,moduleLecturer:moduleLecturer});
    },
    getModules(index){
        return this.students[index].modules;
    },
    unassignModule(studentIndex,moduleIndex){
        this.students[studentIndex].modules.splice(moduleIndex,1)
    }
    
}