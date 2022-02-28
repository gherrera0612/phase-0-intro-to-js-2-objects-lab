// Write your solution in this file!
const employee = {
    name: "Sam",
     streetAddress: "11 Broadway",
};    
function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {...employee,...{[key]: value}};
}  
// returns an employee wit the original key value pairs and the
//new key value pair non destructively

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key]=value;
    return employee;
}
//it update employee with given key and value destructively
//returns entire updated employee

function deleteFromEmployeeByKey (employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
//delete key from a clone of employee and returns the new employee
//does not modify the original employee (it is non-destructive)

function destructivelyDeleteFromEmployeeByKey (employee,key){
    delete employee[key];
    return employee;
}