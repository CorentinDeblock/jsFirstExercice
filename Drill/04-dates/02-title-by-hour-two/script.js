/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let date = new Date();

    let hours = date.getHours();
    let minute =  date.getMinutes();

    let target = document.getElementById("target");


    if(minute >= 30 && hours >= 17){
        target.innerText = "Bonsoir";
    }else{
        target.innerText = "Bonjour";
    }
})();
