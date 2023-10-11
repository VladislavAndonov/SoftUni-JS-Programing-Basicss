function trekkingMania(input) {
  let groupsCount = Number(input[0]);
  let pplForMusala = 0;
  let pplForMonblan = 0;
  let pplForKili = 0;
  let pplForK2 = 0;
  let pplForEverest = 0;
  let totalPplCount = 0;
  for (let curGroup = 1; curGroup <= groupsCount; curGroup++) {
    let pplInCurGroup = Number(input[curGroup]);
    if (pplInCurGroup <= 5) {
      pplForMusala += pplInCurGroup;
      totalPplCount += pplInCurGroup;
    } else if (pplInCurGroup <= 12) {
      pplForMonblan += pplInCurGroup;
      totalPplCount += pplInCurGroup;
    } else if (pplInCurGroup <= 25) {
      pplForKili += pplInCurGroup;
      totalPplCount += pplInCurGroup;
    } else if (pplInCurGroup <= 40) {
      pplForK2 += pplInCurGroup;
      totalPplCount += pplInCurGroup;
    } else {
      pplForEverest += pplInCurGroup;
      totalPplCount += pplInCurGroup;
    }
  }
  let percentForMusala = (pplForMusala / totalPplCount) * 100;
  let percentForMonblan = (pplForMonblan / totalPplCount) * 100;
  let percentForKili = (pplForKili / totalPplCount) * 100;
  let percentForK2 = (pplForK2 / totalPplCount) * 100;
  let percentForEverest = (pplForEverest / totalPplCount) * 100;

  console.log(`${percentForMusala.toFixed(2)}%`);
  console.log(`${percentForMonblan.toFixed(2)}%`);
  console.log(`${percentForKili.toFixed(2)}%`);
  console.log(`${percentForK2.toFixed(2)}%`);
  console.log(`${percentForEverest.toFixed(2)}%`);
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);
