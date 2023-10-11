function christmasPrep(input) {
  let paperRollsCount = Number(input[0]);
  let textileRollsCount = Number(input[1]);
  let glueLiters = Number(input[2]);
  let discount = Number(input[3]);

  let paperPriceTotal = paperRollsCount * 5.8;
  let textilePriceTotal = textileRollsCount * 7.2;
  let gluePriceTotal = glueLiters * 1.2;

  let priceTotal =
    (paperPriceTotal + textilePriceTotal + gluePriceTotal) *
    ((100 - discount) / 100);
  console.log(priceTotal.toFixed(3));
}
christmasPrep(["2", "3", "2.5", "25"]);
