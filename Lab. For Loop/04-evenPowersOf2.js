function evenPowersOf2(input) {
  let power = Number(input);

  for (let a = 0; a <= power; a++) {
    if (a % 2 === 0) {
      console.log(2 ** a);
    }
  }
}
evenPowersOf2(["5"]);
