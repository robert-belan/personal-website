
window.addEventListener("load", () => {
    showAllElements();
})

// used when window.onload is done (for more seamless experience)
function showAllElements() {
    document.body.classList.replace("hidden", "showPage");
}

globalThis.currentSection = "";


// attach link to elements
function homePageTicket(selector) {
    const element = document.querySelector(selector);
    element.classList.add = "link";
    element.addEventListener("click", () => {
        // if you're not in main menu already
        if (window.location.pathname !== "/")
            changeLocation("/");
    })
}

//which elements have power to take you home
homePageTicket("header h1");


//before changing location(url), all elements are faded
function changeLocation(path) {
    fadeAllElements();
    setTimeout(() => {
        window.location.assign(path);
    }, 500);
}


// used when leaving page (for more seamless experience)
function fadeAllElements() {
    document.body.classList.replace("showPage", "fadePage");
}

function fadeElements(element) {
    element.classList.add("fadePage");
}

function showElements(element) {
    element.classList.add("showPage");
}

// used for creating menu in:
    // index.html (index.js),
    // creating.html (creating.js)   
function createMenuOptions(obj) {
    
    if ( typeof obj === "object") {

        // where append new elements
        const menu = document.querySelector("#items");

        let labels = Object.keys(obj);
        let paths = Object.values(obj);

        for (let counter = 0; counter < paths.length; counter++) {
        
            //creating new <li class="menu-item"><div>...text...</div></li>
            const newElement = document.createElement("li");
            newElement.classList.add("menu-item");
        
            let appendedElement = menu.appendChild(newElement);
            appendedElement.innerHTML = `<div>${labels[counter]}</div>`;
        
            //adding listeners with path(URLs)
            appendedElement.addEventListener("click", event => {
                //in main.js
                changeMenuSections(paths[counter])
            })
        }
    }
    else {
        changeLocation(obj);
    }   
}

export function changeMenuSections(obj) {
    const menuItems = document.querySelector("#items");

    // fade out menu items
    menuItems.classList.replace("showPage", "fadePage");

    setTimeout(() => {
        // delete current menu items
        menuItems.innerHTML = "";
        
        // create new items
        createMenuOptions(obj)

        // fade in new items
        menuItems.classList.replace("fadePage" ,"showPage");
    }, 500);

    currentSection = Object.keys({obj})[0];
}