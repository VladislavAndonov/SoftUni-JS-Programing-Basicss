function fishMarket(input) {
    let mackerel = Number(input[0]);
    let sprinkle = Number(input[1]);
    let bonito = Number(input[2]) * (1.6 * mackerel);
    let safrid = Number(input[3]) * (1.8 * sprinkle);
    let clam = Number(input[4]) * 7.5;

    console.log((bonito + safrid + clam).toFixed(2));
}
fishMarket(["6.90", '4.20', '1.5', '2.5', '1'])