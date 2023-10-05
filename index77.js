// myMap

var arr = [1, 2, 3, 4, 5];

// var transformedArr = arr.map(elem => elem * 2);

// console.log(transformedArr, arr);

function myMap(transformFn) {
    if (typeof transformFn !== 'function') throw new Error('invalid transform function');

    const result = [];
    for (let i = 0; i < this.length; i++) {
        const transformedElem = transformFn(this[i]);
        result.push(transformedElem);
    }

    return result;
}

function Mobile() {
    this.width = 5; // 8 bytes
    this.height = 10;
}

Mobile.prototype.call = function () { // 8 bytes
    console.log('calling...');
}

var m1 = new Mobile(); // 16
var m2 = new Mobile(); // 16
var m3 = new Mobile();

Array.prototype.myMap = myMap;


// obj.fn() -> obj
// arr.myMap -> arr
// nums.myMap -> nums

var nums = [2, 3, 4, 5, 6]; 

const transformedArr = nums.myMap(elem => elem * 2);
console.log(transformedArr, nums);