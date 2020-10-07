let massMark = 80;
let massJohn = 80;
let heightMark = 2;
let heightJohn = 1.9;
let bmiJohn = massJohn/ (heightJohn * heightJohn);
let bmiMark = massMark/ (heightMark * heightJohn);

bmiJohn = bmiJohn.toFixed(2);
bmiMark = bmiMark.toFixed(2);

let bigger = bmiJohn > bmiMark;

console.log(`Is john BMI is higher than mark? Answer is ${bigger}. Because john bmi is ${bmiJohn} and mark bmi is ${bmiMark}.`);


