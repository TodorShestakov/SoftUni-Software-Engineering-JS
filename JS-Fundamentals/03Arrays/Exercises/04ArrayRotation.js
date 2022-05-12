function rotation(array, rotations) {
    for (let index = 0; index < rotations; index++) {
        let currentNum = array.shift();
        array.push(currentNum)
    }
    console.log(array.join(' '));
}
rotation([51, 47, 32, 61, 21], 2);