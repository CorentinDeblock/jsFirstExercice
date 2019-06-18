/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let date = new Date();
    let monthDate = date.getMonth() + 1;

    function getInput(input){
        return document.getElementById(input).value;
    }

    function countDay(day,month,year){
        let formatMonth = "";
        let formatDay = "";

        let dayDelay = day - date.getDate();
        let monthDelay = monthDate - month;

        function convertValue(upperString,lowerString,value,endString){
            if(value > 0){
                return `${upperString} ${value} ${endString}`
            }else if(value < 0){
                return `${lowerString} ${value * -1} ${endString}`
            }else{
                return `sur le même ${end}`;
            }
        }

        formatDay = convertValue("sera dans","est passé depuis",dayDelay,"jours");
        formatMonth = convertValue("était il y a","est dans",monthDelay,"mois");

        return {
            dayFormat: formatDay,
            monthFormat: formatMonth,
            yearFormat: date.getFullYear() - year
        }
    }
    console.log(date.getMonth());
    document.getElementById("run").addEventListener("click",()=>{
        let formatedData = countDay(getInput("dob-day"),getInput("dob-month"),getInput("dob-year"));

        alert(`Votre anniversaire : ${formatedData.dayFormat} ` + 
              `et ${formatedData.monthFormat}.\n` +  
              `Vous êtes agé de ${formatedData.yearFormat} ans`)
    })

})();
