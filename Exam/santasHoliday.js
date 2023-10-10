function santasHoliday(input) {
    let daysCount = Number(input[0]) - 1;
    let roomType = input[1];
    let reaction = input[2];
    let roomPrice = 0;

    if (roomType === "room for one person") {
        if (daysCount < 10) {
            roomPrice = 18;
        } else if (daysCount <= 15) {
            roomPrice = 18;
        } else if (daysCount > 15) {
            roomPrice = 18;
        }
    } else if (roomType === "apartment") {
        if (daysCount < 10) {
            roomPrice = 25 * 0.7;
        } else if (daysCount <= 15) {
            roomPrice = 25 * 0.65;
        } else if (daysCount > 15) {
            roomPrice = 25 * 0.5;
        }
    } else if (roomType === "president apartment") {
        if (daysCount < 10) {
            roomPrice = 35 * 0.9;
        } else if (daysCount <= 15) {
            roomPrice = 35 * 0.85;
        } else if (daysCount > 15) {
            roomPrice = 35 * 0.8;
        }
    }
    let totalPrice = daysCount * roomPrice;
    if (reaction === "positive") {
        totalPrice *= 1.25;
    } else {
        totalPrice *= 0.9
    }
    console.log(totalPrice.toFixed(2));
}
santasHoliday(["14"
    ,"apartment"
    ,"positive"
    ])