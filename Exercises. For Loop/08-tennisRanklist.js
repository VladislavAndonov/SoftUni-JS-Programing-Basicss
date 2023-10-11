function ranklist(input) {
  let tournamentCount = Number(input[0]);
  let initialPoints = Number(input[1]);
  let tournamentsWon = 0;
  let pointsWon = 0;

  for (let i = 2; i <= tournamentCount + 1; i++) {
    let curTournament = input[i];
    if (curTournament === "W") {
      pointsWon += 2000;
      tournamentsWon++;
    } else if (curTournament === "F") {
      pointsWon += 1200;
    } else if (curTournament === "SF") {
      pointsWon += 720;
    }
  }
  let averagePoints = pointsWon / tournamentCount;
  let winRate = (tournamentsWon / tournamentCount) * 100;
  let totalPoints = initialPoints + pointsWon;
  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${winRate.toFixed(2)}%`);
}
ranklist(["4", "750", "SF", "W", "SF", "W"]);
