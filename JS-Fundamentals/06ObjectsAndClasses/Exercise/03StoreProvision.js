function storeProvision(availableStock, deliveredStock) {

    let obj = {};

    for (let i = 0; i < availableStock.length; i += 2) {
        let product = availableStock[i];
        obj[product] = Number(availableStock[i + 1]);
    }

    for (let i = 0; i < deliveredStock.length; i += 2) {
        let product = deliveredStock[i];
        if (!obj.hasOwnProperty(product)) {
            obj[product] = 0;
        }
        obj[product] += Number(deliveredStock[i + 1]);
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);