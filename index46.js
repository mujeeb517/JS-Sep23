// ... spread or rest operator
var arr = [1, 2, 3];
var a2 = [4, 5, 6];
var arr2 = [...arr, ...a2];

arr2[0] = 100;

// console.log(arr2, arr, a2);

function fn(a, b, c) {
    console.log(a, b, c);
}

function fn2(a, ...array) {
    console.log(a, array);
}


// fn(...arr);
// fn2(10, 20, 30, 40, 50, 60);

var o1 = { width: 5, m1: function () { console.log('m1') } };
var o2 = { height: 10 };

var o3 = { ...o1, ...o2, color: 'Black', width: 1000 };

function fn3({ width, height }) {
    console.log(width,height);
}

fn3(o3);