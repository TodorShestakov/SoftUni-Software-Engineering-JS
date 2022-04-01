function data(input){

    // 1.	Брой страници в текущата книга – цяло число в интервала [1…1000];
    // 2.	Страници, които може да прочита за 1 час – цяло число в интервала [1…1000];
    // 3.	Броя на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000];
    
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
