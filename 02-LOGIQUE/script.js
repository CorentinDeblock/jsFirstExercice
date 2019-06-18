let languages = prompt("Choissisez votre langue");
let message = "";

if(languages == "fr"){
    message = "Bonjours tout le monde";
}else if(languages == "en"){
    message = "Hello world";
}else if(languages == "es"){    
    message = "Hola, Mundo"
}else{
    message = "Langue non défini";
}
console.log(message);

let score = 80;
let result;

if(score >= 90){
    result = "A";
}else if(score < 90){
    result = "B"
}else if(score <= 50){
    result = "C"
}else{
    result = "D"
}

console.log(`Votre note est : ${result}`);

let sing = "orange";
let numberFruits = 3;
let resultFruits;

if(numberFruits > 1){
    sing += "s";
}

resultFruits = `J'ai ${numberFruits} ${sing}`;

console.log(resultFruits);