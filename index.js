const employee ={
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    console.log(employee, key)
    const newEmployee = {...employee}
    delete newEmployee[key]
    console.log('original employee', employee, key)
    console.log('new employee', newEmployee, key)
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

// Write your solution in this file!
