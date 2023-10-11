function gratuation(input) {
  let index = 0;
  let studentName = input[index];
  index++;
  let curGrade = input[index];
  let badGrades = 0;
  let sumOfGrades = 0;
  let avgGrade = 0;
  let curClass = 1;
  while (badGrades < 2) {
    curGrade = Number(input[index]);
    if (curGrade <= 4) {
      badGrades++;
    } else {
      sumOfGrades += curGrade;
      curClass++;
    }
    if (curClass > 12) {
      break;
    }
    index++;
    curGrade = input[index];
  }
  if (badGrades > 1) {
    console.log(`${studentName} has been excluded at ${curClass} grade`);
  } else {
    avgGrade = sumOfGrades / 12;
    console.log(
      `${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`
    );
  }
}
gratuation([ "Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
gratuation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

// function gratuation(input) {
//   let index = 0;
//   let studentName = input[index];
//   index++;
//   let curGrade = Number(input[index]);
//   let badGrades = 0;
//   let sumOfGrades = 0;
//   let avgGrade = 0;
//   let curClass = 1;
//   while (curClass <= 12) {
//     if (curGrade < 4) {
//       badGrades++;
//     }
//     if (badGrades > 1) {
//       console.log(`${studentName} has been excluded at ${curClass - 1} grade`);
//       break;
//     }
//     sumOfGrades += curGrade;
//     curClass++;
//     index++;
//     curGrade = Number(input[index]);
//   }
//   if (badGrades < 1) {
//     avgGrade = sumOfGrades / 12;
//     console.log(
//       `${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`
//     );
//   }
// }
// gratuation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
// gratuation([ "Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);

