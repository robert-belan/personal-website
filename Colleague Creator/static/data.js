import {
    howCreateColleague,
    leaveThisWebsite,
    generateColleague,
    letsCreateMyOwn,
    mainMenu,
    attributes,
    summary,
    exit,
} from "/static/menuFunctions.js"

import { extras } from "/static/extras_section.js"
import { settings } from "/static/settings_section.js"
import { appearance } from "/static/appearance_section.js"
import { history } from "/static/history_section.js"
import { skills } from "/static/skills_section.js"

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
<iframe id="5f9ba68e-d40f-48d5-8d73-5095246e5dd9" 
        src="https://app.vectary.com/viewer/v1/?model=5f9ba68e-d40f-48d5-8d73-5095246e5dd9&env=studio3&showInteractionPrompt=0" 
        frameborder="0" 
        width="100%" 
        height="100%"
        noAr="1"
        showPreloader="0"
        ></iframe>`;










// it is possible to include html tags in strings for forrmating
export const attributesData = [
    {
        name: "Hlava otevřená",
        description: "V útlém předškolním věku jsi letěl na konci závodu na kolech přes řidítka a hlavou jsi přistál betonovém obrubníku. Hlava se zahojila, ale otevřená mysl pro nové a neotřelé myšlenky a technologie (naštěstí) ne.",
        bonus: ["Zvědavost +3"],
        selected: 1
    },

    {
        name: "Co je v tý krabici?!",
        description: "Jestli je uvnitř krabice Schrödingerovic mrtvá kočka nebo snad i něco horšího tě vlastně vůbec nezajímá. Zásadně se snažíš uvažovat <i>out-of-the-box</i>.",
        bonus: ["Bonus neznámý. Jen <a href='https://www.csfd.cz/film/2671-sedm/prehled/'target='_blank'>Brad Pitt</a> spatřil, co je uvnitř krabice."],
        selected: 1
    },

    {
        name: "Dlouhé vedení",
        description: "Ne vždy všechno pochopíš na první dobrou. Občas uniká drobný detail, který brání uzavření okruhu. Výsledek však bývá lépe ukotven v paměti.",
        bonus: ["+5 pochopení", "-4 trpělivost spoluhráčů v nejbližším okolí"],
        selected: 1
    },

    {
        name: "Nikdo není dokonalý",
        description: "A už vůbec ne tato postava.",
        bonus: ["+1 Sebereflexe"],
        selected: 1
    },

    {
        name: "Abstinující, spící",
        description: "Propařil sis svoje. Teď je čas i na práci.",
        bonus: ["+5 Spánek, +100 Energie (v kombinaci s Hlava rodiny)", "-4 Pochopení okolních spoluhráčů"],
        selected: 1
    },

    {
        name: "Hlava rodiny",
        description: "Jsou všude ...",
        bonus: ["+3 Zodpovědnost", "+3 Radost", "-NaN&sup2; Spánku", "+3 Šedý vlasy/den"],
        selected: 1
    },

    {
        name: "Očipovaný",
        description: "Čipy přijímáš zásadně od Applu a Pfizeru.",
        bonus: ["+12 Obrana proti návštěvě JIP"],
        selected: 1
    },

    {
        name: "Savá houba",
        description: "Baví tě co děláš a tak nový informace nasáváš jako suchá houba vodu.",
        bonus: ["+2 Vědění"],
        selected: 1
    },

    {
        name: "Rétor",
        description: "Své myšlenky prezentuješ s chirurgickou přesností. Míla Rozner tiše závidí.",
        bonus: ["+4 Komunikace", "+2 Pochopení okolních spoluhráčů"],
        selected: 0
    },

    {
        name: "Extrovert",
        description: "Rád na sebe strháváš pozornost a řádně si to užíváš.",
        bonus: ["+8 % Komunikace za každou novou úroveň", "-2 Pochopení od okolních introvertů"],
        selected: 0
    },

    {
        name: "Prokrastinátor",
        description: "Kdyby ti platili za množství odložené práce na neurčito, jsi milionář.",
        bonus: ["+25 % odložení účinku jiného bonusu na neurčito"],
        selected: 0
    },
    // TODO: Doplnit funkci zobrazení bonusu až po nějaké chvíli. Samozřejmě někdy, až se ti bude chtít. *mrk*

    {
        name: "Skromný pisálek",
        description: "Než ze sebe něco vymáčkneš tak to trvá, ale není to tak špatný.",
        bonus: ["+7 Psaný projev"],
        selected: 1
    },

    {
        name: "Nápad na další dovednost",
        description: "Ticho po pěšině...",
        bonus: ["-něco Neznámý bonus"],
        selected: 0
    },


]

export const summaryData = `
    <h3>Jméno:  Robert</h3>
    <h4>Věk:    29</h4>

<p>Ze zvolených kombinací dovedností se postava profiluje jako aspirující full&#8209;stackový vývojář. Pod vedením zkušeného hráče je schopna a ochotna velmi rychle dohnat chybějící technologie a nástroje. Vybrané dovednosti nejsou její alfou a omegou, ale "pouze" prostředky k dosahování cílů.</p>

<p>Z vybraných vlastností se postava hodí do jakéhokoliv kolektivu spoluhráčů, kteří si umí udělat srandu nejen z ostatních, ale i sami ze sebe. "Skrytou" touhou postavy je být součástí profesionálů a nadšenců, kteří dokáží nejen inspirovat, ale když je potřeba, tak i motivovat.</p>

<p>Tato ambiciózní postava je vhodná pro hráče, kteří nehledají "obyčejné" dělníky, ale spíše se ohlíží po disciplinovaných budoucích řemeslnících, kteří se neučí nové věci protože musí, ale protože to je součástí jejich vnitřního nastavení.</p>
`;



