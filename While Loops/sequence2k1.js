function sequence2k1(input) {
    let goalNumber = Number(input[0]);
    let num = 1;

    while (goalNumber >= num) {
        console.log(num);
        num = num * 2 + 1
    } 
}
sequence2k1(["31"])