function solve(input) {

    let rooms = input[0].split('|')

    let initialHealth = 100;
    let coins = 0;
    let isFinished = true;

    for (let index = 0; index < rooms.length; index++) {
        let room = rooms[index].split(' ')

        if (room[0] === 'potion') {
            let potionH = Number(room[1]);
            if (initialHealth <= 100) {
                if (initialHealth + potionH >= 100) {
                    potionH = 100 - initialHealth;
                    initialHealth = 100;
                } else {
                    initialHealth += potionH;
                }
                console.log(`You healed for ${potionH} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
            }
        } else if (room[0] === 'chest') {
            let currentCoins = Number(room[1]);
            console.log(`You found ${currentCoins} coins.`);
            coins += currentCoins;
        } else {
            let currentMonster = room[0];
            let attackOfMonster = Number(room[1]);
            initialHealth -= attackOfMonster;
            if (initialHealth > 0) {
                console.log(`You slayed ${currentMonster}.`);
            } else {
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${index + 1}`);
                isFinished = false;
                break;
            }
        }
    }
    if (isFinished) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${initialHealth}`);
    }
}
solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);