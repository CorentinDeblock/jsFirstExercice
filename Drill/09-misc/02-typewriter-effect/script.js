

/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class TypeWriter{
        constructor(message,notSameBpm,randomizeType,maxSecond,minSecond){
            this.message = message;
            this.notSameBpm = {
                isEnable: notSameBpm,
                play: notSameBpm
            }
            this.randomizeType = randomizeType;
            this.maxSec = maxSecond;
            this.typeWritedText = "";
            this.minSec = minSecond;
            this.timer = maxSecond;
            this.counter = 0;
            this.getRandom = () => {
                let multiplyBy = Math.random() * this.maxSec;
                if(this.minSec != undefined){
                    multiplyBy = (Math.random() * (this.maxSec - this.minSec)) + this.minSec;
                }
                return Math.round(multiplyBy);
            }
        }
        playAnimation(predicate){
            this.typeWritedText = "";
            if(this.notSameBpm.isEnable){
                let self = this;
                function reCall(){
                    if(self.notSameBpm.play){
                        setTimeout(()=> {
                            if(self.counter == self.message.length - 1){
                                self.notSameBpm.play = false
                            }else{
                                reCall()   
                            }
                            self.typeWritedText += self.message[self.counter];
                            self.timer = self.getRandom();
        
                            predicate(self.typeWritedText,self.timer)
                            self.counter++;
                        },self.timer)
                    }
                }
                reCall();
            }else{
                let randomizedTimer = (this.randomizeType ? this.getRandom() : this.timer);
                this.interval = setInterval(() => {
                    if(this.counter == this.message.length -1){
                        clearInterval(this.interval);
                        this.interval = undefined;
                    }
    
                    this.typeWritedText += this.message[this.counter];
    
                    predicate(this.typeWritedText,randomizedTimer);
                    this.counter++;
    
                },randomizedTimer)
            }
        }
    }
    let target = document.getElementById("target");
    let typewriter = new TypeWriter(target.innerText,true,true,1000,50);
    let typeSound = new Audio("typewriter.wav");
    typeSound.volume = 0.2;
    
    typeSound.isPlaying = () => {
        return typeSound.currentTime > 0 && !typeSound.paused;
    }

    target.innerText = "";
    typewriter.playAnimation((value,timer) => {
        if(!typeSound.isPlaying()){
            typeSound.play();
        }else{
            typeSound.currentTime = 0;
        }

        
        target.innerText = value
    })
})();
