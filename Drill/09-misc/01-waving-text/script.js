

/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Wave{
        constructor(message,start,count,minPx,maxPx){
            function generatePx(){
                return Math.random() * (maxPx - minPx) + minPx;
            }
            function createPx(val){
                return `${val}px`
            }

            this.fontText = [];
            if(count == undefined && maxPx == undefined && count == undefined){
                this.fontText = ["18px","22px","28px","32px","36px"];    
            }else{
                if(count == undefined){
                    count = 5
                }
    
                if(minPx == undefined){
                    minPx = 18;
                }
    
                if(maxPx == undefined){
                    maxPx = 36;
                }

                for(let i = 0; i < count;i++){
                    this.fontText.push(createPx(generatePx()))
                }
                this.fontText = this.fontText.sort();
            }
            
            this.message = message;
            this.counter = start;
            this.switcher = true;
            this.buffer = [];

            for(let i = 0;i < this.message.length;i++){
                let span = document.createElement("span");
                span.innerText = this.message[i];
                this.buffer.push(span);
            }
        }
        accumulator(){
            if(this.counter == this.fontText.length - 1){
                this.switcher = false;
            }else if(this.counter == 0){
                this.switcher = true;
            }
    
            if(this.switcher){
                this.counter++;
            }else{
                this.counter--;
            }
        }
        getFontSize(){
            return this.fontText[this.counter];
        }
        forEach(predicate){
            for(let i = 0;i < this.buffer.length;i++){
                predicate(this.buffer[i],i);
                this.accumulator();
            }
        }
        animationText(){
            let str = [];
            for(let i = 0; i < this.buffer.length;i++){
                str.push(this.buffer[i].style.fontSize);
            }
            for(let i = 0; i < this.buffer.length;i++){
                if(i + 1 < this.buffer.length){
                    this.buffer[i].style.fontSize = str[i + 1]
                }else{
                    this.buffer[i].style.fontSize = str[0]
                }
            }
        }
        playAnimation(every){
            this.interval = 
            setInterval(()=>{
                wave.animationText();
            },every * 1000);
        }
        stopAnimation(){
            if(this.interval != undefined){
                clearInterval(this.interval);
                this.interval = undefined;
            }
        }
    }
    let target = document.getElementById("target");
    let wave = new Wave("Don't hate the player hate the game.\n- Ice T",0,4,38,74);
    target.innerText = "";

    wave.forEach((value,i) => {
        value.style.fontSize = wave.getFontSize();
        value.classList.add("wave"); 
        target.appendChild(value);
    })
    wave.playAnimation(0.080);
})();
