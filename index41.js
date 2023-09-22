// objects
// phone book
// data structure
/*  
   amazon.com

   [
    {id:'abc123',brand:'Apple',name:'Iphone 13 Pro Max 128',price: 12332,discount:10,
        reviews:[{},{},{}]},
    {},{},{}]
*/
var contact1 = {
    firstName: 'abc',
    lastName: 'def',
    emails: [
        { email: 'abc@gmail.com', primary: true },
        { email: 'xyz@gmail.com', primary: false }
    ],
    mobile: [
        { number: '+91-29383555', type: 'Home' },
        { number: '+91-29383556', type: 'Office' },
    ],
    image: 'base64:dkdkdkdkddkdkdkdkdkkdkfgghhghg',
    active: true
};

var contacts = [contact1,{},{},{}];
console.log(contact1.mobile)
