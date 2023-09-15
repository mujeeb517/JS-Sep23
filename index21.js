// given a number n, print all the even numbers upto n (exclusive, inclusive)
// input: number
// output: print all even numbers
// constraints: 
//  1<=n<=10^18
//  negative numbers
//  zero
// >10^9
// def: any number which is fully divisible by 2, reminder 0
// ex: 2,4,6,8,10
// ex: 1,3,5,7
// function printEven(n) {
//     for (var i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// function printEven(n) {
//     for (var i = 1; i <= n; i++) {
//         if (i % 2 !== 0) continue;

//         console.log(i);
//     }
// }

function printEven(n) {
    for (var i = 2; i <= n; i = i + 2) {
        console.log(i);
    }
}


printEven(10);