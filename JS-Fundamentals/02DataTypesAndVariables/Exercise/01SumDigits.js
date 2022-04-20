function sum(n) {

    let numAsString = String(n);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);     
    }

    console.log(sum);
}
sum(97561);