function bonusPoits(input) {
    let initialPoits = Number(input[0]);
    let bonus = 0;

    if (initialPoits <= 100) {
        bonus = 5
    } else if (initialPoits <= 1000) {
        bonus = 0.2 * initialPoits
    } else {
        bonus = 0.1 * initialPoits
    }
    
    if (initialPoits % 2 === 0) {
        bonus = bonus + 1;
    } else if (initialPoits % 10 === 5) {
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(initialPoits + bonus);
    
}
bonusPoits(["2703"])