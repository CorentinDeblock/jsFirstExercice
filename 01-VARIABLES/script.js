let nbKid = 4
let name = "Jeanne"
let country = "France"
let job = "instritueur"

console.log(`Vous serez ${job} et habiterez a ${country}, et marié a ${name} avec ${nbKid} enfants`);

let date = new Date();
let actual = date.getFullYear();

let birth = 1998;

console.log(actual - birth);

let myAge = 21;
let maxAge = 60;
let food = "café"
let conso = 1;

let yearBeforeDeath = maxAge - myAge;

let yearConso = conso * 360;
let maxConso = yearConso * yearBeforeDeath;

console.log(`Il vous reste ${maxConso} de ${food} avant d'atteindre l'age de ${maxAge} ans`);

let number1 = 1;
let number2 = 2;
let number3 = 4;
let number4 = 2;
let number5 = 3;

console.log(`${number1} + ${number2} = ${number1 + number2}`)

console.log(`${number3} / ${number4} = ${number3 / number4}`)

console.log(`(1+2) * 3 = ${(number1 + number2) * number5}`);

let reponse = (number1 + number2) * number5 + number3 / number4;
console.log(`${(number1 + number2) * number5} + ${number3 / number4} = ${reponse}`)