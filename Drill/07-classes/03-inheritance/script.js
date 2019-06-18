/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm a ${this.name}!`;
        }
    }
    class Cat extends Animal{
        constructor(){
            super();
            this.name = "cat";
        }
    }

    class Dog extends Animal{
        constructor(){
            super();
            this.name = "dog";
        }
    }
    // your code here
    Animal.greeting = "Hello";

    let cat = new Cat();
    let dog = new Dog();
    document.getElementById("run").addEventListener("click",()=>{
        console.log(cat.sayHello());
        console.log(dog.sayHello());
    })    
})();
