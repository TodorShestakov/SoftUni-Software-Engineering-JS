function matrix(num) {
    let res = '';

    for (let i = 0; i < num; i++) {
        res += num + ' ';
    }

    for (let i = 0; i < num; i++) {
        console.log(`${res}`);
    }
}
matrix(2);