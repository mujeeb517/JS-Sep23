// number, bolean, string, undefined, function, object

// object: real world entity
// mobile: properties, operations
// data, methods
// state, behavior 
// color, width, height, 
// make call, send sms, play...

// variable
// save 
// encapsulation: binding data and method together
// scalar: number
// complex: objects, arrays
var mobile = {
    // data, state, properties
    width: 5,
    height: 8,
    color: 'Black',
    active: true,

    // methods, behavior, operations
    call: function () {
        console.log("calling....");
    }
};


// javascript
// run time
mobile.brand = "Apple";

delete mobile.width;

console.log(typeof mobile.width);