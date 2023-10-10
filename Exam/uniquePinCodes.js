function uniquePinCodes(input) {
    let firstNumMax = Number(input[0]);
    let secondNumMax = Number(input[1]);
    let thirdNumMax = Number(input[2]);

    for (let numPostition = 1; numPostition <= 3; numPostition++) {
        for (let curDigit = 1; curDigit <= 9; curDigit++) {
            if (numPostition === 1) {
               if (curDigit % 2 === 0) {
                console.log();
               }
            }

        }
    }
}
uniquePinCodes(['3','5', '5'])