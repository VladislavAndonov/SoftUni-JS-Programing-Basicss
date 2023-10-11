function concatenate([arg1, arg2, arg3, arg4]) {
  let firstName = arg1;
  let lastName = arg2;
  let age = arg3;
  let town = arg4;
  console.log(
    `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
  );
}
concatenate(["Vladislav", "Andonov", "25", "Sofia"]);
