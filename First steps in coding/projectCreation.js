function projectCreation([arg1, arg2]) {
    let name = (arg1);
    let projectCount = parseInt(arg2);
    let hours = (projectCount * 3);

    console.log(`The architect ${name} will need ${hours} hours to complete ${projectCount} project/s.`)
}
projectCreation(['Wlado', 3])