// callbacks
// promises
// async await

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

async function init() {
    const res = await addAsync(10, 20);
    console.log(res);
}


init();