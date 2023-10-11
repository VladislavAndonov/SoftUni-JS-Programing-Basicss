function equipment(input) {
  let annualTrainingFee = Number(input[0]);
  let sneakers = annualTrainingFee * 0.6;
  let jersey = sneakers * 0.8;
  let ball = jersey * 0.25;
  let accessories = ball * 0.2;

  console.log(annualTrainingFee + sneakers + jersey + ball + accessories);
}
equipment(["550 "]);
