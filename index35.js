// two modes: sloppy mode, strict mode
// local -> development -> qa -> staging -> production
// err -> err -> err -> err -> err
//  www.qa.facebook.com
// production
'use strict';

// var baseMobile = {};

var m1 = Object.create({}, {
    width: { value: 5, writable: false, configurable: false, enumerable: true },
    height: { value: 10, enumerable: true }
});

// mobile.width=1000;
// console.log(m1);


// for (x in m1) {
//     console.log(x);
// }

// x = 10;
// console.log(x);


function fn(a, b) {
    console.log(a + b);
}

fn(10, 20);