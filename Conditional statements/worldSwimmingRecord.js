function worldSwimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeInSecondsFor1Meter = Number(input[2]);

    let slowdown = Math.floor(distanceMeters / 15) * 12.5
    let ivansTime = distanceMeters * timeInSecondsFor1Meter + slowdown

    if (ivansTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`);
    } else {
        let secondsNeeded = ivansTime - recordSeconds
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`)
    }
} 
worldSwimmingRecord(["55555.67", "3017", "5.03"])