function club(input) {
    let index = 0; 
    let targetIncome = Number(input[index]);
    index++;
    let curCocktailName = input[index];
    index++;
    let curCocktailCount = Number(input[index]);
    let clubIncome = 0;
    while (curCocktailName !== "Party!") {
        let curCocktailPrice = curCocktailName.length;
        let curTotalPrice = curCocktailPrice * curCocktailCount;
        if (curTotalPrice % 2 !== 0) {
            curTotalPrice *= 0.75;
        }
        clubIncome += curTotalPrice;
        if (clubIncome >= targetIncome) {
            break;
        }
        index++;
        curCocktailName = input[index];
        index++;
        curCocktailCount = Number(input[index]);
    }
    if (clubIncome >= targetIncome) {
        console.log("Target acquired.")
        console.log(`Club income - ${clubIncome.toFixed(2)} leva.`);
    } else {
        let moneyNeeded = targetIncome - clubIncome;
        console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
        console.log(`Club income - ${clubIncome.toFixed(2)} leva.`);
    }
}    
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
