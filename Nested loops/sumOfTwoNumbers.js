function sumOfTwoNumbers(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationCounter = 0;

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            let result = i + j
            combinationCounter++
            if (result === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }
    console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
}
sumOfTwoNumbers(["23",

"24",

"20"]);
