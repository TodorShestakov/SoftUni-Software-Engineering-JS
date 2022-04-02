function sumOfNumbers(input) {

    let sum = 0;
    let text = input[0];

    for (let i = 0; i < text.length; i++) {
        let currentNum = Number(text[i]);
        sum += currentNum;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["564891"])