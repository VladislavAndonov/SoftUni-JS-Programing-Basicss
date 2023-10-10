function hotelRoom(input) {
  let month = input[0];
  let overnights = Number(input[1]);
  let studioPrice = 0;
  let apartmentPrice = 0;

  switch (month) {
    case "May":
    case "October":
      studioPrice = overnights * 50;
      apartmentPrice = overnights * 65;
      if (overnights > 14) {
        studioPrice *= 0.7;
        apartmentPrice *= 0.9;
      } else if (overnights > 7) {
        studioPrice *= 0.95;
      }
      break;
    case "June":
    case "September":
      studioPrice = overnights * 75.2;
      apartmentPrice = overnights * 68.7;
      if (overnights > 14) {
        studioPrice *= 0.8;
        apartmentPrice *= 0.9;
      }
      break;
    case "July":
    case "August":
      studioPrice = overnights * 76;
      apartmentPrice = overnights * 77;
      if (overnights > 14) {
        apartmentPrice *= 0.9;
      }
  }
  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["June", "14"]);
