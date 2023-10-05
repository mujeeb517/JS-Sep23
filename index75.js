// exception handling
// crashes program
// all programs -> app -> crashes app

try {
    // example.com -> abc@gmail.com -> 
    throw new Error('invalid');
} catch (e) {
    if (e.message.contains('unique key voilations')) {
        console.log('email already exists');
    } else if (e.message.contains('network error')) {
        console.log('please check your internet');
    } else console.log('Something went wrong, please try again');
} finally {
    console.log('finally');
}