/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
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
            this.post = window.lib.getPosts;
        }
        when(value,pred){
            if(this[value] != undefined){
                this[value]().then(pred,false);
            }else{
                pred(`L'attribut retourné de ${value} n'est pas défini dans le script`,true);
            }
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
        promise.when("post",(value,error)=>{
            if(error){
                console.error(value);
                return;
            }
            console.log(value)
        })
    })
})();
