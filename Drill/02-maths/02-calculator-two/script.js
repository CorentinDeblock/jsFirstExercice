/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let firstOpe = document.getElementById("op-one");
    let secondOpe = document.getElementById("op-two")
    const performOperation = operation => {
        let ope1Int = parseInt(firstOpe.value);
        let ope2Int = parseInt(secondOpe.value);
        switch(operation){
            case "addition":
                alert(ope1Int + ope2Int);
                break;
            case "substraction":
                alert(ope1Int - ope2Int);
                break;
            case "multiplication":
                alert(ope1Int * ope2Int);
                break;
            case "division":
                alert(ope1Int / ope2Int);
                break;
            default:
                break;
        }
    };
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
