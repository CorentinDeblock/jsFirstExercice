/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let target = document.getElementById("target");

    class localCounter {
        constructor(target,name){
            this.target = target;
            this.name = name; 

            let counter = this.getCounter();
            if(!counter){
                this.setCounter(0);
            }else{
                target.innerText = counter;
            }
        }
        getCounter(){
            return localStorage.getItem(this.name);
        }
        setCounter(value){
            localStorage.setItem("counter",value);
        }
        addCounter(value){
            let setVal = parseInt(this.getCounter()) + value;
            this.setCounter(setVal);
            target.innerText = setVal;
        }
    }
    let localcounter = new localCounter(target,"counter");
    document.getElementById("increment").addEventListener("click",()=> {
        localcounter.addCounter(1);
    })

})();
