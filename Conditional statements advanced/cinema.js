function cinema(input) {
  let movieType = input[0];
  let rows = Number(input[1]);
  let cols = Number(input[2]);
  let ticketCount = rows * cols;
  let income = 0;

  switch (movieType) {
    case "Premiere":
      income = ticketCount * 12.0;
      break;
    case "Normal":
      income = ticketCount * 7.5;
      break;
    case "Discount":
      income = ticketCount * 5.0;
      break;
  }
  console.log(income.toFixed(2));
}
cinema(["Discount", "12", "30"]);
