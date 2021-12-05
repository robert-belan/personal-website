// provides data for appearance section
import { fadeOutFadeIn, unavailableItemMessage } from "/helpers.js";

export function appearance() {
    fadeOutFadeIn(createAppearanceTable, document.querySelector("#text"))
}

function createAppearanceTable() {

    const html = `<div class="appearance-table-container">
            <table id="appearance-table" class="appearance-table">
                <tbody></tbody>
            </table>
        </div>
        `;
    document.querySelector("#text").insertAdjacentHTML("beforeend", html);

    // generates table rows
    appearanceData.forEach(row => {
        document.querySelector("#appearance-table > tbody").insertAdjacentHTML("beforeend", `
            <tr>
                <td class="prop-col">${row.prop}</td>
                <td class="arrow-col">&#10092;</td>
                <td class="option-col">${row.option}</td>
                <td class="arrow-col">&#10093;</td>
            <tr>`);
    });
    // Other arrows: &#10229; and &#10230;


    /* After click on buttons with arrow, it tells you that you can not use it */
    document.querySelectorAll(".arrow-col").forEach(item => {
        item.addEventListener("click", unavailableItemMessage)
    })
}

/**
 * @type { {prop: string, option: string} } appearanceData
 */
const appearanceData = [
    {
        prop: "Portrét",
        option: "<div class='logo-face-container'><img class='logo-face' src='/logos/face.png'></div>"
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