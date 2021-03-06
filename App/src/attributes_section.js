import { fadeOutFadeIn, unavailableItemMessage } from "/src/helpers.js";


export function attributes() {
    if (!document.querySelector("#attributes")) {
        fadeOutFadeIn(createAttributes, document.querySelector("#text"));
    }
}

function createAttributes() {
    const destination = document.querySelector("#text");

    // creates foundation layout code
    const attributes_layout = `
    <div id="attributes" class="attributes-container">
        <div id="attributes-boxes" class="attributes-boxes"></div>
        <h3>Popis vlastnosti</h3>
        <div id="attributes-description" class="attributes-description"></div>
    </div>
    `
    destination.insertAdjacentHTML("beforeend", attributes_layout);

    createAttributesBoxes();
}

function createAttributesBoxes() {

    const attributes_boxes_container = document.querySelector("#attributes-boxes");
    const attributes_description_container = document.querySelector("#attributes-description")


    attributes_description_container.insertAdjacentHTML("beforeend", `
    <div class="notice-msg">
    <p>Vyberte vlastnost, kterou chcete zobrazit.</p>
    <br>
    <p>[X] značí zvolené</p>
    <p>&nbsp;[ ] značí nezvolené</p>
    </div>`
    );

    // generates attributes boxes
    for (let counter = 0; counter < attributesData.length; counter++) {
        attributes_boxes_container.insertAdjacentHTML("beforeend", `
            <div id="attribute-box-${counter}" class="attribute-box">
                <p>${attributesData[counter].name}</p>
                <div id="selectBtn${counter}" class="${attributesData[counter].selected ? "check-mark checked" : "check-mark unchecked"}" >&#10005;</div >
            </div>
        `)

        document.querySelector(`#selectBtn${counter}`).addEventListener("click", unavailableItemMessage);

        // attach listener to "button"  
        const attribute = document.querySelector(`#attribute-box-${counter}`);
        attribute.addEventListener("click", () => {
            //smooth changing effect
            if (!document.querySelector(`#attribute-no-${counter}`)) {
                fadeOutFadeIn(() => {
                    attributes_description_container.insertAdjacentHTML("beforeend", `
                    <div id="attribute-no-${counter}">
                        <h3 class="in-description-header">${attributesData[counter].name}</h3>
                        <p>${attributesData[counter].description}</p>
                            <ul class="bonuses">${getAttributeDescription(counter)}</ul>
                    </div>
                    `);
                }, attributes_description_container);
            }
        });
    }
}


function getAttributeDescription(selectedAttribute) {
    const attribute = attributesData[selectedAttribute];
    const result = []

    for (let counter = 0; counter < attribute.bonus.length; counter++) {
        result.push(`<li> ${attribute.bonus[counter]}</li> `)
    }

    return result.join("");
}



export const attributesData = [
    {
        name: "Hlava otevřená",
        description: "V útlém předškolním věku jsi letěl na konci závodu na kolech přes řidítka a hlavou jsi přistál na betonovém obrubníku. Hlava se zahojila, ale otevřená mysl pro nové a neotřelé myšlenky a technologie (naštěstí) ne.",
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
        name: "Extrovert",
        description: "Rád na sebe strháváš pozornost a řádně si to užíváš.",
        bonus: ["+4 % Komunikace za každou novou úroveň", "-2 Pochopení od okolních introvertů"],
        selected: 0
    },

    {
        name: "Dlouhé vedení",
        description: "Ne vždy všechno pochopíš na první dobrou. Občas uniká drobný detail, který brání uzavření okruhu. Výsledek však bývá lépe ukotven v paměti.",
        bonus: ["+5 Pochopení", "-4 Trpělivost spoluhráčů v nejbližším okolí"],
        selected: 1
    },

    {
        name: "Nikdo není dokonalý",
        description: "A už vůbec ne tato postava.",
        bonus: ["+1 Sebereflexe"],
        selected: 1
    },

    {
        name: "Rétor",
        description: "Své myšlenky prezentuješ s chirurgickou přesností. Míla Rozner tiše závidí.",
        bonus: ["+4 Komunikace", "+2 Pochopení okolních spoluhráčů"],
        selected: 0
    },

    {
        name: "Abstinující, spící",
        description: "Propařil sis svoje. Teď je čas i na práci.",
        bonus: ["+5 Spánek", "+100 Energie (v kombinaci s Hlava rodiny)", "-4 Pochopení ostatních spoluhráčů"],
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
        bonus: ["+2 Obrana proti návštěvě JIP"],
        selected: 1
    },

    {
        name: "Savá houba",
        description: "Baví tě co děláš a nové informace proto nasáváš jako suchá houba vodu.",
        bonus: ["+2 Vědění"],
        selected: 1
    },

    {
        name: "Prokrastinátor",
        description: "Kdyby ti platili za množství odložené práce na neurčito, jsi milionář.",
        bonus: ["+25 % Odložení účinku jiného bonusu na neurčito"],
        selected: 0
    },
    // TODO: Doplnit funkci zobrazení bonusu až po nějaké chvíli. Samozřejmě někdy, až se ti bude chtít. *mrk*

    {
        name: "Skromný pisálek",
        description: "Než ze sebe něco vymáčkneš tak to trvá, ale není to snad tak špatný.",
        bonus: ["+2 Psaný projev"],
        selected: 1
    },

    {
        name: "Skryté&#42;",
        description: "*vlastnost se odhalí v průběhu hry",
        bonus: [],
        selected: 0
    },

    {
        name: "Skryté&#42;",
        description: "*vlastnost se odhalí v průběhu hry",
        bonus: [],
        selected: 0
    },

    {
        name: "Skryté&#42;",
        description: "*vlastnost se odhalí v průběhu hry",
        bonus: [],
        selected: 0
    },


]