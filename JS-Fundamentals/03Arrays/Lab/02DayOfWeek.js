function weekday(dayAsNumber) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];

    if (dayAsNumber >= 1 && dayAsNumber <= 7) {
        let index = dayAsNumber - 1;
        console.log(days[index]);
    } else {
        console.log('Invalid day!');
    }
}
weekday(1);