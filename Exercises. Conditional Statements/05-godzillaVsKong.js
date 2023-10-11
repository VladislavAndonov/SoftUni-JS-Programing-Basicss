function godzillaVsKong(input) {
  let movieBudget = Number(input[0]);
  let extrasCount = Number(input[1]);
  let clothingPricePerExtra = Number(input[2]);
  let clothingPriceTotal = extrasCount * clothingPricePerExtra;

  if (extrasCount > 150) {
    clothingPriceTotal = 0.9 * clothingPriceTotal;
  }
  movieBudget = 0.9 * movieBudget;
  if (clothingPriceTotal > movieBudget) {
    let moneyNeeded = clothingPriceTotal - movieBudget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
  } else {
    let moneyLeft = movieBudget - clothingPriceTotal;
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  }
}
godzillaVsKong(["15437.62", "186", "57.99"]);
