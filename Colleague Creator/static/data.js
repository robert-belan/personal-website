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

export const creation_layout = `<div id="main-container" class="main-container">
<section id="model3d" class="model3d-container">
</section>

<section id="text" class="text-container">
</section>
</div>`

export const model3dHTML = '<iframe id="5f9ba68e-d40f-48d5-8d73-5095246e5dd9" src="https://app.vectary.com/viewer/v1/?model=5f9ba68e-d40f-48d5-8d73-5095246e5dd9&env=studio3&showInteractionPrompt=0" frameborder="0" width="100%" height="100%"></iframe>';


export const appearanceData = [
    {
        prop: "Portrét",
        option: "Obrázek"
    },
    {
        prop: "Druh",
        option: "člověk"
    },
    {
        prop: "Pohlaví",
        option: "muž"
    },
    {
        prop: "Základ vzhledu",
        option: "udržovaný"
    },
    {
        prop: "Zdánlivý věk",
        option: "29"
    },
    {
        prop: "Kondice",
        option: "chabá"
    },
    {
        prop: "Výška",
        option: "vyšší"
    },
    {
        prop: "Hlava",
        option: "č. 22"
    },
    {
        prop: "Hlas",
        option: "mužský"
    },
    {
        prop: "Držení těla",
        option: "asertivní"
    },
    {
        prop: "Styl oblečení",
        option: "neformální"
    },
]

export const historyData = [
    {
        profile: "Ztracený a nalezený",
        description: "Vychováván v moravské hlavní metropoli v Brně. Spokojené dětsví vystřídala řada nešťastných studijních rozhodnutí, která jej dovedla k předčasnému zanechání studia vysoké školy. Vystřídal řadu zaměstnání. Po zkušenosti pomocného dělníka u vrtani studni se na nějakou dobu navlékl do uniformy a stal se jezdcem stáje Policie ČR. Po jeho vystřízlivění ze služby odešel, ale radost z vnikání do lidských domovů jej neopustila. Na pár let tak zakotvil na brněnských střechách ve službách brněnských ISP a přinášel lidem, hned po zdraví zdánlivě to nejcennější, přístup k internetu. Po letech nejistot a hledání se rozhodl slézt z brněnských střech a konečně si stoupnout na pevnou půdu pod nohama."
    },

    {
        profile: "Premiant",
        description: "Oba tvoji rodiče byli úspěšnými kapacitami svých oborů a to strojního inženýrství a aplikované matematiky. Jejich až patologická snaha být ve vše lepší než ostatní se tak zákonitě musela přenést i na tebe a tvé dva sourozencem. S vyznamenáním jsi vystudoval slavné MIT v americkém Massachusetts a měl pocit, že ti kromě diplomu u nohou leží i celý svět. V Googlu si tě různá oddělení prohazovala jako horký brambor. Po pár měsících si tě k sobě přetáhl Apple, aby se tě sám nakonec zbavil. Byl jsi moc dobrej a začal z tebe mít strach. Rodinné důvody tě donutily opustit divoký život v Silicon Valley a vrátit se domů."
    },
    
    {
        profile: "Poslední",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas sollicitudin. Nulla quis diam. In rutrum. Aliquam erat volutpat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Et harum quidem rerum facilis est et expedita distinctio. Aliquam erat volutpat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Fusce tellus. Duis pulvinar. Praesent in mauris eu tortor porttitor accumsan."
    }  
]
