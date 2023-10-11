function repaiting(input) {
  let nylonQty = Number(input[0]);
  let paintQty = Number(input[1]);
  let thinerQty = Number(input[2]);
  let hoursTotal = Number(input[3]);

  let nylonTotal = (nylonQty + 2) * 1.5;
  let paintTotal = paintQty * 1.1 * 14.5;
  let thinerTotal = thinerQty * 5;
  let priceWorkersForDay =
    (nylonTotal + paintTotal + thinerTotal + 0.4) * 0.3 * hoursTotal;

  let priceTotal =
    nylonTotal + paintTotal + thinerTotal + 0.4 + priceWorkersForDay;
  console.log(priceTotal);
}
repaiting(["5 ", "10 ", "10 ", "1 "]);
