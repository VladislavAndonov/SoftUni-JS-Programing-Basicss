function depositCalc(input) {
    let depositSum = Number(input[0]);
    let periodMonths = Number(input[1]);
    let interestPercent = Number(input[2]);

    let finalSum = depositSum + periodMonths * ((depositSum * (interestPercent / 100)) / 12);

    console.log(finalSum);

}
depositCalc(["2350",

"6 ",

"7 "])