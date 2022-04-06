function minNum(input) {

    let command = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (command !== 'Stop') {
        let num = Number(command);
        if (num < min) {
            min = num;
        }
        command = input[index];
        index++;
    }
    console.log(min);
}
minNum(["100", "99", "80", "70", "Stop"])
