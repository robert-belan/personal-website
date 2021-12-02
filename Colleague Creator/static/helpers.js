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



// helper function which create temporary alert message
// TODO: JSDoc !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export function tempAlertMessage(message, target, duration) {

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


export function wait(seconds) {
    setTimeout(null, seconds);
}