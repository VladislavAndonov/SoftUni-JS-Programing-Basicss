function equalSums(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let result = "";

  for (let curNum = startNum; curNum <= endNum; curNum++) {
    let curNumAsStr = curNum.toString();
    let evenDigitsSum = 0;
    let oddDigitsSum = 0;
    for (let i = 0; i < curNumAsStr.length; i++) {
      let curDigit = Number(curNumAsStr[i]);
      if ((i + 1) % 2 === 0) {
        evenDigitsSum += curDigit;
      } else {
        oddDigitsSum += curDigit;
      }
    }
    if (evenDigitsSum === oddDigitsSum) {
      result += `${curNumAsStr} `;
    }
  }
  console.log(result);
}
equalSums(["100000", "100050"]);
