/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById("target");

    let date = new Date();
    let option = {
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric",
    }
    let month =  date.toLocaleString("fr-FR",option) + `, ${date.getHours()}h${date.getMinutes()}`;
    target.innerText = month;
})();
