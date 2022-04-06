function walking(input) {

    let totalSteps = 0;
    let command = input.shift();

    while (totalSteps < 10000 && command !== "Going home") {

        let steps = Number(command);
        totalSteps += steps;
        command = input.shift();
    }

    if (command === "Going home") {
        let finalSteps = Number(input.shift());
        totalSteps += finalSteps;
    }

    if (totalSteps < 10000) {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }else{
        console.log(`Goal reached! Good job!
        ${totalSteps - 10000} steps over the goal!`);
    }
}
walking(["1000",
    "1500",
    "2000",
    "6500"])
