/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
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
        console.log(promise);
    }

    target.listen(() => {
        receive();
    })
})();
