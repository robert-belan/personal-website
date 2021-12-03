import {
    howCreateColleague,
    leaveThisWebsite,
    generateColleague,
    letsCreateMyOwn,
    mainMenu,
} from "/static/menuFunctions.js"

import { extras } from "/static/extras_section.js"
import { settings } from "/static/settings_section.js"
import { appearance } from "/static/appearance_section.js"
import { history } from "/static/history_section.js"
import { skills } from "/static/skills_section.js"
import { attributes } from "/static/attributes_section.js"
import { summary } from "/static/summary_section.js"
import { exit } from "/static/exit_section.js"



export const navigationData = {
    "Hlavní menu": {
        "Nadpis": "Hlavní menu",
        "Založit novou postavu": {
            func: howCreateColleague,
            toggle: 0
        },
        "Nastavení": {
            func: settings,
            toggle: 0
        },
        "Extras": {
            func: extras,
            toggle: 0
        },
        "Opustit hru": {
            func: leaveThisWebsite,
            toggle: 0
        }
    },

    "Jak vytvořit postavu?": {
        "Nadpis": "Jak chcete vytvořit postavu?",
        "Zkusím štěstí": {
            func: generateColleague,
            toggle: 0
        },
        "Zvolím si sám": {
            func: letsCreateMyOwn,
            toggle: 0
        },
        "Zpět": {
            func: mainMenu,
            toggle: 0
        }
    },

    "Vytváření postavy": {
        "Nadpis": "",
        "Vzhled": {
            func: appearance,
            toggle: 1
        },
        "Historie": {
            func: history,
            toggle: 1
        },
        "Dovednosti": {
            func: skills,
            toggle: 1
        },
        "Vlastnosti": {
            func: attributes,
            toggle: 1
        },
        "Shrnutí": {
            func: summary,
            toggle: 1
        }
    },

    "Ukončit hru": {
        "Nadpis": "Jste si jisti?",
        "Ano": {
            func: exit,
            toggle: 0
        },
        "Ne": {
            func: mainMenu,
            toggle: 0
        }
    },
}


export const creation_layout = `<div id="main-container" class="main-container">
<section id="model3d" class="model3d-container">
</section>

<section id="text" class="text-container">
</section>
</div>`

// Vectary API - https://vectary.github.io/viewer-api/#/parameters
export const model3dHTMLData = `
<iframe id="bdd97310-66b0-4ae9-afaa-c2b8ebbd09a5" 
        src="https://www.vectary.com/viewer/v1/?model=bdd97310-66b0-4ae9-afaa-c2b8ebbd09a5&env=studio3" 
        frameborder="0" 
        width="100%" 
        height="100%"
        noAr="1"
        showPreloader="0"
        minAzimuth="-20"
        maxAzimuth="20"
        ></iframe>`;
// minPolar = "10"
// minPolar = "10"