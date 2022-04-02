function lily(input) {

    let LilyAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCount = 0;
    let money = 0;
    let moneyYears = 0;
    let savedMoney = 0;

    for (let currentAge = 1; currentAge <= LilyAge; currentAge++) {

        if (currentAge % 2 === 0) {
            moneyYears += 1;
            money = moneyYears * 10;
            savedMoney += money;

        } else {
            toysCount += 1;
        }
    }
    let totalMoney = toysCount * singleToyPrice + (savedMoney - moneyYears);
    let difference = Math.abs(totalMoney - washingMachinePrice);

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }
}
lily(["21", "1570.98", "3"]);