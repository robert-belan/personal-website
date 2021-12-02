import { afterAnimation } from "/static/globals.js";
import { mainMenu } from "/static/menuFunctions.js";

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
 * @param {boolean} remove - remove element from DOM if true
 * Used especially while leaving domain with exit("Opustit hru") button
 */
export function fadeElement(element, remove = "") {
    element.classList.add("fade");

    setTimeout(() => {
        element.innerHTML = "";
        if (remove === "remove") element.remove();
    }, afterAnimation)
}



// this decorator provides smooth animation among creation tabs
// second arg: css selector (string) or element
export function fadeInFadeOut(func, container) {

    // fade content out 
    if (container.classList.contains("show")) {
        container.classList.remove("show");
    }
    container.classList.add("fade");

    setTimeout(() => {
        // remove old content
        container.innerHTML = "";

        // load new content (new html tags etc.)
        func();
        showElement(container);
    }, afterAnimation);
}



// helper function which create temporary alert message
// TODO: JSDoc !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function tempAlertMessage(message, target, duration) {

    const html = `
<div id="tempMsg" class="temp-alert-msg-container hidden">
    <p class="temp-alert-msg">${message}</p>
</div>`;

    target.insertAdjacentHTML("beforeend", html);
    const msg = document.querySelector("#tempMsg");

    showElement(msg);
    setTimeout(() => {
        fadeElement(msg, "remove");
    }, afterAnimation + duration);
}



// TODO: JSDoc !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function unavailableItemMessage() {
    /** There could be just one such a message at the same time */
    if (!document.querySelector("#tempMsg")) {
        const message = `Nezlobte se, ale tato možnost není v tuto chvíli přístupná.`;
        tempAlertMessage(message, document.querySelector("main"), 2000);
    }
}



export function backToMainMenu() {
    // clears main menu from text 
    fadeInFadeOut(() => { }, document.querySelector("main"));
    mainMenu();
}