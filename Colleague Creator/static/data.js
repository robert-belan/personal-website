import {
    howCreateColleague,
    settings,
    extras,
    leaveThisWebsite,
    generateColleague,
    letsCreateMyOwn,
    mainMenu,
    appearance,
    history,
    skills,
    attributes,
    summary
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

    "Vytváření postavy": {
        "Nadpis": "Vytváření postavy",
        "Vzhled": appearance,
        "Historie": history,
        "Dovednosti": skills,
        "Vlastnosti": attributes,
        "Shrnutí": summary
    },

    // "Extras": {
    //     "Nadpis": "Extras",
    //     "Vznik webu": whyThisWebsite,
    //     "Log": records,
    //     "Zpět": mainMenu
    // }
}

export const creation_layout = `<div class="main-container">
<section id="model3d" class="model3d-container">
</section>

<section id="text" class="text-container">
</section>
</div>`

export const model3dHTML = '<iframe id="5f9ba68e-d40f-48d5-8d73-5095246e5dd9" src="https://app.vectary.com/viewer/v1/?model=5f9ba68e-d40f-48d5-8d73-5095246e5dd9&env=studio3&showInteractionPrompt=0" frameborder="0" width="100%" height="100%"></iframe>';
