function operations(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let operation;

    if (operator == "+") {
        operation = n1 + n2;
        if (operation % 2 == 0) {
            console.log(`${n1} + ${n2} = ${operation} - even`);
        } else {
            console.log(`${n1} + ${n2} = ${operation} - odd`);
        }
    } else if (operator == "-") {
        operation = n1 - n2;
        if (operation % 2 == 0) {
            console.log(`${n1} - ${n2} = ${operation} - even`);
        } else {
            console.log(`${n1} - ${n2} = ${operation} - odd`);
        }
    } else if (operator == "*") {
        operation = n1 * n2;
        if (operation % 2 == 0) {
            console.log(`${n1} * ${n2} = ${operation} - even`);
        } else {
            console.log(`${n1} * ${n2} = ${operation} - odd`);
        }
    } else if (operator == "/") {
        operation = n1 / n2;
        if (n2 != 0) {
            console.log(`${n1} / ${n2} = ${operation.toFixed(2)}`);
        } else {
            console.log(`Cannot divide ${n1} by zero`);
        }
    } else if (operator == "%") {
        operation = n1 % n2;
        if (n2 != 0) {
            console.log(`${n1} % ${n2} = ${operation}`);
        } else {
            console.log(`Cannot divide ${n1} by zero`);
        }
    }
}
operations(["10",
    "1",
    "-"])









