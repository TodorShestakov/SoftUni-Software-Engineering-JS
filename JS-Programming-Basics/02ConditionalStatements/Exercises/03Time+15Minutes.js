function time(input) {
    let hour = Number(input.shift());
    let minutes = Number(input.shift()) +15;
    if (minutes > 59 ) {
        hour++;
    }
    if (hour > 23) {
        hour -= 24;
    }

    if (minutes >=60) {
        minutes -= 60;
    }
    
    if (minutes <10) {
        console.log(`${hour}:0${minutes}`);
    }
    else{
        console.log(`${hour}:${minutes}`);
    }

}
time(["1", "46"])