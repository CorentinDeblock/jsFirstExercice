let answer = ['B','O','N','J','O','U','R'];

let response = ['_','_','_','_','_','_','_'];
let arr = [];

function pushLetter(chance,message){
    let showLetter = "Le mot : ";
    let cumul = 0;

    for(let i = 0; i < response.length;i++){
        showLetter += response[i];
        if(response[i] != '_'){
            cumul++;
        }
    }
    if(cumul == response.length){
        return true;
    }
    let prompter = prompt(showLetter + "\nTentative : " + chance + "\n" + message).toUpperCase();
    arr.push(prompter);
    
    let noFind = true;

    for(let i = 0; i < answer.length;i++){
        if(answer[i] == prompter){
            response[i] = answer[i];
            noFind = false;
        }
    }
    if(noFind){
        alert("Vous n'avez pas trouvé de lettre");
    }else{
        alert(`Vous avez trouvé une lettre ${prompter}`);
    }
    return false;
}

function guessLetter(){
    let tentative = 0;
    let winOrLoose = false;
    let fullAnswer = "";
    let showAllLetter = "";

    while(!winOrLoose){
        winOrLoose = pushLetter(tentative,"Devinez une lettre");
        tentative++;
    }
    for(let i = 0; i < answer.length; i++){
        fullAnswer += answer[i];
    }
    for(let i = 0; i < arr.length; i++){
        showAllLetter += arr[i];
    }
    alert(`Felicitations, tu as réussi en ${tentative}\nLe mot était ${fullAnswer}`);
    alert(`Voici toutes les lettres que tu as rentrées ${showAllLetter}`)
}
guessLetter();
