/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let body = document.querySelector("body");

    function changeBgColor(id,bgColor){
        document.getElementById(id).addEventListener("click",() =>{
            body.style.backgroundColor = bgColor;
        })
    }
    changeBgColor("red","red");
    changeBgColor("green","green");
    changeBgColor("yellow","yellow");
    changeBgColor("blue","blue");
     
})();
