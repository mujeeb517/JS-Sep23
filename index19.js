// loops
// skips 
// repititatively 

// print 1 to 10
// for, while, do-while

// loop variant
// start, end
// lower - upper
// init: 1
// condition: n
// increment: n
// body: n

// order:
// init: 1
// condition
// body
// increment
// for (var i = 1; i <= 5; i++) {
//     console.log(i);
// }

// 0 to 9
// forward 
// reverse
// for (var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// print 10 to 1
// 10
// 9
//.....
// 1
// 0 x
// for (var i = 10; i >= 0; i--) {
//     console.log(i);
// }

// infinite loop
// for (var i = 0; ; i++) {
//     console.log('hello');

//     if (i === 10) {
//         break; // exits the loop
//     }
// }

// 1 to 10
for (var i = 0; i <= 10; i++) {
    if (i === 5) {
        continue; // skips iteration
    }
    console.log(i);
}
