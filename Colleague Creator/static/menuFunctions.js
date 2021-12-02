import { afterAnimation } from "/static/globals.js";

import {
    navigationData,
    creation_layout,
    model3dHTMLData,
    attributesData,
    summaryData,
} from "/static/data.js";

import {
    showElement,
    fadeElement,
    fadeInFadeOut,
    unavailableItemMessage
} from "/static/helpers.js";



/**
 * General function for MENUS CREATION
 * @param {{a: string, b: {func: func, toggle: number}}} itemsData - contain menus items (titles and functions)
 *  @property {string} - First property - represents menu title/header
 *  @property {Object} - Second and THE REST of properties are {func: func, toggle: number}
 *    @property {function} func - tells what happens after click
 *    @property {number} toggle - specify <input> element behaviour (ie. type="button/radio")
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


export function howCreateColleague() {
    createNavigation(navigationData["Jak vytvořit postavu?"]);
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
    attachHomapageLinkListener(document.querySelector("#btn-hp"));
}


function createBackToMenuButton() {
    const header = document.querySelector("header");
    header.insertAdjacentHTML("beforeend", `
    <input type="button" name="btn-hp" id="btn-hp" >
    <label for="btn-hp" class="button backToHomePage hidden"><span class="back-arrow"><</span> Hlavní menu</label>
    `);
    /** @todo - Uvazit zda nechat zobrazeni tlacitka okamzite nebo s odstupem casu */
    // setTimeout(() => {
    showElement(document.querySelector("header label"));
    // }, 2000);
}


export function mainMenu() {
    createNavigation(navigationData["Hlavní menu"])
}



// attach link to HomePage
function attachHomapageLinkListener(element) {
    element.addEventListener("click", () => {
        fadeElement(document.body);
        setTimeout(() => {
            window.location.assign("/");
        }, afterAnimation);
    })
}



/////////////////////////// Skill Section Functions ////////////////////////////




//////////////////////// Attributes Section Functions //////////////////////////
export function attributes() {
    return fadeInFadeOut(createAttributes, document.querySelector("#text"));
}

function createAttributes() {
    const destination = document.querySelector("#text");

    // creates foundation layout code
    const attributes_layout = `
    <div class="attributes-container">
        <div id="attributes-boxes" class="attributes-boxes"></div>
        <h3>Popis vlastnosti</h3>
        <div id="attributes-description" class="attributes-description"></div>
    </div>
    `
    destination.insertAdjacentHTML("beforeend", attributes_layout);

    createAttributesBoxes();
}

function createAttributesBoxes() {

    const attributes_boxes_container = document.querySelector("#attributes-boxes");
    const attributes_description_container = document.querySelector("#attributes-description")

    // generates attributes boxes
    for (let counter = 0; counter < attributesData.length; counter++) {
        attributes_boxes_container.insertAdjacentHTML("beforeend", `
            <div id="attribute-box-${counter}" class="attribute-box">
                <p>${attributesData[counter].name}</p>
                <div class="${attributesData[counter].selected ? "check-mark checked" : "check-mark unchecked"}" >&#10005;</div >
            </div>
        `)

        // attach listener to "button"  
        const attribute = document.querySelector(`#attribute-box-${counter}`);
        attribute.addEventListener("click", () => {
            //smooth changing effect
            fadeInFadeOut(() => {
                attributes_description_container.insertAdjacentHTML("beforeend", `
                <h2>${attributesData[counter].name}</h2>
                <p>${attributesData[counter].description}</p>
                    <ul class="bonuses">${getAttributeDescription(counter)}</ul>
                `);
            }, attributes_description_container)
        });
    }
}


function getAttributeDescription(selectedAttribute) {
    const attribute = attributesData[selectedAttribute];
    const result = []

    for (let counter = 0; counter < attribute.bonus.length; counter++) {
        result.push(`<li> ${attribute.bonus[counter]}</li> `)
    }

    return result.join("");
}





// Exit section
export function leaveThisWebsite() {
    createNavigation(navigationData["Ukončit hru"]);
}
// TODO: JSDoc
export function exit() {
    fadeElement(document.body);
    setTimeout(() => {
        document.body.insertAdjacentHTML("beforeend", `
        <div class="goodbye"><p>Díky za Váš čas.</p></div>`);
        showElement(document.body);
        setTimeout(() => {
            fadeElement(document.body);
            setTimeout(() => {
                window.location.assign("https://google.com");
            }, 400);
        }, 1500);
    }, 500);
}
// End Exit section





export function summary() {
    return fadeInFadeOut(createSummary, document.querySelector("#text"));
}

function createSummary() {
    const sumaSumarum = document.querySelector("#text");
    sumaSumarum.insertAdjacentHTML("beforeend", `
        <div id="summary" class="summary">
            ${summaryData}
            <div class="btn-letsPlayAGame">
                <input type="button" name="btn-menu" id="btn-letsPlayAGame">
                <label for="btn-letsPlayAGame" class="button creationmenu">Spustit hru</label>
            </div>
        </div>
    `)

    // TODO: doplnit fadeInFadeOut
    window.onload = () => {
        document.querySelector("#btn-letsPlayAGame").addEventListener(() => {
            fadeInFadeOut({}, {})
        })
    }
}






export function letsCreateMyOwn() {
    unavailableItemMessage();
}




