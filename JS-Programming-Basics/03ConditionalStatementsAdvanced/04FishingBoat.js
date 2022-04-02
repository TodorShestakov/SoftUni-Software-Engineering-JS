function boat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);
    let boatRent;

    if (season === "Spring") {
        boatRent = 3000;
        if (fishermanCount <= 6) {
            boatRent *= 0.9;
        } else if (fishermanCount >= 7 && fishermanCount <= 11) {
            boatRent *= 0.85;
        } else {
            boatRent *= 0.75;
        }
    } else if (season === "Winter") {
        boatRent = 2600;
        if (fishermanCount <= 6) {
            boatRent *= 0.9;
        } else if (fishermanCount >= 7 && fishermanCount <= 11) {
            boatRent *= 0.85;
        } else {
            boatRent *= 0.75;
        }
    } else if (season === "Summer" || season === "Autumn") {
        boatRent = 4200;
        if (fishermanCount <= 6) {
            boatRent *= 0.9;
        } else if (fishermanCount >= 7 && fishermanCount <= 11) {
            boatRent *= 0.85;
        } else {
            boatRent *= 0.75;
        }
    }
    if ((fishermanCount % 2 == 0) && (season != "Autumn")) {
        boatRent *= 0.95;
    }

    let difference = Math.abs(boatRent - budget);

    if (budget >= boatRent) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }
}
boat(["2000",
    "Winter",
    "13"])



