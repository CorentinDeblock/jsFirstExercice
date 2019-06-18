/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let input = document.getElementById("number");
    let explain = document.querySelector(".explain");

    let inputResult = document.createElement("p");

    explain.appendChild(inputResult);

    function factorial(value){
        let number = 1;
        
        for(let i = 1; i < value + 1;i++){
            number *= i;
        }
        return number;
    }
    document.getElementById("run").addEventListener("click", () => {
        let num = input.value;
        inputResult.innerText = `Factoriel de ${num} est égal à \n` + factorial(parseInt(num));
    });
})();
