// Given a string convert it into a number
// do not use inbuilt function for parsing
// 1 2 3
// 123
// base 10 numbers
// 3 * 10^0 = 3
// 2 * 10^1 = 20
// 1 * 10^2 = 100  123
function parse(str) {
    let val = 0;
    let place = 1;

    for (let i = str.length - 1; i >= 0; i--) {
        val = val + (str[i] * place);
        place = place * 10;
    }

    return val;
}

console.log(parse('123456'));