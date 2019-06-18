/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Button{
        constructor(id){
            this.id = document.getElementById(id);
        }
        listen(pred){
            this.id.addEventListener("click",pred);
        }
    }

    class Fetcher{
        constructor(url){
            this.action = (value) => {

            };

            this.url = url;
            this.convert = (response) => {
                return response.blob();
            }
            this.onError = (error) =>{
                console.error(error);
            }
        }
        setAction(action){
            this.action = action;
        }
        converter(convert){
            this.convert = convert;
        }
        get(){
            fetch(this.url).then(this.convert).then(this.action).catch(this.onError);
        }
    }

    let target = new Button("run");

    let fetcher = new Fetcher("http://localhost:3000/heroes");

    fetcher.converter((response) => {
        return response.json();
    })

    fetcher.setAction((value) =>{
        console.log(value);
    })

    target.listen(() => {
        fetcher.get();
    })
})();
