function oscars(input) {
  let actor = input[0];
  let totalPoints = Number(input[1]);
  let juryCount = Number(input[2]);

  for (let i = 3; i < input.length; i += 2) {
    let pointsByName = Number(input[i].length);
    let curJuryPoints = Number(input[i + 1]);
    totalPoints += pointsByName * curJuryPoints / 2;
    if (totalPoints >= 1250.5) {
      break;
    }
  }
  if (totalPoints >= 1250.5) {
    console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
  } else {
    let pointsNeeded = 1250.5 - totalPoints
    console.log(`Sorry, ${actor} you need ${pointsNeeded.toFixed(1)} more!`);
  }
  }
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])