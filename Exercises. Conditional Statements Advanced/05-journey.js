function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let moneyForJurney = 0;
  let destination = "";
  let jurneyType = "";

  if (budget <= 100) {
    destination = "Bulgaria";
    switch (season) {
      case "summer":
        jurneyType = "Camp";
        moneyForJurney = budget * 0.3;
        break;
      case "winter":
        jurneyType = "Hotel";
        moneyForJurney = budget * 0.7;
        break;
    }
  } else if ((budget > 100) & (budget <= 1000)) {
    destination = "Balkans";
    switch (season) {
      case "summer":
        jurneyType = "Camp";
        moneyForJurney = budget * 0.4;
        break;
      case "winter":
        jurneyType = "Hotel";
        moneyForJurney = budget * 0.8;
        break;
    }
  } else {
    destination = "Europe";
    jurneyType = "Hotel";
    moneyForJurney = budget * 0.9;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${jurneyType} - ${moneyForJurney.toFixed(2)}`);
}
journey(["1500", "summer"]);
