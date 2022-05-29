function train(input) {

    let trainWithPassengers = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());

    for (let command of input) {
        let currentCommand = command.split(' ')
        if (currentCommand[0] === 'Add') {
            trainWithPassengers.push(Number(currentCommand[1]));
        } else {
            for (let index = 0; index < trainWithPassengers.length; index++) {
                if (trainWithPassengers[index] + Number(currentCommand[0]) <= maxCapacity) {
                    trainWithPassengers[index] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(trainWithPassengers.join(' '));
}
train(['32 54 21 12 4 0 23', '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);