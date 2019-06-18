for(let i = 0; i < 20; i++){
    let modulo = (i + 1) % 2;
    if(modulo == 1){
        console.log(`Le chiffre ${i + 1} est impair`)
    }else{
        console.log(`Le chiffre ${i + 1} est pair`)
    }
}
for(let i = 0; i < 10; i++){
    let index = (i + 1);
    let multiplication = index * 9;
    console.log(`${index} * 9 = ${multiplication}`)
}

for(let i = 0; i < 100; i++){
    let index = i+1;
    if(index > 90){
        console.log(`Pour ${index} vous avez le grade A`)
    }else if(index > 80){
        console.log(`Pour ${index} vous avez le grade B`)
    }else if(index > 70){
        console.log(`Pour ${index} vous avez le grade C`)
    }else if(index > 65){
        console.log(`Pour ${index} vous avez le grade D`)
    }else{
        console.log(`Pour ${index} vous avez le grade F`)
    }
}

let iterate = 4;
let token = "*";
for(i = 0; i < iterate;i++){
    console.log(token.repeat(i + 1));
}