/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class guessNumber{
        constructor(start,end,winPred,winnedPred){
            this.number = 0;
            this.start = start;
            this.end = end;
            this.winPred = winPred;
            this.nbTry = 0;
            this.win = false;
            this.winnedPred = winnedPred;
        }
        play(){
            let number = Math.round(Math.random() * (this.start - this.end) + this.end);
            do{
                this.nbTry++;
            }while(!this.winPred(prompt("Quel est le nombre ?"),number))
            this.winnedPred(number);
        }
        isCorrect(value,guess){
            return {
                isWin: (value == guess ? true : false),
                phrase: (value > guess ? "Trop grand" : "Trop petit")
            }
        }
    }

    function winCondition(value,number){
        let isCorrect = this.isCorrect(value,number);
        if(isCorrect.isWin){
            return true;
        }else{
            alert(isCorrect.phrase);
            return false;
        }
    }
    function winned(number){
        alert(`Bravo tu a gagner en ${this.nbTry} essais\nLe nombre était ${number}`);
    }

    let guessNumbers = new guessNumber(1,100,winCondition,winned);

    guessNumbers.play();

})();
