var arr = [1, 2, 3, 4, 5, 6];

// var employees = [
//     { name: 'abc', salary: 1000 },
//     { name: 'abc', salary: 2000 },
//     { name: 'abc', salary: 5000 }
// ];

function transform(elem) {
    return elem * 2;
}

var res = arr.map(transform);
console.log(res);