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

function resolve(op) {
    console.log(op);
}

function reject(e) {
    console.log(e.message);
}

var p = addAsync(0, 20)
    .then(resolve);


// class MyPromise {

//     constructor(fn) {

//     }

//     then(res) {
//         if (typeof res !== 'function') throw new Error('then should have a callback function');
        
//     }

//     catch(rej) {

//     }
// }

// var p = new MyPromise(function (res, rej) {

// });


// console.log(typeof p);