// map,filter, reduce
const arr = [1, 2, 3, 4, 5];

// const res = [];
// for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] * 2);
// }


function times3(elem) {
    return elem * 3;
}

const res = arr.map(elem => elem * 2);
const res2 = arr.map(elem => elem * 3);

console.log(arr, res, res2);

