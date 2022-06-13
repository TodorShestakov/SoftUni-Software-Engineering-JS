function inventory(input) {

    let heroes = [];

    for (let lines of input) {
        let obj = {};
        let tokens = lines.split(' / ');
        obj.name = tokens[0];
        obj.level = tokens[1];
        obj.items = tokens[2];

        heroes.push(obj);
    }
    heroes.sort((a, b) => a.level - b.level);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name} \nlevel => ${hero.level} \nitems => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);