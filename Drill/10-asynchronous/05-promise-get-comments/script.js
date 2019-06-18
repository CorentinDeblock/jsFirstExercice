/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class promiseMe{
        constructor(element){
            this.button = document.getElementById(element);
        }
        receivePost(pred){
            return window.lib.getPosts().then(pred);
        }
        receiveComments(id,pred){
            return window.lib.getComments(id).then(pred);
        }
        onError(pred){
            this.error = pred;
        }
        call(pred){
            this.button.addEventListener("click",pred)
        }
    }

    let promise = new promiseMe("run");
    promise.call(()=>{
        promise.receivePost((table) => {
            let copy = table;
            for(let id in copy){
                promise.receiveComments(id,(comment) => {
                    copy[id].comments = comment;
                })
            }
            console.log(copy);
            return copy;
        })
    })
})();
