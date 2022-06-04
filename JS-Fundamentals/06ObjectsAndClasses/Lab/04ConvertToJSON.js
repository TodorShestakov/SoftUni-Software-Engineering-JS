function objectToJson(name, lastName, hairColor) {

    let obj = {
        name,
        lastName,
        hairColor
    };

    let json = JSON.stringify(obj);
    console.log(json);
}
objectToJson('George', 'Jones', 'Brown');