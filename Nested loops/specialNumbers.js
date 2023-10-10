function specialNumbers(input) {
    let n = Number(input[0]);
    let specialNumber = '';
    for (let curNum = 1111; curNum <= 9999; curNum++) {
        let curNumAsString = curNum.toString();
        for (let i = 0; i <= 3; i++) {
            let curDigitAsString = curNumAsString[i];
            let curDigit = Number(curDigitAsString);
            while (n % curDigit === 0) {
                specialNumber += curNumAsString + ' ';
                i++;
            }
            specialNumber += curNumAsString + ' ';

        curNum = Number(curNumAsString);

        }
        console.log(specialNumber);
    }
}
specialNumbers(["3"])