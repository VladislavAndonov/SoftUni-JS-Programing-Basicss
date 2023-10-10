function toyShop(input) {
    let priceVacation = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    let toysTotalCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
    
    let toysTotalPrice = puzzlesCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2

    if (toysTotalCount >= 50) {
        toysTotalPrice = toysTotalPrice * 0.75
    }
    toysTotalPrice = 0.90 * toysTotalPrice

    if (toysTotalPrice >= priceVacation) {
        let moneyLeft = toysTotalPrice - priceVacation
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = priceVacation - toysTotalPrice
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

}
toyShop(["320", "8", "2", "5", "5", "1"])