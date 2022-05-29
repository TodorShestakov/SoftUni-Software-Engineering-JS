function distinctArray(array) {

    let newArray = [];
    for (let number of array) {
        if (!newArray.includes(number)) {
            newArray.push(number);
        }
    }
    console.log(newArray.join(' '));
}
distinctArray([1, 2, 3, 4]);