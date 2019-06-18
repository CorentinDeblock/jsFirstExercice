/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let inputOne = document.getElementById("pass-one");
    let inputTwo = document.getElementById("pass-two");

    function colorElement(element){
        element.style.borderColor = "red";
    }

    document.getElementById("run").addEventListener("click",() => {
        if(inputOne.value == inputTwo.value){
            alert("Mot de passe validé");
        }else{
            colorElement(inputOne);
            colorElement(inputTwo);
        }
    })
})();
