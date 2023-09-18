// recursion 
// Iterative, recursively

// 5! = 5 * 4! = 5 * 4 * 3! = 5 * 4 * 3 * 2! = 5 * 4 * 3 * 1! = 5 * 4 * 3 * 2 * 1
// base condition, exit condition

// method calling itself
function f1() {
    console.log('f1');
    f1();
}

// function f2() {
//     console.log('f2');
//     f1();
// }

// f2();

f1();