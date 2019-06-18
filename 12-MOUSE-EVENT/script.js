let hover = document.querySelectorAll(".hoverMe")

hover.forEach((elem) => {
    elem.addEventListener("mouseenter",function(){
        this.style.opacity = 0;
    })
})

let reset = document.querySelector("#reset");

reset.addEventListener("click",function(){
    hover.forEach((elem) => {
        elem.style.opacity = 1;
    })
})

let x = document.querySelector("#axe-x");
let y = document.querySelector("#axe-y");

document.onmousemove = () => {
    x.textContent = event.x;
    y.textContent = event.y;
}