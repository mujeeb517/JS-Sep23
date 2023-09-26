// arrays
// transformation
// inplace
// returning new array
var arr = [1, 2, 3, 4, 5, 6];

var employees = [
    { name: 'abc', salary: 1000 },
    { name: 'abc', salary: 2000 },
    { name: 'abc', salary: 5000 }
];

const updatedEmployees = [];
for (let i = 0; i < employees.length; i++) {
    const currentSalary = employees[i].salary;
    const amountToHike = currentSalary * 10 / 100;
    const salaryToUpdate = currentSalary + amountToHike;

    const employee = { ...employees[i] };
    employee.salary = salaryToUpdate;

    updatedEmployees.push(employee);
}

console.log(updatedEmployees);