// parallel
function addAsync(a, b) {

    function promiseFn(res, rej) {
        setTimeout(() => {
            var c = a + b;
            res(c);
        }, 1000);
    }

    return new Promise(promiseFn);
}

function subAsync(a, b) {

    function promiseFn(res, rej) {
        setTimeout(() => {
            var c = a - b;
            res(c);
        }, 2000);
    }

    return new Promise(promiseFn);
}

function mulAsync(a, b) {
    function promiseFn(res, rej) {
        setTimeout(() => {
            var c = a * b;
            res(c);
        }, 3000);
    }

    return new Promise(promiseFn);
}

mulAsync(10, 20).then(res => console.log('mul', res));
addAsync(10, 20).then(res => console.log('add', res));
subAsync(10, 20).then(res => console.log('sub', res));