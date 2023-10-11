function numPyramid(input) {
  let n = Number(input[0]);
  let current = 1;
  let isBigger = false;
  let printCurrentLine = "";
  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      printCurrentLine += current + " ";
      current++;
      if (current > n) {
        isBigger = true;
        break;
      }
    }
    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger) {
      break;
    }
  }
}
numPyramid(["7"]);
