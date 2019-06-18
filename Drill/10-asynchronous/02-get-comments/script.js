/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
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
        callPost(predicate){
            window.lib.getPosts((error,table)=>{
                if(error == null){
                    predicate(table)
                }else{
                    predicate("Une erreur est survenue");
                }
            })
        }
        callComment(table,predicate){
            table.forEach((element,id)=>{
                window.lib.getComments(element.id,(error,comment) => {
                    if(error == null){
                        predicate(element,comment[id])
                    }else{
                        predicate(undefined,"Une erreur est survenue");
                    }
                })
            })
        }
        launch(predicate){
            this.button.addEventListener("click",predicate);
        }
    }

    let post = new posted();

    post.launch(() => {
        post.callPost((table) => {
            post.callComment(table,(element,comment)=> {
                element.comments = comment;
            })
            console.log(table);
        })
    })
})();
