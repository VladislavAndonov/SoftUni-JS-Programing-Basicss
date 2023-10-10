function familyTrip(input) {
    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let otherExpencesPercent = Number(input[3]);
    let otherExpences = budget * (otherExpencesPercent / 100);
    
    if (nightsCount > 7) {
        nightPrice *= 0.95;
    }
    
    let expencesForNights = nightsCount * nightPrice;
    let totalExpences = expencesForNights + otherExpences;

    if (budget >= totalExpences) {
        let moneyLeft = budget - totalExpences;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    } else {
        let moneyNeeded = totalExpences - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }
}
familyTrip(["500"
    ,"7"
    ,"66"
    ,"15"    
    ])