import {
    howCreateColleague,
    settings,
    extras,
    leaveThisWebsite,
    generateColleague,
    letsCreateMyOwn,
    mainMenu
} from "/static/menuFunctions.js"


export const navigationData = {
    "Hlavní menu": {
        "Nadpis": "Hlavní menu",
        "Založit novou postavu": howCreateColleague,
        "Nastavení": settings,
        "Extras": extras,
        "Opustit hru": leaveThisWebsite
    },

    "Jak vytvořit postavu?": {
        "Nadpis": "Jak chcete vytvořit postavu?",
        "Zkusím štěstí": generateColleague,
        "Zvolím si sám": letsCreateMyOwn,
        "Zpět": mainMenu
    },

    // "Vytváření postavy": {
    //     "Nadpis": "Vytváření postavy",
    //     "Vzhled": appearance,
    //     "Historie": history,
    //     "Dovednosti": skills,
    //     "Vlastnosti": attributes,
    //     "Shrnutí": sumamry
    // },

    // "Extras": {
    //     "Nadpis": "Extras",
    //     "Vznik webu": whyThisWebsite,
    //     "Log": records,
    //     "Zpět": mainMenu
    // }
}