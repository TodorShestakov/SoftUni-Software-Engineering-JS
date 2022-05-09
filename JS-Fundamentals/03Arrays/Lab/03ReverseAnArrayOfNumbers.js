function reverse(n, arr) {
    let arr2 = [];

    for (let i = 0; i < n; i++) {
        arr2.push(arr[i]);
    }
    let result = [];

    for (let i = arr2.length - 1; i >= 0; i--) {
        result.push(arr2[i]);
    }
    console.log(result.join(' '));
}
reverse(3, [10, 20, 30, 40, 50]);