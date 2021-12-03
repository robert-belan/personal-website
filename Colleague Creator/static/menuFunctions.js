import { afterAnimation } from "/static/globals.js";

import {
    navigationData,
    creation_layout,
    model3dHTMLData,
} from "/static/data.js";

import {
    showElement,
    fadeElement,
    fadeInFadeOut,
    unavailableItemMessage
} from "/static/helpers.js";



/**
 * General function for MENUS CREATION
 * @param {{a: string, b: {func: func, toggle: number},}} itemsData - contain menus items (titles and functions)
 *  @property {string} - First property - represents menu title/header
 *  @property {Object} - Second and THE REST of properties are {func: func, toggle: number}
 */
export function createNavigation(itemsData) {

    /** Specify where to create menu items */
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
    const creationMenu = itemsData === navigationData["Vytváření postavy"];
    if (creationMenu) document.querySelector("#menu").classList.replace("menu", "creation-menu");

    /** Conditionally creates menu title */
    if (itemsData["Nadpis"]) {
        container.insertAdjacentHTML("afterbegin", `<h2>${itemsData["Nadpis"]}</h2>`);
    }

    /** Creates menu items (weird implementation of buttons) */
    for (let item in itemsData) {
        if (item !== "Nadpis") {
            container.insertAdjacentHTML("beforeend", `
<li>
    <input type=${itemsData[item].toggle ? "radio" : "button"} name="btn-menu" id="btn-${itemsData[item].func.name}">
    <label for="btn-${itemsData[item].func.name}" class="button ${creationMenu ? "creationmenu" : "mainmenu"}">${item}</label>
</li>`);                               // .name is property of Function object)

            /** Adding purpose(action) of buttons */
            document.querySelector(`#btn-${itemsData[item].func.name}`).addEventListener("click", () => {
                itemsData[item].func();
            });
        }
    }
}

export function mainMenu() {
    createNavigation(navigationData["Hlavní menu"])
}

export function howCreateColleague() {
    createNavigation(navigationData["Jak vytvořit postavu?"]);
}

export function leaveThisWebsite() {
    createNavigation(navigationData["Ukončit hru"]);
}

export function letsCreateMyOwn() {
    unavailableItemMessage();
}


// This function creates foundation for character creation section (layout and menu)
export function generateColleague() {

    const main = document.querySelector("main");

    // loads menu
    createNavigation(navigationData["Vytváření postavy"]);

    // create new layout in <main> tag
    main.insertAdjacentHTML("afterbegin", creation_layout);

    // load 3d model
    const model3dContainer = document.querySelector("#model3d");
    model3dContainer.insertAdjacentHTML("beforeend", model3dHTMLData);

    const textContainer = document.querySelector("#text")
    // insert welcome text
    fadeInFadeOut(() => {
        const introText = document.createElement("div");
        textContainer.insertAdjacentElement("beforeend", introText);

        const message = `Na základě dostupných informací Vám byla vygenerována tato osoba. 
        
        Parametry byly zvoleny tak, aby co nejlépe splňovaly Vaše požadavky.
                 
        
        Menu dole slouží k procházení jednotlivých parametrů.`;

        const htmlElement = `<div class="creationMessage">${message}</div>`;
        introText.insertAdjacentHTML("beforeend", htmlElement);
    }, textContainer)

    // show homepage button
    createBackToMenuButton();
    linkToMainMenu(document.querySelector("#btn-hp"));
}


function createBackToMenuButton() {
    const header = document.querySelector("header");
    header.insertAdjacentHTML("beforeend", `
    <input type="button" name="btn-hp" id="btn-hp" >
    <label for="btn-hp" class="button backToHomePage hidden"><span class="back-arrow"><</span> Hlavní menu</label>
    `);
    setTimeout(() => {
        showElement(document.querySelector("header label"));
    }, afterAnimation);
}


// attach link to HomePage
function linkToMainMenu(element) {
    element.addEventListener("click", () => {
        fadeElement(document.body);
        setTimeout(() => {
            window.location.assign("/");
        }, afterAnimation);
    })
}

