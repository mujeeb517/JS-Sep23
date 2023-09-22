'use strict';

function fn() {
    console.log(this);

    function fn2() {
        console.log('fn2');
        console.log(this);
    }

    fn2();
}

var animal = {
    name: 'Animal',
    age: 10
};

fn.call(animal);