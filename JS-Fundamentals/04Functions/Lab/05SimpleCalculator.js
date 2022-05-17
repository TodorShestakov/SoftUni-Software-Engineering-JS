function simpleCalculator(a, b, operator) {

    let multiply = (a, b) => a * b;
    let subtract = (a, b) => a - b;
    let add = (a, b) => a + b;
    let divide = (a, b) => a / b;

    switch (operator) {
        case 'multiply':
            return (multiply(a, b));
        case 'divide':
            return (divide(a, b));
        case 'subtract':
            return (subtract(a, b));
        case 'add':
            return (add(a, b));
    }

}
console.log(simpleCalculator(5, 5, 'multiply'));
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(12, 19, 'add'));
console.log(simpleCalculator(50, 13, 'subtract'));