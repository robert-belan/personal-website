// provides data for appearance section
import { fadeOutFadeIn, unavailableItemMessage } from "/src/helpers.js";

/**
 * Creates full UI (layout and items) of Appearance section.
 */
export function appearance() {
    /** If layout is not already shown - the second click on "Vzhled" button do nothing */
    if (!document.querySelector("#appearance")) {
        fadeOutFadeIn(createAppearanceTable, document.querySelector("#text"))
    }
}

/**
 * Used in: Character creation > Appearance section
 * Creates individual base layout for the section,
 */
function createAppearanceTable() {

    /** Section's backbone */
    const html = `
        <div id="appearance" class="appearance-table-container">
            <table id="appearance-table" class="appearance-table">
                <tbody></tbody>
            </table>
        </div>
        `;
    document.querySelector("#text").insertAdjacentHTML("beforeend", html);

    /** Generates individual appearance characteristic as table row*/
    appearanceData.forEach(row => {
        document.querySelector("#appearance-table > tbody").insertAdjacentHTML("beforeend", `
            <tr>
                <td class="prop-col">${row.prop}</td>
                <td class="arrow-col">&#10092;</td>
                <td class="option-col">${row.option}</td>
                <td class="arrow-col">&#10093;</td>
            <tr>`);
    });
    // Arrows characters: left - &#10092; and right - &#10093;
    // Other arrows: &#10229; and &#10230;


    /** After click on buttons with arrow, it tells you that you can not use it */
    document.querySelectorAll(".arrow-col").forEach(item => {
        /** After click shows that item is currently unavailable */
        item.addEventListener("click", unavailableItemMessage)
    })
}

/**
 * @type {object}
 * @property {string} prop - characteristic feature such as age, head, posture, condition etc.
 * @property {string} option - specific value, could be used HTML tags, used as second arg in insertAdjacentHTML()
 * 
 */
const appearanceData = [
    {
        prop: "Portrét",
        option: "<div class='logo-face-container'><img class='logo-face' src='/logos/miniface.png'></div>"
    },
    {
        prop: "Jméno",
        option: "Robert"
    },
    {
        prop: "Zdánlivý věk",
        option: "29"
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
        prop: "Postava",
        option: "hubená"
    },
    {
        prop: "Kondice",
        option: "chabá"
    },
    {
        prop: "Výška",
        option: "190 cm"
    },
    {
        prop: "Hlas",
        option: "mužský"
    },
    {
        prop: "Držení těla",
        option: "defenzivní"
    },
    {
        prop: "Styl oblečení",
        option: "neformální"
    },
]