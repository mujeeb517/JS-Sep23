// arrow functions: anonymous 
function fn(a) {
    console.log('fn', a);
}

var f = a => console.log('fn', a);

// f(100);
function add(a, b) {
    console.log('calling...');
    return a + b;
}

var f2 = (a, b) => {
    console.log('calling...');
    return a + b;
}

var res = f2(10, 20);
console.log(res);