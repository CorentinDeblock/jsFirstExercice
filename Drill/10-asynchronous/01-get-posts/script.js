/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class posted{
        constructor(){
            this.button = document.getElementById("run");
        }
        call(predicate){
            window.lib.getPosts((error,table)=>{
                if(error == null){
                    predicate(table)
                }else{
                    predicate("Une erreur est survenue");
                }
            })
        }
        launch(predicate){
            this.button.addEventListener("click",predicate);
        }
    }

    let post = new posted();

    post.launch(() => {
        post.call((value) => {
            console.log(value);
        })
    })
})();
