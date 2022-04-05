function CountTheWords(input) {

    let text = input[0];
    let counter = 1;

    for (let char = 0; char <= text.length; char++) {
        if (text[char] === " ") {
            counter++;
        }

    }
    if (counter > 10) {
        console.log(`The message is too long to be send! Has ${counter} words.`);
    } else {
        console.log("The message was sent successfully!");
    }

}
CountTheWords(["This message has exactly eleven words. One more as it's allowed!"])