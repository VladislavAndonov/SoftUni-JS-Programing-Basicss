function lunchBreak(input) {
  let movieName = input[0];
  let movieDuration = Number(input[1]);
  let breakDuration = Number(input[2]);
  let lunchTime = (1 / 8) * breakDuration;
  let relaxTime = (1 / 4) * breakDuration;
  breakDuration = breakDuration - lunchTime - relaxTime;

  if (movieDuration <= breakDuration) {
    let timeLeft = breakDuration - movieDuration;
    console.log(
      `You have enough time to watch ${movieName} and left with ${Math.ceil(
        timeLeft
      )} minutes free time.`
    );
  } else {
    let timeNeeded = movieDuration - breakDuration;
    console.log(
      `You don't have enough time to watch ${movieName}, you need ${Math.ceil(
        timeNeeded
      )} more minutes.`
    );
  }
}
lunchBreak(["Teen Wolf", "48", "60"]);
