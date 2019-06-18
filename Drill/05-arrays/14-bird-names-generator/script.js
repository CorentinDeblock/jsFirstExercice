/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    // your code here
    function birdsRandom() {
        return birds[Math.round(Math.random() * (birds.length -1))];
    }
    function adjectivesRandom(){
        let rand = Math.round(Math.random() * (adjectives.size -1));
        let iterator = adjectives.keys();
        
        let value = iterator.value;
        for(let i = 0; i < rand;i++){
            value = iterator.next().value;
        }
        return value;
    }

    let target = document.getElementById("target");
    document.getElementById("run").addEventListener("click",() => {
        let bird = birdsRandom();
        let abjective = adjectivesRandom();

        let start = "Le";

        if(bird.fem){
            start = "La";
            abjective += "e";  
        }
        target.innerText = `${start} ${bird.name} ${abjective}`;
        
    })
})();
