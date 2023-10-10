function areaOfFigures(input) {
    let figure = input[0];
    if (figure === 'square') {
        let a = Number(input[1]);
        let area = (a * a).toFixed(3);
        console.log(area);
    } else if (figure === 'rectangle') {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = (a * b).toFixed(3);
        console.log(area);
    } else if (figure === 'circle') {
        let r = Number(input[1]);
        let area = (Math.PI * r ** 2).toFixed(3);
        console.log(area);
    } else if (figure === 'triangle') {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let area = ((a * h) / 2).toFixed(3);
        console.log(area);
    }
}
areaOfFigures(["square", "5"])