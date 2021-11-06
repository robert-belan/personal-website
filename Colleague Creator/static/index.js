// index.js

import { createMenuOptions } from "/static/main.js";

//values contain paths(URLs)
const mainMenuitems = {
    "Založit novou postavu": "/create",
    "Nastavení": "/settings",
    "Extras": "/extras",
    "Log": "/log",
    "Opustit hru": "/quit"
}

// running code
createMenuOptions(mainMenuitems);