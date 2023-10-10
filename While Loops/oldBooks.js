function oldBooks(input) {
    let index = 0;
    let favBook = input[index];
    index++;
    let curBook = input[index];
    let booksCount = 1;

    while (curBook !== "No More Books") {
        if (curBook === favBook) {
            console.log(`You checked ${booksCount - 1} books and found it.`);
            break;
        }
        index++;
        curBook = input[index];
        booksCount++;
    }
    if (curBook !== favBook) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksCount - 1} books.`);
    }
}
oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"])