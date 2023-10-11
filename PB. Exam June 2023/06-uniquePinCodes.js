function generatePins(input) {
  let firstLimit = Number(input[0]);
  let secondLimit = Number(input[1]);
  let thirdLimit = Number(input[2]);

  let pin = "";

  for (let firstDigit = 2; firstDigit <= firstLimit; firstDigit += 2) {
    for (let secondDigit = 2; secondDigit <= secondLimit; secondDigit++) {
      if (secondDigit === 4 || secondDigit === 6) {
        continue;
      }
      if (secondDigit > 7) {
        break;
      }
      for (let thirdDigit = 2; thirdDigit <= thirdLimit; thirdDigit += 2) {
        pin = `${firstDigit} ${secondDigit} ${thirdDigit}`;
        console.log(pin);
      }
    }
  }
}
generatePins(["3", "5", "5"]);
