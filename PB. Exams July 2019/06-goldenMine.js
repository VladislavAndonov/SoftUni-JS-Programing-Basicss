function goldenMine(input) {
  let locationsCount = Number(input[0]);
  let index = 1;
  let curAvgProduction = Number(input[index]);
  index++;
  let daysOnCurLocation = Number(input[index]);
  index++;
  let curProduction = Number(input[index]);
  let curTotalProduction = 0;
  let curLocationAvg = 0;
  let curLocationNum = 1;
  while (curLocationNum <= locationsCount) {
    curTotalProduction = 0;
    for (let i = 1; i <= daysOnCurLocation; i++) {
      curTotalProduction += curProduction;
      index++;
      if (index > input.length) {
        break;
      }
      curProduction = Number(input[index]);
    }
    curLocationAvg = curTotalProduction / daysOnCurLocation;
    if (curLocationAvg >= curAvgProduction) {
      console.log(
        `Good job! Average gold per day: ${curLocationAvg.toFixed(2)}.`
      );
    } else {
      let productionNeeded = curAvgProduction - curLocationAvg;
      console.log(`You need ${productionNeeded.toFixed(2)} gold.`);
    }
    curLocationNum++;
    if (curLocationNum > locationsCount) {
      break;
    }
    curAvgProduction = Number(input[index]);
    index++;
    daysOnCurLocation = Number(input[index]);
    index++;
    curProduction = Number(input[index]);
  }
}
goldenMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
