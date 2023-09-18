// give a number print all the factors of it
// input: number
// output: print factors
// def: n, x  n%x===0, x is a factor
// 16, 4   16%4 ===0
// 1: 1
// 12: 1 3,4,6 12
// 16: 1,2, 4, 8, 16
// 20: 1,2,4,5,10,20
// 15: 1,3,5,15
// 17: 1 17

// camel casing
// n iterations
// 10^9 : 10^9
// improve this
// 100 : 100
// print sum of all integers upto: n 
// 10^9 -> 10^9 O(N) linear complexity
// function printFactors(n) {
//     for (var i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             console.log(i);
//         }
//     }
// }
function printFactors(n) {
    var upper = parseInt(Math.sqrt(n));
    for (var i = 1; i <= upper; i++) {
        if (n % i === 0) {
            console.log(i, n / i);
        }
    }
}

var res = printFactors(20);
console.log(res);