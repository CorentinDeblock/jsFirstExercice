/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let information = "";
    do{
        let age = prompt("Quel est votre âge ?")
        let sexe = prompt("Quel est votre sexe ?");
        let ville  = prompt("Quel est votre ville");
        information = `Votre age est : ${age}\nVotre sexe est : ${sexe}\nVotre ville est : ${ville}\n\n`
    }while(!confirm(information + "Validez vous ces information"));
    
})();
