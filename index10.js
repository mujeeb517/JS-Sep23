// string
var str = 'abcskkskkskkkjfjjfjfjfjfj';
// find
// -1 : invalid index
// var res = str.lastIndexOf('skk');
// console.log(res);
// aggregate 
// electricity (1 to 50: 3, 51-100: 5rs, 100-7rs)
str = str.substring(0, 3);
console.log(str);
var res = str.concat(' abc');
console.log(res);

// string to number
// number to string
// anything to boolean
// boolean to string
// 0, "", null, undefined, NaN, false
// serialization
// deserialization

var x = 0;
var bool = !!x;

console.log(typeof bool.toString());
