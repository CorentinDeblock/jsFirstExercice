let message = "";
let essai = 0;

let min = 20;
let max = 80;

function randomNum(){
    return Math.ceil(Math.random() * (max - min) + min); 
}
let number = randomNum();

function asker(val){
    if(val == number){
        return `C'est juste tu a trouver en ${essai} coups`;
    }else if(val < number){
        return "C'est plus";
    }
    return "C'est moins";
}
while(true){
    let ask = prompt("Entrer une valeur entre 20 et 80");
    alert(asker(ask));
    if(ask == number){
        break;
    }
    essai++;
}