function lunchBreak(input) {
    let movieName = input[0];
    let movieDuration = Number(input[1]);
    let lunchBreakDuration = Number(input[2]);
    let lunchTime = 1/8 * lunchBreakDuration;
    let relaxTime = 1/4 * lunchBreakDuration;
    lunchBreakDuration = lunchBreakDuration - lunchTime - relaxTime

    if (movieDuration <= lunchBreakDuration) {
        let timeLeft = lunchBreakDuration - movieDuration
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        let timeNeeded = movieDuration - lunchBreakDuration
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }

}
lunchBreak(["Teen Wolf", "48", "60"])