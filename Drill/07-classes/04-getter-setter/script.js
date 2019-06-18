/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person{
        constructor(fullname){
            this.firstname = ""
            this.lastname = ""

            this.setName = (fullname) => {
                let splitter = fullname.split(" ");
                this.firstname = splitter[0];
                this.lastname = splitter[1]
            }
            this.getName = () => {
                return `Firstname : ${this.firstname} \nLastname : ${this.lastname}`;
            }

            this.setName(fullname);
        }
    }
    document.getElementById("run").addEventListener("click",()=>{
        let person = new Person("Corentin Deblock");
        console.log(person.getName());
        person.setName("Caroline Marg");
        console.log(person.getName())
    })
})();
