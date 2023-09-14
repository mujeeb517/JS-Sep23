// switch case 

var agg = 70;

switch (agg) {
    // Cmd+Shift+F
    // agg === 70
    // agg>=70
    // explict fall through
    case 70:
        console.log('Distinction');
        break;
    case 60:
        console.log('I Class');
        break;
    case 50:
        console.log('II Class');
        break;
    case 40:
        console.log('III Class');
        break;
    default:
        console.log('Failed')
        break;
}