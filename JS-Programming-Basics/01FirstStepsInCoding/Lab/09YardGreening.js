function data(input) {

let sqrMeters = Number(input[0]);

let totalPrice = sqrMeters * 7.61;
let discount = 0.18 * totalPrice;
let totalSum = 0.82 * totalPrice;

console.log(`The final price is: ${totalSum} lv.`)
console.log(`The discount is: ${discount} lv.`)

}
data(["150"])