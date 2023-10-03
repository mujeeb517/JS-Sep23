// palindrome
// aba : aba
// madam : madam 
// abc: cba

// function isPalindrome(str) {
//     const upper = parseInt(str.length / 2);
//     const n = str.length;

//     for (let i = 0; i < upper; i++) {
//         if (str[i] !== str[n - 1 - i]) {
//             console.log('Not palindrome');
//             return;
//         }
//     };
//     console.log('Palindrome');
// }

// abc -> ['a','b','c']
// madam -> ['m','a','d','a','m'] -> ['m','a','d','a','m']
// this is a sentence = str.split(' ') ["this","is" "a", "sentence"]


// function isPalindrome(str) {
//     const reverseStr = str.split('').reverse().join('');
//     // return str === reverseStr;
//     if (str === reverseStr) console.log('Palindrome');
//     else console.log('Not a palindrome');
// }

// array reverse
// string reverse
// [1,2,3,4] = [4,3,2,1] 
// function isPalindrome(str) {
//     let p1 = 0, p2 = str.length - 1;
//     while (p1 < p2) {
//         if (str[p1] !== str[p2]) {
//             console.log('Not a palindrome');
//             return;
//         }
//         p1++;
//         p2--;
//     }

//     console.log('Palindrome');
// }


// isPalindrome('abbab');

var arr = [10, 20, -1, 100, 50, 40];
var z = Math.max(...arr);
console.log(z);