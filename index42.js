// ES6: ECMASCRIPT JAVASCRIPT
// standards IEEE
// adapters
// applications browsers
// IE: Microsoft, chrome: Google
// JS engine, V8
// IE, Chrome, Mozilla
// once -> all the browsers

// let
// var: function scoped
// let: block scoped
// const: block scoped, constant
// hoisting

function fn() {
    if (true) {
        // const x = 10;
        // x = 20;
        // console.log(x);
        // modifications
        const arr = [1, 2, 3];
        // arr.push(4);

        // arr = [4, 5, 6];
        const o = { width: 1 };
        const o2 = o;

        o.width = 5;

        console.log(o2);
    }
}

fn();