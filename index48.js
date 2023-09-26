// object.assign
// object.is
var m1 = { width: 5 };
var m2 = { height: 7 };

// var o = Object.assign({ color: 'Black' }, m1, m2);

// o.width = 10000;
// console.log(o, m1);

// var o = { ...m1 };

// var m2 = { width: 5 };

// console.log(Object.is(m2, m1));
class Mobile {
    width = 5;
    height = 7;
}
var m3 = new Mobile();
var m4 = m3;

