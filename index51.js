// this keyword: arrow function
var m1 = { name: 'Mobile' };

function fn() {
    console.log('outer ', this.name);

    const fn2 = () => {
        console.log('inner ', this.name);
    }

    fn2();
}

fn.call(m1);