/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    let op1 = document.querySelector("#op-one");
    let op2 = document.querySelector("#op-two");

    function doMath(operation) {
        let op1Int = parseInt(op1.value);
        let op2Int = parseInt(op2.value);
        if(operation == "+"){
            return op1Int + op2Int;
        }else if(operation == "-"){
            return op1Int - op2Int;
        }else if(operation == "*"){
            return op1Int * op2Int;
        }else if(operation == '/'){
            return op1Int / op2Int;
        }
        return 0;
    }   

    document.getElementById("addition").addEventListener("click", () => {
        alert(doMath("+"))
    });

    document.getElementById("substraction").addEventListener("click", () => {
        alert(doMath("-"))
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        alert(doMath("*"))
    });

    document.getElementById("division").addEventListener("click", () => {
        alert(doMath("/"));
    });
})();
