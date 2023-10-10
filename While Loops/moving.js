function moving(input) {
  let index = 0;
  let spaceWidth = Number(input[index]);
  index++;

  let spaceLength = Number(input[index]);
  index++;

  let spaceHight = Number(input[index]);
  index++;

  let freeSpace = spaceWidth * spaceLength * spaceHight;

  let curCartons = input[index];

  while (curCartons !== "Done") {
    curCartons = Number(input[index]);
    freeSpace -= curCartons;
    if (freeSpace <= 0) {
      console.log(
        `No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`
      );
      return;
    }
    index++;
    curCartons = input[index];
  }
  console.log(`${freeSpace} Cubic meters left.`);
}
moving(["10", "1", "2", "20", "20", "Done"]);
