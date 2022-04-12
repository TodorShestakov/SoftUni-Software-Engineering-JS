function sumPrime(input) {

    let index = 0;
    let command = input[index];
    index++;

    let primeNumberSum = 0;
    let nonPrimeNumberSum = 0;

    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            primeNumberSum += num;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumberSum += num;
        } else {
            nonPrimeNumberSum += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeNumberSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumberSum}`);
}
sumPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])

