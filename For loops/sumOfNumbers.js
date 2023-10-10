function sumOfNumbers(input) {
  let num = input[0];
  let sumOfDigits = 0;
  for (let i = 0; i < num.length; i++) {
    let digit = Number(num[i]);
    sumOfDigits += digit
  }
  console.log(`The sum of the digits is:${sumOfDigits}`);
}
sumOfNumbers(["1234"])