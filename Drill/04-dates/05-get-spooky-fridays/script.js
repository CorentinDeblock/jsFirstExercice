/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let year = document.getElementById("year");

    function onClick(){
        let date = new Date(parseInt(year.value),0,13);
        let res = [];
        res.push(`Les mois comportant un vendredi 13 sur l'année ${year.value}`)
        for(let i = 0; i < 12;i++){
            date.setMonth(i);
            let friday = date.toLocaleString("fr-FR",{
                weekday:"long"
            });
            
            if(friday == "vendredi"){
                res.push(`Le ${date.getMonth()} ${date.toLocaleString("fr-FR",{
                    month:"long"
                })}`)
            }
        }
        let rtString = "";
        res.forEach((value) => {
            rtString += value + '\n';
        })
        alert(rtString);
    }

    let button = document.getElementById("run");

    button.addEventListener("click",onClick);

})();
