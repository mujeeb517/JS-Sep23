function addAsync(a, b, cb) {
    const f = () => {
        var c = a + b;
        cb(c);
    };

    setTimeout(f, 2000); // at least 2 seconds
}

function fn() {
    for (var i = 0; i < 10000000000; i++) {

    }
}

addAsync(10, 20, res => console.log(res)); // 2 sec, non blocking
fn();


// sync: 
// async : events, timers, db, file, http
// call back
// promises
// async await