function printAndSum(startNum, endNum) {

    let sum = 0;
    let counter = '';

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        counter += i + " ";
    }
    console.log(counter);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)