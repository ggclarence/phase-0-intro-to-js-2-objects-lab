// Write your solution in this file!
var employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
        return employee;
       }
function deleteFromEmployeeByKey(employee, key){
    const newemployee = {...employee}
    delete newemployee[key]
    return newemployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
