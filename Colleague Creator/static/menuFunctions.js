import {
    createNavigation,
    showAllElements,
    animationDuration,
    fadeOutAndDeleteContent
} from "/static/main.js";

import {
    navigationData,
    creation_layout,
    model3dHTML,
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


export function howCreateColleague() {
    createNavigation(navigationData["Jak vytvořit postavu?"], "#items");
}


// This function creates foundation for character creation section (layout and menu)
export function generateColleague() {

    const main = document.querySelector("main");

    // loads menu
    createNavigation(navigationData["Vytváření postavy"], "#items", "", "change");


    // create new layout in <main> tag
    main.insertAdjacentHTML("afterbegin", creation_layout);

    // load 3d model
    const model3dContainer = document.querySelector("#model3d");
    model3dContainer.insertAdjacentHTML("beforeend", model3dHTML);

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
    attachHomapageLinkListener("#btn-hp");
}


function createBackToMenuButton() {
    const header = document.querySelector("header");

    header.insertAdjacentHTML("beforeend", `
    <input type="button" name="btn-hp" id="btn-hp" >
    <label for="btn-hp" class="button backToHomePage hidden"><span class="back-arrow"><</span> Hlavní menu</label>
    `);
    setTimeout(() => {
        const button = document.querySelector("header label");
        button.classList.replace("hidden", "showPage");
        setTimeout(() => {
            button.classList.remove("showPage"); // sanitize html code
        }, 500);
    }, 2000);
}


export function mainMenu() {
    createNavigation(navigationData["Hlavní menu"], "#items")
}


export function clearAndMoveToMainMenu() {
    // clears main menu from text 
    fadeInFadeOut(() => { }, "main");
    mainMenu();
    console.log("FF");
    // zkouska 
}



// attach link to HomePage
function attachHomapageLinkListener(selector) {
    const element = document.querySelector(selector);
    element.addEventListener("click", () => {
        fadeOutAndDeleteContent("body");
        setTimeout(() => {
            window.location.assign("/");
        }, animationDuration);
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
}

// this decorator provides smooth animation among creation tabs
// second arg: css selector (string) or element
function fadeInFadeOut(func, target) {

    let container;

    if (typeof target === "object") {
        container = target;
    }
    else if (typeof target === "string") {
        container = document.querySelector(target);
    }

    // fade content out 
    if (container.classList.contains("showPage")) {
        container.classList.remove("showPage");
    }
    container.classList.add("fadePage");

    setTimeout(() => {
        // remove old content
        container.innerHTML = "";

        // load new content (new html tags etc.)
        func();

        // fade new content in
        container.classList.replace("fadePage", "showPage");

        // clear container attributes - this is needless, but html code looks cleaner
        setTimeout(() => {
            container.classList.remove("showPage")
        }, animationDuration + 501)

        // happens after fading content out
    }, animationDuration);
}

////////////////////////// History Section Functions ///////////////////////////
export function history() {
    fadeInFadeOut(createHistory, document.querySelector("#text"))
}


function createHistory() {

    const destination = document.querySelector("#text");

    // foundation
    const history_layout = `
    <div class="history-container">
        <div id="profile" class="profile">
            <ul></ul>
        </div>
        <div id="description" class="description"></div>
    </div>
    `
    destination.insertAdjacentHTML("beforeend", history_layout);

    const list = document.querySelector("#profile ul");
    const description = document.querySelector("#description");

    let counter = 10;
    historyData.forEach(profile => {
        list.insertAdjacentHTML("beforeend", `
            <li>
                <input type="radio" name="btn-profile" id="btn-profile${counter}">
                <label for="btn-profile${counter}" class="button historyprofilemenu">${profile.profile}</label>
            </li>`);

        // TODO: mozna zde nastavit listeners?
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
                <td class="sign"><span>&#8331;</span></td>
                <td class="level">${skillsData[counter].completed}</td>
                <td class="sign"><span>&#8330;</span></td>
            </tr>`);
    }
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
                result.push(`<li class="down-arrow">&#8595;</li>`);    // down arrow sign
            }
            else if (counter === skill.completed - 1 && counter !== skill.levels.length - 1) {
                result.push(`<li class="down-arrow">&#10515;</li>`); // down arrow with bottom line
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
                <div class="${attributesData[counter].selected ? "check-mark" : "uncheck-mark"}" >&#10005;</div >
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

    //understood and copied from: https://lukelowrey.com/css-variable-theme-switcher/
}

// moves user from main menu to submenu - Settings
export function settings() {
    createNavigation(navigationData["Nastavení"], "#items");

    window.onload = () => {
        const darkmodeButton = document.querySelector("#btn-darkmode");
        darkmodeButton.addEventListener("click", () => {
            darkmode();
        })
    }
}




export function leaveThisWebsite() {
    createNavigation(navigationData["Ukončit hru"], "#items");
}

export function exit() {

    // fade full page out
    document.body.classList.replace("showPage", "fadePage");

    // f*cking crazy combo function - it is just telling goodbye in fancy way
    // fade everything out -> fade in and say "bye" -> fade everything out and redirect to Google
    setTimeout(() => {
        document.body.innerHTML = "";
        document.body.insertAdjacentHTML("beforeend", `
        <div class="goodbye">
            <p>Díky za Váš čas.</p>
        </div>
        `);
        document.body.classList.replace("fadePage", "showPage");;
        // fade everything out again and
        setTimeout(() => {
            document.body.classList.replace("showPage", "fadePage");
            // and after that, redirect to Google
            setTimeout(window.location.assign("https://google.com"), 3000)
        }, 1500);
    }, 700);
}




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




// helper function which create temporary alert message
function tempAlertMessage(message, target, duration) {

    const messageParagraph = `<p class="temp-alert-msg">${message}</p>`;

    const temp_container = document.createElement("div");
    temp_container.classList.add("temp-alert-msg-container", "hidden");

    target.insertAdjacentElement("beforeend", temp_container);
    temp_container.insertAdjacentHTML("beforeend", messageParagraph)

    // get message visible smoothly
    temp_container.classList.replace("hidden", "showPage")

    // after given time, get message invisible and remove it
    setTimeout(() => {
        temp_container.classList.replace("showPage", "fadePage");
        setTimeout(() => {
            temp_container.remove();
        }, 550)
    }, duration + animationDuration)
}


// show 
export function letsCreateMyOwn() {
    const message = `Nezlobte se, ale možnost "Zvolím si sám" není v tuto chvíli přístupná.`;
    if (document.querySelector("main").innerHTML.length === 0) {
        tempAlertMessage(message, document.querySelector("main"), 2000);
    }
}


/**
 * Insert foreword into first page of extras section.
 */
function getForeword() {
    document.querySelector("#extras-text-container").insertAdjacentHTML("beforeend", foreword);
}


export function extras() {
    createNavigation(navigationData["Extras"], "#items");

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
        showAllElements("#extras-text-container");
    }, animationDuration);
    // reason of bigger additional delay is for discovering menu items at first
}


// TODO: Refaktorovat, patrne lze vyuzit jiz napsane funkce 
/**
 * Clear text in Extras section. U
 */
export function backToEmptyExtras() {
    fadeInFadeOut(getForeword, "#extras-text-container");
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
    createNavigation(navigationData["Články o autorovi"], "#items");
    changeTextInExtras(shortStory);
}

export function aboutAuthorLong() {
    createNavigation(navigationData["Články o autorovi"], "#items");
    changeTextInExtras(longStory);
}

export function releaseNotes() {
    createNavigation(navigationData["Změny na webu"], "#items");
    changeTextInExtras(releaseNotesData);
}

export function aboutThisWeb() {
    createNavigation(navigationData["Jak vznikal tento web?"], "#items");
    changeTextInExtras(aboutThisWebData);

    /** TODO: smazat kdykoli to zacne nekoho stvat
     * do clanku napsat, co bych na tomto webu udelal jinak kdybych zacinal odznovu
     * zmenit nazev Extras - neni dostatecne jasne co se pod tim skryva !!!!
    */

}
