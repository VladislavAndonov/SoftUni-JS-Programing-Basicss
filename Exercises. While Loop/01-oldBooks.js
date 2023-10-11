function oldBooks(input) {
  let index = 0;
  let favBook = input[index];
  index++;
  let curBook = input[index];
  let isBookFound = false;

  while (curBook !== "No More Books") {
    if (curBook === favBook) {
      isBookFound = true;
      break;
    }
    index++;
    curBook = input[index];
  }
  if (isBookFound === false) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${index - 1} books.`);
  } else {
    console.log(`You checked ${index - 1} books and found it.`);
  }
}
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
