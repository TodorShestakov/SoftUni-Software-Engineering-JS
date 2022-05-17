function isPositive(a, b, c) {

    let arr = [a, b, c];
    let isNegative = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (currentNum < 0) {
            isNegative++;
        }
    }
    if (isNegative % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

}
isPositive(5, 12, -15);