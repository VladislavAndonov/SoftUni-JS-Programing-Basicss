function fruitShop(input) {
  let fruitType = input[0];
  let day = input[1];
  let count = Number(input[2]);
  let price = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruitType === "banana") {
        price = count * 2.5;
        console.log(price.toFixed(2));
      } else if (fruitType === "apple") {
        price = count * 1.2;
        console.log(price.toFixed(2));
      } else if (fruitType === "orange") {
        price = count * 0.85;
        console.log(price.toFixed(2));
      } else if (fruitType === "grapefruit") {
        price = count * 1.45;
        console.log(price.toFixed(2));
      } else if (fruitType === "kiwi") {
        price = count * 2.7;
        console.log(price.toFixed(2));
      } else if (fruitType === "pineapple") {
        price = count * 5.5;
        console.log(price.toFixed(2));
      } else if (fruitType === "grapes") {
        price = count * 3.85;
        console.log(price.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Saturday":
    case "Sunday":
      if (fruitType === "banana") {
        price = count * 2.7;
        console.log(price.toFixed(2));
      } else if (fruitType === "apple") {
        price = count * 1.25;
        console.log(price.toFixed(2));
      } else if (fruitType === "orange") {
        price = count * 0.9;
        console.log(price.toFixed(2));
      } else if (fruitType === "grapefruit") {
        price = count * 1.6;
        console.log(price.toFixed(2));
      } else if (fruitType === "kiwi") {
        price = count * 3.0;
        console.log(price.toFixed(2));
      } else if (fruitType === "pineapple") {
        price = count * 5.6;
        console.log(price.toFixed(2));
      } else if (fruitType === "grapes") {
        price = count * 4.2;
        console.log(price.toFixed(2));
      } else {
        console.log("error");
      }
      break;

    default:
      console.log("error");
      break;
  }
}
fruitShop(["tomato", "Monday", "0.5"]);
