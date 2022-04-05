function year(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    for (let currYear = start; currYear <= end; currYear += 4) {
        console.log(currYear);
    }
}
year(["1908",
    "1919"])
