function trainingLab(input) {
  let w = Number(input[0]);
  let h = Number(input[1] - 1);

  let desksPerRow = Math.floor(h / 0.7);
  let desksPerColum = Math.floor(w / 1.2);

  let desksCount = desksPerRow * desksPerColum - 3;
  console.log(desksCount);
}
trainingLab(["15", "8.9"]);
