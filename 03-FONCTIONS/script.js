function substract(a,b){
    console.log(`${a} - ${b} = ${a - b}`)
}
function division(a,b){
    console.log(`${a} / ${b} = ${a / b}`)
}
function multiplication(a,b){
    console.log(`${a} * ${b} = ${a * b}`)
}
function percents(value,percentage){
    console.log(`${percentage} de ${value} = ${value * (percentage/100)}`);
}
function velocity(distance,timeinHours){
    console.log(`${Math.floor(distance / timeinHours)} Km/h`);
}

let a = 10;
let b = 5;

let percent = 50;
let distance = 10;
let time = 0.30;

substract(a,b);
division(a,b);
multiplication(a,b);
percents(a,percent);
velocity(distance,time);