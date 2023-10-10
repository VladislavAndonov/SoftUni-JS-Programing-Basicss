function hairSalon(input) {
    index = 0;
    let target = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let actionType = input[index];
    let moneyEarned = 0;
    while (action !== "closed") {
        if (action === "haircut") {
            if (actionType === "mens") {
                moneyEarned += 15;
            } else if (actionType === "ladies") {
                moneyEarned += 20;
            } else if (actionType === "kids") {
                moneyEarned += 10;
            }

        } else if (action === "color") {
            if (actionType === "touch up") {
                moneyEarned += 20;
            } else if (actionType === "full color") {
                moneyEarned += 30;
            }
        }
        if (moneyEarned >= target) {
            break;
        }
        index++;
        action = input[index];
        index++;
        actionType = input[index];
    }
    if (moneyEarned >= target) {
        console.log("You have reached your target for the day!");
    } else {
        let moneyNeeded = target - moneyEarned;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
    }
    console.log(`Earned money: ${moneyEarned}lv.`);


}
hairSalon(["300"
    ,"haircut"
    ,"ladies"
    ,"haircut"
    ,"kids"
    ,"color"
    ,"touch up"
    ,"closed"])