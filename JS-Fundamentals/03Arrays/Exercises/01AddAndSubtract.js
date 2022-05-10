function add(array) {
    let sumOriginal = 0;
    let sumNew = 0;
    let arr2 = [];

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        sumOriginal += currentNum;
        if (currentNum % 2 == 0) {
            arr2.push(currentNum += i);
        } else {
            arr2.push(currentNum -= i);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        sumNew += arr2[i];
    }

    console.log(arr2);
    console.log(sumOriginal);
    console.log(sumNew);
}
add([5, 15, 23, 56, 35]);