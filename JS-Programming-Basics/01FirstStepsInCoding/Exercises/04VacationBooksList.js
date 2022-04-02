function data(input){
    let countPages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let countDaysToReadTheBook = Number(input[2]);

    let hoursForOneBook = countPages / pagesForHour;
    let hoursToFinish = hoursForOneBook / countDaysToReadTheBook;

    console.log(hoursToFinish);
}
data(["212",
"20",
"2"])
