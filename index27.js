// find max element from array
// function max(arr) {
//     var maxSoFar = arr[0];

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > maxSoFar) {
//             maxSoFar = arr[i];
//         }
//     }

//     return maxSoFar;
// }



var arr = [10, 5, -1, -6, 8, 100];

// var maxSoFar = arr[0];
// var i = 1;

// function maxRec(arr) {
//     if (i === arr.length) return maxSoFar;

//     if (arr[i] > maxSoFar) {
//         maxSoFar = arr[i];
//     }
//     i++;
//     return maxRec(arr);
// }

function maxRec(arr, i, maxSoFar) {
    if (i === arr.length) return maxSoFar;

    if (arr[i] > maxSoFar) maxSoFar = arr[i];
    return maxRec(arr, i + 1, maxSoFar);
}

var res = maxRec(arr, 1, arr[0]);
console.log(res);