/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let input = document.getElementById("pass-one");
    let span = document.getElementById("validity");
    
    let checkVictory = (input) => {
        let counter = 0;
        if(input.length >= 8){
            for(let i = 0; i < input.length;i++){
                let parse = parseInt(input[i]);
                if(parse != NaN){
                    if(parse >= 0 && input[i] <= 9){
                        counter++;
                    }
                }
            }
            if(counter >= 2){
                return true;
            }
        }
        return false;
    }

    function changeSpan(condition) {
        if(condition){
            span.innerText = "Ok";
        }else{
            span.innerText = "Pas ok";
        }
    }
    let condition = false;
    input.addEventListener("keypress",() => {
        let value = input.value;
        changeSpan(checkVictory(value));
    })
})();
