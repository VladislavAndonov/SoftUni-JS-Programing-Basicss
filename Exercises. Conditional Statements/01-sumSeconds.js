function sumSeconds(input) {
  let firstTime = Number(input[0]);
  let secondTime = Number(input[1]);
  let thirdTime = Number(input[2]);

  let sumTimeSeconds = firstTime + secondTime + thirdTime;
  let sumMinutes = Math.floor(sumTimeSeconds / 60);
  let secondsLeft = sumTimeSeconds - sumMinutes * 60;
  if (secondsLeft < 10) {
    console.log(`${sumMinutes}:0${secondsLeft}`);
  } else {
    console.log(`${sumMinutes}:${secondsLeft}`);
  }
}
sumSeconds(["50", "50", "49"]);
