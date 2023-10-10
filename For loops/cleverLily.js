function cleverLily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let moneyGifted = 0;
    let moneySaved = 0;
    for (let currentBday = 1; currentBday <= age; currentBday++) {
        
        if (currentBday % 2 === 0) {
            moneySaved += 10 - 1 + moneyGifted;
            moneyGifted += 10
        } else {
            moneySaved += toyPrice;
        }
    }
    if (moneySaved >= washerPrice) {
        let moneyLeft = moneySaved - washerPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washerPrice - moneySaved
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"])