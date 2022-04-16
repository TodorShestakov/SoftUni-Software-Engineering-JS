function centuries(input) {

    let years = input * 100;
    let days = Math.trunc(365.2422 * years);
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log(`${input} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuries(1);