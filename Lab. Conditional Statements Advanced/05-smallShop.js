function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let count = Number(input[2]);
  let totalPrice = 0;

  if (city === "Sofia") {
    switch (product) {
      case "coffee":
        totalPrice = 0.5 * count;
        break;
      case "water":
        totalPrice = 0.8 * count;
        break;
      case "beer":
        totalPrice = 1.2 * count;
        break;
      case "sweets":
        totalPrice = 1.45 * count;
        break;
      case "peanuts":
        totalPrice = 1.6 * count;
        break;
    }
  } else if (city === "Plovdiv") {
    switch (product) {
      case "coffee":
        totalPrice = 0.4 * count;
        break;
      case "water":
        totalPrice = 0.7 * count;
        break;
      case "beer":
        totalPrice = 1.15 * count;
        break;
      case "sweets":
        totalPrice = 1.3 * count;
        break;
      case "peanuts":
        totalPrice = 1.5 * count;
        break;
    }
  } else if (city === "Varna") {
    switch (product) {
      case "coffee":
        totalPrice = 0.45 * count;
        break;
      case "water":
        totalPrice = 0.7 * count;
        break;
      case "beer":
        totalPrice = 1.1 * count;
        break;
      case "sweets":
        totalPrice = 1.35 * count;
        break;
      case "peanuts":
        totalPrice = 1.55 * count;
        break;
    }
  }
  console.log(totalPrice);
}
smallShop(["coffee", "Varna", "2"]);
