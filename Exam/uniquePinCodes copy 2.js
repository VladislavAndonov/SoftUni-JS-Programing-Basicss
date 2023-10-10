function generatePins(input) {
  let firstLimit = Number(input[0]);
  let secondLimit = Number(input[1]);
  let thirdLimit = Number(input[2]);

  let pins = [];

  for (let firstDigit = 2; firstDigit <= firstLimit; firstDigit += 2) {
    for (let secondDigit = 2; secondDigit <= secondLimit; secondDigit++) {
      if (secondDigit > 7) {
        break;
      }
      for (let thirdDigit = 2; thirdDigit <= thirdLimit; thirdDigit += 2) {
        let pin = `${firstDigit} ${secondDigit} ${thirdDigit}`;
        pins.push(pin);
      }
    }
  }

  return pins;
}

let result = generatePins([3, 5, 5]);
console.log(result);