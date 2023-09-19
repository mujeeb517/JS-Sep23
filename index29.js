// dictionaries
// key and value
var mobile = {
    width: 5,
    height: 8,
    color: 'Black',
    call: function () {
        console.log('calling...');
    }
};

// for : arrays
// for-in
// dot notation
// bracket notation
mobile.brand = "Apple";

for (var key in mobile) {
    console.log(key + ':' + mobile[key]);
}

// var prop = "width";


// mobile.call();
// // mobile["call"]();