function palindromInteger(inputArr) {

    function isPalindrom(number) {

        let startNum = number;
        let reversedNum = (Number(number.toString().split('').reverse().join('')));
        if (startNum == reversedNum) {
            return true;
        } else {
            return false;
        }
    }
    for (let index = 0; index < inputArr.length; index++) {
        let currNum = inputArr[index];
        console.log(isPalindrom(currNum));
    }
}
palindromInteger([123, 323, 421, 121]);