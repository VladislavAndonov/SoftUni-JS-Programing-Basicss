function sumOfNums(input) {
  let goalNumber = Number(input[0]);
  let index = 1;
  let num = Number(input[index]);
  let sum = 0;

  while (goalNumber > sum) {
    sum += num;
    index++;
    num = Number(input[index]);
  }
  console.log(sum);
}
sumOfNums(["20", "1", "2", "3", "4", "5", "6"]);
