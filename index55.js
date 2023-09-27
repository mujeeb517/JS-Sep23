// map
const employees = [
    { name: 'abc', salary: 1000 },
    { name: 'abc', salary: 2000 },
    { name: 'abc', salary: 5000 },
];


function transform(employee) {
    const transformedEmployee = { ...employee };
    transformedEmployee.salary = employee.salary + (employee.salary * 0.1);
    return transformedEmployee;
}

const result = employees.map(transform);

console.log(result, employees);

// create your own map (myMap)

function myMap() {
    console.log('my map');
}

Array.prototype.myMap = myMap;
