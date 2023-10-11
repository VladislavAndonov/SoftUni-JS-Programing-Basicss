function christmasGifts(input) {
  let index = 0;
  let curLine = input[index];
  let adultsCount = 0;
  let kidsCount = 0;
  let moneyForToys = 0;
  let moneyForSweaters = 0;

  while (curLine !== "Christmas") {
    let curAge = Number(curLine);
    if (curAge <= 16) {
      kidsCount++;
      moneyForToys += 5;
    } else {
      adultsCount++;
      moneyForSweaters += 15;
    }
    index++;
    curLine = input[index];
  }
  console.log(`Number of adults: ${adultsCount}`);
  console.log(`Number of kids: ${kidsCount}`);
  console.log(`Money for toys: ${moneyForToys}`);
  console.log(`Money for sweaters: ${moneyForSweaters}`);
}
christmasGifts(["16", "20", "46", "12", "8", "20", "49", "Christmas"]);
