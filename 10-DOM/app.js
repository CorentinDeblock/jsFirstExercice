function exercice1(){
    let body = document.querySelector("body");
    body.classList.remove("bg-aqua");
    body.classList.add("bg-olive");

    let p = document.querySelector("#first-paragraph");
    p.classList.remove("bg-lime","gray");

    p.classList.add("aqua");

    let allSilver = document.querySelectorAll(".bg-silver");

    for(let i = 0; i < allSilver.length;i++){
        allSilver[i].classList.add("bg-teal");
        allSilver[i].classList.remove("bg-silver");
    }

    let blockquote = document.querySelectorAll("blockquote");

    for(let i = 0;i < blockquote.length;i++){
        blockquote[i].classList.add("bg-white");
    }
}

function exercice2(){
    document.querySelector("#my-table").classList.add("bg-purple");

    let allP = document.querySelectorAll(".container");

    for(let i = 0; i < allP.length;i++){
        let p = allP[i].querySelectorAll("p");
        for(let j = 0; j < p.length;j++){
            p[j].classList.add("shadow");
        }
    }

}

let pre = document.querySelectorAll("pre");
for(let i = 0; i < pre.length;i++){
    pre[i].style.color = "red";
    pre[i].style.backgroundColor = "white";
    pre[i].style.borderTop = "3px solid red";
    pre[i].style.borderBottom = "3px solid red";
}

function exercice3(){
    let h3 = document.querySelector("h3");

    h3.innerHTML = "<em>Italic title</em>";

    let h2 = document.querySelector("h2");

    h2.innerHTML = "<strong>HTML dosen't work !</strong>"

    let ul = document.querySelector("ul");

    let li = document.createElement("li");

    li.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";

    ul.appendChild(li);

    li.querySelector("a").style.color = "red";
}

let ol = document.querySelector("ol");

while(ol.children.length > 0){
    ol.removeChild(ol.lastChild);
}

let tab = ["Silent Teacher","Code Monkey", "CodeCombat"];

for(let i = 0; i < tab.length;i++){
    let li = document.createElement("li");
    li.textContent = tab[i];
    ol.appendChild(li);
}