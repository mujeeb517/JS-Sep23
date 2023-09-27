// filter 
const arr = [1, 2, 3, 4, 5, 6];

// const res = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         res.push(arr[i]);
//     }
// }

function isEven(elem, _, a) {
    console.log(a);
    return elem % 2 === 0;
}

const res = arr.filter(isEven);

// const res2 = arr.filter(elem => elem % 2 !== 0);

console.log(res);