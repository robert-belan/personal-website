
import { showElement } from "./helpers.js";
import { mainMenu, navigationData } from "./menuFunctions.js";

/* Smoothly loads homepage */
window.addEventListener("load", () => {
    showElement(document.body);
})

/* Creates main menu */
mainMenu(navigationData["Hlavní menu"]);

/* Check for dark/light theme previous settings and/or set it. */
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
}