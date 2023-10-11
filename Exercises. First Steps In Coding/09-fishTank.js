function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let sandPercent = Number(input[3]);

  let tankVolumeTotal = length * width * height;
  let tankWithoutSand = tankVolumeTotal - tankVolumeTotal * (sandPercent / 100);

  console.log(tankWithoutSand / 1000);
}
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
