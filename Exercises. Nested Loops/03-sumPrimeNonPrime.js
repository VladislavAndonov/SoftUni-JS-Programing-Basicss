function sumPrimeCheck(input) {
  let index = 0;
  let curLine = input[index];
  let primeNumSum = 0;
  let nonPrimeNumSum = 0;

  while (curLine !== "stop") {
    let curNum = Number(curLine);
    let isPrime = true;
    if (curNum < 0) {
      console.log("Number is negative.");
      index++;
      curLine = input[index];
      continue;
    }
    for (let i = 2; i < curNum; i++) {
      if (curNum % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumSum += curNum;
    } else {
      nonPrimeNumSum += curNum;
    }
    index++;
    curLine = input[index];
  }
  console.log(`Sum of all prime numbers is: ${primeNumSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`);
}
sumPrimeCheck(["30", "83", "33", "-1", "20", "stop"]);
