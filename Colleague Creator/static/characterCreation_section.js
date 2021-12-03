import { createNavigation } from "/static/menuFunctions.js";
import {
    showElement,
    fadeOutFadeIn,
    afterAnimation,
    createBackToMenuButton
} from "/static/helpers.js";

import { appearance } from "/static/appearance_section.js"
import { history } from "/static/history_section.js"
import { skills } from "/static/skills_section.js"
import { attributes } from "/static/attributes_section.js"
import { summary } from "/static/summary_section.js"


// This function creates foundation for character creation section (layout and menu)

export function characterCreation() {
    const main = document.querySelector("main");

    // loads menu items
    createNavigation(characterCreationData["Vytváření postavy"]);

    // create new layout in <main> tag
    const creation_layout = `
    <div id="main-container" class="main-container">
        <section id="model3d" class="model3d-container"></section>
        <section id="text" class="text-container"></section>
    </div>`;
    main.insertAdjacentHTML("afterbegin", creation_layout);

    // load 3d model
    const model3dContainer = document.querySelector("#model3d");
    model3dContainer.insertAdjacentHTML("beforeend", model3dData);


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


const welcomeMessageData = `Na základě dostupných informací Vám byla vygenerována tato osoba.        

Menu dole slouží k procházení jednotlivých parametrů.`;

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