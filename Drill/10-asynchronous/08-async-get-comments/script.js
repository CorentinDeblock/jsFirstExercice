/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class button{
        constructor(id){
            this.id = document.getElementById(id);
        }
        listen(pred){
            this.id.addEventListener("click",pred);
        }
    }

    let target = new button("run");

    async function receive(){
        let promise = await window.lib.getPosts();
        for(let i in promise){
            let commentary = await window.lib.getComments(i);
            promise[i].comments = commentary[i]; 
        }
        console.log(promise);
    }

    target.listen(() => {
        receive();
    })
})();
