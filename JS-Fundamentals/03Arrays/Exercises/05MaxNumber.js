function max(arr) {

    let newArr = [];

    for (let index = 0; index < arr.length; index++) {

        let currentNum = arr[index];
        let isBigger = true;

        for (let j = index; j < arr.length; j++) {
            let nextNum = arr[j + 1];

            if (currentNum <= nextNum) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            newArr.push(currentNum);
        }
    }
    console.log(newArr.join(' '));
}
max([1, 4, 3, 2]);