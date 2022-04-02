function data(input){

let depositedSum = Number(input[0]);
let timeMonths = Number(input[1]);
let annualPerc = Number(input[2]);

let yearInterestRate = depositedSum * (annualPerc / 100);
let monthlyInterest = yearInterestRate / 12;
let sum = depositedSum + (timeMonths * monthlyInterest);


console.log(sum)

}
data(["200",
"3",
"5.7"])
