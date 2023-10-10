function coins(input) {
    let change = Number(input[0]);
    let coinsCount = 0;
    while (change > 0) {
        change = change.toFixed(2)
        if (change >= 2) {
            change -= 2;
            coinsCount++;
        } else if (change >= 1) {
            change -= 1;
            coinsCount++;
        } else if (change >= 0.5) {
            change -= 0.5;
            coinsCount++;
        } else if (change >= 0.2) {
            change -= 0.2;
            coinsCount++;
        } else if (change >= 0.1) {
            change -= 0.1;
            coinsCount++;
        } else if (change >= 0.05) {
            change -= 0.05;
            coinsCount++;
        } else if (change >= 0.02) {
            change -= 0.02;
            coinsCount++;
        } else if (change >= 0) {
            change -= 0.01;
            coinsCount++;
        }
    }
    console.log(coinsCount);
}
coins(["1.23"])