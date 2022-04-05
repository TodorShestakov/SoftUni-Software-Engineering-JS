function factorial(input) {
    let number = Number(input[0]);
    let result = 1; // начална стойност 1, защото ако е 0 всички резултати ще са 0 

    for (let currNum = 2; currNum <= number; currNum++) {
        result *= currNum;
    }
    console.log(result);
}
factorial(["4"])
