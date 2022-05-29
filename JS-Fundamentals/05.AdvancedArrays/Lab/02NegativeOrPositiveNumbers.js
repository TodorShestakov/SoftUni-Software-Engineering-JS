function kSequence(arr) {

    let newArr = [];

    for (let i of arr) {
        i = Number(i);
        if (i < 0) {
            newArr.unshift(i);
        } else {
            newArr.push(i);
        }
    }
    console.log(newArr.join('\n'));
}
kSequence(['7', '-2', '8', '9']);