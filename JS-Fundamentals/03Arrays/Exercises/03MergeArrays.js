function merge(arr1, arr2) {

    let arr3 = arr1.map((el, i) => i % 2 == 0 ? Number(el) + Number(arr2[i]) : el + arr2[i]);
    console.log(arr3.join(' - '));
}
merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);