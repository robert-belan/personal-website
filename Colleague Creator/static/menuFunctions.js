import { createNavigation, fadeAllElements } from "/static/main.js";
import { navigationData } from "/static/data.js";

export function howCreateColleague() {
    createNavigation(navigationData["Jak vytvořit postavu?"], "#items");
}

export function settings() {
    console.log("2");
}

export function extras() {
    console.log("3");
}

export function generateColleague() {
    console.log("4");
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