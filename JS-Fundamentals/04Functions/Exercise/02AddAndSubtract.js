function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    function sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    let numbersSum = sum(firstNumber, secondNumber);
    let result = subtract(numbersSum, thirdNumber);
    return result;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42));