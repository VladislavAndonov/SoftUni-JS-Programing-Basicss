function radToDegree(input) {
  let radians = Number(input[0]);
  let degrees = (radians * 180) / Math.PI;

  console.log(degrees);
}

radToDegree(["6.2832"]);
