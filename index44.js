// object/property destructuring
var m1 = { width: 5, height: 7, color: 'Black', features: { call: true, sms: true } };

// var width = m1.width;
// var height = m1.height;
// IE 7, polyfills
// NodeJS, IE
// backend, React, angular, frontend
// server: NodeJS
// React 
// facebook.com -> 2billion
// alias
var width = 100;


// const features = m1.features;
// const call = features.call;

// const call = m1.features.call;

const { features: { call } } = m1;

console.log(call);




// const { features } = m1;

// const { call } = features;

// const m2 = { ...m1, color: 'Red', width: 7 };
console.log(call);