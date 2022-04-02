function toyShop(input) {



    let excursionPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);


    let puzzlePriceS = 2.6;
    let dollsPriceS = 3;
    let bearPriceS = 4.1;
    let minionPriceS = 8.2;
    let truckPriceS = 2;

    let puzzle = puzzleCount * puzzlePriceS;
    let dolls = dollsCount * dollsPriceS;
    let bear = bearsCount * bearPriceS;
    let minion = minionCount * minionPriceS;
    let truck = truckCount * truckPriceS;

    let totalToysCount = puzzleCount + dollsCount + bearsCount + minionCount + truckCount;
    let totalToysPrice = puzzle + dolls + bear + minion + truck;

    if (totalToysCount >= 50) {
        totalToysPrice = 0.75 * totalToysPrice;
    }

    let rent = 0.1 * totalToysPrice;
    let totalmoney = totalToysPrice - rent;

    if (totalmoney >= excursionPrice) {
        let moneyLeft = totalmoney - excursionPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = excursionPrice - totalmoney;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }



}
toyShop(["40.8", "20", "25", "30", "50", "10"])
