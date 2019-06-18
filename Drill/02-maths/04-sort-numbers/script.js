/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let input = document.getElementById("numbers");
    document.getElementById("run").addEventListener("click", () => {
        let convertNum = input.value.split(",");
        for(let i = 0; i < convertNum.length; i++){
            convertNum[i] = parseInt(convertNum[i]);
        }
        input.value = convertNum.sort((a,b) => {
            return a - b;
        });
    });
})();
