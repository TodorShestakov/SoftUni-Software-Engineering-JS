function loadingBar(num) {
    let bar = '';

    for (let i = 10; i <= 100; i += 10) {
        if (i > num) {
            bar += '.';
        } else {
            bar += '%';
        }
    }
    if (num == 100) {
        console.log('100% Complete!');
    } else {
        console.log(`${num}% [${bar}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
loadingBar(30); 