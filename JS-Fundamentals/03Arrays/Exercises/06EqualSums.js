function equal(arr) {

    let hasEqualSum;

    for (let index = 0; index < arr.length; index++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let j = index - 1; j >= 0; j--) {
            leftSum += arr[j];
        }
        for (let num = index + 1; num < arr.length; num++) {
            rightSum += arr[num];
        }

        if (leftSum === rightSum) {
            console.log(index);
            hasEqualSum = true;
        }
    }
    if (!hasEqualSum) {
        console.log('no');
    }
}
equal([1]);