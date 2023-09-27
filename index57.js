// reduce
const arr = [1, 2, 3, 4, 5, 6];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

function add(acc, current) {
    return acc + current;
}

const sum = arr.reduce(add);

console.log(sum);