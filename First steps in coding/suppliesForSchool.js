function suppliesForSchool(input) {
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let surfaceCleaner = Number(input[2]);
    
    let dicountPercent = Number(input[3]);

    let pensTotal = penPacks * 5.80;
    let markersTotal = markerPacks * 7.20;
    let cleanerTotal = surfaceCleaner * 1.20;

    let discountTotal = (pensTotal + markersTotal + cleanerTotal) * dicountPercent / 100

    console.log(pensTotal + markersTotal + cleanerTotal - discountTotal);
}
suppliesForSchool(["4 ",

"2 ",

"5 ",

"13 "])