function histogram(input) {
  let numCount = Number(input[0]);
  let firstGraph = 0;
  let secondGraph = 0;
  let thirdGraph = 0;
  let fourthGraph = 0;
  let FifthGraph = 0;
  for (let i = 1; i <= numCount; i++) {
    let num = Number(input[i]);
    if (num < 200) {
      firstGraph++;
    } else if (num < 400) {
      secondGraph++;
    } else if (num < 600) {
      thirdGraph++;
    } else if (num < 800) {
      fourthGraph++;
    } else if (num >= 800) {
      FifthGraph++;
    }
  }
  let p1 = (firstGraph / numCount) * 100;
  let p2 = (secondGraph / numCount) * 100;
  let p3 = (thirdGraph / numCount) * 100;
  let p4 = (fourthGraph / numCount) * 100;
  let p5 = (FifthGraph / numCount) * 100;
  console.log(
    `${p1.toFixed(2)}%\n${p2.toFixed(2)}%\n${p3.toFixed(2)}%\n${p4.toFixed(
      2
    )}%\n${p5.toFixed(2)}%`
  );
}
histogram([
  "14",
  "53",
  "7",
  "56",
  "180",
  "450",
  "920",
  "12",
  "7",
  "150",
  "250",
  "680",
  "2",
  "600",
  "200",
]);
