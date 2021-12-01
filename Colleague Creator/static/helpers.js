import { afterAnimation } from "/static/globals.js";

/**
 * Helpers functions
 * 
 * For instance:
 *  - providing visual effects
 * 
 * @module helpers 
 * 
 */


/**
 * Simple UI effect of fading element in
 * @param {Element} element - specify element that should be faded in (smoothly shown)
 */
export function showElement(element) {
    /** @desc - There could be classes hidden or fade, this decide which will be replaced */
    if (!element.classList.replace("hidden", "show")) {
        element.classList.replace("fade", "show");
    };

    /** @desc - Just clears HTML code up */
    setTimeout(() => { element.classList.remove("show") }, afterAnimation);
}



/**
 * Fade out and remove element's content.
 * @param {Element} element - specify element that should be faded out
 * 
 * Used especially while leaving domain with exit("Opustit hru") button
 */
export function fadeElement(element) {
    element.classList.add("fade");

    setTimeout(() => {
        element.innerHTML = "";
    }, afterAnimation)
}