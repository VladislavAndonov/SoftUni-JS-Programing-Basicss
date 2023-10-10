function building(input) {
  let floorsCount = Number(input[0]);
  let roomsCount = Number(input[1]);
  let curFloor = '';

  for (let floor = floorsCount; floor >= 1; floor--) {
  curFloor = '';
    for (let room = 0; room < roomsCount; room++) {
      if (floor === floorsCount) {
        curFloor += `L${floor}${room} `
      } else if (floor % 2 === 0) {
        curFloor += `O${floor}${room} `
      } else {
        curFloor += `A${floor}${room} `
      }
    }
    console.log(curFloor);
  }
}
building(["9",

"5"]) 
