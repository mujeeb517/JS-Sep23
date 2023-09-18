// print n to 1 using recursion
// print 1 to n using recursion

// function print(n) {
//     if (n === 0) return;

//     print(n - 1);
//     console.log(n);
// }

// print(10);

// given an array return min element from it
// iterative
// ex: [10,5,-1,-6,8,100] -6
// traversal 
// max: iteratively
// 2nd Max element
// min: recursion
function min(arr) {
    var minSoFar = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minSoFar) {
            minSoFar = arr[i];
        }
    }

    return minSoFar;
}

var arr = [100, 5, -1, -6, 8, 100];
var res = min(arr);
console.log(res);