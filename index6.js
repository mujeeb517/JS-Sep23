var marks = 540;
var subjects = 6; // 6 subjects
/*
  70%: Distinction
  60-69%: I Class
  50-59%: II Class
  40-49%: III Class
  -: Failed
*/

// variables
// arithmatatic 
var aggregate = (marks / (subjects * 100)) * 100;

var result; // undefined

if (aggregate >= 70) {
    result = "Distinction";
} else if (aggregate >= 60) {
    result = "I Class"
} else if (aggregate >= 50) {
    result = "II Class"
} else if (aggregate >= 40) {
    result = "III Class"
} else {
    result = "Failed";
}

console.log(result);



