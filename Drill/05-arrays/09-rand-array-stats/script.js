/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let td = document.querySelectorAll(".material table tr td");

    Math.sum = (arr,predicate) => {
        let rtVal = 0;
        if(predicate){
            arr.forEach((value) => {
                rtVal += predicate(value);
            })
        }else{
            arr.forEach(value => {
                rtVal += value;
            })
        }
        return rtVal;
    }

    Math.average = (arr,predicate) => {
        let rtVal = 0;
        if(predicate){
            arr.forEach(value => {
                rtVal += predicate(value);    
            })
        }else{
            arr.forEach(value =>{
                rtVal += value;
            })
        }
        return rtVal / arr.length;
    }

    function generate() {
        return Math.round(Math.random() * 100);
    }
    // your code here
    let dd = document.querySelectorAll("dl dd");

    document.getElementById("run").addEventListener("click",value => {
        let arr = [];

        for(let i = 0; i < 10;i++)
            arr.push(generate());

        for(let i in td)
            td[i].innerText = arr[i];

        for(let i = 0; i < dd.length;i++){
            if(i == 0)
                dd[i].innerText =Math.min(...arr);
            else if(i == 1)
                dd[i].innerText = Math.max(...arr);
            else if(i == 2)
                dd[i].innerText = Math.sum(arr);
            else
                dd[i].innerText = Math.average(arr);
        }
    })
})();
