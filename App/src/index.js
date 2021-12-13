import { showElement, getContacts } from "/src/helpers.js";
import { mainMenu, navigationData } from "/src/main_menu.js";


/* Smoothly loads homepage */
window.addEventListener("load", () => {
    showElement(document.body);
})




/* Creates main menu */
mainMenu(navigationData["Hlavní menu"]);

/** After click on "Kontakty". Could be found in the bottom right corner of viewport or in its center. Depends on screen size*/
document.querySelector("#contacts").addEventListener("click", () => {
    const msg = `<p>Ať už se máte na srdci cokoliv, neváhejte mi napsat.</p>`;
    getContacts(msg);
})

/** Check for dark/light theme previous settings and/or set it. */
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
}