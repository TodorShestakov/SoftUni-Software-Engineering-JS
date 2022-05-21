function oddAndEvenSum(number) {

    let numAsText = number.toString();

    function totalOddSum(numAsString) {
        let oddSum = 0;
        for (let index = 0; index < numAsString.length; index++) {
            let currentNum = Number(numAsString[index]);
            if (currentNum % 2 !== 0) {
                oddSum += currentNum;
            }
        }
        return oddSum;
    }

    function totalEvenSum(numAsText) {
        let evenSum = 0;
        for (let index = 0; index < numAsText.length; index++) {
            let currentNum = Number(numAsText[index]);
            if (currentNum % 2 === 0) {
                evenSum += currentNum;
            }
        }
        return evenSum;
    }
    console.log(`Odd sum = ${totalOddSum(numAsText)}, Even sum = ${totalEvenSum(numAsText)}`);
}
oddAndEvenSum(1000435);