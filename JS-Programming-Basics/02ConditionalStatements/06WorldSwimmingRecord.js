function worldSwimmingRecord(input) {
    
let record = Number(input.shift());
let distance = Number(input.shift());
let timeToSwimOneMeter = Number(input.shift());

let swimmingTime = timeToSwimOneMeter * distance;
let delays = Math.floor(distance / 15);
let delayTime = delays * 12.5;
let totalTime = swimmingTime + delayTime;

if (totalTime < record) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
}else   {
    console.log(`No, he failed! He was ${(totalTime-record).toFixed(2)} seconds slower.`);
}



}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
