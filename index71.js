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
            if (b === 0) {
                rej('Invalid input');
            } else {
                var c = a - b;
                res(c);
            }
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

// addAsync(10,20).then(res=>console.log('add',res));
// subAsync(10,20).then(res=>console.log('sub',res));
// mulAsync(10,20).then(res=>console.log('mul',res));

var addPrms = addAsync(10, 20);
var subPrms = subAsync(10, 20);
var mulPrms = mulAsync(10, 20);

// Promise.all([addPrms, subPrms, mulPrms])
//     .then(res => console.log(res));

Promise.any([addPrms, subPrms, mulPrms])
    .then(res => console.log(res));
