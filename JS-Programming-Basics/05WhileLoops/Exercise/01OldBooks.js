function books(input) {

    let favoriteBook = input[0];
    let index = 1;
    let nextBook = input[index];
    let bookIsFound = false;
    let counter = 0;

    while (nextBook !== "No More Books") {

        if (nextBook === favoriteBook) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBook = input[index];
        counter++;
    }

    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    } else {
        console.log(`You checked ${counter} books and found it.`);
    }
}
books(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])



