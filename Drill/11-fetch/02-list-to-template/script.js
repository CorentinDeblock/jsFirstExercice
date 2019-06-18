/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

    class DocumentAnalyzer{
        constructor(element){
            this.content = document.getElementById(element).content;
        }
        get(element){
            return this.content.querySelector(`.${element}`);
        }
    }

    class ElementReplicator{
        constructor(element){
            this.elements = element;

            this.copied = this.elements.cloneNode(true);

            this.targets = [];
        }
        addTarget(names){
            this.targets.push({
                name: names,
                value: this.copied.querySelector(names)
            });
        }
        changeValue(name,value){
            for(let i in this.targets){
                let element = this.targets[i]
                if(element.name == name){
                    element.value.innerText = value;
                }
            }
        }
        getValue(name){
            return this.targets[name];
        }
        getElement(){
            return this.copied.cloneNode(true);
        }
    }

    let button = new Button("run");
    let target = document.getElementById("target");

    let fetcher = new Fetcher("http://localhost:3000/heroes");

    let template = new DocumentAnalyzer("tpl-hero");

    let elementCreator = new ElementReplicator(template.content);

    elementCreator.addTarget(".name");
    elementCreator.addTarget(".alter-ego");
    elementCreator.addTarget(".powers");

    function removeAllChild(){
        var child = target.lastElementChild;  
        while (child) { 
            target.removeChild(child); 
            child = target.lastElementChild; 
        } 
    }

    fetcher.converter((response) => {
        return response.json();
    })

    fetcher.setAction((value) =>{
        removeAllChild();
        value.forEach(element => {
            elementCreator.changeValue(".name",element.name);
            elementCreator.changeValue(".alter-ego",element.alterEgo);
            elementCreator.changeValue(".powers",element.abilities);

            target.appendChild(elementCreator.getElement());
        });
    })  

    button.listen(() => {
        fetcher.get();
    })
})();
