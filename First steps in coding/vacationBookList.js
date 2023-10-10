function bookList(input) {
    let bookPages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursDaily = (bookPages / pagesForHour) / days;
    console.log(hoursDaily);

}
bookList(["432 ",

"15 ",

"4 "])