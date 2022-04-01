function data(input){

// 1.	Депозирана сума – реално число в интервала [0.00 … 10000.00];
// 2.	Срок на депозита(в месеци) – цяло число[1..12];
// 3.	Годишен лихвен процент – реално число в интервала [0.00 … 10000.00];

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
