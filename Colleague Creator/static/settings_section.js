import { createNavigation, mainMenu } from "/static/menuFunctions.js";

// moves user from main menu to submenu - Settings
export function settings() {
    createNavigation(settingsData["Nastavení"]);

    window.onload = () => {
        const darkmodeButton = document.querySelector("#btn-darkmode");
        darkmodeButton.addEventListener("click", () => {
            darkmode();
        })
    }
}



// Dark / Light toggle

/**
 * Understood and copied from: 
 * @author Luke Lowrey
 * https://lukelowrey.com/css-variable-theme-switcher/
 */
function darkmode() {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
    window.localStorage.setItem('theme', targetTheme);
    console.info(`info: ${targetTheme} theme setting has been saved to origin's local storage`)

}

const settingsData = {
    "Nastavení": {
        "Nadpis": "Nastavení",
        "Dark Mode": {
            func: darkmode,
            toggle: 0
        },
        "Zpět": {
            func: mainMenu,
            toggle: 0
        }
    }
}