 /* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here
    function fillEmpty(){
        let toPush = [];
        for(let i in computers){
            let comp = computers[i]; 
    
            for(let j in defaultProps){
                let pushing = true;
                let data = {
                    id:0,
                    champ:"",
                    value:""
                }
    
                for(let k in comp){
                    data.id = i;
                    data.champ = j;
                    data.value = defaultProps[j];
    
                    if(k == j){
                        pushing = false;
                    }
                }
                if(pushing){
                    toPush.push(data);
                }
            }
        }
        toPush.forEach((value) => {
            computers[value.id][value.champ] = value.value; 
        }) 
        console.log(computers);
    }
    document.getElementById("run").addEventListener("click",fillEmpty);
})();
