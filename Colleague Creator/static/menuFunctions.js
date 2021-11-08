import { createNavigation, fadeAllElements } from "/static/main.js";
import { navigationData, creation_layout, model3dHTML } from "/static/data.js";

export function howCreateColleague() {
    createNavigation(navigationData["Jak vytvořit postavu?"], "#items");
}


// This function creates foundation for character creation section (layout and menu)
export function generateColleague() {

    const main = document.querySelector("main");
    const items = navigationData["Vytváření postavy"];
    
    // loads menu
    createNavigation(items, "#items", "", "change");

    // create new layout in <main> tag
    main.insertAdjacentHTML("afterbegin", creation_layout);

    // load 3d model
    const model3dContainer = document.querySelector("#model3d");
    model3dContainer.insertAdjacentHTML("beforeend", model3dHTML);

    // insert welcome text
    const textContainer = document.querySelector("#text");
    const introText = document.createElement("div");
    introText.classList.add("centerInnerElements");
    textContainer.insertAdjacentElement("beforeend", introText);
    
    const message = `Na základě dostupných informací Vám byla vygenerována tato osoba. 
    
    Parametry byly zvoleny tak, aby co nejlépe splňovaly Vaše požadavky.
                
    Menu dole slouží k procházení jednotlivých parametrů.`;

    const htmlElement = `<div class="creationMessage">${message}</div>`;
    introText.insertAdjacentHTML("beforeend", htmlElement);

    // show homepage button
    createBackToMenuButton();
    attachHomapageLinkListener("#backToMenu");
}



function createBackToMenuButton() {
    const header = document.querySelector("header");
    const strElement = '<button id="backToMenu" class="button hidden"><<< Zpět do hlavního menu</button>';
    
    header.insertAdjacentHTML("beforeend", strElement);
    setTimeout( () => {
        const button = document.querySelector("#backToMenu");
        button.classList.replace("hidden", "showPage");
        setTimeout( () => {
            button.classList.add("getRedAndBack");
        }, 500);
    }, 2000);
    
}


export function mainMenu() {
    createNavigation(navigationData["Hlavní menu"], "#items")
}


export function leaveThisWebsite() {
   
    const modal = document.querySelector("#modal");
    const answerYes = document.querySelector("#answerYes");
    const answerNo = document.querySelector("#answerNo");

    modal.style.display = "block";

    // modal.addEventListener( "click", () => {
    //     modal.style.display = "block";
    // })

    answerYes.addEventListener( "click", () => {
        fadeAllElements();
        setTimeout( () => {
            window.location.assign("https://www.google.com/");
        }, 500);
    })

    answerNo.addEventListener( "click", () => {
        modal.style.display = "none";
    })

    window.addEventListener( "click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    })
}


// attach link to HomePage
function attachHomapageLinkListener(selector) {
    const element = document.querySelector(selector);
    element.addEventListener("click", () => {
        setTimeout( () => {
            window.location.assign("/");
        }, 500);
        fadeAllElements();

    })
}

////////////////////////////////////////////////////////////////////////////////
///////////// Waiting for real declaration /////////////////////////////////////


export function letsCreateMyOwn() {
    console.log("4");
}

export function appearance() {
    console.log("appearance log");
}

export function history() {
    console.log("history log");
}

export function skills() {
    console.log("skills log");
}

export function attributes() {
    console.log("attributes log");
}

export function summary() {
    console.log("summary log");
}

export function settings() {
    console.log("2");
}

export function extras() {
    console.log("3");
}