function odd(arr) {

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);

    }
    for (let num of arr) {
        if (num % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    let difference = sumEven - sumOdd;
    console.log(difference);

}
odd([2,4,6,8,10]);