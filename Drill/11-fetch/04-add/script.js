/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
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
        delete(id,func){
            fetch(`${this.url}/${id}`).then(func);
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
    let nameInput = new Input("hero-name");
    let alterEgoInput = new Input("hero-alter-ego");
    let powerInput = new Input("hero-powers")
    let fetcher = new Fetcher("http://localhost:3000/heroes");

    fetcher.converter((value)=>{
        return value.json();
    })

    button.listen(()=> {
        fetcher.post({
            name: nameInput.getValue(),
            alterEgo:alterEgoInput.getValue(),
            abilities:powerInput.getValue()
        },(value) =>{
            console.log("success");
            fetcher.get((value) => {
                console.log(value);
            })
        })
    })
})();
