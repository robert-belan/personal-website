window.addEventListener("load", () => {
    showAllElements();
})

// used when window.onload is done (for more seamless experience)
function showAllElements() {
    document.body.classList.replace("hidden", "showPage");
}

// used when leaving site (for more seamless experience)
function fadeAllElements() {
    document.body.classList.replace("showPage", "fadePage");
}

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


// export function getFetch(url, target) {
//     fetch(url)
//         .then( response => response.text())
//         .then( html => {
//             target.classList.add("hidden");
//             target.innerHTML = "";
//             target.innerHTML = html;
//             target.classList.replace("hidden", "showPage");
//         })
// }



//first argument should be object from navigationData, second ccs selector, ex. #items
export function createNavigation(whichOne, targetID) {
    //where to create navigation
    const target = document.querySelector(`${targetID}`);

    //if there is menu items already, launch smooth animations
    if (!(target.innerHTML.length === 0)) {
        target.classList.replace("showPage", "fadePage")

        setTimeout( () => {
            target.innerHTML = "";
            createMenuTitle(whichOne["Nadpis"], target);
            createMenuItems(whichOne, target);
            target.classList.replace("fadePage", "showPage")
        }, 500);
    } 
    else {
        target.classList.add("showPage");
        createMenuTitle(whichOne["Nadpis"], target);
        createMenuItems(whichOne, target);
    }
}

function createMenuTitle(itemTitle, target) {
    target.insertAdjacentHTML("afterbegin", `<li class="menu-title">${itemTitle}</li>`);
}

//execute function references in navigationData
//used by: createMenuItems
function executor(func) {
    return func();
}

function createMenuItems(dataObject, target) {
    let labels = Object.keys(dataObject);
    let paths = Object.values(dataObject);
    
    for (let counter = 1; counter < paths.length; counter++) {
    
        //creating new <li class="menu-item"><div>...text...</div></li>
        const item = document.createElement("li");
        item.classList.add("menu-item");
    
        let appendedNewItem = target.appendChild(item);
        appendedNewItem.insertAdjacentHTML("beforeend", `<div>${labels[counter]}</div>`);

        //adding listeners with path(URLs)
        appendedNewItem.addEventListener("click", event => {
            //in main.js
            event.preventDefault();
            // changeMenuSections(paths[counter])
            executor(paths[counter]);
        })
    }
}

