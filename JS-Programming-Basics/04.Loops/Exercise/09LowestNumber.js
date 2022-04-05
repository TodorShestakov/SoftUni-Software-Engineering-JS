function lowestNumber(input) {

    let n = Number(input[0]);
    let minNumber = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i]);

        if (currentNum < minNumber) {
            minNumber = currentNum;
        }
    }

console.log(minNumber);

}
lowestNumber(["2",
    "100",
    "99"])
