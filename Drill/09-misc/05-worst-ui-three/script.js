/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let buttons = document.querySelectorAll(".material form button");
    let input = document.querySelectorAll(".material form input");
    let target = document.getElementById("target");
    
    class attributor{
        constructor(...buttons){
            this.minMax = [];

            for(let i = 0; i < buttons.length;i++){
                this.minMax.push({
                    min: buttons[i].getAttribute("data-min"),
                    max: buttons[i].getAttribute("data-max")
                })
            }
        }
        format(button){
            if(button.value >= 1 && button.value <= 9){
                return `0${button.value}`;
            }
            return button.value;
        }
        accumulate(button,min,max){
            if(button.value === max){
                button.value = min;
            }else{
                button.value++;
            }
        }
    }

    class targeter{
        constructor(target){
            this.target = target;
        }
        replaceAt(index,value) {
            return this.target.innerText.substr(0,index) + value + this.target.innerText.substr(index + value.length,this.target.innerText.length);
        }
        changeTarget(property,index,value){
            this.target[property] = this.replaceAt(index,value); 
        }

    }

    class accumulator{
        constructor(start,...input){
            this.accumalate = start;
            this.input = input;
            this.start = start;
        }
        doLoop(end){
            for(let i = 0; i < end;i++){
                this.accumalate += this.input[i].value.length;
            }
        }
        reset(){
            this.accumalate = this.start;
        }
        getAccumulated(){
            return this.accumalate;
        }
    }

    class gamblingMachine extends attributor{
        constructor(start,buttons,input,target,timer){
            super(...input);
            this.target = target;
            this.buttons = buttons;
            this.input = input;
            this.timer = timer;
            this.targeter = new targeter(target);
            this.accumulator = new accumulator(start,...input)

            for(let i = 0; i < this.buttons.length;i++){
                let button = this.buttons[i];
                button.stop = false;
                button.addEventListener("click",()=> {
                    if(!button.stop){
                        button.stop = true;
                        button.innerText = "Play";
                    }else{
                        button.stop = false;
                        button.innerText = "Stop";
                    }
                })
            }
        }
        play(){
            let self = this;
            setInterval(() => {
                for(let i = 0;i < self.input.length;i++){

                    let input = self.input[i];
                    let stopped = self.buttons[i].stop;
                    this.accumulator.doLoop(i);
                    if(!stopped){
                        let max = self.minMax[i].max;
                        let min = self.minMax[i].min;

                        this.accumulate(input,min,max);
                        input.value = self.format(input);
                    }else{
                        this.targeter.changeTarget("innerText",this.accumulator.getAccumulated(),input.value)
                    }
                    this.accumulator.reset();
                }
            },this.timer)
        }
        replaceAt(index,value) {
            return this.target.innerText.substr(0,index) + value + this.target.innerText.substr(index + value.length,this.target.innerText.length);
        }
    }

    let gambling = new gamblingMachine(1,buttons,input,target,25);
    gambling.play();
})();
