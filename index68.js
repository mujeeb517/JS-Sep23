// Dominos 
// food -> token
// food
//  

// Payzapp
function addAsync(a, b) {
    var p = new Promise(function (res, rej) {
        setTimeout(function () {
            if (a === 0) {
                const e = new Error('invalid input');
                rej(e);
            } else {
                var c = a + b;
                res(c);
            }
        }, 2000);
    });


    return p;
}

var p = addAsync(0, 20);

p.then(success, error);

// pending, resolved, rejected: only once
// error handling
// resolved, caches
function success(res) {
    console.log(res);
}

function error(err) {
    console.log(err.message);
}


