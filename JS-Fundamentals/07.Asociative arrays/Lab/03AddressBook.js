function addressBook(input) {

    let result = {};

    for (let line of input) {

        let [name, address] = line.split(':');

        result[name] = address;
    }

    let sorted = Object.keys(result);
    sorted.sort((a, b) => a.localeCompare(b));

    for (let name of sorted) {
        console.log(name, '->', result[name]);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);