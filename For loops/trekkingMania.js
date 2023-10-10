function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let peopleForMusala = 0;
    let peopleForMonblan = 0;
    let peopleForKilimanjaro = 0;
    let peopleForK2 = 0;
    let peopleForEverest = 0;
    let totalPeopleCount = 0;
    for (let curGroup = 1; curGroup <= groupsCount; curGroup++) {
        let peopleInCurGroup = Number(input[curGroup]);
        if (peopleInCurGroup <= 5) {
            peopleForMusala += peopleInCurGroup
            totalPeopleCount += peopleInCurGroup;
        } else if (peopleInCurGroup <= 12) {
            peopleForMonblan += peopleInCurGroup
            totalPeopleCount += peopleInCurGroup;
        } else if (peopleInCurGroup <= 25) {
            peopleForKilimanjaro += peopleInCurGroup
            totalPeopleCount += peopleInCurGroup;
        } else if (peopleInCurGroup <= 40) {
            peopleForK2 += peopleInCurGroup
            totalPeopleCount += peopleInCurGroup;
        } else {
            peopleForEverest += peopleInCurGroup
            totalPeopleCount += peopleInCurGroup;
        }
    }
    let percentForMusala = peopleForMusala / totalPeopleCount * 100
    let percentForMonblan = peopleForMonblan / totalPeopleCount * 100
    let percentForKilimanjaro = peopleForKilimanjaro / totalPeopleCount * 100
    let percentForK2 = peopleForK2 / totalPeopleCount * 100
    let percentForEverest = peopleForEverest / totalPeopleCount * 100

    console.log(`${percentForMusala.toFixed(2)}%`);
    console.log(`${percentForMonblan.toFixed(2)}%`);
    console.log(`${percentForKilimanjaro.toFixed(2)}%`);
    console.log(`${percentForK2.toFixed(2)}%`);
    console.log(`${percentForEverest.toFixed(2)}%`);
}
trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"]);
