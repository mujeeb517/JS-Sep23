// var contact1 = {
//     firstName: 'abc',
//     lastName: 'def',
//     emails: [
//         { email: 'abc@gmail.com', primary: true, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//         { email: 'xyz@gmail.com', primary: false, features: { prop1: 'value1', prop2: 'value2', prop3: 'value3' } },
//     ],
//     mobile: [
//         { number: '+91-29383555', type: 'Home' },
//         { number: '+91-29383556', type: 'Office' },
//     ],
//     image: 'base64:dkdkdkdkddkdkdkdkdkkdkfgghhghg',
//     active: true
// };


function fn1() {
    console.log('fn1');
    fn2();
}

function fn2() {
    console.log('fn2');
}

fn1();
fn2();
fn1();