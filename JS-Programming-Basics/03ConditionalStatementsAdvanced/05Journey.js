function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let moneySpent;
    let type;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            type = "Camp";
            moneySpent = 0.3 * budget;
        } else if (season == "winter") {
            type = "Hotel";
            moneySpent = 0.7 * budget;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            type = "Camp";
            moneySpent = 0.4 * budget;
        } else if (season == "winter") {
            type = "Hotel";
            moneySpent = 0.8 * budget;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        type = "Hotel";
        moneySpent = 0.9 * budget;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${moneySpent.toFixed(2)}`);
}
journey(["75", "winter"])