// sync
// async : non predictable, no return, callback
// non-blocking
// amazon -> place order -> credit card -> freezed

function addAsync(a, b, cb) {
    console.log('Processing...');
    setTimeout(function () {
        console.log('Calculating...');
        var c = a + b;
        console.log('Calculated...');
        cb(c);
    }, 1000);

    console.log('Processed...');
    return undefined;
}

addAsync(10, 20, res => console.log(res));