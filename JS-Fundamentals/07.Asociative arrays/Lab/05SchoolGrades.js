function words(input) {

    let result = {};

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (result.hasOwnProperty(name) == false) {
            result[name] = [];
        }

        let existing = result[name];
        grades.forEach(x => existing.push(x));
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));


    for (let [name, grades] of sorted) {
        let average = 0;
        grades.forEach(x => average += x);
        average /= grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
words(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);