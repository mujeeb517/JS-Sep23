// if else if ladder
/*
    Distinction: >=70
    I Class: >=60
    II Class: >=50
    III Class: >=40
*/

var agg = 70;
if (agg >= 70) {
    console.log('Distinction');
}

else if (agg >= 60) {
    console.log('I Class');
}

else if (agg >= 50)
    console.log('II Class');

else if (agg >= 40) {
    console.log('III Class');
}
else {
    console.log('Default');
}