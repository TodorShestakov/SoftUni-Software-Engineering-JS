function table(input) {

    let number = Number(input[0]);
    let result = 0;
    let num = 0;

    for (let currNum = 1; currNum <= 10; currNum++) {
        num = currNum * number;
        console.log(`${currNum} * ${number} = ${num}`);
    }

}
table(["5"])