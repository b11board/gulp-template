let randomizer = (min,max) => Math.round(min + Math.random()*(max-min))

function colors(){
    const r = randomize(0,255);
    const g = randomize(0,255);
    const b = randomize(0,255);
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(colors())