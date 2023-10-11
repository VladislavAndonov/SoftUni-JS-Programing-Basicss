function avgGrade(input) {
  let index = 0;
  let juryCount = Number(input[index]);
  index++;
  let curPresentationName = input[index];
  index++;
  let finalTotalGrade = 0;
  let finalAvgGrade = 0;
  let presentationCount = 0;
  while (curPresentationName !== "Finish") {
    let curTotalGrade = 0;
    let curAvgGrade = 0;
    for (let i = 0; i < juryCount; i++) {
      let curGrade = Number(input[index]);
      index++;
      curTotalGrade += curGrade;
    }
    curAvgGrade = curTotalGrade / juryCount;
    finalTotalGrade += curAvgGrade;
    presentationCount++;
    console.log(`${curPresentationName} - ${curAvgGrade.toFixed(2)}.`);
    curPresentationName = input[index];
    index++;
  }
  finalAvgGrade = finalTotalGrade / presentationCount;
  console.log(`Student's final assessment is ${finalAvgGrade.toFixed(2)}.`);
}
avgGrade([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
