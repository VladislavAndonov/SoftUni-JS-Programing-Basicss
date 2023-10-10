function vowels(input) {
    let word = input[0];
    let vowelSum = 0;
    for (i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letter === 'a') {
            vowelSum += 1
        } else if (letter === 'e') {
            vowelSum += 2
        } else if (letter === 'i') {
            vowelSum += 3
        } else if (letter === 'o') {
            vowelSum += 4
        } else if (letter === 'u') {
            vowelSum += 5
        }
}
console.log(vowelSum);
}
vowels(["bamboo"])