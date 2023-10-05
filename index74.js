// async await error handling
function addAsync(a, b) {
    function promiseFn(res, rej) {
        setTimeout(() => {
            if (a === 0) {
                rej(new Error('Invalid input'));
            }
            var c = a + b;
            res(c);
        }, 1000);
    }

    var p = new Promise(promiseFn);
    return p;
}

async function init() {
    var x = 10;
    try {
        // file 
        // opend
        // operation:: exception
        const res = await addAsync(0, 10);
        console.log(res);
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log('finally');
    }
}

init();


