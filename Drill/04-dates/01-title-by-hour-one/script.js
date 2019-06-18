/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let hours = new Date().getHours();
    let target = document.getElementById("target");

    if(hours >= 18){
        target.innerText = "Bonsoir";
    }else{
        target.innerText = "Bonjour";
    }
})();
