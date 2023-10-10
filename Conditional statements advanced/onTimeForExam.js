function onTimeForExam(input) {
  let hourOfExam = Number(input[0]);
  let minutesOfExam = Number(input[1]);
  let hourOfArrival = Number(input[2]);
  let minutesOfArrival = Number(input[3]);

  if (hourOfExam < hourOfArrival) {
    //Late
  } else if (hourOfExam === hourOfArrival) {
    if (
      minutesOfExam > minutesOfArrival &&
      minutesOfExam - minutesOfArrival > 30
    ) {
      //Early
    } else if (
      minutesOfExam >= minutesOfArrival &&
      minutesOfExam - minutesOfArrival <= 30
    ) {
      //On time
    } else {
      Math.ab
    }
  } else if (hourOfExam > hourOfArrival) {
    if (minutesOfExam + 60 - minutesOfArrival <= 30) {
      //On time
    } else {
      //Early
    }
  }
}
onTimeForExam(["9", "30", "9", "50"]);
