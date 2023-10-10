function housePaiting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let greenPaintQty = ((2 * (x * x) + 2 * (y * x)) - (2 * 1.2) - 2 * (1.5 * 1.5))
    let redPaintQty = ((h * x) + 2 * (x * y))

    console.log((greenPaintQty / 3.4).toFixed(2));
    console.log((redPaintQty / 4.3).toFixed(2));
}
housePaiting(['6', '10', '5.2'])