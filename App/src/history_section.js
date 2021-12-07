import { fadeOutFadeIn } from "/src/helpers.js";


export function history() {
    if (!document.querySelector("#history-container")) {
        fadeOutFadeIn(createHistory, document.querySelector("#text"))
    }
}


function createHistory() {

    const history_layout = `
    <div id="history-container" class="history-container">
        <div id="profile" class="profile">
            <ul></ul>
        </div>
        <div id="description" class="description"></div>
    </div>
    `;

    document.querySelector("#text").insertAdjacentHTML("beforeend", history_layout);

    const list = document.querySelector("#profile ul");
    const description = document.querySelector("#description");

    for (let counter = 0; counter < historyData.length; counter++) {
        list.insertAdjacentHTML("beforeend", `
            <li>
                <input type="button" name="btn-profile" id="btn-profile${counter}">
                <label for="btn-profile${counter}" class="button historyprofilemenu">${historyData[counter].profile}</label>
            </li>`);
    }

    description.insertAdjacentHTML("beforeend", `<p>${historyData[0].description}</p>`);

    profileToggle();
}



function profileToggle() {

    // const profile = document.querySelector("#profile");
    const destination = document.querySelector("#description");
    const profiles = document.querySelectorAll("#profile li");

    for (let counter = 0; counter < profiles.length; counter++) {
        profiles[counter].addEventListener("click", () => {

            fadeOutFadeIn(() => {
                destination.insertAdjacentHTML("beforeend", `
                <p>${historyData[counter].description}</p>`
                )
            }, destination)
        })
    }
}



const historyData = [
    {
        profile: "Ztracený a nalezený",
        description: `
        <h2>Ztracený a nalezený (<b>zvolené</b>)</h2>
        <p>Spokojené dětství vystřídala řada nešťastných studijních rozhodnutí, která jej dovedla k předčasnému zanechání studia vysoké školy. Vystřídal řadu zaměstnání. Po zkušenosti pomocného dělníka u vrtani studni se na nějakou dobu navlékl do uniformy a stal se jezdcem stáje Policie ČR. Po jeho vystřízlivění ze služby odešel, ale radost z vnikání do lidských domovů jej neopustila. Na pár let tak zakotvil na brněnských střechách ve službách různých ISP a přinášel lidem, hned po zdraví zdánlivě to nejcennější - přístup k internetu. Po letech nejistot a hledání se rozhodl ze střech slézt a konečně si stoupnout na pevnou půdu pod nohama.</p>`
    },

    {
        profile: "Premiant",
        description: `
        <h2>Premiant (<b>nelze zvolit</b>)</h2>
        <p>Oba jeho rodiče byli úspěšnými kapacitami svých oborů a to strojního inženýrství a aplikované matematiky. Jejich až patologická snaha být ve vše lepší než ostatní se tak zákonitě musela přenést i na něj a jeho dva sourozence. S vyznamenáním vystudoval slavné MIT a měl pocit, že mu kromě diplomu u nohou leží i celý svět. V Googlu si ho různá oddělení prohazovala jako horký brambor. Po pár měsících ho k sobě přetáhl Apple. Rodinné důvody ho donutily opustit divoký život v Silicon Valley, vrátit se domů a zkusit štěstí v jeho moravské podobě.</p>`
    },

    {
        profile: "Snílek",
        description: `
        <h2>Snílek (<b>nelze zvolit</b>)</h2>
        <p>Stěží ukončil povinnou školní docházku. Předčasné úmrtí otce a neuspokojivá finanční situace jej vyhnala do ulic hledat práci v době, kdy se měl věnovat přípravě k přijímacím zkouškám na střední školu. Po několika letech se rodinná situace uklidnila, ale přestože práce u pásu jeho rodině naplní žaludky, už ne jeho touhu po vyšším uplatnění. Rozhodl se změnit zaměstnání. Přečetl si, že v IT berou všechny. Nemá co ztratit. Bez přípravy a po hlavě vráží do dveří všech dveří IT doufaje, že mu někdo otevře a vše ho naučí.</p>`
    }
]