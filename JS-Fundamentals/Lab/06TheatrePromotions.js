function solve(day, age) {

    let price;

    if (age >= 0 && age <= 122) {
        if (day === 'Weekday') {
            if (age > 18 && age <= 64) {
                price = 18;
            } else {
                price = 12
            }
        } else if (day === 'Weekend') {
            if (age > 18 && age <= 64) {
                price = 20;
            } else {
                price = 15
            }
        } else if (day === 'Holiday') {
            if (age <= 18) {
                price = 5;
            } else if (age <= 64) {
                price = 12;
            } else {
                price = 10;
            }
        }
        console.log(price + '$');
    } else {
        console.log('Error!');
    }

}
solve('Weekday', 42)