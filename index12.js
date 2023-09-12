function fn1() {
    console.log('fn1');
    return 1;
}

function fn2() {
    console.log('fn2');
}


var x = 10;

var functions = [fn1, fn2];

console.log( functions[0]  ());