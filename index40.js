var obj = {
    length: 5,
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
};

var res2 = [].slice.apply(obj, [0, 3]);
console.log(res2);
