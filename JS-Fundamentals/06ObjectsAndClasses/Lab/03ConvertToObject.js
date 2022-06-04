function jsonToObject(json) {

    let obj = JSON.parse(json);
    let props = Object.keys(obj);

    for (let ob of props) {
        console.log(`${ob}: ${obj[ob]}`);
    }
}
jsonToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');