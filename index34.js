// object literals
// constructor function
// object.create
// readability
// base or parent or super
// child or derived
// inheritance

var baseMobile = {
    features: {
        call: true,
        sms: true
    },
    call: function () {
        console.log('callling....');
    }
};

var m1 = Object.create(baseMobile, {
    width: { value: 5, writable: true, enumerable: true },
    height: { value: 10, enumerable: true },
    PI: { value: 3.14, writable: false, enumerable: false, configurable: true }
});

// method overriding or method hiding
m1.call = function () {
    console.log('parent calling function');
}

// reconfiguration
// Object.defineProperty(m1, 'PI', {
//     writable: true,
//     enumerable: true
// });

// m1.call();

// console.log(m1.xyz());