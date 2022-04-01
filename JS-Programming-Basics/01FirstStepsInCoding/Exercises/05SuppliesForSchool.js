function rent(input){

let rent = Number(input[0]);
let cakePrice = 0.2 * rent;
let drinksPrice = 0.55 * cakePrice;
let animatorPrice = rent / 3;

let totalSum = rent + cakePrice + drinksPrice + animatorPrice;

console.log(totalSum);


}
rent(["3720"])