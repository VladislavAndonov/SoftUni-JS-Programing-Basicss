function traveling(input) {
  let index = 0;
  let curRow = input[index];
  while (curRow !== "End") {
    let curDestination = curRow;
    index++;
    let budget = Number(input[index]);
    let money = 0;
    while (money < budget) {
      index++;
      curSum = Number(input[index]);
      money += curSum;
    }
    console.log(`Going to ${curDestination}!`);
    index++;
    curRow = input[index];
  }
}
traveling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
