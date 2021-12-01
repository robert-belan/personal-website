
// is linked to style.css variable "--ui-animation-duration", must be changed manually
export const afterAnimation = 300;


window.addEventListener("load", () => {
    showElement(document.body);
})






/**
 * Simple UI effect of fading element in
 * @param {Element} element - specify element that should be faded in (smoothly shown)
 */
export function showElement(element) {
    /** @description - There could be classes hidden or fade, this decide which will be replaced */
    if (!element.classList.replace("hidden", "show")) {
        element.classList.replace("fade", "show");
    };

    /** @description - Clears HTML code up */
    setTimeout(() => { element.classList.remove("show") }, afterAnimation);
}






// used when leaving site (for more seamless experience)
export function fadeOutAndDeleteContent(element) {

    if (element.classList.contains("show")) {
        element.classList.replace("show", "fade");
    } else {
        element.classList.add("fade");
    }

    setTimeout(() => {
        element.innerHTML = "";
    }, afterAnimation)
}


// first arg:   which menu items(in data.js) should be used
// second arg:  where to render new menu (css selector)
// forth arg:   change menu position, default No, else Yes
// third arg:   if generate menu title, default Yes, empty arg No
export function createNavigation(whichOne, targetID, title = "yes", changePos = "") {
    //where to create navigation
    const target = document.querySelector(`${targetID}`);

    //if there is menu items already, launch smooth animations
    if (!(target.innerHTML.length === 0)) {
        target.classList.replace("show", "fade")

        setTimeout(() => {
            target.innerHTML = "";
            title ? createMenuTitle(whichOne["Nadpis"], target) : {/*do nothing*/ };

            createMenuItems(whichOne, target);

            changePos ? changeMenuPosition() : {/*do nothing*/ };

            target.classList.replace("fade", "show")
        }, afterAnimation);
    }
    else {
        target.classList.add("show");
        title ? createMenuTitle(whichOne["Nadpis"], target) : {/*do nothing*/ };
        createMenuItems(whichOne, target);
    }
}

function changeMenuPosition() {
    const nav = document.querySelector("#menu");
    const itemStyles = document.querySelectorAll("#items label");
    nav.classList.replace("menu", "creation-menu");
    itemStyles.forEach(item => {
        item.classList.replace("mainmenu", "creationmenu");
    })
}

function createMenuTitle(itemTitle, target) {
    target.insertAdjacentHTML("afterbegin", `<h2>${itemTitle}</h2>`);
}

function createMenuItems(navItems, target) {
    for (let item in navItems) {
        // except Object there is String, that's why I use the IF statement
        if (typeof navItems[item] === "object") {

            // notes: .name is property of Function object!)
            target.insertAdjacentHTML("beforeend", `
                <li>
                    <input type=${navItems[item].toggle ? "radio" : "button"} name="btn-menu" id="btn-${navItems[item].func.name}">
                    <label for="btn-${navItems[item].func.name}" class="button mainmenu">${item}</label>
                </li>`);

            //adding listeners with path(URLs)
            document.querySelector(`#btn-${navItems[item].func.name}`).addEventListener("click", () => {
                navItems[item].func();
            });
        }
    }
}
