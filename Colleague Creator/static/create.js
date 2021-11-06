// create.js

import { createMenuOptions } from "/static/main.js";

const createItems = {
    "Zkusím štěstí": "/getLucky",
    "Zvolím si sám ": "/godMode",
    "Zpět": "/"
}

//running code
createMenuOptions(createItems);