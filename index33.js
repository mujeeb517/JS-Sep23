// constructor function
// template
// blue-print
// plan
// 2D plan
// pascal casing
function Mobile(color) {
    // instance properties
    // instance variable
    this.width = 5;
    this.height = 8;
    this.color = color;
}

Mobile.prototype.call = function () {
    console.log(this.color);
}

Mobile.prototype.sms = function () {
    console.log('sending...');
}

Mobile.prototype.PI = 3.14;

var m1 = new Mobile("Black");
var m2 = new Mobile("Red");
var m3 = new Mobile("Blue");

console.log(m1.PI);
console.log(m2.PI);

// list of object
// list of numbers
// var objs = [];
// for (var i = 0; i <= 10; i++) {
//     var obj = new Mobile();
//     objs.push(obj);
// }

// console.log(objs);