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
    console.log(`${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  }
}
gratuation(["Gosho", 

"5",

"5.5",

"6",

"5.43",

"5.5",

"6",

"5.55",

"5",

"6",

"6",

"5.43",

"5"])