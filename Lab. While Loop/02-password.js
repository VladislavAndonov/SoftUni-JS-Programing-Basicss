function password(input) {
  let username = input[0];
  let rightPass = input[1];
  let index = 2;
  let passTry = input[index];

  while (passTry !== rightPass) {
    index++;
    passTry = input[index];

    if (passTry === rightPass) {
      break;
    }
  }
  console.log(`Welcome ${username}!`);
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
