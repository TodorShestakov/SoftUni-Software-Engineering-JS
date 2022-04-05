function maxNum(input) {

    let command = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while (command !== 'Stop') {
        let num = Number(command);
        if (num > max) {
            max = num;
        }
        command = input[index];
        index++;
    }
    console.log(max);
}
maxNum(["100", "99", "80", "70", "Stop"])
