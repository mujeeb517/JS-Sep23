// everything is a value

// entity 1
// callee
function fn(a) {
    a();
}

// fn(10);
// fn(true);
// fn("abc");
// fn()
// callback function
// phone number
// caller
// entity 2
fn(() => console.log('f'));