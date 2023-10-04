// sequential 
// country -> states -> cities
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

// add -> sub -> mul
// callback hell
// addAsync(10, 20)
//     .then(addRes => {
//         subAsync(addRes, 10)
//             .then(subRes => {
//                 mulAsync(subRes, 10)
//                     .then(mulRes => {
//                         console.log(mulRes);
//                     });
//             });
//     });

// error handling in sequential 
// addAsync(10, 20)
//     .then(addRes => {
//         return subAsync(addRes, 0);
//     })
//     .then(subRes => {
//         return mulAsync(subRes, 10);
//     })
//     .then(mulRes => console.log(mulRes))
//     .catch(err => console.log(err));

subAsync(10, 0)
    .then(res => console.log(res))
    .catch(err => console.log(err));