function sum(input) {

    let combinations = 0;
    let isMagicFound = false;
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinations++;

            if (i + j == magic) {
                isMagicFound = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magic})`);
                return;
            }
        }
    }
    if (!isMagicFound) {
        console.log(`${combinations} combinations - neither equals ${magic}`);
    }
}
sum(["23",
    "24",
    "20"])

