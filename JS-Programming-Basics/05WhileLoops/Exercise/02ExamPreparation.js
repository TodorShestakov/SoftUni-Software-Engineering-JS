function exam(input) {

    let index = 0;
    let negativeGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let sumGrades = 0;
    let counter = 0;
    let lastTask = "";
    let countNegativeGrade = 0;
    let isNeedBreak = false;

    while (command !== "Enough") {
        let currentTask = command;
        let currentGrade = Number(input[index]);
        index++;

        if (currentGrade <= 4) {
            countNegativeGrade++;
        }

        if (countNegativeGrade === negativeGrade) {
            isNeedBreak = true;
            console.log(`You need a break, ${countNegativeGrade} poor grades.`);
            break;
        }

        sumGrades += currentGrade;
        counter++;
        lastTask = currentTask;

        command = input[index];
        index++;

    } if (!isNeedBreak) {
        let avgGrade = sumGrades / counter;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
exam(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
