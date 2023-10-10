function foodDelivery(input) {
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veganMenuCount = Number(input[2]);

    let chickenTotal = chickenMenuCount * 10.35;
    let fishTotal = fishMenuCount * 12.40;
    let veganTotal = veganMenuCount * 8.15;
    let desert = (chickenTotal + fishTotal + veganTotal) * 0.2;

    console.log(chickenTotal + fishTotal + veganTotal + desert + 2.50);
}
foodDelivery(["9", "2", "6"])