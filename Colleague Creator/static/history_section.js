import { fadeInFadeOut } from "/static/helpers.js";


export function history() {
    fadeInFadeOut(createHistory, document.querySelector("#text"))
}



function createHistory() {

    const history_layout = `
    <div class="history-container">
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

            fadeInFadeOut(() => {
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
        <h2>Ztracený a nalezený</h2>
        <p>Spokojené dětství vystřídala řada nešťastných studijních rozhodnutí, která jej dovedla k předčasnému zanechání studia vysoké školy. Vystřídal řadu zaměstnání. Po zkušenosti pomocného dělníka u vrtani studni se na nějakou dobu navlékl do uniformy a stal se jezdcem stáje Policie ČR. Po jeho vystřízlivění ze služby odešel, ale radost z vnikání do lidských domovů jej neopustila. Na pár let tak zakotvil na brněnských střechách ve službách různých ISP a přinášel lidem, hned po zdraví zdánlivě to nejcennější, přístup k internetu. Po letech nejistot a hledání se rozhodl ze střech slézt a konečně si stoupnout na pevnou půdu pod nohama.</p>`
    },

    {
        profile: "Premiant",
        description: `
        <h2>Premiant (nelze zvolit)</h2>
        <p>Oba tvoji rodiče byli úspěšnými kapacitami svých oborů a to strojního inženýrství a aplikované matematiky. Jejich až patologická snaha být ve vše lepší než ostatní se tak zákonitě musela přenést i na tebe a tvé dva sourozencem. S vyznamenáním jsi vystudoval slavné MIT v americkém Massachusetts a měl pocit, že ti kromě diplomu u nohou leží i celý svět. V Googlu si tě různá oddělení prohazovala jako horký brambor. Po pár měsících si tě k sobě přetáhl Apple, aby se tě sám nakonec zbavil. Byl jsi moc dobrej a začal z tebe mít strach. Rodinné důvody tě donutily opustit divoký život v Silicon Valley a vrátit se domů.</p>`
    },

    {
        profile: "Poslední",
        description: `
        <h2>Poslední (nelze zvolit)</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas sollicitudin. Nulla quis diam. In rutrum. Aliquam erat volutpat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Et harum quidem rerum facilis est et expedita distinctio. Aliquam erat volutpat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Fusce tellus. Duis pulvinar. Praesent in mauris eu tortor porttitor accumsan.</p>`
    }
]