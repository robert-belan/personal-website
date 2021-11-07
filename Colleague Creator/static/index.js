// index.js
// import { changeMenuSections } from "/static/main.js";
import { createNavigation } from "/static/main.js";
import { navigationData } from "/static/data.js";

// running code
// changeMenuSections(mainMenuItems);
// console.log(navigationData["Hlavní menu"]);

createNavigation(navigationData["Hlavní menu"], "#items");