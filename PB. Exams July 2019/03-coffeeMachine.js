function coffeeMachine(input) {
  let drinkType = input[0];
  let sugarAmount = input[1];
  let drinksCount = Number(input[2]);
  let priceForDrink = 0;

  switch (drinkType) {
    case "Espresso":
      switch (sugarAmount) {
        case "Without":
          priceForDrink = 0.9;
          break;
        case "Normal":
          priceForDrink = 1;
          break;
        case "Extra":
          priceForDrink = 1.2;
          break;
      }
      break;
    case "Cappuccino":
      switch (sugarAmount) {
        case "Without":
          priceForDrink = 1;
          break;
        case "Normal":
          priceForDrink = 1.2;
          break;
        case "Extra":
          priceForDrink = 1.6;
          break;
      }
      break;
    case "Tea":
      switch (sugarAmount) {
        case "Without":
          priceForDrink = 0.5;
          break;
        case "Normal":
          priceForDrink = 0.6;
          break;
        case "Extra":
          priceForDrink = 0.7;
          break;
      }
      break;
  }
  let totalPrice = priceForDrink * drinksCount;
  if (sugarAmount === "Without") {
    totalPrice *= 0.65;
  }
  if (drinkType === "Espresso" && drinksCount >= 5) {
    totalPrice *= 0.75;
  }
  if (totalPrice > 15) {
    totalPrice *= 0.8;
  }
  console.log(
    `You bought ${drinksCount} cups of ${drinkType} for ${totalPrice.toFixed(2)} lv.`
  );
}
coffeeMachine(["Tea"
    ,"Extra"
    ,3]);
