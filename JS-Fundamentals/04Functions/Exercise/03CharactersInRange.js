function charactersInRange(char1, char2) {

    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char2.charCodeAt(0), char1.charCodeAt(0));
    let charsInRangeArray = [];

    for (let i = startChar + 1; i < endChar; i++) {
        charsInRangeArray.push(String.fromCharCode(i));
    }
    console.log(charsInRangeArray.join(' '));
}
charactersInRange('a', 'd'); 