function add(a, b) {
    var c = a + b;
    return c;
}


var res = add(100, 200);
console.log(res);


// entity2 
// PayZapp
function addAsync(a, b, cb) {
    setTimeout(() => {
        var c = a + b;
        cb(c);
    }, 2000);
}

// entity 1
// call backs
function notify(output) {
    console.log(output);
}
// amazon
addAsync(10, 20, notify);

// single threaded 
// 1 person 
