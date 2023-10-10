function timePlus15Mins(input) {
    let currentTimeHours = Number(input[0]);
    let currentTimeMins = Number(input[1]);
    let minsAfter15 = currentTimeMins + 15
    let hoursAfter15 = currentTimeHours

    if (minsAfter15 >= 60) {
        minsAfter15 = minsAfter15 - 60
        hoursAfter15 = currentTimeHours + 1
    } else {}
    if (hoursAfter15 === 24) {
        hoursAfter15 = 0
    }
    if (minsAfter15 < 10) {
        console.log(`${hoursAfter15}:0${minsAfter15}`);
    } else {
        console.log(`${hoursAfter15}:${minsAfter15}`);
    }
}
timePlus15Mins(["12", "49"])