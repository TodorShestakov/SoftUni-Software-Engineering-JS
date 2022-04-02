function text(input) {

    let text = input[0];
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        let currentSymbol = text[i];
        if (currentSymbol === 'a') {
            sum += 1;
        } else if (currentSymbol === 'e') {
            sum += 2;
        } else if (currentSymbol === 'i') {
            sum += 3;
        } else if (currentSymbol === 'o') {
            sum += 4;
        } else if (currentSymbol === 'u') {
            sum += 5;
        }
    }
    console.log(`${sum}`);
}
text(["bamboo"])