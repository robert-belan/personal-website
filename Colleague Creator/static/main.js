
// Global variables

// is linked to style.css variable "--ui-animation-duration", must be changed manually
export const animationDuration = 500; 


window.addEventListener("load", () => {
    showAllElements();
})

// used when window.onload is done (for more seamless experience)
function showAllElements() {
    document.body.classList.replace("hidden", "showPage");
}

// used when leaving site (for more seamless experience)
export function fadeAllElements() {
    document.body.classList.replace("showPage", "fadePage");
}


// first arg:   which menu-items(in data.js) should be used
// second arg:  where to render new menu (css selector)
// third arg:   if generate menu title, default Yes, empty arg No
// forth arg:   change menu position, default No, else Yes
export function createNavigation(whichOne, targetID, title="yes", changePos="") {
    //where to create navigation
    const target = document.querySelector(`${targetID}`);

    //if there is menu items already, launch smooth animations
    if (!(target.innerHTML.length === 0)) {
        target.classList.replace("showPage", "fadePage")

        setTimeout( () => {
            target.innerHTML = "";
            title ? createMenuTitle(whichOne["Nadpis"], target) : {/*do nothing*/};

            createMenuItems(whichOne, target);

            changePos ? changeMenuPosition() :  {/*do nothing*/};

            target.classList.replace("fadePage", "showPage")
        }, animationDuration);
    } 
    else {
        target.classList.add("showPage");     
        title ? createMenuTitle(whichOne["Nadpis"], target) : {/*do nothing*/};
        createMenuItems(whichOne, target);
    }
}

function changeMenuPosition() {
    const nav = document.querySelector("#menu");
    nav.classList.replace("menu", "creation-menu");
}

function createMenuTitle(itemTitle, target) {
    target.insertAdjacentHTML("afterbegin", `<li>${itemTitle}</li>`);
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
    
        //creating new <li>...buttons...</li>
        target.insertAdjacentHTML("beforeend", `
        <li>
            <input type="radio" name="btn-focus" id="btn-focus${counter}">
            <label for="btn-focus${counter}" class="grandButton mainMenu-btn">${labels[counter]}</label>
        </li>`);

        //adding listeners with path(URLs)
        document.querySelector(`#btn-focus${counter}`).addEventListener("click", event => {
            //in main.js
            // event.preventDefault();
            // changeMenuSections(paths[counter])
            executor(paths[counter]);
        })
    }
}