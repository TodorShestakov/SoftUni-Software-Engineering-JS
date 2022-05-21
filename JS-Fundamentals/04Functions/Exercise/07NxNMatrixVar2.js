function printMatrix(n) {
    let sum = ' ';
    let counter = 0;
    for (let i = 0; i < n; i++) {
        counter++;
        sum += n + ' ';
        if (counter == n) {
            for (let j = 0; j < n; j++) {
                console.log(sum);
            }
        }
    }
}
printMatrix(7)