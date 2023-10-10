function skiTrip(input) {
  let overnightsStay = Number(input[0]) - 1;
  let roomType = input[1];
  let rating = input[2];
  let price = 0;

  if (overnightsStay < 10) {
    switch (roomType) {
      case "room for one person":
        price = overnightsStay * 18.0;
        break;
      case "apartment":
        price = overnightsStay * (25.0 * 0.7);
        break;
      case "president apartment":
        price = overnightsStay * (35.0 * 0.9);
        break;
    }
  } else if (overnightsStay >= 10 && overnightsStay <= 15) {
    switch (roomType) {
      case "room for one person":
        price = overnightsStay * 18.0;
        break;
      case "apartment":
        price = overnightsStay * (25.0 * 0.65);
        break;
      case "president apartment":
        price = overnightsStay * (35.0 * 0.85);
        break;
    }
  } else {
    switch (roomType) {
      case "room for one person":
        price = overnightsStay * 18.0;
        break;
      case "apartment":
        price = overnightsStay * (25.0 * 0.5);
        break;
      case "president apartment":
        price = overnightsStay * (35.0 * 0.8);
        break;
    }
  }
  if (rating === "positive") {
    price *= 1.25;
  } else {
    price *= 0.9;
  }
  console.log(price.toFixed(2));
}
skiTrip(["30",

"president apartment",

"negative"]);
