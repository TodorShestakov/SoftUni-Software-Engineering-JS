function triangle(people, type, day) {

    let singlePersonPrice = 0;
    let sum = 0;

    if (type === "Students") {
        if (day === "Friday") {
            singlePersonPrice = 8.45;
        } else if (day === "Saturday") {
            singlePersonPrice = 9.8;
        } else if (day === "Sunday") {
            singlePersonPrice = 10.46;
        }
        sum += people * singlePersonPrice;
        if (people >= 30) {
            sum *= 0.85;
        }
    } else if (type === "Business") {
        if (day === "Friday") {
            singlePersonPrice = 10.9;
        } else if (day === "Saturday") {
            singlePersonPrice = 15.6;
        } else if (day === "Sunday") {
            singlePersonPrice = 16;
        }
        sum += people * singlePersonPrice;
        if (people >= 100) {
            sum = (people - 10) * singlePersonPrice;
        }
    } else if (type === "Regular") {
        if (day === "Friday") {
            singlePersonPrice = 15;
        } else if (day === "Saturday") {
            singlePersonPrice = 20;
        } else if (day === "Sunday") {
            singlePersonPrice = 22.5;
        }
        sum += people * singlePersonPrice;
        if (people >= 10 && people <= 20) {
            sum *= 0.95;
        }
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}
triangle(40, "Regular", "Saturday")