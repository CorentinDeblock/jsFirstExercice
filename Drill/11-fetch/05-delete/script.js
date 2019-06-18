/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
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

            this.url = url;
            this.convert = (response) => {
                return response.blob();
            }
            this.onError = (error) =>{
                console.error(error);
            }
        }
        converter(convert){
            this.convert = convert;
        }
        get(func){
            fetch(this.url).then(this.convert).then(func).catch(this.onError);
        }
        post(data,func){
            fetch(this.url,{
                method:'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }).then(this.convert).then(func).catch(this.onError)
        }
        delete(ids,func){
            fetch(this.url + '/' + ids,{
                method:'delete',
            }).then(func).catch(this.onError);
        }
    }
    class Input{
        constructor(id){
            this.id = document.getElementById(id);
        }
        getValue(){
            return this.id.value;
        }
    }

    let button = new Button("run");
    let fetcher = new Fetcher("http://localhost:3000/heroes");
    let input = new Input("hero-id");

    fetcher.converter((value) => {
        return value.json();
    })

    button.listen(() => {
        fetcher.delete(input.getValue(),() => {
            fetcher.get((value) => {
                console.log(value);
            });
        })
    })
})();
