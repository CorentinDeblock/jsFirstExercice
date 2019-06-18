/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let arr = [];
        let toString = () => {
            let returnVal = "";
            arr.forEach(element => {
                returnVal += element.toString();
            })
            return returnVal;
        }
        for(let i = 2; i < 21;i++){
            if(i % 2 == 0 ? true : false){
                arr.push({
                    index:i,
                    number:Math.pow(i,2),
                    toString: function() {
                        let returnVal = "Pair : " + i + "\n" +
                                        "Carré : " + this.number + "\n";

                        return  returnVal;
                    }
                });
            }
        }
        alert(toString());
    });
})();
