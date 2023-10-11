function examPrep(input) {
  let index = 0;
  let possibleBadGrades = Number(input[index]);
  index++;

  let curExercise = input[index];
  index++;
  let curGrade = Number(input[index]);
  let badGradesCount = 0;
  let sumGrades = 0;
  let problemsSolved = 0;
  let lastProblem = "";

  while (curExercise !== "Enough") {
    lastProblem = curExercise;
    if (curGrade <= 4) {
      badGradesCount++;
    }
    if (badGradesCount >= possibleBadGrades) {
      break;
    }
    sumGrades += curGrade;
    problemsSolved++;
    index++;
    curExercise = input[index];
    index++;
    curGrade = Number(input[index]);
  }
  if (curExercise === "Enough") {
    let avgGrade = sumGrades / problemsSolved;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${problemsSolved}`);
    console.log(`Last problem: ${lastProblem}`);
  } else {
    console.log(`You need a break, ${badGradesCount} poor grades.`);
  }
}
examPrep([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
