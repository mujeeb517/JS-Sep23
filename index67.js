// sequential execution
function addAsync(a, b, cb) {
    setTimeout(function () {
        var c = a + b;
        cb(c);
    }, 2000);
}

function subAsync(a, b, cb) {
    setTimeout(function () {
        var c = a - b;
        cb(c);
    }, 1000);
}

function mulAsync(a, b, cb) {
    setTimeout(function () {
        var c = a * b;
        cb(c);
    }, 3000);
}

// add -> sub -> mul
// pipeline 
// Country -> States -> Cities
// callback hell
addAsync(10, 20, addRes => {
    subAsync(addRes, 10, subRes => {
        mulAsync(subRes, 10, mulRes => {
            console.log('final result', mulRes);
        });
    });
});

// subAsync(10, 20, res => console.log('add', res));
// mulAsync(10, 20, res => console.log('add', res));