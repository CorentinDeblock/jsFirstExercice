/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    function noSame(array){
        for(let i in array){
            let actual = array[i];
            for(let j in array){
                if(i != j){
                    if(actual == array[j]){
                        array.splice(j,1);
                    }
                }
            }
        }
        return array;
    }
    // your code here
    document.getElementById("run").addEventListener("click",() => {
        console.log(noSame(fruits));
    })
})();
