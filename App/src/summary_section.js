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
        <h2 style="text-align: center; margin-bottom: 1rem;">Spuštění přerušeno</h2>
        <p>Nenaštvalo by Vás to? Hra, která se hned po spuštění přeruší. Než však budete pokračovat, dovolte mi menší doporučení. Vraťte se zpět do hlavního menu a pokračujte do sekce <b>Extras</b>. Pokud jsem Vás trochu zaujal, v Extras se o mně můžete dozvědět více a tak se lépe rozhodnout, zda se mnou pár kol zkusíte.</p>
        <p>Jestliže Vám to už stačilo, pak pokračujte:</p>
        `;
        getContacts(msg, "SpustitHru@RobertBelan.com");
    })
}


export const summaryData = `
    <h3 style="margin-bottom: 0.5em">Jméno:  Robert</h3>
    <h4>Věk:    29</h4>

<p>Ze zvolených kombinací dovedností se postava profiluje jako aspirující full&#8209;stackový vývojář. Pod vedením zkušeného hráče je schopna a ochotna velmi rychle dohnat chybějící technologie a nástroje. Vybrané dovednosti nejsou její alfou a omegou, ale "pouze" prostředky k dosahování cílů.</p>

<p>Z vybraných vlastností se postava hodí do jakéhokoliv kolektivu spoluhráčů, kteří si umí udělat srandu nejen z ostatních, ale i sami ze sebe. "Skrytou" touhou postavy je být součástí profesionálů a nadšenců, kteří dokáží nejen inspirovat, ale když je potřeba, tak i motivovat.</p>

<p>Tato ambiciózní postava je vhodná pro hráče, kteří nehledají dělníky programátory, ale spíše se ohlíží po disciplinovaných budoucích řemeslnících, kteří se neučí nové věci protože musí, ale protože to je součástí jejich vnitřního nastavení.</p>
`;