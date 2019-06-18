/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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

    function addError(element){
        element.classList.add("error");
    }

    document.getElementById("run").addEventListener("click",()=>{
        if(inputOne.value == inputTwo.value){
            alert("Mot de passe validé");
        }else{
            addError(inputOne);
            addError(inputTwo);
        }
    })
})();
