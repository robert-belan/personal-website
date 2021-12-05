import { mainMenu } from "/menuFunctions.js";

/**
 * Helpers functions
 * 
 * List:
 *  - providing visual effects: 
 *      a) showElement
 *      b) fadeElement
 *      c) fadeOutFadeIn
 *  - 
 * 
 * @module helpers 
 * 
 */


/**
 * Corresponds with "/static/style.css" variable "--ui-animation-duration".
 * @type {number}
 */
export const afterAnimation = 300;



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
export function fadeOutFadeIn(func, container, remove) {

    container.classList.add("fade");

    setTimeout(() => {
        // remove old content
        container.innerHTML = "";
        if (remove === "remove") container.remove();

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
    // clears homepage 
    fadeElement(document.querySelector("#extras-text-container"), "remove");
    mainMenu();
}



export function createBackToMenuButton(addId, addClass = []) {
    document.querySelector("header").insertAdjacentHTML("beforeend", `
    <div id="toMainMenuBtn">
        <input type="button" name="${addId}" id=${addId}>
        <label for="${addId}" class="button backToHomePage hidden ${addClass.join(" ")}"><span class="back-arrow"><</span> Hlavní menu</label>
    </div>
        `);
    setTimeout(() => {
        showElement(document.querySelector("header label"));
        linkToMainMenu(document.querySelector(`#${addId}`));
    }, afterAnimation);
}



export function linkToMainMenu(element) {
    element.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        const main = document.querySelector("main");
        fadeElement(nav);
        fadeElement(main);
        fadeElement(document.querySelector("#toMainMenuBtn"), "remove");

        setTimeout(() => {
            nav.className = "menu";
            nav.insertAdjacentHTML("beforeend", `<ul id="items"></ul>`);
            main.insertAdjacentHTML("beforeend", `<div class="background"></div>`);
            mainMenu();
            showElement(main);
        }, afterAnimation);
    })
}