import { mainMenu } from "/src/main_menu.js";
import { characterCreationData } from "/src/characterCreation_section.js";

/**
 * Helpers functions
 * 
 * List:
 * 
 *  - provides main function: createNavigation with support functions
 * 
 *  - provides visual effects: 
 *      a) showElement
 *      b) fadeElement
 *      c) fadeOutFadeIn
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
        <label for="${addId}" class="button backToHomePage hidden ${addClass.join(" ")}">Hlavní menu</label>
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



/**
 * General function for MENUS CREATION
 * @param {{a: string, b: {func: func, toggle: number},}} itemsData - contain menus items (titles and functions)
 *  @property {string} - First property - represents menu title/header
 *  @property {Object} - Second and THE REST of properties are {func: func, toggle: number}
 */
export function createNavigation(itemsData) {

    /* Specify where to create menu items 
     * #items could be found at index.html at <footer><nav></nav></footer> tag
     * 
     * It's used for both ordinary vertical menu and horizontal menu at Character creation section
    */
    const container = document.querySelector(`#items`);

    fadeElement(container);
    setTimeout(() => {
        createMenuItems(itemsData, container);
        showElement(container);
    }, afterAnimation);
}


/** Generates menu title and menu items
 * @param {Object} itemsData - The same as previous function's (createNavigation) JSDoc
 * @param {Element} container - Specifies where to generate items.
 */
function createMenuItems(itemsData, container) {

    /** If true, it dictates creating special horizontal menu at "character creation" section */
    const creationMenu = itemsData === characterCreationData["Vytváření postavy"];
    if (creationMenu) document.querySelector("#menu").classList.replace("menu", "creation-menu");

    /** Conditionally creates menu TITLE */
    if (itemsData["Nadpis"]) {
        container.insertAdjacentHTML("afterbegin", `<h2>${itemsData["Nadpis"]}</h2>`);
    }

    /** Creates menu ITEMS (weird implementation of buttons) */
    for (let item in itemsData) {
        if (item !== "Nadpis") {
            container.insertAdjacentHTML("beforeend", `
<li>
    <input type=${itemsData[item].toggle ? "radio" : "button"} name="btn-menu" id="btn-${itemsData[item].func.name}">
    <label for="btn-${itemsData[item].func.name}" class="button ${creationMenu ? "creationmenu" : "mainmenu"}">${item}</label>
</li>`);                               // .name is property of Function object)

            /** Adding purpose(action) to buttons */
            document.querySelector(`#btn-${itemsData[item].func.name}`).addEventListener("click", () => {
                itemsData[item].func();
            });
        }
    }
}



/**
 * Creates window with contacts.
 * @param {string} [message] - additional optional text content
 */
export function getContacts(message = "") {
    if (!document.querySelector("#contact-container")) {
        const html = `
        <div id="contact-container" class="contact-container hidden">
            <div class="optionalMsg">
                ${message}
            </div>
            <div>
                <p><b>robertbelan92@gmail.com</b></p>
                <p><i>[temp: tento e-mail se změní ještě dnes (7.12.2021) - je tu pouze pro debug účely, použijte raději LinkedIn. Děkuji]</i></p>
                <p>
                LinkedIn, 
                GitHub
                </p>
                <p>Copyright <span style="font-size: 1.3em;">©</span> 2021 Robert Belan</p>        
            </div>
            <div>
                <input type="button" name="contact-close" id="contact-close">
                <label for="contact-close" class="button creationmenu ">Zavřít</label>
            </div>
        </div>
        `;
        /** Create and show contacts */
        document.body.insertAdjacentHTML("beforeend", html);
        showElement(document.querySelector("#contact-container"));

        /** Close and remove contacts  */
        document.querySelector("#contact-close").addEventListener("click", () => {
            fadeElement(document.querySelector("#contact-container"), "remove");
        });
    }
}