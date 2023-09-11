// function add() {
//     // scope of x is in the function it is declared
//     var x = 10;
//     var y = 20;
//     var z = x + y;

//     function sub() {
//         z--;
//         console.log(z);
//     }

//     sub();
// }

// add();



// function delcaration
// hoisting
// function fn() {
//     console.log('fn');
// }

// function expression
// no void methods/functions
var fn = function () {
    console.log('fn');
    return 10;
}

var res = fn();
console.log(res);