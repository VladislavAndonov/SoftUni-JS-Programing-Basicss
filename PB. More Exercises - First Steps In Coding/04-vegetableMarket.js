function veggieMarket(input) {
  let vegetablePrice = Number(input[0]);
  let fruitsPrice = Number(input[1]);
  let vegetableQty = Number(input[2]);
  let fruitQty = Number(input[3]);

  let wholeProduction =
    (vegetablePrice * vegetableQty + fruitsPrice * fruitQty) / 1.94;
  console.log(wholeProduction.toFixed(2));
}
veggieMarket(["0.194", "19.4", "10", "10"]);
