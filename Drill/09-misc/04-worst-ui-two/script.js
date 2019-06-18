/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let buttons = document.querySelectorAll(".actions button");
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

    class buttonClicker extends attributor{
        constructor(start,target,...buttons){
            super(...buttons);
            this.buttons = buttons;
            this.target =  target;
            this.start = start;
            this.targeter = new targeter(target);

            let self = this;

            this.launch = () => {
                for(let i = 0; i < self.buttons.length;i++){
                    self.buttons[i].value = 0;
                    self.buttons[i].addEventListener(("click"),()=> {
                        let output = "";
                        let accumulator = self.start;
                        self.buttons[i].value = self.buttons[i].innerText
                        for(let j = 0; j < i;j++){
                            accumulator += self.buttons[j].innerText.length
                        }
            
                        self.accumulate(self.buttons[i],self.minMax[i].min,self.minMax[i].max);

                        output = self.format(self.buttons[i]);

                        self.buttons[i].innerText = output;
            
                        this.targeter.changeTarget("innerText",accumulator,output);
                    })
                }
            }
        }
    }

    let clicker = new buttonClicker(1,target,...buttons);
    clicker.launch();
})();
