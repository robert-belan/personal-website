import {
    fadeOutFadeIn,
    fadeElement,
    createBackToMenuButton,
    createNavigation
} from "/src/helpers.js";

import { appearance } from "/src/appearance_section.js"
import { history } from "/src/history_section.js"
import { skills } from "/src/skills_section.js"
import { attributes } from "/src/attributes_section.js"
import { summary } from "/src/summary_section.js"


// This function creates foundation for character creation section (layout and menu)

export function characterCreation() {

    const main = document.querySelector("main");

    fadeElement(document.querySelector("#welcome-msg"), "remove");

    // loads menu items
    createNavigation(characterCreationData["Vytváření postavy"]);

    // change <header> h1 inner text when using small screen device
    // opposite statement could be found at helpers.js - 
    const change_header_H1 = window.matchMedia("(max-width: 400px)");
    if (change_header_H1.matches) {
        document.querySelector("header h1").innerText = "Vytváření postavy";
    }

    // create new layout in <main> tag
    const creation_layout = `
    <div id="main-container" class="main-container">
        <section id="model3d" class="model3d-container"></section>
        <section id="text" class="text-container"></section>
    </div>`;
    main.insertAdjacentHTML("afterbegin", creation_layout);

    // load 3d model
    const model3dContainer = document.querySelector("#model3d");
    try {
        model3dContainer.insertAdjacentHTML("beforeend", model3dData);
    } catch (e) {
        console.log("");
    }

    const textContainer = document.querySelector("#text")
    // insert welcome text
    fadeOutFadeIn(() => {
        const introText = document.createElement("div");
        textContainer.insertAdjacentElement("beforeend", introText);

        const htmlElement = `<div class="creationMessage">${welcomeMessageData}</div>`;
        introText.insertAdjacentHTML("beforeend", htmlElement);
    }, textContainer)

    createBackToMenuButton("btn-hp");
}




// Vectary API - https://vectary.github.io/viewer-api/#/parameters
const model3dData = `<iframe src="https://www.vectary.com/viewer/v1/?model=bdd97310-66b0-4ae9-afaa-c2b8ebbd09a5&env=studio3&pan=0&zoom=0&minPolar=80&maxPolar=100&minAzimuth=240&mouseFollow=0.1&maxAzimuth=290&doubleClickToFocus=0&showPreloader=0&showInteractionPrompt=0" frameborder="0" width="100%" height="100%"></iframe>`;


const welcomeMessageData = `Vstoupili jste do sekce, ve které bude možné zvolit si <b>konkrétní parametry</b> svého nového kolegy.

Bohužel, nyní nejsou tyto možnosti přístupné. Abychom však zcela neplýtvali Vaším časem, dovolili jsme si na základě dostupných informací vygenerovat osobu automaticky.

Jednotlivé parametry jsou k nahlédnutí prostřednictvím <b>navigačního menu</b> pod tímto textem.

Tyto parametry se v průběhu času postupně mění. Přestože není možné je nyní upravit zcela podle Vašich představ, je jisté, že je lze <b>výrazně ovlivnit</b> v případě, že se rozhodnete námi vytvořeného kolegy vyzkoušet a zvláště při zařazení do svého týmu.
`;

export const characterCreationData = {
    "Vytváření postavy": {
        "Nadpis": "",
        "Vzhled": {
            func: appearance,
            toggle: 1
        },
        "Historie": {
            func: history,
            toggle: 1
        },
        "Dovednosti": {
            func: skills,
            toggle: 1
        },
        "Vlastnosti": {
            func: attributes,
            toggle: 1
        },
        "Shrnutí": {
            func: summary,
            toggle: 1
        }
    },
}