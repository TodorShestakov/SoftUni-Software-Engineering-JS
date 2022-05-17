function power(n, x) {
    let result = 1;

    //let result = Math.pow(n, x);
    for (let i = 1; i <= x; i++) {
        result *= n;
    }

    console.log(result);
}
power(2, 8);