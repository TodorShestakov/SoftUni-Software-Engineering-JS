function train(input) {
    let index = 0;
    let people = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let gradeSum = 0;
    let counter = 0;

    while (command !== "Finish") {
        let name = command;
        let tempGradeSum = 0;
        counter++;
        for (let i = 0; i < people; i++) {
            let grade = Number(input[index]);
            index++;
            tempGradeSum += grade;
        }
        let temAvg = tempGradeSum / people;
        console.log(`${name} - ${temAvg.toFixed(2)}.`);
        gradeSum += temAvg;

        command = input[index];
        index++;
    }
    let avg = gradeSum / counter;
    console.log(`Student's final assessment is ${avg.toFixed(2)}.`);
}
train(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

