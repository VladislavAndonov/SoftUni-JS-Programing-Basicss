function cake(input) {
  index = 0;
  let cakeWidth = Number(input[index]);
  index++;
  let cakeLength = Number(input[index]);
  index++;
  let curCakePieces = input[index];
  let totalPieces = cakeWidth * cakeLength;
  let piecesNeeded = 0;
  while (curCakePieces !== "STOP") {
    curCakePieces = Number(input[index]);
    totalPieces -= curCakePieces;
    if (totalPieces <= 0) {
      piecesNeeded = Math.abs(totalPieces);
      break;
    }
    index++;
    curCakePieces = input[index];
  }

  if (curCakePieces === "STOP") {
    console.log(`${totalPieces} pieces are left.`);
  } else {
    console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
