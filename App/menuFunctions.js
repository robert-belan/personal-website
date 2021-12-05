import { characterCreation } from "/characterCreation_section.js"
import { settings } from "/settings_section.js"
import { extras } from "/extras_section.js"
import { exit } from "/exit_section.js"

import { characterCreationData } from "/characterCreation_section.js"

import {
    showElement,
    fadeElement,
    unavailableItemMessage,
    afterAnimation
} from "/helpers.js";



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
    const creationMenu = itemsData === characterCreationData["Vytváření postavy"];
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
    createNavigation(navigationData["Hlavní menu"]);

    const welcomeMessage = `<div id="welcome-msg" class="welcome-msg hidden">
    <h3>Vítejte</h3>
        <p>Jmenuji se Robert a toto je můj životopis, motivační dopis, ukázka práce a uvažování, trochu i zábava.</p>
        <br>
        <p>Informace zde uvedené jsou podávané formou napodobující vytváření postavy v počítačových hrách typu RPG s
        tím rozdílem, že vše zde uvedené je <b>skutečné</b> a <b>pravdivé</b>.</p>
    </div>`;

    document.querySelector("main").insertAdjacentHTML("beforeend", welcomeMessage);

    showElement(document.querySelector("#welcome-msg"));
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



export const navigationData = {
    "Hlavní menu": {
        "Nadpis": "Hlavní menu",
        "Založit novou postavu": {
            func: howCreateColleague,
            toggle: 0
        },
        "Nastavení": {
            func: settings,
            toggle: 0
        },
        "Extras": {
            func: extras,
            toggle: 0
        },
        "Opustit hru": {
            func: leaveThisWebsite,
            toggle: 0
        }
    },

    "Jak vytvořit postavu?": {
        "Nadpis": "Jak chcete vytvořit postavu?",
        "Zkusím štěstí": {
            func: characterCreation,
            toggle: 0
        },
        "Zvolím si sám": {
            func: letsCreateMyOwn,
            toggle: 0
        },
        "Zpět": {
            func: mainMenu,
            toggle: 0
        }
    },

    "Ukončit hru": {
        "Nadpis": "Jste si jisti?",
        "Ano": {
            func: exit,
            toggle: 0
        },
        "Ne": {
            func: mainMenu,
            toggle: 0
        }
    },
}