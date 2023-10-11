function vacation(input) {
  let index = 0;
  let vacationPrice = Number(input[index]);
  index++;
  let moneySaved = Number(input[index]);
  index++;
  let transactionType = input[index];
  index++;
  let curSum = Number(input[index]);
  let consecutiveDaysSpending = 0;
  let daysSaving = 0;

  while (moneySaved < vacationPrice) {
    daysSaving++;
    if (transactionType === "spend") {
      moneySaved -= curSum;
      consecutiveDaysSpending++;
      if (curSum > moneySaved) {
        moneySaved = 0;
      }
    } else {
      moneySaved += curSum;
      consecutiveDaysSpending = 0;
    }
    if (consecutiveDaysSpending === 5) {
      break;
    }
    index++;
    transactionType = input[index];
    index++;
    curSum = Number(input[index]);
  }
  if (consecutiveDaysSpending === 5) {
    console.log("You can't save the money.");
    console.log(`${daysSaving}`);
  } else {
    console.log(`You saved the money for ${daysSaving} days.`);
  }
}
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
