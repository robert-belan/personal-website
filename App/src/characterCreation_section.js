import {
    fadeOutFadeIn,
    showElement,
    fadeElement,
    createBackToMenuButton,
    createNavigation,
    isUsingSmallScreen,
    getMessageWindow,
    afterAnimation
} from "/src/helpers.js";

import { appearance } from "/src/appearance_section.js"
import { history } from "/src/history_section.js"
import { skills } from "/src/skills_section.js"
import { attributes } from "/src/attributes_section.js"
import { summary } from "/src/summary_section.js"

// State variables:
let askedFirstTime = true;

// This function creates foundation for character creation section (layout and menu)

export function characterCreation() {

    const main = document.querySelector("main");

    fadeElement(document.querySelector("#welcome-msg"), "remove");

    // loads menu items
    createNavigation(characterCreationData["Vytváření postavy"]);

    // change <header> h1 inner text when using small screen device
    // opposite statement could be found at helpers.js
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


    /* Load photo or 3D model.*/
    // Select the <div> container, where <iframe> tag with 3d model is inserted
    const model3dContainer = document.querySelector("#model3d");
    //
    if (!isUsingSmallScreen()) {
        model3dContainer.insertAdjacentHTML("beforeend", model3dData);
    } else {
        model3dContainer.insertAdjacentHTML("beforeend", modelPhotoData)
    }


    const textContainer = document.querySelector("#text")
    // insert welcome text
    fadeOutFadeIn(() => {
        const introText = document.createElement("div");
        textContainer.insertAdjacentElement("beforeend", introText);

        const htmlElement = `<div class="creationMessage">${welcomeMessageData}</div>`;
        introText.insertAdjacentHTML("beforeend", htmlElement);

        // if true, add "Zobrazit postavu" button
        isUsingSmallScreen(() => {
            document.querySelector("#main-container").insertAdjacentHTML("beforeend", `
            <button type="button" id="showModel-btn" class="button mainmenu showModel-btn">Zobrazit postavu</button>
            `);
            // add event listener on click
            TextToModelToggle();
        })

    }, textContainer)

    createBackToMenuButton("btn-hp");

}

/**
 * Switch over to show text or character's photo/3D model.
 * This feature could be found at Character creation section.
 */
function TextToModelToggle() {
    const showModelBtn = document.querySelector("#showModel-btn");
    showModelBtn.addEventListener("click", function showModel() {
        const text = document.querySelector("#text");
        const model = document.querySelector("#model3d");

        if (window.getComputedStyle(model).zIndex === "-100") {
            text.setAttribute("style", "display:none");
            model.setAttribute("style", "display:block; z-index: 100");
            showModelBtn.innerText = "Zobrazit text";

            if (!document.querySelector("#model3d > iframe")) {
                load3DModelInvitation();
            }

        } else {
            text.removeAttribute("style");
            model.removeAttribute("style");
            showModelBtn.innerText = "Zobrazit postavu";
        }
    })
}

function load3DModelInvitation() {
    if (askedFirstTime) {
        getMessageWindow(beforeLoad3DModelMsg, load3DModel);
        askedFirstTime = false;
    } else {
        getMessageWindow(secondBeforeLoad3DModelMsg, load3DModel);
    }
}

function load3DModel() {
    const loadButton = document.querySelector("#load3DModel");
    loadButton.addEventListener("click", function handlerLoadModel() {
        const modelContainer = document.querySelector("#model3d");

        // remove current figure's picture ...
        fadeElement(modelContainer);
        // ... replace it with the 3D model, fade it in and ...
        setTimeout(() => {
            modelContainer.insertAdjacentHTML("beforeend", model3dData);
            showElement(modelContainer);
            // ... close message window
            fadeElement(document.querySelector("#message-container"), "remove");
        }, afterAnimation)
    })
}

// Vectary API
const model3dData = `<iframe src="https://sorryMyFriendThisIsNotPublic.com></iframe>`; // :-)

const modelPhotoData = `<img id="personImage" class="personImage" src="/logos/model.png" alt="Vzhled vytvářené postavy. Skromný fešák.">`;

const welcomeMessageData = `Vstoupili jste do sekce, ve které bude možné zvolit si <b>konkrétní parametry</b> svého nového kolegu.

Bohužel, nyní nejsou tyto možnosti přístupné. Abychom však zcela neplýtvali Vaším časem, dovolili jsme si na základě dostupných informací vygenerovat osobu automaticky.

Jednotlivé parametry jsou k nahlédnutí prostřednictvím <b>navigačního menu</b> pod tímto textem.

Tyto parametry se v průběhu času postupně mění. Přestože není možné je nyní upravit zcela podle Vašich představ, je jisté, že je lze <b>výrazně ovlivnit</b> v případě, že se rozhodnete námi vytvořeného kolegu vyzkoušet - zvláště při zařazení do Vašeho týmu.
`;

const beforeLoad3DModelMsg = `
<p>Přejete si načíst 3D model?</p>
<p>Pokud používáte méně výkonný smartphone, načtení modelu může způsobit snížení jeho výkonu. Jinými slovy, začne se Vám tato část webové stránky hrozně sekat.</p>
<p>Načtení také spotřebuje přibližně 5&nbsp;MB dat. Zvažte to, pokud využíváte mobilní data.</p>
<p><button type="button" id="load3DModel" class="button mainmenu loadModel-btn">Načíst 3D postavu</button></p>
<p>Po kliknutí na tlačítko "Zavřít" bude zobrazen pouze obrázek.</p>
`;

const secondBeforeLoad3DModelMsg = `
<p>Snížení výkonu zařízení a vyšší spotřeba mobilních dat. Rozumím, přesto chci:</p>
<p><button type="button" id="load3DModel" class="button mainmenu loadModel-btn">Načíst 3D postavu</button></p>
<p>Nebo "Zavřít" a zobrazit pouze obrázek.</p>
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
