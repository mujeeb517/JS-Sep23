// string interpolation
var person = {
    name: 'John',
    age: 20,
    dept: 'IT'
};

// var stmt = person.name + ' is ' + person.age + ' years old and he is into ' + person.dept

// back ticks 
// multiline strings
// const stmt = `${person.name} is ${person.age} years old and he is into ${person.dept}`;

// console.log(stmt);

// spread operator
var m1 = { width: 5, height: 7, features: { call: true, sms: true } };
var m2 = { ...m1 }; // cloning

m2.width = 100;
console.log(m1.features === m2.features);

// rest operator
function fn(a, b, c) {
    console.log(a, b, c);
}

// Alt + Shift + F
// CMD + Shift + F
const arr = [1, 2, 3, 4, 5, 6];

// fn(arr[0], arr[1], arr[2]);
// fn(...arr);

const newArr = [...arr]; // clone
console.log(arr === newArr);

