// • Баскетболни кецове – цената им е 40% по-малка от таксата за една година

// • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете

// • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип

// • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function equipment(input) {
    let annualTrainingFee = Number(input[0])
    let sneakers = (annualTrainingFee * 0.6);
    let jersey = (sneakers * 0.8);
    let ball = (jersey * 0.25);
    let accessories = (ball * 0.2);

    console.log(annualTrainingFee + sneakers + jersey + ball + accessories);
}
equipment(["550 "])