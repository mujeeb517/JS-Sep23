// object literals {}
var mobile = {
    width: 5,
    height: 7,
    color: 'Black',

    call: function () {
        console.log('calling...');
    }
};

var m2 = mobile;

// copy
// function f1(a) {
//     a++;
//     console.log('value of a ', a);
// }

// var x = 10;
// f1(x);
// console.log('value of x ', x);

// function f2(obj) {
//     obj.width = 10000;
// }

// f2(mobile);
// console.log(mobile);