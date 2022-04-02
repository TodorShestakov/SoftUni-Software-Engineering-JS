function hotel(input) {

    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice;
    let appartmentPrice;
    let totalAmountStudio;
    let totalAmountAppartment;

    if (month == "May" || month == "October") {
        studioPrice = 50;
        appartmentPrice = 65;
        totalAmountStudio = studioPrice * nights;
        totalAmountAppartment = appartmentPrice * nights;
        if (nights > 7 && nights <= 14) {
            totalAmountStudio *= 0.95;
        } else if (nights > 14) {
            totalAmountStudio *= 0.7;
            totalAmountAppartment *= 0.9;
        }
    } else if (month == "June" || month == "September") {
        studioPrice = 75.2;
        appartmentPrice = 68.7;
        totalAmountStudio = studioPrice * nights;
        totalAmountAppartment = appartmentPrice * nights;
        if (nights > 14) {
            totalAmountStudio *= 0.8;
            totalAmountAppartment *= 0.9;
        }
    } else {
        studioPrice = 76;
        appartmentPrice = 77;
        totalAmountStudio = studioPrice * nights;
        totalAmountAppartment = appartmentPrice * nights;
        if (nights > 14) {
            totalAmountAppartment *= 0.9;
        }
    }
    console.log(`Apartment: ${totalAmountAppartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalAmountStudio.toFixed(2)} lv.`);
}
hotel(["June",
    "14"])

