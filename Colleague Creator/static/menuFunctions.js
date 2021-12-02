import { afterAnimation } from "/static/globals.js";

import {
    navigationData,
    creation_layout,
    model3dHTMLData,
    appearanceData,
    historyData,
    skillsData,
    attributesData,
    summaryData,
    foreword,
    shortStory,
    longStory,
    releaseNotesData,
    aboutThisWebData
} from "/static/data.js";

import {
    wait,
    showElement,
    fadeElement,
    tempAlertMessage
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


export function clearAndMoveToMainMenu() {
    // clears main menu from text 
    fadeInFadeOut(() => { }, document.querySelector("main"));
    mainMenu();
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


// provides data for appearance section
export function appearance() {
    fadeInFadeOut(createAppearanceTable, document.querySelector("#text"))
}

function createAppearanceTable() {

    const table_ = document.createElement("table");
    table_.classList.add("appearance-table")
    const tbody_ = document.createElement("tbody");

    // inserting to DOM
    const destination = document.querySelector("#text");
    destination.insertAdjacentElement("beforeend", table_)
    table_.insertAdjacentElement("beforeend", tbody_);

    // generates table data
    appearanceData.forEach(tableRow => {
        tbody_.insertAdjacentHTML("beforeend", `
            <tr>
                <td class="prop-col">${tableRow.prop}</td>
                <td class="arrow-col">&#10229;</td>
                <td class="option-col">${tableRow.option}</td>
                <td class="arrow-col">&#10230;</td>
            <tr>`);
    });

    /* After click on buttons with arrow, it tells you that you can not use it */
    document.querySelectorAll(".arrow-col").forEach(item => {
        item.addEventListener("click", unavailableItemMessage)
    })
}


// this decorator provides smooth animation among creation tabs
// second arg: css selector (string) or element
function fadeInFadeOut(func, container) {

    // fade content out 
    if (container.classList.contains("show")) {
        container.classList.remove("show");
    }
    container.classList.add("fade");

    setTimeout(() => {
        // remove old content
        container.innerHTML = "";

        // load new content (new html tags etc.)
        func();

        showElement(container);

    }, afterAnimation);
}

////////////////////////// History Section Functions ///////////////////////////
export function history() {
    fadeInFadeOut(createHistory, document.querySelector("#text"))
}


function createHistory() {

    // foundation
    const history_layout = `
    <div class="history-container">
        <div id="profile" class="profile">
            <ul></ul>
        </div>
        <div id="description" class="description"></div>
    </div>
    `
    document.querySelector("#text").insertAdjacentHTML("beforeend", history_layout);

    const list = document.querySelector("#profile ul");
    const description = document.querySelector("#description");

    let counter = 0;
    historyData.forEach(profile => {
        list.insertAdjacentHTML("beforeend", `
            <li>
                <input type="button" name="btn-profile" id="btn-profile${counter}">
                <label for="btn-profile${counter}" class="button historyprofilemenu">${profile.profile}</label>
            </li>`);

        // if (counter > 0) {
        //     document.querySelector(`#btn-profile${counter}`).addEventListener("click", () => {
        //         unavailableItemMessage("Bohužel. V tuto chvíli není tato možnost dostupná.");
        //     })
        // }

        counter++;
    });

    description.insertAdjacentHTML("beforeend", `<p>${historyData[0].description}</p>`)

    //adding event listeners
    profileToggle();
}

function profileToggle() {

    // const profile = document.querySelector("#profile");
    const destination = document.querySelector("#description");
    const profiles = document.querySelectorAll("#profile li");


    for (let counter = 0; counter < profiles.length; counter++) {
        profiles[counter].addEventListener("click", () => {

            fadeInFadeOut(() => {
                destination.insertAdjacentHTML("beforeend", `
                <p>${historyData[counter].description}</p>`
                )
            }, destination)
        })
    }
}




/////////////////////////// Skill Section Functions ////////////////////////////
export function skills() {
    fadeInFadeOut(createSkills, document.querySelector("#text"))
}


function createSkillsTable() {
    const table_ = document.createElement("table");
    table_.classList.add("skills-table")
    const tbody_ = document.createElement("tbody");

    // inserting to DOM
    const destination = document.querySelector("#skills");
    destination.insertAdjacentElement("beforeend", table_)
    table_.insertAdjacentElement("beforeend", tbody_);

    // generates table data
    for (let counter = 0; counter < skillsData.length; counter++) {
        tbody_.insertAdjacentHTML("beforeend", `
            <tr id="skill-${counter}">
                <td class="skill-logo"><img src="/static/logos/${skillsData[counter].logo}"></td>
                <td class="skill-label">${skillsData[counter].skill}</td>
                <td class="sign">&#43;</td>
                <td class="level">${skillsData[counter].completed}</td>
                <td class="sign">&#8722;</td>
            </tr>`);
    }

    document.querySelectorAll(".sign").forEach(sign => {
        sign.addEventListener("click", unavailableItemMessage)
    })
}

function createSkills() {
    const destination = document.querySelector("#text");

    // creates foundation layout code
    const skills_layout = `
    <div class="skills-container">
        <div id="skills" class="skills"></div>
        <h3>Zvolené úrovně dovedností</h3>
        <div id="skills-description" class="skills-description">
            <ol></ol>
        </div>
    </div>
    `
    destination.insertAdjacentHTML("beforeend", skills_layout);

    createSkillsTable();
    skillsToggle();
}


// generates skill description after skill selection
function skillsToggle() {
    const destination = document.querySelector("#skills-description ol");
    const skills = document.querySelectorAll("#skills tr");

    for (let counter = 0; counter < skills.length; counter++) {
        skills[counter].addEventListener("click", () => {

            //smooth changing effect
            fadeInFadeOut(() => {
                destination.insertAdjacentHTML("beforeend", `
                    ${getSkillDescription(counter)}
                    `)
            }, destination)
        })
    }
}


// Creates skills description using skillsData object (data.js)
function getSkillDescription(selectedSkill) {

    const skill = skillsData[selectedSkill]; //array with levels text
    const result = []

    for (let counter = 0; counter < skill.levels.length; counter++) {
        if (counter < skill.completed) {
            result.push(`<li class="achieved">${skill.levels[counter]}</li>`)
            if (counter < (skill.completed - 1)) {
                result.push(`<li class="down-arrow">&#8675;</li>`);    // down arrow sign
            }
            else if (counter === skill.completed - 1 && counter !== skill.levels.length - 1) {
                result.push(`<li class="down-stop-arrow">&#10515;</li>`); // down arrow with bottom line
            }
        }
        else {
            result.push(`<li class="unachieved">${skill.levels[counter]}</li>`)
        }
    }
    return result.join("");
}



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

// Dark / Light toggle
export function darkmode() {

    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
    window.localStorage.setItem('theme', targetTheme);
    console.log(`info: ${targetTheme} theme setting has been saved to origin's local storage`)

    /**
     * Understood and copied from: 
     * @author Luke Lowrey 
     * https://lukelowrey.com/css-variable-theme-switcher/
     */
}

// moves user from main menu to submenu - Settings
export function settings() {
    createNavigation(navigationData["Nastavení"]);

    window.onload = () => {
        const darkmodeButton = document.querySelector("#btn-darkmode");
        darkmodeButton.addEventListener("click", () => {
            darkmode();
        })
    }
}



// Exit section
export function leaveThisWebsite() {
    createNavigation(navigationData["Ukončit hru"]);
}

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
            }, 600);
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




