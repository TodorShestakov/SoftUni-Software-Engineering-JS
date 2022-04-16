function float(a, b, c) {
    let sum = a + b + c;
    let type = 'Integer';

    if (sum % 1 != 0) {
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);
}
float(1, 2, 3);
float(1, 2, 3.14);

