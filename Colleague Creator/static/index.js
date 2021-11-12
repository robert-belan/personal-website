// index.js
// import { changeMenuSections } from "/static/main.js";
import { createNavigation } from "/static/main.js";
import { navigationData } from "/static/data.js";

// create main menu items
createNavigation(navigationData["Hlavní menu"], "#items");

// check for dark/light theme
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
}