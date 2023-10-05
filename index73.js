// sequential execution
function addAsync(a, b) {
    function promiseFn(res, rej) {
        setTimeout(() => {
            var c = a + b;
            res(c);
        }, 1000);
    }

    var p = new Promise(promiseFn);
    return p;
}

function subAsync(a, b) {
    function promiseFn(res, rej) {
        setTimeout(() => {
            var c = a - b;
            res(c);
        }, 1000);
    }

    var p = new Promise(promiseFn);
    return p;
}

function mulAsync(a, b) {
    function promiseFn(res, rej) {
        setTimeout(() => {
            var c = a * b;
            res(c);
        }, 1000);
    }

    var p = new Promise(promiseFn);
    return p;
}

// addAsync(10, 20)
//     .then(res => {
//         return subAsync(res, 10);
//     })
//     .then(subRes => {
//         return mulAsync(subRes, 10);
//     })
//     .then(mul => {
//         console.log(mul);
//     });

async function init() {
    const addRes = await addAsync(10, 20);
    const subRes = await subAsync(addRes, 10);
    const mulRes = await mulAsync(subRes, 10);
    console.log(mulRes);
}

init();