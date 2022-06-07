function towns(input) {

    for (let town of input) {
        let tokens = town.split(' | ');
        let name = tokens[0];
        let lat = Number(tokens[1]).toFixed(2);
        let lon = Number(tokens[2]).toFixed(2);

        let obj = {
            town: name,
            latitude: lat,
            longitude: lon
        };

        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);