function bgEvent(){
    let charac = document.querySelector("#character");

    function changeBg(color){
        charac.style.backgroundColor = color;
    }

    function bgChange(event){
        switch(event.key){
            case "0":
                changeBg("red");
                break;
            case "1":
                changeBg("blue");
                break;
            case "2":
                changeBg("orange");
                break;
            case "3":
                changeBg("green");
                break;
            case "4":
                changeBg("black");
                break;
            case "5":
                changeBg("purple");
                break;
            case "6":
                changeBg("pink");
                break;
            case "7":
                changeBg("yellow");
                break;
            case "8":
                changeBg("brown");
                break;
            case "9":
                changeBg("grey");
                break;
            default:
                
        }
    }

    document.addEventListener("keydown",bgChange);
}
function addLight(div){
    div.classList.add("highlight");
}
function removeLight(div){
    div.classList.remove("highlight");
}

let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

function addClass(){
    switch(event.key){
        case "ArrowUp":
            addLight(up);
            break;
        case "ArrowDown":
            addLight(down);
            break;
        case "ArrowLeft":
            addLight(left);
            break;
        case "ArrowRight":
            addLight(right);
            break;
    }
}
function removeClass(){
    switch(event.key){
        case "ArrowUp":
            removeLight(up);
            break;
        case "ArrowDown":
            removeLight(down);
            break;
        case "ArrowLeft":
            removeLight(left);
            break;
        case "ArrowRight":
            removeLight(right);
            break;
    }
}

function udlr() {
    document.addEventListener("keydown",addClass);
    document.addEventListener("keyup",removeClass);
}

udlr();