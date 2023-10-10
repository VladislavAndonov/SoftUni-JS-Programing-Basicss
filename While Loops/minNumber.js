function minNumber(input) {
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let curNum = input[index];
while (curNum !== 'Stop') {
    curNum = Number(input[index]);
    if (curNum < minNum) {
        minNum = curNum;
    }
    index++;
    curNum = input[index];
}
console.log(minNum);
}
minNumber(["45", "-20", "7", "99", "Stop"])