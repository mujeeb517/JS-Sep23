function fact(n) {
    if (n === 1) return 1;
    return n * fact(n - 1);
}

// for (var i = 1; i <= n; i++) {
//     res = res * i;
// }
// return res;
// quick sort : divide & conquer

var res = fact(3);
console.log(res);

// 5! = 5 * 4!
// n! = n * (n-1)!