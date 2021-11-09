import {createNavigation, 
        fadeAllElements, 
        animationDuration } from "/static/main.js";
import {navigationData,
        creation_layout, 
        model3dHTML,
        appearanceData,
        historyData } from "/static/data.js";

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

    const textContainer = document.querySelector("#text")
    // insert welcome text
    fadeInFadeOut( () => {
        const introText = document.createElement("div");
        introText.classList.add("centerInnerElements");
        textContainer.insertAdjacentElement("beforeend", introText);
        
        const message = `Na základě dostupných informací Vám byla vygenerována tato osoba. 
        
        Parametry byly zvoleny tak, aby co nejlépe splňovaly Vaše požadavky.
                    
        Menu dole slouží k procházení jednotlivých parametrů.`;
    
        const htmlElement = `<div class="creationMessage">${message}</div>`;
        introText.insertAdjacentHTML("beforeend", htmlElement);
    }, textContainer)

    // show homepage button
    createBackToMenuButton();
    attachHomapageLinkListener("#backToMenu");
}

// UNUSED FUNC YET
// function clickedButtons() {
//     const buttons = document.querySelectorAll("#items li");
//     console.log("in ta clickeButotns()");
//     buttons.forEach( button => {

//         button.addEventListener( "click", (event) => {
//             console.log("Klik")

//             buttons.forEach( checkedButton => {
//                 if (checkedButton.classList.contains("clicked")) {
//                     checkedButton.classList.remove("clicked");
//                 }
//             })
//             event.currentTarget.classList.add("clicked");
//         })
//     })
// }


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
        }, animationDuration);
        fadeAllElements();

    })
}


// provides data for appearance section
export function appearance() {
    fadeInFadeOut(createAppearanceTable, document.querySelector("#text"))
}


function createAppearanceTable() {

    const table_ = document.createElement("table");
    const tbody_ = document.createElement("tbody");

    // inserting to DOM
    const destination = document.querySelector("#text");
    destination.insertAdjacentElement("beforeend", table_)
    table_.insertAdjacentElement("beforeend", tbody_);

    // generates table data
    appearanceData.forEach( tableRow => { 
        tbody_.insertAdjacentHTML("beforeend", `
            <tr>
                <td class="prop-col">${tableRow.prop}</td>
                <td class="arrow-col"><</td>
                <td class="option-col">${tableRow.option}</td>
                <td class="arrow-col">></td>
            <tr>`);
    }); 
}

// this decorator provides smooth animation among creation tabs
// second arg: css selector (string)
    // target should be "document.querySelector("#text");"
function fadeInFadeOut(func, target) {
    
    const container = target;
    
    // fade content out 
    container.classList.add("fadePage");

    setTimeout( () => {
        // remove old content
        container.innerHTML = "";
        

        // load new content (new html tags etc.)
        func();

        // fade new content in
        container.classList.replace("fadePage", "showPage");

        // clear container attributes - this is needless work, but code looks better
        setTimeout( () => {
            container.classList.remove("showPage")
        }, animationDuration + 501)
    
       // happens after fading content out
    }, animationDuration);
}

////////////////////////// History Section Functions ///////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
// 
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
    let counter = 0;
    historyData.forEach( profile => {
        list.insertAdjacentHTML("beforeend", `
            <li id="profile-${counter}">${profile.profile}</li>`);
        
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

            fadeInFadeOut( () => {
                destination.insertAdjacentHTML("beforeend", `
                <p>${historyData[counter].description}</p>`
            )}, destination )
        })
    }
}
//
//
////////////////////// End History Section Functions ///////////////////////////





////////////////////////////////////////////////////////////////////////////////
////////////////////// Being created ///////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
///////////// Waiting for real declaration /////////////////////////////////////


export function letsCreateMyOwn() {
    console.log("4");
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


