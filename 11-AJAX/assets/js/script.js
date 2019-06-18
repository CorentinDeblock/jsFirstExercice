let ranking = document.querySelector("#ranking tbody");
let best = document.querySelector("#top tbody");
let research = document.querySelector("#country")

function randomize(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function compareScore(a,b){
    return a.score - b.score;
}
function compareCountry(data){
    if(data.country == "Bahrain"){
        return true;
    }
    return false;
}

function rank(data){
    if(data.score > 750){
        data.rank = "A";
    }else if(data.score > 500){
        data.rank = "B";
    }else {
        data.rank = "C";
    }
}

function displayArray(arr,option){
    arr.map(value => console.log(value[option]));
}
function displayArray(arr){
    arr.map(value => console.log(value));
}
function createTR(name,score,rank,country) {
    let element = document.createElement("tr");

    function createTd(text,classes){
        let td = document.createElement("td");
        td.innerText = text;
        td.classList.add(classes)
        element.appendChild(td);
    }
    createTd(name,"name");
    createTd(score,"score");
    createTd(rank,"rank");
    createTd(country,"country");

    return element;
}   
function pushTR(table,li){
    table.appendChild(li);
}
function pushRanking(value){
    pushTR(ranking,createTR(value.name,value.score,value.rank,value.country))
}
function pushBest(value){
    pushTR(best,createTR(value.name,value.score,value.rank,value.country))
}

let req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.onload = (event) => {
    if(req.status == 200){
        let response = JSON.parse(req.responseText);
        response.map((value) => {
            value.score = randomize(0,1000);
        })
        response.sort(compareScore);
        response.forEach(rank);
        response.forEach(pushRanking); 
        let min = response[0],max = response[response.length - 1];
        
        pushBest(min);
        pushBest(max);

        console.log(min.score);
        console.log(max.score);

        console.log("From bahrain : " + response.filter((value) => {
            return value.country = "Bahrain";
        }).length)
    }
}
req.open('get',"assets/json/data.json",true);
req.send();

research.addEventListener("keyup",(event)=>{
    let child = ranking.children;
    let value = research.value;

    if(value == ""){
        for(let i = 1; i < child.length;i++){
            child[i].classList.remove("hide");
        }      
    }else{
        for(let i = 1; i < child.length;i++){
            if(!child[i].innerText.match(value) && child[i].tagName != "TBODY"){
                child[i].classList.add("hide");
            }else{
                child[i].classList.remove("hide");
            }
        }   
    }
})