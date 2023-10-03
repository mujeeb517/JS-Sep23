// parallel execution
function addAsync(a, b, cb) {
    setTimeout(function () {
        var c = a + b;
        cb(c);
    }, 2000);
}

function subAsync(a, b, cb) {
    setTimeout(function () {
        var c = a - b;
        cb(c);
    }, 1000);
}

function mulAsync(a, b, cb) {
    setTimeout(function () {
        var c = a * b;
        cb(c);
    }, 3000);
}

// parallel
mulAsync(10, 20, res => console.log('mul', res));
addAsync(10, 20, res => console.log('add', res));
subAsync(20, 10, res => console.log('sub', res));