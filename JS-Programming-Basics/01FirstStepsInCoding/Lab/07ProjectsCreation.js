function data(input) {

    let architectName = input[0];
    let timeForOneProject = 3;
    let countOfProjects = input[1];

    let timeNeeded = timeForOneProject * countOfProjects;

    console.log(`The architect ${architectName} will need ${timeNeeded} hours to complete ${countOfProjects} project/s.`)

}
data(["Sanya",
"9"])

