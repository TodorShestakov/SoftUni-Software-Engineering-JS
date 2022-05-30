function sortingArray(array) {

    console.log('Before changing the array ', array);
    array = array.sort((a, b) => b - a);
    console.log(array);
    console.log('after sorting the array ', array);

    let newArr = [];
    while (array.length > 0) {
        let biggerNum = array.shift();
        newArr.push(biggerNum);
        let smallerNum = array.pop();
        newArr.push(smallerNum);
    }
    console.log(newArr.join(' '));
}
sortingArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);