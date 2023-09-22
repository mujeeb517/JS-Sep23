// this keyword

/*
1. inside object this keyword refers to the object
2. extracted function points to global object
3. extracted function points to undefined object in strict mode
4. call function changes the context
5. apply function changes the context
6. bind function changes the context and fixes the context
7. independent function refers to global object
8. independent function refers to undefined in strict mode
9. nested function refers to global object
10. nested function refers to undefined in strict mode
*/

'use strict';

var m1 = {
    width: 5,
    height: 10,
    name: 'Mobile',

    print: function (a, b) {
        console.log(this.name, a, b);
    },
}

var car = {
    name: 'Car'
};


// m1.print();
// // call
// m1.print.call(car, 1, 2);
// m1.print.apply(car, [1, 2]);

var fn = m1.print.bind(car);
// fn(10,20);

// fixes this context

// var f = m1.print;
// f();