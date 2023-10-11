function minNum(input) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  let index = 0;
  let curNum = input[index];
  while (curNum !== "Stop") {
    curNum = Number(input[index]);
    if (curNum > maxNum) {
      maxNum = curNum;
    }
    index++;
    curNum = input[index];
  }
  console.log(maxNum);
}
minNum(["-1", "-2", "Stop"]);
