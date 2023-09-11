// functions
// data types: number, string, boolean, undefined, function
// arguments, parameters
// callee
// amazon, credit card processing
// y=mx+c
// constraints
function add(x, y) {
    if (typeof x !== 'number' || typeof y != 'number') throw new Error('invalid parameters');

    var z = x + y;
    return z;
}

// caller
// loosely typed lang
// flexible
// too less
// too many 
var result = add(10, 20, 30, 40, 50);
console.log(result);


