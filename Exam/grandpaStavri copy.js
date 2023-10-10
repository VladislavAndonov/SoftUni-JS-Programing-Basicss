function gradpaStavri(input) {
    let daysCount = Number(input[0]);
    let curRakiaLiters = Number(input[1]);
    let curDegrees = Number(input[2]);
    let totalLites = curRakiaLiters;
    let totalDegrees = curDegrees * curRakiaLiters;

    for (index = 3; index < input.length; index++) {
        curRakiaLiters = Number(input[index]);
        totalLites += curRakiaLiters;
        index++;
        curDegrees = Number(input[index]);
        totalDegrees += curDegrees * curRakiaLiters;
    }
    let avgDegrees = totalDegrees / totalLites;
    console.log(`Liter: ${totalLites.toFixed(2)}`);
    console.log(`Degrees: ${avgDegrees.toFixed(2)}`);
    if (avgDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (avgDegrees <= 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}
gradpaStavri(["3"
    ,"100"
    ,"45"
    ,"50"
    ,"55"
    ,"150"
    ,"36"
    ])