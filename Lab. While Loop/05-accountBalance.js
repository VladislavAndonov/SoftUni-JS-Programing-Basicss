function accBalance(input) {
  let index = 0;
  let moneyIncrease = input[index];
  let total = 0;
  while (moneyIncrease !== "NoMoreMoney") {
    moneyIncrease = Number(input[index]);
    if (moneyIncrease <= 0) {
      console.log("Invalid operation!");
      break;
    }
    console.log(`Increase: ${moneyIncrease.toFixed(2)}`);
    total += moneyIncrease;
    index++;
    moneyIncrease = input[index];
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
accBalance(["120", "45.55", "-150"]);
