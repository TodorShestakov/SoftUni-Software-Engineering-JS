function sortAnArrayBy2Ctriteria(array) {

    let twoCriteriaSort = (a, b) => a.length - b.length || a.localeCompare(b);
    array.sort(twoCriteriaSort);
    console.log(array.join('\n'));
}
sortAnArrayBy2Ctriteria(['Isacc', 'Theodor', 'test', 'Jack', 'Harrison', 'George']);