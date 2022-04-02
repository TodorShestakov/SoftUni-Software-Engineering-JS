function house(input) {

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let amount;

    if (flowerType == "Roses") {
        amount = flowerCount * 5;
        if (flowerCount > 80) {
            amount *= 0.9;
        }
    } else if (flowerType == "Dahlias") {
        amount = flowerCount * 3.8;
        if (flowerCount > 90) {
            amount *= 0.85;
        }
    } else if (flowerType == "Tulips") {
        amount = flowerCount * 2.8;
        if (flowerCount > 80) {
            amount *= 0.85;
        }
    } else if (flowerType == "Narcissus") {
        amount = flowerCount * 3;
        if (flowerCount < 120) {
            amount *= 1.15;
        }
    } else if (flowerType == "Gladiolus") {
        amount = flowerCount * 2.5;
        if (flowerCount < 80) {
            amount *= 1.2;
        }
    }

    let difference = Math.abs(amount - budget);

    if (amount <= budget) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }


}
house(["Narcissus",
    "119",
    "360"])






