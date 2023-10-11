function shopping(input) {
  let budget = Number(input[0]);
  let videoCardCount = Number(input[1]);
  let processorCount = Number(input[2]);
  let ramCount = Number(input[3]);
  let videoCardPrice = videoCardCount * 250;
  let totalPrice =
    videoCardPrice +
    0.35 * videoCardPrice * processorCount +
    0.1 * videoCardPrice * ramCount;

  if (videoCardCount > processorCount) {
    totalPrice = totalPrice * 0.85;
  }
  if (budget >= totalPrice) {
    let moneyLeft = budget - totalPrice;
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
  }
  if (budget < totalPrice) {
    let moneyNeeded = totalPrice - budget;
    console.log(
      `Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`
    );
  }
}
shopping(["920.45", "3", "1", "1"]);
