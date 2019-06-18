/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let image = document.querySelector("figure img");
    let dataHover = image.getAttribute("data-hover");
    let defaultSrc = image.src;

    image.addEventListener("mouseover",() => {
        image.src = dataHover
    })
    image.addEventListener("mouseout",() => {
        image.src = defaultSrc;
    })
})();
