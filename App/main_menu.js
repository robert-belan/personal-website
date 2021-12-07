/* Ways to other Main menu sections*/
import { characterCreation } from "/characterCreation_section.js";
import { settings } from "/settings_section.js";
import { extras } from "/extras_section.js";
import { exit } from "/exit_section.js";

import { createNavigation, showElement, unavailableItemMessage } from "/helpers.js";



export function mainMenu() {
    /** Creates MAIN MENU */
    createNavigation(navigationData["Hlavní menu"]);

    /** Welcome message on homepage */
    const welcomeMessage = `<div id="welcome-msg" class="welcome-msg hidden">
    <h3>Vítejte</h3>
        <p>Jmenuji se Robert a toto je můj životopis, motivační dopis, ukázka práce a uvažování, a trochu i zábava.</p>
        <br>
        <p>Informace zde uvedené jsou podávané formou napodobující vytváření postavy v počítačových hrách typu RPG s
        tím rozdílem, že vše označené je <b>skutečné</b> a <b>pravdivé</b>.</p>
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