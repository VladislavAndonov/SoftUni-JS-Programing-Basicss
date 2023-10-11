function braceletStand(input) {
  let giftedMoneyPerDay = Number(input[0]);
  let moneyEarnedPerDay = Number(input[1]);
  let expensesTotal = Number(input[2]);
  let giftPrice = Number(input[3]);

  let moneyEarnedTotal = moneyEarnedPerDay * 5;
  let giftedMoneyTotal = giftedMoneyPerDay * 5;

  moneySaved = moneyEarnedTotal + giftedMoneyTotal - expensesTotal;

  if (moneySaved >= giftPrice) {
    console.log(
      `Profit: ${moneySaved.toFixed(2)} BGN, the gift has been purchased.`
    );
  } else {
    let moneyNeeded = giftPrice - moneySaved;
    console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
  }
}
braceletStand(["5.12", "32.05", "15", "150"]);
