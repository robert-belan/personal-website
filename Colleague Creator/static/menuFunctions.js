import { createNavigation, fadeAllElements } from "/static/main.js";
import { navigationData } from "/static/data.js";

export function howCreateColleague() {
    createNavigation(navigationData["Jak vytvořit postavu?"], "#items");
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



export function generateColleague() {

    const items = navigationData["Vytváření postavy"];
    createNavigation(items, "#items", "", "change");

    showBackToMenuButton();
    const main = document.querySelector("main"); //not used yet
}



function showBackToMenuButton() {
    const header = document.querySelector("header");
    const strElement = '<button id="backToMenu" class="button hidden"><   Zpět do hlavního menu</button>';
    
    header.insertAdjacentHTML("beforeend", strElement);
    setTimeout( () => {
        const button = document.querySelector("#backToMenu");
        button.classList.replace("hidden", "showPage");
    }, 1000);
}


export function letsCreateMyOwn() {
    console.log("4");
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


