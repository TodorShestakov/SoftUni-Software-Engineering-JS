function magicSum(arr, magicNumber) {

    for (let index = 0; index < arr.length; index++) {
        for (let j = index + 1; j < arr.length; j++) {
            if (arr[index] + arr[j] === magicNumber) {
                console.log(`${arr[index]} ${arr[j]}`);
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6], 6);