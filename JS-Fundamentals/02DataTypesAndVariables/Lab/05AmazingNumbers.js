function amazing(num) {
    let result = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }
    let resultAsString = String(result);

    let special = false;

    for (let i = 0; i < resultAsString.length; i++) {
        if (resultAsString[i] == '9') {
            special = true;
        }
    }
    if (special) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazing(1233);
amazing(999);
amazing(7814);
amazing(982);