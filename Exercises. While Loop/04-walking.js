function walking(input) {
  let index = 0;
  let stepsGoal = 10000;
  let stepsTotal = 0;
  let curSteps = input[index];

  while (curSteps !== "Going home") {
    curSteps = Number(input[index]);
    stepsTotal += curSteps;
    if (stepsTotal >= stepsGoal) {
      break;
    }
    index++;
    curSteps = input[index];
  }
  if (curSteps === "Going home") {
    index++;
    curSteps = Number(input[index]);
    stepsTotal += curSteps;
    if (stepsTotal >= stepsGoal) {
      console.log("Goal reached! Good job!");
      console.log(`${stepsTotal - stepsGoal} steps over the goal!`);
    } else {
      console.log(`${stepsGoal - stepsTotal} more steps to reach goal.`);
    }
  } else {
    console.log("Goal reached! Good job!");
    console.log(`${stepsTotal - stepsGoal} steps over the goal!`);
  }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
