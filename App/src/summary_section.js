import { fadeOutFadeIn, getContacts } from "/src/helpers.js";

export function summary() {
    if (!document.querySelector("#summary")) {
        fadeOutFadeIn(createSummary, document.querySelector("#text"));
    }
}

function createSummary() {
    const sumaSumarum = document.querySelector("#text");
    sumaSumarum.insertAdjacentHTML("beforeend", `
        <div id="summary" class="summary">
            ${summaryData}
            <div class="btn-letsPlayAGame">
                <input type="button" name="btn-menu" id="btn-letsPlayAGame">
                <label for="btn-letsPlayAGame" class="button creationmenu">Spustit hru</label>
            </div>
        </div>
    `)

    document.querySelector("#btn-letsPlayAGame").addEventListener("click", () => {
        const msg = `
        <p>Pokud jste čekali něco akčnějšího, jste asi zklamaní. Zde v tuto chvíli hra končí. Pokud jsem Vás však trochu zaujal, vraťte se zpět do hlavního menu a pokračujte do sekce Extras. Tam se můžete dozvědět více a nakonec uvidíte, třeba se rozhodnete se mnou pár kol zkusit.</p>
        <p>Možná Vám to už stačilo a chcete mi rovnou napsat. Níže je pár užitečných kontaktů. Stejné odkazy lze zobrazit kliknutím na "Kontakty" zcela dole vpravo nebo uprostřed.</p>
        `;
        getContacts(msg);
    })
}



export const summaryData = `
    <h3 style="margin-bottom: 0.5em">Jméno:  Robert</h3>
    <h4>Věk:    29</h4>

<p>Ze zvolených kombinací dovedností se postava profiluje jako aspirující full&#8209;stackový vývojář. Pod vedením zkušeného hráče je schopna a ochotna velmi rychle dohnat chybějící technologie a nástroje. Vybrané dovednosti nejsou její alfou a omegou, ale "pouze" prostředky k dosahování cílů.</p>

<p>Z vybraných vlastností se postava hodí do jakéhokoliv kolektivu spoluhráčů, kteří si umí udělat srandu nejen z ostatních, ale i sami ze sebe. "Skrytou" touhou postavy je být součástí profesionálů a nadšenců, kteří dokáží nejen inspirovat, ale když je potřeba, tak i motivovat.</p>

<p>Tato ambiciózní postava je vhodná pro hráče, kteří nehledají dělníky programátory, ale spíše se ohlíží po disciplinovaných budoucích řemeslnících, kteří se neučí nové věci protože musí, ale protože to je součástí jejich vnitřního nastavení.</p>
`;