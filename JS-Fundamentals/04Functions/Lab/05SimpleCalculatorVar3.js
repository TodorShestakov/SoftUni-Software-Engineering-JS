function printProcessedNumbers(numOne, numTwo, operator) {
    let operation = operator;
    operation = operation.replace("multiply", "*");
    operation = operation.replace("add", "+");
    operation = operation.replace("divide", "/");
    operation = operation.replace("subtract", "-");
    console.log(eval(`${numOne}${operation}${numTwo}`));
}
printProcessedNumbers(5, 5, "multiply");
printProcessedNumbers(40, 8, "divide");
printProcessedNumbers(12, 19, "add");
printProcessedNumbers(50, 13, "subtract");