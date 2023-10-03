// error handling async JS

function addAsync(a, b, cb) {
    setTimeout(function () {
        if (a === 0) {
            const err = new Error('Invalid input');
            cb(null, err);
        } else {
            var c = a + b;
            cb(c, null);
        }
    }, 1000);
}

function callback(res, err) {
    // false, "", NaN, null, undefined, 0
    if (!err)
        console.log(res);
    else
        console.log(err);
}

addAsync(0, 20, callback);