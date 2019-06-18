/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class button{
        constructor(id){
            this.id = document.getElementById(id);
        }
        listen(pred){
            this.id.addEventListener("click",pred);
        }
    }

    let target = new button("run");

    let promise;

    target.listen(() =>{
        promise = window.lib.getPersons()
        promise.then((value) => {
            console.log(value)
        }).catch((rej) => {
            console.error(rej);
        })
    })
})();   
