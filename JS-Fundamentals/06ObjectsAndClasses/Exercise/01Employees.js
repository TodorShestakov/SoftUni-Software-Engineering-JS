function employees(input) {

    let list = {};
    for (let emp of input) {
        list.name = emp;
        list.personalNumber = emp.length;
        console.log(`Name: ${list.name} -- Personal Number: ${list.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);