let tab = [1,2,3,4,5,6,7,8,9];

let cumul = tab[0]
for(let i = 1; i < 9;i++){
    cumul += tab[i]
    console.log(`${cumul}`);
}

let actors = ["Stalone","Scarlet","Radclif"];

for(let i = 0;i < 3;i++){
    if(i == 0){
        console.log(`Le premier est ${actors[i]}`);
    }else if(i == 1){
        console.log(`Le deuxieme est ${actors[i]}`);
    }else if(i == 2){
        console.log(`Le troisième est ${actors[i]}`);
    }
}
let marioTable = ["Mario","Luigi","Peach"];

let marioTableCopy = [...marioTable,"Bowser"];

console.log(marioTable);
console.log(marioTableCopy);