var mobile = {
    arr: [1, 2, 3, 4],
    width: 5,
    height: 7,
    color: 'Black',
    features: {
        call: true,
        videoCall: true,
        ram: 4,
        storage: 128,
        obj: {
            x: 1,
            y: 2
        }
    }
};


// shallow cloning
// deep cloning
// refactoring
function cloneArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            output[i] = clone(arr[i]);
        } else {
            output[i] = arr[i];
        }
    }
}
function clone(obj) {
    var res = {};
    for (var key in obj) {
        if (Array.isArray(obj[key])) {
            res[key] = cloneArr(obj[key]);
        }
        else if (typeof obj[key] === 'object') {
            res[key] = clone(obj[key]);
        } else {
            res[key] = obj[key];
        }
    }

    return res;
}

var m2 = clone(mobile);
m2.features.call = false;
console.log(m2.arr, mobile.arr);

// installation (NodeJS, Code, Git)
// console.log
// variables & data types (number, string, boolean, undefined, function, object)
// operators: arithmatic, logical, conditional, bitwise, unary, ternary, =, typeof, new
// conversions (number to string)
// conditional statements
// loops, for while, do-while, for-in
// truthy & falsy
// objects: literals, constructors
