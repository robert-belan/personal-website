
import { showElement } from "/static/helpers.js";
import { createNavigation } from "/static/menuFunctions.js";
import { navigationData } from "/static/data.js";

/* Smoothly loads homepage */
window.addEventListener("load", () => {
    showElement(document.body);
})

/* Creates main menu */
createNavigation(navigationData["Hlavní menu"], "#items");

/* Check for dark/light theme previous settings and/or set it. */
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
}