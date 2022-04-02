function godzillaVsKong(input) {

    /* 
        1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
        2.	Брой на статистите – цяло число в интервала [1 … 500]
        3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00] */

    let budget = Number(input[0]);
    let employees = Number(input[1]);
    let priceForEmployeeClothes = Number(input[2]);


    let totalPrice = employees * priceForEmployeeClothes;
    let decorPrice = 0.1 * budget;

    if (employees > 150) {
        totalPrice = 0.9 * totalPrice;
    }
    let finalPrice = totalPrice + decorPrice;
    let left = finalPrice - budget;
    if (finalPrice > budget) {
        
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(Math.abs(budget - finalPrice)).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(Math.abs(left)).toFixed(2)} leva left.`);
    }


}
godzillaVsKong(["20000",
    "120",
    "55.5"])
