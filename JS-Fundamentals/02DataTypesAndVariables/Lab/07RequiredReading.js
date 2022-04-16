function reading(currentBookPages, pagesPerHourReading, daysNeededToReadTheBook) {

    let timeToFinishBook = currentBookPages / pagesPerHourReading;
    let hoursNeededPerDay = timeToFinishBook / daysNeededToReadTheBook;

    console.log(hoursNeededPerDay);
}
reading(212, 20, 2);