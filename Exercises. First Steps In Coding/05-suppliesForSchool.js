function supplies(input) {
  let penPacks = Number(input[0]);
  let markerPacks = Number(input[1]);
  let surfaceCleaner = Number(input[2]);

  let dicountPercent = Number(input[3]);

  let pensTotal = penPacks * 5.8;
  let markersTotal = markerPacks * 7.2;
  let cleanerTotal = surfaceCleaner * 1.2;

  let discountTotal =
    ((pensTotal + markersTotal + cleanerTotal) * dicountPercent) / 100;

  console.log(pensTotal + markersTotal + cleanerTotal - discountTotal);
}
supplies(["4 ", "2 ", "5 ", "13 "]);
