function data(input) {

let dogsCount = input[0];
let animalsCount = input[1];

let dogFoodPrice = 2.5;
let animalsFoodPrice = 4;

let totalDogPrice = dogsCount * dogFoodPrice;
let totalAnimalPrice = animalsFoodPrice * animalsCount;
console.log(totalDogPrice + totalAnimalPrice)

}
data(["13", "9"])