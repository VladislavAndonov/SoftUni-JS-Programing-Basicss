function specialNums(input) {
  let num = Number(input[0]);
  let specialNumbers = "";
  for (let divider = 1111; divider <= 9999; divider++) {
    let curDividerAsString = divider.toString();
    let isSpecial = true;
    for (let i = 0; i < curDividerAsString.length; i++) {
      let curPosition = Number(curDividerAsString[i]);
      if (num % curPosition !== 0) {
        isSpecial = false;
        break;
      }
    }
    if (isSpecial) {
      specialNumbers += curDividerAsString + " ";
    }
  }
  console.log(specialNumbers);
}
specialNums(["11"]);
