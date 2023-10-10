function poolDay(input) {
    let peopleCount = Number(input[0]);
    let entryPrice = Number(input[1]);
    let chairPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalEntryPrice = peopleCount * entryPrice;
    let totalUmbrellaPrice = Math.ceil(peopleCount / 2) * umbrellaPrice;
    let totalChairPrice = Math.ceil(peopleCount * 0.75) * chairPrice;

    let totalExpenses = (totalEntryPrice + totalUmbrellaPrice + totalChairPrice).toFixed(2);
    console.log(`${totalExpenses} lv.`);
}
poolDay(["50"
    ,"6"
    ,"8"
    ,"4"
    ])