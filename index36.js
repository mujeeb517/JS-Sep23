// literals
// constructor
// object.create
// class ES6
// modules

class BaseMobile {
    constructor() {
        console.log('base constructor');
    }
    sms() {
        console.log('sending...');
    }
}

// plan or template
class Mobile extends BaseMobile {
    constructor(color) {
        super();
        // init
        // light weight
        this.width = 5;
        this.height = 10;
        this.color = color;
        console.log('derived constructor');

    }

    call() {
        console.log('callling...');
    }
}

var m1 = new Mobile("Red");
var m2 = new Mobile("Black");
var m3 = new Mobile("Blue");

m1.sms();

console.log(m1);
// object.create
// inheritance
// strict/sloppy
// class