// TODO: JSDoc !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function unavailableItemMessage() {
    /** There could be just one such a message at the same time */
    if (!document.querySelector("#tempMsg")) {
        const message = `Nezlobte se, ale tato možnost není v tuto chvíli přístupná.`;
        tempAlertMessage(message, document.querySelector("main"), 2000);
    }
}



export function letsCreateMyOwn() {
    unavailableItemMessage();
}



/**
 * Insert foreword into first page of extras section.
 */
function getForeword() {
    document.querySelector("#extras-text-container").insertAdjacentHTML("beforeend", foreword);
}


export function extras() {
    createNavigation(navigationData["Extras"]);

    const main = document.querySelector("main");
    // Studying Temporary Note: this means: if main is empty (not child elements)
    if (!main.children.length) {
        const html = `
            <div id="extras-text-container" class="extras-text-container hidden">
                ${foreword}            
            </div>`;
        main.insertAdjacentHTML("beforeend", html);
    }

    setTimeout(() => {
        showElement(document.querySelector("#extras-text-container"));
    }, afterAnimation);
    // reason of bigger additional delay is for discovering menu items at first
}


// TODO: Refaktorovat, patrne lze vyuzit jiz napsane funkce 
/**
 * Clear text in Extras section. U
 */
export function backToEmptyExtras() {
    fadeInFadeOut(getForeword, document.querySelector("#extras-text-container"));
    extras();
}

/**
 * Changes text in Extras section with smooth animation.
 * 
 * @param {string} text Text contains string with html tags.
 */
function changeTextInExtras(text) {
    const target = document.querySelector("#extras-text-container");
    fadeInFadeOut(() => {
        target.insertAdjacentHTML("beforeend", text);
    }, target);
}


export function teleportTo(target) {
    let element = document.querySelector(target);

    // TODO: volitelne parametry teto funkce zatim nepodporuje Safari
    element.scrollIntoView({ behavior: "smooth" });
}


/** 
 * Used in: Extras Section
 * Show short version of article about author
 */
export function aboutAuthorShort() {
    createNavigation(navigationData["Články o autorovi"]);
    changeTextInExtras(shortStory);
}

export function aboutAuthorLong() {
    createNavigation(navigationData["Články o autorovi"]);
    changeTextInExtras(longStory);
}

export function releaseNotes() {
    createNavigation(navigationData["Změny na webu"]);
    changeTextInExtras(releaseNotesData);
}

export function aboutThisWeb() {
    createNavigation(navigationData["Jak vznikal tento web?"]);
    changeTextInExtras(aboutThisWebData);

    /** TODO: smazat kdykoli to zacne nekoho stvat
     * do clanku napsat, co bych na tomto webu udelal jinak kdybych zacinal odznovu
     * zmenit nazev Extras - neni dostatecne jasne co se pod tim skryva !!!!
    */

}
