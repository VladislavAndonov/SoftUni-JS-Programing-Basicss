function onTimeForExam(input) {
  let hourOfExam = Number(input[0]);
  let minsOfExam = Number(input[1]);
  let hourOfArrival = Number(input[2]);
  let minsOfArrival = Number(input[3]);
  let sumExam = hourOfExam * 60 + minsOfExam;
  let sumArrival = hourOfArrival * 60 + minsOfArrival;

  if (sumExam < sumArrival) {
    let minsLate = sumArrival - sumExam;
    if (minsLate < 60) {
      console.log("Late");
      console.log(`${minsLate} minutes after the start`);
    } else {
      let hoursLate = minsLate / 60;
      minsLate %= 60;
      if (minsLate < 10) {
        console.log("Late");
        console.log(
          `${Math.floor(hoursLate)}:0${minsLate} hours after the start`
        );
      } else {
        console.log("Late");
        console.log(
          `${Math.floor(hoursLate)}:${minsLate} hours after the start`
        );
      }
    }
  } else if (sumExam === sumArrival) {
    console.log("On time");
  } else if (sumExam > sumArrival) {
    let minsEarlier = sumExam - sumArrival;
    if (minsEarlier <= 30) {
      console.log("On time");
      console.log(`${minsEarlier} minutes before the start`);
    } else {
      if (minsEarlier < 60) {
        console.log("Early");
        console.log(`${minsEarlier} minutes before the start`);
      } else {
        let hoursErlier = minsEarlier / 60;
        minsEarlier %= 60;
        if (minsEarlier < 10) {
          console.log("Early");
          console.log(
            `${Math.floor(hoursErlier)}:0${minsEarlier} hours before the start`
          );
        } else {
          console.log("Early");
          console.log(
            `${Math.floor(hoursErlier)}:${minsEarlier} hours before the start`
          );
        }
      }
    }
  }
}
onTimeForExam(["9", "10", "8", "10"]);
